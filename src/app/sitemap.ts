import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { articles } from "@/lib/data/articles";
import { categories } from "@/lib/data/categories";
import { authors } from "@/lib/data/authors";
import { events } from "@/lib/data/events";

const STATIC_ROUTES = [
  "",
  "/magazine",
  "/categories",
  "/events",
  "/about",
  "/contact",
  "/get-involved",
  "/write-for-flourish",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: path === "" || path === "/magazine" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.6,
  }));

  const articleEntries: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${SITE_URL}/article/${article.slug}`,
    lastModified: article.publishedAt,
    changeFrequency: "monthly",
    priority: article.isNew ? 0.9 : 0.5,
  }));

  const categoryEntries: MetadataRoute.Sitemap = categories.map((category) => ({
    url: `${SITE_URL}/categories/${category.slug}`,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const authorEntries: MetadataRoute.Sitemap = authors.map((author) => ({
    url: `${SITE_URL}/editorial-team/${author.slug}`,
    changeFrequency: "monthly",
    priority: 0.3,
  }));

  const eventEntries: MetadataRoute.Sitemap = events.map((event) => ({
    url: `${SITE_URL}/events/${event.slug}`,
    lastModified: event.date,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [...staticEntries, ...articleEntries, ...categoryEntries, ...authorEntries, ...eventEntries];
}
