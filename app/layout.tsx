import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import MobileMenu from "@/components/MobileMenu";

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
        {/* TOP LICENSE STRIP — sticky (ONLY this part) */}
        <div className="sticky top-0 z-50 bg-blue-600 text-white py-2 shadow-sm">
          <div className="mx-auto w-[min(1200px,94%)] flex items-center justify-between">
            <div className="flex items-center gap-6 text-sm">
              <span>Roofing License: <strong>#{license}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="font-medium">{phone}</span>
            </div>
          </div>
        </div>

        {/* MAIN HEADER — NOT sticky, scrolls away */}
        <header className="bg-slate-800 border-b border-slate-700 shadow-lg">
          <div className="mx-auto w-[min(1200px,94%)] py-4">
            <div className="flex items-center justify-between">
                {/* Logo */}
                <a className="flex items-center gap-3 hover:scale-105 transition-transform duration-200" href="/">
                  <div className="flex items-center gap-2">
                    <span className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white font-bold text-lg">
                      JP
                    </span>
                    <div>
                      <div className="text-xl font-bold text-white">JP Pro Services</div>
                      <div className="text-xs text-slate-300 -mt-1">PROFESSIONAL ROOFING SOLUTIONS</div>
                    </div>
                  </div>
                </a>
                
                {/* Centered Navigation */}
                <nav className="hidden lg:flex items-center justify-center flex-1 mx-12" aria-label="Main">
                  <div className="flex items-center gap-8 text-slate-300 font-medium">
                    {/* Services Dropdown */}
                    <div className="relative group">
                      <button className="flex items-center gap-1 hover:text-blue-400 transition-colors duration-200 py-2">
                        Services
                        <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <div className="absolute top-full left-0 mt-1 w-56 bg-white border border-slate-200 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        <div className="py-2">
                          <a href="#residential" className="block px-4 py-3 text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">Residential Roofing</a>
                          <a href="#commercial" className="block px-4 py-3 text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">Commercial Roofing</a>
                          <a href="#emergency" className="block px-4 py-3 text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">Emergency Repairs</a>
                          <a href="#replacement" className="block px-4 py-3 text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">Roof Replacement</a>
                          <a href="#storm" className="block px-4 py-3 text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">Storm Damage</a>
                        </div>
                      </div>
                    </div>

                    {/* Roof Types Dropdown */}
                    <div className="relative group">
                      <button className="flex items-center gap-1 hover:text-blue-400 transition-colors duration-200 py-2">
                        Roof Types
                        <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-slate-200 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        <div className="py-2">
                          <a href="#asphalt" className="block px-4 py-3 text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">Asphalt Shingles</a>
                          <a href="#metal" className="block px-4 py-3 text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">Metal Roofing</a>
                          <a href="#tile" className="block px-4 py-3 text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">Tile & Slate</a>
                          <a href="#flat" className="block px-4 py-3 text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">Flat Roofing</a>
                        </div>
                      </div>
                    </div>

                    <a href="#locations" className="hover:text-blue-400 transition-colors duration-200 py-2">Locations</a>
                    <a href="#financing" className="hover:text-blue-400 transition-colors duration-200 py-2">Financing</a>
                    <a href="#gallery" className="hover:text-blue-400 transition-colors duration-200 py-2">Gallery</a>
                    <a href="#blog" className="hover:text-blue-400 transition-colors duration-200 py-2">Blog</a>
                    <a href="#faq" className="hover:text-blue-400 transition-colors duration-200 py-2">FAQs</a>
                  </div>
                </nav>

                {/* CTA Button */}
                <div className="hidden lg:block">
                  <a
                    href={`tel:${phoneHref}`}
                    className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
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
                  <span className="h-6 w-6 rounded bg-gradient-to-br from-blue-800 to-emerald-400" />
                  <span className="font-semibold text-white">JP Pro Services</span>
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
      </body>
    </html>
  );
}