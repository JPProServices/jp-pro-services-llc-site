"use client";
import { useState } from "react";
import LeadCTA from "@/components/LeadCTA";
import ResidentialFAQ from "@/components/ResidentialFAQ";
import TrustBadges from "@/components/TrustBadges";

export default function ResidentialRoofingPage() {
  const [activeProcess, setActiveProcess] = useState<'insurance' | 'direct-pay'>('insurance');
  const phoneDisplay = process.env.NEXT_PUBLIC_COMPANY_PHONE_DISPLAY || "(615) 555-0192";

  return (
    <main>
      {/* Hero Section - Same Structure as Homepage */}
      <section className="relative min-h-[80vh]">
        <div aria-hidden className="absolute inset-0 -z-10">
          <img
            src="/hero.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/40" />
        </div>
        <div className="relative z-10 mx-auto w-[min(1200px,94%)] grid items-start gap-8 py-10 md:grid-cols-2 md:py-14">
          <div>
            {/* Top badges */}
            <div className="mb-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-lg bg-black/35 px-4 py-2 text-white backdrop-blur">
                ★ <span className="font-semibold">5.0 / 5</span>
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg bg-black/35 px-4 py-2 text-white backdrop-blur">
                🛡️ 25+ Year Product Warranties
              </span>
            </div>

            <h1 className="max-w-xl text-5xl font-extrabold leading-[1.05] tracking-tight text-white md:text-6xl">
              Trusted Residential Roofing in Nashville & Middle Tennessee
            </h1>

            <p className="mt-4 max-w-2xl text-lg text-slate-200">
              Protecting Middle Tennessee homes with premium materials, unmatched craftsmanship, and our industry-leading warranties. From leak repairs to full replacements.
            </p>

            <div className="mt-6">
              <TrustBadges />
            </div>
          </div>
          <div className="md:pt-6">
            <LeadCTA />
          </div>
        </div>
      </section>

      {/* Trust & Stats Bar */}
      <section className="bg-black md:bg-gradient-to-r md:from-zinc-900 md:to-black py-12 border-y border-zinc-700">
        <div className="mx-auto w-[min(1200px,94%)]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {/* Free Inspection */}
            <div className="group">
              <div className="flex items-center justify-center mb-3">
                <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-1">FREE</div>
              <div className="text-slate-300 font-medium">Roof Inspection</div>
            </div>

            {/* Installation Time */}
            <div className="group">
              <div className="flex items-center justify-center mb-3">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-1">1-2</div>
              <div className="text-slate-300 font-medium">Days Installation</div>
            </div>

            {/* Warranty */}
            <div className="group">
              <div className="flex items-center justify-center mb-3">
                <div className="bg-yellow-500 text-white rounded-full w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.922-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-1">25+ Years</div>
              <div className="text-slate-300 font-medium">Material Warranty</div>
            </div>

            {/* Insurance Help */}
            <div className="group">
              <div className="flex items-center justify-center mb-3">
                <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-1">100%</div>
              <div className="text-slate-300 font-medium">Insurance Assistance</div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Residential Roofing Problems */}
      <section className="bg-black py-16">
        <div className="mx-auto w-[min(1200px,94%)]">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Common Residential Roofing Issues We Solve</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              From Belle Meade to Bellevue, Middle Tennessee homeowners face unique roofing challenges. Here's how we solve them with expert craftsmanship.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Leak Repairs */}
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/15 hover:bg-white/15 transition-all duration-300">
              <div className="bg-gradient-to-br from-blue-700 to-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3c0 0-6 8-6 12 0 3.31 2.69 6 6 6s6-2.69 6-6c0-4-6-12-6-12z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Leak Repairs</h3>
              <p className="text-slate-300 mb-4">
                Water infiltration through damaged shingles, flashing, or seals around vents and chimneys. Critical for spring storms in Antioch and Mt. Juliet.
              </p>
              <div className="text-yellow-400 text-sm font-medium">✓ Emergency 24 hour response</div>
            </div>

            {/* Shingle Replacement */}
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/15 hover:bg-white/15 transition-all duration-300">
              <div className="bg-gradient-to-br from-blue-700 to-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Shingle Replacement</h3>
              <p className="text-slate-300 mb-4">
                Missing, cracked, or wind-damaged shingles. Common in Rutherford and Sumner Counties where high winds affect homes in Murfreesboro and Hendersonville.
              </p>
              <div className="text-yellow-400 text-sm font-medium">✓ Perfect color matching guaranteed</div>
            </div>

            {/* Storm Damage */}
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/15 hover:bg-white/15 transition-all duration-300">
              <div className="bg-gradient-to-br from-blue-700 to-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Storm Damage Restoration</h3>
              <p className="text-slate-300 mb-4">
                Hail, wind, and fallen tree damage from Tennessee's frequent storms. Especially common in exposed areas like Springfield and La Vergne.
              </p>
              <div className="text-yellow-400 text-sm font-medium">✓ Full insurance claim assistance</div>
            </div>

            {/* Flashing Repairs */}
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/15 hover:bg-white/15 transition-all duration-300">
              <div className="bg-gradient-to-br from-blue-700 to-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                {/* CC Attribution: Icon by Simon Goetz from svgviewer.dev */}
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 512 512">
                  <path d="M486.4,51.2H25.6C11.46,51.2,0,62.66,0,76.8v358.4c0,14.14,11.46,25.6,25.6,25.6h460.8c14.14,0,25.6-11.46,25.6-25.6V76.8    C512,62.66,500.54,51.2,486.4,51.2z M25.6,76.8h153.6v102.4H25.6V76.8z M25.6,204.8h307.2v102.4H25.6V204.8z M179.2,435.2H25.6    V332.8h153.6V435.2z M486.4,435.2H204.8V332.8h281.6V435.2z M486.4,307.2h-128V204.8h128V307.2z M486.4,179.2H204.8V76.8h281.6    V179.2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Flashing Repairs</h3>
              <p className="text-slate-300 mb-4">
                Metal strips around chimneys, vents, and valleys. Critical for historic homes in Franklin and Belle Meade with complex rooflines.
              </p>
              <div className="text-yellow-400 text-sm font-medium">✓ Premium galvanized materials</div>
            </div>

            {/* Gutter Services */}
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/15 hover:bg-white/15 transition-all duration-300">
              <div className="bg-gradient-to-br from-blue-700 to-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Gutter Installation & Repair</h3>
              <p className="text-slate-300 mb-4">
                Essential for Davidson County's heavy rainfall. Prevent roof and siding damage, especially in wooded areas like Green Hills.
              </p>
              <div className="text-yellow-400 text-sm font-medium">✓ Seamless aluminum gutters</div>
            </div>

            {/* Ventilation */}
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/15 hover:bg-white/15 transition-all duration-300">
              <div className="bg-gradient-to-br from-blue-700 to-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 512 512">
                  <g>
                    <g>
                      <path d="M507.111,255.326l-50.763-50.763V94.609c0-9.222-7.475-16.696-16.696-16.696H372.87c-9.22,0-16.696,7.475-16.696,16.696
                        v9.78L267.805,16.02c-6.519-6.519-17.091-6.519-23.611,0C238.116,22.099,13.778,246.436,4.89,255.325
                        c-6.52,6.519-6.52,17.091,0,23.611c6.519,6.519,17.091,6.519,23.611,0l27.152-27.15v232.389c0,9.22,7.475,16.696,16.696,16.696
                        h367.304c9.22,0,16.696-7.475,16.696-16.696V251.785l27.152,27.152c6.52,6.52,17.091,6.52,23.611,0
                        C513.631,272.418,513.631,261.846,507.111,255.326z M422.957,467.479H89.044V218.394L256.001,51.437
                        c8.681,8.681,158.347,158.347,166.957,166.957V467.479z M422.957,171.172l-33.391-33.391v-26.476h33.391V171.172z"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M256.001,166.957c-73.648,0-133.565,59.917-133.565,133.565s59.917,133.565,133.565,133.565
                        s133.565-59.917,133.565-133.565S329.648,166.957,256.001,166.957z M155.827,300.522c0-34.777,17.816-65.466,44.797-83.433
                        c-1.64,16.578,4.141,32.717,15.684,44.476c-9.862,10.046-15.959,23.8-15.959,38.956c0,12.275-9.986,22.261-22.261,22.261
                        S155.827,312.797,155.827,300.522z M256.001,400.696c-34.776,0-65.466-17.817-83.433-44.798
                        c16.511,1.635,32.672-4.096,44.476-15.683c10.046,9.862,23.8,15.959,38.957,15.959c12.275,0,22.261,9.986,22.261,22.261
                        S268.275,400.696,256.001,400.696z M256.001,322.783c-12.275,0-22.261-9.986-22.261-22.261s9.986-22.261,22.261-22.261
                        c12.275,0,22.261,9.986,22.261,22.261S268.275,322.783,256.001,322.783z M256.001,244.869c-12.275,0-22.261-9.986-22.261-22.261
                        c0-12.275,9.986-22.261,22.261-22.261c34.776,0.001,65.465,17.816,83.433,44.798c-16.511-1.635-32.672,4.096-44.476,15.683
                        C284.911,250.966,271.157,244.869,256.001,244.869z M311.377,383.955c1.64-16.578-4.141-32.717-15.684-44.476
                        c9.862-10.046,15.959-23.8,15.959-38.957c0-12.275,9.986-22.261,22.261-22.261c12.275,0,22.261,9.986,22.261,22.261
                        C356.174,335.298,338.358,365.987,311.377,383.955z"/>
                    </g>
                  </g>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Roof Ventilation Systems</h3>
              <p className="text-slate-300 mb-4">
                Critical for Middle Tennessee's high summer humidity. Prevents mold and extends roof life in homes throughout Brentwood and Gallatin.
              </p>
              <div className="text-yellow-400 text-sm font-medium">✓ Ridge, soffit & gable vents</div>
            </div>
          </div>
        </div>
      </section>

      {/* Roofing Materials for Nashville Homes */}
      <section className="bg-black py-16">
        <div className="mx-auto w-[min(1200px,94%)]">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Premium Materials for Nashville's Climate</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              We select materials specifically designed to withstand Tennessee's weather extremes, from summer heat to spring storms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Asphalt Shingles */}
            <div className="bg-white/10 backdrop-blur rounded-lg p-6 border border-white/15 text-center hover:bg-white/15 transition-all duration-300 h-full flex flex-col">
              <div className="bg-gradient-to-br from-blue-700 to-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Asphalt Shingles</h3>
              <p className="text-slate-300 text-sm mb-3 flex-grow">Cost-effective, durable, 20-30 year lifespan</p>
              <div className="text-yellow-400 font-medium mt-auto">GAF Certified</div>
            </div>

            {/* Metal Roofing */}
            <div className="bg-white/10 backdrop-blur rounded-lg p-6 border border-white/15 text-center hover:bg-white/15 transition-all duration-300 h-full flex flex-col">
              <div className="bg-gradient-to-br from-blue-700 to-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 59 56">
                  <path d="M58.452,19.188l-6.14-10.339c-0.003-0.005-0.009-0.008-0.012-0.013c-0.068-0.11-0.158-0.203-0.264-0.28
	c-0.017-0.013-0.033-0.025-0.051-0.037c-0.018-0.012-0.033-0.027-0.053-0.038L41.224,2.63c-0.364-0.199-0.814-0.152-1.131,0.119
	L5.83,32.163c-0.007,0.006-0.012,0.015-0.019,0.021c-0.013,0.012-0.023,0.026-0.035,0.039c-0.075,0.076-0.135,0.162-0.182,0.255
	c-0.007,0.013-0.019,0.021-0.025,0.034L0.088,44.737c-0.217,0.482-0.021,1.049,0.447,1.294l18.931,9.94
	c0.015,0.008,0.032,0.011,0.048,0.018c0.013,0.006,0.023,0.016,0.037,0.022c0.014,0.006,0.029,0.003,0.043,0.008
	c0.11,0.039,0.222,0.066,0.337,0.066c0.111,0,0.221-0.025,0.327-0.062c0.032-0.011,0.06-0.026,0.091-0.041
	c0.038-0.018,0.079-0.029,0.115-0.051c0.04-0.025,0.071-0.059,0.107-0.089c0.014-0.012,0.031-0.016,0.045-0.028l37.662-35.387
	C58.619,20.106,58.693,19.591,58.452,19.188z M40.871,4.716l8.867,4.846L19.109,37.259L8.35,32.636L40.871,4.716z M2.297,44.698
	l4.694-10.468l11.337,4.872l0.538,14.296L2.297,44.698z M20.848,52.852l-0.527-13.992l16.546-14.962l14.352-12.978l5.105,8.598
	L20.848,52.852z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Metal Roofing</h3>
              <p className="text-slate-300 text-sm mb-3 flex-grow">Long-lasting, energy-efficient, storm-resistant</p>
              <div className="text-yellow-400 font-medium mt-auto">Premium Option</div>
            </div>

            {/* Slate & Tile */}
            <div className="bg-white/10 backdrop-blur rounded-lg p-6 border border-white/15 text-center hover:bg-white/15 transition-all duration-300 h-full flex flex-col">
              <div className="bg-gradient-to-br from-blue-700 to-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Slate & Tile</h3>
              <p className="text-slate-300 text-sm mb-3 flex-grow">Historic homes in Belle Meade & Franklin</p>
              <div className="text-yellow-400 font-medium mt-auto">Historic Specialty</div>
            </div>

            {/* Gutters */}
            <div className="bg-white/10 backdrop-blur rounded-lg p-6 border border-white/15 text-center hover:bg-white/15 transition-all duration-300 h-full flex flex-col">
              <div className="bg-gradient-to-br from-blue-700 to-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Seamless Gutters</h3>
              <p className="text-slate-300 text-sm mb-3 flex-grow">Custom-fit aluminum, no leaks</p>
              <div className="text-yellow-400 font-medium mt-auto">Installation & Repair</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Residential Process */}
      <section className="bg-black py-16">
        <div className="mx-auto w-[min(1200px,94%)]">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Residential Roofing Process</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              We specialize in both insurance claims and retail projects. Choose your path below to see our tailored process.
            </p>
            
            {/* Process Type Tabs */}
            {/* Desktop Version */}
            <div className="hidden md:flex justify-center mt-8 mb-8">
              <div className="bg-white/10 backdrop-blur rounded-xl p-2 border border-white/15">
                <button 
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    activeProcess === 'insurance' 
                      ? 'bg-yellow-500 text-black' 
                      : 'text-white hover:bg-white/15'
                  }`}
                  onClick={() => setActiveProcess('insurance')}
                >
                  🛡️ Insurance
                </button>
                <button 
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    activeProcess === 'direct-pay' 
                      ? 'bg-yellow-500 text-black' 
                      : 'text-white hover:bg-white/15'
                  }`}
                  onClick={() => setActiveProcess('direct-pay')}
                >
                  💳 Retail
                </button>
              </div>
            </div>

            {/* Mobile Version with Arrow Navigation */}
            <div className="md:hidden flex items-center justify-center mt-8 mb-8 px-4">
              <button 
                onClick={() => setActiveProcess(activeProcess === 'insurance' ? 'direct-pay' : 'insurance')}
                className="p-2 text-yellow-400 hover:text-yellow-300 transition-colors"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <div className="bg-white/10 backdrop-blur rounded-xl border border-white/15 mx-4 flex-1 max-w-xs">
                <div className="bg-yellow-500 text-black rounded-xl px-6 py-4 text-center font-semibold">
                  {activeProcess === 'insurance' ? '🛡️ Insurance' : '💳 Retail'}
                </div>
              </div>
              
              <button 
                onClick={() => setActiveProcess(activeProcess === 'insurance' ? 'direct-pay' : 'insurance')}
                className="p-2 text-yellow-400 hover:text-yellow-300 transition-colors"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Insurance Process */}
          <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 ${activeProcess === 'insurance' ? '' : 'hidden'}`}>
            {/* Step 1 */}
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/15 mb-4 h-full flex flex-col">
                <div className="bg-yellow-500 text-black rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-xl">1</div>
                <h3 className="text-lg font-bold text-white mb-3">FREE Inspection</h3>
                <p className="text-slate-300 text-sm flex-grow">
                  Professional damage inspection with detailed documentation for your insurance claim. We handle all paperwork and communication with your adjuster.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/15 mb-4 h-full flex flex-col">
                <div className="bg-yellow-500 text-black rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-xl">2</div>
                <h3 className="text-lg font-bold text-white mb-3">Insurance Advocacy</h3>
                <p className="text-slate-300 text-sm flex-grow">
                  We work directly with your insurance company to ensure fair coverage. Most customers only pay their deductible, though some upgrades may require additional investment.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/15 mb-4 h-full flex flex-col">
                <div className="bg-yellow-500 text-black rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-xl">3</div>
                <h3 className="text-lg font-bold text-white mb-3">Professional Installation</h3>
                <p className="text-slate-300 text-sm flex-grow">
                  Expert installation by licensed, insured craftsmen. Daily progress updates and quality checkpoints throughout the project.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/15 mb-4 h-full flex flex-col">
                <div className="bg-yellow-500 text-black rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-xl">4</div>
                <h3 className="text-lg font-bold text-white mb-3">Final Inspection</h3>
                <p className="text-slate-300 text-sm flex-grow">
                  Thorough cleanup with magnetic nail sweep, debris removal, and comprehensive final walkthrough with warranty documentation.
                </p>
              </div>
            </div>
          </div>

          {/* Retail Process */}
          <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 ${activeProcess === 'direct-pay' ? '' : 'hidden'}`}>
            {/* Step 1 */}
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/15 mb-4 h-full flex flex-col">
                <div className="bg-yellow-500 text-black rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-xl">1</div>
                <h3 className="text-lg font-bold text-white mb-3">FREE Estimate</h3>
                <p className="text-slate-300 text-sm flex-grow">
                  Comprehensive roof assessment with detailed photos and condition report. Same-day evaluation and recommendations provided.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/15 mb-4 h-full flex flex-col">
                <div className="bg-yellow-500 text-black rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-xl">2</div>
                <h3 className="text-lg font-bold text-white mb-3">Transparent Quote</h3>
                <p className="text-slate-300 text-sm flex-grow">
                  Detailed written estimate with material specifications, timeline, and warranty information. No hidden fees or surprises.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/15 mb-4 h-full flex flex-col">
                <div className="bg-yellow-500 text-black rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-xl">3</div>
                <h3 className="text-lg font-bold text-white mb-3">Expert Installation</h3>
                <p className="text-slate-300 text-sm flex-grow">
                  Professional installation by licensed, insured craftsmen. Daily progress updates and quality checkpoints throughout.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/15 mb-4 h-full flex flex-col">
                <div className="bg-yellow-500 text-black rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-xl">4</div>
                <h3 className="text-lg font-bold text-white mb-3">Complete Cleanup</h3>
                <p className="text-slate-300 text-sm flex-grow">
                  Thorough cleanup with magnetic nail sweep, debris removal, and final walkthrough inspection with warranty documentation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Residential FAQ Section */}
      <section id="faq" className="bg-black py-16">
        <div className="mx-auto w-[min(1200px,94%)]">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Residential Roofing FAQs</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Common questions from Nashville homeowners about roof installation, repairs, and maintenance.
            </p>
          </div>
          
          <ResidentialFAQ />
        </div>
      </section>

      {/* Contact Section - Same as Homepage */}
      <section id="contact" className="bg-black py-16">
        <div className="mx-auto w-[min(1200px,94%)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Contact Form */}
            <div>
              <h2 className="mb-2 text-3xl font-bold text-white">Contact Us</h2>
              <p className="mb-6 text-slate-300 text-lg">
                Quick question or request? Send us a message and we'll get right back.
              </p>
              <div>
                <LeadCTA variant="inline" kind="contact" />
              </div>
            </div>

            {/* Right: Business Info & Quick Links */}
            <div className="space-y-8">
              {/* Business Hours & Location */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Visit Our Office</h3>
                <div className="bg-white/10 backdrop-blur rounded-lg p-6 space-y-4 border border-white/15 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="text-white font-medium">163 Quail DR</p>
                      <p className="text-slate-300">La Vergne, TN 37086</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-white font-medium">Business Hours</p>
                      <p className="text-slate-300">Mon-Sun: 8:00 AM - 5:00 PM</p>
                      <p className="text-slate-300 text-sm">Emergency Service: 24/7</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Services */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Our Services</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/10 backdrop-blur rounded-lg p-4 hover:bg-white/15 transition-all duration-300 border border-white/15">
                    <div className="flex items-center gap-2 text-yellow-400 mb-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                      </svg>
                      <span className="text-white text-sm font-medium">Residential</span>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur rounded-lg p-4 hover:bg-white/15 transition-all duration-300 border border-white/15">
                    <div className="flex items-center gap-2 text-yellow-400 mb-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <span className="text-white text-sm font-medium">Commercial</span>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur rounded-lg p-4 hover:bg-white/15 transition-all duration-300 border border-white/15">
                    <div className="flex items-center gap-2 text-yellow-400 mb-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-white text-sm font-medium">Emergency</span>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur rounded-lg p-4 hover:bg-white/15 transition-all duration-300 border border-white/15">
                    <div className="flex items-center gap-2 text-yellow-400 mb-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span className="text-white text-sm font-medium">Storm Repair</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Methods */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Get In Touch</h3>
                <div className="space-y-3">
                  <a href={`tel:${phoneDisplay.replace(/\D/g, '')}`} className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors duration-200">
                    <div className="bg-white/10 backdrop-blur p-2 rounded-lg border border-white/15 hover:bg-white/15 transition-all duration-300">
                      <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <span className="font-medium">{phoneDisplay}</span>
                  </a>
                  
                  <a href="mailto:info@jpproservices.com" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors duration-200">
                    <div className="bg-white/10 backdrop-blur p-2 rounded-lg border border-white/15 hover:bg-white/15 transition-all duration-300">
                      <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="font-medium">info@jpproservices.com</span>
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