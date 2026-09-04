import { ImageTone, NatureMotif } from "@/lib/types";
import { cx } from "@/lib/utils";

/**
 * ABSTRACT EDITORIAL ART — botanical edition
 * -----------------------------------------------------------------------
 * A deterministic, on-brand generative artwork used wherever a real
 * photograph has not been supplied. Given the same `seed` it always
 * renders the same composition, so an article's art is stable across
 * builds while every article looks distinct.
 *
 * The scene is a quiet, backlit garden — layered, back to front:
 *   1. a soft gradient sky in the requested brand `tone`
 *   2. slow "canopy light" orbs and a low horizon glow
 *   3. faint god-rays raking from one corner ("the light of the world")
 *   4. a shadowed sprig behind, then the hero botanical sprig
 *   5. a two-tier grass horizon with a few upright blades
 *   6. the Star of Bethlehem accent, drifting pollen, a vignette
 *
 * The botanical motif (olive, wheat, vine, lily, palm, fern) is chosen
 * from the content — an explicit `motif`, else keywords in the `seed`,
 * else the `tone`. Each motif carries a Christian association.
 *
 * Animation is CSS-only, scoped per instance, and fully disabled under
 * `prefers-reduced-motion`. No SVG filters are used, so many instances
 * can share a page cheaply; print-grain is added by the parent wrapper.
 */

type Palette = {
  sky: [string, string, string];
  foliage: [string, string, string]; // deep · mid · light (backlit)
  light: string;
  bloom: string;
  grape: string;
};

const PALETTES: Record<ImageTone, Palette> = {
  plum: {
    sky: ["#180d2c", "#2c1a4c", "#45286f"],
    foliage: ["#123b2a", "#2f6b41", "#8cbf63"],
    light: "#f3dc95",
    bloom: "#e78fc9",
    grape: "#9a6bd0",
  },
  burgundy: {
    sky: ["#320a2f", "#5f1656", "#8a2178"],
    foliage: ["#123a2b", "#2b6746", "#8fc06a"],
    light: "#f7e6c6",
    bloom: "#f5b9e3",
    grape: "#c266ab",
  },
  gold: {
    sky: ["#1e2d0a", "#3c5210", "#6a8a19"],
    foliage: ["#1b3a10", "#3f6419", "#c2e26d"],
    light: "#fffdf2",
    bloom: "#eef6d6",
    grape: "#a9cf5e",
  },
  rose: {
    sky: ["#3c5410", "#66871a", "#a3c356"],
    foliage: ["#2b4712", "#537414", "#e2eec0"],
    light: "#ffffff",
    bloom: "#ffffff",
    grape: "#cbe394",
  },
  charcoal: {
    sky: ["#0e0a14", "#221d20", "#3f383f"],
    foliage: ["#14342a", "#28553f", "#6f9e6a"],
    light: "#9dc727",
    bloom: "#c1b2da",
    grape: "#8f6fc0",
  },
};

const MOTIF_KEYWORDS: [NatureMotif, string[]][] = [
  ["olive", ["prayer", "devotion", "gratitude", "praise", "worship", "thank", "peace", "reconcil", "morning"]],
  ["wheat", ["wait", "season", "harvest", "purpose", "patience", "timing", "behind", "press", "sow", "reap", "provision", "strength"]],
  ["vine", ["faith", "spirit", "abide", "vine", "branch", "trust", "root", "conviction", "wholeness", "brokenness"]],
  ["lily", ["rest", "sabbath", "wellness", "heal", "whole", "home", "hospitalit", "comparison", "content", "anxiety", "still", "quiet", "beauty", "doubt"]],
  ["palm", ["lead", "leading", "victory", "triumph", "overcom", "battle", "compassion"]],
  ["fern", ["child", "family", "grow", "growth", "mother", "raising", "formation", "disciple", "marriage", "relationship"]],
];

function deriveMotif(seed: string, tone: ImageTone): NatureMotif {
  const s = seed.toLowerCase();
  for (const [motif, words] of MOTIF_KEYWORDS) {
    if (words.some((w) => s.includes(w))) return motif;
  }
  const byTone: Record<ImageTone, NatureMotif> = {
    plum: "vine",
    burgundy: "wheat",
    gold: "olive",
    rose: "lily",
    charcoal: "fern",
  };
  return byTone[tone];
}

