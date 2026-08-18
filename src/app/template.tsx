/** App Router templates remount on every navigation (unlike layout.tsx,
 *  which persists), so wrapping {children} here gives each page a brief,
 *  tasteful fade/rise entrance instead of an abrupt cut — a lightweight
 *  stand-in for real page transitions with zero extra JS or dependencies.
 *  Header/Footer live in layout.tsx and are unaffected, so they don't
 *  re-animate on every navigation. Respects prefers-reduced-motion via
 *  the .page-transition rule in globals.css. */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-transition">{children}</div>;
}
