import BBBSeal from "@/components/BBBSeal";

type Props = {
  size?: "sm" | "lg";
  showLicensedBadge?: boolean;
};

// Very light shadow so the transparent logos lift off busy photo backgrounds.
const LOGO_SHADOW = "drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]";

function Dot() {
  return <span aria-hidden="true" className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-500" />;
}

export default function TrustBadges({ size = "sm", showLicensedBadge = true }: Props) {
  const sealHeight = size === "lg" ? "h-[46px]" : "h-[38px]";
  const gafHeight = size === "lg" ? "h-[80px]" : "h-[66px]";
  const textSize = size === "lg" ? "text-base" : "text-sm";

  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
      <BBBSeal className="inline-flex" imageClassName={`${sealHeight} w-auto ${LOGO_SHADOW}`} />
      <Dot />
      <img
        src="/GAF_Certified_Residential.png"
        alt="GAF Certified Residential Roofing Contractor"
        className={`${gafHeight} w-auto ${LOGO_SHADOW}`}
      />
      {showLicensedBadge ? (
        <>
          <Dot />
          <span className={`inline-flex items-center gap-2 font-semibold tracking-tight text-white ${textSize}`}>
            <svg className="h-5 w-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 3l7 3v5c0 4.97-3.05 8.95-7 10-3.95-1.05-7-5.03-7-10V6l7-3z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.5 12.5l1.75 1.75L14.75 10.75" />
            </svg>
            Licensed, Insured &amp; Bonded
          </span>
        </>
      ) : null}
    </div>
  );
}
