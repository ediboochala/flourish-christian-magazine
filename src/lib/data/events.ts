import { FlourishEvent } from "@/lib/types";

/**
 * PLACEHOLDER EVENT CONTENT — replace with verified M.F.M Women Foundation Florida event
 * details before publishing. Dates, locations, and registration details below are
 * illustrative only.
 */
export const events: FlourishEvent[] = [
  {
    slug: "flourish-women-conference-2026",
    title: "Flourish Women's Conference 2026",
    category: "Women's Conferences",
    date: "2026-10-17",
    time: "9:00 AM to 4:00 PM EST",
    location: "M.F.M Women Foundation Florida, Main Auditorium [placeholder address]",
    description:
      "A full day of worship, teaching, and community for women ready to step into a new season of purpose. [Placeholder, confirm theme, speakers, and schedule.]",
    image: { alt: "Editorial photo for Flourish Women's Conference 2026", tone: "plum" },
    registrationOpen: true,
    featured: true,
  },
  {
    slug: "midweek-womens-bible-study",
    title: "Midweek Women's Bible Study",
    category: "Bible Studies",
    date: "2026-08-20",
    time: "6:30 PM to 8:00 PM EST",
    location: "M.F.M Women Foundation Florida, Fellowship Hall [placeholder address]",
    description: "A recurring weekly study working verse-by-verse through Scripture, open to all women. [Placeholder details.]",
    image: { alt: "Editorial photo for Midweek Women's Bible Study", tone: "gold" },
    registrationOpen: true,
  },
  {
    slug: "womens-prayer-and-fasting-morning",
    title: "Women's Prayer & Fasting Morning",
    category: "Prayer Meetings",
    date: "2026-09-05",
    time: "6:00 AM to 8:00 AM EST",
    location: "M.F.M Women Foundation Florida, Prayer Chapel [placeholder address]",
    description: "A dedicated morning of corporate prayer and fasting for the women of the ministry. [Placeholder details.]",
    image: { alt: "Editorial photo for Women's Prayer and Fasting Morning", tone: "burgundy" },
    registrationOpen: false,
  },
  {
    slug: "purpose-and-career-workshop",
    title: "Purpose & Career Workshop",
    category: "Workshops",
    date: "2026-09-19",
    time: "11:00 AM to 2:00 PM EST",
    location: "M.F.M Women Foundation Florida, Conference Room [placeholder address]",
    description: "A practical workshop on aligning career decisions with calling, featuring guest facilitators. [Placeholder details.]",
    image: { alt: "Editorial photo for Purpose and Career Workshop", tone: "rose" },
    registrationOpen: true,
  },
  {
    slug: "sisters-fellowship-brunch",
    title: "Sisters' Fellowship Brunch",
    category: "Fellowships",
    date: "2026-09-26",
    time: "10:00 AM to 12:30 PM EST",
    location: "M.F.M Women Foundation Florida, Fellowship Hall [placeholder address]",
    description: "A relaxed morning of connection, testimony sharing, and community building over brunch. [Placeholder details.]",
    image: { alt: "Editorial photo for Sisters' Fellowship Brunch", tone: "gold" },
    registrationOpen: true,
  },
  {
    slug: "annual-womens-retreat",
    title: "Annual Women's Retreat",
    category: "Retreats",
    date: "2026-11-13",
    time: "Friday 5:00 PM to Sunday 12:00 PM EST",
    location: "Off-site Retreat Center [placeholder location]",
    description: "A weekend away for rest, deep teaching, and renewal, designed for women in every season of life. [Placeholder details.]",
    image: { alt: "Editorial photo for Annual Women's Retreat", tone: "plum" },
    registrationOpen: false,
    featured: true,
  },
  {
    slug: "community-outreach-day",
    title: "Community Outreach & Service Day",
    category: "Community Outreach",
    date: "2026-10-03",
    time: "9:00 AM to 1:00 PM EST",
    location: "Tampa Community Partner Site [placeholder location]",
    description: "Flourish women serving together in the greater Tampa community. [Placeholder details, confirm partner organization.]",
    image: { alt: "Editorial photo for Community Outreach and Service Day", tone: "burgundy" },
    registrationOpen: true,
  },
];

export function getEventBySlug(slug: string): FlourishEvent | undefined {
  return events.find((e) => e.slug === slug);
}

export function getUpcomingEvents(limit?: number): FlourishEvent[] {
  const sorted = [...events].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  return typeof limit === "number" ? sorted.slice(0, limit) : sorted;
}
