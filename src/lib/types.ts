/**
 * FLOURISH CHRISTIAN MAGAZINE — CONTENT TYPES
 * -----------------------------------------------------------------------
 * These types define the shape of every content entity on the platform.
 * Today they are populated from the static files in `src/lib/data/`.
 * They are intentionally shaped so that a future CMS integration
 * (Sanity, Contentful, Payload, WordPress headless, etc.) can populate
 * the exact same interfaces without changing a single UI component —
 * simply replace the functions in `src/lib/content.ts` with real
 * fetch/query calls.
 * -----------------------------------------------------------------------
 */

export type ImageTone = "plum" | "burgundy" | "gold" | "rose" | "charcoal";

/** Botanical motif used by the generative placeholder art. Each carries
 *  a Christian association: olive (peace), wheat (harvest / bread of
 *  life), vine ("I am the vine"), lily ("consider the lilies"), palm
 *  (victory), fern (humility / new growth). When omitted, a motif is
 *  derived from the image's `alt`/`src` text and its `tone`. */
export type NatureMotif = "olive" | "wheat" | "vine" | "lily" | "palm" | "fern";

/** A placeholder-safe image reference. `src` is optional on purpose —
 *  when empty, the UI renders an elegant editorial placeholder instead
 *  of a broken image or an invented stock photo. */
export interface MediaImage {
  src?: string;
  alt: string;
  tone?: ImageTone;
  /** Overrides the auto-derived botanical motif for the placeholder art. */
  motif?: NatureMotif;
  credit?: string;
}

export interface Category {
  slug: string;
  name: string;
  description: string;
  image: MediaImage;
}

export interface Author {
  slug: string;
  name: string;
  role?: string;
  bio: string;
  focusAreas: string[];
  image: MediaImage;
}

export interface Article {
  slug: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  categorySlug: string;
  authorSlug: string;
  publishedAt: string; // ISO date
  readingTimeMinutes: number;
  heroImage: MediaImage;
  featured?: boolean;
  editorsPick?: boolean;
  trending?: boolean;
  /** Marks a newly published story. Adds a "New" badge on cards and floats
   *  the article to the top of listings, ahead of older stories. */
  isNew?: boolean;
  /** Editorial priority within an issue. Lower number = higher priority
   *  (1 leads the issue). Undefined sorts after every prioritised story. */
  priority?: number;
  tags?: string[];
  body: string[]; // paragraphs / simple markup blocks (## for h2, > for pull-quote)
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
  };
}

export type EventCategory =
  | "Women's Conferences"
  | "Bible Studies"
  | "Prayer Meetings"
  | "Workshops"
  | "Fellowships"
  | "Retreats"
  | "MFM Women's Ministry Events"
  | "Community Outreach";

export interface FlourishEvent {
  slug: string;
  title: string;
  category: EventCategory;
  date: string; // ISO date
  time: string; // display string, e.g. "10:00 AM – 1:00 PM EST"
  location: string;
  description: string;
  image: MediaImage;
  registrationOpen: boolean;
  featured?: boolean;
}

export interface Testimony {
  slug: string;
  title: string;
  intro: string;
  authorName: string;
  publishedAt: string;
  image: MediaImage;
  body: string[];
}

/** A single labelled fact in a meeting's opening details, e.g.
 *  { label: "Opening Prayer", value: "Pastor Mrs. Olajide (MFM Tampa)" }. */
export interface MeetingDetail {
  label: string;
  value: string;
}

/** Minutes from a chapter meeting. Text-only by design — no imagery — so
 *  it can be transcribed straight from meeting notes. */
export interface MeetingMinutes {
  slug: string;
  organization: string;
  chapters: string[];
  details: MeetingDetail[];
  keyInsights: string[];
  anchorScriptures: string[];
  benefits: string[];
  prayerPoints: string[];
  announcements: string[];
  nextMeeting: string;
}

/** An invitation to an upcoming chapter meeting. */
export interface MeetingInvitation {
  slug: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  attendance: string;
  zoomMeetingId?: string;
  zoomPasscode?: string;
}
