import type { Metadata } from "next";
import CommercialRoofingClient from './CommercialRoofingClient';

export const metadata: Metadata = {
  title: "Commercial Roofing in Nashville | JP Pro Services",
  description: "Commercial roof maintenance, repair and replacement near Nashville.",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function Page() {
  return <CommercialRoofingClient />;
}

