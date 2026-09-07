"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Search, Menu, X } from "lucide-react";
import { cx } from "@/lib/utils";
import { categories } from "@/lib/data/categories";
import { MEGA_REGION_LEADERSHIP_URL } from "@/lib/links";

type SubLink = { href: string; label: string; blurb?: string; external?: boolean };
type NavItem = { href: string; label: string; menu?: SubLink[] };

const NAV: NavItem[] = [
  { href: "/", label: "Flourish" },
  {
    href: "/magazine",
    label: "Magazine",
    menu: [
      { href: "/magazine", label: "Magazine Archive", blurb: "Every issue & story" },
      { href: "/write-for-flourish", label: "Submit an Article", blurb: "Share your story" },
      { href: "/editorial-team", label: "Editorial Team", blurb: "The voices behind Flourish" },
    ],
  },
  {
    href: "/categories",
    label: "Categories",
    menu: [
      ...categories.map((c) => ({ href: `/categories/${c.slug}`, label: c.name })),
      { href: "/categories", label: "View all categories" },
    ],
  },
  { href: "/events", label: "Events" },
  {
    href: "/about",
    label: "About",
    menu: [
      { href: "/about", label: "About Flourish", blurb: "Our story & mission" },
      { href: "/contact", label: "Contact", blurb: "Get in touch" },
      {
        href: MEGA_REGION_LEADERSHIP_URL,
        label: "Women Foundation Leadership",
        blurb: "MFM Mega Region 2",
        external: true,
      },
    ],
  },
  { href: "/get-involved", label: "Get Involved" },
];

/** Shared "pill" treatment for a top-level nav item — a soft rounded
 *  highlight that fades in on hover/focus instead of a bare underline,
 *  reads as one deliberate family whether the item is active or not. */
function navItemClasses(active: boolean) {
  return cx(
    "rounded-full px-3 py-2 font-sans text-[12px] font-semibold uppercase tracking-[0.06em] transition-colors duration-300",
    active ? "bg-plum/8 text-plum" : "text-charcoal hover:bg-cream hover:text-burgundy"
  );
}

