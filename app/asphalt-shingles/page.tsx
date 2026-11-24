import type { Metadata } from "next";
import AsphaltShinglesClient from "./AsphaltShinglesClient";

export const metadata: Metadata = {
  title: "GAF Asphalt Shingles in Nashville | JP Pro Services",
  description: "GAF asphalt shingle roofs installed by a GAF certified contractor near Nashville.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function AsphaltShinglesPage() {
  return <AsphaltShinglesClient />;
}