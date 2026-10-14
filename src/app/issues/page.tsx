import type { Metadata } from "next";
import Link from "next/link";
import IssueShelf from "@/components/issues/IssueShelf";
import NewsletterCTA from "@/components/NewsletterCTA";
import Reveal from "@/components/ui/Reveal";
import { getLatestIssue } from "@/lib/data/issues";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Issues",
  description:
    "Every issue of Flourish Christian Magazine in one place. Read Issue No. 1, A Season of Renewal, and see what's coming in Issue No. 2.",
  path: "/issues",
});

export default function IssuesPage() {
  const latest = getLatestIssue();

  return (
    <div>
      <section className="grain-overlay relative overflow-hidden bg-plum py-14 sm:py-16">
        <div className="aurora-backdrop opacity-30" aria-hidden="true" />
        <div className="relative z-[2] mx-auto max-w-3xl px-6 text-center lg:px-10">
          <Reveal>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-gold-light">
              The Issues
            </p>
            <h1 className="mt-4 font-serif text-4xl leading-tight text-white sm:text-5xl">
              Every Issue of Flourish, Gathered in One Place.
            </h1>
            <p className="mx-auto mt-5 max-w-xl font-sans text-base leading-relaxed text-white/75">
              Each issue is a season of stories, teaching, and testimony. Open the latest one, or
              look ahead to what&apos;s being written now.
            </p>
            <Link
              href={`/issues/${latest.slug}`}
              className="btn-shine group/link mt-8 inline-flex items-center gap-2 rounded-full bg-gold-light px-7 py-3.5 font-sans text-xs font-semibold uppercase tracking-[0.1em] text-plum transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Read the Latest Issue
              <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1">
                &rarr;
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <Reveal>
            <IssueShelf />
          </Reveal>
        </div>
      </section>

      <NewsletterCTA />
    </div>
  );
}
