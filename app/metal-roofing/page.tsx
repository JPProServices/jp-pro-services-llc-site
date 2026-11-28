import type { Metadata } from "next";
import { pageMetadata } from "@/components/seo";
import MetalRoofingClient from './MetalRoofingClient';

export const metadata: Metadata = pageMetadata("/metal-roofing", "Metal Roofing in Nashville | JP Pro Services", "Metal roof installation near Nashville with a 5-year labor warranty.", { noindex: true });

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function Page() {
  return <MetalRoofingClient />;
}

