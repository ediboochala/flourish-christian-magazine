import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Flourish Christian Magazine terms of use.",
};

export default function TermsPage() {
  return (
    <div className="bg-ivory py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <h1 className="font-serif text-4xl text-plum">Terms of Use</h1>
        <p className="mt-4 font-sans text-sm text-charcoal-soft">
          Last updated: [Placeholder date]
        </p>
        <div className="article-body mt-10">
          <p>
            [Placeholder — this page requires complete terms of use drafted or reviewed by
            qualified counsel before launch. Do not publish this placeholder as a live legal
            document.]
          </p>
          <h2>Content Submissions</h2>
          <p>
            [Placeholder — describe rights granted when a contributor submits an article or
            testimony, and editorial rights to edit for length, clarity, and style.]
          </p>
          <h2>Acceptable Use</h2>
          <p>[Placeholder — describe acceptable use of the platform.]</p>
          <h2>Intellectual Property</h2>
          <p>[Placeholder — describe ownership of Flourish content and trademarks.]</p>
          <h2>Contact</h2>
          <p>[Placeholder — insert legal contact email.]</p>
        </div>
      </div>
    </div>
  );
}
