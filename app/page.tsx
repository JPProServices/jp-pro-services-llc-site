import Hero from "@/components/Hero";
import LeadCTA from "@/components/LeadCTA";
import TrustBadges from "@/components/TrustBadges";

export default function HomePage() {
  return (
    <main>
      <section className="relative min-h-[84vh]">
        <Hero />
        <div className="relative z-10 mx-auto grid w-[min(1200px,94%)] grid-cols-1 gap-6 py-10 md:grid-cols-[1.15fr_.85fr] md:py-14">
          <aside className="order-[-1] md:order-none">
            <LeadCTA />
          </aside>
        </div>
      </section>

      <section className="mx-auto w-[min(1200px,94%)] py-10" id="services">
        <div className="mb-4 text-sm uppercase tracking-wide text-slate-400">Top Services</div>
        <div className="flex flex-wrap gap-3">
          {["Roof Replacement", "Roof Repair", "Storm Damage"].map((t) => (
            <a key={t} href="#contact"
               className="rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-slate-200 hover:border-slate-500">
              {t}
            </a>
          ))}
        </div>
        <div className="mt-10">
          <TrustBadges size="lg" />
        </div>
      </section>

      <section id="contact" className="bg-slate-950 py-12">
        <div className="mx-auto w-[min(1200px,94%)]">
          <h2 className="mb-2 text-2xl font-semibold text-white">Request your FREE inspection today</h2>
          <p className="mb-6 text-slate-300">Fast scheduling, clear quotes, licensed & insured professionals.</p>
          <div className="max-w-xl">
            <LeadCTA variant="inline" />
          </div>
        </div>
      </section>
    </main>
  );
}