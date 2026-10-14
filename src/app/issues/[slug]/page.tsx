import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Bell, PenLine } from "lucide-react";
import ArticleCard from "@/components/ArticleCard";
import FeaturedStory from "@/components/home/FeaturedStory";
import IssueCover from "@/components/issues/IssueCover";
import IssueShelf from "@/components/issues/IssueShelf";
import NewsletterCTA from "@/components/NewsletterCTA";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { getAuthorBySlug } from "@/lib/data/authors";
import { categories } from "@/lib/data/categories";
import {
  getArticlesByIssue,
  getIssueBySlug,
  getIssueStats,
  getLatestIssue,
  issues,
} from "@/lib/data/issues";
import { pageMetadata } from "@/lib/seo";
import { Article, Issue } from "@/lib/types";

export function generateStaticParams() {
  return issues.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const issue = getIssueBySlug(slug);
  if (!issue) return {};
  return pageMetadata({
    title: `Issue No. ${issue.number}: ${issue.title}`,
    description: issue.description,
    path: `/issues/${issue.slug}`,
    image: issue.cover?.src ? { url: issue.cover.src, alt: issue.cover.alt } : undefined,
  });
}

export default async function IssuePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const issue = getIssueBySlug(slug);
  if (!issue) notFound();

  const list = getArticlesByIssue(issue.number);
  const inProgress = issue.status === "in-progress";

  return (
    <div>
      <IssueHero issue={issue} />
      {inProgress ? (
        <InProgressBody issue={issue} arrived={list} />
      ) : (
        <PublishedBody issue={issue} list={list} />
      )}
      <NewsletterCTA />
    </div>
  );
}

