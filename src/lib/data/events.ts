import { FlourishEvent, MonthlyMeeting } from "@/lib/types";

/**
 * The standing monthly gathering of M.F.M Women Foundation Florida. Shown
 * as a notice on the Events page and homepage, not as a dated event.
 *
 * SECURITY: the Zoom Meeting ID must never be published here or rendered
 * anywhere on the site — it is shared with attendees directly.
 */
export const monthlyMeeting: MonthlyMeeting = {
  name: "Women Foundation Florida",
  cadence: "Last Saturday of every month",
  time: "6:00 PM ET",
  platform: "Zoom",
};

/**
 * The Events section is intentionally centered on the standing monthly
 * meeting above — the one gathering that brings the whole Women Foundation
 * together. Branch-level activities (retreats, Bible studies, workshops,
 * fellowships, outreach days) belong to individual chapters and are not
 * listed here. If a foundation-wide dated event is ever added, push it
 * into this array and the Events page and homepage will pick it up.
 */
export const events: FlourishEvent[] = [
  {
    slug: "womens-retreat-2026-rekindling-the-altar",
    title: "Women's Retreat 2026: Rekindling the Altar",
    category: "Retreats",
    date: "2026-10-10",
    time: "9:00 AM – 4:00 PM CT",
    location: "MFM Banquet Hall, 10000 Kleckley Drive, Houston, TX 77075",
    description:
      "Seven hours at the Master's feet. Women of M.F.M Women Foundation Mega Region 2 USA gather for a day of prayer, worship, teaching, fellowship, and transformation, centered on the theme ‘Rekindling the Altar’ (Leviticus 6:12–13). Ministering: Pastor Oluwatoyin Oni (President, Women Foundation Mega Region 2 USA) and Pastor Olumide Oni (PRO, MFM USA Mega Region 2), under the leadership of Dr. Pastor (Mrs.) Folashade Olukoya (International President, MFM Women Foundation) and Dr. D.K. Olukoya (General Overseer, MFM Worldwide). Come, be renewed at His feet.",
    image: {
      src: "/images/events/womens-retreat-2026-rekindling-the-altar.jpg",
      alt: "Women's Retreat 2026 flyer: Rekindling the Altar, hosted by M.F.M Women Foundation Mega Region 2 USA, October 10 2026 at the MFM Banquet Hall in Houston, Texas",
      tone: "plum",
    },
    registrationOpen: true,
    featured: true,
  },
];

export function getEventBySlug(slug: string): FlourishEvent | undefined {
  return events.find((e) => e.slug === slug);
}

export function getUpcomingEvents(limit?: number): FlourishEvent[] {
  const sorted = [...events].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  return typeof limit === "number" ? sorted.slice(0, limit) : sorted;
}
