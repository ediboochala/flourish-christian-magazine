import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { JOY_FM_LISTEN_LIVE_URL } from "@/lib/links";

/**
 * Media-partner mention for The Joy FM Tampa, shown alongside the crusade
 * banner on the Events page. Deliberately smaller and quieter than
 * CrusadeBanner — this is a partner credit, not the primary promo.
 */
export default function JoyFmBanner() {
  return (
    <a
      href={JOY_FM_LISTEN_LIVE_URL}
      target="_blank"
      rel="noreferrer"
      className="group/joyfm mt-4 flex items-center gap-4 rounded-2xl border border-plum/15 bg-cream p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg sm:p-5"
    >
      <span className="relative h-10 w-20 flex-shrink-0 sm:h-12 sm:w-24">
        <Image
          src="/images/events/joy-fm-tampa-logo.png"
          alt="The Joy FM Tampa"
          fill
          className="object-contain"
        />
      </span>
      <div className="min-w-0 flex-1">
        <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-burgundy">
          Media Partner
        </p>
        <p className="mt-0.5 truncate font-serif text-base text-plum sm:text-lg">
          Tune in to The Joy FM Tampa
        </p>
      </div>
      <ArrowUpRight
        className="h-5 w-5 flex-shrink-0 text-plum transition-transform duration-300 group-hover/joyfm:translate-x-0.5 group-hover/joyfm:-translate-y-0.5"
        aria-hidden="true"
      />
    </a>
  );
}
