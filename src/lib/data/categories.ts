import { Category } from "@/lib/types";

export const categories: Category[] = [
  {
    slug: "faith-spirituality",
    name: "Faith & Spirituality",
    description:
      "Rooted reflections on walking closely with God — scripture, worship, and the disciplines that deepen a woman's spiritual life.",
    image: { alt: "Editorial imagery for Faith & Spirituality", tone: "plum" },
  },
  {
    slug: "women-purpose",
    name: "Women & Purpose",
    description:
      "Exploring calling, identity, and the God-given assignments women carry into their homes, workplaces, and communities.",
    image: { alt: "Editorial imagery for Women & Purpose", tone: "gold" },
  },
  {
    slug: "family-relationships",
    name: "Family & Relationships",
    description:
      "Honest, grace-filled conversations on marriage, motherhood, singleness, friendship, and the relationships that shape us.",
    image: { alt: "Editorial imagery for Family & Relationships", tone: "rose" },
  },
  {
    slug: "health-wellness",
    name: "Health & Wellness",
    description:
      "Whole-person wellbeing — rest, mental health, physical health, and stewarding the body as a woman of faith.",
    image: { alt: "Editorial imagery for Health & Wellness", tone: "burgundy" },
  },
  {
    slug: "lifestyle",
    name: "Lifestyle",
    description:
      "Elegant, practical living — home, style, hospitality, and the everyday rhythms of a flourishing Christian woman.",
    image: { alt: "Editorial imagery for Lifestyle", tone: "gold" },
  },
  {
    slug: "personal-growth",
    name: "Personal Growth",
    description:
      "Tools and encouragement for becoming — mindset, discipline, healing, and growing into the woman God is forming.",
    image: { alt: "Editorial imagery for Personal Growth", tone: "plum" },
  },
  {
    slug: "leadership",
    name: "Leadership",
    description:
      "For women leading in ministry, business, and community — practical wisdom for leading with excellence and humility.",
    image: { alt: "Editorial imagery for Leadership", tone: "charcoal" },
  },
  {
    slug: "prayer-devotion",
    name: "Prayer & Devotion",
    description: "Devotionals, prayer points, and reflections to anchor a woman's daily walk with the Lord.",
    image: { alt: "Editorial imagery for Prayer & Devotion", tone: "burgundy" },
  },
  {
    slug: "testimonies",
    name: "Testimonies",
    description: "Real stories of God's faithfulness, told by the women who lived them.",
    image: { alt: "Editorial imagery for Testimonies", tone: "rose" },
  },
  {
    slug: "inspiration",
    name: "Inspiration",
    description: "Short, powerful reads to encourage and uplift on the days that call for it most.",
    image: { alt: "Editorial imagery for Inspiration", tone: "gold" },
  },
  {
    slug: "community",
    name: "Community",
    description: "Stories, updates, and voices from the wider Flourish and MFM Tampa women's community.",
    image: { alt: "Editorial imagery for Community", tone: "plum" },
  },
  {
    slug: "christian-living",
    name: "Christian Living",
    description: "Applying scripture to the ordinary moments — work, money, conflict, and daily decisions.",
    image: { alt: "Editorial imagery for Christian Living", tone: "burgundy" },
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
