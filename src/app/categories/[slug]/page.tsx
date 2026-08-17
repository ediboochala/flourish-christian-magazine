import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import MagazineArchive from "@/components/magazine/MagazineArchive";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import { categories, getCategoryBySlug } from "@/lib/data/categories";
import { articles, getArticlesByCategory } from "@/lib/data/articles";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};
  return {
    title: category.name,
    description: category.description,
  };
}

export default async function CategoryArchivePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const categoryArticles = getArticlesByCategory(category.slug);

  return (
    <div>
      <section className="relative overflow-hidden bg-plum py-24 sm:py-28">
        <div className="absolute inset-0 opacity-30">
          <PlaceholderImage image={category.image} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-plum via-plum/80 to-plum/60" />
        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-10">
          <Link
            href="/categories"
            className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-gold-light hover:text-white"
          >
            ← All Categories
          </Link>
          <h1 className="mt-4 font-serif text-4xl leading-tight text-white sm:text-5xl">
            {category.name}
          </h1>
          <p className="mx-auto mt-5 max-w-xl font-sans text-base leading-relaxed text-white/75">
            {category.description}
          </p>
        </div>
      </section>

      <section className="bg-ivory py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <MagazineArchive
            articles={articles}
            categories={categories}
            initialCategorySlug={category.slug}
          />
          {categoryArticles.length === 0 && (
            <p className="mt-6 font-sans text-sm text-charcoal-soft">
              No stories in this category yet — check back soon.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
