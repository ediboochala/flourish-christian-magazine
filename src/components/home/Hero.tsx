import Link from "next/link";
import Image from "next/image";

/**
 * HERO — the printed Flourish cover, rebuilt for the web: a centered
 * "FLOURISH" wordmark, the cover woman filling the right of the frame,
 * a "Season of Renewal" headline block lower-left, and the brand ribbon
 * closing the panel.
 */

/** A spray of lilac (Syringa) blooms for the hero's bottom-left corner —
 *  line-art in the brand palette rather than a stock photo, so it reads as
 *  part of the cover's illustrated system. Each stem is topped with a
 *  cone-shaped panicle built from many small four-petal florets. */
function FloralCorner({ className, style }: { className?: string; style?: React.CSSProperties }) {
  /** One four-petal lilac floret. */
  const floret = (x: number, y: number, r: number, fill: string, opacity: number) => (
    <g transform={`translate(${x} ${y})`} opacity={opacity}>
      {[0, 90, 180, 270].map((a) => (
        <ellipse key={a} cx="0" cy={-r} rx={r * 0.62} ry={r} fill={fill} transform={`rotate(${a})`} />
      ))}
      <circle r={r * 0.34} fill="var(--color-lilac-light)" />
    </g>
  );

  /** A cone of florets — dense at the base, tapering to a point at the top.
   *  Deterministic offsets keep it organic without randomness at runtime. */
  const panicle = (ox: number, oy: number, h: number, w: number, fill: string, opacity: number) => {
    const rows = 5;
    const nodes: React.ReactNode[] = [];
    for (let row = 0; row < rows; row++) {
      const t = row / (rows - 1); // 0 at tip, 1 at base
      const rowY = oy - h * (1 - t);
      const spread = (w / 2) * t;
      const count = 1 + row;
      for (let i = 0; i < count; i++) {
        const fx = count === 1 ? 0 : (i / (count - 1) - 0.5) * 2; // -1..1
        const jitter = ((row * 7 + i * 13) % 5) - 2;
        const x = ox + fx * spread + jitter;
        const y = rowY + (((row * 5 + i * 11) % 6) - 3);
        const size = 3.1 + t * 1.9;
        nodes.push(
          <g key={`${row}-${i}`}>{floret(x, y, size, fill, opacity)}</g>
        );
      }
    }
    return <g>{nodes}</g>;
  };

  return (
    <svg viewBox="0 0 220 210" aria-hidden="true" className={className} style={style} fill="none">
      {/* stems */}
      <path d="M40 210 C 38 168 52 138 48 96" stroke="var(--color-forest)" strokeWidth="3" strokeLinecap="round" opacity="0.85" />
      <path d="M92 210 C 98 172 82 148 96 108" stroke="var(--color-forest)" strokeWidth="2.75" strokeLinecap="round" opacity="0.7" />
      <path d="M138 210 C 134 176 150 152 134 120" stroke="var(--color-forest)" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />

      {/* leaves — the broad heart-shaped leaf of the lilac */}
      <path d="M48 150 C 26 146 14 128 9 110 C 33 108 51 120 58 140 Z" fill="var(--color-forest)" opacity="0.7" />
      <path d="M96 162 C 118 158 130 140 135 122 C 111 120 96 132 90 154 Z" fill="var(--color-forest)" opacity="0.5" />
      <path d="M46 104 C 27 101 16 86 11 71 C 32 69 48 80 54 97 Z" fill="var(--color-forest)" opacity="0.55" />

      {/* panicles */}
      {panicle(48, 96, 74, 52, "var(--color-lilac)", 0.95)}
      {panicle(96, 108, 58, 42, "var(--color-plum-light)", 0.9)}
      {panicle(134, 120, 46, 34, "var(--color-lilac)", 0.78)}
    </svg>
  );
}

