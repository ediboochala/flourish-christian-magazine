/**
 * Visitor counter — powered by Flag Counter (flagcounter.com), a free
 * third-party service. Every time someone from a new country loads the
 * site, a flag is added; the number beside each flag is that country's
 * running visit count, and "Pageviews" totals every visit site-wide.
 *
 * The counter lives entirely on Flag Counter's server — this just embeds
 * their live, self-updating image (hence a plain <img>, not next/image,
 * which would cache a stale snapshot instead of showing live counts).
 * Colors match the Flourish palette (ivory background, charcoal text,
 * plum border). Counter ID is specific to this site; manage or view
 * detailed stats at https://info.flagcounter.com/aF0o.
 */
export default function VisitorCounter() {
  return (
    <div className="flex flex-col items-center gap-3">
      <p className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-gold-light">
        Readers Around the World
      </p>
      <a
        href="https://info.flagcounter.com/aF0o"
        target="_blank"
        rel="noreferrer"
        className="overflow-hidden rounded-lg shadow-sm transition-opacity duration-300 hover:opacity-90"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://s01.flagcounter.com/count2/aF0o/bg_FBF7F1/txt_241F21/border_432764/columns_2/maxflags_12/viewers_0/labels_1/pageviews_1/flags_0/percent_0/"
          alt="Flag Counter: a running tally of the countries Flourish readers visit from, with a visit count beside each flag"
          className="block h-auto max-w-full"
        />
      </a>
    </div>
  );
}
