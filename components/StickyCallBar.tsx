"use client";

import { useEffect, useState } from "react";

// Phone-only bar that appears once the hero (with its estimate form) has scrolled away.
export default function StickyCallBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.querySelector("main > section");
    if (!hero) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting));
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-white/15 bg-black/95 px-3 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "pointer-events-none translate-y-full"
      }`}
      aria-hidden={!visible}
    >
      <div className="grid grid-cols-2 gap-3">
        <a
          href="tel:+16159564920"
          tabIndex={visible ? 0 : -1}
          className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg border border-white/30 font-semibold text-white"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Call
        </a>
        <a
          href="#estimate"
          onClick={(event) => {
            // Pages without their own form (e.g. the gallery) send people to the homepage form.
            if (!document.getElementById("estimate")) {
              event.preventDefault();
              window.location.href = "/#estimate";
            }
          }}
          tabIndex={visible ? 0 : -1}
          className="btn-gold inline-flex min-h-[48px] items-center justify-center rounded-lg font-semibold"
        >
          Free Estimate
        </a>
      </div>
    </div>
  );
}
