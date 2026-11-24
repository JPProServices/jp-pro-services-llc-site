import type { Metadata } from "next";
import GalleryClient from './GalleryClient';

export const metadata: Metadata = {
  title: "Project Gallery | JP Pro Services",
  description: "Photos of recent JP Pro Services projects around Nashville.",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function Page() {
  return <GalleryClient />;
}

