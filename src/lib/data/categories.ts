import { Category } from "@/lib/types";

export const categories: Category[] = [
  {
    slug: "faith-spirituality",
    name: "Spiritual Growth",
    description:
      "Deeper roots, stronger faith. Faith isn't static, it's a living relationship meant to grow. Explore devotionals, prayer guides, and Word-based teaching designed to move you from surface-level religion into intimate relationship with God.",
    image: {
      src: "/images/categories/faith-spirituality.jpg",
      alt: "Forest in golden-hour light",
      tone: "plum",
      motif: "vine",
      credit: "Photo via Unsplash",
    },
  },
  {
    slug: "women-purpose",
    name: "Woman of Purpose",
    description:
      "Made on purpose, for a purpose. You are not here by accident. This section helps you uncover your God-given gifts, silence the noise of comparison, and walk confidently in the assignment only you can fulfill.",
    image: {
      src: "/images/categories/women-purpose.jpg",
      alt: "A person standing on a green hillside",
      tone: "gold",
      motif: "wheat",
      credit: "Photo via Unsplash",
    },
  },
  {
    slug: "family-relationships",
    name: "Marriage & Relationships",
    description:
      "Godly love, built to last. Marriage is a sacred covenant, not just a contract, and it takes intentionality, grace, and God at the center to thrive. This section brings you real talk on communication, conflict, intimacy, and covenant love, all through a biblical lens.",
    image: {
      src: "/images/categories/family-relationships.jpg",
      alt: "A wildflower field ringed by trees",
      tone: "rose",
      motif: "fern",
      credit: "Photo via Unsplash",
    },
  },
  {
    slug: "health-wellness",
    name: "Health & Wellness",
    description:
      "Whole and well: mind, body, soul. God cares about your whole self, not just your spirit. This section covers emotional healing, physical wellness, mental health, and rest, because a flourishing woman is a well-tended one.",
    image: {
      src: "/images/categories/health-wellness.jpg",
      alt: "Lush green foliage in soft light",
      tone: "burgundy",
      motif: "lily",
      credit: "Photo via Unsplash",
    },
  },
  {
    slug: "lifestyle",
    name: "Faith & Home",
    description:
      "Where ministry begins. Before it reaches the world, faith starts at home. Get practical, real-life guidance on raising Christ-centered children, creating peace in your household, and making your home a sanctuary.",
    image: {
      src: "/images/categories/lifestyle.jpg",
      alt: "White candles beside a basket of bread",
      tone: "gold",
      motif: "olive",
      credit: "Photo via Unsplash",
    },
  },
  {
    slug: "personal-growth",
    name: "Personal Growth",
    description:
      "Tools and encouragement for becoming: mindset, discipline, healing, and growing into the woman God is forming.",
    image: {
      src: "/images/categories/personal-growth.jpg",
      alt: "Pink and white blooms in daylight",
      tone: "plum",
      motif: "fern",
      credit: "Photo via Unsplash",
    },
  },
  {
    slug: "leadership",
    name: "Leadership",
    description:
      "For women leading in ministry, business, and community, practical wisdom for leading with excellence and humility.",
    image: {
      src: "/images/categories/leadership.jpg",
      alt: "A hiker on a mountain ridge",
      tone: "charcoal",
      motif: "palm",
      credit: "Photo via Unsplash",
    },
  },
  {
    slug: "prayer-devotion",
    name: "Prayer & Devotion",
    description: "Devotionals, prayer points, and reflections to anchor a woman's daily walk with the Lord.",
    image: {
      src: "/images/categories/prayer-devotion.jpg",
      alt: "An open Bible with bread and a candle",
      tone: "burgundy",
      motif: "olive",
      credit: "Photo via Unsplash",
    },
  },
  {
    slug: "testimonies",
    name: "Women's Stories",
    description:
      "Real women. Real faith. Real victory. Testimonies of strength, healing, and hope from women just like you, because your story might be the very thing someone else needs to keep going.",
    image: {
      src: "/images/categories/testimonies.jpg",
      alt: "A grass field glowing at sunset",
      tone: "rose",
      motif: "wheat",
      credit: "Photo via Unsplash",
    },
  },
  {
    slug: "inspiration",
    name: "Inspiration",
    description: "Short, powerful reads to encourage and uplift on the days that call for it most.",
    image: {
      src: "/images/categories/inspiration.jpg",
      alt: "An orange sky over an open field",
      tone: "gold",
      motif: "lily",
      credit: "Photo via Unsplash",
    },
  },
  {
    slug: "community",
    name: "Announcements",
    description:
      "Stay in the know. From foundation events to community opportunities, this is your hub for everything happening across M.F.M Women Foundation Florida.",
    image: {
      src: "/images/categories/community.jpg",
      alt: "A bright tree canopy overhead",
      tone: "plum",
      motif: "olive",
      credit: "Photo via Unsplash",
    },
  },
  {
    slug: "christian-living",
    name: "Christian Living",
    description: "Applying scripture to the ordinary moments: work, money, conflict, and daily decisions.",
    image: {
      src: "/images/categories/christian-living.jpg",
      alt: "Sunlight breaking through green leaves",
      tone: "burgundy",
      motif: "vine",
      credit: "Photo via Unsplash",
    },
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