function IssueHero({ issue }: { issue: Issue }) {
  const stats = getIssueStats(issue.number);
  const inProgress = issue.status === "in-progress";

  return (
    <section className="grain-overlay relative overflow-hidden bg-plum py-12 sm:py-16">
      <div className="aurora-backdrop opacity-30" aria-hidden="true" />
      <div className="relative z-[2] mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-[17rem_1fr] lg:gap-14 lg:px-10">
        <Reveal variant="scale" className="mx-auto block w-full max-w-[15rem] lg:max-w-none">
          <IssueCover issue={issue} priority className="shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]" />
        </Reveal>

        <Reveal className="block text-center lg:text-left">
          <Link
            href="/issues"
            className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-white/60 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            All Issues
          </Link>
          <p className="mt-6 flex flex-wrap items-center justify-center gap-3 font-sans text-xs font-semibold uppercase tracking-[0.22em] text-gold-light lg:justify-start">
            <span>Issue No. {issue.number}</span>
            <span className="text-white/30">&bull;</span>
            {inProgress ? (
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[10px] tracking-[0.18em] text-white">
                <span className="issue-pulse h-1.5 w-1.5 rounded-full bg-gold-light" aria-hidden="true" />
                In Progress
              </span>
            ) : (
              <span>{issue.dateLabel}</span>
            )}
          </p>
          <h1 className="text-h1 mt-3 font-serif text-white">{issue.title}</h1>
          <p className="mx-auto mt-4 max-w-xl font-serif text-lg italic leading-relaxed text-white/80 lg:mx-0">
            {issue.tagline}
          </p>
          <p className="mx-auto mt-4 max-w-xl font-sans text-[15px] leading-relaxed text-white/70 lg:mx-0">
            {issue.description}
          </p>

          {inProgress ? (
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                href="/write-for-flourish"
                className="btn-shine inline-flex items-center gap-2 rounded-full bg-gold-light px-7 py-3.5 font-sans text-xs font-semibold uppercase tracking-[0.1em] text-plum transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <PenLine className="h-4 w-4" aria-hidden="true" />
                Write for Issue No. {issue.number}
              </Link>
              <Link
                href="#subscribe"
                className="inline-flex items-center gap-2 rounded-full border border-white/50 px-7 py-3.5 font-sans text-xs font-semibold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-plum"
              >
                <Bell className="h-4 w-4" aria-hidden="true" />
                Notify Me
              </Link>
            </div>
          ) : (
            <>
              <dl className="mx-auto mt-8 grid max-w-md grid-cols-3 divide-x divide-white/15 rounded-2xl border border-white/15 bg-white/5 py-4 backdrop-blur-sm lg:mx-0">
                {[
                  ["Stories", stats.stories],
                  ["Sections", stats.sections],
                  ["Contributors", stats.contributors],
                ].map(([label, value]) => (
                  <div key={label} className="flex flex-col-reverse px-3 text-center">
                    <dt className="mt-1 font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-white/60">
                      {label}
                    </dt>
                    <dd className="font-serif text-3xl text-white">{value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-8 flex justify-center lg:justify-start">
                <Link
                  href="#contents"
                  className="btn-shine group/link inline-flex items-center gap-2 rounded-full bg-gold-light px-7 py-3.5 font-sans text-xs font-semibold uppercase tracking-[0.1em] text-plum transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Open the Contents
                  <span className="inline-block transition-transform duration-300 group-hover/link:translate-y-0.5">
                    &darr;
                  </span>
                </Link>
              </div>
            </>
          )}
        </Reveal>
      </div>
    </section>
  );
}

function PublishedBody({ issue, list }: { issue: Issue; list: Article[] }) {
  const [lead] = list;
  const grouped = categories
    .map((c) => ({ category: c, articles: list.filter((a) => a.categorySlug === c.slug) }))
    .filter((s) => s.articles.length > 0);
  // Running numbers down the contents, the way a printed table of contents
  // counts through the whole issue rather than restarting per section.
  const sections = grouped.map((s, i) => ({
    ...s,
    start: grouped.slice(0, i).reduce((n, prev) => n + prev.articles.length, 1),
  }));

  return (
    <>
      {lead && (
        <div className="bg-white">
          <Reveal>
            <FeaturedStory article={lead} eyebrow="The Lead Story" />
          </Reveal>
        </div>
      )}

      <section id="contents" className="scroll-mt-20 bg-ivory py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <Reveal className="block text-center">
            <SectionHeading
              eyebrow={`Issue No. ${issue.number}`}
              title="In This Issue"
              align="center"
            />
            <nav aria-label="Sections in this issue" className="mt-7 flex flex-wrap justify-center gap-2">
              {sections.map(({ category, articles }) => (
                <a
                  key={category.slug}
                  href={`#section-${category.slug}`}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 font-sans text-xs font-semibold uppercase tracking-[0.06em] text-charcoal-soft shadow-[0_1px_2px_rgba(36,31,33,0.06)] transition-colors hover:bg-plum hover:text-white"
                >
                  {category.name}
                  <span className="rounded-full bg-cream px-1.5 text-[10px] text-plum">{articles.length}</span>
                </a>
              ))}
            </nav>
          </Reveal>

          <div className="mt-12">
            {sections.map(({ category, articles, start }) => (
              <section
                key={category.slug}
                id={`section-${category.slug}`}
                aria-labelledby={`heading-${category.slug}`}
                className="grid scroll-mt-24 grid-cols-1 gap-6 border-t border-charcoal/10 py-10 lg:grid-cols-[15rem_1fr] lg:gap-12"
              >
                <div className="self-start lg:sticky lg:top-28">
                  <h3 id={`heading-${category.slug}`} className="font-serif text-2xl text-plum">
                    {category.name}
                  </h3>
                  <p className="mt-1 font-sans text-sm text-charcoal-soft">
                    {articles.length} {articles.length === 1 ? "story" : "stories"}
                  </p>
                  <Link
                    href={`/categories/${category.slug}`}
                    className="mt-3 inline-block font-sans text-xs font-semibold uppercase tracking-[0.1em] text-burgundy hover:text-plum"
                  >
                    Browse the Section &rarr;
                  </Link>
                </div>

                <ol className="divide-y divide-charcoal/10">
                  {articles.map((article, i) => (
                    <li key={article.slug}>
                      <ContentsRow article={article} number={start + i} />
                    </li>
                  ))}
                </ol>
              </section>
            ))}
          </div>
        </div>
      </section>

      {issues.length > 1 && (
        <section className="bg-cream py-14 sm:py-16">
          <div className="mx-auto max-w-4xl px-6 lg:px-10">
            <Reveal className="block">
              <SectionHeading eyebrow="More From Flourish" title="Other Issues" align="center" className="mb-12" />
              <IssueShelf exclude={issue.number} />
            </Reveal>
          </div>
        </section>
      )}
    </>
  );
}

function ContentsRow({ article, number }: { article: Article; number: number }) {
  const author = getAuthorBySlug(article.authorSlug);
  return (
    <Link
      href={`/article/${article.slug}`}
      className="group grid grid-cols-[2rem_4.5rem_1fr] items-center gap-4 py-4 sm:grid-cols-[2.5rem_5.5rem_1fr] sm:gap-5"
    >
      <span className="font-serif text-lg italic text-gold" aria-hidden="true">
        {String(number).padStart(2, "0")}
      </span>
      <span className="img-zoom relative aspect-square overflow-hidden rounded-lg">
        <PlaceholderImage image={article.heroImage} sizes="88px" compact />
      </span>
      <span className="min-w-0">
        <span className="flex items-center gap-2">
          {article.isNew && (
            <span className="rounded-full bg-gold px-1.5 py-0.5 font-sans text-[9px] font-semibold uppercase tracking-[0.12em] text-white">
              New
            </span>
          )}
          <span className="font-serif text-lg leading-snug text-plum transition-colors group-hover:text-burgundy line-clamp-2">
            {article.title}
          </span>
        </span>
        <span className="mt-1 hidden font-sans text-sm text-charcoal-soft line-clamp-1 sm:block">
          {article.subtitle ?? article.excerpt}
        </span>
        <span className="mt-1.5 block font-sans text-xs text-charcoal-soft">
          By <span className="font-semibold text-plum">{author?.name ?? "Flourish"}</span>
          <span className="mx-1.5 text-charcoal-soft/50">&bull;</span>
          {article.readingTimeMinutes} min read
        </span>
      </span>
    </Link>
  );
}

function InProgressBody({ issue, arrived }: { issue: Issue; arrived: Article[] }) {
  const placeholders = Math.max(3, 6 - arrived.length);
  const latest = getLatestIssue();

  return (
    <>
      <section className="bg-ivory py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal className="block">
            <SectionHeading
              eyebrow={arrived.length > 0 ? "Arrived So Far" : "Pages Being Written"}
              title={
                arrived.length > 0
                  ? `The First Stories of Issue No. ${issue.number}`
                  : `Issue No. ${issue.number} Is Coming Together`
              }
              description="Each new story takes its place here the moment it's published. The rest are still being written, prayed over, and edited."
              align="center"
            />
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {arrived.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
            {Array.from({ length: placeholders }, (_, i) => (
              <SkeletonCard key={i} delayMs={i * 220} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-6 md:grid-cols-2 lg:px-10">
          <Reveal variant="left" className="block">
            <div className="flex h-full flex-col rounded-2xl bg-cream p-8">
              <PenLine className="h-6 w-6 text-burgundy" aria-hidden="true" />
              <h2 className="mt-4 font-serif text-2xl text-plum">Have a story for Issue No. {issue.number}?</h2>
              <p className="mt-3 flex-1 font-sans text-sm leading-relaxed text-charcoal-soft">
                Testimonies, teaching, lessons from your home and marriage: your story could be the one
                another woman needs. Submissions are open now.
              </p>
              <Link
                href="/write-for-flourish"
                className="mt-6 inline-flex w-fit items-center gap-1 rounded-full bg-plum px-6 py-3 font-sans text-xs font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-burgundy"
              >
                Submit Your Story &rarr;
              </Link>
            </div>
          </Reveal>

          {latest.number !== issue.number && (
            <Reveal variant="right" className="block">
              <Link
                href={`/issues/${latest.slug}`}
                className="group flex h-full items-center gap-6 rounded-2xl border border-charcoal/10 p-6 transition-colors hover:border-plum/30 hover:bg-ivory"
              >
                <span className="w-28 flex-shrink-0 transition-transform duration-500 group-hover:-rotate-2">
                  <IssueCover issue={latest} className="shadow-[0_14px_28px_-12px_rgba(36,20,54,0.55)]" />
                </span>
                <span>
                  <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
                    While You Wait
                  </span>
                  <span className="mt-2 block font-serif text-2xl leading-tight text-plum group-hover:text-burgundy">
                    Read Issue No. {latest.number}: {latest.title}
                  </span>
                  <span className="mt-2 block font-sans text-sm text-charcoal-soft">
                    {getIssueStats(latest.number).stories} stories to read now &rarr;
                  </span>
                </span>
              </Link>
            </Reveal>
          )}
        </div>
      </section>
    </>
  );
}

/** A story slot still being written: the shape of an article card with
 *  shimmering lines where its picture and words will go. */
function SkeletonCard({ delayMs }: { delayMs: number }) {
  const shimmer = { animationDelay: `${delayMs}ms` };
  return (
    <div
      className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_1px_2px_rgba(36,31,33,0.06)]"
      aria-hidden="true"
    >
      <div className="skeleton aspect-[4/3] w-full" style={shimmer} />
      <div className="flex flex-1 flex-col p-6">
        <span className="skeleton block h-5 w-4/5 rounded-full" style={shimmer} />
        <span className="skeleton mt-3 block h-5 w-3/5 rounded-full" style={shimmer} />
        <span className="skeleton mt-5 block h-3 w-full rounded-full" style={shimmer} />
        <span className="skeleton mt-2 block h-3 w-11/12 rounded-full" style={shimmer} />
        <span className="skeleton mt-2 block h-3 w-2/3 rounded-full" style={shimmer} />
        <p className="mt-5 flex items-center gap-2 border-t border-charcoal/10 pt-4 font-serif text-sm italic text-charcoal-soft">
          <PenLine className="h-3.5 w-3.5 text-gold" />
          A new story is being written&hellip;
        </p>
      </div>
    </div>
  );
}
