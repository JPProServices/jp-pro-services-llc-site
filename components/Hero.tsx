import type { ReactNode } from "react";

import TrustBadges from "@/components/TrustBadges";

function HeroBadge({
  accentClassName,
  icon,
  text,
}: {
  accentClassName: string;
  icon: ReactNode;
  text: string;
}) {
  return (
    <span className="inline-flex items-center gap-3 rounded-xl border border-white/15 bg-black/45 px-3 py-2.5 text-white shadow-lg shadow-black/20 backdrop-blur-md">
      <span className={`inline-flex h-9 w-9 items-center justify-center rounded-lg text-white ${accentClassName}`}>
        {icon}
      </span>
      <span className="font-semibold tracking-tight">{text}</span>
    </span>
  );
}

export default function Hero() {
  return (
    <div>
      {/* Top badges */}
      <div className="mb-6 flex flex-wrap gap-3">
        <HeroBadge
          accentClassName="bg-yellow-500 text-black"
          icon={
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21h18M5 21V10l7-6 7 6v11M9 21v-6h6v6" />
            </svg>
          }
          text="19 Years of Construction Experience"
        />
        <HeroBadge
          accentClassName="bg-blue-700"
          icon={
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.8}
                d="M12 3l7 3v5c0 4.97-3.05 8.95-7 10-3.95-1.05-7-5.03-7-10V6l7-3z"
              />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.5 12.5l1.75 1.75L14.75 10.75" />
            </svg>
          }
          text="Insured & Bonded"
        />
      </div>

      <h1 className="max-w-xl text-5xl font-extrabold leading-[1.05] tracking-tight text-white md:text-6xl">
        Roofs, Decks &amp; Exteriors Built Right
      </h1>

      <p className="mt-4 max-w-xl text-lg text-slate-200">
        Roofing, gutters, decks, fencing, siding and remodeling for homeowners within 50 miles of Nashville.
      </p>

      <div className="mt-6">
        <TrustBadges showLicensedBadge={false} />
      </div>
    </div>
  );
}
