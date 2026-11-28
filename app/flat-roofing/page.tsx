import type { Metadata } from "next";
import { pageMetadata } from "@/components/seo";
import FlatRoofingClient from './FlatRoofingClient';

export const metadata: Metadata = pageMetadata("/flat-roofing", "Flat Roofing in Nashville | JP Pro Services", "Flat roof installation and repair near Nashville with a 5-year labor warranty.", { noindex: true });

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function Page() {
  return <FlatRoofingClient />;
}

