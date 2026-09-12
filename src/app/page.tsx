import Link from "next/link";
import Hero from "@/components/home/Hero";
import ScriptureBanner from "@/components/home/ScriptureBanner";
import FeaturedStory from "@/components/home/FeaturedStory";
import ArticleCard from "@/components/ArticleCard";
import CrusadeBanner from "@/components/events/CrusadeBanner";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { getFeaturedArticle, getLatestArticles } from "@/lib/data/articles";

export default function Home() {
  const featured = getFeaturedArticle();
  // Pull one extra so the grid still shows a full six after the featured
  // story is filtered out — six keeps the 3-column rows balanced.
  const latest = getLatestArticles(7).filter((a) => a.slug !== featured.slug);

  return (
    <>
      <Hero />

      <ScriptureBanner />

      {/* CRUSADE — promotional banner for the foundation-wide Great Florida
          Deliverance Crusade, linking out to Joy FM Tampa. */}
      <section className="bg-white pb-4 pt-2">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <Reveal variant="scale">
            <CrusadeBanner />
          </Reveal>
        </div>
      </section>

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
            {latest.slice(0, 6).map((article, i) => (
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
