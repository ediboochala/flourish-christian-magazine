import { cx } from "@/lib/utils";

export default function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cx(
        "inline-flex items-center gap-2 font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-burgundy",
        className
      )}
    >
      <span className="h-[3px] w-[3px] rounded-full bg-gold" />
      {children}
    </span>
  );
}
