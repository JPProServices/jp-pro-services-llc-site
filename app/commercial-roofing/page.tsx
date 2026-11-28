import type { Metadata } from "next";
import { pageMetadata } from "@/components/seo";
import CommercialRoofingClient from './CommercialRoofingClient';

export const metadata: Metadata = pageMetadata("/commercial-roofing", "Commercial Roofing in Nashville | JP Pro Services", "Commercial roof maintenance, repair and replacement near Nashville.", { noindex: true });

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function Page() {
  return <CommercialRoofingClient />;
}

