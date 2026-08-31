import { Author } from "@/lib/types";

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
    name: "Adaeze Okafor",
    role: "Contributing Writer",
    bio: "Adaeze writes on faith, purpose, and womanhood, drawing from her experience in ministry and marketplace leadership. [Placeholder biography, replace with contributor-provided bio.]",
    focusAreas: ["Faith & Spirituality", "Leadership"],
    image: { alt: "Portrait placeholder for Adaeze Okafor", tone: "burgundy" },
  },
  {
    slug: "grace-adeyemi",
    name: "Grace Adeyemi",
    role: "Contributing Writer",
    bio: "Grace is passionate about marriage and motherhood, writing honestly about the beauty and challenges of family life. [Placeholder biography, replace with contributor-provided bio.]",
    focusAreas: ["Family & Relationships", "Christian Living"],
    image: { alt: "Portrait placeholder for Grace Adeyemi", tone: "rose" },
  },
  {
    slug: "temitope-bello",
    name: "Temitope Bello",
    role: "Contributing Writer",
    bio: "Temitope explores personal growth and wellness, encouraging women to steward their whole selves, spirit, soul, and body. [Placeholder biography, replace with contributor-provided bio.]",
    focusAreas: ["Health & Wellness", "Personal Growth"],
    image: { alt: "Portrait placeholder for Temitope Bello", tone: "gold" },
  },
  {
    slug: "joy-eze",
    name: "Joy Eze",
    role: "Contributing Writer",
    bio: "Joy writes on prayer, devotion, and the disciplines of a grounded spiritual life. [Placeholder biography, replace with contributor-provided bio.]",
    focusAreas: ["Prayer & Devotion", "Inspiration"],
    image: { alt: "Portrait placeholder for Joy Eze", tone: "plum" },
  },
  {
    slug: "chiamaka-nwosu",
    name: "Chiamaka Nwosu",
    role: "Contributing Writer",
    bio: "Chiamaka shares reflections on purpose and leadership for women navigating career and calling. [Placeholder biography, replace with contributor-provided bio.]",
    focusAreas: ["Women & Purpose", "Leadership"],
    image: { alt: "Portrait placeholder for Chiamaka Nwosu", tone: "burgundy" },
  },
];

export function getAuthorBySlug(slug: string): Author | undefined {
  return authors.find((a) => a.slug === slug);
}
