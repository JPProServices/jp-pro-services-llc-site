// Real Google reviews, copied from the client's Google Business profiles (checked Nov 27, 2026).
// Trimmed with "…" only; names shortened to first name and last initial.
export const GOOGLE_REVIEWS_URL = "https://maps.google.com/?cid=14681117899071746644";

export type Review = { name: string; job: string; text: string };

export const reviews = {
  roof: {
    name: "Juanita M.",
    job: "Roof replacement",
    text: "It turned out the entire roof needed to be replaced! From Sales to Finish, Josh and Hadriel were professional, courteous and friendly - easy to work with! … not a scrap of trash or debris remained after they left - and my house got a beautiful new roof.",
  },
  deck: {
    name: "Katie W.",
    job: "Screened-in deck",
    text: "We've done quite a few home renovations, and JP Pro Services was hands down the best company we've ever worked with. … We are so thrilled with our new outdoor space, and we cannot thank JP Pro Services enough for their work.",
  },
  siding: {
    name: "Shirley H.",
    job: "Siding and gutters",
    text: "JPPro Services did an excellent job repairing our siding, … and replacing our gutters and installing gutter guard. … I highly recommend them for their exceptional work ethic and outstanding customer service!!",
  },
  remodel: {
    name: "Alyssa D.",
    job: "Bathroom renovation",
    text: "They renovated our 1950's bathroom and we are incredibly happy with the results! They were punctual, communicative, and worked hard to complete the project.",
  },
} satisfies Record<string, Review>;
