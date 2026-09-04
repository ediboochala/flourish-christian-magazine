import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import ArticleBody from "@/components/ArticleBody";
import ArticleCard from "@/components/ArticleCard";
import ShareButtons from "@/components/ShareButtons";
import NewsletterCTA from "@/components/NewsletterCTA";
import ReadingProgress from "@/components/ReadingProgress";
import { articles, getArticleBySlug, getRelatedArticles } from "@/lib/data/articles";
import { getAuthorBySlug } from "@/lib/data/authors";
import { getCategoryBySlug } from "@/lib/data/categories";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: article.seo?.metaTitle ?? article.title,
    description: article.seo?.metaDescription ?? article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.publishedAt,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const author = getAuthorBySlug(article.authorSlug);
  const category = getCategoryBySlug(article.categorySlug);
  const related = getRelatedArticles(article, 3);

  const currentIndex = articles.findIndex((a) => a.slug === article.slug);
  const prevArticle = articles[currentIndex - 1];
  const nextArticle = articles[currentIndex + 1];

  return (
    <article>
      <ReadingProgress />

      {/* HERO */}
      <section className="grain-overlay relative overflow-hidden bg-plum">
        <div className="absolute inset-0 overflow-hidden opacity-[0.55]">
          <div className="animate-kenburns absolute inset-0">
            <PlaceholderImage image={article.heroImage} priority />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-plum via-plum/80 to-plum/45" />
        <div className="relative z-[2] mx-auto max-w-3xl px-6 pb-16 pt-32 text-center lg:px-10">
          <div className="flex items-center justify-center gap-3">
            {article.isNew && (
              <span className="rounded-full bg-gold px-2.5 py-1 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-plum">
                New
              </span>
            )}
            {category && (
              <Link
                href={`/categories/${category.slug}`}
                className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold-light hover:text-white"
              >
                {category.name}
              </Link>
            )}
          </div>
          <h1 className="text-h1 mt-4 font-serif text-white">{article.title}</h1>
          {article.subtitle && (
            <p className="mx-auto mt-5 max-w-xl font-serif text-lg italic leading-relaxed text-white/80">
              {article.subtitle}
            </p>
          )}
          <div className="mt-7 flex items-center justify-center gap-3 font-sans text-sm text-white/75">
            <span className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-white/30">
              {author && <PlaceholderImage image={author.image} sizes="40px" />}
            </span>
            <span>
              By <strong className="font-bold tracking-tight text-white">{author?.name}</strong>
              <span className="mx-2">·</span>
              {formatDate(article.publishedAt)}
              <span className="mx-2">·</span>
              {article.readingTimeMinutes} min read
            </span>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <ArticleBody blocks={article.body} />

          <div className="mt-12 border-t border-charcoal/10 pt-8">
            <ShareButtons
              title={article.title}
              prompt="Know a woman who needs to hear this? Share it with her."
            />
          </div>

          {author && (
            <div className="mt-12 flex flex-col items-start gap-4 rounded-2xl bg-cream p-6 sm:flex-row sm:items-center">
              <span className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full">
                <PlaceholderImage image={author.image} sizes="64px" />
              </span>
              <div>
                <p className="font-sans text-xs font-semibold uppercase tracking-[0.1em] text-burgundy">
                  Written By
                </p>
                <Link
                  href={`/contributors/${author.slug}`}
                  className="font-serif text-lg text-plum hover:text-burgundy"
                >
                  {author.name}
                </Link>
                <p className="mt-1 font-sans text-sm text-charcoal-soft line-clamp-2">{author.bio}</p>
              </div>
            </div>
          )}

          <div className="mt-10 flex items-center justify-between border-t border-charcoal/10 pt-8">
            {prevArticle ? (
              <Link
                href={`/article/${prevArticle.slug}`}
                className="group flex items-center gap-2 font-sans text-sm text-charcoal-soft hover:text-plum"
              >
                <ChevronLeft
                  className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"
                  aria-hidden="true"
                />
                <span className="max-w-[10rem] truncate sm:max-w-xs">{prevArticle.title}</span>
              </Link>
            ) : (
              <span />
            )}
            {nextArticle && (
              <Link
                href={`/article/${nextArticle.slug}`}
                className="group flex items-center gap-2 text-right font-sans text-sm text-charcoal-soft hover:text-plum"
              >
                <span className="max-w-[10rem] truncate sm:max-w-xs">{nextArticle.title}</span>
                <ChevronRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="bg-cream py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <h2 className="font-serif text-2xl text-plum sm:text-3xl">You May Also Like</h2>
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </div>
        </section>
      )}

      <NewsletterCTA />
    </article>
  );
}
