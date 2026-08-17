import Link from "next/link";
import { Category } from "@/lib/types";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import { getArticlesByCategory } from "@/lib/data/articles";

export default function CategoryCard({ category }: { category: Category }) {
  const count = getArticlesByCategory(category.slug).length;

  return (
    <Link
      href={`/categories/${category.slug}`}
      className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-2xl"
    >
      <div className="img-zoom absolute inset-0">
        <PlaceholderImage image={category.image} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/25 to-transparent" />
      <div className="relative z-10 p-6 text-white">
        <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-gold-light">
          {count} {count === 1 ? "Story" : "Stories"}
        </p>
        <h3 className="mt-2 font-serif text-2xl leading-snug">{category.name}</h3>
        <p className="mt-2 line-clamp-2 font-sans text-sm text-white/75">{category.description}</p>
      </div>
    </Link>
  );
}
