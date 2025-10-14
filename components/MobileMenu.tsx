"use client";
import { useState } from "react";

type Props = {
  phone: string;
  phoneHref: string;
};

export default function MobileMenu({ phone, phoneHref }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="lg:hidden relative">
      <button 
        className="p-2 hover:bg-slate-700 rounded-md transition-colors duration-200"
        onClick={toggleMenu}
        aria-label="Toggle mobile menu"
      >
        <svg className="w-6 h-6 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      
      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50" onClick={closeMenu}>
          <div className="bg-slate-800 w-64 h-full shadow-lg" onClick={(e) => e.stopPropagation()}>
            <div className="p-4 border-b border-slate-700">
              <div className="flex items-center justify-between">
                <span className="text-white font-semibold">Menu</span>
                <button 
                  className="p-1 hover:bg-slate-700 rounded"
                  onClick={closeMenu}
                  aria-label="Close menu"
                >
                  <svg className="w-5 h-5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <nav className="p-4 space-y-2">
              <a href="/residential-roofing" className="block py-3 px-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded transition-colors" onClick={closeMenu}>Residential Roofing</a>
              <a href="/commercial-roofing" className="block py-3 px-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded transition-colors" onClick={closeMenu}>Commercial Roofing</a>
              <a href="/asphalt-shingles" className="block py-3 px-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded transition-colors" onClick={closeMenu}>Asphalt Shingles</a>
              <a href="/metal-roofing" className="block py-3 px-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded transition-colors" onClick={closeMenu}>Metal Roofing</a>
              <a href="/tile-slate" className="block py-3 px-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded transition-colors" onClick={closeMenu}>Tile & Slate</a>
              <a href="/flat-roofing" className="block py-3 px-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded transition-colors" onClick={closeMenu}>Flat Roofing</a>
              <a href="/#locations" className="block py-3 px-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded transition-colors" onClick={closeMenu}>Locations</a>
              <a href="/gallery" className="block py-3 px-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded transition-colors" onClick={closeMenu}>Gallery</a>
              <a href="/#faq" className="block py-3 px-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded transition-colors" onClick={closeMenu}>FAQs</a>
              <div className="pt-4 border-t border-slate-700">
                <a 
                  href={`tel:${phoneHref}`} 
                  className="btn-gold block px-4 py-3 rounded-lg font-semibold text-center"
                >
                  Call {phone}
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}