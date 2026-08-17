import type { Metadata } from "next";
import ArticleSubmissionForm from "@/components/forms/ArticleSubmissionForm";

export const metadata: Metadata = {
  title: "Write for Flourish",
  description:
    "Share your story with Flourish Christian Magazine. Submit an article, testimony, or become a regular contributor.",
};

export default function WriteForFlourishPage() {
  return (
    <div>
      <section className="bg-plum py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-gold-light">
            Write for Flourish
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-tight text-white sm:text-5xl">
            Your Story Could Encourage Another Woman.
          </h1>
          <p className="mx-auto mt-5 max-w-xl font-sans text-base leading-relaxed text-white/75">
            Flourish is a space for Christian women to share wisdom, experiences, lessons,
            testimonies, perspectives, and stories that can encourage others.
          </p>
        </div>
      </section>

      <section className="bg-ivory py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 px-6 lg:grid-cols-5 lg:px-10">
          <aside className="lg:col-span-2">
            <h2 className="font-serif text-2xl text-plum">What We&apos;re Looking For</h2>
            <ul className="mt-5 space-y-4 font-sans text-sm leading-relaxed text-charcoal-soft">
              <li>
                <strong className="text-charcoal">Faith &amp; Spirituality</strong> — reflections
                rooted in Scripture and the Christian walk.
              </li>
              <li>
                <strong className="text-charcoal">Personal Stories</strong> — honest, well-crafted
                accounts of God&apos;s work in your life.
              </li>
              <li>
                <strong className="text-charcoal">Practical Wisdom</strong> — insight on family,
                career, leadership, wellness, and everyday Christian living.
              </li>
              <li>
                <strong className="text-charcoal">Testimonies</strong> — stories of God&apos;s
                faithfulness, told with honesty and care.
              </li>
            </ul>
            <div className="mt-8 rounded-2xl bg-cream p-6">
              <h3 className="font-serif text-lg text-plum">Editorial Process</h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-charcoal-soft">
                Every submission is reviewed by the Flourish editorial team. We may edit for length,
                clarity, and style, and will contact you before publishing. [Placeholder — replace
                with your confirmed editorial workflow and expected response time.]
              </p>
            </div>
          </aside>

          <div className="lg:col-span-3">
            <div className="rounded-2xl bg-white p-6 shadow-[0_1px_2px_rgba(36,31,33,0.06)] sm:p-10">
              <ArticleSubmissionForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
