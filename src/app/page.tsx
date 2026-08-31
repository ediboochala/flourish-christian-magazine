import Link from "next/link";
import Hero from "@/components/home/Hero";
import ScriptureBanner from "@/components/home/ScriptureBanner";
import InThisIssue from "@/components/home/InThisIssue";
import FeaturedStory from "@/components/home/FeaturedStory";
import ArticleCard from "@/components/ArticleCard";
import EventCard from "@/components/EventCard";
import TestimonyCard from "@/components/TestimonyCard";
import NewsletterCTA from "@/components/NewsletterCTA";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import SectionHeading from "@/components/ui/SectionHeading";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import { getFeaturedArticle, getLatestArticles } from "@/lib/data/articles";
import { getUpcomingEvents } from "@/lib/data/events";
import { testimonies } from "@/lib/data/testimonies";
import { authors } from "@/lib/data/authors";

export default function Home() {
  const featured = getFeaturedArticle();
  const latest = getLatestArticles(6).filter((a) => a.slug !== featured.slug);
  const spotlightEvents = getUpcomingEvents(3);
  const spotlightTestimony = testimonies[0];
  const spotlightContributors = authors.slice(1, 5);

  return (
    <>
      <Hero />

      <ScriptureBanner />

      <Reveal>
        <FeaturedStory article={featured} />
      </Reveal>

      {/* LATEST STORIES */}
      <section className="bg-white py-20 sm:py-24">
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
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {latest.slice(0, 6).map((article, i) => (
              <Reveal key={article.slug} delayMs={i * 80}>
                <ArticleCard article={article} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <InThisIssue />

      {/* COMMUNITY / EDITORIAL FEATURE */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-10">
          <Reveal variant="left" className="order-2 lg:order-1">
            <Eyebrow>From the Community</Eyebrow>
            <h2 className="text-h2 mt-4 font-serif text-plum">
              Meet the Women Behind the Stories
            </h2>
            <p className="mt-5 font-sans text-base leading-relaxed text-charcoal-soft">
              Flourish is written by women, for women — pastors&apos; wives, mothers, professionals,
              students, and leaders within the M.F.M Women Foundation Florida community and beyond,
              each contributing their voice, wisdom, and lived experience.
            </p>
            <Link
              href="/contributors"
              className="group/link mt-7 inline-flex items-center gap-1 rounded-full bg-plum px-7 py-3.5 font-sans text-xs font-semibold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-burgundy active:translate-y-0 active:scale-[0.97]"
            >
              Meet Our Contributors
              <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1">
                →
              </span>
            </Link>
            <div className="mt-10 grid grid-cols-2 gap-4">
              {spotlightContributors.map((author) => (
                <div key={author.slug} className="flex items-center gap-3">
                  <span className="relative h-11 w-11 flex-shrink-0 overflow-hidden rounded-full">
                    <PlaceholderImage image={author.image} sizes="44px" />
                  </span>
                  <span className="font-sans text-sm font-medium text-charcoal">{author.name}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal
            variant="scale"
            className="img-zoom relative order-1 aspect-[4/5] w-full overflow-hidden rounded-2xl lg:order-2"
          >
            <PlaceholderImage
              image={{ alt: "Editorial photo of Flourish contributors in community", tone: "gold" }}
            />
          </Reveal>
        </div>
      </section>

      {/* EVENTS */}
      <section className="grain-overlay bg-plum py-20 sm:py-24">
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
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {spotlightEvents.map((event, i) => (
              <Reveal key={event.slug} delayMs={i * 80}>
                <EventCard event={event} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONY SPOTLIGHT */}
      {spotlightTestimony && (
        <section className="bg-ivory py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal>
              <SectionHeading eyebrow="Stories of Faith" title="A Story Worth Sharing" />
            </Reveal>
            <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-3">
              <Reveal variant="left" className="lg:col-span-1">
                <TestimonyCard testimony={spotlightTestimony} />
              </Reveal>
              <Reveal
                variant="right"
                delayMs={100}
                className="flex flex-col justify-center lg:col-span-2"
              >
                <p className="pull-quote">&ldquo;{spotlightTestimony.body[0]}&rdquo;</p>
                <p className="mt-4 font-sans text-sm text-charcoal-soft">
                  Your story matters. Your experience may be the encouragement another woman needs.
                </p>
                <Link
                  href="/testimonies"
                  className="mt-6 inline-flex w-fit items-center rounded-full border border-plum px-7 py-3 font-sans text-xs font-semibold uppercase tracking-[0.1em] text-plum transition-all duration-300 hover:-translate-y-0.5 hover:bg-plum hover:text-white active:translate-y-0 active:scale-[0.97]"
                >
                  Share Your Testimony
                </Link>
              </Reveal>
            </div>
          </div>
        </section>
      )}

      {/* CONTRIBUTOR CTA */}
      <section className="bg-cream py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <Reveal>
            <Eyebrow className="justify-center">Write for Flourish</Eyebrow>
            <h2 className="text-h2 mt-4 font-serif text-plum">
              Your Story Could Encourage Another Woman.
            </h2>
            <p className="mx-auto mt-5 max-w-xl font-sans text-base leading-relaxed text-charcoal-soft">
              Flourish is a space for Christian women to share wisdom, experiences, lessons,
              testimonies, perspectives, and stories that can encourage others.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/write-for-flourish"
                className="inline-flex items-center rounded-full bg-plum px-8 py-4 font-sans text-sm font-semibold uppercase tracking-[0.08em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-burgundy active:translate-y-0 active:scale-[0.97]"
              >
                Share Your Story
              </Link>
              <Link
                href="/write-for-flourish"
                className="inline-flex items-center rounded-full border border-plum px-8 py-4 font-sans text-sm font-semibold uppercase tracking-[0.08em] text-plum transition-all duration-300 hover:-translate-y-0.5 hover:bg-plum hover:text-white active:translate-y-0 active:scale-[0.97]"
              >
                Become a Contributor
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <NewsletterCTA />
    </>
  );
}
