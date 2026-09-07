import Link from "next/link";
import { Calendar, Clock, Video } from "lucide-react";
import { monthlyMeeting } from "@/lib/data/events";

/**
 * Standing notice for the recurring M.F.M Women Foundation Florida monthly
 * meeting. The Zoom Meeting ID is intentionally never rendered here — for
 * the safety and security of attendees it is shared privately.
 */
export default function MonthlyMeetingNotice() {
  const facts = [
    { icon: Calendar, label: "When", value: monthlyMeeting.cadence },
    { icon: Clock, label: "Time", value: monthlyMeeting.time },
    { icon: Video, label: "Platform", value: monthlyMeeting.platform },
  ];

  return (
    <div className="rounded-2xl border border-plum/15 bg-cream p-6 sm:p-8">
      <p className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-burgundy">
        Standing Monthly Meeting
      </p>
      <h3 className="mt-2 font-serif text-2xl text-plum">{monthlyMeeting.name}</h3>
      <dl className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {facts.map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex items-start gap-3">
            <Icon className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" aria-hidden="true" />
            <div>
              <dt className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-burgundy">
                {label}
              </dt>
              <dd className="mt-1 font-sans text-sm text-charcoal">{value}</dd>
            </div>
          </div>
        ))}
      </dl>
      <p className="mt-6 font-sans text-sm leading-relaxed text-charcoal-soft">
        For the safety and security of our women, the Zoom Meeting ID is not published here.
        It is shared with attendees directly ahead of each meeting.{" "}
        <Link href="/contact" className="font-semibold text-plum underline underline-offset-2">
          Contact us
        </Link>{" "}
        to receive the meeting link.
      </p>
    </div>
  );
}
