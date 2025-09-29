import TrustBadges from "@/components/TrustBadges";

export default function Hero() {
  return (
    <div>
      {/* Top badges */}
      <div className="mb-6 flex flex-wrap gap-3">
        <span className="inline-flex items-center gap-2 rounded-lg bg-black/35 px-4 py-2 text-white backdrop-blur">
          ★ <span className="font-semibold">4.9 / 5</span>
        </span>
        <span className="inline-flex items-center gap-2 rounded-lg bg-black/35 px-4 py-2 text-white backdrop-blur">
          🛡️ 25+ Year Product Warranties
        </span>
      </div>

      <h1 className="max-w-xl text-5xl font-extrabold leading-[1.05] tracking-tight text-white md:text-6xl">
        Top-Rated Roofing Company in Middle Tennessee
      </h1>

      <p className="mt-4 max-w-2xl text-lg text-slate-200">
        Professional, reliable roofing solutions for your home or business.
        Fast inspections, clear quotes, quality craftsmanship.
      </p>

      <div className="mt-6">
        <TrustBadges />
      </div>
    </div>
  );
}