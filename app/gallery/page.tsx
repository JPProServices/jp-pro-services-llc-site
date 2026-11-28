import type { Metadata } from "next";
import { pageMetadata } from "@/components/seo";
import GalleryClient from './GalleryClient';

export const metadata: Metadata = pageMetadata("/gallery", "Project Gallery | JP Pro Services", "Photos of recent JP Pro Services projects around Nashville.");

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function Page() {
  return <GalleryClient />;
}

