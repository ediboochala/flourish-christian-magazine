import Link from "next/link";
import { Author } from "@/lib/types";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import { getArticlesByAuthor } from "@/lib/data/articles";

export default function ContributorCard({ author }: { author: Author }) {
  const count = getArticlesByAuthor(author.slug).length;

  return (
    <Link
      href={`/contributors/${author.slug}`}
      className="group flex flex-col items-center rounded-2xl bg-white p-8 text-center shadow-[0_1px_2px_rgba(36,31,33,0.06)] transition-shadow hover:shadow-[0_18px_40px_-16px_rgba(58,15,43,0.25)]"
    >
      <div className="img-zoom relative h-28 w-28 overflow-hidden rounded-full ring-4 ring-cream">
        <PlaceholderImage image={author.image} />
      </div>
      <h3 className="mt-5 font-serif text-xl text-plum group-hover:text-burgundy transition-colors">
        {author.name}
      </h3>
      {author.role && (
        <p className="mt-1 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-gold">
          {author.role}
        </p>
      )}
      <p className="mt-3 font-sans text-sm leading-relaxed text-charcoal-soft line-clamp-3">
        {author.bio}
      </p>
      <p className="mt-4 font-sans text-xs uppercase tracking-[0.1em] text-charcoal-soft">
        {count} {count === 1 ? "Article" : "Articles"} Published
      </p>
    </Link>
  );
}
