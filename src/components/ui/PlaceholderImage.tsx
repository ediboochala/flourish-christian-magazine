import { MediaImage } from "@/lib/types";
import Image from "next/image";
import { cx } from "@/lib/utils";
import AbstractArt from "@/components/ui/AbstractArt";

interface PlaceholderImageProps {
  image: MediaImage;
  className?: string;
  priority?: boolean;
  sizes?: string;
  fill?: boolean;
  label?: string;
}

/**
 * Renders `image.src` when a real photo is supplied. Otherwise renders a
 * deterministic, on-brand abstract artwork (see `AbstractArt`) so the
 * layout always looks intentional — never a broken image or an invented
 * stock photo. Each entry gets its own composition, seeded from `src` or
 * `alt`, so it stays stable across builds.
 * Swap in real editorial photography by populating `src` in the data
 * files under `src/lib/data/`.
 */
export default function PlaceholderImage({
  image,
  className,
  priority,
  sizes = "100vw",
  fill = true,
  label,
}: PlaceholderImageProps) {
  if (image.src) {
    return (
      <Image
        src={image.src}
        alt={image.alt}
        fill={fill}
        sizes={sizes}
        priority={priority}
        className={cx("object-cover", className)}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={image.alt}
      className={cx("relative flex h-full w-full items-center justify-center overflow-hidden", className)}
    >
      <AbstractArt
        seed={image.src || image.alt}
        tone={image.tone ?? "plum"}
        className="absolute inset-0"
      />
      {label && (
        <span className="absolute bottom-3 left-3 right-3 z-[1] text-center font-sans text-[11px] uppercase tracking-[0.14em] text-white/75">
          {label}
        </span>
      )}
    </div>
  );
}
