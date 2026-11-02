import Link from "next/link";
import { Article } from "@/lib/types";
import { getAuthorBySlug } from "@/lib/data/authors";
import { getCategoryBySlug } from "@/lib/data/categories";
import { cx } from "@/lib/utils";
import PlaceholderImage from "@/components/ui/PlaceholderImage";

interface ArticleCardProps {
  article: Article;
  size?: "default" | "large" | "compact";
  className?: string;
  /** Position in its grid. Cards further along a row start their scroll
   *  entrance a moment later, so a row rises in a gentle wave. */
  index?: number;
}

export default function ArticleCard({ article, size = "default", className, index = 0 }: ArticleCardProps) {
  const author = getAuthorBySlug(article.authorSlug);
  const category = getCategoryBySlug(article.categorySlug);

  if (size === "compact") {
    return (
      <Link
        href={`/article/${article.slug}`}
        className={cx("scroll-rise group flex gap-4 items-start", className)}
      >
        <div className="img-zoom relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl">
          <PlaceholderImage image={article.heroImage} sizes="80px" compact />
        </div>
        <div className="min-w-0">
          {(article.isNew || category) && (
            <p className="mb-1 flex items-center gap-2 font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-burgundy">
              {article.isNew && (
                <span className="rounded-full bg-gold px-1.5 py-0.5 text-[9px] tracking-[0.12em] text-white">
                  New
                </span>
              )}
              {category?.name}
            </p>
          )}
          <h3 className="font-serif text-base leading-snug text-plum group-hover:text-burgundy transition-colors line-clamp-2">
            {article.title}
          </h3>
          <p className="mt-1 font-sans text-xs text-charcoal-soft">
            {article.readingTimeMinutes} min read
          </p>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/article/${article.slug}`}
      className={cx("card-rise group flex flex-col", className)}
      style={{ "--stagger": index % 3 } as React.CSSProperties}
    >
      <div
        className={cx(
          "card-media relative w-full overflow-hidden rounded-[1.4rem] bg-cream shadow-[0_22px_44px_-28px_rgba(58,15,43,0.55)] transition-[transform,box-shadow] duration-500 ease-out group-hover:-translate-y-1.5 group-hover:shadow-[0_30px_56px_-26px_rgba(58,15,43,0.6)]",
          size === "large" ? "aspect-[16/10]" : "aspect-[4/3]"
        )}
      >
        <div className="card-media-inner img-zoom absolute inset-0">
          <PlaceholderImage
            image={article.heroImage}
            sizes={size === "large" ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 26rem, (min-width: 640px) 50vw, 100vw"}
          />
        </div>

        {/* A plum wash that deepens on hover so the call to read can rise
            over the photograph. */}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-plum/85 via-plum/15 to-transparent opacity-50 transition-opacity duration-500 group-hover:opacity-100"
          aria-hidden="true"
        />
        {/* A fine inset frame, like a photograph mounted on a page. */}
        <div
          className="pointer-events-none absolute inset-2.5 rounded-[1rem] ring-1 ring-white/25"
          aria-hidden="true"
        />

        {category && (
          <span className="absolute left-4 top-4 z-[2] rounded-full bg-white/90 px-3 py-1 font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-plum backdrop-blur-sm">
            {category.name}
          </span>
        )}
        {article.isNew && (
          <span className="absolute right-4 top-4 z-[2] rounded-full bg-gold-light px-3 py-1 font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-plum shadow-sm">
            New
          </span>
        )}

        <div className="absolute inset-x-5 bottom-4 z-[2] flex items-end justify-between gap-3">
          <span className="font-sans text-[11px] font-medium uppercase tracking-[0.14em] text-white/85">
            {article.readingTimeMinutes} min read
          </span>
          <span className="translate-y-2 font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-gold-light opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            Read the story &rarr;
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col px-1 pt-5">
        <h3
          className={cx(
            "font-serif leading-snug text-plum transition-colors duration-300 group-hover:text-burgundy",
            size === "large" ? "text-2xl sm:text-3xl" : "text-xl"
          )}
        >
          <span className="title-underline">{article.title}</span>
        </h3>
        {article.subtitle && (
          <p className="mt-2 font-serif text-[15px] italic leading-snug text-charcoal-soft line-clamp-2">
            {article.subtitle}
          </p>
        )}
        <p
          className={cx(
            "mt-2.5 flex-1 font-sans text-sm leading-relaxed text-charcoal-soft",
            article.subtitle ? "line-clamp-2" : "line-clamp-3"
          )}
        >
          {article.excerpt}
        </p>
        <p className="mt-4 flex items-center gap-2.5 font-sans text-xs text-charcoal-soft">
          <span
            className="h-px w-6 bg-gold transition-[width] duration-500 group-hover:w-10"
            aria-hidden="true"
          />
          <span>
            By <span className="font-semibold tracking-tight text-plum">{author?.name ?? "Flourish"}</span>
          </span>
        </p>
      </div>
    </Link>
  );
}
