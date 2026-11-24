export type Service = {
  slug: string;
  name: string;
  shortName: string;
  summary: string;
  bullets: string[];
  image: { src: string; alt: string } | null;
  warranty: string;
};

// Order matters: roofing, decks and fencing lead the homepage.
export const services: Service[] = [
  {
    slug: "roofing-gutters",
    name: "Roofing & Gutters",
    shortName: "Roofing & Gutters",
    summary: "Roof replacement, roof repair and gutters, installed with GAF materials by a GAF certified contractor.",
    bullets: ["Roof replacement", "Roof repair", "Gutters"],
    image: {
      src: "/images/roofing/roof-2026-11-hero.jpg",
      alt: "Aerial view of a brick home with a new dark gray shingle roof",
    },
    warranty: "5-year labor and 50-year materials warranty",
  },
  {
    slug: "decks-fencing",
    name: "Decks, Fencing & Outdoor Living",
    shortName: "Decks & Fencing",
    summary: "Decks, fences and outdoor living spaces built with Trex and TimberTech products.",
    bullets: ["Decks", "Fencing", "Outdoor living spaces"],
    image: null,
    warranty: "2-year labor warranty",
  },
  {
    slug: "siding-exteriors",
    name: "Siding & Exterior Finishes",
    shortName: "Siding & Exteriors",
    summary: "Siding and exterior finishes that protect your home and refresh how it looks from the street.",
    bullets: ["Siding installation and replacement", "Exterior finishes", "[Confirm other exterior work]"],
    image: null,
    warranty: "2-year labor warranty",
  },
  {
    slug: "remodeling",
    name: "Custom Remodeling",
    shortName: "Remodeling",
    summary: "Interior remodeling and home improvement projects, planned around how you use your home.",
    bullets: ["Interior remodeling", "Home improvement projects", "[Confirm room types offered]"],
    image: null,
    warranty: "2-year labor warranty",
  },
];

export const roofingPages = [
  { href: "/roof-replacement", label: "Roof Replacement" },
  { href: "/roof-repair", label: "Roof Repair" },
  { href: "/asphalt-shingles", label: "Asphalt Shingles" },
  { href: "/metal-roofing", label: "Metal Roofing" },
  { href: "/tile-slate", label: "Tile & Slate" },
  { href: "/flat-roofing", label: "Flat Roofing" },
];

export const secondaryRoofingPages = [
  { href: "/storm-damage", label: "Storm Damage & Insurance Claims" },
  { href: "/commercial-roofing", label: "Commercial Roofing" },
];
