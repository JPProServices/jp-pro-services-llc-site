import type { Metadata } from "next";

import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Siding & Exterior Finishes in Nashville | JP Pro Services",
  description: "Siding and exterior finishes for homes near Nashville, with a 2-year labor warranty.",
};

export default function Page() {
  return (
    <ServicePage
      path="/siding-exteriors"
      name="Siding & Exterior Finishes"
      headline="Siding & Exteriors That Protect Your Home"
      intro="Siding and exterior finishes for homeowners within 50 miles of Nashville."
      heroImage={null}
      offerings={[
        { title: "Siding", text: "Siding installation and replacement. [Confirm siding materials with the owners.]" },
        { title: "Exterior finishes", text: "[Confirm exterior finish work with the owners: trim, soffit, fascia, paint.]" },
      ]}
      products={["[Siding and exterior brands: coming from the owners]"]}
      warranty={[
        { label: "Labor", value: "2 years" },
        { label: "Materials", value: "[Manufacturer warranty: confirm]" },
      ]}
      gallery={[]}
      galleryNote="Siding photos are on the way."
    />
  );
}
