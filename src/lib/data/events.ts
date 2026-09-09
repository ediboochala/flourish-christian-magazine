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
export const events: FlourishEvent[] = [];

export function getEventBySlug(slug: string): FlourishEvent | undefined {
  return events.find((e) => e.slug === slug);
}

export function getUpcomingEvents(limit?: number): FlourishEvent[] {
  const sorted = [...events].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  return typeof limit === "number" ? sorted.slice(0, limit) : sorted;
}
