import { cx } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cx(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cx(
            "mb-3 font-sans text-xs font-semibold uppercase tracking-[0.22em]",
            tone === "light" ? "text-gold" : "text-gold-light"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cx(
          "text-h2 font-serif",
          tone === "light" ? "text-plum" : "text-white"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cx(
            "mt-4 text-base leading-relaxed",
            tone === "light" ? "text-charcoal-soft" : "text-white/75"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
