import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import MobileMenu from "@/components/MobileMenu";
import ButtonEffects from "@/components/ButtonEffects";
import ScrollHeader from "@/components/ScrollHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JP Pro Services - Roofing & Waterproofing",
  description: "Top-rated roofing company in Middle Tennessee.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const license = process.env.NEXT_PUBLIC_LICENSE_NUMBER || "TN-XXXXXX";
  const phone = process.env.NEXT_PUBLIC_COMPANY_PHONE_DISPLAY || "(615) 555-0192";
  const phoneHref =
    process.env.NEXT_PUBLIC_COMPANY_PHONE || "+1-615-555-0192";

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        {/* MAIN HEADER — NOW sticky with dynamic transparency */}
        <header id="main-header" className="sticky top-0 z-50 border-b border-slate-800 shadow-xl transition-all duration-300" style={{ 
          background: 'rgb(0, 0, 0)',
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
                
                {/* Centered Navigation */}
                <nav className="hidden lg:flex items-center justify-center flex-1 mx-12" aria-label="Main">
                  <div className="flex items-center gap-8 text-slate-300 font-medium">
                    {/* Services Dropdown */}
                    <div className="relative group">
                      <button className="nav-link-gold flex items-center gap-1 py-2">
                        Services
                        <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <div className="absolute top-full left-0 mt-1 w-56 bg-white border border-slate-200 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        <div className="py-2">
                          <a href="#residential" className="dropdown-item-gold block px-4 py-3 text-sm">Residential Roofing</a>
                          <a href="#commercial" className="dropdown-item-gold block px-4 py-3 text-sm">Commercial Roofing</a>
                          <a href="#emergency" className="dropdown-item-gold block px-4 py-3 text-sm">Emergency Repairs</a>
                          <a href="#replacement" className="dropdown-item-gold block px-4 py-3 text-sm">Roof Replacement</a>
                          <a href="#storm" className="dropdown-item-gold block px-4 py-3 text-sm">Storm Damage</a>
                        </div>
                      </div>
                    </div>

                    {/* Roof Types Dropdown */}
                    <div className="relative group">
                      <button className="nav-link-gold flex items-center gap-1 py-2">
                        Roof Types
                        <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-slate-200 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        <div className="py-2">
                          <a href="#asphalt" className="dropdown-item-gold block px-4 py-3 text-sm">Asphalt Shingles</a>
                          <a href="#metal" className="dropdown-item-gold block px-4 py-3 text-sm">Metal Roofing</a>
                          <a href="#tile" className="dropdown-item-gold block px-4 py-3 text-sm">Tile & Slate</a>
                          <a href="#flat" className="dropdown-item-gold block px-4 py-3 text-sm">Flat Roofing</a>
                        </div>
                      </div>
                    </div>

                    <a href="#locations" className="nav-link-gold py-2">Locations</a>
                    <a href="#financing" className="nav-link-gold py-2">Financing</a>
                    <a href="#gallery" className="nav-link-gold py-2">Gallery</a>
                    <a href="#blog" className="nav-link-gold py-2">Blog</a>
                    <a href="#faq" className="nav-link-gold py-2">FAQs</a>
                  </div>
                </nav>

                {/* CTA Button */}
                <div className="hidden lg:block">
                  <a
                    href={`tel:${phoneHref}`}
                    className="group btn-gold inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl"
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

        <footer className="bg-slate-800 border-t border-slate-700 py-6 text-slate-400">
          <div className="mx-auto w-[min(1200px,94%)]">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <img 
                    src="/jp_golden.png" 
                    alt="JP Pro Services Logo" 
                    className="h-10 w-auto"
                  />
                </div>
                <div className="text-sm">
                  License: <strong className="text-white">#{license}</strong>
                </div>
              </div>
              
              <div className="flex items-center gap-6 text-sm">
                <span className="text-slate-300">Middle Tennessee's Trusted Roofing Company</span>
                <a href={`tel:${phoneHref}`} className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200">
                  {phoneHref.replace(/^\+1-/, '').replace(/-/g, '.').replace(/(\d{3})\.(\d{3})\.(\d{4})/, '($1) $2-$3')}
                </a>
              </div>
              
              <div className="text-xs text-slate-500">
                © <span suppressHydrationWarning>{new Date().getFullYear()}</span> JP Pro Services. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
        <ButtonEffects />
        <ScrollHeader />
      </body>
    </html>
  );
}