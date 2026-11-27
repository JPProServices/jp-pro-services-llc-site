import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import MobileMenu from "@/components/MobileMenu";
import ButtonEffects from "@/components/ButtonEffects";
import ScrollHeader from "@/components/ScrollHeader";
import DesktopNav from "@/components/DesktopNav";
import SocialLinks from "@/components/SocialLinks";
import StickyCallBar from "@/components/StickyCallBar";
import JsonLd, { businessJsonLd } from "@/components/JsonLd";
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
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const phone = "(615) 956-4920";
  const phoneHref =
    "+1-615-956-4920";

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        {/* MAIN HEADER — NOW sticky with dynamic transparency */}
        <header id="main-header" className="sticky top-0 z-50 shadow-xl transition-all duration-300" style={{ 
          background: 'rgb(30, 26, 21)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)'
        }}>
          <div className="mx-auto w-[min(1200px,94%)] py-4">
            <div className="flex items-center justify-between">
                {/* Logo */}
                <a className="flex items-center hover:scale-105 transition-transform duration-200" href="/">
                  <img 
                    src="/jp_golden.png" 
                    alt="JP Pro Services Logo" 
                    className="h-12 w-auto"
                  />
                </a>
                
                <DesktopNav />

                {/* CTA Button */}
                <div className="hidden xl:block">
                  <a
                    href={`tel:${phoneHref}`}
                    className="group btn-gold inline-flex items-center gap-2 whitespace-nowrap px-5 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl"
                  >
                    <span>{phone}</span>
                    <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>

                {/* Mobile Menu */}
                <MobileMenu phone={phone} phoneHref={phoneHref} />
              </div>
            </div>
        </header>

        {children}

        <footer className="bg-zinc-900 border-t border-zinc-700 pt-6 pb-24 md:pb-6 text-slate-400">
          <div className="mx-auto w-[min(1200px,94%)]">
            {/* Mobile Footer - Centered logo and copyright only */}
            <div className="flex flex-col items-center gap-4 md:hidden">
              <img 
                src="/jp_golden_logo.png" 
                alt="JP Pro Services Logo" 
                className="h-10 w-auto"
              />
              <SocialLinks />
              <LicenseLink />
              <div className="text-xs text-slate-500">
                © <span suppressHydrationWarning>{new Date().getFullYear()}</span> JP Pro Services. All rights reserved.
              </div>
            </div>
            
            {/* Desktop Footer */}
            <div className="hidden md:flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <img 
                  src="/jp_golden.png" 
                  alt="JP Pro Services Logo" 
                  className="h-10 w-auto"
                />
              </div>
              
              <div className="flex items-center gap-6 text-sm">
                <span className="text-slate-300">Roofing, Decks, Siding &amp; Remodeling in Nashville</span>
                <a href={`tel:${phoneHref}`} className="text-yellow-400 hover:text-yellow-300 font-medium transition-colors duration-200">
                  {phoneHref.replace(/^\+1-/, '').replace(/-/g, '.').replace(/(\d{3})\.(\d{3})\.(\d{4})/, '($1) $2-$3')}
                </a>
                <SocialLinks />
              </div>
              
              <div className="flex flex-col items-end gap-1 text-xs text-slate-500">
                <LicenseLink />
                <span>© <span suppressHydrationWarning>{new Date().getFullYear()}</span> JP Pro Services. All rights reserved.</span>
              </div>
            </div>
          </div>
        </footer>
        <StickyCallBar />
        <JsonLd data={businessJsonLd} />
        <Analytics />
        <ButtonEffects />
        <ScrollHeader />
      </body>
    </html>
  );
}
