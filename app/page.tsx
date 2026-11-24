import Image from "next/image";
import type { ReactNode } from "react";

import Hero from "@/components/Hero";
import HeroMedia from "@/components/HeroMedia";
import LeadCTA from "@/components/LeadCTA";
import TrustBadges from "@/components/TrustBadges";
import FAQ from "@/components/FAQ";
import BBBSeal from "@/components/BBBSeal";
import { services } from "@/components/services";

function TrustMetricCard({
  badge,
  eyebrow,
  title,
  description,
}: {
  badge: ReactNode;
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-2xl border border-zinc-800 bg-zinc-950/80 p-6 text-left shadow-[0_20px_60px_rgba(0,0,0,0.28)] transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700">
      <div className="mb-5 flex h-16 items-center">{badge}</div>
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">{eyebrow}</p>
      <div className="mt-3 text-3xl font-extrabold tracking-tight text-white">{title}</div>
      <p className="mt-2 max-w-[18rem] text-base leading-relaxed text-slate-300">{description}</p>
    </div>
  );
}

function MetricIcon({
  accentClassName,
  children,
}: {
  accentClassName: string;
  children: ReactNode;
}) {
  return (
    <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg shadow-black/20 ${accentClassName}`}>
      {children}
    </div>
  );
}

function ShieldIcon() {
  return (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 3l7 3v5c0 4.97-3.05 8.95-7 10-3.95-1.05-7-5.03-7-10V6l7-3z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.5 12.5l1.75 1.75L14.75 10.75" />
    </svg>
  );
}

const reasons = [
  {
    title: "Licensed, Insured & Bonded",
    text: "Tennessee Home Improvement License #13503, BBB accredited and a GAF certified roofing contractor. Established in 2024 and led by an owner with 19 years of construction experience.",
  },
  {
    title: "Local to Nashville",
    text: "We work with homeowners within 50 miles of Nashville, from our office on Foster Avenue.",
  },
  {
    title: "Products We Trust",
    text: "GAF for roofing, Trex and TimberTech for decks. We walk you through the options during your free estimate.",
  },
  {
    title: "Customer-First Service",
    text: "Free estimates, transparent pricing and responsive support. Our office is open Monday–Saturday, 8:00 AM–4:00 PM.",
  },
];

export default function HomePage() {
  const phoneDisplay = "(615) 956-4920";
  return (
    <main>
      {/* Hero: drone photo now, background video once the client's footage arrives */}
      <section className="relative isolate min-h-[80vh]">
        <HeroMedia poster="/images/roofing/roof-2026-11-hero.jpg" />
        <div className="relative z-10 mx-auto w-[min(1200px,94%)] grid items-start gap-8 py-10 md:grid-cols-2 md:py-14">
          <Hero />
          <div className="md:pt-6">
            <LeadCTA />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-black py-16">
        <div className="mx-auto w-[min(1200px,94%)]">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Four services, one crew you can trust from the roof to the backyard.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {services.map((service) => (
              <a
                key={service.slug}
                href={`/${service.slug}`}
                className="group flex flex-col overflow-hidden rounded-xl border border-white/15 bg-white/10 shadow-2xl transition-all duration-300 hover:bg-white/15"
              >
                <div className="relative aspect-[16/9] bg-gradient-to-br from-blue-700 to-blue-600">
                  {service.image ? (
                    <Image
                      src={service.image.src}
                      alt={service.image.alt}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center p-6 text-center text-blue-100">
                      [{service.shortName} photo: coming from Jessica]
                    </div>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-2xl font-semibold text-white">{service.name}</h3>
                  <p className="mt-2 text-slate-300">{service.summary}</p>
                  <ul className="mt-4 space-y-2 text-slate-300">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center">
                        <span className="text-yellow-500 mr-2">•</span> {bullet}
                      </li>
                    ))}
                    <li className="flex items-center">
                      <span className="text-yellow-500 mr-2">•</span> {service.warranty}
                    </li>
                  </ul>
                  <span className="mt-6 inline-flex items-center gap-2 font-semibold text-yellow-400">
                    Explore {service.shortName}
                    <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Stats Bar */}
      <section className="bg-black md:bg-gradient-to-r md:from-zinc-900 md:to-black py-12 border-y border-zinc-700">
        <div className="mx-auto w-[min(1200px,94%)]">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            <TrustMetricCard
              badge={
                <MetricIcon accentClassName="bg-yellow-500 text-black">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21h18M5 21V10l7-6 7 6v11M9 21v-6h6v6" />
                  </svg>
                </MetricIcon>
              }
              eyebrow="Owner Experience"
              title="19 Years"
              description="Hands-on construction experience behind every project we take on."
            />
            <TrustMetricCard
              badge={<MetricIcon accentClassName="bg-blue-700"><ShieldIcon /></MetricIcon>}
              eyebrow="Roofing Warranty"
              title="5 + 50 Years"
              description="5 years on labor and 50 years on materials for every roof."
            />
            <TrustMetricCard
              badge={<MetricIcon accentClassName="bg-blue-600"><ShieldIcon /></MetricIcon>}
              eyebrow="All Other Work"
              title="2 Years"
              description="Labor warranty on decks, fencing, siding and remodeling."
            />
            <TrustMetricCard
              badge={
                <div className="inline-flex rounded-2xl bg-white p-2 shadow-lg shadow-black/20 ring-1 ring-black/10">
                  <BBBSeal imageClassName="h-[42px] w-auto" />
                </div>
              }
              eyebrow="Better Business Bureau"
              title="Accredited"
              description="Official BBB accredited business seal linked directly to the live BBB profile."
            />
          </div>

          <div className="mt-10 border-t border-zinc-800 pt-8">
            <div className="mb-4 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Credentials & Coverage</p>
            </div>
            <div className="flex justify-center">
              <TrustBadges size="lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-black py-16">
        <div className="mx-auto w-[min(1200px,94%)]">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose JP Pro Services?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reasons.map((reason) => (
              <div key={reason.title} className="bg-white/10 backdrop-blur rounded-xl p-8 shadow-2xl hover:bg-white/15 transition-all duration-300 border border-white/15">
                <h3 className="text-xl font-semibold text-white mb-3">{reason.title}</h3>
                <p className="text-slate-300 leading-relaxed">{reason.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews: real Google reviews go here once Jessica picks them */}
      <section className="bg-black py-16">
        <div className="mx-auto w-[min(1200px,94%)]">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">What Our Customers Say</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">Reviews from our customers on Google.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((n) => (
              <figure key={n} className="flex h-full flex-col rounded-lg border border-white/15 bg-white/10 p-6 shadow-2xl">
                <blockquote className="flex-grow text-slate-300 italic">
                  [Real Google review {n}, copied word for word]
                </blockquote>
                <figcaption className="mt-4">
                  <p className="font-semibold text-white">[Reviewer name as shown on Google]</p>
                  <p className="text-slate-400 text-sm">Google review</p>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a
              href="https://www.google.com/search?q=JP+Pro+Services+Nashville"
              className="inline-flex items-center gap-2 font-semibold text-yellow-400 hover:text-yellow-300"
            >
              Read our reviews on Google <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Insurance help: secondary, seasonal */}
      <section className="bg-zinc-900 py-10 border-y border-zinc-800">
        <div className="mx-auto flex w-[min(1200px,94%)] flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h2 className="text-xl font-semibold text-white">Storm damage on your roof?</h2>
            <p className="mt-1 text-slate-300">We have experience handling insurance claims and work with your adjuster.</p>
          </div>
          <a href="/storm-damage" className="font-semibold text-yellow-400 hover:text-yellow-300">
            Storm damage &amp; insurance claims →
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-black py-16">
        <div className="mx-auto w-[min(1200px,94%)]">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          </div>
          <FAQ />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-black py-16">
        <div className="mx-auto w-[min(1200px,94%)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="mb-2 text-3xl font-bold text-white">Contact Us</h2>
              <p className="mb-6 text-slate-300 text-lg">
                Quick question or request? Send us a message and we'll get back to you.
              </p>
              <LeadCTA variant="inline" kind="contact" />
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Visit or Call</h3>
                <div className="bg-white/10 backdrop-blur rounded-lg p-6 space-y-4 border border-white/15">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="text-white font-medium">2803 Foster Ave, Suite 101</p>
                      <p className="text-slate-300">Nashville, TN 37210</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-white font-medium">Office Hours</p>
                      <p className="text-slate-300">Mon–Sat: 8:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Our Services</h3>
                <div className="grid grid-cols-2 gap-3">
                  {services.map((service) => (
                    <a
                      key={service.slug}
                      href={`/${service.slug}`}
                      className="rounded-lg border border-white/15 bg-white/10 p-4 text-sm font-medium text-white transition-all duration-300 hover:bg-white/15 hover:text-yellow-400"
                    >
                      {service.shortName}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Get In Touch</h3>
                <div className="space-y-3">
                  <a href="tel:+16159564920" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors duration-200">
                    <div className="bg-white/10 backdrop-blur p-2 rounded-lg border border-white/15">
                      <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <span className="font-medium">{phoneDisplay}</span>
                  </a>
                  <a href="mailto:jpproservicesllc2024@gmail.com" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors duration-200">
                    <div className="bg-white/10 backdrop-blur p-2 rounded-lg border border-white/15">
                      <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="font-medium">jpproservicesllc2024@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
