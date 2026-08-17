import Link from "next/link";
import { Testimony } from "@/lib/types";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import { formatDateShort } from "@/lib/utils";

export default function TestimonyCard({ testimony }: { testimony: Testimony }) {
  return (
    <Link
      href={`/testimonies/${testimony.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_1px_2px_rgba(36,31,33,0.06)] transition-shadow hover:shadow-[0_18px_40px_-16px_rgba(58,15,43,0.25)]"
    >
      <div className="img-zoom relative aspect-[4/3] w-full overflow-hidden">
        <PlaceholderImage image={testimony.image} />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-burgundy">
          Story of Faith
        </p>
        <h3 className="mt-2 font-serif text-xl leading-snug text-plum group-hover:text-burgundy transition-colors">
          {testimony.title}
        </h3>
        <p className="mt-3 flex-1 font-sans text-sm leading-relaxed text-charcoal-soft line-clamp-3">
          {testimony.intro}
        </p>
        <div className="mt-5 flex items-center justify-between border-t border-charcoal/10 pt-4 font-sans text-xs text-charcoal-soft">
          <span>{testimony.authorName}</span>
          <span>{formatDateShort(testimony.publishedAt)}</span>
        </div>
      </div>
    </Link>
  );
}
