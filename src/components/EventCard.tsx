import Link from "next/link";
import { FlourishEvent } from "@/lib/types";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import { formatDate } from "@/lib/utils";
import { Calendar, Clock, MapPin } from "lucide-react";

export default function EventCard({ event }: { event: FlourishEvent }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_1px_2px_rgba(36,31,33,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-16px_rgba(58,15,43,0.25)]">
      <Link href={`/events/${event.slug}`} className="img-zoom relative aspect-[16/9] w-full overflow-hidden">
        <PlaceholderImage image={event.image} />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-plum backdrop-blur-sm">
          {event.category}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <Link href={`/events/${event.slug}`}>
          <h3 className="font-serif text-xl leading-snug text-plum hover:text-burgundy transition-colors">
            {event.title}
          </h3>
        </Link>
        <div className="mt-3 space-y-1.5 font-sans text-sm text-charcoal-soft">
          <p className="flex items-center gap-2">
            <Calendar className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
            {formatDate(event.date)}
          </p>
          <p className="flex items-center gap-2">
            <Clock className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
            {event.time}
          </p>
          <p className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
            {event.location}
          </p>
        </div>
        <p className="mt-4 flex-1 font-sans text-sm leading-relaxed text-charcoal-soft line-clamp-3">
          {event.description}
        </p>
        <div className="mt-5 flex items-center justify-between border-t border-charcoal/10 pt-4">
          <span
            className={`font-sans text-xs font-semibold uppercase tracking-[0.1em] ${
              event.registrationOpen ? "text-burgundy" : "text-charcoal-soft"
            }`}
          >
            {event.registrationOpen ? "Registration Open" : "Registration Closed"}
          </span>
          <Link
            href={`/events/${event.slug}`}
            className="group/link inline-flex items-center gap-1 font-sans text-xs font-semibold uppercase tracking-[0.1em] text-plum hover:text-burgundy"
          >
            Details
            <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
