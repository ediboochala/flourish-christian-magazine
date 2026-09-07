import type { Metadata } from "next";
import NewsletterCTA from "@/components/NewsletterCTA";
import Eyebrow from "@/components/ui/Eyebrow";
import { MEGA_REGION_LEADERSHIP_URL } from "@/lib/links";

export const metadata: Metadata = {
  title: "Women Foundation Leadership",
  description:
    "How the MFM Women Foundation is led — from international leadership through the mega regions to state and local chapters, including M.F.M Women Foundation Florida.",
};

const STRUCTURE = [
  {
    tier: "International Leadership",
    body: "The office of the International President sets the vision, doctrine, and mandate of the MFM Women Foundation worldwide.",
  },
  {
    tier: "Mega Regions",
    body: "The Foundation is organised into mega regions, each coordinating the women's work across a group of countries and states.",
  },
  {
    tier: "Regions & Coordinators",
    body: "Within each mega region, regional coordinators oversee groups of chapters, carrying training, prayer, and programmes down to the states.",
  },
  {
    tier: "State & Local Chapters",
    body: "M.F.M Women Foundation Florida sits here, with chapters in Broward, Jacksonville, Miami, Orlando, Tallahassee, and Tampa — each led by its own pastoral team. Flourish is published under this structure.",
  },
];

export default function WomenFoundationLeadershipPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-plum">
        <div className="aurora-backdrop opacity-50" />
        <div className="relative mx-auto max-w-3xl px-6 py-24 text-center lg:px-10">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-gold-light">
            MFM Women Foundation
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-tight text-white sm:text-5xl">
            Women Foundation Leadership
          </h1>
          <p className="mx-auto mt-5 max-w-xl font-sans text-base leading-relaxed text-white/75">
            An overview of how the Women Foundation is led — the leadership structure, not a
            roster of names.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <Eyebrow>Leadership Structure</Eyebrow>
          <h2 className="text-h2 mt-4 font-serif text-plum">From the Global Vision to the Local Chapter</h2>
          <p className="mt-5 font-sans text-base leading-relaxed text-charcoal-soft">
            Oversight in the MFM Women Foundation flows from its international leadership,
            through the mega regions and regional coordinators, down to the state and local
            chapters that serve women week to week.
          </p>

          <ol className="mt-10 space-y-6">
            {STRUCTURE.map((s, i) => (
              <li key={s.tier} className="flex gap-5 rounded-2xl border border-charcoal/10 bg-ivory p-6">
                <span className="font-serif text-2xl text-gold" aria-hidden="true">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-serif text-lg text-plum">{s.tier}</h3>
                  <p className="mt-1 font-sans text-sm leading-relaxed text-charcoal-soft">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>

          {MEGA_REGION_LEADERSHIP_URL ? (
            <a
              href={MEGA_REGION_LEADERSHIP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-1 rounded-full bg-plum px-7 py-3.5 font-sans text-xs font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-burgundy"
            >
              Visit the Mega Region Leadership Page
              <span aria-hidden="true">→</span>
            </a>
          ) : (
            <p className="mt-10 rounded-2xl bg-cream p-5 font-sans text-sm text-charcoal-soft">
              A link to the official Mega Region leadership page will be added here.
            </p>
          )}
        </div>
      </section>

      <NewsletterCTA />
    </div>
  );
}
