"use client";
import { useState } from "react";
import LeadCTA from "@/components/LeadCTA";
import TrustBadges from "@/components/TrustBadges";

export default function StormDamagePage() {
  const [openFAQs, setOpenFAQs] = useState<Set<number>>(new Set());

  const toggleFAQ = (index: number) => {
    setOpenFAQs(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const stormFAQs = [
    {
      question: "What should I do immediately after storm damage?",
      answer: "First, ensure everyone's safety. Then, document the damage with photos, contact your insurance company, and call us for emergency tarping to prevent further water damage."
    },
    {
      question: "Will my insurance cover storm damage repairs?",
      answer: "Most homeowner's insurance policies cover storm damage from wind, hail, and falling trees. We work directly with insurance adjusters and can help document damage for your claim."
    },
    {
      question: "How quickly can you respond to storm damage?",
      answer: "We offer 24/7 emergency response for severe storm damage. Our priority is preventing further damage with temporary solutions like tarping while we assess the full scope of repairs needed."
    },
    {
      question: "What types of storm damage do you repair?",
      answer: "We handle wind damage, hail damage, fallen tree damage, missing shingles, damaged flashing, and water damage from roof leaks caused by storms."
    },
    {
      question: "Do you help with insurance claims?",
      answer: "Yes! We work with your insurance company throughout the claims process, provide detailed damage documentation, and ensure you receive fair coverage for necessary repairs."
    },
    {
      question: "Can you provide temporary protection while waiting for repairs?",
      answer: "Absolutely. We provide emergency tarping and temporary weatherproofing to prevent additional damage while insurance claims are processed and permanent repairs are scheduled."
    }
  ];

  const phoneDisplay = process.env.NEXT_PUBLIC_COMPANY_PHONE_DISPLAY || "(615) 705-0779";

  return (
    <main>
      {/* Hero Section */}
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
                ⚡ Emergency Response
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg bg-black/35 px-4 py-2 text-white backdrop-blur">
                🛡️ Insurance Claims
              </span>
            </div>

            <h1 className="max-w-xl text-5xl font-extrabold leading-[1.05] tracking-tight text-white md:text-6xl">
              Storm Damage Roof Repair in Nashville
            </h1>

            <p className="mt-4 max-w-2xl text-lg text-slate-200">
              When storms strike Middle Tennessee, we're here to help. Fast emergency response, insurance claim assistance, and quality repairs to restore your roof's protection.
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

      {/* Storm Damage Services */}
      <section className="bg-black py-16">
        <div className="mx-auto w-[min(1200px,94%)]">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Complete Storm Damage Solutions</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              From emergency response to insurance claims and permanent repairs, we handle every aspect of storm damage restoration for Nashville area homes and businesses.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 shadow-2xl hover:bg-white/15 transition-all duration-300 group border border-white/15">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-blue-700 to-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center group-hover:from-blue-600 group-hover:to-blue-500 transition-all duration-300 flex-shrink-0">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">24/7 Emergency Response</h3>
                  <p className="text-slate-300 leading-relaxed">When storms cause roof damage, every minute counts. Our emergency response team is available around the clock to secure your property and prevent further damage.</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-8 shadow-2xl hover:bg-white/15 transition-all duration-300 group border border-white/15">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-blue-700 to-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center group-hover:from-blue-600 group-hover:to-blue-500 transition-all duration-300 flex-shrink-0">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Insurance Claim Assistance</h3>
                  <p className="text-slate-300 leading-relaxed">We work directly with insurance adjusters to document storm damage thoroughly and ensure you get the coverage you deserve for necessary repairs and restoration.</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-8 shadow-2xl hover:bg-white/15 transition-all duration-300 group border border-white/15">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-blue-700 to-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center group-hover:from-blue-600 group-hover:to-blue-500 transition-all duration-300 flex-shrink-0">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Comprehensive Storm Experience</h3>
                  <p className="text-slate-300 leading-relaxed">Living in Middle Tennessee means dealing with severe weather. Our team understands local storm patterns and has extensive experience repairing all types of weather-related roof damage.</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-8 shadow-2xl hover:bg-white/15 transition-all duration-300 group border border-white/15">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-blue-700 to-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center group-hover:from-blue-600 group-hover:to-blue-500 transition-all duration-300 flex-shrink-0">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7c0 2.21-3.582 4-8 4s-8-1.79-8-4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Complete Restoration</h3>
                  <p className="text-slate-300 leading-relaxed">From emergency tarping to complete roof replacement, we handle the entire restoration process. Our goal is returning your property to pre-storm condition or better.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Storm Damage */}
      <section className="bg-black py-16">
        <div className="mx-auto w-[min(1200px,94%)]">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Storm Damage We Repair</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Middle Tennessee weather can be unpredictable and severe. We repair all types of storm-related roof damage quickly and professionally.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur rounded-lg shadow-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 group border border-white/15">
              <div className="bg-gradient-to-br from-blue-700 to-blue-600 p-6 text-white">
                <svg className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 3v10a1 1 0 001 1h8a1 1 0 001-1V7M9 7h6" />
                </svg>
                <h3 className="text-xl font-semibold mb-2">Hail Damage</h3>
                <p className="text-blue-100">Repair damaged shingles, dented flashing, and compromised granule coverage from hailstorms.</p>
              </div>
              <div className="p-6">
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> Shingle replacement</li>
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> Granule loss repair</li>
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> Flashing restoration</li>
                </ul>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-lg shadow-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 group border border-white/15">
              <div className="bg-gradient-to-br from-blue-700 to-blue-600 p-6 text-white">
                <svg className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2c0-.55.45-1 1-1h8c.55 0 1 .45 1 1v2m-9 3v10c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V7" />
                </svg>
                <h3 className="text-xl font-semibold mb-2">Wind Damage</h3>
                <p className="text-blue-100">Fix wind-lifted shingles, damaged gutters, and structural issues from high winds.</p>
              </div>
              <div className="p-6">
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> Missing shingle replacement</li>
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> Edge lifting repair</li>
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> Gutter reattachment</li>
                </ul>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-lg shadow-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 group border border-white/15">
              <div className="bg-gradient-to-br from-blue-700 to-blue-600 p-6 text-white">
                <svg className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l14 9-14 9V3z" />
                </svg>
                <h3 className="text-xl font-semibold mb-2">Fallen Tree Damage</h3>
                <p className="text-blue-100">Complete restoration from tree damage including structural repairs and roof reconstruction.</p>
              </div>
              <div className="p-6">
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> Structural assessment</li>
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> Deck replacement</li>
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> Complete reconstruction</li>
                </ul>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-lg shadow-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 group border border-white/15">
              <div className="bg-gradient-to-br from-blue-700 to-blue-600 p-6 text-white">
                <svg className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7.5 13.5L10 16L16.5 9.5" />
                </svg>
                <h3 className="text-xl font-semibold mb-2">Water Damage</h3>
                <p className="text-blue-100">Address water infiltration and prevent mold growth from storm-related roof leaks.</p>
              </div>
              <div className="p-6">
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> Leak source repair</li>
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> Water damage mitigation</li>
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> Interior restoration</li>
                </ul>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-lg shadow-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 group border border-white/15">
              <div className="bg-gradient-to-br from-blue-700 to-blue-600 p-6 text-white">
                <svg className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7c0 2.21-3.582 4-8 4s-8-1.79-8-4z" />
                </svg>
                <h3 className="text-xl font-semibold mb-2">Emergency Tarping</h3>
                <p className="text-blue-100">Immediate protection to prevent further damage while permanent repairs are planned.</p>
              </div>
              <div className="p-6">
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> 24/7 availability</li>
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> Secure weatherproofing</li>
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> Temporary protection</li>
                </ul>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-lg shadow-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 group border border-white/15">
              <div className="bg-gradient-to-br from-blue-700 to-blue-600 p-6 text-white">
                <svg className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <h3 className="text-xl font-semibold mb-2">Insurance Documentation</h3>
                <p className="text-blue-100">Thorough damage assessment and documentation to support your insurance claim.</p>
              </div>
              <div className="p-6">
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> Detailed reporting</li>
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> Photo documentation</li>
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> Adjuster coordination</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Storm Damage FAQ Section */}
      <section className="bg-black py-16">
        <div className="mx-auto w-[min(1200px,94%)]">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Storm Damage FAQs</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Common questions about storm damage repair and insurance claims in Nashville and Middle Tennessee.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {stormFAQs.map((faq, index) => (
              <div key={index} className="border-b border-zinc-700 last:border-b-0">
                <button
                  className="w-full py-6 px-2 flex items-center justify-between text-left transition-colors duration-200 group"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-semibold text-white pr-4 group-hover:text-yellow-400 transition-colors duration-200">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <div className={`w-8 h-8 rounded-full border-2 border-zinc-600 flex items-center justify-center transition-all duration-300 ${
                      openFAQs.has(index)
                        ? 'border-yellow-500 bg-yellow-500 rotate-45' 
                        : 'group-hover:border-yellow-400'
                    }`}>
                      <svg
                        className={`w-4 h-4 transition-colors duration-300 ${
                          openFAQs.has(index) ? 'text-black' : 'text-zinc-400 group-hover:text-yellow-400'
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openFAQs.has(index) ? 'max-h-96 pb-6' : 'max-h-0'
                }`}>
                  <div className="px-2 py-2 border-l-4 border-yellow-500">
                    <p className="text-slate-300 leading-relaxed text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {/* CTA at bottom */}
            <div className="text-center mt-12 pt-8 border-t border-zinc-700">
              <p className="text-slate-300 mb-4">
                Have more questions? We're here to help with all your storm damage needs.
              </p>
              <button
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                  });
                }}
                className="btn-gold inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl group"
              >
                <span>Contact Us</span>
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-black py-16">
        <div className="mx-auto w-[min(1200px,94%)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Contact Form */}
            <div>
              <h2 className="mb-2 text-3xl font-bold text-white">Emergency Storm Damage Response</h2>
              <p className="mb-6 text-slate-300 text-lg">
                Storm damage your roof? Don't wait - contact us immediately for emergency response and free damage assessment.
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
                      <p className="text-slate-300 text-sm font-semibold text-red-400">Emergency Service: 24/7</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Services */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Storm Services</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/10 backdrop-blur rounded-lg p-4 hover:bg-white/15 transition-all duration-300 border border-white/15">
                    <div className="flex items-center gap-2 text-yellow-400 mb-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span className="text-white text-sm font-medium">Emergency</span>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur rounded-lg p-4 hover:bg-white/15 transition-all duration-300 border border-white/15">
                    <div className="flex items-center gap-2 text-yellow-400 mb-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 3v10a1 1 0 001 1h8a1 1 0 001-1V7M9 7h6" />
                      </svg>
                      <span className="text-white text-sm font-medium">Hail Damage</span>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur rounded-lg p-4 hover:bg-white/15 transition-all duration-300 border border-white/15">
                    <div className="flex items-center gap-2 text-yellow-400 mb-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span className="text-white text-sm font-medium">Insurance</span>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur rounded-lg p-4 hover:bg-white/15 transition-all duration-300 border border-white/15">
                    <div className="flex items-center gap-2 text-yellow-400 mb-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7c0 2.21-3.582 4-8 4s-8-1.79-8-4z" />
                      </svg>
                      <span className="text-white text-sm font-medium">Tarping</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Methods */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Get In Touch</h3>
                <div className="space-y-3">
                  <a href={`tel:${phoneDisplay.replace(/\D/g, '')}`} className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors duration-200">
                    <div className="bg-red-600 p-2 rounded-lg border border-red-500 hover:bg-red-500 transition-all duration-300">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-medium">{phoneDisplay}</span>
                      <p className="text-sm text-red-400 font-medium">24/7 Emergency</p>
                    </div>
                  </a>
                  
                  <a href="mailto:info@jpproservices.com" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors duration-200">
                    <div className="bg-zinc-700 p-2 rounded-lg border border-zinc-600 hover:bg-zinc-600 transition-all duration-300">
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