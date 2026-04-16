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
      className={`inline-flex items-center gap-3 rounded-xl border border-slate-200 bg-white/95 text-slate-900 shadow-lg shadow-black/10 ring-1 ring-black/5 backdrop-blur ${pillSize}`}
    >
      <span className={`inline-flex items-center justify-center rounded-lg text-white shadow-sm ${iconSize} ${accentClassName}`}>
        {icon}
      </span>
      <span className="font-semibold tracking-tight">{children}</span>
    </span>
  );
}

export default function TrustBadges({ size = "sm", showLicensedBadge = true }: Props) {
  const sealHeight = size === "lg" ? "h-[42px]" : "h-[36px]";
  const sealPadding = size === "lg" ? "px-4 py-3" : "px-3 py-2.5";

  return (
    <div className="flex flex-wrap items-center gap-3">
      <BBBSeal
        className={`inline-flex rounded-xl border border-slate-200 bg-white/95 shadow-lg shadow-black/10 ring-1 ring-black/5 backdrop-blur ${sealPadding}`}
        imageClassName={`${sealHeight} w-auto`}
      />
      <BadgePill
        size={size}
        accentClassName="bg-[#d7261e]"
        icon={<span className="text-[0.65em] font-black tracking-tight">GAF</span>}
      >
        GAF Certified
      </BadgePill>
      {showLicensedBadge ? (
        <BadgePill
          size={size}
          accentClassName="bg-slate-900"
          icon={<ShieldCheckIcon />}
        >
          Licensed & Insured
        </BadgePill>
      ) : null}
    </div>
  );
}
