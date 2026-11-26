import { Article, Issue } from "@/lib/types";
import { articles } from "@/lib/data/articles";
import { getAuthorBySlug } from "@/lib/data/authors";
import { byArrival } from "@/lib/articleOrder";
import { allIssues } from "@/lib/data/issueCatalog";

/**
 * ISSUES
 * Every article belongs to one numbered issue via its `issue` field
 * (omitted = Issue No. 1). An issue marked "in-progress" is shown as
 * "coming together": its page lists whatever articles have arrived so far
 * plus placeholder slots for the rest. When it's complete, switch its
 * `status` to "published" (and give it a `cover`), then add the next
 * issue here as "in-progress". The issue list itself lives in
 * `data/issueCatalog.ts`; set `archived: true` there to retire an issue
 * (and all its articles) from the site.
 */
/** Issues shown on the site: archived ones are left out entirely. */
export const issues: Issue[] = allIssues.filter((i) => !i.archived);

/** The upcoming issue with an announced launch date, if any — drives the
 *  site-wide announcement bar. Remove `launch` (or publish the issue) to
 *  take the bar down. */
export function getAnnouncedIssue(): Issue | undefined {
  return issues.find((i) => i.status === "in-progress" && i.launch);
}

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
