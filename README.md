# Flourish Christian Magazine

A premium, editorial Next.js platform for Flourish Christian Magazine — a digital magazine,
community, and women's ministry platform for the women of MFM Tampa and Christian women beyond.

Built with **Next.js 16 (App Router) · TypeScript · Tailwind CSS v4**.

## Getting Started in VS Code

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The app requires an internet connection on
first run so `next/font/google` can fetch the Fraunces and Inter typefaces.

```bash
npm run build   # production build
npm run start   # run the production build
npm run lint    # ESLint
```

## What's Included

- **All 12 primary pages** from the brief: Home, Magazine archive, Categories (+ per-category
  archive), Article template, Contributors (+ profile pages), Events (+ detail pages),
  Testimonies (+ detail pages), About, Write for Flourish (submission form), Contact, Search,
  Privacy, Terms.
- **A full design system**: warm ivory/cream/plum/burgundy/rose/gold palette, Fraunces (serif,
  editorial headlines) paired with Inter (sans, UI/body), reusable components (`ArticleCard`,
  `CategoryCard`, `EventCard`, `TestimonyCard`, `ContributorCard`, `NewsletterCTA`,
  `ShareButtons`, etc.) — see `src/app/globals.css` for tokens and `src/components/ui/`.
- **A typed content layer** (`src/lib/types.ts`, `src/lib/data/*.ts`) with realistic placeholder
  articles, contributors, events, and testimonies — structured so a real CMS (Sanity, Contentful,
  Payload, headless WordPress, etc.) can populate the exact same interfaces later without
  touching any UI component.
- **Working forms** for newsletter signup, article/testimony submission, and contact — posting to
  placeholder API routes in `src/app/api/` that log submissions to the console. Swap these for a
  real email service, database, or CMS write before launch.
- Responsive, accessible markup (skip link, focus states, semantic headings, alt text throughout),
  scroll-reveal micro-interactions, and SEO metadata (Open Graph, per-page titles/descriptions) on
  every route.

## Important — Before Launch

This is a **fully built, functioning scaffold with placeholder content**, not a finished
publication. Per the original brief, nothing here should be mistaken for verified official
information:

1. **Photography.** No stock photography is used anywhere. Every image slot renders an elegant
   on-brand gradient placeholder (`src/components/ui/PlaceholderImage.tsx`) rather than an
   invented or generic stock photo of real people. Replace by adding a `src` to any `MediaImage`
   object in `src/lib/data/*.ts` — real photos will render automatically via `next/image`.
2. **Copy.** All "About," mission/vision, and ministry-relationship copy is placeholder text
   flagged `[Placeholder — ...]` and must be confirmed by MFM Tampa ministry leadership.
3. **Articles, events, testimonies, contributors.** All illustrative — replace with real content
   in `src/lib/data/`.
4. **Legal pages.** `/privacy` and `/terms` are structural placeholders only and must be drafted
   or reviewed by qualified counsel before publishing.
5. **Forms.** `/api/subscribe`, `/api/submit-article`, and `/api/contact` currently log to the
   server console. Connect a real email/newsletter provider, CMS, and/or inbox before launch.

## Project Structure

```
src/
  app/                 Routes (App Router) — one folder per page, plus /api routes
  components/
    layout/            Header, Footer
    home/               Hero, FeaturedStory
    forms/              Article submission & contact forms
    magazine/           Magazine archive filter/search UI
    search/             Site-wide search UI
    ui/                 Design-system primitives (Button, SectionHeading, PlaceholderImage, …)
  lib/
    types.ts            Content type definitions
    data/                Placeholder content (swap for CMS calls later)
    utils.ts
```

## Content Editing (No Redesign Required)

To add or edit content today, edit the relevant file in `src/lib/data/`:

- `articles.ts` — magazine articles (title, category, author, body, featured/trending flags)
- `authors.ts` — contributor profiles
- `categories.ts` — the 12 content categories
- `events.ts` — women's ministry events
- `testimonies.ts` — testimony stories

Every page reads from these files, so adding an entry automatically creates its detail page,
appears in listings, search, and the homepage where relevant.
