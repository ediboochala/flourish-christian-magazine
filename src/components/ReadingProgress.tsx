"use client";

import { useEffect, useState } from "react";

/** A slim gold progress line pinned above the header that fills as the
 *  reader scrolls through a long-form article. Purely decorative and
 *  skipped for reduced-motion users via the instant (non-animated) width
 *  transition fallback in globals.css's reduced-motion block. */
export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      setProgress(scrollable > 0 ? Math.min(100, (doc.scrollTop / scrollable) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      className="fixed left-0 top-0 z-[60] h-[3px] w-full bg-transparent"
      role="progressbar"
      aria-label="Reading progress"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="h-full bg-gradient-to-r from-gold via-gold-light to-gold"
        style={{ width: `${progress}%`, transition: "width 120ms linear" }}
      />
    </div>
  );
}
