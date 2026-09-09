import type { Metadata } from "next";
import MonthlyMeetingNotice from "@/components/events/MonthlyMeetingNotice";
import NewsletterCTA from "@/components/NewsletterCTA";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Events",
  description:
    "The standing monthly meeting of M.F.M Women Foundation Florida — the one gathering that brings the whole Women Foundation together on Zoom.",
};

export default function EventsPage() {
  return (
    <div>
      <section className="bg-plum py-12 sm:py-14">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <Reveal>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-gold-light">
              What&apos;s Happening at Flourish
            </p>
            <h1 className="mt-4 font-serif text-4xl leading-tight text-white sm:text-5xl">
              The Monthly Meeting
            </h1>
            <p className="mx-auto mt-5 max-w-xl font-sans text-base leading-relaxed text-white/75">
              One gathering brings the whole Women Foundation together each month. Branch retreats,
              Bible studies, and fellowships are organised locally by each chapter.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory py-12">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <Reveal variant="scale">
            <MonthlyMeetingNotice />
          </Reveal>
        </div>
      </section>

      <NewsletterCTA />
    </div>
  );
}
