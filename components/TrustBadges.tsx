import type { ReactNode } from "react";

import BBBSeal from "@/components/BBBSeal";

type Props = {
  size?: "sm" | "lg";
  showLicensedBadge?: boolean;
};

function ShieldCheckIcon() {
  return (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M12 3l7 3v5c0 4.97-3.05 8.95-7 10-3.95-1.05-7-5.03-7-10V6l7-3z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.5 12.5l1.75 1.75L14.75 10.75" />
    </svg>
  );
}

function BadgePill({
  accentClassName,
  children,
  icon,
  size,
}: {
  accentClassName: string;
  children: ReactNode;
  icon: ReactNode;
  size: "sm" | "lg";
}) {
  const iconSize = size === "lg" ? "h-10 w-10 text-base" : "h-9 w-9 text-sm";
  const pillSize = size === "lg" ? "min-h-[58px] px-4 py-3 text-base" : "min-h-[52px] px-3.5 py-2.5 text-sm";

  return (
    <span
      className={`inline-flex items-center gap-3 rounded-xl border border-white/15 bg-black/45 text-white shadow-lg shadow-black/20 backdrop-blur-md ${pillSize}`}
    >
      <span className={`inline-flex items-center justify-center rounded-lg text-white shadow-sm ${iconSize} ${accentClassName}`}>
        {icon}
      </span>
      <span className="font-semibold tracking-tight">{children}</span>
    </span>
  );
}

export default function TrustBadges({ size = "sm", showLicensedBadge = true }: Props) {
  const sealHeight = size === "lg" ? "h-[46px]" : "h-[38px]";
  const gafHeight = size === "lg" ? "h-[72px]" : "h-[60px]";

  return (
    <div className="flex flex-wrap items-center gap-4">
      <BBBSeal className="inline-flex" imageClassName={`${sealHeight} w-auto`} />
      <img
        src="/GAF_Certified_Residential.png"
        alt="GAF Certified Residential Roofing Contractor"
        className={`${gafHeight} w-auto drop-shadow-lg`}
      />
      {showLicensedBadge ? (
        <BadgePill
          size={size}
          accentClassName="bg-blue-700"
          icon={<ShieldCheckIcon />}
        >
          Licensed & Insured
        </BadgePill>
      ) : null}
    </div>
  );
}
