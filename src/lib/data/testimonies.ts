import { Testimony } from "@/lib/types";

/**
 * PLACEHOLDER TESTIMONY CONTENT — illustrative only. Do not present as
 * real member testimonies until replaced with verified, consented
 * submissions.
 */
export const testimonies: Testimony[] = [
  {
    slug: "from-anxiety-to-a-settled-peace",
    title: "From Anxiety to a Settled Peace",
    intro: "A placeholder testimony illustrating how the testimony template renders, replace with a verified story.",
    authorName: "A Flourish Woman [placeholder name]",
    publishedAt: "2026-07-28",
    image: {
      src: "/images/testimonies/from-anxiety-to-a-settled-peace.jpg",
      alt: "A still lake beneath a soft, clouded sky",
      tone: "rose",
      credit: "Photo via Unsplash",
    },
    body: [
      "[Placeholder testimony text.] For two years, anxiety shaped nearly every decision I made. Through consistent prayer, community, and counsel, I found a settled peace I didn't think was possible.",
      "This is a placeholder illustrating layout only, replace with an authentic, consented testimony before publishing.",
    ],
  },
  {
    slug: "restored-after-a-season-of-doubt",
    title: "Restored After a Season of Doubt",
    intro: "A placeholder testimony illustrating how the testimony template renders, replace with a verified story.",
    authorName: "A Flourish Woman [placeholder name]",
    publishedAt: "2026-07-14",
    image: {
      src: "/images/testimonies/restored-after-a-season-of-doubt.jpg",
      alt: "Mist lifting from a quiet forest",
      tone: "gold",
      credit: "Photo via Unsplash",
    },
    body: [
      "[Placeholder testimony text.] There was a season where I questioned nearly everything about my faith. What brought me back wasn't a single moment, but the patient presence of a community that didn't give up on me.",
    ],
  },
  {
    slug: "provision-in-an-impossible-season",
    title: "Provision in an Impossible Season",
    intro: "A placeholder testimony illustrating how the testimony template renders, replace with a verified story.",
    authorName: "A Flourish Woman [placeholder name]",
    publishedAt: "2026-06-30",
    image: {
      src: "/images/testimonies/provision-in-an-impossible-season.jpg",
      alt: "Ripe wheat ready for harvest",
      tone: "burgundy",
      credit: "Photo via Unsplash",
    },
    body: [
      "[Placeholder testimony text.] When I lost my job unexpectedly, I did not know how the next few months would work out. Looking back, I can trace God's provision in ways I couldn't see in the moment.",
    ],
  },
  {
    slug: "healing-in-a-difficult-marriage-season",
    title: "Healing in a Difficult Marriage Season",
    intro: "A placeholder testimony illustrating how the testimony template renders, replace with a verified story.",
    authorName: "A Flourish Woman [placeholder name]",
    publishedAt: "2026-06-18",
    image: {
      src: "/images/testimonies/healing-in-a-difficult-marriage-season.jpg",
      alt: "Hands resting gently on one another",
      tone: "plum",
      credit: "Photo via Unsplash",
    },
    body: [
      "[Placeholder testimony text.] Our marriage went through a season that nearly ended in separation. Through counsel, prayer, and honest conversation, we found healing neither of us expected.",
    ],
  },
];

export function getTestimonyBySlug(slug: string): Testimony | undefined {
  return testimonies.find((t) => t.slug === slug);
}
