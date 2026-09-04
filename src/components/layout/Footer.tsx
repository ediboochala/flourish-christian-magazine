import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "@/components/ui/BrandIcons";
import { categories } from "@/lib/data/categories";
import NewsletterCTA from "@/components/NewsletterCTA";

const MAGAZINE_LINKS = [
  { href: "/magazine", label: "Magazine Archive" },
  { href: "/contributors", label: "Contributors" },
  { href: "/events", label: "Events" },
  { href: "/testimonies", label: "Testimonies" },
  { href: "/meeting-minutes", label: "Meeting Minutes" },
  { href: "/write-for-flourish", label: "Submit an Article" },
];

const COMPANY_LINKS = [
  { href: "/about", label: "About Flourish" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/70">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5">
          <div className="sm:col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 leading-none">
              <span className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full ring-1 ring-white/10">
                <Image
                  src="/Gemini_Generated_Image_2t6tje2t6tje2t6t.jpg"
                  alt="M.F.M Women Foundation Florida logo"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </span>
              <span className="flex flex-col">
                <span className="font-serif text-2xl text-white">Flourish</span>
                <span className="font-sans text-[9px] font-semibold uppercase tracking-[0.32em] text-gold-light">
                  Christian Magazine
                </span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm font-sans text-sm leading-relaxed text-white/60">
              An online publication of M.F.M Women Foundation Florida, inspiring Christian women
              through faith, stories, testimonies, and community.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[FacebookIcon, InstagramIcon, YoutubeIcon, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Flourish on social media [placeholder link, add real profile URL]"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-gold-light"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-gold-light">
              Magazine
            </h3>
            <ul className="mt-4 space-y-3">
              {MAGAZINE_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="font-sans text-sm hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-gold-light">
              Categories
            </h3>
            <ul className="mt-4 space-y-3">
              {categories.slice(0, 5).map((c) => (
                <li key={c.slug}>
                  <Link href={`/categories/${c.slug}`} className="font-sans text-sm hover:text-white">
                    {c.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/categories"
                  className="group/link inline-flex items-center gap-1 font-sans text-sm text-gold-light hover:text-white"
                >
                  View All
                  <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1">
                    →
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-gold-light">
              Flourish
            </h3>
            <ul className="mt-4 space-y-3">
              {COMPANY_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="font-sans text-sm hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 rounded-2xl border border-white/10 bg-white/5 p-8 sm:p-10">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div>
              <p className="font-serif text-xl text-white">Keep Flourishing.</p>
              <p className="mt-1 max-w-md font-sans text-sm text-white/60">
                Stay connected to stories, encouragement, events, and women who are growing in faith
                and purpose.
              </p>
            </div>
            <div className="w-full lg:w-auto">
              <NewsletterCTA variant="inline" />
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-2 border-t border-white/10 pt-8 text-center">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-gold-light">
            Faith · Purpose · Connection · Encouragement
          </p>
          <p className="font-serif text-base italic text-white/70">
            Rooted in Christ. Growing together. Flourishing in purpose.
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 font-sans text-xs text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} Flourish Magazine · M.F.M Women Foundation Florida</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white/70">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white/70">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