function isActive(pathname: string | null, item: NavItem) {
  if (item.href === "/") return pathname === "/";
  if (pathname?.startsWith(item.href)) return true;
  return item.menu?.some((l) => l.href !== "/categories" && pathname?.startsWith(l.href)) ?? false;
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);
  const navRef = useRef<HTMLElement>(null);

  // Close the mobile menu and any open dropdown when navigating — adjusting
  // state during render (rather than in a useEffect) avoids an extra
  // render/commit cycle.
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
    setOpenMenu(null);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Outside click + Escape close the open dropdown — hover/mouseleave on
  // each item's wrapper (below) handles the common desktop case; this
  // covers touch and keyboard.
  useEffect(() => {
    if (!openMenu) return;
    function onPointerDown(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenMenu(null);
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [openMenu]);

  return (
    <header
      className={cx(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-ivory/95 shadow-[0_1px_0_rgba(36,31,33,0.08)] backdrop-blur-md" : "bg-ivory/95"
      )}
    >
      <div
        className={cx(
          "mx-auto flex max-w-7xl items-center justify-between px-6 transition-[padding] duration-300 lg:px-10",
          scrolled ? "py-2.5" : "py-3.5"
        )}
      >
        <Link href="/" className="flex items-center gap-2.5 leading-none">
          <span
            className={cx(
              "relative flex-shrink-0 overflow-hidden rounded-full ring-1 ring-plum/10 transition-all duration-300",
              scrolled ? "h-9 w-9" : "h-10 w-10"
            )}
          >
            <Image
              src="/Gemini_Generated_Image_2t6tje2t6tje2t6t.jpg"
              alt="M.F.M Women Foundation Florida logo"
              fill
              sizes="40px"
              className="object-cover"
              priority
            />
          </span>
          <span className="flex flex-col">
            <span className="font-serif text-lg font-medium tracking-tight text-plum sm:text-xl">
              Flourish
            </span>
            <span className="font-sans text-[8px] font-semibold uppercase tracking-[0.26em] text-gold">
              Christian Magazine
            </span>
          </span>
        </Link>

        <nav ref={navRef} className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
          {NAV.map((item) => {
            const active = isActive(pathname, item);

            if (!item.menu) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={navItemClasses(active)}
                >
                  {item.label}
                </Link>
              );
            }

            const menuOpen = openMenu === item.label;
            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={menuOpen}
                  onClick={() => setOpenMenu((o) => (o === item.label ? null : item.label))}
                  className={cx(navItemClasses(active), "inline-flex items-center gap-1")}
                >
                  {item.label}
                  <ChevronDown
                    className={cx(
                      "h-3 w-3 transition-transform duration-300",
                      menuOpen && "rotate-180"
                    )}
                    aria-hidden="true"
                  />
                </button>

                <div
                  role="menu"
                  className={cx(
                    "absolute left-1/2 top-full z-10 w-64 -translate-x-1/2 pt-3 transition-all duration-200 ease-out",
                    menuOpen
                      ? "translate-y-0 opacity-100"
                      : "pointer-events-none -translate-y-1 opacity-0"
                  )}
                >
                  <div className="grain-overlay overflow-hidden rounded-2xl border border-charcoal/8 bg-white p-2 shadow-xl">
                    {item.menu.map((link) => {
                      const linkActive = !link.external && pathname === link.href;
                      const inner = (
                        <>
                          <span className="font-sans text-[13px] font-semibold uppercase tracking-[0.05em] text-plum">
                            {link.label}
                          </span>
                          {link.blurb && (
                            <span className="mt-0.5 font-sans text-xs text-charcoal-soft">
                              {link.blurb}
                            </span>
                          )}
                        </>
                      );
                      const linkClasses = cx(
                        "flex flex-col rounded-xl px-3.5 py-2.5 transition-colors duration-200",
                        linkActive ? "bg-cream" : "hover:bg-cream"
                      );
                      return link.external ? (
                        <a
                          key={link.href + link.label}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          role="menuitem"
                          className={linkClasses}
                        >
                          {inner}
                        </a>
                      ) : (
                        <Link
                          key={link.href + link.label}
                          href={link.href}
                          role="menuitem"
                          className={linkClasses}
                        >
                          {inner}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href="/search"
            aria-label="Search Flourish"
            className="flex h-9 w-9 items-center justify-center rounded-full text-charcoal transition-colors duration-300 hover:bg-cream hover:text-burgundy"
          >
            <Search className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            href="/write-for-flourish"
            className="ml-1 rounded-full bg-plum px-5 py-2.5 font-sans text-xs font-semibold uppercase tracking-[0.08em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-burgundy active:translate-y-0 active:scale-[0.97]"
          >
            Join Flourish
          </Link>
        </div>

        <button
          className="relative flex h-9 w-9 items-center justify-center text-plum lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((o) => !o)}
        >
          <Menu
            className={cx(
              "absolute h-6 w-6 transition-all duration-300",
              open ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
            )}
            aria-hidden="true"
          />
          <X
            className={cx(
              "absolute h-6 w-6 transition-all duration-300",
              open ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
            )}
            aria-hidden="true"
          />
        </button>
      </div>

      {/* Always rendered (not conditionally mounted) so both opening and
          closing animate — grid-template-rows is one of the few CSS
          properties that can transition to/from an intrinsic "auto"-like
          height. */}
      <div
        id="mobile-nav"
        className={cx(
          "grid overflow-hidden bg-ivory transition-[grid-template-rows] duration-300 ease-out lg:hidden",
          open ? "grid-rows-[1fr] border-t border-charcoal/10" : "grid-rows-[0fr] border-t-0"
        )}
      >
        <div className="min-h-0 overflow-hidden">
          <nav className="flex flex-col gap-0.5 px-6 pt-6" aria-label="Mobile">
            {NAV.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="rounded-lg px-3 py-3 font-sans text-sm font-semibold uppercase tracking-[0.06em] text-charcoal transition-colors duration-300 hover:bg-cream hover:text-burgundy"
                >
                  {item.label}
                </Link>
                {item.menu && (
                  <div className="mb-1 ml-3 flex flex-col border-l border-charcoal/10 pl-3">
                    {item.menu
                      .filter((l) => l.href !== item.href)
                      .map((l) => {
                        const cls =
                          "rounded-lg px-3 py-2 font-sans text-xs font-medium uppercase tracking-[0.06em] text-charcoal-soft transition-colors duration-300 hover:bg-cream hover:text-burgundy";
                        return l.external ? (
                          <a key={l.href + l.label} href={l.href} target="_blank" rel="noreferrer" className={cls}>
                            {l.label}
                          </a>
                        ) : (
                          <Link key={l.href + l.label} href={l.href} className={cls}>
                            {l.label}
                          </Link>
                        );
                      })}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/search"
              className="rounded-lg px-3 py-3 font-sans text-sm font-semibold uppercase tracking-[0.06em] text-charcoal transition-colors duration-300 hover:bg-cream hover:text-burgundy"
            >
              Search
            </Link>
          </nav>
          <div className="px-6 pb-6 pt-4">
            <Link
              href="/write-for-flourish"
              className="flex w-full items-center justify-center rounded-full bg-plum px-5 py-3 font-sans text-xs font-semibold uppercase tracking-[0.08em] text-white transition-all duration-300"
            >
              Join Flourish
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
