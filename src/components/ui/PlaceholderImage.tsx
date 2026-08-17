import { ImageTone, MediaImage } from "@/lib/types";
import Image from "next/image";
import { cx } from "@/lib/utils";

const TONE_GRADIENTS: Record<ImageTone, string> = {
  plum: "from-[#3a0f2b] via-[#55193f] to-[#711b32]",
  burgundy: "from-[#5a0f1f] via-[#711b32] to-[#8f2740]",
  gold: "from-[#8f7031] via-[#b8924f] to-[#d8bd8a]",
  rose: "from-[#8f2740] via-[#c98fa0] to-[#e3c3cd]",
  charcoal: "from-[#171314] via-[#241f21] to-[#4a4245]",
};

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
 * tasteful, on-brand gradient placeholder so the layout always looks
 * intentional — never a broken image or an invented stock photo.
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

  const tone = image.tone ?? "plum";

  return (
    <div
      role="img"
      aria-label={image.alt}
      className={cx(
        "relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br",
        TONE_GRADIENTS[tone],
        className
      )}
    >
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, white 0, transparent 45%), radial-gradient(circle at 80% 70%, white 0, transparent 40%)",
        }}
      />
      <svg
        viewBox="0 0 60 60"
        className="relative h-10 w-10 text-white/70 sm:h-12 sm:w-12"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M30 6c2 8 6 12 14 14-8 2-12 6-14 14-2-8-6-12-14-14 8-2 12-6 14-14Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
      {label && (
        <span className="absolute bottom-3 left-3 right-3 text-center font-sans text-[11px] uppercase tracking-[0.14em] text-white/70">
          {label}
        </span>
      )}
    </div>
  );
}
