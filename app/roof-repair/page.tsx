"use client";
import { useState } from "react";
import LeadCTA from "@/components/LeadCTA";
import TrustBadges from "@/components/TrustBadges";

export default function RoofRepairPage() {
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

  const repairFAQs = [
    {
      question: "How do I know if I need roof repairs or a full replacement?",
      answer: "Minor issues like a few missing shingles or small leaks can often be repaired. However, extensive damage, multiple leaks, or roofs over 20 years old may require replacement. We provide honest assessments during our free inspection."
    },
    {
      question: "How quickly can you fix emergency roof leaks?",
      answer: "We offer emergency roof repair services with response times typically within 1-2 hours for urgent leaks. We'll provide immediate temporary solutions and schedule permanent repairs as soon as weather permits."
    },
    {
      question: "Do you provide temporary weatherproofing while waiting for repairs?",
      answer: "Yes! We provide emergency tarping and temporary weatherproofing to prevent further damage while permanent repairs are scheduled or insurance claims are processed."
    },
    {
      question: "Will insurance cover my roof repairs?",
      answer: "Insurance coverage depends on the cause of damage. Storm damage, hail, and wind damage are typically covered. We work directly with insurance companies and can help with the claims process."
    },
    {
      question: "How long do roof repairs typically take?",
      answer: "Most standard repairs can be completed in 1-2 days, depending on weather conditions and the extent of damage. Emergency repairs and temporary fixes are often completed the same day."
    },
    {
      question: "Do you warranty your roof repair work?",
      answer: "Yes, all our roof repairs come with a 5-year workmanship warranty. We also provide material warranties from manufacturers for any replacement components used."
    }
  ];

  const phoneDisplay = process.env.NEXT_PUBLIC_COMPANY_PHONE_DISPLAY || "(615) 555-0192";

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
                🛡️ 5-Year Warranty
              </span>
            </div>

            <h1 className="max-w-xl text-5xl font-extrabold leading-[1.05] tracking-tight text-white md:text-6xl">
              Expert Roof Repair Services in Nashville
            </h1>

            <p className="mt-4 max-w-2xl text-lg text-slate-200">
              Fast, reliable roof repairs when you need them most. From emergency leaks to storm damage, we restore your roof's protection with quality craftsmanship.
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

      {/* Why Choose Our Repair Services */}
      <section className="bg-black py-16">
        <div className="mx-auto w-[min(1200px,94%)]">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Professional Roof Repair Services</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Don't let minor roof issues become major problems. Our expert repair services protect your home and investment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-zinc-800 rounded-lg shadow-2xl overflow-hidden hover:bg-zinc-750 transition-all duration-300 group border border-zinc-700">
              <div className="bg-gradient-to-br from-blue-600 to-blue-500 p-6 text-white">
                <svg className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <h3 className="text-xl font-semibold mb-2">Emergency Repairs</h3>
                <p className="text-blue-100">24/7 emergency response for urgent leaks and storm damage.</p>
              </div>
              <div className="p-6">
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> 1-hour response time</li>
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> Temporary weatherproofing</li>
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> Available weekends</li>
                </ul>
              </div>
            </div>

            <div className="bg-zinc-800 rounded-lg shadow-2xl overflow-hidden hover:bg-zinc-750 transition-all duration-300 group border border-zinc-700">
              <div className="bg-gradient-to-br from-blue-600 to-blue-500 p-6 text-white">
                <svg className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
                <h3 className="text-xl font-semibold mb-2">Storm Damage Repair</h3>
                <p className="text-blue-100">Comprehensive storm damage restoration and insurance assistance.</p>
              </div>
              <div className="p-6">
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> Hail damage repair</li>
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> Wind damage restoration</li>
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> Insurance claim help</li>
                </ul>
              </div>
            </div>

            <div className="bg-zinc-800 rounded-lg shadow-2xl overflow-hidden hover:bg-zinc-750 transition-all duration-300 group border border-zinc-700">
              <div className="bg-gradient-to-br from-blue-600 to-blue-500 p-6 text-white">
                <svg className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-semibold mb-2">Preventive Maintenance</h3>
                <p className="text-blue-100">Regular maintenance to prevent costly major repairs.</p>
              </div>
              <div className="p-6">
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> Annual inspections</li>
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> Gutter cleaning</li>
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> Minor repairs</li>
                </ul>
              </div>
            </div>

            <div className="bg-zinc-800 rounded-lg shadow-2xl overflow-hidden hover:bg-zinc-750 transition-all duration-300 group border border-zinc-700">
              <div className="bg-gradient-to-br from-blue-600 to-blue-500 p-6 text-white">
                <svg className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h3 className="text-xl font-semibold mb-2">Leak Detection & Repair</h3>
                <p className="text-blue-100">Advanced leak detection and permanent waterproofing solutions.</p>
              </div>
              <div className="p-6">
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> Thermal imaging</li>
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> Moisture mapping</li>
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> Permanent solutions</li>
                </ul>
              </div>
            </div>

            <div className="bg-zinc-800 rounded-lg shadow-2xl overflow-hidden hover:bg-zinc-750 transition-all duration-300 group border border-zinc-700">
              <div className="bg-gradient-to-br from-blue-600 to-blue-500 p-6 text-white">
                <svg className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                </svg>
                <h3 className="text-xl font-semibold mb-2">Shingle Replacement</h3>
                <p className="text-blue-100">Expert replacement of damaged, missing, or worn shingles.</p>
              </div>
              <div className="p-6">
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> Color matching</li>
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> Quality materials</li>
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> Seamless integration</li>
                </ul>
              </div>
            </div>

            <div className="bg-zinc-800 rounded-lg shadow-2xl overflow-hidden hover:bg-zinc-750 transition-all duration-300 group border border-zinc-700">
              <div className="bg-gradient-to-br from-blue-600 to-blue-500 p-6 text-white">
                <svg className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                <h3 className="text-xl font-semibold mb-2">Quality Guarantee</h3>
                <p className="text-blue-100">All repairs backed by our comprehensive workmanship warranty.</p>
              </div>
              <div className="p-6">
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> 5-year workmanship warranty</li>
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> Licensed & insured</li>
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> Satisfaction guaranteed</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roof Repair FAQs */}
      <section className="bg-zinc-900 py-16">
        <div className="mx-auto w-[min(1200px,94%)]">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Roof Repair FAQs</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Common questions about roof repair services in Nashville and Middle Tennessee.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {repairFAQs.map((faq, index) => (
              <div key={index} className="bg-zinc-800 rounded-lg border border-zinc-700 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 hover:bg-zinc-750 transition-colors duration-200 flex items-center justify-between"
                >
                  <h3 className="text-lg font-semibold text-white pr-8">{faq.question}</h3>
                  <div className="flex-shrink-0">
                    <svg
                      className={`w-5 h-5 text-yellow-400 transition-transform duration-200 ${
                        openFAQs.has(index) ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                {openFAQs.has(index) && (
                  <div className="px-6 pb-6">
                    <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-black py-16">
        <div className="mx-auto w-[min(1200px,94%)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Contact Form */}
            <div>
              <h2 className="mb-2 text-3xl font-bold text-white">Need Emergency Roof Repairs?</h2>
              <p className="mb-6 text-slate-300 text-lg">
                Get immediate help for roof leaks and storm damage. Our emergency response team is ready to protect your home.
              </p>
              <div>
                <LeadCTA variant="inline" kind="contact" />
              </div>
            </div>

            {/* Right: Emergency Info & Services */}
            <div className="space-y-8">
              {/* Emergency Contact */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Emergency Service</h3>
                <div className="bg-zinc-800 rounded-lg p-6 space-y-4 border border-zinc-700 hover:bg-zinc-750 transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <div>
                      <p className="text-white font-medium">24/7 Emergency Response</p>
                      <p className="text-slate-300">Available for urgent leaks and storm damage</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-white font-medium">1-Hour Response Time</p>
                      <p className="text-slate-300">Fast response when you need it most</p>
                      <p className="text-slate-300 text-sm">Call: {phoneDisplay}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Repair Services */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Repair Services</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-zinc-800 rounded-lg p-4 hover:bg-zinc-750 transition-all duration-300 border border-zinc-700">
                    <div className="flex items-center gap-2 text-red-400 mb-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span className="text-white text-sm font-medium">Emergency Leaks</span>
                    </div>
                  </div>
                  
                  <div className="bg-zinc-800 rounded-lg p-4 hover:bg-zinc-750 transition-all duration-300 border border-zinc-700">
                    <div className="flex items-center gap-2 text-blue-400 mb-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <span className="text-white text-sm font-medium">Storm Damage</span>
                    </div>
                  </div>
                  
                  <div className="bg-zinc-800 rounded-lg p-4 hover:bg-zinc-750 transition-all duration-300 border border-zinc-700">
                    <div className="flex items-center gap-2 text-orange-400 mb-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                      <span className="text-white text-sm font-medium">Shingle Repair</span>
                    </div>
                  </div>
                  
                  <div className="bg-zinc-800 rounded-lg p-4 hover:bg-zinc-750 transition-all duration-300 border border-zinc-700">
                    <div className="flex items-center gap-2 text-green-400 mb-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                      <span className="text-white text-sm font-medium">Maintenance</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Methods */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Get Help Now</h3>
                <div className="space-y-3">
                  <a href={`tel:${phoneDisplay.replace(/\D/g, '')}`} className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors duration-200">
                    <div className="bg-zinc-700 p-2 rounded-lg border border-zinc-600 hover:bg-zinc-600 transition-all duration-300">
                      <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <span className="font-medium">{phoneDisplay}</span>
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