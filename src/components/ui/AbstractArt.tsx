import { ImageTone } from "@/lib/types";
import { cx } from "@/lib/utils";

/**
 * ABSTRACT EDITORIAL ART
 * -----------------------------------------------------------------------
 * A deterministic, on-brand generative artwork used wherever a real
 * photograph has not been supplied. Given the same `seed` it always
 * renders the same composition, so an article's art is stable across
 * builds while every article looks distinct.
 *
 * The composition layers, back to front:
 *   1. a diagonal gradient ground in the requested brand `tone`
 *   2. three soft, blurred colour orbs drifting through the frame
 *   3. two or three flowing bezier "ribbons" (the Flourish gesture)
 *   4. the four-point flourish star + a few concentric rings
 *   5. scattered light motes for depth
 *   6. a vignette and a whisper of print grain on top
 *
 * It is a pure server component — no hooks, no client JS — so it stays
 * fully static-renderable.
 */

type Palette = {
  ground: [string, string, string];
  orbs: [string, string, string];
  ribbon: string;
  accent: string;
};

const PALETTES: Record<ImageTone, Palette> = {
  plum: {
    ground: ["#180d2e", "#3a1f5c", "#6b3f9e"],
    orbs: ["#b94fab", "#7b4bb0", "#9dc727"],
    ribbon: "#d3a5e0",
    accent: "#f0d67a",
  },
  burgundy: {
    ground: ["#360a32", "#7a1e6c", "#b94fab"],
    orbs: ["#e07bc6", "#8c227c", "#9dc727"],
    ribbon: "#f4b6e2",
    accent: "#f6efd2",
  },
  gold: {
    ground: ["#20300b", "#4c6810", "#9dc727"],
    orbs: ["#c3e05a", "#5a7a14", "#f4ecc9"],
    ribbon: "#e6f0c8",
    accent: "#ffffff",
  },
  rose: {
    ground: ["#3f5811", "#7fa02f", "#cfe39b"],
    orbs: ["#eef6d6", "#a9c95a", "#ffffff"],
    ribbon: "#f2f8de",
    accent: "#ffffff",
  },
  charcoal: {
    ground: ["#100b16", "#241f21", "#4a4245"],
    orbs: ["#6b3f9e", "#9dc727", "#5b5257"],
    ribbon: "#9a8fae",
    accent: "#9dc727",
  },
};

/** FNV-1a string hash → 32-bit unsigned int. */
function hashString(input: string): number {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < input.length; i++) {
    h = Math.imul(h ^ input.charCodeAt(i), 16777619);
  }
  return h >>> 0;
}

/** Small, fast seeded PRNG. Returns a function producing floats in [0, 1). */
function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const W = 800;
const H = 600;

interface AbstractArtProps {
  seed: string;
  tone?: ImageTone;
  className?: string;
}

