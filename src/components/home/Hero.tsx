import Link from "next/link";
import PlaceholderImage from "@/components/ui/PlaceholderImage";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-plum">
      <div className="absolute inset-0">
        <PlaceholderImage
          image={{
            alt: "Editorial hero photograph of Christian women in community — placeholder, replace with brand photography",
            tone: "plum",
          }}
          label="Hero Photograph — Replace With Brand Photography"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-plum via-plum/70 to-plum/30" />
      </div>

      <div className="relative mx-auto flex min-h-[86vh] max-w-7xl flex-col justify-end px-6 pb-20 pt-40 sm:pb-24 lg:px-10">
        <p className="animate-fade-in font-sans text-xs font-semibold uppercase tracking-[0.3em] text-gold-light">
          Flourish Christian Magazine
        </p>
        <h1 className="animate-fade-up mt-5 max-w-3xl font-serif text-4xl leading-[1.08] text-white sm:text-6xl lg:text-7xl">
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
            className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 font-sans text-sm font-semibold uppercase tracking-[0.08em] text-plum transition-all duration-300 hover:bg-gold-light hover:shadow-lg"
          >
            Explore the Magazine
          </Link>
          <Link
            href="/write-for-flourish"
            className="inline-flex items-center justify-center rounded-full border border-white/60 px-8 py-4 font-sans text-sm font-semibold uppercase tracking-[0.08em] text-white transition-all duration-300 hover:bg-white hover:text-plum"
          >
            Join the Flourish Community
          </Link>
        </div>
      </div>
    </section>
  );
}
