import type { Metadata } from "next";

import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Custom Remodeling in Nashville | JP Pro Services",
  description: "Interior remodeling and home improvement near Nashville, with a 2-year labor warranty.",
};

export default function Page() {
  return (
    <ServicePage
      path="/remodeling"
      name="Custom Remodeling"
      headline="Remodeling Planned Around Your Home"
      intro="Interior remodeling and home improvement projects for homeowners within 50 miles of Nashville."
      heroImage={{ src: "/images/remodel/sunroom-side.jpg", alt: "Sunroom with tall windows being finished on a yellow home" }}
      offerings={[
        { title: "Interior remodeling", text: "[Confirm room types with the owners: kitchens, bathrooms, basements.]" },
        { title: "Home improvement", text: "Projects planned and finished by a crew led by an owner with 19 years of construction experience." },
        { title: "Sunrooms and additions", text: "[Confirm with the owners before launch: the photos show a sunroom and a room addition over a garage.]" },
      ]}
      products={["[Brands: coming from the owners]"]}
      warranty={[
        { label: "Labor", value: "2 years" },
        { label: "Materials", value: "[Manufacturer warranty: confirm]" },
      ]}
      gallery={[
        { src: "/images/remodel/ranch-front-evening-hero.jpg", alt: "Wood-sided ranch home with a lit front porch at dusk" },
        { src: "/images/remodel/sunroom-progress.jpg", alt: "Crew finishing a sunroom with tall windows" },
        { src: "/images/remodel/ranch-porch.jpg", alt: "Wraparound wood porch on a ranch home" },
        { src: "/images/remodel/garage-addition-framing.jpg", alt: "Framing for a room addition over a garage" },
        { src: "/images/remodel/garage-addition-sheathed.jpg", alt: "Room addition over a garage, sheathed and wrapped" },
        { src: "/images/remodel/garage-addition-roofing.jpg", alt: "Roofing going onto a room addition over a garage" },
        { src: "/images/remodel/ranch-side.jpg", alt: "Side view of a wood-sided ranch home with a porch" },
      ]}
    />
  );
}
