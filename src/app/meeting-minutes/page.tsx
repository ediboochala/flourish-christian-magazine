import type { Metadata } from "next";
import { Calendar, Clock, Hash, KeyRound, Users, Video } from "lucide-react";
import Eyebrow from "@/components/ui/Eyebrow";
import { getLatestMeetingMinutes } from "@/lib/data/meetingMinutes";
import { getLatestMeetingInvitation } from "@/lib/data/meetingInvitations";

export const metadata: Metadata = {
  title: "Meeting Minutes",
  description:
    "Chapter meeting minutes, prayer points, announcements, and upcoming meeting invitations for M.F.M Women Foundation Florida.",
};

/** A definition-list "fact" row: a label above a value, in the site's
 *  eyebrow/label treatment. Used for meeting details and invitation facts. */
function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-burgundy">
        {label}
      </dt>
      <dd className="mt-1 font-sans text-sm text-charcoal">{value}</dd>
    </div>
  );
}

/** A definition-list "fact" row led by an icon, used in the Meeting
 *  Invitation card where each field reads at a glance. */
function IconFact({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" aria-hidden={true} />
      <Fact label={label} value={value} />
    </div>
  );
}

/** An on-brand bullet list — a small gold diamond marker (echoing the one
 *  in Eyebrow) rather than a bare browser bullet. */
function BulletList({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={`mt-4 space-y-3 ${className ?? ""}`}>
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 font-sans text-sm leading-relaxed text-charcoal-soft">
          <span className="mt-2 h-[5px] w-[5px] flex-shrink-0 rotate-45 bg-gold" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function MeetingMinutesPage() {
  const minutes = getLatestMeetingMinutes();
  const invitation = getLatestMeetingInvitation();

  return (
    <div>
      <section className="bg-plum py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
          <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.1em] text-gold-light sm:text-xs sm:tracking-[0.24em]">
            M.F.M Women Foundation Florida
          </p>
          <h1 className="mt-4 max-w-full font-serif text-[1.75rem] leading-tight text-white sm:text-4xl md:text-5xl">
            Meeting Minutes &amp; Announcements
          </h1>
          <p className="mx-auto mt-5 max-w-xl font-sans text-sm leading-relaxed text-white/75 sm:text-base">
            Chapter meeting minutes, prayer points, and upcoming gatherings for the women of
            Broward, Jacksonville, Miami, Orlando, Tallahassee, and Tampa.
          </p>
        </div>
      </section>

      {/* MEETING MINUTES */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <Eyebrow>Most Recent Chapter Meeting</Eyebrow>
          <h2 className="text-h2 mt-4 font-serif text-plum">Meeting Minutes</h2>

          {minutes ? (
            <>
              <div className="mt-8 rounded-2xl border border-charcoal/10 bg-ivory p-6 sm:p-8">
                <dl className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
                  <Fact label="Organization" value={minutes.organization} />
                  <Fact label="Chapters" value={minutes.chapters.join(", ")} />
                  {minutes.details.map((d) => (
                    <Fact key={d.label} label={d.label} value={d.value} />
                  ))}
                </dl>
              </div>

              <div className="mt-12">
                <h3 className="font-serif text-xl text-plum">Key Insights</h3>
                <BulletList items={minutes.keyInsights} />
              </div>

              <div className="mt-12">
                <h3 className="font-serif text-xl text-plum">Anchor Scriptures</h3>
                <BulletList items={minutes.anchorScriptures} />
              </div>

              <div className="mt-12">
                <h3 className="font-serif text-xl text-plum">Benefits</h3>
                <BulletList items={minutes.benefits} className="sm:grid sm:grid-cols-2 sm:gap-x-8 sm:space-y-0" />
              </div>

              <div className="mt-12">
                <h3 className="font-serif text-xl text-plum">Prayer Points</h3>
                <BulletList items={minutes.prayerPoints} />
              </div>

              <div className="mt-12">
                <h3 className="font-serif text-xl text-plum">Announcements</h3>
                <BulletList items={minutes.announcements} />
              </div>

              <div className="mt-12 rounded-2xl bg-cream p-6 sm:p-8">
                <h3 className="font-serif text-xl text-plum">Next Meeting</h3>
                <p className="mt-3 flex items-center gap-2 font-sans text-base text-charcoal">
                  <Calendar className="h-4 w-4 flex-shrink-0 text-gold" aria-hidden="true" />
                  {minutes.nextMeeting}
                </p>
              </div>
            </>
          ) : (
            <p className="mt-6 font-sans text-sm text-charcoal-soft">
              No meeting minutes have been published yet.
            </p>
          )}
        </div>
      </section>

      {/* MEETING INVITATION */}
      <section className="bg-cream py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <Eyebrow>Upcoming Meeting</Eyebrow>
          <h2 className="text-h2 mt-4 font-serif text-plum">Meeting Invitation</h2>

          {invitation ? (
            <div className="mt-8 rounded-2xl border border-charcoal/10 bg-white p-6 sm:p-8">
              <h3 className="font-serif text-xl text-plum">{invitation.title}</h3>
              <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
                <IconFact icon={Calendar} label="Date" value={invitation.date} />
                <IconFact icon={Clock} label="Time" value={invitation.time} />
                <IconFact icon={Video} label="Venue" value={invitation.venue} />
                <IconFact icon={Users} label="Attendance" value={invitation.attendance} />
                {invitation.zoomMeetingId && (
                  <IconFact icon={Hash} label="Zoom Meeting ID" value={invitation.zoomMeetingId} />
                )}
                {invitation.zoomPasscode && (
                  <IconFact icon={KeyRound} label="Zoom Passcode" value={invitation.zoomPasscode} />
                )}
              </dl>
            </div>
          ) : (
            <p className="mt-6 font-sans text-sm text-charcoal-soft">
              No upcoming meeting invitation has been published yet.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