function LeafCrest({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 48" aria-hidden="true" className={className} fill="none">
      <path d="M32 46V20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path
        d="M32 24C32 24 24 22 18 15C12 8 13 2 13 2C13 2 22 3 28 10C34 17 32 24 32 24Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M32 24C32 24 40 22 46 15C52 8 51 2 51 2C51 2 42 3 36 10C30 17 32 24 32 24Z"
        fill="currentColor"
        opacity="0.7"
      />
      <path
        d="M32 34C32 34 27 33 23 28C19 23 20 19 20 19C20 19 25 20 29 25C33 30 32 34 32 34Z"
        fill="currentColor"
        opacity="0.55"
      />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="grain-overlay relative overflow-hidden bg-plum">
      {/* Cover photograph — the woman sits to the right of the frame, so
          the crop is held toward her while a plum wash keeps the left
          side dark enough to carry the headline. */}
      <div className="absolute inset-0">
        <div className="animate-kenburns absolute inset-0">
          <Image
            src="/images/site/hero-renewal.png"
            alt="A woman in a purple headwrap writing in her Bible beside vases of purple flowers"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[70%_32%] sm:object-[75%_center] lg:object-[78%_center]"
          />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(67,39,100,0.94) 0%, rgba(67,39,100,0.82) 30%, rgba(67,39,100,0.42) 58%, rgba(67,39,100,0.14) 100%)",
          }}
        />
        <div
          className="absolute inset-x-0 top-0 h-44"
          style={{
            background: "linear-gradient(to bottom, rgba(45,25,72,0.72) 0%, transparent 100%)",
          }}
        />
        <div className="aurora-backdrop opacity-40" />

        <FloralCorner
          className="animate-sway pointer-events-none absolute bottom-0 left-0 h-40 w-40 sm:h-48 sm:w-48 lg:h-56 lg:w-56"
          style={{ transformOrigin: "bottom left" }}
        />
      </div>

      <div className="relative z-[2] mx-auto flex min-h-[72vh] max-w-7xl flex-col px-6 pb-16 pt-10 sm:min-h-[82vh] sm:pt-12 lg:px-10">
        {/* Issue line */}
        <div className="animate-fade-in flex items-center justify-between gap-4 font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-gold-light sm:text-xs">
          <span>Spring 2024 &nbsp;&bull;&nbsp; Issue No.&nbsp;1</span>
          <span className="hidden text-right leading-tight text-white/60 sm:block">
            Online publication of
            <br />
            M.F.M Women Foundation Florida
          </span>
        </div>

        {/* Masthead */}
        <div
          className="animate-fade-up mt-8 flex flex-col items-center text-center"
          style={{ animationDelay: "80ms" }}
        >
          <h1 className="relative w-full max-w-[36rem] px-4 drop-shadow-[0_2px_24px_rgba(0,0,0,0.35)]">
            <Image
              src="/images/flourish-wordmark.png"
              alt="Flourish"
              width={2115}
              height={743}
              priority
              unoptimized
              className="h-auto w-full"
            />
          </h1>
          <div className="mt-4 flex w-full max-w-2xl items-center justify-center gap-3">
            <span className="hidden h-px flex-1 bg-gradient-to-r from-transparent to-gold-light/70 sm:block" />
            <p className="mx-auto max-w-[16rem] text-balance font-serif text-[13px] italic leading-snug text-white/85 sm:max-w-none sm:text-lg">
              Inspiring Christian women through{" "}
              <em className="text-gold-light" style={{ fontVariationSettings: '"WONK" 1' }}>
                faith, stories, testimonies,
              </em>{" "}
              and community.
            </p>
            <span className="hidden h-px flex-1 bg-gradient-to-l from-transparent to-gold-light/70 sm:block" />
          </div>
        </div>

        {/* Season of Renewal — pushed toward the lower-left, as on the cover */}
        <div
          className="animate-fade-up mt-auto max-w-full pt-10 sm:max-w-lg"
          style={{ animationDelay: "220ms" }}
        >
          <p
            className="font-serif text-2xl italic text-gold-light sm:text-3xl"
            style={{ fontVariationSettings: '"WONK" 1' }}
          >
            A Season of
          </p>
          <p
            className="font-serif font-semibold uppercase leading-[0.9] text-white [text-shadow:0_2px_20px_rgba(0,0,0,0.3)]"
            style={{ fontSize: "clamp(2.75rem, 1.8rem + 4vw, 4.75rem)", letterSpacing: "0.01em" }}
          >
            Renewal
          </p>
          <p className="mt-4 max-w-full font-sans text-[15px] leading-relaxed text-white/85 sm:max-w-md sm:text-base">
            Embracing new beginnings with faith and purpose — a page, a prayer,
            and a story at a time.
          </p>

          {/* Scripture roundel, echoing the cover's badge */}
          <div className="mt-8 flex items-center gap-5">
            <div className="relative grid h-32 w-32 flex-shrink-0 place-items-center rounded-full border border-white/40 bg-white/10 text-center backdrop-blur-sm">
              <LeafCrest className="absolute -top-3 h-6 w-auto text-gold-light" />
              <div className="px-3">
                <p className="font-sans text-[10px] font-semibold uppercase leading-tight tracking-[0.14em] text-white">
                  You are far
                  <br />
                  above rubies
                </p>
                <p className="mt-1 font-sans text-[9px] font-semibold uppercase tracking-[0.16em] text-gold-light">
                  Proverbs 31:10
                </p>
              </div>
            </div>
            <p className="max-w-[11rem] font-serif text-sm italic leading-snug text-white/75">
              You were never meant to shrink. You were made to flourish.
            </p>
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/magazine"
              className="btn-shine group/link inline-flex items-center justify-center gap-2 rounded-full bg-gold-light px-7 py-3.5 font-sans text-xs font-semibold uppercase tracking-[0.1em] text-plum transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:scale-[0.97]"
            >
              Read the Latest Issue
              <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1">
                &rarr;
              </span>
            </Link>
            <Link
              href="/#subscribe"
              className="inline-flex items-center justify-center rounded-full border border-white/60 px-7 py-3.5 font-sans text-xs font-semibold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-plum active:translate-y-0 active:scale-[0.97]"
            >
              Subscribe for Free
            </Link>
          </div>
        </div>
      </div>

      {/* Brand ribbon */}
      <div className="relative z-[2] border-t border-gold-light/25 bg-plum px-4 py-3.5 text-center">
        <p className="mx-auto max-w-[18rem] font-sans text-[9px] font-semibold uppercase leading-relaxed tracking-[0.06em] text-gold-light sm:max-w-none sm:text-xs sm:tracking-[0.3em]">
          Faith &bull; Purpose &bull; Connection &bull; Encouragement
        </p>
        <p className="mx-auto mt-1 max-w-[20rem] font-sans text-[9px] uppercase leading-relaxed tracking-[0.04em] text-white/75 sm:max-w-none sm:text-xs sm:tracking-[0.2em]">
          Rooted in Christ. Growing Together. Flourishing in Purpose.
        </p>
      </div>
    </section>
  );
}
