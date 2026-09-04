import Link from "next/link";
import { ChevronDown } from "lucide-react";
import PlaceholderImage from "@/components/ui/PlaceholderImage";

// Headline words are split into individual spans so each can rise into
// place on its own beat rather than the whole line arriving at once —
// a small cascade that reads as considered rather than mechanical.
const HEADLINE_LEAD = ["A", "Season", "of"];
const HEADLINE_DELAY_START_MS = 150;
const HEADLINE_WORD_STEP_MS = 90;

export default function Hero() {
  return (
    <section className="grain-overlay relative overflow-hidden bg-plum">
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-kenburns absolute inset-0">
          <PlaceholderImage
            image={{
              src: "/images/site/hero.jpg",
              alt: "Warm light falling along a path through tall forest trees",
              tone: "plum",
              credit: "Photo via Unsplash",
            }}
            priority
          />
        </div>
        {/* Richer, multi-stop vignette than a flat two-tone fade, so the
            lower third stays fully legible while the upper field keeps
            some depth instead of flattening to solid plum. */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, var(--color-plum) 0%, rgba(67,39,100,0.82) 38%, rgba(67,39,100,0.55) 65%, rgba(67,39,100,0.32) 100%)",
          }}
        />
        <div className="aurora-backdrop opacity-70" />

        {/* A single decorative flourish, gesturing at the magazine's
            name, drawn low-opacity so it reads as texture rather than
            illustration and never competes with the copy. */}
        <svg
          viewBox="0 0 160 480"
          aria-hidden="true"
          className="animate-sway pointer-events-none absolute -right-4 bottom-0 hidden h-[70%] w-auto text-gold-light opacity-[0.16] sm:block"
          style={{ transformOrigin: "bottom center" }}
        >
          <path
            d="M40 480 C 10 420, 90 380, 55 320 C 20 260, 110 220, 70 150 C 40 95, 100 60, 75 0"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M55 320 C 75 300, 100 295, 110 270"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
          <ellipse cx="112" cy="266" rx="16" ry="7" transform="rotate(-25 112 266)" fill="currentColor" />
          <path
            d="M70 150 C 45 135, 20 135, 8 115"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
          <ellipse cx="6" cy="112" rx="15" ry="6.5" transform="rotate(20 6 112)" fill="currentColor" />
          <path
            d="M75 60 C 100 45, 125 45, 138 25"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
          <ellipse cx="140" cy="22" rx="14" ry="6" transform="rotate(-15 140 22)" fill="currentColor" />
        </svg>
      </div>

      <div className="relative z-[2] mx-auto flex min-h-[86vh] max-w-7xl flex-col justify-end px-6 pb-24 pt-40 sm:pb-28 lg:px-10">
        <span className="hero-rule h-[2px] w-14 bg-gradient-to-r from-gold-light to-transparent" />

        <h1 className="text-display mt-6 max-w-3xl font-serif text-white [text-shadow:0_2px_28px_rgba(0,0,0,0.28)]">
          {HEADLINE_LEAD.map((word, i) => (
            <span
              key={word}
              className="animate-fade-up inline-block"
              style={{ animationDelay: `${HEADLINE_DELAY_START_MS + i * HEADLINE_WORD_STEP_MS}ms` }}
            >
              {word}&nbsp;
            </span>
          ))}
          <span
            className="text-shimmer animate-fade-up inline-block italic"
            style={{
              animationDelay: `${HEADLINE_DELAY_START_MS + HEADLINE_LEAD.length * HEADLINE_WORD_STEP_MS}ms`,
              fontVariationSettings: '"WONK" 1',
            }}
          >
            Renewal
          </span>
        </h1>

        <div
          className="animate-fade-up mt-7 flex max-w-xl items-start gap-3"
          style={{ animationDelay: "620ms" }}
        >
          <svg
            viewBox="0 0 32 24"
            aria-hidden="true"
            className="mt-1 h-5 w-6 flex-shrink-0 text-gold-light"
          >
            <path
              d="M8 0C3.6 0 0 3.6 0 8c0 4 3 7.3 6.8 7.9L4 24h5.2L13 12.4C13.6 10.7 14 9 14 7.5 14 3.4 11.3 0 8 0Z"
              fill="currentColor"
            />
            <path
              d="M24 0c-4.4 0-8 3.6-8 8 0 4 3 7.3 6.8 7.9L20 24h5.2L29 12.4c.6-1.7 1-3.4 1-4.9C30 3.4 27.3 0 24 0Z"
              fill="currentColor"
            />
          </svg>
          <p className="min-w-0 flex-1 font-serif text-lg italic leading-relaxed text-white/90 sm:text-xl">
            Inspiring Christian women through faith, stories, testimonies, and community.
          </p>
        </div>

        <p
          className="animate-fade-up mt-5 max-w-xl font-sans text-base leading-relaxed text-white/80 sm:text-lg"
          style={{ animationDelay: "720ms" }}
        >
          There is a season for everything under heaven, and this one is yours. Whether
          you&apos;re standing at the edge of a new chapter or quietly waiting on a promise,
          Flourish was created to walk with you, page by page, story by story, prayer by prayer.
          Welcome home.
        </p>

        <div
          className="animate-fade-up mt-9 flex flex-col gap-4 sm:flex-row"
          style={{ animationDelay: "820ms" }}
        >
          <Link
            href="/magazine"
            className="btn-shine group/link inline-flex items-center justify-center gap-2 rounded-full bg-gold-light px-8 py-4 font-sans text-sm font-semibold uppercase tracking-[0.08em] text-plum transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:scale-[0.97]"
          >
            Read the Latest Issue
            <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1">
              →
            </span>
          </Link>
          <Link
            href="/write-for-flourish"
            className="inline-flex items-center justify-center rounded-full border border-white/60 px-8 py-4 font-sans text-sm font-semibold uppercase tracking-[0.08em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-plum active:translate-y-0 active:scale-[0.97]"
          >
            Subscribe for Free
          </Link>
        </div>
      </div>

      <Link
        href="#scripture-banner"
        aria-label="Scroll to explore Flourish"
        className="animate-fade-in absolute bottom-6 left-1/2 z-[2] hidden -translate-x-1/2 flex-col items-center gap-1 text-white/60 transition-colors duration-300 hover:text-white sm:flex"
        style={{ animationDelay: "1100ms" }}
      >
        <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.24em]">
          Explore
        </span>
        <ChevronDown className="h-4 w-4 animate-bounce" aria-hidden="true" />
      </Link>
    </section>
  );
}
