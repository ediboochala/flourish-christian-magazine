import { Feather } from "lucide-react";
import { Author } from "@/lib/types";
import { cx } from "@/lib/utils";
import PlaceholderImage from "@/components/ui/PlaceholderImage";

const HONORIFICS = new Set(["pastor", "mrs", "mrs.", "mr", "mr.", "dr", "dr.", "rev", "rev.", "sister", "brother"]);

/** "Pastor Mrs Bunmi Oyetunji, Miami, FL" → "BO". Titles and the
 *  location after the comma are skipped; anonymous bylines get no
 *  initials (they show a quill instead). */
function initialsOf(name: string): string | null {
  const words = name
    .split(",")[0]
    .split(/\s+/)
    .filter((w) => w && !HONORIFICS.has(w.toLowerCase()));
  if (words.length === 0 || words[0].toLowerCase() === "anonymous") return null;
  const first = words[0][0];
  const last = words.length > 1 ? words[words.length - 1][0] : "";
  return (first + last).toUpperCase();
}

/**
 * A contributor's round avatar: their photo when one is supplied, and
 * otherwise a monogram (gold serif initials on plum) rather than abstract
 * placeholder art. Size it with `className` (e.g. "h-10 w-10"); the
 * initials scale with the circle.
 */
export default function AuthorAvatar({
  author,
  className,
  sizes,
}: {
  author: Author;
  className?: string;
  sizes?: string;
}) {
  if (author.image.src) {
    return (
      <span className={cx("relative block flex-shrink-0 overflow-hidden rounded-full", className)}>
        <PlaceholderImage image={author.image} sizes={sizes} />
      </span>
    );
  }

  const initials = initialsOf(author.name);
  return (
    <span
      role="img"
      aria-label={author.name.split(",")[0]}
      className={cx(
        "@container relative flex flex-shrink-0 items-center justify-center overflow-hidden rounded-full",
        className
      )}
      style={{
        background:
          "radial-gradient(120% 120% at 30% 20%, var(--color-plum-light) 0%, var(--color-plum) 60%, #2c1843 100%)",
      }}
    >
      {/* Fine gold inner ring. */}
      <span className="pointer-events-none absolute inset-[7%] rounded-full ring-1 ring-gold-light/35" aria-hidden="true" />
      {initials ? (
        <span
          className="font-serif text-[38cqw] font-medium leading-none tracking-wide text-gold-light"
          aria-hidden="true"
        >
          {initials}
        </span>
      ) : (
        <Feather className="h-[44%] w-[44%] text-gold-light" aria-hidden="true" />
      )}
    </span>
  );
}
