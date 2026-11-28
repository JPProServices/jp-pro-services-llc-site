import type { Metadata } from "next";

import HomePage from "../page";

// QR code visitors (business cards, Cars & Coffee) are redirected here from "/?utm_source=qr",
// so their visits show up as their own page in Vercel Analytics.
export const metadata: Metadata = {
  title: "Welcome | JP Pro Services",
  robots: { index: false, follow: true },
};

export default function WelcomePage() {
  return (
    <>
      <div className="border-b border-yellow-500/40 bg-yellow-500/15">
        <p className="mx-auto w-[min(1200px,94%)] py-3 text-center font-medium text-white">
          Thanks for scanning our card! Your free estimate starts right below.
        </p>
      </div>
      <HomePage />
    </>
  );
}
