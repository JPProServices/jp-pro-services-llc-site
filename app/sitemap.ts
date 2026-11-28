import type { MetadataRoute } from "next";

import { SITE_URL } from "@/components/JsonLd";

// Only pages meant for search. Hidden roofing pages, /welcome and redirects are left out.
const paths = [
  "/",
  "/roofing-gutters",
  "/decks-fencing",
  "/siding-exteriors",
  "/remodeling",
  "/roof-replacement",
  "/roof-repair",
  "/asphalt-shingles",
  "/storm-damage",
  "/gallery",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
