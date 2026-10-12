import Link from "next/link";
import { getAuthorBySlug } from "@/lib/data/authors";
import { getCategoryBySlug } from "@/lib/data/categories";
import { getBookFeatureArticles } from "@/lib/data/articles";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import SectionHeading from "@/components/ui/SectionHeading";
import BookCarousel from "@/components/home/BookCarousel";
import { Article } from "@/lib/types";

/**
 * Homepage "Featured Articles": the issue's stories shown as the spreads
 * of an open book (photo on the left page, story on the right), turning
 * page by page from one to the next. See `BookCarousel` for the motion.
 */
export default function FeaturedBook() {
  const featured = getBookFeatureArticles();
  if (featured.length === 0) return null;

  return (
    <section className="relative overflow-hidden bg-cream py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        <div className="mb-8 text-center sm:mb-10">
          <SectionHeading eyebrow="From This Issue" title="Featured Articles" align="center" />
        </div>
        <BookCarousel
          lefts={featured.map((article, i) => (
            <LeftPage key={`l-${article.slug}`} article={article} page={i * 2 + 1} />
          ))}
          rights={featured.map((article, i) => (
            <RightPage key={`r-${article.slug}`} article={article} page={i * 2 + 2} />
          ))}
          labels={featured.map((a) => a.title)}
        />
      </div>
    </section>
  );
}

function LeftPage({ article, page }: { article: Article; page: number }) {
  const href = `/article/${article.slug}`;
  return (
    <div className="book-page book-page--left">
      <Link
        href={href}
        tabIndex={-1}
        aria-hidden="true"
        className="img-zoom relative block aspect-[4/3] w-full overflow-hidden rounded-sm shadow-[0_6px_18px_-8px_rgba(36,31,33,0.45)] md:aspect-auto md:h-full"
      >
        <PlaceholderImage image={article.heroImage} sizes="(min-width: 768px) 30rem, 90vw" />
      </Link>
      <span className="book-folio hidden md:block">{page}</span>
    </div>
  );
}

function RightPage({ article, page }: { article: Article; page: number }) {
  const author = getAuthorBySlug(article.authorSlug);
  const category = getCategoryBySlug(article.categorySlug);
  const href = `/article/${article.slug}`;
  return (
    <div className="book-page book-page--right">
      <div className="flex h-full flex-col">
        <p className="flex items-center gap-2 font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-burgundy">
          {article.isNew && (
            <span className="rounded-full bg-gold px-2 py-0.5 text-[9px] tracking-[0.12em] text-white">
              New
            </span>
          )}
          {category?.name}
        </p>
        <Link href={href}>
          <h3 className="mt-4 font-serif text-2xl leading-tight text-plum transition-colors hover:text-burgundy sm:text-3xl line-clamp-3">
            {article.title}
          </h3>
        </Link>
        {article.subtitle && (
          <p className="mt-3 font-serif text-base italic leading-relaxed text-charcoal-soft line-clamp-2">
            {article.subtitle}
          </p>
        )}
        <div className="divider-ornate my-5" aria-hidden="true">
          <span className="text-xs">&#10086;</span>
        </div>
        <p className="font-sans text-[0.95rem] leading-relaxed text-charcoal-soft line-clamp-4">
          {article.excerpt}
        </p>
        <div className="mt-auto flex flex-wrap items-end justify-between gap-4 pt-6">
          <p className="font-sans text-xs text-charcoal-soft">
            By <span className="font-semibold text-plum">{author?.name ?? "Flourish"}</span>
            <span className="mx-2 text-charcoal-soft/50">&bull;</span>
            {article.readingTimeMinutes} min read
          </p>
          <Link
            href={href}
            className="group/link inline-flex items-center gap-1 font-sans text-xs font-semibold uppercase tracking-[0.1em] text-burgundy hover:text-plum"
          >
            Read the Story
            <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1">
              &rarr;
            </span>
          </Link>
        </div>
      </div>
      <span className="book-folio hidden md:block">{page}</span>
    </div>
  );
}
