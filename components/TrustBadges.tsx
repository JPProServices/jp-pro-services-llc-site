type Props = { size?: "sm" | "lg" };

export default function TrustBadges({ size = "sm" }: Props) {
  const base = "inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100";
  const lg = "px-4 py-3 text-base";
  return (
    <div className="flex flex-wrap items-center gap-3">
      {/* Replace placeholders with official client-provided assets and link to their profiles */}
      <span className={`${base} ${size === "lg" ? lg : ""}`} title="BBB Accredited">BBB ✓</span>
      <span className={`${base} ${size === "lg" ? lg : ""}`} title="GAF Certified">GAF</span>
      <span className={`${base} ${size === "lg" ? lg : ""}`} title="Licensed & Insured">Licensed • Insured</span>
    </div>
  );
}