"use client";

import { useEffect, useRef, useState } from "react";

type MenuKey = "services" | "roofTypes" | null;

type NavItem = {
  href: string;
  label: string;
};

const servicesItems: NavItem[] = [
  { href: "/residential-roofing", label: "Residential Roofing" },
  { href: "/commercial-roofing", label: "Commercial Roofing" },
  { href: "/roof-repair", label: "Roof Repair" },
  { href: "/roof-replacement", label: "Roof Replacement" },
  { href: "/storm-damage", label: "Storm Damage" },
];

const roofTypeItems: NavItem[] = [
  { href: "/asphalt-shingles", label: "Asphalt Shingles" },
  { href: "/metal-roofing", label: "Metal Roofing" },
  { href: "/tile-slate", label: "Tile & Slate" },
  { href: "/flat-roofing", label: "Flat Roofing" },
];

function DropdownMenu({
  id,
  label,
  items,
  isOpen,
  onToggle,
  onOpen,
  onClose,
}: {
  id: Exclude<MenuKey, null>;
  label: string;
  items: NavItem[];
  isOpen: boolean;
  onToggle: () => void;
  onOpen: () => void;
  onClose: () => void;
}) {
  return (
    <div
      className="relative"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      <button
        type="button"
        className="nav-link-gold flex items-center gap-1 py-2"
        aria-expanded={isOpen}
        aria-controls={`${id}-menu`}
        onClick={onToggle}
      >
        {label}
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div
        id={`${id}-menu`}
        className={`absolute top-full left-0 mt-1 rounded-lg border border-zinc-600/50 bg-black/90 shadow-2xl transition-all duration-200 z-50 ${
          id === "services" ? "w-56" : "w-48"
        } ${isOpen ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"}`}
        style={{
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      >
        <div className="py-2">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="dropdown-item-gold block px-4 py-3 text-sm text-white hover:bg-zinc-700/60 hover:text-yellow-400 transition-all duration-200 hover:backdrop-blur-sm"
              onClick={onClose}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function DesktopNav() {
  const [openMenu, setOpenMenu] = useState<MenuKey>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenMenu(null);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <nav className="hidden lg:flex items-center justify-center flex-1 mx-12" aria-label="Main">
      <div ref={navRef} className="flex items-center gap-8 text-slate-300 font-medium">
        <DropdownMenu
          id="services"
          label="Services"
          items={servicesItems}
          isOpen={openMenu === "services"}
          onToggle={() => setOpenMenu((current) => (current === "services" ? null : "services"))}
          onOpen={() => setOpenMenu("services")}
          onClose={() => setOpenMenu((current) => (current === "services" ? null : current))}
        />

        <DropdownMenu
          id="roofTypes"
          label="Roof Types"
          items={roofTypeItems}
          isOpen={openMenu === "roofTypes"}
          onToggle={() => setOpenMenu((current) => (current === "roofTypes" ? null : "roofTypes"))}
          onOpen={() => setOpenMenu("roofTypes")}
          onClose={() => setOpenMenu((current) => (current === "roofTypes" ? null : current))}
        />

        <a href="/gallery" className="nav-link-gold py-2">Gallery</a>
        <a href="/#faq" className="nav-link-gold py-2">FAQs</a>
      </div>
    </nav>
  );
}
