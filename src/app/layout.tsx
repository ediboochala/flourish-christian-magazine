import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.flourishchristianmagazine.com"),
  title: {
    default: "Flourish Christian Magazine — Faith. Purpose. Womanhood. Community.",
    template: "%s · Flourish Christian Magazine",
  },
  description:
    "A place for Christian women to be inspired, equipped, encouraged, and empowered to flourish in every season of life. Stories, faith, community, and events for the women of MFM Tampa and beyond.",
  keywords: [
    "Christian women's magazine",
    "faith and purpose",
    "women's ministry",
    "MFM Tampa",
    "Christian lifestyle",
    "women's devotionals",
  ],
  openGraph: {
    title: "Flourish Christian Magazine",
    description: "Faith that inspires. Women who flourish. Stories that matter.",
    type: "website",
    siteName: "Flourish Christian Magazine",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flourish Christian Magazine",
    description: "Faith that inspires. Women who flourish. Stories that matter.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${inter.variable} antialiased`}>
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
