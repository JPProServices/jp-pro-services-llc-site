/* Replace /public/hero.jpg with a licensed or client-owned photo. */
import TrustBadges from "./TrustBadges";

export default function Hero() {
  const phone = process.env.NEXT_PUBLIC_COMPANY_PHONE_DISPLAY || "(615) 555-0192";
  const phoneHref = process.env.NEXT_PUBLIC_COMPANY_PHONE || "+1-615-555-0192";

  return (
    <>
      <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <img src="/hero.jpg" alt="" className="h-full w-full object-cover brightness-50" />
      </div>

      <div className="relative z-10 mx-auto w-[min(1200px,94%)] pt-10 md:pt-14">
        <div className="max-w-2xl">
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-sm text-white">
              ★ 4.9 / 5
            </span>
            <span className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-sm text-white">
              🛡️ 50-Year Product Warranties
            </span>
          </div>

          <h1 className="mb-3 text-4xl font-extrabold leading-tight text-white md:text-6xl">
            Top-Rated Roofing Company in Middle Tennessee
          </h1>
          <p className="mb-5 max-w-xl text-lg text-slate-200">
            Professional, reliable roofing solutions for your home or business. Fast inspections, clear quotes, quality craftsmanship.
          </p>

          <div className="mb-6">
            <TrustBadges />
          </div>

          <div className="flex flex-wrap gap-3">
            <a href="#contact"
               className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-3 font-bold text-white hover:brightness-110">
              Get a Free Estimate
            </a>
            <a href={`tel:${phoneHref}`} aria-label={`Call ${phone}`}
               className="inline-flex items-center rounded-lg border border-white/30 bg-white/10 px-5 py-3 font-semibold text-white backdrop-blur hover:bg-white/20">
              Call {phone}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}