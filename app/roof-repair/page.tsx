import type { Metadata } from "next";

import ServicePage from "@/components/ServicePage";
import { reviews } from "@/components/reviews";
import { pageMetadata } from "@/components/seo";
import { roofingPages, secondaryRoofingPages } from "@/components/services";

export const metadata: Metadata = pageMetadata(
  "/roof-repair",
  "Roof Repair in Nashville | JP Pro Services",
  "Roof leak, shingle and flashing repair for homeowners near Nashville, with GAF materials.",
);

const drone = (name: string, alt: string) => ({ src: `/images/roofing/roof-2026-11-${name}.jpg`, alt });

export default function Page() {
  return (
    <ServicePage
      path="/roof-repair"
      review={reviews.repair}
      name="Roof Repair"
      headline="Roof Repair Done Right"
      intro="Leaks, missing shingles and flashing repaired for homeowners within 50 miles of Nashville, by a GAF certified contractor."
      heroImage={drone("rear-high", "Aerial view of a home's roof and backyard")}
      offerings={[
        { title: "Leaks", text: "We find where the water is getting in and repair the roof around it." },
        { title: "Shingles and flashing", text: "Missing, cracked or wind-damaged shingles and failed flashing around chimneys, vents and valleys." },
        { title: "Storm damage", text: "Fast scheduling for storm damage and leak repairs. We document the damage and work with your insurance adjuster." },
        { title: "Repair or replace?", text: "If a repair won't last, we tell you, and walk you through a replacement." },
      ]}
      products={["GAF roofing materials"]}
      warranty={[
        { label: "Labor", value: "5 years [confirm for repairs]" },
        { label: "Materials", value: "50 years [confirm for repairs]" },
      ]}
      gallery={[
        drone("rear-corner", "Rear corner of a home with a new shingle roof"),
        drone("street", "Home with a new roof seen from the street"),
        { src: "/images/roofing/ranch-patio-cover.jpg", alt: "Aerial view of a roof and patio cover beside a pool" },
      ]}
      related={[
        { title: "More roofing", links: [{ href: "/roofing-gutters", label: "All Roofing & Gutters" }, ...roofingPages.filter((l) => l.href !== "/roof-repair")] },
        { title: "Also available", links: secondaryRoofingPages },
      ]}
    />
  );
}
