/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // The Roofing & Gutters page replaces the old residential roofing page.
      { source: "/residential-roofing", destination: "/roofing-gutters", permanent: true },
      // Business-card QR code: give scans their own page so they can be counted.
      {
        source: "/",
        has: [{ type: "query", key: "utm_source", value: "qr" }],
        destination: "/welcome",
        permanent: false,
      },
    ];
  },
};
export default nextConfig;
