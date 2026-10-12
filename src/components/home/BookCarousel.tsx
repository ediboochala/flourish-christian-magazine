"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { cx } from "@/lib/utils";

/** How long each spread stays open before the next one slides in. */
const HOLD_MS = 9000;

interface BookCarouselProps {
  /** One open-book spread per article, rendered on the server. */
  slides: React.ReactNode[];
  labels: string[];
}

/**
 * Slides a row of open-book spreads slowly from right to left inside a
 * fixed book cover. A copy of the first spread sits after the last one so
 * the loop always moves forward: once that copy has slid into view, the
 * track snaps back to the real first spread with the transition switched
 * off, so the jump can't be seen.
 *
 * Autoplay pauses while the book is hovered or has keyboard focus, while
 * the tab is hidden, and when the visitor pauses it. It never starts for
 * visitors who prefer reduced motion.
 */
export default function BookCarousel({ slides, labels }: BookCarouselProps) {
  const count = slides.length;
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const pendingPrev = useRef(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    const onVisibility = () => setHidden(document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      mq.removeEventListener("change", sync);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  const next = useCallback(() => {
    setAnimate(true);
    setIndex((i) => (i >= count ? i : i + 1));
  }, [count]);

  const prev = useCallback(() => {
    if (index === 0) {
      // Jump (invisibly) to the copy of the first spread, then slide back.
      pendingPrev.current = true;
      setAnimate(false);
      setIndex(count);
      return;
    }
    setAnimate(true);
    setIndex((i) => i - 1);
  }, [index, count]);

  // Turn the transition back on a frame after an invisible snap.
  useEffect(() => {
    if (animate) return;
    let inner = 0;
    const outer = requestAnimationFrame(() => {
      inner = requestAnimationFrame(() => {
        setAnimate(true);
        if (pendingPrev.current) {
          pendingPrev.current = false;
          setIndex(count - 1);
        }
      });
    });
    return () => {
      cancelAnimationFrame(outer);
      cancelAnimationFrame(inner);
    };
  }, [animate, count]);

  const playing = !paused && !hovered && !focused && !hidden && !reducedMotion && count > 1;

  useEffect(() => {
    if (!playing) return;
    const t = setTimeout(next, HOLD_MS);
    return () => clearTimeout(t);
  }, [playing, index, next]);

  if (count === 0) return null;

  const active = index % count;

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured articles"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setFocused(false);
      }}
    >
      <div className="book">
        <div
          className="book-block"
          onTouchStart={(e) => {
            touchStartX.current = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            if (touchStartX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchStartX.current;
            touchStartX.current = null;
            if (Math.abs(dx) < 50) return;
            if (dx < 0) next();
            else prev();
          }}
        >
          <div
            className={cx("book-track", animate && "book-track--animate")}
            style={{ transform: `translateX(-${index * 100}%)` }}
            aria-live={playing ? "off" : "polite"}
            onTransitionEnd={(e) => {
              if (e.target !== e.currentTarget || e.propertyName !== "transform") return;
              if (index >= count) {
                setAnimate(false);
                setIndex(0);
              }
            }}
          >
            {[...slides, slides[0]].map((slide, i) => {
              const isClone = i === count;
              const isCurrent = i === index;
              return (
                <div
                  key={isClone ? "clone" : i}
                  className="book-slide"
                  role={isClone ? undefined : "group"}
                  aria-roledescription={isClone ? undefined : "slide"}
                  aria-label={isClone ? undefined : `${i + 1} of ${count}: ${labels[i]}`}
                  aria-hidden={isClone || !isCurrent || undefined}
                  inert={!isCurrent}
                >
                  {slide}
                </div>
              );
            })}
          </div>
          <div className="book-gutter" aria-hidden="true" />
        </div>
      </div>

      {count > 1 && (
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous article"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-plum/20 text-plum transition-colors hover:border-plum hover:bg-plum hover:text-white"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>

          <div className="flex items-center gap-2">
            {labels.map((label, i) => (
              <button
                key={i}
                type="button"
                onClick={() => {
                  setAnimate(true);
                  setIndex(i);
                }}
                aria-label={`Go to article ${i + 1}: ${label}`}
                aria-current={i === active || undefined}
                className={cx(
                  "relative h-2 overflow-hidden rounded-full transition-all duration-500",
                  i === active ? "w-10 bg-plum/15" : "w-2 bg-plum/25 hover:bg-plum/50"
                )}
              >
                {i === active && (
                  <span
                    key={`${index}-${playing}`}
                    className={cx("book-progress absolute inset-y-0 left-0 bg-plum", !playing && "w-full")}
                    style={playing ? { animationDuration: `${HOLD_MS}ms` } : undefined}
                  />
                )}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Next article"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-plum/20 text-plum transition-colors hover:border-plum hover:bg-plum hover:text-white"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>

          {!reducedMotion && (
            <button
              type="button"
              onClick={() => setPaused((p) => !p)}
              aria-label={paused ? "Play slideshow" : "Pause slideshow"}
              className="ml-2 flex h-10 w-10 items-center justify-center rounded-full text-charcoal-soft transition-colors hover:text-plum"
            >
              {paused ? <Play className="h-4 w-4" aria-hidden="true" /> : <Pause className="h-4 w-4" aria-hidden="true" />}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
