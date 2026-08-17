import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Flourish Christian Magazine privacy policy.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-ivory py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <h1 className="font-serif text-4xl text-plum">Privacy Policy</h1>
        <p className="mt-4 font-sans text-sm text-charcoal-soft">
          Last updated: [Placeholder date]
        </p>
        <div className="article-body mt-10">
          <p>
            [Placeholder — this page requires a complete privacy policy drafted or reviewed by
            qualified counsel before launch. Do not publish this placeholder as a live legal
            document.]
          </p>
          <h2>Information We Collect</h2>
          <p>
            [Placeholder — describe what data is collected via newsletter signups, article
            submissions, contact forms, and event registrations.]
          </p>
          <h2>How We Use Information</h2>
          <p>[Placeholder — describe use of data for communication, publishing, and analytics.]</p>
          <h2>Your Rights</h2>
          <p>[Placeholder — describe applicable data rights and how to exercise them.]</p>
          <h2>Contact</h2>
          <p>[Placeholder — insert privacy contact email.]</p>
        </div>
      </div>
    </div>
  );
}
