import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import NewsletterCTA from "@/components/NewsletterCTA";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import { FacebookIcon, InstagramIcon } from "@/components/ui/BrandIcons";

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
        <div className="relative mx-auto max-w-3xl px-6 py-28 text-center lg:px-10">
          <span className="relative mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-white p-3 ring-2 ring-white/30">
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
            An online publication of M.F.M Women Foundation Florida.
          </p>
        </div>
      </section>

      <section className="border-b border-plum/10 bg-cream py-10">
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

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
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

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
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
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-16 lg:px-10">
          <Reveal variant="scale" className="img-zoom relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl">
            <Image
              src="/images/site/shade-olukoya.jpg"
              alt="Pastor (Dr.) Mrs. Shade Olukoya smiling and speaking into a microphone, wearing an orange floral hat and a matching orange, teal, and black blazer"
              fill
              sizes="(min-width: 1024px) 380px, 90vw"
              className="object-cover"
            />
          </Reveal>
          <Reveal variant="right">
            <Eyebrow>Global Leadership</Eyebrow>
            <h2 className="text-h2 mt-4 font-serif text-plum">Pastor (Dr.) Mrs. Shade Olukoya</h2>
            <p className="mt-3 font-sans text-sm font-semibold uppercase tracking-[0.08em] text-burgundy">
              Mummy G.O. &middot; International President, MFM Women Foundation
            </p>
            <p className="mt-5 font-sans text-base leading-relaxed text-charcoal-soft">
              A woman of faith and a dedicated servant of God who stands beside the General
              Overseer in the ministry&apos;s global mandate of prayer and deliverance. She leads
              the MFM Women Foundation across regions and nations worldwide.
            </p>
            <p className="mt-4 font-sans text-base leading-relaxed text-charcoal-soft">
              M.F.M Women Foundation Florida, and Flourish alongside it, carries her vision of
              prayer, discipleship, and sisterhood into every chapter and every page.
            </p>
            <div className="mt-7 flex items-center gap-3">
              {[FacebookIcon, InstagramIcon].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Pastor (Dr.) Mrs. Shade Olukoya on social media [placeholder link, add real profile URL]"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-plum/20 text-plum transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-burgundy"
                >
                  <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                </a>
              ))}
            </div>
          </Reveal>
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
              href="/get-involved"
              className="inline-flex items-center rounded-full border border-plum px-8 py-4 font-sans text-sm font-semibold uppercase tracking-[0.08em] text-plum transition-colors hover:bg-plum hover:text-white"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>

      <NewsletterCTA />
    </div>
  );
}