/** FNV-1a string hash → 32-bit unsigned int. */
function hashString(input: string): number {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < input.length; i++) {
    h = Math.imul(h ^ input.charCodeAt(i), 16777619);
  }
  return h >>> 0;
}

/** Small, fast seeded PRNG. */
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

/** Lanceolate leaf, tip pointing along +x, hinged at the origin. */
const leaf = (len: number, w: number) =>
  `M0 0 C ${(len * 0.3).toFixed(1)} ${-w} ${(len * 0.7).toFixed(1)} ${-w} ${len} 0 ` +
  `C ${(len * 0.7).toFixed(1)} ${w} ${(len * 0.3).toFixed(1)} ${w} 0 0 Z`;

/** Compact three-lobe vine leaf, tip pointing up (-y), hinged at origin. */
const VINE_LEAF =
  "M0 0 C -3 -6 -10 -8 -13 -16 C -10 -14 -7 -16 -6 -21 C -4 -15 -3 -21 0 -31 " +
  "C 3 -21 4 -15 6 -21 C 7 -16 10 -14 13 -16 C 10 -8 3 -6 0 0 Z";

const GRAIN = "M0 0 C 6 -4 6 -13 0 -18 C -6 -13 -6 -4 0 0 Z";

const GRAPE_ROWS: [number, number[]][] = [
  [0, [-6, 0, 6]],
  [5.4, [-9, -3, 3, 9]],
  [10.8, [-6, 0, 6]],
  [16, [-3, 3]],
  [20.5, [0]],
];

