import type { Metadata } from "next";
import EventCard from "@/components/EventCard";
import { getUpcomingEvents } from "@/lib/data/events";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Women's conferences, Bible studies, prayer meetings, workshops, fellowships, and retreats at Flourish Christian Magazine and M.F.M Women Foundation Florida.",
};

export default function EventsPage() {
  const events = getUpcomingEvents();

  return (
    <div>
      <section className="bg-plum py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-gold-light">
            What&apos;s Happening at Flourish
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-tight text-white sm:text-5xl">
            Events &amp; Gatherings
          </h1>
          <p className="mx-auto mt-5 max-w-xl font-sans text-base leading-relaxed text-white/75">
            Conferences, Bible studies, prayer meetings, workshops, fellowships, and retreats for
            the women of M.F.M Women Foundation Florida and the wider Flourish community.
          </p>
        </div>
      </section>

      <section className="bg-ivory py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          {events.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {events.map((event) => (
                <EventCard key={event.slug} event={event} />
              ))}
            </div>
          ) : (
            <p className="font-sans text-sm text-charcoal-soft">
              No upcoming events scheduled at this time — check back soon.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
