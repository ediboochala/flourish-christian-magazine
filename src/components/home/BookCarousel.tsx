"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { cx } from "@/lib/utils";

/** How long each spread stays open before the page turns. */
const HOLD_MS = 5000;

interface BookCarouselProps {
  /** Left page (photo) of each article's spread, rendered on the server. */
  lefts: React.ReactNode[];
  /** Right page (story) of each article's spread. */
  rights: React.ReactNode[];
  labels: string[];
}

type Turn = { dir: "next" | "prev"; to: number };

/**
 * An open book whose pages turn over, one article per spread.
 *
 * Turning forward on a two-page layout: the current right page becomes a
 * "leaf" hinged at the spine that rotates over to the left. Its back face
 * is the next spread's left page, and the next spread's right page waits
 * underneath, so when the leaf lands the next spread is complete. Turning
 * back mirrors this from the left page. On the single-page phone layout,
 * the whole page turns away from its left edge to reveal the next one.
 *
 * Autoplay pauses while the book is hovered or has keyboard focus, while
 * the tab is hidden, and when the visitor pauses it. It never starts for
 * visitors who prefer reduced motion, and their manual turns are instant.
 */
export default function BookCarousel({ lefts, rights, labels }: BookCarouselProps) {
  const count = lefts.length;
  const [index, setIndex] = useState(0);
  const [turn, setTurn] = useState<Turn | null>(null);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [twoPage, setTwoPage] = useState(true);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const wide = window.matchMedia("(min-width: 768px)");
    const sync = () => {
      setReducedMotion(motion.matches);
      setTwoPage(wide.matches);
    };
    sync();
    motion.addEventListener("change", sync);
    wide.addEventListener("change", sync);
    const onVisibility = () => setHidden(document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      motion.removeEventListener("change", sync);
      wide.removeEventListener("change", sync);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  const turnTo = useCallback(
    (to: number, dir: Turn["dir"]) => {
      if (turn || to === index) return;
      if (reducedMotion) setIndex(to);
      else setTurn({ dir, to });
    },
    [turn, index, reducedMotion]
  );

  const next = useCallback(() => turnTo((index + 1) % count, "next"), [turnTo, index, count]);
  const prev = useCallback(() => turnTo((index - 1 + count) % count, "prev"), [turnTo, index, count]);

  const finishTurn = () => {
    if (!turn) return;
    setIndex(turn.to);
    setTurn(null);
  };

  const playing = !paused && !hovered && !focused && !hidden && !reducedMotion && count > 1;

  useEffect(() => {
    if (!playing || turn) return;
    const t = setTimeout(next, HOLD_MS);
    return () => clearTimeout(t);
  }, [playing, turn, next]);

  if (count === 0) return null;

  // What lies flat underneath while a leaf is turning.
  const baseLeft = turn && (turn.dir === "prev" || !twoPage) ? turn.to : index;
  const baseRight = turn && (turn.dir === "next" || !twoPage) ? turn.to : index;
  const upcoming = (index + 1) % count;

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
          <div className="book-stage">
            {/* Lays out the next spread invisibly so its photo has loaded
                before the page turns onto it. */}
            {count > 1 && (
              <div className="book-preload" aria-hidden="true" inert>
                {lefts[upcoming]}
              </div>
            )}

            <div
              className="book-base"
              role="group"
              aria-roledescription="slide"
              aria-label={`${(turn?.to ?? index) + 1} of ${count}: ${labels[turn?.to ?? index]}`}
            >
              {lefts[baseLeft]}
              {rights[baseRight]}
            </div>

            <div className="book-gutter" aria-hidden="true" />

            {turn && (
              <div
                key={`${index}-${turn.to}`}
                className={cx(
                  "book-leaf",
                  !twoPage ? "book-leaf--single" : turn.dir === "next" ? "book-leaf--next" : "book-leaf--prev"
                )}
                aria-hidden="true"
                inert
                onAnimationEnd={(e) => {
                  if (e.target === e.currentTarget) finishTurn();
                }}
              >
                <div className="book-leaf-face book-leaf-face--front">
                  {!twoPage ? (
                    <div className="grid grid-cols-1">
                      {lefts[index]}
                      {rights[index]}
                    </div>
                  ) : turn.dir === "next" ? (
                    rights[index]
                  ) : (
                    lefts[index]
                  )}
                  <span className="book-leaf-shade" />
                </div>
                <div className="book-leaf-face book-leaf-face--back">
                  {twoPage && (turn.dir === "next" ? lefts[turn.to] : rights[turn.to])}
                  <span className="book-leaf-shade" />
                </div>
              </div>
            )}
          </div>
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
            {labels.map((label, i) => {
              const active = i === (turn?.to ?? index);
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => turnTo(i, i > index ? "next" : "prev")}
                  aria-label={`Go to article ${i + 1}: ${label}`}
                  aria-current={active || undefined}
                  className={cx(
                    "relative h-2 overflow-hidden rounded-full transition-all duration-500",
                    active ? "w-10 bg-plum/15" : "w-2 bg-plum/25 hover:bg-plum/50"
                  )}
                >
                  {active && (
                    <span
                      key={`${index}-${playing}-${!!turn}`}
                      className={cx(
                        "book-progress absolute inset-y-0 left-0 bg-plum",
                        (!playing || turn) && "w-full"
                      )}
                      style={playing && !turn ? { animationDuration: `${HOLD_MS}ms` } : undefined}
                    />
                  )}
                </button>
              );
            })}
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
