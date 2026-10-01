import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin } from "lucide-react";
import { getUpcomingEvents } from "@/lib/data/events";
import { formatDate } from "@/lib/utils";

/**
 * Announces the next foundation-wide dated event (see `events` in
 * `src/lib/data/events.ts`) at a glance on the homepage. Renders nothing
 * when the array is empty, so it never leaves a dead section behind.
 */
export default function UpcomingEventBanner() {
  const [event] = getUpcomingEvents(1);
  if (!event) return null;

  return (
    <section className="grain-overlay relative overflow-hidden bg-plum py-12 sm:py-16">
      <div className="aurora-backdrop opacity-30" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[22rem_1fr]">
          <Link
            href={`/events/${event.slug}`}
            className="img-zoom relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-2xl shadow-[0_18px_50px_-12px_rgba(0,0,0,0.5)] lg:mx-0"
          >
            {event.image.src && (
              <Image
                src={event.image.src}
                alt={event.image.alt}
                fill
                sizes="(min-width: 1024px) 22rem, (min-width: 640px) 24rem, 90vw"
                className="object-cover"
              />
            )}
          </Link>

          <div className="text-center lg:text-left">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-gold-light">
              Save the Date &bull; {event.category}
            </p>
            <Link href={`/events/${event.slug}`}>
              <h2 className="mt-3 font-serif text-3xl leading-tight text-white transition-colors hover:text-gold-light sm:text-4xl">
                {event.title}
              </h2>
            </Link>
            <div className="mt-5 flex flex-col items-center gap-2 font-sans text-sm text-white/80 lg:items-start">
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4 flex-shrink-0 text-gold-light" aria-hidden="true" />
                {formatDate(event.date)} &bull; {event.time}
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 flex-shrink-0 text-gold-light" aria-hidden="true" />
                {event.location}
              </span>
            </div>
            <p className="mx-auto mt-5 max-w-xl font-sans text-sm leading-relaxed text-white/75 lg:mx-0">
              {event.description}
            </p>
            <Link
              href={`/events/${event.slug}`}
              className="btn-shine group/link mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-gold-light px-7 py-3.5 font-sans text-xs font-semibold uppercase tracking-[0.1em] text-plum transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:scale-[0.97]"
            >
              View Event Details
              <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1">
                &rarr;
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
