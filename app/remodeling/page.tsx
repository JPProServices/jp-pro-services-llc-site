import type { Metadata } from "next";

import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Custom Remodeling in Nashville | JP Pro Services",
  description: "Interior remodeling and home improvement near Nashville, with a 2-year labor warranty.",
};

export default function Page() {
  return (
    <ServicePage
      name="Custom Remodeling"
      headline="Remodeling Planned Around Your Home"
      intro="Interior remodeling and home improvement projects for homeowners within 50 miles of Nashville."
      heroImage={null}
      offerings={[
        { title: "Interior remodeling", text: "[Confirm room types with the owners: kitchens, bathrooms, basements.]" },
        { title: "Home improvement", text: "Projects planned and finished by a crew led by an owner with 19 years of construction experience." },
      ]}
      products={["[Brands: coming from the owners]"]}
      warranty={[
        { label: "Labor", value: "2 years" },
        { label: "Materials", value: "[Manufacturer warranty: confirm]" },
      ]}
      gallery={[]}
      galleryNote="Remodeling photos are on the way."
    />
  );
}
