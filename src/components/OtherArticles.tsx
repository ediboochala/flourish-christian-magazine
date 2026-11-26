import { ChevronDown } from "lucide-react";
import ArticleCard from "@/components/ArticleCard";
import { otherArticles } from "@/lib/data/articles";

/**
 * A closed-by-default panel of the "Other Articles" (pieces from archived
 * issues; see `otherArticles`). Uses a native <details>, so it opens on
 * click without any client JavaScript and the cards aren't shown until
 * a reader asks for them. Renders nothing when there are none.
 */
export default function OtherArticles({ className }: { className?: string }) {
  if (otherArticles.length === 0) return null;

  return (
    <section className={className ?? "bg-cream py-10"}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <details className="other-articles group rounded-[1.4rem] border border-plum/10 bg-white shadow-[0_18px_40px_-30px_rgba(58,15,43,0.5)]">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 sm:px-8 [&::-webkit-details-marker]:hidden">
            <span>
              <span className="block font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-burgundy">
                More to Read
              </span>
              <span className="mt-1 block font-serif text-2xl text-plum sm:text-3xl">
                Other Articles
                <span className="ml-2 align-middle font-sans text-sm text-charcoal-soft">
                  ({otherArticles.length})
                </span>
              </span>
            </span>
            <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-plum/15 px-4 py-2 font-sans text-xs font-semibold uppercase tracking-[0.1em] text-plum transition-colors group-hover:border-burgundy group-hover:text-burgundy">
              <span className="group-open:hidden">View</span>
              <span className="hidden group-open:inline">Hide</span>
              <ChevronDown className="h-4 w-4 transition-transform duration-300 group-open:rotate-180" aria-hidden />
            </span>
          </summary>
          <div className="grid grid-cols-1 gap-6 border-t border-plum/10 px-6 py-8 sm:grid-cols-2 sm:px-8 lg:grid-cols-3">
            {otherArticles.map((a) => (
              <ArticleCard key={a.slug} article={a} size="compact" />
            ))}
          </div>
        </details>
      </div>
    </section>
  );
}
