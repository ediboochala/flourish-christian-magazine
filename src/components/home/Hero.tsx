import Link from "next/link";
import PlaceholderImage from "@/components/ui/PlaceholderImage";

export default function Hero() {
  return (
    <section className="grain-overlay relative overflow-hidden bg-plum">
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-kenburns absolute inset-0">
          <PlaceholderImage
            image={{
              alt: "Editorial hero photograph of Christian women in community — placeholder, replace with brand photography",
              tone: "plum",
            }}
            label="Hero Photograph — Replace With Brand Photography"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-plum via-plum/70 to-plum/30" />
      </div>

      <div className="relative z-[2] mx-auto flex min-h-[86vh] max-w-7xl flex-col justify-end px-6 pb-20 pt-40 sm:pb-24 lg:px-10">
        <p className="animate-fade-in font-sans text-xs font-semibold uppercase tracking-[0.3em] text-gold-light">
          Flourish Christian Magazine
        </p>
        <h1 className="text-display animate-fade-up mt-5 max-w-3xl font-serif text-white [text-shadow:0_2px_28px_rgba(0,0,0,0.28)]">
          Faith. Purpose.
          <br /> Womanhood. Community.
        </h1>
        <p className="animate-fade-up mt-6 max-w-xl font-sans text-base leading-relaxed text-white/80 sm:text-lg">
          A place for Christian women to be inspired, equipped, encouraged, and empowered to
          flourish in every season of life.
        </p>
        <div className="animate-fade-up mt-9 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/magazine"
            className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 font-sans text-sm font-semibold uppercase tracking-[0.08em] text-plum transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-light hover:shadow-lg active:translate-y-0 active:scale-[0.97]"
          >
            Explore the Magazine
          </Link>
          <Link
            href="/write-for-flourish"
            className="inline-flex items-center justify-center rounded-full border border-white/60 px-8 py-4 font-sans text-sm font-semibold uppercase tracking-[0.08em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-plum active:translate-y-0 active:scale-[0.97]"
          >
            Join the Flourish Community
          </Link>
        </div>
      </div>
    </section>
  );
}
