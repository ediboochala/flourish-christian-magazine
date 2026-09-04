"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Article, Category } from "@/lib/types";
import ArticleCard from "@/components/ArticleCard";

interface MagazineArchiveProps {
  articles: Article[];
  categories: Category[];
  initialCategorySlug?: string;
}

type SortOption = "newest" | "oldest" | "az";

const PAGE_SIZE = 6;

export default function MagazineArchive({
  articles,
  categories,
  initialCategorySlug,
}: MagazineArchiveProps) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | "all">(
    initialCategorySlug ?? "all"
  );
  const [sort, setSort] = useState<SortOption>("newest");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    let result = articles;

    if (activeCategory !== "all") {
      result = result.filter((a) => a.categorySlug === activeCategory);
    }

    if (query.trim()) {
      const q = query.trim().toLowerCase();
      result = result.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.excerpt.toLowerCase().includes(q) ||
          a.tags?.some((t) => t.toLowerCase().includes(q))
      );
    }

    result = [...result].sort((a, b) => {
      if (sort === "az") return a.title.localeCompare(b.title);
      const diff = new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
      if (sort === "oldest") return -diff;
      // "newest": brand-new issue pieces first, then by editorial priority, then by date
      if (!!a.isNew !== !!b.isNew) return a.isNew ? -1 : 1;
      const pa = a.priority ?? Number.POSITIVE_INFINITY;
      const pb = b.priority ?? Number.POSITIVE_INFINITY;
      if (pa !== pb) return pa - pb;
      return diff;
    });

    return result;
  }, [articles, activeCategory, query, sort]);

  const visible = filtered.slice(0, visibleCount);

  return (
    <div>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full max-w-md">
          <Search
            className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal-soft"
            aria-hidden="true"
          />
          <label htmlFor="magazine-search" className="sr-only">
            Search articles
          </label>
          <input
            id="magazine-search"
            type="search"
            placeholder="Search stories, topics, tags…"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setVisibleCount(PAGE_SIZE);
            }}
            className="w-full rounded-full border border-charcoal/15 bg-white py-3 pl-11 pr-4 font-sans text-sm text-charcoal placeholder:text-charcoal-soft/70 focus:border-gold focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-3">
          <label htmlFor="magazine-sort" className="font-sans text-xs uppercase tracking-[0.1em] text-charcoal-soft">
            Sort
          </label>
          <select
            id="magazine-sort"
            value={sort}
            onChange={(e) => setSort(e.target.value as SortOption)}
            className="rounded-full border border-charcoal/15 bg-white px-4 py-2.5 font-sans text-sm text-charcoal focus:border-gold focus:outline-none"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="az">Alphabetical</option>
          </select>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        <button
          onClick={() => {
            setActiveCategory("all");
            setVisibleCount(PAGE_SIZE);
          }}
          className={`rounded-full px-4 py-2 font-sans text-xs font-semibold uppercase tracking-[0.06em] transition-colors ${
            activeCategory === "all"
              ? "bg-plum text-white"
              : "bg-white text-charcoal-soft hover:bg-cream"
          }`}
        >
          All Stories
        </button>
        {categories.map((c) => (
          <button
            key={c.slug}
            onClick={() => {
              setActiveCategory(c.slug);
              setVisibleCount(PAGE_SIZE);
            }}
            className={`rounded-full px-4 py-2 font-sans text-xs font-semibold uppercase tracking-[0.06em] transition-colors ${
              activeCategory === c.slug
                ? "bg-plum text-white"
                : "bg-white text-charcoal-soft hover:bg-cream"
            }`}
          >
            {c.name}
          </button>
        ))}
      </div>

      <p className="mt-6 font-sans text-sm text-charcoal-soft">
        {filtered.length} {filtered.length === 1 ? "story" : "stories"} found
      </p>

      {visible.length > 0 ? (
        <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      ) : (
        <div className="mt-16 rounded-2xl bg-white p-12 text-center">
          <p className="font-serif text-xl text-plum">No stories match your search.</p>
          <p className="mt-2 font-sans text-sm text-charcoal-soft">
            Try a different keyword or explore another category.
          </p>
        </div>
      )}

      {visibleCount < filtered.length && (
        <div className="mt-12 text-center">
          <button
            onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
            className="rounded-full border border-plum px-8 py-3.5 font-sans text-xs font-semibold uppercase tracking-[0.1em] text-plum transition-colors hover:bg-plum hover:text-white"
          >
            Load More Stories
          </button>
        </div>
      )}
    </div>
  );
}
