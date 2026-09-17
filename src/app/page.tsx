import Link from "next/link";
import Hero from "@/components/home/Hero";
import ScriptureBanner from "@/components/home/ScriptureBanner";
import FeaturedStory from "@/components/home/FeaturedStory";
import ArticleCard from "@/components/ArticleCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { getFeaturedArticle, getRotatingLatestArticles } from "@/lib/data/articles";

// Regenerates the static homepage every 2 minutes so the rotating
// "Editor's Feature" (see `getFeaturedArticle`) and "Latest Stories" rail
// (see `getRotatingLatestArticles`) actually reach visitors on schedule,
// instead of staying frozen at build time.
export const revalidate = 120;

export default function Home() {
  const featured = getFeaturedArticle();
  const latest = getRotatingLatestArticles(6, featured.slug);

  return (
    <>
      <Hero />

      <ScriptureBanner />

      <Reveal>
        <FeaturedStory article={featured} />
      </Reveal>

      {/* LATEST STORIES */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
              <SectionHeading eyebrow="Fresh From Flourish" title="Latest Stories" />
              <Link
                href="/magazine"
                className="group/link inline-flex items-center gap-1 font-sans text-xs font-semibold uppercase tracking-[0.1em] text-burgundy hover:text-plum"
              >
                View All Stories
                <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </Reveal>
          <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {latest.map((article, i) => (
              <Reveal key={article.slug} delayMs={i * 80}>
                <ArticleCard article={article} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
