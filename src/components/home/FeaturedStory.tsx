import Link from "next/link";
import { Article } from "@/lib/types";
import { getAuthorBySlug } from "@/lib/data/authors";
import { getCategoryBySlug } from "@/lib/data/categories";
import { formatDate } from "@/lib/utils";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import Eyebrow from "@/components/ui/Eyebrow";

export default function FeaturedStory({ article }: { article: Article }) {
  const author = getAuthorBySlug(article.authorSlug);
  const category = getCategoryBySlug(article.categorySlug);

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
      <Eyebrow>Editor&apos;s Feature</Eyebrow>
      <div className="mt-6 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Link
          href={`/article/${article.slug}`}
          className="img-zoom relative order-1 aspect-[4/5] w-full overflow-hidden rounded-2xl lg:order-none"
        >
          <PlaceholderImage image={article.heroImage} priority />
        </Link>
        <div>
          {category && (
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-burgundy">
              {category.name}
            </p>
          )}
          <Link href={`/article/${article.slug}`}>
            <h2 className="mt-4 font-serif text-3xl leading-[1.12] text-plum transition-colors hover:text-burgundy sm:text-4xl lg:text-[2.75rem]">
              {article.title}
            </h2>
          </Link>
          {article.subtitle && (
            <p className="mt-4 font-serif text-lg italic leading-relaxed text-charcoal-soft">
              {article.subtitle}
            </p>
          )}
          <p className="mt-5 font-sans text-base leading-relaxed text-charcoal-soft">
            {article.excerpt}
          </p>
          <div className="mt-6 flex items-center gap-3 font-sans text-sm text-charcoal-soft">
            <span className="relative h-9 w-9 overflow-hidden rounded-full">
              {author && <PlaceholderImage image={author.image} sizes="36px" />}
            </span>
            <span>
              By <strong className="font-semibold text-charcoal">{author?.name}</strong> ·{" "}
              {formatDate(article.publishedAt)}
            </span>
          </div>
          <Link
            href={`/article/${article.slug}`}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-plum px-7 py-3.5 font-sans text-xs font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-burgundy"
          >
            Read the Full Story →
          </Link>
        </div>
      </div>
    </section>
  );
}
