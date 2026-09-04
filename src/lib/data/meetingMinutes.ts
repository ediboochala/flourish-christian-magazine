import { MeetingMinutes } from "@/lib/types";

/** Chapter meeting minutes, most recent first. Transcribed verbatim from
 *  the M.F.M Women Foundation Florida chapter meeting materials. */
export const meetingMinutes: MeetingMinutes[] = [
  {
    slug: "praying-together",
    organization: "Mountain of Fire and Miracles Ministries — Women Foundation Florida",
    chapters: ["Broward", "Jacksonville", "Miami", "Orlando", "Tallahassee", "Tampa"],
    details: [
      { label: "Opening Prayer", value: "Pastor Mrs. Olajide (MFM Tampa)" },
      { label: "Praise & Worship", value: "Led by Sis. Kieran (MFM Orlando)" },
      { label: "Number of Women Present", value: "15" },
      { label: "Topic", value: "Praying Together" },
    ],
    keyInsights: [
      "Praying together is powerful.",
      "We command Heaven's attention.",
      "Where two or three gather in His name, God is in their midst.",
    ],
    anchorScriptures: [
      "James 5:16",
      'Matthew 18:20 — "For where two or three are gathered together in my name, there am I in the midst of them."',
    ],
    benefits: [
      "Unity of purpose — united in prayer",
      "Divine intervention",
      "Encouragement",
      "Spiritual support",
      "Healing",
      "Stronger faith",
      "A fresh release of God's power",
      "Spiritual discipline",
      "Stronger bonds",
    ],
    prayerPoints: [
      "Arrows of division and selfishness, get out by fire, in Jesus' name!",
      "Spirit of commitment, enter my life afresh, in Jesus' name!",
      "O Lord our Father, accept our sacrifice of service by Your mercy, in Jesus' name.",
      "WFF, receive fire and become fire, in Jesus' name!",
      "Every spirit of failure and frustration in our lives, be destroyed, in Jesus' name!",
      "O God, arise and make the forthcoming crusade a success, in Jesus' name!",
    ],
    announcements: [
      "September 20 — The Great Florida Deliverance Crusade, Yuengling Center, Tampa, Florida",
      "October 10 — Mega Region 2 Women's Conference, The Banquet Hall, Houston, Texas",
      "October 10 — Gen218 Annual Conference, Houston, Texas",
    ],
    nextMeeting: "Saturday, September 26, 2026, 6:00 PM",
  },
];

/** Most recent meeting minutes — the entries above are kept newest-first. */
export function getLatestMeetingMinutes(): MeetingMinutes | undefined {
  return meetingMinutes[0];
}