export default function AbstractArt({ seed, tone = "plum", className }: AbstractArtProps) {
  const palette = PALETTES[tone] ?? PALETTES.plum;
  const hash = hashString(seed || "flourish");
  const rand = mulberry32(hash);
  const uid = `aa${hash.toString(36)}`;

  const range = (min: number, max: number) => min + rand() * (max - min);

  // --- background gradient angle -------------------------------------------
  const angle = Math.round(range(95, 165));

  // --- soft colour orbs --------------------------------------------------
  const orbs = Array.from({ length: 3 }, (_, i) => ({
    cx: range(0.08, 0.92) * W,
    cy: range(0.06, 0.9) * H,
    r: range(0.28, 0.52) * H,
    fill: palette.orbs[i % palette.orbs.length],
    opacity: range(0.4, 0.72),
  }));

  // --- flowing ribbons -------------------------------------------------
  const ribbonCount = 2 + Math.round(rand());
  const ribbons = Array.from({ length: ribbonCount }, (_, i) => {
    const base = range(0.2, 0.85) * H;
    const amp = range(70, 190);
    const y = () => base + (rand() - 0.5) * amp;
    const d = `M ${-100} ${y()} C ${W * 0.22} ${y()}, ${W * 0.4} ${y()}, ${W * 0.55} ${
      base + (rand() - 0.5) * amp
    } S ${W * 0.9} ${y()}, ${W + 120} ${y()}`;
    return {
      d,
      width: range(46, 120),
      opacity: range(0.1, 0.22) - i * 0.02,
    };
  });

  // --- flourish star + rings -------------------------------------------
  const starX = range(0.55, 0.86) * W;
  const starY = range(0.16, 0.44) * H;
  const starScale = range(2.6, 4.4);
  const rings = Array.from({ length: 3 }, (_, i) => ({
    r: range(60, 110) + i * range(40, 70),
    opacity: 0.16 - i * 0.04,
  }));

  // --- scattered light motes -----------------------------------------
  const motes = Array.from({ length: 16 }, () => ({
    cx: rand() * W,
    cy: rand() * H,
    r: range(1.2, 4.2),
    opacity: range(0.12, 0.5),
  }));

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      className={cx("h-full w-full", className)}
      aria-hidden="true"
      role="presentation"
    >
      <defs>
        <linearGradient id={`${uid}-ground`} gradientTransform={`rotate(${angle} 0.5 0.5)`}>
          <stop offset="0%" stopColor={palette.ground[0]} />
          <stop offset="55%" stopColor={palette.ground[1]} />
          <stop offset="100%" stopColor={palette.ground[2]} />
        </linearGradient>

        <radialGradient id={`${uid}-vignette`} cx="50%" cy="42%" r="75%">
          <stop offset="0%" stopColor="#000000" stopOpacity="0" />
          <stop offset="72%" stopColor="#000000" stopOpacity="0" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.42" />
        </radialGradient>

        <filter id={`${uid}-blur`} x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="52" />
        </filter>

        <filter id={`${uid}-grain`} x="0%" y="0%" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="2"
            stitchTiles="stitch"
            result="n"
          />
          <feColorMatrix in="n" type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.5 0" />
        </filter>
      </defs>

      {/* 1. ground */}
      <rect width={W} height={H} fill={`url(#${uid}-ground)`} />

      {/* 2. soft orbs */}
      <g filter={`url(#${uid}-blur)`}>
        {orbs.map((o, i) => (
          <circle key={i} cx={o.cx} cy={o.cy} r={o.r} fill={o.fill} opacity={o.opacity} />
        ))}
      </g>

      {/* 3. flowing ribbons */}
      <g fill="none" stroke={palette.ribbon} strokeLinecap="round">
        {ribbons.map((r, i) => (
          <path key={i} d={r.d} strokeWidth={r.width} opacity={Math.max(0.05, r.opacity)} />
        ))}
      </g>

      {/* 4. flourish star + concentric rings */}
      <g
        transform={`translate(${starX} ${starY})`}
        fill="none"
        stroke={palette.accent}
        strokeLinejoin="round"
      >
        {rings.map((ring, i) => (
          <circle key={i} r={ring.r} strokeWidth={1.1} opacity={ring.opacity} />
        ))}
        <path
          d="M0 -30c2 16 8 24 30 28 -22 4 -28 12 -30 28 -2 -16 -8 -24 -30 -28 22 -4 28 -12 30 -28Z"
          transform={`scale(${starScale})`}
          strokeWidth={1.1 / starScale}
          opacity={0.55}
        />
      </g>

      {/* 5. light motes */}
      <g fill={palette.accent}>
        {motes.map((m, i) => (
          <circle key={i} cx={m.cx} cy={m.cy} r={m.r} opacity={m.opacity} />
        ))}
      </g>

      {/* 6. vignette + grain */}
      <rect width={W} height={H} fill={`url(#${uid}-vignette)`} />
      <rect width={W} height={H} filter={`url(#${uid}-grain)`} opacity={0.08} />
    </svg>
  );
}
