import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import MobileMenu from "@/components/MobileMenu";
import ButtonEffects from "@/components/ButtonEffects";
import ScrollHeader from "@/components/ScrollHeader";
import DesktopNav from "@/components/DesktopNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JP Pro Services - Roofing & Renovations",
  description: "Top-rated roofing company in Middle Tennessee."
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const phone = process.env.NEXT_PUBLIC_COMPANY_PHONE_DISPLAY || "(615) 636-6126";
  const phoneHref =
    process.env.NEXT_PUBLIC_COMPANY_PHONE || "+1-615-636-6126";

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        {/* MAIN HEADER — NOW sticky with dynamic transparency */}
        <header id="main-header" className="sticky top-0 z-50 shadow-xl transition-all duration-300" style={{ 
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
                
                <DesktopNav />

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

        <footer className="bg-zinc-900 border-t border-zinc-700 py-6 text-slate-400">
          <div className="mx-auto w-[min(1200px,94%)]">
            {/* Mobile Footer - Centered logo and copyright only */}
            <div className="flex flex-col items-center gap-4 md:hidden">
              <img 
                src="/jp_golden_logo.png" 
                alt="JP Pro Services Logo" 
                className="h-10 w-auto"
              />
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
                <span className="text-slate-300">Middle Tennessee's Trusted Roofing Company</span>
                <a href={`tel:${phoneHref}`} className="text-yellow-400 hover:text-yellow-300 font-medium transition-colors duration-200">
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
