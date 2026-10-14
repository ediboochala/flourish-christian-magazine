import Image from "next/image";
import { Issue } from "@/lib/types";
import { cx } from "@/lib/utils";

/**
 * A printed-magazine cover for an issue: the masthead wordmark, issue
 * number, and title over the cover photograph, with a light spine edge on
 * the left. Issues still in progress get a designed "coming together"
 * cover — a large outlined issue numeral and shimmering headline bars
 * where the cover lines will go.
 */
export default function IssueCover({
  issue,
  priority,
  className,
}: {
  issue: Issue;
  priority?: boolean;
  className?: string;
}) {
  const inProgress = issue.status === "in-progress" || !issue.cover?.src;

  return (
    <div
      className={cx(
        // A size container: every measurement below is in cqw (a share of
        // the cover's own width), so the cover reads the same whether it's
        // a full-size hero or a small thumbnail.
        "issue-cover @container grain-overlay relative aspect-[3/4] w-full overflow-hidden rounded-l-[4px] rounded-r-xl bg-plum",
        className
      )}
    >
      {inProgress ? (
        <>
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(120% 90% at 80% 10%, var(--color-plum-light) 0%, var(--color-plum) 55%, #2a1740 100%)",
            }}
          />
          <div className="aurora-backdrop opacity-50" aria-hidden="true" />
          <span
            className="absolute -right-[6cqw] bottom-[14cqw] select-none font-serif text-[78cqw] font-semibold leading-none text-transparent [-webkit-text-stroke:1.5px_rgba(221,199,239,0.45)]"
            aria-hidden="true"
          >
            {issue.number}
          </span>
        </>
      ) : (
        <>
          <Image
            src={issue.cover!.src!}
            alt={issue.cover!.alt}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 22rem, (min-width: 640px) 45vw, 90vw"
            className="object-cover"
            style={{ objectPosition: issue.coverFocus ?? "center" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(45,25,72,0.9) 0%, rgba(45,25,72,0.55) 18%, rgba(45,25,72,0.15) 34%, rgba(45,25,72,0.1) 55%, rgba(45,25,72,0.88) 100%)",
            }}
          />
        </>
      )}

      {/* Masthead */}
      <div className="relative z-[2] flex flex-col items-center px-[7cqw] pt-[7cqw] text-center">
        <Image
          src="/images/flourish-wordmark.png"
          alt=""
          aria-hidden="true"
          width={2115}
          height={743}
          unoptimized
          className={cx("h-auto w-[78%]", inProgress && "opacity-80")}
        />
        <p className="mt-[2.5cqw] font-sans text-[3.6cqw] font-semibold uppercase tracking-[0.3em] text-gold-light">
          Issue No. {issue.number}
        </p>
      </div>

      {/* Cover lines */}
      <div className="absolute inset-x-0 bottom-0 z-[2] p-[7cqw]">
        {inProgress ? (
          <div aria-hidden="true">
            <span className="inline-flex items-center gap-[2.5cqw] rounded-full bg-white/12 px-[4cqw] py-[1.5cqw] font-sans text-[3.4cqw] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
              <span className="issue-pulse h-[2cqw] w-[2cqw] rounded-full bg-gold-light" />
              Coming Together
            </span>
            <div className="mt-[5cqw] space-y-[2.5cqw]">
              <span className="shimmer-bar block h-[4.5cqw] w-3/4 rounded-full" />
              <span className="shimmer-bar block h-[4.5cqw] w-1/2 rounded-full" />
              <span className="shimmer-bar block h-[2.5cqw] w-2/3 rounded-full opacity-70" />
            </div>
          </div>
        ) : (
          <>
            <p className="font-serif text-[10.5cqw] font-semibold leading-[1.05] text-white [text-shadow:0_2px_16px_rgba(0,0,0,0.35)]">
              {issue.title}
            </p>
            <p className="mt-[2.5cqw] line-clamp-2 font-sans text-[4.2cqw] leading-snug text-white/80">
              {issue.tagline}
            </p>
          </>
        )}
      </div>

      {/* Spine edge */}
      <span
        className="pointer-events-none absolute inset-y-0 left-0 z-[3] w-3"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.35), rgba(255,255,255,0.18) 35%, rgba(0,0,0,0.12) 70%, transparent)",
        }}
        aria-hidden="true"
      />
    </div>
  );
}
