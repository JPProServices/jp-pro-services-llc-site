export const SITE_URL = "https://jpproservicesllc.com";
export const BUSINESS_ID = `${SITE_URL}/#business`;

// Structured data for search engines. Only facts the client has confirmed; no ratings or
// "general contractor" type until the GC license is issued.
export const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["HomeAndConstructionBusiness", "RoofingContractor"],
  "@id": BUSINESS_ID,
  name: "JP Pro Services",
  url: SITE_URL,
  logo: `${SITE_URL}/jp_golden_logo.png`,
  image: `${SITE_URL}/images/roofing/roof-2026-11-hero.jpg`,
  telephone: "+1-615-956-4920",
  email: "jpproservicesllc2024@gmail.com",
  foundingDate: "2024",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2803 Foster Ave, Suite 101",
    addressLocality: "Nashville",
    addressRegion: "TN",
    postalCode: "37210",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "16:00",
    },
  ],
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: { "@type": "GeoCoordinates", latitude: 36.1627, longitude: -86.7816 },
    geoRadius: "80467",
  },
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "license",
    name: "Tennessee Home Improvement License",
    identifier: "13503",
  },
  sameAs: ["https://www.facebook.com/JPProServicesLLC", "https://www.instagram.com/jpproservicesllc"],
};

// Tells Google to show "JP Pro Services" as the site name instead of the domain.
export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "JP Pro Services",
  url: SITE_URL,
  publisher: { "@id": BUSINESS_ID },
};

export function serviceJsonLd(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType: name,
    description,
    url: `${SITE_URL}${path}`,
    provider: { "@id": BUSINESS_ID },
    areaServed: businessJsonLd.areaServed,
  };
}

export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
