import { MeetingInvitation } from "@/lib/types";

/** Invitations to upcoming chapter meetings, most recent first. */
export const meetingInvitations: MeetingInvitation[] = [
  {
    slug: "august-meeting-invitation",
    title: "August Meeting Invitation — You Are Welcome",
    date: "Saturday, August 29, 2026",
    time: "6:00 PM",
    venue: "Zoom",
    attendance: "All Women",
    zoomMeetingId: "834 2514 0936",
    zoomPasscode: "712308",
  },
];

/** The current meeting invitation — the entries above are kept newest-first. */
export function getLatestMeetingInvitation(): MeetingInvitation | undefined {
  return meetingInvitations[0];
}
