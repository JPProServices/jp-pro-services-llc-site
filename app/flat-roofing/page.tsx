import type { Metadata } from "next";
import FlatRoofingClient from './FlatRoofingClient';

export const metadata: Metadata = {
  title: "Flat Roofing in Nashville | JP Pro Services",
  description: "Flat roof installation and repair near Nashville with a 5-year labor warranty.",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function Page() {
  return <FlatRoofingClient />;
}

