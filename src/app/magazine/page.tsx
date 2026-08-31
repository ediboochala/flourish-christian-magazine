import type { Metadata } from "next";
import MagazineArchive from "@/components/magazine/MagazineArchive";
import ArticleCard from "@/components/ArticleCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { articles, getEditorsPicks, getTrendingArticles } from "@/lib/data/articles";
import { categories } from "@/lib/data/categories";

export const metadata: Metadata = {
  title: "Magazine Archive",
  description:
    "Browse every Flourish Christian Magazine story. Search, filter by category, and discover editor's picks and trending reads.",
};

export default function MagazinePage() {
  const editorsPicks = getEditorsPicks(3);
  const trending = getTrendingArticles(3);

  return (
    <div>
      <section className="bg-plum py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-gold-light">
            The Magazine
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-tight text-white sm:text-5xl">
            Every Story. One Digital Library.
          </h1>
          <p className="mx-auto mt-5 max-w-xl font-sans text-base leading-relaxed text-white/75">
            Search, filter, and explore the full Flourish archive: faith, purpose, family, wellness,
            leadership, and more.
          </p>
        </div>
      </section>

      {(editorsPicks.length > 0 || trending.length > 0) && (
        <section className="bg-cream py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            {editorsPicks.length > 0 && (
              <div className="mb-16">
                <SectionHeading eyebrow="Editor's Pick" title="Hand-Selected for You" />
                <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {editorsPicks.map((a) => (
                    <ArticleCard key={a.slug} article={a} />
                  ))}
                </div>
              </div>
            )}
            {trending.length > 0 && (
              <div>
                <SectionHeading eyebrow="Most Read" title="Trending This Week" />
                <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
                  {trending.map((a) => (
                    <ArticleCard key={a.slug} article={a} size="compact" />
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading eyebrow="Past Issues Archive" title="Browse Every Issue of Flourish" />
          <div className="mt-8 flex flex-col gap-3 rounded-2xl border border-charcoal/10 bg-cream p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-burgundy">
                Spring 2024 · Issue No. 1
              </p>
              <p className="mt-1 font-serif text-xl italic text-plum">A Season of Renewal</p>
            </div>
            <span className="font-sans text-xs font-medium uppercase tracking-[0.1em] text-charcoal-soft">
              Future issues will populate here
            </span>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading eyebrow="Full Archive" title="Browse All Stories" />
          <div className="mt-10">
            <MagazineArchive articles={articles} categories={categories} />
          </div>
        </div>
      </section>
    </div>
  );
}
