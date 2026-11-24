/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // The Roofing & Gutters page replaces the old residential roofing page.
      { source: "/residential-roofing", destination: "/roofing-gutters", permanent: true },
    ];
  },
};
export default nextConfig;
