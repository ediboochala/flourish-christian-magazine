import Link from "next/link";
import { Article } from "@/lib/types";
import { getAuthorBySlug } from "@/lib/data/authors";
import { getCategoryBySlug } from "@/lib/data/categories";
import { formatDateShort, cx } from "@/lib/utils";
import PlaceholderImage from "@/components/ui/PlaceholderImage";

interface ArticleCardProps {
  article: Article;
  size?: "default" | "large" | "compact";
  className?: string;
}

export default function ArticleCard({ article, size = "default", className }: ArticleCardProps) {
  const author = getAuthorBySlug(article.authorSlug);
  const category = getCategoryBySlug(article.categorySlug);

  if (size === "compact") {
    return (
      <Link
        href={`/article/${article.slug}`}
        className={cx("group flex gap-4 items-start", className)}
      >
        <div className="img-zoom relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg">
          <PlaceholderImage image={article.heroImage} sizes="80px" compact />
        </div>
        <div className="min-w-0">
          {(article.isNew || category) && (
            <p className="mb-1 flex items-center gap-2 font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-burgundy">
              {article.isNew && (
                <span className="rounded-full bg-gold px-1.5 py-0.5 text-[9px] tracking-[0.12em] text-plum">
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
            {formatDateShort(article.publishedAt)}
          </p>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/article/${article.slug}`}
      className={cx(
        "group flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_1px_2px_rgba(36,31,33,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-16px_rgba(58,15,43,0.25)]",
        className
      )}
    >
      <div
        className={cx(
          "img-zoom relative w-full overflow-hidden",
          size === "large" ? "aspect-[16/10]" : "aspect-[4/3]"
        )}
      >
        <PlaceholderImage image={article.heroImage} />
        {category && (
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-plum backdrop-blur-sm">
            {category.name}
          </span>
        )}
        {article.isNew && (
          <span className="absolute right-4 top-4 rounded-full bg-gold px-3 py-1 font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-plum shadow-sm">
            New
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3
          className={cx(
            "font-serif leading-snug text-plum transition-colors group-hover:text-burgundy",
            size === "large" ? "text-2xl sm:text-3xl" : "text-xl"
          )}
        >
          {article.title}
        </h3>
        <p className="mt-3 flex-1 font-sans text-sm leading-relaxed text-charcoal-soft line-clamp-3">
          {article.excerpt}
        </p>
        <div className="mt-5 flex items-center justify-between border-t border-charcoal/10 pt-4 font-sans text-xs text-charcoal-soft">
          <span className="inline-flex items-baseline gap-1">
            <span className="text-charcoal-soft/75">By</span>
            <span className="font-semibold tracking-tight text-plum">
              {author?.name ?? "Flourish"}
            </span>
          </span>
          <span>
            {formatDateShort(article.publishedAt)} · {article.readingTimeMinutes} min read
          </span>
        </div>
      </div>
    </Link>
  );
}
