import { Article, Issue } from "@/lib/types";
import { articles } from "@/lib/data/articles";
import { getAuthorBySlug } from "@/lib/data/authors";
import { byArrival } from "@/lib/articleOrder";

/**
 * ISSUES
 * Every article belongs to one numbered issue via its `issue` field
 * (omitted = Issue No. 1). An issue marked "in-progress" is shown as
 * "coming together": its page lists whatever articles have arrived so far
 * plus placeholder slots for the rest. When it's complete, switch its
 * `status` to "published" (and give it a `cover`), then add the next
 * issue here as "in-progress".
 */
export const issues: Issue[] = [
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
  },
  {
    number: 2,
    slug: "issue-2",
    title: "Coming Together",
    tagline: "New stories, testimonies, and teaching are on their way.",
    description:
      "Our contributors are writing now. Issue No. 2 fills in here story by story as each piece arrives — check back soon, or share your own story to be part of it.",
    status: "in-progress",
    dateLabel: "In Progress",
  },
];

export function getIssueNumber(article: Article): number {
  return article.issue ?? 1;
}

export function getIssueBySlug(slug: string): Issue | undefined {
  return issues.find((i) => i.slug === slug);
}

export function getIssueByNumber(n: number): Issue | undefined {
  return issues.find((i) => i.number === n);
}

/** The most recent complete issue — what "Read the Latest Issue" opens. */
export function getLatestIssue(): Issue {
  const published = issues.filter((i) => i.status === "published");
  return published[published.length - 1] ?? issues[0];
}

/** The issue's articles, most recently posted first. */
export function getArticlesByIssue(n: number): Article[] {
  return articles.filter((a) => getIssueNumber(a) === n).sort(byArrival);
}

export interface IssueStats {
  stories: number;
  sections: number;
  contributors: number;
}

export function getIssueStats(n: number): IssueStats {
  const list = getArticlesByIssue(n);
  return {
    stories: list.length,
    sections: new Set(list.map((a) => a.categorySlug)).size,
    // By displayed name: several anonymous entries share one byline.
    contributors: new Set(list.map((a) => getAuthorBySlug(a.authorSlug)?.name ?? a.authorSlug)).size,
  };
}
