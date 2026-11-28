import type { Metadata } from "next";

// Per-page metadata: canonical URL (so QR/UTM links don't count as duplicates)
// and a link preview with the page's own title.
export function pageMetadata(
  path: string,
  title: string,
  description: string,
  options: { noindex?: boolean } = {},
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: "JP Pro Services",
      type: "website",
    },
    ...(options.noindex ? { robots: { index: false, follow: true } } : {}),
  };
}
