import type { Metadata } from "next";
import MagazineArchive from "@/components/magazine/MagazineArchive";
import ArticleCard from "@/components/ArticleCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { getEditorsPicks, getRotatingAllArticles, getTrendingArticles } from "@/lib/data/articles";
import Link from "next/link";
import IssueShelf from "@/components/issues/IssueShelf";
import { categories } from "@/lib/data/categories";
import { getIssueStats, issues } from "@/lib/data/issues";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Magazine Archive",
  description:
    "Browse every Flourish Christian Magazine story. Search, filter by category, and discover editor's picks and trending reads.",
  path: "/magazine",
});

// Regenerates every 10 seconds so the rotating "Editor's Pick", "Trending",
// and full-archive order (see `getEditorsPicks` / `getTrendingArticles` /
// `getRotatingAllArticles`) reach visitors on schedule, instead of staying
// frozen at build time.
export const revalidate = 10;

export default function MagazinePage() {
  const editorsPicks = getEditorsPicks(3);
  const trending = getTrendingArticles(3);
  const allArticles = getRotatingAllArticles();
  const issueOptions = issues
    .filter((i) => getIssueStats(i.number).stories > 0)
    .map((i) => ({ number: i.number, label: `Issue No. ${i.number}: ${i.title}` }));

  return (
    <div>
      <section className="bg-plum py-12 sm:py-14">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <Reveal>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-gold-light">
              The Magazine
            </p>
            <h1 className="mt-4 font-serif text-4xl leading-tight text-white sm:text-5xl">
              Every Story. One Digital Library.
            </h1>
            <p className="mx-auto mt-5 max-w-xl font-sans text-base leading-relaxed text-white/75">
              Search, filter, and explore the full Flourish archive: faith, purpose, family,
              wellness, leadership, and more.
            </p>
          </Reveal>
        </div>
      </section>

      {(editorsPicks.length > 0 || trending.length > 0) && (
        <section className="bg-cream py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            {editorsPicks.length > 0 && (
              <Reveal className="mb-10 block">
                <SectionHeading eyebrow="Editor's Pick" title="Hand-Selected for You" />
                <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {editorsPicks.map((a) => (
                    <ArticleCard key={a.slug} article={a} />
                  ))}
                </div>
              </Reveal>
            )}
            {trending.length > 0 && (
              <Reveal className="block">
                <SectionHeading eyebrow="Most Read" title="Trending This Week" />
                <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
                  {trending.map((a) => (
                    <ArticleCard key={a.slug} article={a} size="compact" />
                  ))}
                </div>
              </Reveal>
            )}
          </div>
        </section>
      )}

      <section className="bg-white pb-8 pt-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal className="block">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <SectionHeading eyebrow="The Issues" title="Browse Every Issue of Flourish" />
              <Link
                href="/issues"
                className="group/link inline-flex items-center gap-1 font-sans text-xs font-semibold uppercase tracking-[0.1em] text-burgundy hover:text-plum"
              >
                All Issues
                <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1">
                  &rarr;
                </span>
              </Link>
            </div>
            <div className="mx-auto mt-12 max-w-4xl">
              <IssueShelf />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory pb-12 pt-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal className="block">
            <SectionHeading eyebrow="Full Archive" title="Browse All Stories" />
            <div className="mt-6">
              <MagazineArchive
                articles={allArticles}
                categories={categories}
                issueOptions={issueOptions}
              />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
