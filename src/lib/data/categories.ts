import { Category } from "@/lib/types";

export const categories: Category[] = [
  {
    slug: "faith-spirituality",
    name: "Spiritual Growth",
    description:
      "Deeper roots, stronger faith. Faith isn't static, it's a living relationship meant to grow. Explore devotionals, prayer guides, and Word-based teaching designed to move you from surface-level religion into intimate relationship with God.",
    image: { alt: "Editorial imagery for Spiritual Growth", tone: "plum", motif: "vine" },
  },
  {
    slug: "women-purpose",
    name: "Woman of Purpose",
    description:
      "Made on purpose, for a purpose. You are not here by accident. This section helps you uncover your God-given gifts, silence the noise of comparison, and walk confidently in the assignment only you can fulfill.",
    image: { alt: "Editorial imagery for Woman of Purpose", tone: "gold", motif: "wheat" },
  },
  {
    slug: "family-relationships",
    name: "Marriage & Relationships",
    description:
      "Godly love, built to last. Marriage is a sacred covenant, not just a contract, and it takes intentionality, grace, and God at the center to thrive. This section brings you real talk on communication, conflict, intimacy, and covenant love, all through a biblical lens.",
    image: { alt: "Editorial imagery for Marriage & Relationships", tone: "rose", motif: "fern" },
  },
  {
    slug: "health-wellness",
    name: "Health & Wellness",
    description:
      "Whole and well: mind, body, soul. God cares about your whole self, not just your spirit. This section covers emotional healing, physical wellness, mental health, and rest, because a flourishing woman is a well-tended one.",
    image: { alt: "Editorial imagery for Health & Wellness", tone: "burgundy", motif: "lily" },
  },
  {
    slug: "lifestyle",
    name: "Faith & Home",
    description:
      "Where ministry begins. Before it reaches the world, faith starts at home. Get practical, real-life guidance on raising Christ-centered children, creating peace in your household, and making your home a sanctuary.",
    image: { alt: "Editorial imagery for Faith & Home", tone: "gold", motif: "olive" },
  },
  {
    slug: "personal-growth",
    name: "Personal Growth",
    description:
      "Tools and encouragement for becoming: mindset, discipline, healing, and growing into the woman God is forming.",
    image: { alt: "Editorial imagery for Personal Growth", tone: "plum", motif: "fern" },
  },
  {
    slug: "leadership",
    name: "Leadership",
    description:
      "For women leading in ministry, business, and community, practical wisdom for leading with excellence and humility.",
    image: { alt: "Editorial imagery for Leadership", tone: "charcoal", motif: "palm" },
  },
  {
    slug: "prayer-devotion",
    name: "Prayer & Devotion",
    description: "Devotionals, prayer points, and reflections to anchor a woman's daily walk with the Lord.",
    image: { alt: "Editorial imagery for Prayer & Devotion", tone: "burgundy", motif: "olive" },
  },
  {
    slug: "testimonies",
    name: "Women's Stories",
    description:
      "Real women. Real faith. Real victory. Testimonies of strength, healing, and hope from women just like you, because your story might be the very thing someone else needs to keep going.",
    image: { alt: "Editorial imagery for Women's Stories", tone: "rose", motif: "wheat" },
  },
  {
    slug: "inspiration",
    name: "Inspiration",
    description: "Short, powerful reads to encourage and uplift on the days that call for it most.",
    image: { alt: "Editorial imagery for Inspiration", tone: "gold", motif: "lily" },
  },
  {
    slug: "community",
    name: "Announcements",
    description:
      "Stay in the know. From foundation events to community opportunities, this is your hub for everything happening across M.F.M Women Foundation Florida.",
    image: { alt: "Editorial imagery for Announcements", tone: "plum", motif: "olive" },
  },
  {
    slug: "christian-living",
    name: "Christian Living",
    description: "Applying scripture to the ordinary moments: work, money, conflict, and daily decisions.",
    image: { alt: "Editorial imagery for Christian Living", tone: "burgundy", motif: "vine" },
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
