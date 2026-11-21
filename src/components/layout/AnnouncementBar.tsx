import Link from "next/link";
import { getAnnouncedIssue } from "@/lib/data/issues";

/** Thin wine-and-gold strip above the header announcing the next issue's
 *  launch. Renders nothing when no in-progress issue has a `launch`. */
export default function AnnouncementBar() {
  const issue = getAnnouncedIssue();
  if (!issue?.launch) return null;

  return (
    <div className="theme-wine bg-plum text-white">
      <Link
        href={`/issues/${issue.slug}`}
        className="group mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-2 gap-y-0.5 px-4 py-2.5 text-center font-sans text-[13px] leading-snug sm:text-sm"
      >
        <span className="font-semibold uppercase tracking-[0.14em] text-gold-light">Announcement</span>
        <span aria-hidden="true" className="text-gold-light/70">&bull;</span>
        <span>
          Issue No. {issue.number} launches on <strong className="font-semibold">{issue.launch.dateLabel}</strong>,{" "}
          {issue.launch.occasion}.
        </span>
        <span className="font-semibold text-gold-light underline-offset-4 group-hover:underline">
          See the issue &rarr;
        </span>
      </Link>
    </div>
  );
}
