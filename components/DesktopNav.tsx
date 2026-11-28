"use client";

import { useEffect, useRef, useState } from "react";

import { roofingMenu, services } from "@/components/services";

type MenuKey = "roofing" | null;

type NavItem = {
  href: string;
  label: string;
};

const serviceLinks: NavItem[] = services
  .filter((service) => service.slug !== "roofing-gutters")
  .map((service) => ({ href: `/${service.slug}`, label: service.shortName }));

function RoofingMenu({
  isOpen,
  onToggle,
  onOpen,
  onClose,
}: {
  isOpen: boolean;
  onToggle: () => void;
  onOpen: () => void;
  onClose: () => void;
}) {
  return (
    <div className="relative" onMouseEnter={onOpen} onMouseLeave={onClose}>
      <button
        type="button"
        className="nav-link-gold flex items-center gap-1 whitespace-nowrap py-2"
        aria-expanded={isOpen}
        aria-controls="roofing-menu"
        onClick={onToggle}
      >
        Roofing &amp; Gutters
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* pt-2 instead of a margin keeps the pointer inside the hover area on the way down */}
      <div
        id="roofing-menu"
        className={`absolute left-0 top-full z-50 pt-2 transition-all duration-200 ${
          isOpen ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="w-[30rem] rounded-lg border border-zinc-600/50 bg-black/95 p-3 shadow-2xl"
          style={{ backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}
        >
          <a
            href="/roofing-gutters"
            className="flex items-center justify-between rounded-md px-3 py-2.5 font-semibold text-white transition-colors duration-200 hover:bg-zinc-700/60 hover:text-yellow-400"
            onClick={onClose}
          >
            All roofing &amp; gutters
            <span aria-hidden>→</span>
          </a>
          <div className="mt-2 grid grid-cols-2 gap-2 border-t border-zinc-700 pt-3">
            {roofingMenu.map((group) => (
              <div key={group.title}>
                <p className="px-3 pb-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{group.title}</p>
                {group.links.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-sm text-white transition-colors duration-200 hover:bg-zinc-700/60 hover:text-yellow-400"
                    onClick={onClose}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DesktopNav() {
  const [openMenu, setOpenMenu] = useState<MenuKey>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // A short delay forgives diagonal mouse moves toward the dropdown.
  const openRoofing = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu("roofing");
  };
  const closeRoofingSoon = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu((current) => (current === "roofing" ? null : current)), 150);
  };

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
        <RoofingMenu
          isOpen={openMenu === "roofing"}
          onToggle={() => setOpenMenu((current) => (current === "roofing" ? null : "roofing"))}
          onOpen={openRoofing}
          onClose={closeRoofingSoon}
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
