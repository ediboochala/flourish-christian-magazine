import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import ArticleCard from "@/components/ArticleCard";
import { authors, getAuthorBySlug } from "@/lib/data/authors";
import { getArticlesByAuthor } from "@/lib/data/articles";

export function generateStaticParams() {
  return authors.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);
  if (!author) return {};
  return { title: author.name, description: author.bio };
}

export default async function ContributorProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);
  if (!author) notFound();

  const authorArticles = getArticlesByAuthor(author.slug);

  return (
    <div>
      <section className="bg-plum py-20 sm:py-24">
        <div className="mx-auto flex max-w-3xl flex-col items-center px-6 text-center lg:px-10">
          <div className="relative h-32 w-32 overflow-hidden rounded-full ring-4 ring-white/20">
            <PlaceholderImage image={author.image} sizes="128px" />
          </div>
          <h1 className="mt-6 font-serif text-3xl text-white sm:text-4xl">{author.name}</h1>
          {author.role && (
            <p className="mt-2 font-sans text-xs font-semibold uppercase tracking-[0.16em] text-gold-light">
              {author.role}
            </p>
          )}
          <p className="mx-auto mt-5 max-w-xl font-sans text-base leading-relaxed text-white/80">
            {author.bio}
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {author.focusAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-white/25 px-3 py-1 font-sans text-[11px] uppercase tracking-[0.08em] text-white/75"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 className="font-serif text-2xl text-plum sm:text-3xl">
            Articles by {author.name}
          </h2>
          {authorArticles.length > 0 ? (
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {authorArticles.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          ) : (
            <p className="mt-4 font-sans text-sm text-charcoal-soft">
              No published articles yet — check back soon.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
