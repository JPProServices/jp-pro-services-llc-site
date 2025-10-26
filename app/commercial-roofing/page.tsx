"use client";
import { useState } from "react";
import LeadCTA from "@/components/LeadCTA";
import TrustBadges from "@/components/TrustBadges";

export default function CommercialRoofingPage() {
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

  const commercialFAQs = [
    {
      question: "What types of commercial properties do you service?",
      answer: "We service office buildings, retail centers, warehouses, restaurants, medical facilities, and other commercial properties throughout Middle Tennessee."
    },
    {
      question: "Do you offer maintenance programs for commercial roofs?",
      answer: "Yes, we provide scheduled maintenance services to help extend your roof's lifespan and prevent costly emergency repairs. Regular inspections are key to commercial roof longevity."
    },
    {
      question: "How do you minimize business disruption during repairs?",
      answer: "We work around your business hours whenever possible and use efficient installation methods to minimize downtime. Our team coordinates closely with property managers to ensure smooth operations."
    },
    {
      question: "Do you work with property management companies?",
      answer: "Absolutely! We work with property managers, facility directors, and building owners throughout Nashville and Middle Tennessee. We understand the unique needs of commercial properties."
    },
    {
      question: "What's the typical lifespan of a commercial roof?",
      answer: "It varies by material and maintenance. Metal roofs can last 40+ years, while membrane roofs typically last 15-25 years with proper care. Regular maintenance significantly extends roof life."
    },
    {
      question: "Do you handle insurance claims for commercial properties?",
      answer: "Yes, we assist with commercial insurance claims and work directly with adjusters to ensure proper coverage for storm damage and other covered repairs."
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
                🏢 Commercial Specialist
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg bg-black/35 px-4 py-2 text-white backdrop-blur">
                🛡️ Licensed & Insured
              </span>
            </div>

            <h1 className="max-w-xl text-5xl font-extrabold leading-[1.05] tracking-tight text-white md:text-6xl">
              Commercial Roofing Services in Nashville
            </h1>

            <p className="mt-4 max-w-2xl text-lg text-slate-200">
              Protecting Middle Tennessee businesses with reliable commercial roofing solutions. From routine maintenance to complete roof replacements.
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

      {/* Why Choose Commercial Roofing */}
      <section className="bg-black py-16">
        <div className="mx-auto w-[min(1200px,94%)]">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Commercial Roofing Solutions</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Professional roofing services designed for businesses, property managers, and commercial property owners throughout Nashville and Middle Tennessee.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 shadow-2xl hover:bg-white/15 transition-all duration-300 group border border-white/15">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300 flex-shrink-0">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Business-First Approach</h3>
                  <p className="text-slate-300 leading-relaxed">We understand that your business can't stop for roof repairs. Our efficient processes and flexible scheduling minimize disruption while ensuring quality work that protects your investment.</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-8 shadow-2xl hover:bg-white/15 transition-all duration-300 group border border-white/15">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300 flex-shrink-0">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Licensed & Insured Service</h3>
                  <p className="text-slate-300 leading-relaxed">Fully licensed, bonded, and insured for your peace of mind. We carry comprehensive commercial liability coverage and work with property managers throughout Middle Tennessee.</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-8 shadow-2xl hover:bg-white/15 transition-all duration-300 group border border-white/15">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300 flex-shrink-0">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Preventive Maintenance</h3>
                  <p className="text-slate-300 leading-relaxed">Regular maintenance prevents costly emergency repairs. Our inspection and maintenance services help extend your roof's lifespan and protect your property value.</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-8 shadow-2xl hover:bg-white/15 transition-all duration-300 group border border-white/15">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300 flex-shrink-0">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Emergency Response</h3>
                  <p className="text-slate-300 leading-relaxed">When commercial roof emergencies strike, we respond quickly to minimize business disruption and property damage. Available for urgent repairs and storm damage response.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Roofing Systems */}
      <section className="bg-black py-16">
        <div className="mx-auto w-[min(1200px,94%)]">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Commercial Roofing Systems We Install</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              From flat roof membranes to metal systems, we install and maintain various commercial roofing solutions suited for Middle Tennessee's climate.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur rounded-lg shadow-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 group border border-white/15">
              <div className="bg-gradient-to-br from-blue-700 to-blue-600 p-6 text-white">
                <svg className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                </svg>
                <h3 className="text-xl font-semibold mb-2">TPO Membrane</h3>
                <p className="text-blue-100">Energy-efficient single-ply membrane ideal for flat and low-slope commercial roofs.</p>
              </div>
              <div className="p-6">
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> Energy efficient</li>
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> UV resistant</li>
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> Cost effective</li>
                </ul>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-lg shadow-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 group border border-white/15">
              <div className="bg-gradient-to-br from-blue-700 to-blue-600 p-6 text-white">
                <svg className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12.0001L2 14.5001L11.6422 19.3212C11.7734 19.3868 11.839 19.4196 11.9078 19.4325C11.9687 19.4439 12.0313 19.4439 12.0922 19.4325C12.161 19.4196 12.2266 19.3868 12.3578 19.3212L22 14.5001L17 12.0001M2 9.50006L11.6422 4.67895C11.7734 4.61336 11.839 4.58056 11.9078 4.56766C11.9687 4.55622 12.0313 4.55622 12.0922 4.56766C12.161 4.58056 12.2266 4.61336 12.3578 4.67895L22 9.50006L12.3578 14.3212C12.2266 14.3868 12.161 14.4196 12.0922 14.4325C12.0313 14.4439 11.9687 14.4439 11.9078 14.4325C11.839 14.4196 11.7734 14.3868 11.6422 14.3212L2 9.50006Z" />
                </svg>
                <h3 className="text-xl font-semibold mb-2">Metal Roofing</h3>
                <p className="text-blue-100">Durable metal systems perfect for commercial buildings and warehouses.</p>
              </div>
              <div className="p-6">
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> Long-lasting durability</li>
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> Weather resistant</li>
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> Low maintenance</li>
                </ul>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-lg shadow-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 group border border-white/15">
              <div className="bg-gradient-to-br from-blue-700 to-blue-600 p-6 text-white">
                <svg className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <h3 className="text-xl font-semibold mb-2">Modified Bitumen</h3>
                <p className="text-blue-100">Proven multi-layer system with excellent waterproofing properties.</p>
              </div>
              <div className="p-6">
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> Superior waterproofing</li>
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> Puncture resistant</li>
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> Flexible application</li>
                </ul>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-lg shadow-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 group border border-white/15">
              <div className="bg-gradient-to-br from-blue-700 to-blue-600 p-6 text-white">
                <svg className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-semibold mb-2">Maintenance & Repair</h3>
                <p className="text-blue-100">Comprehensive maintenance programs to extend your roof's lifespan.</p>
              </div>
              <div className="p-6">
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> Regular inspections</li>
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> Preventive repairs</li>
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> Emergency service</li>
                </ul>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-lg shadow-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 group border border-white/15">
              <div className="bg-gradient-to-br from-blue-700 to-blue-600 p-6 text-white">
                <svg className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <h3 className="text-xl font-semibold mb-2">Storm Damage Repair</h3>
                <p className="text-blue-100">Fast response for commercial storm damage and emergency repairs.</p>
              </div>
              <div className="p-6">
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> 24/7 emergency response</li>
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> Insurance claim assistance</li>
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> Temporary weatherproofing</li>
                </ul>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-lg shadow-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 group border border-white/15">
              <div className="bg-gradient-to-br from-blue-700 to-blue-600 p-6 text-white">
                <svg className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <h3 className="text-xl font-semibold mb-2">Quality Workmanship</h3>
                <p className="text-blue-100">Professional installation with workmanship warranties on all commercial projects.</p>
              </div>
              <div className="p-6">
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> Licensed contractors</li>
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> Quality materials</li>
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> Workmanship warranty</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial FAQ Section */}
      <section className="bg-black py-16">
        <div className="mx-auto w-[min(1200px,94%)]">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Commercial Roofing FAQs</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Common questions about our commercial roofing services in Nashville and Middle Tennessee.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {commercialFAQs.map((faq, index) => (
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
                Have more questions? We're here to help with all your commercial roofing needs.
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
              <h2 className="mb-2 text-3xl font-bold text-white">Get Your Free Commercial Roofing Inspection</h2>
              <p className="mb-6 text-slate-300 text-lg">
                Schedule your complimentary roof inspection and get a detailed assessment of your commercial property's roofing needs.
              </p>
              <div>
                <LeadCTA variant="inline" kind="contact" />
              </div>
            </div>

            {/* Right: Business Info & Quick Links */}
            <div className="space-y-8">
              {/* Business Hours & Location */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Schedule An Appointment</h3>
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
                <h3 className="text-xl font-semibold text-white mb-4">Commercial Services</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/10 backdrop-blur rounded-lg p-4 hover:bg-white/15 transition-all duration-300 border border-white/15">
                    <div className="flex items-center gap-2 text-yellow-400 mb-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                      </svg>
                      <span className="text-white text-sm font-medium">TPO Systems</span>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur rounded-lg p-4 hover:bg-white/15 transition-all duration-300 border border-white/15">
                    <div className="flex items-center gap-2 text-yellow-400 mb-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12.0001L2 14.5001L11.6422 19.3212C11.7734 19.3868 11.839 19.4196 11.9078 19.4325C11.9687 19.4439 12.0313 19.4439 12.0922 19.4325C12.161 19.4196 12.2266 19.3868 12.3578 19.3212L22 14.5001L17 12.0001M2 9.50006L11.6422 4.67895C11.7734 4.61336 11.839 4.58056 11.9078 4.56766C11.9687 4.55622 12.0313 4.55622 12.0922 4.56766C12.161 4.58056 12.2266 4.61336 12.3578 4.67895L22 9.50006L12.3578 14.3212C12.2266 14.3868 12.161 14.4196 12.0922 14.4325C12.0313 14.4439 11.9687 14.4439 11.9078 14.4325C11.839 14.4196 11.7734 14.3868 11.6422 14.3212L2 9.50006Z" />
                      </svg>
                      <span className="text-white text-sm font-medium">Metal Roofing</span>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur rounded-lg p-4 hover:bg-white/15 transition-all duration-300 border border-white/15">
                    <div className="flex items-center gap-2 text-yellow-400 mb-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-white text-sm font-medium">Maintenance</span>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur rounded-lg p-4 hover:bg-white/15 transition-all duration-300 border border-white/15">
                    <div className="flex items-center gap-2 text-yellow-400 mb-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span className="text-white text-sm font-medium">Emergency Repair</span>
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