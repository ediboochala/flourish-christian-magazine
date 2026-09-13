import { Category } from "@/lib/types";

/**
 * The five Flourish categories. These are the fixed editorial sections of
 * the magazine — every article's `categorySlug` must point at one of them.
 */
export const categories: Category[] = [
  {
    slug: "womens-stories",
    name: "Women's Stories",
    description:
      "Real women. Real faith. Real victory. Testimonies of strength, healing, and hope from women just like you — because your story might be the very thing someone else needs to keep going.",
    image: {
      src: "/images/categories/testimonies.jpg",
      alt: "The words \"MY STORY\" spelled in wooden letters on pink marble",
      tone: "rose",
      motif: "wheat",
    },
  },
  {
    slug: "health-wellness",
    name: "Health & Wellness",
    description:
      "Whole and well: mind, body, and soul. Emotional healing, physical wellness, mental health, and rest — because a flourishing woman is a well-tended one.",
    image: {
      src: "/images/categories/health-wellness.jpg",
      alt: "Colorful dumbbells, green apples, and a blank clipboard arranged on a pink background",
      tone: "burgundy",
      motif: "lily",
    },
  },
  {
    slug: "faith-inspiration",
    name: "Faith & Inspiration",
    description:
      "Deeper roots, stronger faith. Devotionals, prayer, Word-based teaching, and short encouraging reads to move you from surface-level religion into an intimate relationship with God.",
    image: {
      src: "/images/categories/faith-spirituality.jpg",
      alt: "A sticky note reading \"Faith, Love, Hope\" against a deep blue background",
      tone: "plum",
      motif: "vine",
    },
  },
  {
    slug: "marriage-relationships",
    name: "Marriage & Relationships",
    description:
      "Godly love, built to last. Real talk on communication, conflict, intimacy, and covenant love — all through a biblical lens.",
    image: {
      src: "/images/categories/family-relationships.jpg",
      alt: "Close-up of a couple holding hands",
      tone: "rose",
      motif: "fern",
    },
  },
  {
    slug: "the-homefront",
    name: "The Homefront",
    description:
      "Where ministry begins. Practical, real-life guidance on raising Christ-centered children, creating peace in your household, and making your home a sanctuary.",
    image: {
      src: "/images/categories/lifestyle.jpg",
      alt: "A home's balcony overflowing with pink flowering plants above the garage",
      tone: "gold",
      motif: "olive",
    },
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
