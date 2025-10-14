"use client";
import { useState } from "react";

type Props = {
  phone: string;
  phoneHref: string;
};

export default function MobileMenu({ phone, phoneHref }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [roofTypesOpen, setRoofTypesOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    setIsOpen(false);
    setServicesOpen(false);
    setRoofTypesOpen(false);
  };

  const toggleServices = () => setServicesOpen(!servicesOpen);
  const toggleRoofTypes = () => setRoofTypesOpen(!roofTypesOpen);

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
          <div className="bg-black w-64 h-full shadow-lg border-r border-zinc-700" onClick={(e) => e.stopPropagation()}>
            <div className="p-4 border-b border-zinc-700">
              <div className="flex items-center justify-between">
                <span className="text-white font-semibold">Menu</span>
                <button 
                  className="p-1 hover:bg-zinc-700 rounded"
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
              {/* Services Dropdown */}
              <div>
                <button 
                  onClick={toggleServices}
                  className="w-full flex items-center justify-between py-3 px-2 text-slate-300 hover:text-white hover:bg-zinc-700 rounded transition-colors text-left"
                >
                  <span>Services</span>
                  <svg className={`w-5 h-5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {servicesOpen && (
                  <div className="ml-4 mt-2 space-y-1">
                    <a href="/residential-roofing" className="block py-2 px-3 text-slate-400 hover:text-white hover:bg-zinc-700 rounded transition-colors text-sm" onClick={closeMenu}>Residential Roofing</a>
                    <a href="/commercial-roofing" className="block py-2 px-3 text-slate-400 hover:text-white hover:bg-zinc-700 rounded transition-colors text-sm" onClick={closeMenu}>Commercial Roofing</a>
                    <a href="/roof-repair" className="block py-2 px-3 text-slate-400 hover:text-white hover:bg-zinc-700 rounded transition-colors text-sm" onClick={closeMenu}>Roof Repair</a>
                    <a href="/roof-replacement" className="block py-2 px-3 text-slate-400 hover:text-white hover:bg-zinc-700 rounded transition-colors text-sm" onClick={closeMenu}>Roof Replacement</a>
                    <a href="/storm-damage" className="block py-2 px-3 text-slate-400 hover:text-white hover:bg-zinc-700 rounded transition-colors text-sm" onClick={closeMenu}>Storm Damage</a>
                  </div>
                )}
              </div>

              {/* Roof Types Dropdown */}
              <div>
                <button 
                  onClick={toggleRoofTypes}
                  className="w-full flex items-center justify-between py-3 px-2 text-slate-300 hover:text-white hover:bg-zinc-700 rounded transition-colors text-left"
                >
                  <span>Roof Types</span>
                  <svg className={`w-5 h-5 transition-transform duration-200 ${roofTypesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {roofTypesOpen && (
                  <div className="ml-4 mt-2 space-y-1">
                    <a href="/asphalt-shingles" className="block py-2 px-3 text-slate-400 hover:text-white hover:bg-zinc-700 rounded transition-colors text-sm" onClick={closeMenu}>Asphalt Shingles</a>
                    <a href="/metal-roofing" className="block py-2 px-3 text-slate-400 hover:text-white hover:bg-zinc-700 rounded transition-colors text-sm" onClick={closeMenu}>Metal Roofing</a>
                    <a href="/tile-slate" className="block py-2 px-3 text-slate-400 hover:text-white hover:bg-zinc-700 rounded transition-colors text-sm" onClick={closeMenu}>Tile & Slate</a>
                    <a href="/flat-roofing" className="block py-2 px-3 text-slate-400 hover:text-white hover:bg-zinc-700 rounded transition-colors text-sm" onClick={closeMenu}>Flat Roofing</a>
                  </div>
                )}
              </div>

              {/* Direct Links */}
              <a href="/gallery" className="block py-3 px-2 text-slate-300 hover:text-white hover:bg-zinc-700 rounded transition-colors" onClick={closeMenu}>Gallery</a>
              <a href="/#faq" className="block py-3 px-2 text-slate-300 hover:text-white hover:bg-zinc-700 rounded transition-colors" onClick={closeMenu}>FAQs</a>
              
              <div className="pt-4 border-t border-zinc-700">
                <a 
                  href={`tel:${phoneHref}`} 
                  className="btn-gold block px-4 py-3 rounded-lg font-semibold text-center"
                  onClick={closeMenu}
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