import type { Metadata } from "next";

import ServicePage from "@/components/ServicePage";
import { roofingPages, secondaryRoofingPages } from "@/components/services";

export const metadata: Metadata = {
  title: "Roofing & Gutters in Nashville | JP Pro Services",
  description: "Roof replacement, roof repair and gutters near Nashville. GAF certified, with a 5-year labor and 50-year materials warranty.",
};

const drone = (name: string, alt: string) => ({ src: `/images/roofing/roof-2026-11-${name}.jpg`, alt });

export default function Page() {
  return (
    <ServicePage
      name="Roofing & Gutters"
      headline="Roofing & Gutters Done Right"
      intro="Roof replacement, roof repair and gutters for homeowners within 50 miles of Nashville, installed by a GAF certified contractor."
      heroImage={drone("hero", "Aerial view of a brick home with a new dark gray shingle roof")}
      offerings={[
        { title: "Roof replacement", text: "Full tear-off and a new roof with GAF materials, with a written estimate before work begins." },
        { title: "Roof repair", text: "Leaks, missing shingles and flashing. Fast scheduling for storm damage and leak repairs." },
        { title: "Gutters", text: "[Confirm gutter services with the owners: installation, replacement, guards.]" },
        { title: "Roof types", text: "Asphalt shingles, metal, tile and slate, and flat roofs." },
      ]}
      products={["GAF roofing systems, installed by a GAF certified contractor", "[More roofing and gutter brands: coming from the owners]"]}
      warranty={[
        { label: "Labor", value: "5 years" },
        { label: "Materials", value: "50 years" },
      ]}
      gallery={[
        drone("front-angle", "Front of a two-story home with a new shingle roof"),
        drone("rear", "Rear view of a home with a new roof and patio"),
        drone("top-down", "Top-down view of a finished shingle roof"),
        drone("side", "Side view of a home with a new roof"),
        drone("rear-high", "High aerial view of a new roof and backyard"),
        drone("street", "Home with a new roof seen from the street"),
        { src: "/roof7_3.JPEG", alt: "Brick home with a new architectural shingle roof" },
        { src: "/roof3_1.JPG", alt: "Home with a new roof beside a pool" },
        { src: "/roof4_1.JPG", alt: "Stone and brick home with a dark shingle roof" },
      ]}
      related={[
        { title: "Roofing services", links: roofingPages },
        { title: "Also available", links: secondaryRoofingPages },
      ]}
    />
  );
}
