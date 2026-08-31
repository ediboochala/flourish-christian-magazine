import type { Metadata } from "next";
import Link from "next/link";
import ContributorCard from "@/components/ContributorCard";
import { authors } from "@/lib/data/authors";

export const metadata: Metadata = {
  title: "Contributors",
  description: "Meet the women behind the stories at Flourish Christian Magazine.",
};

export default function ContributorsPage() {
  return (
    <div>
      <section className="bg-plum py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-gold-light">
            Women of Flourish
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-tight text-white sm:text-5xl">
            Meet the Women Behind the Stories
          </h1>
          <p className="mx-auto mt-5 max-w-xl font-sans text-base leading-relaxed text-white/75">
            Flourish is written by a growing community of Christian women sharing wisdom, story,
            and encouragement with one another.
          </p>
        </div>
      </section>

      <section className="bg-ivory py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {authors.map((author) => (
              <ContributorCard key={author.slug} author={author} />
            ))}
          </div>

          <div className="mt-16 rounded-2xl bg-cream p-10 text-center sm:p-14">
            <h2 className="font-serif text-2xl text-plum sm:text-3xl">
              Your Story Could Encourage Another Woman.
            </h2>
            <p className="mx-auto mt-3 max-w-lg font-sans text-sm leading-relaxed text-charcoal-soft">
              Flourish is always open to new contributing voices from the M.F.M Women Foundation
              Florida community and beyond.
            </p>
            <Link
              href="/write-for-flourish"
              className="mt-6 inline-flex items-center rounded-full bg-plum px-7 py-3.5 font-sans text-xs font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-burgundy"
            >
              Become a Contributor
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
