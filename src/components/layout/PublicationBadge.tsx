import Link from "next/link";

/**
 * A small, persistent "seal" identifying Flourish as the online publication
 * of M.F.M Women Foundation Florida. Fixed to the top-center of the
 * viewport — not inside <Header>, so it never competes with the nav,
 * search, or hamburger button for space — and stays put while scrolling,
 * on every page. Positioned below the header's tallest (unscrolled) height
 * so it's never covered by it.
 *
 * Horizontal centering is `left-1/2` + `-translate-x-1/2` — but since the
 * infinite float animation (`.publication-badge` in globals.css) sets its
 * own `transform` on every frame, that -50% offset is baked into the
 * keyframes too, or centering would break the instant the animation starts
 * (an animation's transform fully replaces the element's static one, not
 * merges with it). The Tailwind classes here still matter for the
 * prefers-reduced-motion case, where the animation is turned off and the
 * static transform applies normally.
 *
 * Gets a one-time fade-in plus that slow continuous float; both are
 * neutralized under prefers-reduced-motion, same as the site's other
 * decorative animations.
 *
 * Styled as frosted glass — a translucent gradient sheen over a strong
 * backdrop-blur, rather than a solid card — so whatever's scrolling
 * underneath (the plum hero, an ivory page, the charcoal footer) shows
 * through softly instead of being hidden behind an opaque pill.
 */
export default function PublicationBadge() {
  return (
    <Link
      href="/about"
      aria-label="Flourish: an online publication of M.F.M Women Foundation Florida"
      className="publication-badge fixed left-1/2 top-[126px] z-40 flex w-[98px] -translate-x-1/2 flex-col items-center gap-0.5 rounded-xl border border-white/40 bg-[linear-gradient(150deg,rgba(255,255,255,0.38),rgba(255,255,255,0.1))] px-2 py-1.5 text-center shadow-[0_8px_28px_rgba(67,39,100,0.2)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-white/70 hover:shadow-[0_14px_34px_rgba(67,39,100,0.28)] sm:top-32 sm:w-[122px] sm:px-3 sm:py-2.5"
    >
      <svg viewBox="0 0 24 24" className="h-2.5 w-2.5 flex-shrink-0 text-gold-light drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)] sm:h-3 sm:w-3" aria-hidden="true">
        <path
          d="M12 3C12 3 6.5 7.5 6.5 13a5.5 5.5 0 0 0 11 0C17.5 7.5 12 3 12 3Z"
          fill="currentColor"
          opacity="0.95"
        />
        <path d="M12 21V10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
      <span className="font-serif text-[7px] italic leading-[1.2] text-white drop-shadow-[0_1px_3px_rgba(67,39,100,0.55)] sm:text-[9px] sm:leading-snug">
        An online publication of M.F.M Women Foundation Florida
      </span>
    </Link>
  );
}
