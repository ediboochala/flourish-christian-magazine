import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/seo";

// Fraunces is a full variable font — loading it without a fixed `weight`
// keeps its whole 100–900 weight range plus the optical-size (opsz), SOFT,
// and WONK axes available. Paired with `font-optical-sizing: auto` in
// globals.css, this lets the same face render as a soft, warm text cut at
// body sizes and automatically sharpen into a high-contrast display cut at
// headline sizes — the whole reason this typeface exists.
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  // Was pointed at the .com — a domain Flourish has never been deployed to
  // — which silently broke every relative OG/Twitter image and canonical
  // URL on the site (link previews looked "blank" because the crawler was
  // fetching an image from a domain that doesn't serve it). Must match the
  // live domain in SITE_URL exactly.
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Flourish: Rooted in Christ. Growing Together. Flourishing in Purpose.",
    template: "%s · Flourish Christian Magazine",
  },
  description:
    "Flourish is the online publication of M.F.M Women Foundation Florida, inspiring Christian women through faith, stories, testimonies, and community. Read the latest issue and join thousands of women growing in faith and purpose.",
  keywords: [
    "Christian women's magazine",
    "faith and purpose",
    "women's ministry",
    "M.F.M Women Foundation Florida",
    "Christian lifestyle",
    "women's devotionals",
  ],
  alternates: { canonical: "/" },
  // Favicons come from the file-based convention (src/app/favicon.ico,
  // icon.png, apple-icon.png — all generated from the Foundation logo),
  // which Next wires into <head> automatically. Keep it that way rather
  // than pointing `icons` at a multi-MB source image.
  openGraph: {
    title: "Flourish Christian Magazine",
    description: "Inspiring Christian women through faith, stories, testimonies, and community.",
    type: "website",
    url: "/",
    siteName: SITE_NAME,
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flourish Christian Magazine",
    description: "Inspiring Christian women through faith, stories, testimonies, and community.",
    images: [DEFAULT_OG_IMAGE.url],
  },
};

// Colors the browser chrome (mobile address bar / task switcher) to match
// the brand, and pins the mobile viewport so no page can accidentally ship
// a fixed desktop-width layout.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#432764",
};

/** Organization structured data — helps search engines and link-preview
 *  crawlers identify Flourish as a publication of M.F.M Women Foundation
 *  Florida, independent of whatever OG tags a given page carries. */
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  description:
    "Flourish is the online publication of M.F.M Women Foundation Florida, inspiring Christian women through faith, stories, testimonies, and community.",
  parentOrganization: {
    "@type": "Organization",
    name: "M.F.M Women Foundation Florida",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // The font loader variables are attached to <html> rather than <body>
    // so that globals.css's `:root { --font-sans: var(--font-inter), … }`
    // can actually see --font-inter/--font-fraunces — CSS custom properties
    // only inherit downward, so :root has no visibility into variables
    // defined lower down on <body>.
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-plum focus:px-5 focus:py-3 focus:text-sm focus:text-white"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
