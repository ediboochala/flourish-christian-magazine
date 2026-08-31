import type { Metadata } from "next";
import Link from "next/link";
import TestimonyCard from "@/components/TestimonyCard";
import { testimonies } from "@/lib/data/testimonies";

export const metadata: Metadata = {
  title: "Women's Stories",
  description: "Real women. Real faith. Real victory. Testimonies of strength, healing, and hope.",
};

export default function TestimoniesPage() {
  return (
    <div>
      <section className="bg-plum py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-gold-light">
            Women&apos;s Stories
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-tight text-white sm:text-5xl">
            Real Women. Real Faith. Real Victory.
          </h1>
          <p className="mx-auto mt-5 max-w-xl font-sans text-base leading-relaxed text-white/75">
            Testimonies of strength, healing, and hope from women just like you, because your
            story might be the very thing someone else needs to keep going.
          </p>
        </div>
      </section>

      <section className="bg-ivory py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonies.map((t) => (
              <TestimonyCard key={t.slug} testimony={t} />
            ))}
          </div>

          <div className="mt-16 rounded-2xl bg-cream p-10 text-center sm:p-14">
            <h2 className="font-serif text-2xl text-plum sm:text-3xl">Your Story Matters</h2>
            <p className="mx-auto mt-3 max-w-lg font-sans text-sm leading-relaxed text-charcoal-soft">
              Your experience may be the encouragement another woman needs.
            </p>
            <Link
              href="/write-for-flourish"
              className="mt-6 inline-flex items-center rounded-full bg-plum px-7 py-3.5 font-sans text-xs font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-burgundy"
            >
              Share Your Testimony
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
