import Image from "next/image";
import { GREAT_FLORIDA_CRUSADE_URL } from "@/lib/links";

/**
 * Promotional banner for "The Great Florida Deliverance Crusade" — a
 * Mountain of Fire and Miracles Ministries Tampa event. The whole banner
 * links out to the crusade page on MFM Tampa's own site. Shown on the
 * homepage and the Events page.
 */
export default function CrusadeBanner() {
  return (
    <a
      href={GREAT_FLORIDA_CRUSADE_URL}
      target="_blank"
      rel="noreferrer"
      className="group/banner block overflow-hidden rounded-2xl border border-plum/15 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
      aria-label="Mountain of Fire and Miracles Ministries Tampa presents The Great Florida Deliverance Crusade and Church Property Dedication. Sunday, September 20th, 2026, 4PM at the Yuengling Center, USF, Tampa, FL. Everyone welcome, admission free. Opens the crusade page on MFM Tampa's site."
    >
      <Image
        src="/images/events/great-florida-deliverance-crusade-banner.png"
        alt="Mountain of Fire and Miracles Ministries Tampa presents The Great Florida Deliverance Crusade and Church Property Dedication — Sunday, September 20th, 2026, 4PM prompt, at the Yuengling Center, University of South Florida, 12499 USF Bull Run Drive, Tampa, FL 33620. Everyone is welcome, admission is free."
        width={1500}
        height={276}
        unoptimized
        className="h-auto w-full transition-transform duration-300 group-hover/banner:scale-[1.01]"
      />
    </a>
  );
}
