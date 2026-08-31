import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

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
  metadataBase: new URL("https://www.flourishchristianmagazine.com"),
  title: {
    default: "Flourish — Rooted in Christ. Growing Together. Flourishing in Purpose.",
    template: "%s · Flourish Christian Magazine",
  },
  description:
    "Flourish is the online publication of M.F.M Women Foundation Florida — inspiring Christian women through faith, stories, testimonies, and community. Read the latest issue and join thousands of women growing in faith and purpose.",
  keywords: [
    "Christian women's magazine",
    "faith and purpose",
    "women's ministry",
    "M.F.M Women Foundation Florida",
    "Christian lifestyle",
    "women's devotionals",
  ],
  icons: {
    icon: "/Gemini_Generated_Image_2t6tje2t6tje2t6t.jpg",
    apple: "/Gemini_Generated_Image_2t6tje2t6tje2t6t.jpg",
  },
  openGraph: {
    title: "Flourish Christian Magazine",
    description: "Inspiring Christian women through faith, stories, testimonies, and community.",
    type: "website",
    siteName: "Flourish Christian Magazine",
    images: ["/Gemini_Generated_Image_2t6tje2t6tje2t6t.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flourish Christian Magazine",
    description: "Inspiring Christian women through faith, stories, testimonies, and community.",
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
