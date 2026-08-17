import type { Metadata } from "next";
import Link from "next/link";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import NewsletterCTA from "@/components/NewsletterCTA";

export const metadata: Metadata = {
  title: "About Flourish",
  description:
    "Learn about Flourish Christian Magazine — its mission, vision, values, and relationship with the women of MFM Tampa.",
};

const VALUES = [
  {
    title: "Rooted in Faith",
    body: "Every story flows from a Christ-centered worldview and a commitment to Scripture. [Placeholder — confirm doctrinal statement.]",
  },
  {
    title: "Excellence in Craft",
    body: "We believe Christian women deserve editorial quality that honors both the message and the medium.",
  },
  {
    title: "Community Over Content",
    body: "Flourish exists to connect women to one another, not just to articles.",
  },
  {
    title: "Honesty Over Perfection",
    body: "We tell true stories — including the hard, unfinished, and still-being-worked-out ones.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-plum">
        <div className="absolute inset-0 opacity-30">
          <PlaceholderImage
            image={{ alt: "Editorial photo for About Flourish — placeholder", tone: "plum" }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-plum via-plum/85 to-plum/60" />
        <div className="relative mx-auto max-w-3xl px-6 py-28 text-center lg:px-10">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-gold-light">
            About Flourish
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-tight text-white sm:text-5xl">
            A Digital Home for Christian Women to Flourish
          </h1>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <h2 className="font-serif text-2xl text-plum">What Flourish Is</h2>
          <p className="mt-4 font-sans text-base leading-relaxed text-charcoal-soft">
            Flourish Christian Magazine is a digital magazine, community, and women&apos;s ministry
            platform created for the women of Mountain of Fire and Miracles Ministries (MFM) Tampa,
            and for Christian women beyond the congregation. [Placeholder copy — replace with
            official Flourish description once confirmed by ministry leadership.]
          </p>

          <h2 className="mt-12 font-serif text-2xl text-plum">Why It Exists</h2>
          <p className="mt-4 font-sans text-base leading-relaxed text-charcoal-soft">
            Christian women navigate faith, family, career, and community all at once — often
            without a space designed specifically for the fullness of that experience. Flourish
            exists to be that space: a place to be inspired, equipped, encouraged, and empowered.
            [Placeholder copy.]
          </p>

          <h2 className="mt-12 font-serif text-2xl text-plum">Who It Serves</h2>
          <p className="mt-4 font-sans text-base leading-relaxed text-charcoal-soft">
            Flourish serves young adult women, married women, mothers, working professionals,
            ministry workers, women leaders, and mature women — within the MFM Tampa community and
            among Christian women more broadly. [Placeholder copy.]
          </p>

          <h2 className="mt-12 font-serif text-2xl text-plum">Our Relationship with MFM Tampa</h2>
          <p className="mt-4 font-sans text-base leading-relaxed text-charcoal-soft">
            Flourish Christian Magazine is an expression of the women&apos;s ministry at MFM Tampa.
            [Placeholder — this section must be reviewed and confirmed by ministry leadership before
            publishing. No official organizational claims have been made here.]
          </p>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-2xl bg-cream p-6">
              <h3 className="font-serif text-xl text-plum">Our Mission</h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-charcoal-soft">
                [Placeholder — insert official mission statement.] To inspire, equip, and connect
                Christian women through faith-filled stories, resources, and community.
              </p>
            </div>
            <div className="rounded-2xl bg-cream p-6">
              <h3 className="font-serif text-xl text-plum">Our Vision</h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-charcoal-soft">
                [Placeholder — insert official vision statement.] To become a trusted digital home
                where Christian women flourish in faith, purpose, and community.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 className="font-serif text-3xl text-plum sm:text-4xl">Our Values</h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <div key={v.title} className="rounded-2xl bg-white p-6">
                <h3 className="font-serif text-lg text-plum">{v.title}</h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-charcoal-soft">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
          <h2 className="font-serif text-3xl text-plum sm:text-4xl">How to Participate</h2>
          <p className="mt-4 font-sans text-base leading-relaxed text-charcoal-soft">
            Read and share stories, attend an event, submit an article or testimony, or simply join
            the Flourish community by subscribing below.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/write-for-flourish"
              className="inline-flex items-center rounded-full bg-plum px-8 py-4 font-sans text-sm font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-burgundy"
            >
              Write for Flourish
            </Link>
            <Link
              href="/events"
              className="inline-flex items-center rounded-full border border-plum px-8 py-4 font-sans text-sm font-semibold uppercase tracking-[0.08em] text-plum transition-colors hover:bg-plum hover:text-white"
            >
              View Events
            </Link>
          </div>
        </div>
      </section>

      <NewsletterCTA />
    </div>
  );
}
