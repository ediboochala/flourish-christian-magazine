import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const ISSUE_SECTIONS = [
  {
    emoji: "💍",
    label: "Marriage & Relationships",
    title: "25 Tips for a Successful Godly Marriage",
    blurb:
      "Practical, faith-rooted wisdom for building a marriage that honors God and lasts a lifetime.",
    page: 6,
    href: "/categories/family-relationships",
  },
  {
    emoji: "📖",
    label: "Spiritual Growth",
    title: "Growing Deeper in Prayer and the Word",
    blurb: "Move beyond routine devotion into a living, breathing relationship with God.",
    page: 12,
    href: "/categories/faith-spirituality",
  },
  {
    emoji: "👩🏾",
    label: "Woman of Purpose",
    title: "Walking in Your God-Given Purpose",
    blurb: "You weren't created by accident. Discover how to identify and step boldly into your calling.",
    page: 18,
    href: "/categories/women-purpose",
  },
  {
    emoji: "🏡",
    label: "Faith & Home",
    title: "Building a Christ-Centered Home",
    blurb:
      "Practical ways to make Jesus the foundation of your household, from the kitchen table to bedtime prayers.",
    page: 24,
    href: "/categories/lifestyle",
  },
  {
    emoji: "❤️",
    label: "Health & Wellness",
    title: "Mind. Body. Soul.",
    blurb: "Because flourishing isn't just spiritual. It's whole-life restoration.",
    page: 30,
    href: "/categories/health-wellness",
  },
  {
    emoji: "📣",
    label: "Announcements",
    title: "Upcoming Events, Updates & Opportunities",
    blurb: "Stay connected to everything happening in the M.F.M Women Foundation Florida community.",
    page: 34,
    href: "/events",
  },
];

/**
 * "In This Issue" preview grid — mirrors the printed magazine's table of
 * contents, with each section's featured feature and page number.
 */
export default function InThisIssue() {
  return (
    <section id="in-this-issue" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="Spring 2024 · Issue No. 1"
            title="In This Issue"
            description="Six sections, one season of renewal. Here's what's inside the current issue of Flourish."
          />
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ISSUE_SECTIONS.map((section, i) => (
            <Reveal key={section.label} delayMs={i * 70}>
              <Link
                href={section.href}
                className="group flex h-full flex-col rounded-2xl border border-charcoal/10 bg-ivory p-7 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-xl"
              >
                <span className="text-3xl" aria-hidden="true">
                  {section.emoji}
                </span>
                <p className="mt-4 font-sans text-xs font-semibold uppercase tracking-[0.16em] text-burgundy">
                  {section.label}
                </p>
                <h3 className="mt-2 font-serif text-xl italic text-plum">{section.title}</h3>
                <p className="mt-3 flex-1 font-sans text-sm leading-relaxed text-charcoal-soft">
                  {section.blurb}
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-charcoal/10 pt-4">
                  <span className="font-sans text-xs font-medium uppercase tracking-[0.1em] text-charcoal-soft">
                    Page {section.page}
                  </span>
                  <span className="inline-flex items-center gap-1 font-sans text-xs font-semibold uppercase tracking-[0.1em] text-plum transition-transform duration-300 group-hover:translate-x-1">
                    Read More →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/categories"
            className="inline-flex items-center rounded-full border border-plum px-7 py-3 font-sans text-xs font-semibold uppercase tracking-[0.1em] text-plum transition-all duration-300 hover:-translate-y-0.5 hover:bg-plum hover:text-white active:translate-y-0 active:scale-[0.97]"
          >
            View All Categories
          </Link>
        </div>
      </div>
    </section>
  );
}
