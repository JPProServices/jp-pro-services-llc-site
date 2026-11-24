import type { Metadata } from "next";
import StormDamageClient from './StormDamageClient';

export const metadata: Metadata = {
  title: "Storm Damage & Insurance Claims | JP Pro Services",
  description: "Storm damage roof repair near Nashville, with help documenting damage and working with your insurance adjuster.",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function Page() {
  return <StormDamageClient />;
}

