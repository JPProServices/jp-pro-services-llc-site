import type { Metadata } from "next";

import ServicePage from "@/components/ServicePage";
import { reviews } from "@/components/reviews";
import { pageMetadata } from "@/components/seo";
import { roofingPages, secondaryRoofingPages } from "@/components/services";

export const metadata: Metadata = pageMetadata(
  "/roof-replacement",
  "Roof Replacement in Nashville | JP Pro Services",
  "Full roof replacement near Nashville with GAF materials, a 5-year labor warranty and a 50-year materials warranty.",
);

const drone = (name: string, alt: string) => ({ src: `/images/roofing/roof-2026-11-${name}.jpg`, alt });

export default function Page() {
  return (
    <ServicePage
      path="/roof-replacement"
      review={reviews.roof}
      name="Roof Replacement"
      headline="Roof Replacement with GAF Materials"
      intro="A full tear-off and new GAF roof for homeowners within 50 miles of Nashville, installed by a GAF certified contractor."
      heroImage={drone("street-wide", "Aerial view of a home with a newly replaced shingle roof")}
      offerings={[
        { title: "Full replacement", text: "We remove the old roof and install a new GAF roof." },
        { title: "Repair or replace?", text: "Not sure your roof needs replacing? The free estimate tells you whether a repair will do." },
        { title: "Gutters", text: "Gutter and downspout installation, including copper gutters." },
        { title: "Storm damage", text: "If a storm caused the damage, we document it and work with your insurance adjuster." },
      ]}
      products={["GAF roofing systems, installed by a GAF certified contractor"]}
      warranty={[
        { label: "Labor", value: "5 years" },
        { label: "Materials", value: "50 years" },
      ]}
      gallery={[
        drone("front-angle", "Front of a two-story home with a new shingle roof"),
        drone("top-down", "Top-down view of a finished shingle roof"),
        drone("rear", "Rear view of a home with a new roof and patio"),
        { src: "/images/roofing/ranch-pool-roof.jpg", alt: "Brick ranch home with a new shingle roof" },
        { src: "/images/roofing/ranch-roof-top.jpg", alt: "Top-down view of a new roof on a brick ranch home" },
        drone("side", "Side view of a home with a new roof"),
      ]}
      related={[
        { title: "More roofing", links: [{ href: "/roofing-gutters", label: "All Roofing & Gutters" }, ...roofingPages.filter((l) => l.href !== "/roof-replacement")] },
        { title: "Also available", links: secondaryRoofingPages },
      ]}
    />
  );
}
