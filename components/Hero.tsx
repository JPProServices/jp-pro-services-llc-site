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
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.922-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          }
          text="5.0 Customer Rating"
        />
        <HeroBadge
          accentClassName="bg-emerald-600"
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
          text="25+ Year Product Warranties"
        />
      </div>

      <h1 className="max-w-xl text-5xl font-extrabold leading-[1.05] tracking-tight text-white md:text-6xl">
        Nashville's Trusted Roofing Contractor
      </h1>

      <p className="mt-4 max-w-2xl text-lg text-slate-200">
        BBB-accredited Nashville roofing contractor - licensed, insured, and bonded. Delivering exceptional craftsmanship across Middle Tennessee for over two years.
      </p>

      <div className="mt-6">
        <TrustBadges showLicensedBadge={false} />
      </div>
    </div>
  );
}
