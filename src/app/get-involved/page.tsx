import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import NewsletterCTA from "@/components/NewsletterCTA";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "M.F.M Women Foundation Florida exists to empower Christian women to walk in faith, purpose, and sisterhood. Join our community, volunteer, or partner with us.",
};

const WAYS_TO_JOIN = [
  {
    title: "Join Our Community",
    body: "Subscribe to Flourish, attend an event, and connect with a growing sisterhood of Christian women in faith and purpose.",
    href: "/events",
    cta: "Join Our Community",
  },
  {
    title: "Volunteer With Us",
    body: "Lend your time and gifts to community events, mentorship, and outreach that carry the Foundation's mission beyond the page.",
    href: "/contact",
    cta: "Volunteer With Us",
  },
  {
    title: "Partner With Us",
    body: "Churches, ministries, and organizations aligned with our mission are invited to partner with M.F.M Women Foundation Florida.",
    href: "/contact",
    cta: "Partner With Us",
  },
];

export default function GetInvolvedPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-plum">
        <div className="aurora-backdrop opacity-50" />
        <div className="relative mx-auto max-w-3xl px-6 py-28 text-center lg:px-10">
          <span className="relative mx-auto mb-6 block h-20 w-20 overflow-hidden rounded-full ring-2 ring-white/30">
            <Image
              src="/Gemini_Generated_Image_2t6tje2t6tje2t6t.jpg"
              alt="M.F.M Women Foundation Florida logo"
              fill
              sizes="80px"
              className="object-cover"
            />
          </span>
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-gold-light">
            Get Involved
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-tight text-white sm:text-5xl">
            M.F.M Women Foundation Florida
          </h1>
          <p className="mx-auto mt-5 max-w-xl font-sans text-base leading-relaxed text-white/75">
            We exist to empower Christian women to walk in faith, purpose, and sisterhood. Flourish
            magazine is one expression of that mission — but our work extends beyond the page into
            community events, mentorship, and outreach.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {WAYS_TO_JOIN.map((way) => (
              <div
                key={way.title}
                className="flex flex-col rounded-2xl border border-charcoal/10 bg-ivory p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <h2 className="font-serif text-xl text-plum">{way.title}</h2>
                <p className="mt-3 flex-1 font-sans text-sm leading-relaxed text-charcoal-soft">
                  {way.body}
                </p>
                <Link
                  href={way.href}
                  className="mt-6 inline-flex w-fit items-center rounded-full bg-plum px-6 py-3 font-sans text-xs font-semibold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-burgundy active:translate-y-0 active:scale-[0.97]"
                >
                  {way.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NewsletterCTA />
    </div>
  );
}