/** One plant, growing upward from the local origin (~176 tall). */
function Sprig({ motif, u }: { motif: NatureMotif; u: string }) {
  const mid = `url(#${u}-leaf)`;
  const deep = `url(#${u}-leafDeep)`;
  const back = `url(#${u}-leafBack)`;

  if (motif === "olive" || motif === "vine") {
    const isVine = motif === "vine";
    return (
      <g>
        <path
          d={isVine ? "M0 0 C -22 -42 16 -78 -6 -142" : "M0 0 Q -11 -70 6 -150"}
          fill="none"
          stroke={`url(#${u}-stem)`}
          strokeWidth={isVine ? 4.5 : 4}
          strokeLinecap="round"
        />
        {isVine ? (
          <>
            {([
              [-12, -40, -20, 1],
              [7, -84, 16, 1.2],
              [-4, -134, -6, 0.92],
              [-16, -104, -30, 0.8],
            ] as const).map(([x, y, rot, sc], i) => (
              <g key={i} transform={`translate(${x} ${y}) rotate(${rot}) scale(${sc})`}>
                <path d={VINE_LEAF} fill={i === 1 ? back : i % 2 ? mid : deep} opacity={0.94} />
                <path d="M0 0 L0 -27" stroke={`url(#${u}-stem)`} strokeWidth={0.9} opacity={0.5} fill="none" />
              </g>
            ))}
            <g transform="translate(11 -46)">
              {GRAPE_ROWS.flatMap(([y, xs]) =>
                xs.map((x, j) => (
                  <circle
                    key={`${y}-${j}`}
                    cx={x}
                    cy={y}
                    r={3.5}
                    fill={`url(#${u}-grape)`}
                    stroke={PALETTES.plum.sky[0]}
                    strokeWidth={0.5}
                    strokeOpacity={0.35}
                  />
                ))
              )}
              <circle cx={-4} cy={-1} r={1.1} fill="#fff" opacity={0.6} />
              <circle cx={2} cy={9} r={1.1} fill="#fff" opacity={0.45} />
            </g>
            <path
              d="M-6 -142 C 1 -148 1 -159 -9 -161 C -16 -163 -18 -153 -12 -151"
              fill="none"
              stroke={`url(#${u}-stem)`}
              strokeWidth={1.8}
              strokeLinecap="round"
            />
          </>
        ) : (
          <>
            {([
              [-8, -28, -46],
              [-2, -50, 48],
              [3, -72, -42],
              [5, -94, 46],
              [6, -114, -36],
              [7, -132, 40],
              [7, -148, -20],
            ] as const).map(([x, y, rot], i) => (
              <g key={i} transform={`translate(${x} ${y}) rotate(${rot})`}>
                <path d={leaf(32 - i * 2.2, 7)} fill={i % 2 ? mid : deep} opacity={0.93} />
              </g>
            ))}
            {([
              [-6, -40],
              [4, -88],
              [7, -122],
            ] as const).map(([x, y], i) => (
              <g key={`o${i}`}>
                <ellipse cx={x} cy={y} rx={4} ry={5.6} fill={`url(#${u}-grape)`} />
                <circle cx={x - 1.4} cy={y - 1.8} r={1} fill="#fff" opacity={0.55} />
              </g>
            ))}
          </>
        )}
      </g>
    );
  }

  if (motif === "wheat") {
    return (
      <g>
        <path d="M0 0 Q 5 -86 0 -178" fill="none" stroke={`url(#${u}-stem)`} strokeWidth={3.2} strokeLinecap="round" />
        {Array.from({ length: 8 }).map((_, i) => {
          const y = -96 - i * 10.5;
          const s = 1 - i * 0.09;
          return (
            <g key={i} transform={`translate(0 ${y})`}>
              <path transform={`rotate(26) scale(${s})`} d={GRAIN} fill={mid} opacity={0.92} />
              <path transform={`rotate(-26) scale(${s})`} d={GRAIN} fill={mid} opacity={0.92} />
              <line x1={4} y1={-13} x2={11} y2={-31} stroke={`url(#${u}-stem)`} strokeWidth={1} opacity={0.5} />
              <line x1={-4} y1={-13} x2={-11} y2={-31} stroke={`url(#${u}-stem)`} strokeWidth={1} opacity={0.5} />
            </g>
          );
        })}
        <path transform="translate(0 -188)" d={GRAIN} fill={mid} />
        <line x1={0} y1={-200} x2={0} y2={-224} stroke={`url(#${u}-stem)`} strokeWidth={1} opacity={0.5} />
      </g>
    );
  }

  if (motif === "lily") {
    return (
      <g>
        {([
          [-10, 116, -9],
          [7, 106, 8],
          [-2, 70, -2],
        ] as const).map(([x, len, rot], i) => (
          <path
            key={i}
            transform={`translate(${x} 0) rotate(${-90 + rot})`}
            d={leaf(len, 8)}
            fill={i === 2 ? mid : deep}
            opacity={0.9}
          />
        ))}
        <path d="M0 0 Q -5 -70 3 -122" fill="none" stroke={`url(#${u}-stem)`} strokeWidth={3.2} strokeLinecap="round" />
        <g transform="translate(3 -122)">
          {[-32, 0, 32].map((rot, i) => (
            <path
              key={i}
              transform={`rotate(${rot})`}
              d="M0 0 C -12 -9 -14 -31 0 -44 C 14 -31 12 -9 0 0 Z"
              fill={`url(#${u}-bloom)`}
              opacity={i === 1 ? 0.97 : 0.85}
            />
          ))}
          {[-16, 16].map((rot, i) => (
            <path
              key={`b${i}`}
              transform={`rotate(${rot})`}
              d="M0 0 C -8 -7 -10 -24 0 -35 C 10 -24 8 -7 0 0 Z"
              fill={`url(#${u}-bloom)`}
              opacity={0.55}
            />
          ))}
          {[-11, 0, 11].map((rot, i) => (
            <line key={`s${i}`} transform={`rotate(${rot})`} x1={0} y1={-4} x2={0} y2={-24} stroke={PALETTES.gold.light} strokeWidth={1.4} opacity={0.75} />
          ))}
          <circle r={3} fill={PALETTES.gold.light} opacity={0.9} />
        </g>
      </g>
    );
  }

  // palm & fern share a central rib with mirrored side blades
  const fern = motif === "fern";
  const rib = fern ? "M0 0 Q 13 -80 4 -172" : "M0 0 Q 22 -94 4 -192";
  const count = fern ? 12 : 13;
  const baseLen = fern ? 32 : 56;
  const taper = fern ? 0.78 : 0.72;
  const baseAngle = fern ? 50 : 30;
  return (
    <g>
      <path d={rib} fill="none" stroke={`url(#${u}-stem)`} strokeWidth={fern ? 2.8 : 3.2} strokeLinecap="round" />
      {Array.from({ length: count }).map((_, i) => {
        const t = i / (count - 1);
        const y = -12 - t * (fern ? 160 : 168);
        const x = (fern ? 11 : 20) * Math.sin(t * Math.PI * 0.5) * (1 - t * 0.3);
        const len = baseLen * (1 - t * taper) + (fern ? 7 : 9);
        const ang = baseAngle + t * (fern ? 8 : 24);
        const fill = i % 2 ? mid : deep;
        return (
          <g key={i} transform={`translate(${x.toFixed(1)} ${y.toFixed(1)})`}>
            <path transform={`rotate(${-ang})`} d={leaf(len, fern ? 3.6 : 4.6)} fill={fill} opacity={0.9} />
            <g transform="scale(-1 1)">
              <path transform={`rotate(${-ang})`} d={leaf(len, fern ? 3.6 : 4.6)} fill={fill} opacity={0.9} />
            </g>
          </g>
        );
      })}
    </g>
  );
}

