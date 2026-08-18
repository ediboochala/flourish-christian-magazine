"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Menu, X } from "lucide-react";
import { cx } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/magazine", label: "Magazine" },
  { href: "/categories", label: "Categories" },
  { href: "/contributors", label: "Contributors" },
  { href: "/events", label: "Events" },
  { href: "/testimonies", label: "Testimonies" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  // Close the mobile menu when navigating — adjusting state during render
  // (rather than in a useEffect) avoids an extra render/commit cycle.
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cx(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-ivory/95 shadow-[0_1px_0_rgba(36,31,33,0.08)] backdrop-blur-md" : "bg-ivory/95"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-serif text-xl font-medium tracking-tight text-plum sm:text-[1.7rem]">
            Flourish
          </span>
          <span className="font-sans text-[9px] font-semibold uppercase tracking-[0.32em] text-gold">
            Christian Magazine
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => {
            const active = pathname?.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cx(
                  "nav-link font-sans text-[13px] font-semibold uppercase tracking-[0.08em] transition-colors hover:text-burgundy",
                  active ? "text-burgundy" : "text-charcoal"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href="/search"
            aria-label="Search Flourish"
            className="flex h-9 w-9 items-center justify-center rounded-full text-charcoal transition-colors hover:bg-cream hover:text-burgundy"
          >
            <Search className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            href="/write-for-flourish"
            className="rounded-full bg-plum px-5 py-2.5 font-sans text-xs font-semibold uppercase tracking-[0.08em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-burgundy active:translate-y-0 active:scale-[0.97]"
          >
            Join Flourish
          </Link>
        </div>

        <button
          className="flex h-9 w-9 items-center justify-center text-plum lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-charcoal/10 bg-ivory px-6 py-6 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-3 font-sans text-sm font-semibold uppercase tracking-[0.06em] text-charcoal hover:bg-cream hover:text-burgundy"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/search"
              className="rounded-lg px-3 py-3 font-sans text-sm font-semibold uppercase tracking-[0.06em] text-charcoal hover:bg-cream hover:text-burgundy"
            >
              Search
            </Link>
          </nav>
          <Link
            href="/write-for-flourish"
            className="mt-4 flex w-full items-center justify-center rounded-full bg-plum px-5 py-3 font-sans text-xs font-semibold uppercase tracking-[0.08em] text-white"
          >
            Join Flourish
          </Link>
        </div>
      )}
    </header>
  );
}
