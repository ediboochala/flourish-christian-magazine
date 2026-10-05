import type { Article } from "@/lib/types";

/**
 * Arrival order, newest first: latest `publishedAt`, and among pieces
 * posted the same day, the highest `priority` number (each new piece is
 * given the next number up). Kept separate from `data/articles.ts` so the
 * client-side archive can use it without bundling every article body.
 */
export function byArrival(a: Article, b: Article): number {
  const byDate = new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
  if (byDate !== 0) return byDate;
  return (b.priority ?? Number.NEGATIVE_INFINITY) - (a.priority ?? Number.NEGATIVE_INFINITY);
}

/** The most recently posted article in `list`, or undefined if it's empty. */
export function newestOf(list: readonly Article[]): Article | undefined {
  return list.reduce<Article | undefined>(
    (newest, a) => (!newest || byArrival(a, newest) < 0 ? a : newest),
    undefined
  );
}

/** Moves the most recently posted article in `list` to the front, leaving
 *  the (rotating) order of everything else untouched. */
export function pinNewest(list: readonly Article[]): Article[] {
  const newest = newestOf(list);
  if (!newest) return [];
  return [newest, ...list.filter((a) => a !== newest)];
}
