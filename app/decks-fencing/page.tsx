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
      intro="Decks, fences and outdoor living spaces for homeowners within 50 miles of Nashville, built with Trex and TimberTech."
      heroImage={null}
      offerings={[
        { title: "Decks", text: "New decks and deck replacements with Trex and TimberTech decking." },
        { title: "Fencing", text: "Fence installation. [Confirm fence materials with the owners.]" },
        { title: "Outdoor living", text: "[Confirm outdoor living work with the owners: patios, pergolas, covered areas.]" },
        { title: "Free estimate", text: "Every project starts with a free, written estimate." },
      ]}
      products={["Trex decking", "TimberTech decking", "[More deck and fence brands: coming from the owners]"]}
      warranty={[
        { label: "Labor", value: "2 years" },
        { label: "Materials", value: "[Manufacturer warranty: confirm]" },
      ]}
      gallery={[]}
      galleryNote="Deck and fence photos are on the way."
    />
  );
}
