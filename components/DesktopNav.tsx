"use client";

import { useEffect, useRef, useState } from "react";

import { roofingPages, secondaryRoofingPages, services } from "@/components/services";

type MenuKey = "roofing" | null;

type NavItem = {
  href: string;
  label: string;
};

const roofingItems: NavItem[] = [
  { href: "/roofing-gutters", label: "Roofing & Gutters Overview" },
  ...roofingPages,
  ...secondaryRoofingPages,
];

const serviceLinks: NavItem[] = services
  .filter((service) => service.slug !== "roofing-gutters")
  .map((service) => ({ href: `/${service.slug}`, label: service.shortName }));

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
        className="nav-link-gold flex items-center gap-1 whitespace-nowrap py-2"
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
          "w-64"
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
    <nav className="hidden xl:flex items-center justify-center flex-1 mx-8" aria-label="Main">
      <div ref={navRef} className="flex items-center gap-6 text-slate-300 font-medium">
        <DropdownMenu
          id="roofing"
          label="Roofing & Gutters"
          items={roofingItems}
          isOpen={openMenu === "roofing"}
          onToggle={() => setOpenMenu((current) => (current === "roofing" ? null : "roofing"))}
          onOpen={() => setOpenMenu("roofing")}
          onClose={() => setOpenMenu((current) => (current === "roofing" ? null : current))}
        />

        {serviceLinks.map((link) => (
          <a key={link.href} href={link.href} className="nav-link-gold whitespace-nowrap py-2">{link.label}</a>
        ))}

        <a href="/gallery" className="nav-link-gold whitespace-nowrap py-2">Gallery</a>
        <a href="/#faq" className="nav-link-gold whitespace-nowrap py-2">FAQs</a>
      </div>
    </nav>
  );
}
