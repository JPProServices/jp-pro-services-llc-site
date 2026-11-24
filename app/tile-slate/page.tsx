import type { Metadata } from "next";
import TileSlateClient from './TileSlateClient';

export const metadata: Metadata = {
  title: "Tile & Slate Roofing in Nashville | JP Pro Services",
  description: "Tile and slate roofing near Nashville with a 5-year labor warranty.",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function Page() {
  return <TileSlateClient />;
}

