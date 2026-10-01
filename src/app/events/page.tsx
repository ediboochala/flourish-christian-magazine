import type { Metadata } from "next";
import EventCard from "@/components/EventCard";
import MonthlyMeetingNotice from "@/components/events/MonthlyMeetingNotice";
import NewsletterCTA from "@/components/NewsletterCTA";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { getUpcomingEvents } from "@/lib/data/events";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Events",
  description:
    "Upcoming gatherings and the standing monthly meeting of M.F.M Women Foundation Florida — the one gathering that brings the whole Women Foundation together on Zoom.",
  path: "/events",
});

export default function EventsPage() {
  const upcoming = getUpcomingEvents();

  return (
    <div>
      <section className="bg-plum py-12 sm:py-14">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <Reveal>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-gold-light">
              What&apos;s Happening at Flourish
            </p>
            <h1 className="mt-4 font-serif text-4xl leading-tight text-white sm:text-5xl">
              Events
            </h1>
            <p className="mx-auto mt-5 max-w-xl font-sans text-base leading-relaxed text-white/75">
              Foundation-wide gatherings alongside the standing monthly meeting that brings the
              whole Women Foundation together. Branch retreats, Bible studies, and fellowships are
              organised locally by each chapter.
            </p>
          </Reveal>
        </div>
      </section>

      {upcoming.length > 0 && (
        <section className="bg-ivory py-12 sm:py-14">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal>
              <SectionHeading eyebrow="Mark Your Calendar" title="Upcoming Events" />
            </Reveal>
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {upcoming.map((event, i) => (
                <Reveal key={event.slug} delayMs={i * 80} variant="scale">
                  <EventCard event={event} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-cream py-12">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <Reveal variant="scale">
            <MonthlyMeetingNotice />
          </Reveal>
        </div>
      </section>

      <NewsletterCTA />
    </div>
  );
}
