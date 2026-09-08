import Link from "next/link";
import Hero from "@/components/home/Hero";
import ScriptureBanner from "@/components/home/ScriptureBanner";
import FeaturedStory from "@/components/home/FeaturedStory";
import HomeTiles from "@/components/home/HomeTiles";
import ArticleCard from "@/components/ArticleCard";
import EventCard from "@/components/EventCard";
import MonthlyMeetingNotice from "@/components/events/MonthlyMeetingNotice";
import NewsletterCTA from "@/components/NewsletterCTA";
import SectionHeading from "@/components/ui/SectionHeading";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import { getFeaturedArticle, getLatestArticles } from "@/lib/data/articles";
import { getUpcomingEvents } from "@/lib/data/events";
import { editorialBoard } from "@/lib/data/editorialBoard";

export default function Home() {
  const featured = getFeaturedArticle();
  const latest = getLatestArticles(6).filter((a) => a.slug !== featured.slug);
  const spotlightEvents = getUpcomingEvents(3);

  return (
    <>
      <Hero />

      <ScriptureBanner />

      <Reveal>
        <FeaturedStory article={featured} />
      </Reveal>

      {/* LATEST STORIES */}
      <section className="bg-white py-14 sm:py-16">
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
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {latest.slice(0, 6).map((article, i) => (
              <Reveal key={article.slug} delayMs={i * 80}>
                <ArticleCard article={article} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="grain-overlay bg-plum py-14 sm:py-16">
        <div className="relative z-[2] mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
              <SectionHeading
                eyebrow="What's Happening at Flourish"
                title="Upcoming Events"
                tone="dark"
              />
              <Link
                href="/events"
                className="group/link inline-flex items-center gap-1 font-sans text-xs font-semibold uppercase tracking-[0.1em] text-gold-light hover:text-white"
              >
                View All Events
                <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </Reveal>
          <Reveal>
            <div className="mt-8">
              <MonthlyMeetingNotice />
            </div>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {spotlightEvents.map((event, i) => (
              <Reveal key={event.slug} delayMs={i * 80}>
                <EventCard event={event} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EDITORIAL BOARD */}
      <section id="editorial-board" className="scroll-mt-24 bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <Reveal>
            <Eyebrow>Editorial Board</Eyebrow>
            <h2 className="text-h2 mt-3 font-serif text-plum">Meet Our Editorial Board</h2>
            <p className="mt-4 font-sans text-base leading-relaxed text-charcoal-soft">
              Guiding every issue is our Editorial Board, made up of pastors and pastors&apos;
              wives from Florida.
            </p>
            <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
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

      <HomeTiles />

      <NewsletterCTA />
    </>
  );
}
