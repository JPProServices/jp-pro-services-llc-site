import type { Metadata } from "next";

import ServicePage from "@/components/ServicePage";
import { reviews } from "@/components/reviews";

export const metadata: Metadata = {
  title: "Siding & Exterior Finishes in Nashville | JP Pro Services",
  description: "Siding and exterior finishes for homes near Nashville, with a 2-year labor warranty.",
};

export default function Page() {
  return (
    <ServicePage
      path="/siding-exteriors"
      review={reviews.siding}
      name="Siding & Exterior Finishes"
      headline="Siding & Exteriors That Protect Your Home"
      intro="Siding and exterior finishes for homeowners within 50 miles of Nashville."
      heroImage={{ src: "/images/siding/board-batten-gable-hero.jpg", alt: "Board-and-batten siding on a gable above brick" }}
      offerings={[
        { title: "Siding", text: "Siding installation and replacement, including board-and-batten. [Confirm siding materials with the owners.]" },
        { title: "Exterior finishes", text: "[Confirm exterior finish work with the owners: trim, soffit, fascia, paint.]" },
      ]}
      products={["[Siding and exterior brands: coming from the owners]"]}
      warranty={[
        { label: "Labor", value: "2 years" },
        { label: "Materials", value: "[Manufacturer warranty: confirm]" },
      ]}
      gallery={[
        { src: "/images/siding/board-batten-rear.jpg", alt: "Board-and-batten gable siding above brick" },
        { src: "/images/siding/board-batten-dormer.jpg", alt: "Board-and-batten siding on a dormer" },
        { src: "/images/siding/siding-install.jpg", alt: "Crew member installing gable siding from a ladder" },
      ]}
    />
  );
}
