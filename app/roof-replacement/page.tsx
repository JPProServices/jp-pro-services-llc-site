import type { Metadata } from "next";
import RoofReplacementClient from './RoofReplacementClient';

export const metadata: Metadata = {
  title: "Roof Replacement in Nashville | JP Pro Services",
  description: "Full roof replacement near Nashville with GAF materials, a 5-year labor warranty and a 50-year materials warranty.",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function Page() {
  return <RoofReplacementClient />;
}

