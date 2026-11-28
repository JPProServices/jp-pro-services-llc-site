// Real Google reviews, copied from the client's Google Business profiles (checked Nov 27, 2026).
// Each quote is whole, consecutive sentences from the review; names shortened to first name and last initial.
export const GOOGLE_REVIEWS_URL = "https://maps.google.com/?cid=14681117899071746644";

export type Review = { name: string; job: string; text: string };

export const reviews = {
  roof: {
    name: "Juanita M.",
    job: "Roof replacement",
    text: "From Sales to Finish, Josh and Hadriel were professional, courteous and friendly - easy to work with! The work was done in one day and not a scrap of trash or debris remained after they left - and my house got a beautiful new roof.",
  },
  deck: {
    name: "Katie W.",
    job: "Screened-in deck",
    text: "We've done quite a few home renovations, and JP Pro Services was hands down the best company we've ever worked with.",
  },
  siding: {
    name: "Shirley H.",
    job: "Siding and gutters",
    text: "We have used their services for several home improvement projects. I highly recommend them for their exceptional work ethic and outstanding customer service!!",
  },
  repair: {
    name: "Jennifer P.",
    job: "Roof repair",
    text: "I had the best experience with these guys!!! They were here early and stayed late every day to get my house done after a car landed in my roof!!",
  },
  storm: {
    name: "Juanita M.",
    job: "Roof replacement",
    text: "The work was done in one day and not a scrap of trash or debris remained after they left - and my house got a beautiful new roof. Very thankful to have it during the recent ice storm!",
  },
  remodel: {
    name: "Alyssa D.",
    job: "Bathroom renovation",
    text: "They renovated our 1950's bathroom and we are incredibly happy with the results! They were punctual, communicative, and worked hard to complete the project.",
  },
} satisfies Record<string, Review>;
