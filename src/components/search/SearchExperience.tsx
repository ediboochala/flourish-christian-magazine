"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search as SearchIcon } from "lucide-react";
import { articles } from "@/lib/data/articles";
import { authors } from "@/lib/data/authors";
import { events } from "@/lib/data/events";
import { testimonies } from "@/lib/data/testimonies";
import { formatDateShort } from "@/lib/utils";

export default function SearchExperience() {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();

  const results = useMemo(() => {
    if (!q) return null;
    return {
      articles: articles.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.excerpt.toLowerCase().includes(q) ||
          a.tags?.some((t) => t.toLowerCase().includes(q))
      ),
      contributors: authors.filter((a) => a.name.toLowerCase().includes(q)),
      events: events.filter(
        (e) => e.title.toLowerCase().includes(q) || e.description.toLowerCase().includes(q)
      ),
      testimonies: testimonies.filter(
        (t) => t.title.toLowerCase().includes(q) || t.intro.toLowerCase().includes(q)
      ),
    };
  }, [q]);

  const totalResults = results
    ? results.articles.length + results.contributors.length + results.events.length + results.testimonies.length
    : 0;

  return (
    <div>
      <div className="relative">
        <SearchIcon
          className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-charcoal-soft"
          aria-hidden="true"
        />
        <label htmlFor="site-search" className="sr-only">
          Search Flourish
        </label>
        <input
          id="site-search"
          type="search"
          autoFocus
          placeholder="Search articles, contributors, events, testimonies…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-full border border-charcoal/15 bg-white py-4 pl-14 pr-5 font-sans text-base text-charcoal placeholder:text-charcoal-soft/70 focus:border-gold focus:outline-none"
        />
      </div>

      {!results && (
        <p className="mt-8 text-center font-sans text-sm text-charcoal-soft">
          Start typing to search across the entire Flourish platform.
        </p>
      )}

      {results && (
        <div className="mt-10 space-y-12">
          <p className="font-sans text-sm text-charcoal-soft">
            {totalResults} {totalResults === 1 ? "result" : "results"} for &ldquo;{query}&rdquo;
          </p>

          {results.articles.length > 0 && (
            <div>
              <h2 className="font-serif text-xl text-plum">Articles</h2>
              <ul className="mt-4 space-y-4">
                {results.articles.map((a) => (
                  <li key={a.slug}>
                    <Link href={`/article/${a.slug}`} className="group">
                      <p className="font-serif text-lg text-plum group-hover:text-burgundy">
                        {a.title}
                      </p>
                      <p className="mt-1 font-sans text-sm text-charcoal-soft line-clamp-1">
                        {a.excerpt}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {results.contributors.length > 0 && (
            <div>
              <h2 className="font-serif text-xl text-plum">Contributors</h2>
              <ul className="mt-4 space-y-3">
                {results.contributors.map((a) => (
                  <li key={a.slug}>
                    <Link
                      href={`/contributors/${a.slug}`}
                      className="font-sans text-sm font-medium text-charcoal hover:text-burgundy"
                    >
                      {a.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {results.events.length > 0 && (
            <div>
              <h2 className="font-serif text-xl text-plum">Events</h2>
              <ul className="mt-4 space-y-4">
                {results.events.map((e) => (
                  <li key={e.slug}>
                    <Link href={`/events/${e.slug}`} className="group">
                      <p className="font-serif text-lg text-plum group-hover:text-burgundy">
                        {e.title}
                      </p>
                      <p className="mt-1 font-sans text-xs text-charcoal-soft">
                        {formatDateShort(e.date)}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {results.testimonies.length > 0 && (
            <div>
              <h2 className="font-serif text-xl text-plum">Testimonies</h2>
              <ul className="mt-4 space-y-4">
                {results.testimonies.map((t) => (
                  <li key={t.slug}>
                    <Link href={`/testimonies/${t.slug}`} className="group">
                      <p className="font-serif text-lg text-plum group-hover:text-burgundy">
                        {t.title}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {totalResults === 0 && (
            <div className="rounded-2xl bg-white p-12 text-center">
              <p className="font-serif text-xl text-plum">No results found.</p>
              <p className="mt-2 font-sans text-sm text-charcoal-soft">
                Try a different search term, or explore the magazine archive.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
