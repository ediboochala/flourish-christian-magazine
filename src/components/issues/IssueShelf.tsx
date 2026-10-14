import Link from "next/link";
import { getIssueStats, issues } from "@/lib/data/issues";
import IssueCover from "@/components/issues/IssueCover";
import { cx } from "@/lib/utils";

/**
 * Every issue standing side by side on a shelf: its cover, number,
 * title, and either its contents at a glance (published) or a "coming
 * together" note with a way to contribute (in progress). `exclude` drops
 * one issue, e.g. the one whose page this shelf sits on.
 */
export default function IssueShelf({ exclude, className }: { exclude?: number; className?: string }) {
  const shown = issues.filter((i) => i.number !== exclude);
  if (shown.length === 0) return null;

  return (
    <div
      className={cx(
        "grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2",
        shown.length === 1 && "sm:grid-cols-1",
        className
      )}
    >
      {shown.map((issue) => {
        const href = `/issues/${issue.slug}`;
        const stats = getIssueStats(issue.number);
        const inProgress = issue.status === "in-progress";
        return (
          <article key={issue.slug} className="group flex flex-col items-center text-center">
            <Link
              href={href}
              aria-label={`Issue No. ${issue.number}: ${issue.title}`}
              className="relative block w-full max-w-[17rem] transition-transform duration-500 ease-out group-hover:-translate-y-2 group-hover:-rotate-1"
            >
              <IssueCover
                issue={issue}
                className="shadow-[0_24px_40px_-18px_rgba(36,20,54,0.6)] transition-shadow duration-500 group-hover:shadow-[0_34px_50px_-18px_rgba(36,20,54,0.65)]"
              />
              {/* Soft shadow where the cover meets the shelf. */}
              <span
                className="pointer-events-none absolute -bottom-3 left-[8%] right-[8%] h-4 rounded-[50%] bg-plum/25 blur-md"
                aria-hidden="true"
              />
            </Link>

            <p className="mt-8 font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
              Issue No. {issue.number} &bull; {issue.dateLabel}
            </p>
            <h3 className="mt-2 font-serif text-2xl text-plum">
              <Link href={href} className="transition-colors hover:text-burgundy">
                {issue.title}
              </Link>
            </h3>

            {inProgress ? (
              <>
                <p className="mt-2 flex items-center gap-2 font-sans text-sm text-charcoal-soft">
                  <span className="issue-pulse h-2 w-2 rounded-full bg-gold-light" aria-hidden="true" />
                  {stats.stories > 0
                    ? `${stats.stories} ${stats.stories === 1 ? "story" : "stories"} in so far`
                    : "Stories arriving soon"}
                </p>
                <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
                  <Link
                    href={href}
                    className="font-sans text-xs font-semibold uppercase tracking-[0.1em] text-burgundy hover:text-plum"
                  >
                    Preview Issue &rarr;
                  </Link>
                  <Link
                    href="/write-for-flourish"
                    className="font-sans text-xs font-semibold uppercase tracking-[0.1em] text-charcoal-soft hover:text-plum"
                  >
                    Write for This Issue
                  </Link>
                </div>
              </>
            ) : (
              <>
                <p className="mt-2 font-sans text-sm text-charcoal-soft">
                  {stats.stories} stories &bull; {stats.sections} sections &bull; {stats.contributors} contributors
                </p>
                <Link
                  href={href}
                  className="group/link mt-5 inline-flex items-center gap-1 rounded-full bg-plum px-6 py-3 font-sans text-xs font-semibold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-burgundy"
                >
                  Read Issue No. {issue.number}
                  <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1">
                    &rarr;
                  </span>
                </Link>
              </>
            )}
          </article>
        );
      })}
    </div>
  );
}
