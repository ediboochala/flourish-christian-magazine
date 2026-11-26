import { BookOpen, ChevronDown } from "lucide-react";
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
        <details className="other-articles theme-wine group overflow-hidden rounded-[1.6rem] border border-gold-light/50 bg-white shadow-[0_26px_60px_-30px_rgba(111,18,34,0.75)]">
          <summary className="relative flex cursor-pointer list-none items-center justify-between gap-4 overflow-hidden bg-gradient-to-r from-plum via-burgundy to-plum px-6 py-6 sm:px-10 sm:py-7 [&::-webkit-details-marker]:hidden">
            {/* soft gold glows for depth */}
            <span aria-hidden className="pointer-events-none absolute -left-10 -top-16 h-44 w-44 rounded-full bg-gold-light/30 blur-3xl" />
            <span aria-hidden className="pointer-events-none absolute -bottom-20 right-24 h-48 w-48 rounded-full bg-gold-light/20 blur-3xl" />
            <span className="relative flex items-center gap-4 sm:gap-5">
              <span className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold-light/70 bg-white/10 text-gold-light sm:inline-flex">
                <BookOpen className="h-6 w-6" aria-hidden />
              </span>
              <span>
                <span className="block font-sans text-[11px] font-semibold uppercase tracking-[0.26em] text-gold-light">
                  More to Read
                </span>
                <span className="mt-1 block font-serif text-3xl leading-tight text-white sm:text-4xl">
                  Other Articles
                  <span className="ml-3 inline-flex translate-y-[-4px] items-center rounded-full bg-gold-light px-2.5 py-0.5 align-middle font-sans text-xs font-semibold text-plum">
                    {otherArticles.length}
                  </span>
                </span>
                <span className="mt-1.5 block font-sans text-sm text-white/75">
                  Stories from earlier issues of Flourish
                </span>
              </span>
            </span>
            <span className="relative inline-flex shrink-0 items-center gap-2 rounded-full bg-gold-light px-5 py-2.5 font-sans text-xs font-bold uppercase tracking-[0.12em] text-plum shadow-[0_10px_24px_-10px_rgba(0,0,0,0.5)] transition-all duration-300 group-hover:bg-white group-hover:shadow-[0_14px_30px_-10px_rgba(0,0,0,0.6)]">
              <span className="group-open:hidden">View</span>
              <span className="hidden group-open:inline">Hide</span>
              <ChevronDown className="h-4 w-4 transition-transform duration-300 group-open:rotate-180" aria-hidden />
            </span>
          </summary>
          <div className="grid grid-cols-1 gap-6 bg-cream/60 px-6 py-8 sm:grid-cols-2 sm:px-8 lg:grid-cols-3">
            {otherArticles.map((a) => (
              <ArticleCard key={a.slug} article={a} size="compact" />
            ))}
          </div>
        </details>
      </div>
    </section>
  );
}
