import Link from "next/link";
import PlaceholderImage from "@/components/ui/PlaceholderImage";

export default function Hero() {
  return (
    <section className="grain-overlay relative overflow-hidden bg-plum">
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-kenburns absolute inset-0">
          <PlaceholderImage
            image={{
              alt: "Editorial hero photograph of Christian women in community, placeholder, replace with brand photography",
              tone: "plum",
            }}
            label="Hero Photograph, Replace With Brand Photography"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-plum via-plum/70 to-plum/30" />
        <div className="aurora-backdrop opacity-70" />
      </div>

      <div className="relative z-[2] mx-auto flex min-h-[86vh] max-w-7xl flex-col justify-end px-6 pb-20 pt-40 sm:pb-24 lg:px-10">
        <h1 className="text-display animate-fade-in max-w-3xl font-serif text-white [text-shadow:0_2px_28px_rgba(0,0,0,0.28)]">
          A Season of Renewal
        </h1>
        <p className="animate-fade-up mt-6 max-w-xl border-l-2 border-gold-light pl-5 font-serif text-lg italic leading-relaxed text-white/90 sm:text-xl">
          &ldquo;Inspiring Christian women through faith, stories, testimonies, and community.&rdquo;
        </p>
        <p className="animate-fade-up mt-2 max-w-xl font-sans text-base leading-relaxed text-white/80 sm:text-lg">
          There is a season for everything under heaven, and this one is yours. Whether
          you&apos;re standing at the edge of a new chapter or quietly waiting on a promise,
          Flourish was created to walk with you, page by page, story by story, prayer by prayer.
          Welcome home.
        </p>
        <div className="animate-fade-up mt-9 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/magazine"
            className="inline-flex items-center justify-center rounded-full bg-gold-light px-8 py-4 font-sans text-sm font-semibold uppercase tracking-[0.08em] text-plum transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-light/85 hover:shadow-lg active:translate-y-0 active:scale-[0.97]"
          >
            Read the Latest Issue
          </Link>
          <Link
            href="/write-for-flourish"
            className="inline-flex items-center justify-center rounded-full border border-white/60 px-8 py-4 font-sans text-sm font-semibold uppercase tracking-[0.08em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-plum active:translate-y-0 active:scale-[0.97]"
          >
            Subscribe for Free
          </Link>
        </div>
      </div>
    </section>
  );
}
