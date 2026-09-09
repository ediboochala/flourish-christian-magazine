import type { Metadata } from "next";
import CategoryCard from "@/components/CategoryCard";
import Reveal from "@/components/ui/Reveal";
import { categories } from "@/lib/data/categories";

export const metadata: Metadata = {
  title: "Categories",
  description: "Explore Flourish Christian Magazine by category: faith, purpose, family, wellness, leadership, and more.",
};

export default function CategoriesPage() {
  return (
    <div>
      <section className="bg-plum py-12 sm:py-14">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <Reveal>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-gold-light">
              Discover
            </p>
            <h1 className="mt-4 font-serif text-4xl leading-tight text-white sm:text-5xl">
              Explore by Category
            </h1>
            <p className="mx-auto mt-5 max-w-xl font-sans text-base leading-relaxed text-white/75">
              Find the stories that speak to your season, from faith and prayer to leadership,
              wellness, and everyday Christian living.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory py-12">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-5 px-6 lg:px-10">
          {categories.map((category, i) => (
            <Reveal
              key={category.slug}
              delayMs={i * 70}
              variant="scale"
              className="w-[calc(50%-0.625rem)] sm:w-[calc(33.333%-0.834rem)] lg:w-[calc(25%-0.938rem)] lg:max-w-[300px]"
            >
              <CategoryCard category={category} />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
