import type { Metadata } from "next";
import MetalRoofingClient from './MetalRoofingClient';

export const metadata: Metadata = {
  title: "Metal Roofing in Nashville | JP Pro Services",
  description: "Metal roof installation near Nashville with a 5-year labor warranty.",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function Page() {
  return <MetalRoofingClient />;
}

