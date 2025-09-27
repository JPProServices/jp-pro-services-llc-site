import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JP Pro Services – Roofing & Waterproofing",
  description:
    "Modern, clean, conversion-focused roofing website. Free inspection / estimate. Licensed & insured.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const license = process.env.NEXT_PUBLIC_LICENSE_NUMBER || "TN-XXXXX";
  const phone = process.env.NEXT_PUBLIC_COMPANY_PHONE_DISPLAY || "(615) 555-0192";
  const phoneHref = process.env.NEXT_PUBLIC_COMPANY_PHONE || "+1-615-555-0192";

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Top strip */}
        <div className="bg-blue-600 text-white">
          <div className="mx-auto w-[min(1200px,94%)] flex items-center justify-between gap-3 py-2">
            <small>Roofing License: <strong>#{license}</strong></small>
            <a
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 font-bold text-slate-900"
              href={`tel:${phoneHref}`}
              aria-label={`Call JP Pro Services at ${phone}`}
            >
              {phone}
            </a>
          </div>
        </div>

        {/* Sticky header */}
        <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-900/80 backdrop-blur">
          <div className="mx-auto w-[min(1200px,94%)] flex items-center justify-between py-3 text-slate-100">
            <a className="flex items-center gap-2 font-extrabold tracking-tight" href="/">
              <span className="h-7 w-7 rounded-md bg-gradient-to-br from-blue-600 to-emerald-400" />
              JP Pro Services
            </a>
            <nav className="hidden gap-5 text-slate-300 md:flex" aria-label="Main">
              <a href="#services" className="hover:text-white">Services</a>
              <a href="#types" className="hover:text-white">Roof Types</a>
              <a href="#financing" className="hover:text-white">Financing</a>
              <a href="#gallery" className="hover:text-white">Gallery</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </nav>
          </div>
        </header>

        {children}

        <footer className="border-t border-white/10 py-10 text-slate-400">
          <div className="mx-auto w-[min(1200px,94%)] flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} JP Pro Services</p>
            <div className="flex gap-4">
              <a href="#privacy" className="hover:text-white">Privacy Policy</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}