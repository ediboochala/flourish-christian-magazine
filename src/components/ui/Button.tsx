import Link from "next/link";
import { cx } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "outline-light";
type Size = "md" | "lg" | "sm";

interface BaseProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
}

const VARIANT_CLASSES: Record<Variant, string> = {
  primary:
    "bg-plum text-white hover:bg-burgundy shadow-sm hover:shadow-md hover:-translate-y-0.5",
  secondary:
    "bg-transparent text-plum border border-plum hover:bg-plum hover:text-white hover:-translate-y-0.5",
  ghost: "bg-transparent text-plum hover:bg-cream",
  "outline-light":
    "bg-transparent text-white border border-white/70 hover:bg-white hover:text-plum hover:-translate-y-0.5",
};

const SIZE_CLASSES: Record<Size, string> = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-sm",
};

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-full font-sans font-semibold uppercase tracking-[0.08em] transition-all duration-300 active:scale-[0.97] active:translate-y-0";

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: BaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cx(BASE, VARIANT_CLASSES[variant], SIZE_CLASSES[size], className)}
      {...rest}
    >
      {children}
    </button>
  );
}

export function LinkButton({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
}: BaseProps & { href: string }) {
  return (
    <Link
      href={href}
      className={cx(BASE, VARIANT_CLASSES[variant], SIZE_CLASSES[size], className)}
    >
      {children}
    </Link>
  );
}
