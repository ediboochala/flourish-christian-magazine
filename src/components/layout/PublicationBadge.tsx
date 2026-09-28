import Link from "next/link";

/**
 * A small, persistent "seal" identifying Flourish as the online publication
 * of M.F.M Women Foundation Florida. Fixed to the top-right corner of the
 * viewport — not inside <Header>, so it never competes with the nav,
 * search, or hamburger button for space — and stays put while scrolling,
 * on every page. Positioned just below the header's tallest (unscrolled)
 * height so it's never covered by it.
 *
 * Gets a one-time fade-in plus a slow continuous float (see
 * `.publication-badge` in globals.css); both are neutralized under
 * prefers-reduced-motion, same as the site's other decorative animations.
 */
export default function PublicationBadge() {
  return (
    <Link
      href="/about"
      aria-label="Flourish: an online publication of M.F.M Women Foundation Florida"
      className="publication-badge fixed right-3 top-[76px] z-40 flex w-[136px] flex-col items-center gap-1 rounded-2xl border border-gold/40 bg-ivory/90 px-3 py-2.5 text-center shadow-[0_4px_16px_rgba(67,39,100,0.16)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:shadow-[0_10px_24px_rgba(67,39,100,0.22)] sm:right-5 sm:top-20 sm:w-[156px] sm:px-4 sm:py-3 lg:right-8"
    >
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 flex-shrink-0 text-gold" aria-hidden="true">
        <path
          d="M12 3C12 3 6.5 7.5 6.5 13a5.5 5.5 0 0 0 11 0C17.5 7.5 12 3 12 3Z"
          fill="currentColor"
          opacity="0.9"
        />
        <path d="M12 21V10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
      <span className="font-serif text-[9.5px] italic leading-snug text-plum sm:text-[10.5px]">
        An online publication of M.F.M Women Foundation Florida
      </span>
    </Link>
  );
}
