import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, MapPin } from "lucide-react";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import ShareButtons from "@/components/ShareButtons";
import { events, getEventBySlug, getUpcomingEvents } from "@/lib/data/events";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) return {};
  return { title: event.title, description: event.description };
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) notFound();

  const other = getUpcomingEvents()
    .filter((e) => e.slug !== event.slug)
    .slice(0, 3);

  return (
    <div>
      <section className="relative overflow-hidden bg-plum">
        <div className="absolute inset-0 opacity-40">
          <PlaceholderImage image={event.image} priority />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-plum via-plum/85 to-plum/55" />
        <div className="relative mx-auto max-w-3xl px-6 pb-16 pt-32 text-center lg:px-10">
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
            {event.category}
          </span>
          <h1 className="mt-4 font-serif text-3xl leading-tight text-white sm:text-5xl">
            {event.title}
          </h1>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 px-6 lg:grid-cols-3 lg:px-10">
          <div className="lg:col-span-2">
            <h2 className="font-serif text-2xl text-plum">About This Event</h2>
            <p className="mt-4 font-sans text-base leading-relaxed text-charcoal-soft">
              {event.description}
            </p>
            <div className="mt-10 border-t border-charcoal/10 pt-8">
              <ShareButtons title={event.title} prompt="Know a woman who'd love to join us? Share this event." />
            </div>
          </div>

          <div className="rounded-2xl bg-cream p-6 lg:sticky lg:top-28 lg:self-start">
            <dl className="space-y-4 font-sans text-sm text-charcoal">
              <div className="flex items-start gap-3">
                <Calendar className="mt-0.5 h-4 w-4 text-gold" aria-hidden="true" />
                <div>
                  <dt className="font-semibold">Date</dt>
                  <dd className="text-charcoal-soft">{formatDate(event.date)}</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 text-gold" aria-hidden="true" />
                <div>
                  <dt className="font-semibold">Time</dt>
                  <dd className="text-charcoal-soft">{event.time}</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-gold" aria-hidden="true" />
                <div>
                  <dt className="font-semibold">Location</dt>
                  <dd className="text-charcoal-soft">{event.location}</dd>
                </div>
              </div>
            </dl>

            <button
              disabled={!event.registrationOpen}
              className="mt-6 w-full rounded-full bg-plum px-6 py-3.5 font-sans text-xs font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-burgundy disabled:cursor-not-allowed disabled:bg-charcoal/20 disabled:text-charcoal-soft"
            >
              {event.registrationOpen ? "Register Now" : "Registration Closed"}
            </button>
            <button className="mt-3 w-full rounded-full border border-plum px-6 py-3.5 font-sans text-xs font-semibold uppercase tracking-[0.1em] text-plum transition-colors hover:bg-plum hover:text-white">
              Add to Calendar
            </button>
          </div>
        </div>
      </section>

      {other.length > 0 && (
        <section className="bg-cream py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <h2 className="font-serif text-2xl text-plum sm:text-3xl">More Events</h2>
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {other.map((e) => (
                <Link
                  key={e.slug}
                  href={`/events/${e.slug}`}
                  className="rounded-2xl bg-white p-6 shadow-[0_1px_2px_rgba(36,31,33,0.06)] transition-shadow hover:shadow-[0_18px_40px_-16px_rgba(58,15,43,0.25)]"
                >
                  <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-burgundy">
                    {e.category}
                  </p>
                  <h3 className="mt-2 font-serif text-lg text-plum">{e.title}</h3>
                  <p className="mt-2 font-sans text-xs text-charcoal-soft">{formatDate(e.date)}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
