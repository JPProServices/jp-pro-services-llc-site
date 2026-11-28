import type { Metadata } from "next";

import ServicePage from "@/components/ServicePage";
import { reviews } from "@/components/reviews";
import { pageMetadata } from "@/components/seo";
import { roofingPages } from "@/components/services";

export const metadata: Metadata = pageMetadata(
  "/storm-damage",
  "Storm Damage & Insurance Claims in Nashville | JP Pro Services",
  "Storm damage roof repair near Nashville. We document the damage and work with your insurance adjuster.",
);

const drone = (name: string, alt: string) => ({ src: `/images/roofing/roof-2026-11-${name}.jpg`, alt });

export default function Page() {
  return (
    <ServicePage
      path="/storm-damage"
      review={reviews.storm}
      name="Storm Damage & Insurance Claims"
      headline="Storm Damage on Your Roof?"
      intro="We have experience with storm damage insurance claims. We document the damage and work with your adjuster."
      heroImage={drone("top-down", "Top-down view of a roof after replacement")}
      offerings={[
        { title: "Free estimate", text: "We look at the roof and show you what we find." },
        { title: "Documentation", text: "We document the damage for your insurance claim." },
        { title: "Your adjuster", text: "We work with your insurance adjuster on what the roof needs." },
        { title: "Repair or replacement", text: "Fast scheduling for storm damage and leak repairs, with GAF materials." },
      ]}
      products={["GAF roofing systems, installed by a GAF certified contractor"]}
      warranty={[
        { label: "Labor", value: "5 years" },
        { label: "Materials", value: "50 years" },
      ]}
      gallery={[
        drone("front-angle", "Front of a two-story home with a new shingle roof"),
        drone("rear", "Rear view of a home with a new roof"),
        { src: "/images/roofing/ranch-pool-roof.jpg", alt: "Brick ranch home with a new shingle roof" },
      ]}
      related={[{ title: "Roofing services", links: [{ href: "/roofing-gutters", label: "All Roofing & Gutters" }, ...roofingPages] }]}
    />
  );
}
