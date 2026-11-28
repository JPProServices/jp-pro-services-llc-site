import type { Metadata } from "next";

import ServicePage from "@/components/ServicePage";
import { reviews } from "@/components/reviews";
import { pageMetadata } from "@/components/seo";
import { roofingPages, secondaryRoofingPages } from "@/components/services";

export const metadata: Metadata = pageMetadata(
  "/asphalt-shingles",
  "GAF Asphalt Shingle Roofs in Nashville | JP Pro Services",
  "GAF asphalt shingle roofs installed by a GAF certified contractor near Nashville, with a 5-year labor and 50-year materials warranty.",
);

const drone = (name: string, alt: string) => ({ src: `/images/roofing/roof-2026-11-${name}.jpg`, alt });

export default function Page() {
  return (
    <ServicePage
      path="/asphalt-shingles"
      review={reviews.roof}
      name="GAF Asphalt Shingles"
      headline="GAF Shingle Roofs, Installed Right"
      intro="New GAF asphalt shingle roofs for homeowners within 50 miles of Nashville, installed by a GAF certified contractor."
      heroImage={drone("front-angle", "Two-story home with a new GAF shingle roof")}
      offerings={[
        { title: "GAF shingles", text: "[Confirm which GAF shingle lines you install.]" },
        { title: "GAF certified", text: "Installed by a GAF certified residential roofing contractor." },
        { title: "Replacement", text: "Full tear-off and a new GAF shingle roof." },
        { title: "Repairs", text: "Shingle and flashing repairs with GAF materials." },
      ]}
      products={["GAF asphalt shingles", "[Confirm GAF shingle lines and colors]"]}
      warranty={[
        { label: "Labor", value: "5 years" },
        { label: "Materials", value: "50 years" },
      ]}
      gallery={[
        drone("street-wide", "Home with a new shingle roof seen from above"),
        drone("top-down", "Top-down view of a finished shingle roof"),
        drone("side", "Side view of a home with a new roof"),
      ]}
      related={[
        { title: "More roofing", links: [{ href: "/roofing-gutters", label: "All Roofing & Gutters" }, ...roofingPages.filter((l) => l.href !== "/asphalt-shingles")] },
        { title: "Also available", links: secondaryRoofingPages },
      ]}
    />
  );
}