interface AbstractArtProps {
  seed: string;
  tone?: ImageTone;
  motif?: NatureMotif;
  variant?: "full" | "compact";
  className?: string;
}

export default function AbstractArt({
  seed,
  tone = "plum",
  motif,
  variant = "full",
  className,
}: AbstractArtProps) {
  const p = PALETTES[tone] ?? PALETTES.plum;
  const hash = hashString(seed || "flourish");
  const rand = mulberry32(hash);
  const uid = `aa${hash.toString(36)}`;
  const chosen = motif ?? deriveMotif(seed, tone);
  const compact = variant === "compact";

  const range = (min: number, max: number) => min + rand() * (max - min);
  const leftSide = rand() > 0.45;
  const angle = Math.round(range(96, 150));

  const heroX = leftSide ? range(130, 195) : range(W - 195, W - 130);
  const heroRot = (leftSide ? -1 : 1) * range(5, 13);
  const heroScale = range(2, 2.35);
  const backX = leftSide ? range(W - 220, W - 140) : range(140, 220);
  const backRot = (leftSide ? 1 : -1) * range(9, 18);
  const backScale = range(1.45, 1.75);

  const motes = Array.from({ length: compact ? 0 : 13 }, () => ({
    x: rand() * W,
    y: range(H * 0.2, H * 0.9),
    r: range(1.2, 3.6),
    delay: range(0, 16).toFixed(1),
    dur: range(12, 22).toFixed(1),
  }));

  const meadow = (baseY: number, amp: number) => {
    let d = `M-20 ${H} L-20 ${baseY}`;
    const seg = 54;
    for (let x = -20; x < W + 20; x += seg) {
      d += ` Q ${x + seg / 2} ${(baseY - amp).toFixed(0)} ${x + seg} ${baseY}`;
    }
    return `${d} L${W + 20} ${H} Z`;
  };

  const css = `
.${uid} .rise{animation:${uid}-rise 1200ms cubic-bezier(0.2,0.7,0.2,1) both}
.${uid} .rise-d{animation:${uid}-rise 1200ms cubic-bezier(0.2,0.7,0.2,1) 200ms both}
.${uid} .swayA{transform-box:fill-box;transform-origin:50% 100%;animation:${uid}-swayA 9s ease-in-out infinite}
.${uid} .swayB{transform-box:fill-box;transform-origin:50% 100%;animation:${uid}-swayB 12s ease-in-out infinite}
.${uid} .ray{animation:${uid}-glow 14s ease-in-out infinite}
.${uid} .star{transform-box:fill-box;transform-origin:50% 50%;animation:${uid}-twinkle 7s ease-in-out infinite}
.${uid} .mote{animation-name:${uid}-drift;animation-timing-function:ease-in-out;animation-iteration-count:infinite}
@keyframes ${uid}-rise{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:none}}
@keyframes ${uid}-swayA{0%,100%{transform:rotate(-1.7deg)}50%{transform:rotate(1.4deg)}}
@keyframes ${uid}-swayB{0%,100%{transform:rotate(1.4deg)}50%{transform:rotate(-1.2deg)}}
@keyframes ${uid}-glow{0%,100%{opacity:.3}50%{opacity:.62}}
@keyframes ${uid}-twinkle{0%,100%{opacity:.5;transform:scale(.9)}50%{opacity:1;transform:scale(1.12)}}
@keyframes ${uid}-drift{0%{opacity:0;transform:translateY(12px)}18%{opacity:.65}80%{opacity:.4}100%{opacity:0;transform:translateY(-46px)}}
@media (prefers-reduced-motion:reduce){
.${uid} .rise,.${uid} .rise-d{animation:none!important;opacity:1!important;transform:none!important}
.${uid} .swayA,.${uid} .swayB,.${uid} .ray,.${uid} .star{animation:none!important}
.${uid} .mote{animation:none!important;opacity:0!important}
}`;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      className={cx("aa-art", uid, className)}
      aria-hidden="true"
      role="presentation"
    >
      <defs>
        <linearGradient id={`${uid}-sky`} gradientTransform={`rotate(${angle} 0.5 0.5)`}>
          <stop offset="0%" stopColor={p.sky[0]} />
          <stop offset="58%" stopColor={p.sky[1]} />
          <stop offset="100%" stopColor={p.sky[2]} />
        </linearGradient>
        <linearGradient id={`${uid}-leaf`} x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor={p.foliage[1]} />
          <stop offset="100%" stopColor={p.foliage[2]} />
        </linearGradient>
        <linearGradient id={`${uid}-leafDeep`} x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor={p.foliage[0]} />
          <stop offset="100%" stopColor={p.foliage[1]} />
        </linearGradient>
        <linearGradient id={`${uid}-leafBack`} x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor={p.foliage[2]} />
          <stop offset="100%" stopColor={p.light} />
        </linearGradient>
        <linearGradient id={`${uid}-stem`} x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor={p.foliage[0]} />
          <stop offset="100%" stopColor={p.foliage[2]} />
        </linearGradient>
        <radialGradient id={`${uid}-grape`} cx="38%" cy="34%" r="68%">
          <stop offset="0%" stopColor={p.foliage[2]} stopOpacity="0.95" />
          <stop offset="55%" stopColor={p.grape} />
          <stop offset="100%" stopColor={p.grape} />
        </radialGradient>
        <linearGradient id={`${uid}-bloom`} x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor={p.bloom} stopOpacity="0.7" />
          <stop offset="100%" stopColor={p.light} />
        </linearGradient>
        <linearGradient id={`${uid}-ray`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={p.light} stopOpacity="0.5" />
          <stop offset="100%" stopColor={p.light} stopOpacity="0" />
        </linearGradient>
        <radialGradient id={`${uid}-orbA`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={p.foliage[1]} stopOpacity="0.45" />
          <stop offset="100%" stopColor={p.foliage[1]} stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`${uid}-orbB`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={p.sky[2]} stopOpacity="0.55" />
          <stop offset="100%" stopColor={p.sky[2]} stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`${uid}-orbC`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={p.light} stopOpacity="0.36" />
          <stop offset="100%" stopColor={p.light} stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`${uid}-horizon`} cx="50%" cy="100%" r="70%">
          <stop offset="0%" stopColor={p.light} stopOpacity="0.3" />
          <stop offset="100%" stopColor={p.light} stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`${uid}-vig`} cx="50%" cy="42%" r="75%">
          <stop offset="0%" stopColor="#000" stopOpacity="0" />
          <stop offset="70%" stopColor="#000" stopOpacity="0" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.42" />
        </radialGradient>
      </defs>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <rect width={W} height={H} fill={`url(#${uid}-sky)`} />

      {/* canopy light */}
      <circle cx={range(0.12, 0.32) * W} cy={range(0.16, 0.34) * H} r={270} fill={`url(#${uid}-orbA)`} />
      <circle cx={range(0.68, 0.9) * W} cy={range(0.6, 0.82) * H} r={320} fill={`url(#${uid}-orbB)`} />
      {!compact && <circle cx={range(0.5, 0.72) * W} cy={range(0.05, 0.2) * H} r={210} fill={`url(#${uid}-orbC)`} />}
      <rect x="0" y={H * 0.55} width={W} height={H * 0.45} fill={`url(#${uid}-horizon)`} />

      {/* god-rays */}
      {!compact && (
        <g className="ray">
          {[0, 1, 2, 3].map((i) => {
            const ox = leftSide ? -40 : W + 40;
            const dir = leftSide ? 1 : -1;
            return (
              <polygon
                key={i}
                points={`${ox},${-20} ${ox + dir * (150 + i * 70)},${-20} ${ox + dir * (430 + i * 150)},${H} ${ox + dir * (250 + i * 150)},${H}`}
                fill={`url(#${uid}-ray)`}
                opacity={0.4 - i * 0.08}
              />
            );
          })}
        </g>
      )}

      {/* sprig behind */}
      {!compact && (
        <g transform={`translate(${backX.toFixed(0)} ${H + 16}) rotate(${backRot.toFixed(1)}) scale(${backScale.toFixed(2)})`} opacity={0.55}>
          <g className="rise-d">
            <g className="swayB">
              <Sprig motif={chosen} u={uid} />
            </g>
          </g>
        </g>
      )}

      {/* hero sprig */}
      <g
        transform={
          compact
            ? `translate(${W / 2} ${H}) scale(2.6)`
            : `translate(${heroX.toFixed(0)} ${H + 14}) rotate(${heroRot.toFixed(1)}) scale(${heroScale.toFixed(2)})`
        }
      >
        <g className="rise">
          <g className="swayA">
            <Sprig motif={chosen} u={uid} />
          </g>
        </g>
      </g>

      {/* grass horizon */}
      <path d={meadow(H - 24, 18)} fill={p.foliage[0]} opacity={0.9} />
      <path d={meadow(H - 11, 12)} fill={p.foliage[1]} opacity={0.95} />
      {!compact &&
        Array.from({ length: 24 }).map((_, i) => {
          const x = 14 + i * 33 + (rand() * 20 - 10);
          const h = 12 + rand() * 24;
          return (
            <path
              key={i}
              d={`M${x.toFixed(0)} ${H - 8} q ${(rand() * 9 - 4.5).toFixed(0)} ${(-h / 2).toFixed(0)} ${(rand() * 7 - 3.5).toFixed(0)} ${(-h).toFixed(0)}`}
              stroke={p.foliage[1]}
              strokeWidth={2.4}
              strokeLinecap="round"
              fill="none"
              opacity={0.72}
            />
          );
        })}

      {/* Star of Bethlehem */}
      {!compact && (
        <g className="star" transform={`translate(${(leftSide ? W * 0.82 : W * 0.18).toFixed(0)} ${(H * 0.16).toFixed(0)}) rotate(${Math.round(range(0, 30))})`}>
          <path
            d="M0 -22 C 2 -7 7 -2 22 0 C 7 2 2 7 0 22 C -2 7 -7 2 -22 0 C -7 -2 -2 -7 0 -22 Z"
            fill={p.light}
            opacity={0.78}
          />
          <circle r={2.4} fill={p.light} />
        </g>
      )}

      {/* drifting pollen */}
      {motes.map((m, i) => (
        <circle
          key={i}
          className="mote"
          style={{ animationDelay: `${m.delay}s`, animationDuration: `${m.dur}s` }}
          cx={m.x.toFixed(0)}
          cy={m.y.toFixed(0)}
          r={m.r.toFixed(1)}
          fill={p.light}
          opacity={0}
        />
      ))}

      <rect width={W} height={H} fill={`url(#${uid}-vig)`} />
    </svg>
  );
}
