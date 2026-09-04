import { Author } from "@/lib/types";

/**
 * CONTRIBUTORS
 * The two guest contributors at the end of this list (Pastor Tayo
 * Oluwayemiwo and Pastor Suzan Olunuga) are real September 2026 issue
 * contributors. Every other writer entry was generated with the original
 * scaffold and its byline is set to "Anonymous" until a real contributor
 * name and bio are supplied — edit the `name` and `bio` fields below
 * when that information is available. Slugs are kept stable so existing
 * article and contributor URLs keep working.
 */
export const authors: Author[] = [
  {
    slug: "editorial-team",
    name: "Flourish Editorial Team",
    role: "Editorial",
    bio: "The collective editorial voice of Flourish Christian Magazine, curating stories and resources for the Flourish community.",
    focusAreas: ["Editorial", "Community"],
    image: { alt: "Portrait placeholder for Flourish Editorial Team", tone: "plum" },
  },
  {
    slug: "adaeze-okafor",
    name: "Anonymous",
    role: "Contributing Writer",
    bio: "Contributor name and bio to be added. [Placeholder entry, edit with the real contributor's details.]",
    focusAreas: ["Faith & Spirituality", "Leadership"],
    image: { alt: "Portrait placeholder for a Flourish contributor", tone: "burgundy" },
  },
  {
    slug: "grace-adeyemi",
    name: "Anonymous",
    role: "Contributing Writer",
    bio: "Contributor name and bio to be added. [Placeholder entry, edit with the real contributor's details.]",
    focusAreas: ["Family & Relationships", "Christian Living"],
    image: { alt: "Portrait placeholder for a Flourish contributor", tone: "rose" },
  },
  {
    slug: "temitope-bello",
    name: "Anonymous",
    role: "Contributing Writer",
    bio: "Contributor name and bio to be added. [Placeholder entry, edit with the real contributor's details.]",
    focusAreas: ["Health & Wellness", "Personal Growth"],
    image: { alt: "Portrait placeholder for a Flourish contributor", tone: "gold" },
  },
  {
    slug: "joy-eze",
    name: "Anonymous",
    role: "Contributing Writer",
    bio: "Contributor name and bio to be added. [Placeholder entry, edit with the real contributor's details.]",
    focusAreas: ["Prayer & Devotion", "Inspiration"],
    image: { alt: "Portrait placeholder for a Flourish contributor", tone: "plum" },
  },
  {
    slug: "chiamaka-nwosu",
    name: "Anonymous",
    role: "Contributing Writer",
    bio: "Contributor name and bio to be added. [Placeholder entry, edit with the real contributor's details.]",
    focusAreas: ["Women & Purpose", "Leadership"],
    image: { alt: "Portrait placeholder for a Flourish contributor", tone: "burgundy" },
  },
  {
    slug: "tayo-oluwayemiwo",
    name: "Pastor Tayo Oluwayemiwo",
    role: "Guest Contributor",
    bio: "Pastor Tayo Oluwayemiwo ministers in Broward, Florida, teaching on healing, deliverance, and wholeness for women contending for every area of their lives. [Placeholder biography, replace with contributor-provided bio.]",
    focusAreas: ["Health & Wellness", "Faith & Spirituality"],
    image: { alt: "Portrait placeholder for Pastor Tayo Oluwayemiwo", tone: "burgundy" },
  },
  {
    slug: "suzan-olunuga",
    name: "Pastor Suzan Olunuga",
    role: "Guest Contributor",
    bio: "Pastor Suzan Olunuga ministers in Jacksonville, Florida, with a heart for women pressing through prolonged hardship into breakthrough. [Placeholder biography, replace with contributor-provided bio.]",
    focusAreas: ["Faith & Spirituality", "Inspiration"],
    image: { alt: "Portrait placeholder for Pastor Suzan Olunuga", tone: "plum" },
  },
];

export function getAuthorBySlug(slug: string): Author | undefined {
  return authors.find((a) => a.slug === slug);
}
