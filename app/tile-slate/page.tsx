import type { Metadata } from "next";
import { pageMetadata } from "@/components/seo";
import TileSlateClient from './TileSlateClient';

export const metadata: Metadata = pageMetadata("/tile-slate", "Tile & Slate Roofing in Nashville | JP Pro Services", "Tile and slate roofing near Nashville with a 5-year labor warranty.", { noindex: true });

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function Page() {
  return <TileSlateClient />;
}

