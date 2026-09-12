import { Author } from "@/lib/types";

/**
 * CONTRIBUTORS
 * Bylines are shown as "Name, Location" — no author bio is displayed on
 * articles or contributor profiles. Pastor Tayo Oluwayemiwo, Pastor Suzan
 * Olunuga, Winnie Darius and Pastor Mrs Aderonke Olajide are real
 * September 2026 issue contributors. The remaining entries came from the
 * original scaffold; the user asked
 * that any name they did not supply be shown as "Anonymous Contributor,
 * FL" until real names are provided. Slugs are kept stable so existing
 * article and contributor URLs keep working.
 *
 * `editorialTeam: true` marks the Flourish editorial team / editorial
 * board (the collective byline plus the two contributing pastors). Their
 * article bylines show as plain text with no link to a profile or the
 * Editorial Team page, so the platform highlights its wider pool of
 * women contributors rather than the editorial team.
 */
export const authors: Author[] = [
  {
    slug: "editorial-team",
    name: "Flourish Editorial Team",
    role: "Editorial",
    editorialTeam: true,
    bio: "",
    focusAreas: ["Editorial", "Community"],
    image: { alt: "Portrait placeholder for Flourish Editorial Team", tone: "plum" },
  },
  {
    slug: "adaeze-okafor",
    name: "Anonymous Contributor, FL",
    role: "Contributing Writer",
    bio: "",
    focusAreas: ["Faith & Spirituality", "Leadership"],
    image: { alt: "Portrait placeholder for a Flourish contributor", tone: "burgundy" },
  },
  {
    slug: "grace-adeyemi",
    name: "Anonymous Contributor, FL",
    role: "Contributing Writer",
    bio: "",
    focusAreas: ["Family & Relationships", "Christian Living"],
    image: { alt: "Portrait placeholder for a Flourish contributor", tone: "rose" },
  },
  {
    slug: "temitope-bello",
    name: "Anonymous Contributor, FL",
    role: "Contributing Writer",
    bio: "",
    focusAreas: ["Health & Wellness", "Personal Growth"],
    image: { alt: "Portrait placeholder for a Flourish contributor", tone: "gold" },
  },
  {
    slug: "joy-eze",
    name: "Anonymous Contributor, FL",
    role: "Contributing Writer",
    bio: "",
    focusAreas: ["Prayer & Devotion", "Inspiration"],
    image: { alt: "Portrait placeholder for a Flourish contributor", tone: "plum" },
  },
  {
    slug: "chiamaka-nwosu",
    name: "Anonymous Contributor, FL",
    role: "Contributing Writer",
    bio: "",
    focusAreas: ["Women & Purpose", "Leadership"],
    image: { alt: "Portrait placeholder for a Flourish contributor", tone: "burgundy" },
  },
  {
    slug: "tayo-oluwayemiwo",
    name: "Pastor Tayo Oluwayemiwo, Broward, FL",
    role: "Guest Contributor",
    editorialTeam: true,
    bio: "",
    focusAreas: ["Health & Wellness", "Faith & Spirituality"],
    image: { alt: "Portrait placeholder for Pastor Tayo Oluwayemiwo", tone: "burgundy" },
  },
  {
    slug: "suzan-olunuga",
    name: "Pastor Suzan Olunuga, Jacksonville, FL",
    role: "Guest Contributor",
    editorialTeam: true,
    bio: "",
    focusAreas: ["Faith & Spirituality", "Inspiration"],
    image: { alt: "Portrait placeholder for Pastor Suzan Olunuga", tone: "plum" },
  },
  {
    slug: "winnie-darius",
    name: "Winnie Darius, NY",
    role: "Guest Contributor",
    bio: "",
    focusAreas: ["Marriage & Relationships", "Christian Living"],
    image: { alt: "Portrait placeholder for Winnie Darius", tone: "rose" },
  },
  {
    slug: "aderonke-olajide",
    name: "Pastor Mrs Aderonke Olajide, Tampa, FL",
    role: "Guest Contributor",
    editorialTeam: true,
    bio: "",
    focusAreas: ["Women & Purpose", "Christian Living"],
    image: { alt: "Portrait placeholder for Pastor Mrs Aderonke Olajide", tone: "gold" },
  },
];

export function getAuthorBySlug(slug: string): Author | undefined {
  return authors.find((a) => a.slug === slug);
}
