import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const TILES = [
  {
    href: "/magazine",
    label: "Magazine",
    blurb: "Read the latest issue and browse the full story archive.",
  },
  {
    href: "/categories",
    label: "Categories",
    blurb: "Women's Stories, Health & Wellness, Faith & Inspiration, Marriage & Relationships, and The Homefront.",
  },
  {
    href: "/events",
    label: "Events",
    blurb: "Conferences, studies, and the monthly Women Foundation Florida meeting.",
  },
  {
    href: "/about",
    label: "About",
    blurb: "Our story, mission, and the Women Foundation leadership structure.",
  },
  {
    href: "/get-involved",
    label: "Get Involved",
    blurb: "Advertise with Flourish and reach a growing readership — oureditorialboard@gmail.com.",
  },
];

/** Compact navigational grid for the homepage — the five places to go
 *  next, kept deliberately short so the page ends with the content. */
export default function HomeTiles() {
  return (
    <section className="bg-ivory py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionHeading eyebrow="Explore Flourish" title="Where to Go Next" />
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TILES.map((tile, i) => (
            <Reveal key={tile.href} delayMs={i * 70}>
              <Link
                href={tile.href}
                className="group flex h-full flex-col rounded-2xl border border-charcoal/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-xl"
              >
                <span className="h-[6px] w-[6px] rotate-45 bg-gold" aria-hidden="true" />
                <h3 className="mt-5 font-serif text-xl text-plum">{tile.label}</h3>
                <p className="mt-2 flex-1 font-sans text-sm leading-relaxed text-charcoal-soft">
                  {tile.blurb}
                </p>
                <span className="mt-6 inline-flex items-center gap-1 font-sans text-xs font-semibold uppercase tracking-[0.1em] text-plum transition-transform duration-300 group-hover:translate-x-1">
                  {tile.label === "Get Involved" ? "Advertise With Us" : `Go to ${tile.label}`} →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
