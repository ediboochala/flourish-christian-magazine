import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import NewsletterCTA from "@/components/NewsletterCTA";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import { editorialBoard } from "@/lib/data/editorialBoard";
import { MEGA_REGION_LEADERSHIP_URL } from "@/lib/links";

export const metadata: Metadata = {
  title: "About Flourish",
  description:
    "Flourish is the online publication of M.F.M Women Foundation Florida. Learn our story, mission, and values.",
};

const VALUES = [
  {
    title: "Faith",
    body: "Every page points back to God's Word.",
  },
  {
    title: "Purpose",
    body: "We help women discover and walk boldly in their calling.",
  },
  {
    title: "Connection",
    body: "No woman flourishes alone; we grow better together.",
  },
  {
    title: "Encouragement",
    body: "A safe space, free of judgment, full of grace.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-plum">
        <div className="absolute inset-0 opacity-40">
          <PlaceholderImage
            image={{
              src: "/images/site/about-meadow.jpg",
              alt: "Golden mist over a meadow at sunrise",
              tone: "plum",
              credit: "Photo via Unsplash",
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-plum via-plum/85 to-plum/60" />
        <div className="aurora-backdrop opacity-40" />
        <div className="relative mx-auto max-w-3xl px-6 py-14 text-center lg:px-10">
          <Reveal>
            <span className="relative mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-white p-3 ring-2 ring-white/30">
              <Image
                src="/images/site/mfm-logo.png"
                alt="Mountain of Fire and Miracles Ministries logo"
                width={244}
                height={245}
                sizes="72px"
                className="h-full w-full object-contain"
              />
            </span>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-gold-light">
              About Flourish
            </p>
            <h1 className="mt-4 font-serif text-4xl leading-tight text-white sm:text-5xl">
              A Digital Home for Christian Women to Flourish
            </h1>
            <p className="mx-auto mt-5 max-w-xl font-sans text-base leading-relaxed text-white/75">
              Faith, stories, testimonies, and community &mdash; for women in every season.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-plum/10 bg-cream py-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-6 text-center sm:flex-row sm:justify-center sm:gap-5 sm:text-left lg:px-10">
          <Image
            src="/images/site/mfm-logo.png"
            alt="Mountain of Fire and Miracles Ministries logo"
            width={244}
            height={245}
            className="h-16 w-16 flex-shrink-0"
          />
          <p className="font-sans text-sm leading-relaxed text-charcoal-soft">
            <span className="font-semibold text-plum">Flourish Christian Magazine</span> is the
            online publication of M.F.M Women Foundation Florida &mdash; Mountain of Fire and
            Miracles Ministries.
          </p>
        </div>
      </section>

      <section className="bg-white pb-10 pt-12">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <Reveal>
          <h2 className="font-serif text-2xl text-plum">Our Story</h2>
          <p className="mt-4 font-sans text-base leading-relaxed text-charcoal-soft">
            Flourish was born out of a simple but powerful conviction: every woman deserves a space
            to grow in faith, be reminded of her worth, and find community with others walking the
            same journey.
          </p>
          <p className="mt-4 font-sans text-base leading-relaxed text-charcoal-soft">
            As the official online publication of{" "}
            <strong className="font-semibold text-plum">M.F.M Women Foundation Florida</strong>,
            Flourish exists to nurture Christian women through biblically grounded encouragement,
            real testimonies, and practical tools for everyday life: marriage, motherhood, purpose,
            healing, and wellness.
          </p>
          <p className="mt-4 font-sans text-base leading-relaxed text-charcoal-soft">
            We believe a flourishing woman doesn&apos;t just grow for herself. She becomes a
            wellspring for her family, her community, and the Kingdom of God.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-2xl bg-cream p-6">
              <h3 className="font-serif text-xl text-plum">Our Mission</h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-charcoal-soft">
                To inspire, equip, and connect Christian women through faith, stories, testimonies,
                and sisterhood, rooted in Christ, growing together, flourishing in purpose.
              </p>
            </div>
            <div className="rounded-2xl bg-cream p-6">
              <h3 className="font-serif text-xl text-plum">Who We Serve</h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-charcoal-soft">
                Christian women in every season: young adults, mothers, working professionals,
                ministry workers, and leaders, within the M.F.M Women Foundation Florida community
                and among Christian women everywhere.
              </p>
            </div>
          </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white pb-12 pt-0">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <div className="border-t border-charcoal/10 pt-10" />
          <Reveal>
            <Eyebrow>Women Foundation Leadership</Eyebrow>
            <h2 className="text-h2 mt-4 font-serif text-plum">How the Women Foundation Is Led</h2>
            <p className="mt-4 font-sans text-base leading-relaxed text-charcoal-soft">
              M.F.M Women Foundation Florida sits within the wider leadership structure of the
              MFM Women Foundation. Oversight flows from the Foundation&apos;s international
              leadership, through its mega regions and regional coordinators, down to the state
              and local chapters — each with its own pastoral team. Florida&apos;s chapters in
              Broward, Jacksonville, Miami, Orlando, Tallahassee, and Tampa are served by this
              structure, and Flourish is published under it.
            </p>
            <a
              href={MEGA_REGION_LEADERSHIP_URL}
              target="_blank"
              rel="noreferrer"
              className="group/link mt-6 inline-flex items-center gap-1 rounded-full bg-plum px-7 py-3.5 font-sans text-xs font-semibold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-burgundy active:translate-y-0 active:scale-[0.97]"
            >
              Women Foundation Leadership
              <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1">
                →
              </span>
            </a>
          </Reveal>
        </div>
      </section>

      <section id="editorial-board" className="scroll-mt-24 bg-white pb-12 pt-0">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <div className="border-t border-charcoal/10 pt-10" />
          <Reveal>
            <Eyebrow>Editorial Board</Eyebrow>
            <h2 className="text-h2 mt-4 font-serif text-plum">Meet Our Editorial Board</h2>
            <p className="mt-4 font-sans text-base leading-relaxed text-charcoal-soft">
              Guiding every issue is our Editorial Board, made up of pastors and pastors&apos;
              wives from Florida.
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
              {editorialBoard.map((member) => (
                <li
                  key={member.slug}
                  className="flex items-start gap-3 border-t border-charcoal/10 pt-4"
                >
                  <span
                    className="mt-1.5 h-[5px] w-[5px] flex-shrink-0 rotate-45 bg-gold"
                    aria-hidden="true"
                  />
                  <span>
                    <span className="block font-sans text-sm font-semibold tracking-tight text-plum">
                      {member.name}
                    </span>
                    <span className="block font-sans text-xs text-charcoal-soft">
                      {member.location}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <h2 className="font-serif text-3xl text-plum sm:text-4xl">Our Values</h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {VALUES.map((v) => (
                <div
                  key={v.title}
                  className="rounded-2xl bg-white p-6 transition-transform duration-300 hover:-translate-y-1"
                >
                  <h3 className="font-serif text-lg text-plum">{v.title}</h3>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-charcoal-soft">
                    {v.body}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
          <Reveal>
          <h2 className="font-serif text-3xl text-plum sm:text-4xl">How to Participate</h2>
          <p className="mt-4 font-sans text-base leading-relaxed text-charcoal-soft">
            Read and share stories, attend the monthly meeting, submit an article or testimony, or
            simply join the Flourish community by subscribing below.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/write-for-flourish"
              className="inline-flex items-center rounded-full bg-plum px-8 py-4 font-sans text-sm font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-burgundy"
            >
              Write for Flourish
            </Link>
            <Link
              href="/get-involved"
              className="inline-flex items-center rounded-full border border-plum px-8 py-4 font-sans text-sm font-semibold uppercase tracking-[0.08em] text-plum transition-colors hover:bg-plum hover:text-white"
            >
              Get Involved
            </Link>
          </div>
          </Reveal>
        </div>
      </section>

      <NewsletterCTA />
    </div>
  );
}
