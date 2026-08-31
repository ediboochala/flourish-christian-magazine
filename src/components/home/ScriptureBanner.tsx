import Reveal from "@/components/ui/Reveal";

/**
 * Featured Scripture Banner — sits between the Hero and the rest of the
 * homepage, echoing the two verses that anchor Flourish's editorial voice.
 */
export default function ScriptureBanner() {
  return (
    <section className="relative overflow-hidden bg-cream py-16 sm:py-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 12% 20%, var(--color-burgundy) 0, transparent 38%), radial-gradient(circle at 88% 80%, var(--color-gold-light) 0, transparent 38%)",
        }}
      />
      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-10">
        <Reveal>
          <div className="divider-ornate mx-auto w-full max-w-xs">
            <span className="font-serif text-sm italic text-gold">Scripture</span>
          </div>
          <blockquote className="mt-8 space-y-5">
            <p className="font-serif text-xl italic leading-snug text-plum sm:text-2xl">
              &ldquo;She is far more precious than rubies.&rdquo;
              <span className="mt-1 block font-sans text-xs font-semibold not-italic uppercase tracking-[0.2em] text-burgundy">
                Proverbs 31:10
              </span>
            </p>
            <p className="font-serif text-xl italic leading-snug text-plum sm:text-2xl">
              &ldquo;She is clothed with strength and dignity.&rdquo;
              <span className="mt-1 block font-sans text-xs font-semibold not-italic uppercase tracking-[0.2em] text-burgundy">
                Proverbs 31:25
              </span>
            </p>
          </blockquote>
          <p className="mt-8 font-sans text-base font-medium text-charcoal-soft sm:text-lg">
            You were never meant to shrink. You were made to flourish.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
