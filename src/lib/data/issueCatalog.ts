import { Issue } from "@/lib/types";

/**
 * Every issue ever made, including archived ones. Pages should read the
 * filtered `issues` list in `data/issues.ts` instead; this raw list
 * exists so `data/articles.ts` can hide archived issues' articles without
 * a circular import.
 */
export const allIssues: Issue[] = [
  {
    number: 1,
    slug: "issue-1",
    title: "A Season of Renewal",
    tagline: "Embracing new beginnings with faith and purpose — a page, a prayer, and a story at a time.",
    description:
      "Our inaugural issue: testimonies of healing and wholeness, teaching on prayer and the Word, honest conversations about marriage and the home, and a call for every woman to steward her body, mind, and spirit well.",
    status: "published",
    dateLabel: "Inaugural Issue · 2026",
    cover: {
      src: "/images/site/hero-renewal.png",
      alt: "Issue No. 1 cover: a woman in a purple headwrap writing in her Bible beside vases of purple flowers",
      tone: "plum",
    },
    coverFocus: "78% center",
    archived: true,
  },
  {
    number: 2,
    slug: "issue-2",
    title: "A Season of Love, Sharing, and Thanksgiving",
    tagline: "Stories of open hands and grateful hearts, for the season of giving thanks.",
    description:
      "Our November issue, released on Thanksgiving Day: stories of gratitude and generosity, honest teaching on faith and wise choices, practical wellness for body and home, and testimonies of women who refused to let any season shrink them.",
    status: "published",
    dateLabel: "November 2026",
    theme: "wine",
    cover: {
      src: "/images/issues/issue-2-cover.jpg",
      alt: "Issue No. 2 cover: a woman in a wine-red headwrap peeking over the November issue of Flourish, A Season of Love, Sharing and Thanksgiving",
      tone: "burgundy",
    },
    coverFocus: "center top",
    hero: {
      src: "/images/issues/issue-2-hero.jpg",
      alt: "A woman in a wine-red headwrap peeking over the November issue of Flourish on a cream sofa",
      tone: "burgundy",
      focus: "center 30%",
    },
  },
];

/** Issue numbers retired from the site (see `Issue.archived`). */
export const archivedIssueNumbers = new Set(allIssues.filter((i) => i.archived).map((i) => i.number));
