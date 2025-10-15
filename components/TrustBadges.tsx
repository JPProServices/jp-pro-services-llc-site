type Props = { size?: "sm" | "lg" };

export default function TrustBadges({ size = "sm" }: Props) {
  const base = "inline-flex items-center gap-2 rounded-lg border border-slate-600 bg-black px-3 py-2 text-white";
  const lg = "px-4 py-3 text-base";
  return (
    <div className="flex flex-wrap items-center gap-3">
      {/* Replace placeholders with official client-provided assets and link to their profiles */}
      <span className={`${base} ${size === "lg" ? lg : ""}`} title="BBB Accredited">
        <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">B</div>
        BBB Accredited
      </span>
      <span className={`${base} ${size === "lg" ? lg : ""}`} title="GAF Certified">
        <div className="w-5 h-5 bg-red-600 rounded flex items-center justify-center text-white text-xs font-bold">G</div>
        GAF Certified
      </span>
      <span className={`${base} ${size === "lg" ? lg : ""}`} title="Licensed & Insured">
        <div className="w-5 h-5 bg-yellow-500 rounded flex items-center justify-center text-white text-xs font-bold">★</div>
        Licensed • Insured
      </span>
    </div>
  );
}