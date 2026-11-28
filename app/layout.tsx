import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import MobileMenu from "@/components/MobileMenu";
import ScrollHeader from "@/components/ScrollHeader";
import DesktopNav from "@/components/DesktopNav";
import SocialLinks from "@/components/SocialLinks";
import StickyCallBar from "@/components/StickyCallBar";
import JsonLd, { businessJsonLd, websiteJsonLd } from "@/components/JsonLd";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://jpproservicesllc.com"),
  title: "JP Pro Services | Roofing, Decks, Siding & Remodeling in Nashville",
  description: "Roofing and gutters, decks and fencing, siding and remodeling for homeowners within 50 miles of Nashville.",
  openGraph: {
    title: "JP Pro Services",
    description: "Roofing, decks, fencing, siding and remodeling in Nashville.",
    siteName: "JP Pro Services",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

function LicenseLink() {
  return (
    <a
      href="https://verify.tn.gov/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-xs text-slate-400 underline-offset-2 hover:text-yellow-400 hover:underline"
    >
      TN Home Improvement License #13503 · Verify
    </a>
  );
}

const ADDRESS = "2803 Foster Ave, Suite 101, Nashville, TN 37210";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const phone = "(615) 956-4920";
  const phoneHref = "+16159564920";

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:font-semibold focus:text-black"
        >
          Skip to content
        </a>

        {/* Sticky header with dynamic transparency (ScrollHeader) */}
        <header id="main-header" className="sticky top-0 z-50 shadow-xl transition-all duration-300" style={{
          background: 'rgb(30, 26, 21)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)'
        }}>
          <div className="mx-auto w-[min(1200px,94%)] py-4">
            <div className="flex items-center justify-between gap-4">
                <a className="flex items-center" href="/" aria-label="JP Pro Services home">
                  <img
                    src="/jp_golden.png"
                    alt=""
                    width={600}
                    height={108}
                    className="h-12 w-auto"
                  />
                </a>

                <DesktopNav />

                {/* Phone: full button on desktop, compact on tablets (the mobile call bar covers phones) */}
                <div className="hidden xl:block">
                  <a
                    href={`tel:${phoneHref}`}
                    className="group btn-gold inline-flex items-center gap-2 whitespace-nowrap px-5 py-3 rounded-lg shadow-lg"
                  >
                    <span>{phone}</span>
                    <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
                <div className="ml-auto hidden md:flex xl:hidden">
                  <a
                    href={`tel:${phoneHref}`}
                    className="btn-gold inline-flex min-h-[44px] items-center gap-2 whitespace-nowrap rounded-lg px-4 py-2"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call {phone}
                  </a>
                </div>

                <MobileMenu phone={phone} phoneHref={phoneHref} />
              </div>
            </div>
        </header>

        <div id="main-content" tabIndex={-1} className="outline-none">
          {children}
        </div>

        <footer className="bg-zinc-900 border-t border-zinc-700 pt-6 pb-24 md:pb-6 text-slate-400">
          <div className="mx-auto w-[min(1200px,94%)]">
            {/* Mobile footer */}
            <div className="flex flex-col items-center gap-4 text-center md:hidden">
              <img
                src="/jp_golden_logo.png"
                alt="JP Pro Services"
                width={400}
                height={225}
                className="h-10 w-auto"
              />
              <p className="text-sm text-slate-300">{ADDRESS}</p>
              <SocialLinks />
              <LicenseLink />
              <div className="text-xs text-slate-400">
                © <span suppressHydrationWarning>{new Date().getFullYear()}</span> JP Pro Services. All rights reserved.
              </div>
            </div>

            {/* Desktop footer */}
            <div className="hidden md:flex items-center justify-between gap-4">
              <div className="flex flex-col gap-2">
                <img
                  src="/jp_golden.png"
                  alt="JP Pro Services"
                  width={600}
                  height={108}
                  className="h-10 w-auto self-start"
                />
                <span className="text-xs text-slate-300">{ADDRESS}</span>
              </div>

              <div className="flex items-center gap-6 text-sm">
                <span className="text-slate-300">Roofing, Decks, Siding &amp; Remodeling in Nashville</span>
                <a href={`tel:${phoneHref}`} className="text-yellow-400 hover:text-yellow-300 font-medium transition-colors duration-200">
                  {phone}
                </a>
                <SocialLinks />
              </div>

              <div className="flex flex-col items-end gap-1 text-xs text-slate-400">
                <LicenseLink />
                <span>© <span suppressHydrationWarning>{new Date().getFullYear()}</span> JP Pro Services. All rights reserved.</span>
              </div>
            </div>
          </div>
        </footer>
        <StickyCallBar />
        <JsonLd data={businessJsonLd} />
        <JsonLd data={websiteJsonLd} />
        <Analytics />
        <ScrollHeader />
      </body>
    </html>
  );
}
