import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import ShareButtons from "@/components/ShareButtons";
import { testimonies, getTestimonyBySlug } from "@/lib/data/testimonies";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return testimonies.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const testimony = getTestimonyBySlug(slug);
  if (!testimony) return {};
  return { title: testimony.title, description: testimony.intro };
}

export default async function TestimonyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const testimony = getTestimonyBySlug(slug);
  if (!testimony) notFound();

  return (
    <article>
      <section className="relative overflow-hidden bg-plum">
        <div className="absolute inset-0 opacity-40">
          <PlaceholderImage image={testimony.image} priority />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-plum via-plum/85 to-plum/55" />
        <div className="relative mx-auto max-w-3xl px-6 pb-16 pt-32 text-center lg:px-10">
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
            Story of Faith
          </span>
          <h1 className="mt-4 font-serif text-3xl leading-tight text-white sm:text-5xl">
            {testimony.title}
          </h1>
          <p className="mt-5 font-sans text-sm text-white/75">
            {testimony.authorName} · {formatDate(testimony.publishedAt)}
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <div className="article-body">
            {testimony.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-12 border-t border-charcoal/10 pt-8">
            <ShareButtons
              title={testimony.title}
              prompt="Know a woman who needs to hear this? Share it with her."
            />
          </div>

          <div className="mt-12 rounded-2xl bg-cream p-8 text-center">
            <h2 className="font-serif text-xl text-plum">Your Story Matters</h2>
            <p className="mx-auto mt-2 max-w-md font-sans text-sm text-charcoal-soft">
              Your experience may be the encouragement another woman needs.
            </p>
            <Link
              href="/write-for-flourish"
              className="mt-5 inline-flex items-center rounded-full bg-plum px-7 py-3.5 font-sans text-xs font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-burgundy"
            >
              Share Your Testimony
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
