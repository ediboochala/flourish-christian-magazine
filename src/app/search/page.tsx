import type { Metadata } from "next";
import SearchExperience from "@/components/search/SearchExperience";

export const metadata: Metadata = {
  title: "Search",
  description: "Search Flourish Christian Magazine: articles, the editorial team, and events.",
};

export default function SearchPage() {
  return (
    <div>
      <section className="bg-plum py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-gold-light">
            Search
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-tight text-white sm:text-5xl">
            Find What You&apos;re Looking For
          </h1>
        </div>
      </section>

      <section className="bg-ivory py-12 sm:py-14">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <SearchExperience />
        </div>
      </section>
    </div>
  );
}
