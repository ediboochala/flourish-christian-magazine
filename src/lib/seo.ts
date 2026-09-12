import type { Metadata } from "next";

/**
 * Canonical production origin. Must match the domain Flourish is actually
 * deployed at (flourishchristianmagazine.org) — this also backs
 * `metadataBase` in the root layout, so every relative OG/Twitter image URL
 * and canonical link resolves against the real site rather than a stale or
 * wrong domain.
 */
export const SITE_URL = "https://www.flourishchristianmagazine.org";
export const SITE_NAME = "Flourish Christian Magazine";

/** Branded 1200×630 share-card image (wordmark + tagline over the site's
 *  own hero photo) used whenever a page doesn't have a more specific image
 *  of its own — see build-og-image in git history for how it was composed. */
export const DEFAULT_OG_IMAGE = {
  url: "/images/site/og-default.jpg",
  width: 1200,
  height: 630,
  alt: "Flourish Christian Magazine — Rooted in Christ. Growing Together. Flourishing in Purpose.",
};

type OgImage = { url: string; width?: number; height?: number; alt: string };

/**
 * Builds a page's title/description plus matching Open Graph and Twitter
 * Card metadata, so pasting a Flourish link into iMessage, WhatsApp, Slack,
 * or social media always shows that page's own title, description, and
 * image — not just the homepage default.
 */
export function pageMetadata({
  title,
  description,
  path,
  image,
  type = "website",
  publishedTime,
  authors,
  section,
}: {
  /** Plain page title — also fed through the root layout's title template. */
  title: string;
  description: string;
  /** Site-relative path, e.g. "/about" or "/article/some-slug". */
  path: string;
  image?: OgImage;
  type?: "website" | "article";
  publishedTime?: string;
  authors?: string[];
  section?: string;
}): Metadata {
  const ogImage = image ?? DEFAULT_OG_IMAGE;

  const openGraph: NonNullable<Metadata["openGraph"]> =
    type === "article"
      ? {
          title,
          description,
          url: path,
          siteName: SITE_NAME,
          images: [ogImage],
          type: "article",
          ...(publishedTime ? { publishedTime } : {}),
          ...(authors ? { authors } : {}),
          ...(section ? { section } : {}),
        }
      : {
          title,
          description,
          url: path,
          siteName: SITE_NAME,
          images: [ogImage],
          type: "website",
        };

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph,
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url],
    },
  };
}
