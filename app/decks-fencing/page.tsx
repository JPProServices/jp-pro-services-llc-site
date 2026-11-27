import type { Metadata } from "next";

import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Decks, Fencing & Outdoor Living in Nashville | JP Pro Services",
  description: "Decks, fences and outdoor living spaces near Nashville, built with Trex and TimberTech, with a 2-year labor warranty.",
};

export default function Page() {
  return (
    <ServicePage
      path="/decks-fencing"
      name="Decks, Fencing & Outdoor Living"
      headline="Decks & Fences Built to Last"
      intro="Wood and composite decks, fences and screened porches for homeowners within 50 miles of Nashville."
      heroImage={{ src: "/images/decks/stained-deck-hero.jpg", alt: "Two-story stained wood deck with stairs on a brick home" }}
      offerings={[
        { title: "Decks", text: "New decks and deck replacements in wood or Trex and TimberTech composite, with stairs and railings." },
        { title: "Fencing", text: "Fence installation. [Confirm fence materials with the owners.]" },
        { title: "Screened porches", text: "Elevated screened porches with stairs, built onto your home. [Confirm other outdoor living work.]" },
        { title: "Free estimate", text: "Every project starts with a free, written estimate." },
      ]}
      products={["Trex decking", "TimberTech decking", "Pressure-treated wood [confirm]", "[More deck and fence brands: coming from the owners]"]}
      warranty={[
        { label: "Labor", value: "2 years" },
        { label: "Materials", value: "[Manufacturer warranty: confirm]" },
      ]}
      gallery={[
        { src: "/images/decks/stained-deck-aerial.jpg", alt: "Aerial view of a two-story stained deck on a brick home" },
        { src: "/images/decks/screened-porch.jpg", alt: "Elevated screened porch with stairs on a white brick home" },
        { src: "/images/decks/deck-black-balusters.jpg", alt: "New wood deck with black metal balusters" },
        { src: "/images/decks/deck-screened-porch.jpg", alt: "Long wood deck leading to a screened porch" },
        { src: "/images/decks/deck-slat-skirting.jpg", alt: "Raised deck with horizontal slat skirting" },
        { src: "/images/decks/stained-deck-stairs.jpg", alt: "Stained deck stairs and railing from above" },
        { src: "/images/decks/deck-stairs-front.jpg", alt: "New deck with stairs on a yellow-sided home" },
        { src: "/images/decks/screened-porch-aerial.jpg", alt: "Aerial view of a screened porch with a shingle roof" },
        { src: "/images/decks/deck-stairs-porch.jpg", alt: "Deck stairs leading up to a screened porch" },
      ]}
    />
  );
}
