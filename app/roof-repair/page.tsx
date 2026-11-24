import type { Metadata } from "next";
import RoofRepairClient from './RoofRepairClient';

export const metadata: Metadata = {
  title: "Roof Repair in Nashville | JP Pro Services",
  description: "Roof leak, shingle and flashing repair near Nashville, with fast scheduling for storm damage and leak repairs and a 5-year labor warranty.",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function Page() {
  return <RoofRepairClient />;
}

