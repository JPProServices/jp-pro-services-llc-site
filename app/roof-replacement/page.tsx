"use client";
import { useState } from "react";
import LeadCTA from "@/components/LeadCTA";
import TrustBadges from "@/components/TrustBadges";

export default function RoofReplacementPage() {
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

  const replacementFAQs = [
    {
      question: "How do I know if I need a roof replacement vs. repair?",
      answer: "Consider replacement if your roof is over 20 years old, has extensive damage, multiple leaks, or repair costs exceed 50% of replacement cost. Our free inspection can help determine the best option."
    },
    {
      question: "How long does a roof replacement take?",
      answer: "Most residential roof replacements take 1-3 days depending on size, weather, and complexity. We work efficiently to minimize disruption to your daily routine."
    },
    {
      question: "What's included in a complete roof replacement?",
      answer: "A full replacement includes removing old materials, inspecting and repairing the deck if needed, installing new underlayment, drip edge, flashing, shingles, and ridge vents for proper ventilation."
    },
    {
      question: "Do you handle permits and inspections?",
      answer: "Yes, we take care of all necessary permits and coordinate inspections with local authorities to ensure your new roof meets all building codes and requirements."
    },
    {
      question: "What happens if it rains during my roof replacement?",
      answer: "We monitor weather closely and use tarps and temporary protection when needed. If severe weather threatens, we'll secure your roof and resume work when conditions improve."
    },
    {
      question: "What warranty comes with a new roof?",
      answer: "We provide workmanship warranties on our installation, and materials come with manufacturer warranties. Warranty terms vary by product - we'll explain all coverage during your consultation."
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
                🏠 Complete Replacement
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg bg-black/35 px-4 py-2 text-white backdrop-blur">
                ⭐ Quality Materials
              </span>
            </div>

            <h1 className="max-w-xl text-5xl font-extrabold leading-[1.05] tracking-tight text-white md:text-6xl">
              Complete Roof Replacement Services in Nashville
            </h1>

            <p className="mt-4 max-w-2xl text-lg text-slate-200">
              When repairs aren't enough, trust JP Pro Services for complete roof replacement. Quality materials, expert installation, and warranties that protect your investment.
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

      {/* Why Choose Our Roof Replacement */}
      <section className="bg-black py-16">
        <div className="mx-auto w-[min(1200px,94%)]">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Professional Roof Replacement</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              A new roof is a significant investment in your home's protection and value. Our experienced team ensures your replacement is done right the first time.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 shadow-2xl hover:bg-white/15 transition-all duration-300 group border border-white/15">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-blue-700 to-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center group-hover:from-blue-600 group-hover:to-blue-500 transition-all duration-300 flex-shrink-0">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Licensed & Insured</h3>
                  <p className="text-slate-300 leading-relaxed">Fully licensed, bonded, and insured for your protection. We meet all Tennessee requirements and carry comprehensive liability coverage for every project.</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-8 shadow-2xl hover:bg-white/15 transition-all duration-300 group border border-white/15">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-blue-700 to-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center group-hover:from-blue-600 group-hover:to-blue-500 transition-all duration-300 flex-shrink-0">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12.0001L2 14.5001L11.6422 19.3212C11.7734 19.3868 11.839 19.4196 11.9078 19.4325C11.9687 19.4439 12.0313 19.4439 12.0922 19.4325C12.161 19.4196 12.2266 19.3868 12.3578 19.3212L22 14.5001L17 12.0001M2 9.50006L11.6422 4.67895C11.7734 4.61336 11.839 4.58056 11.9078 4.56766C11.9687 4.55622 12.0313 4.55622 12.0922 4.56766C12.161 4.58056 12.2266 4.61336 12.3578 4.67895L22 9.50006L12.3578 14.3212C12.2266 14.3868 12.161 14.4196 12.0922 14.4325C12.0313 14.4439 11.9687 14.4439 11.9078 14.4325C11.839 14.4196 11.7734 14.3868 11.6422 14.3212L2 9.50006Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Quality Materials</h3>
                  <p className="text-slate-300 leading-relaxed">We use proven roofing materials from trusted manufacturers. Quality products backed by strong warranties ensure your new roof protects your home for decades.</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-8 shadow-2xl hover:bg-white/15 transition-all duration-300 group border border-white/15">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-blue-700 to-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center group-hover:from-blue-600 group-hover:to-blue-500 transition-all duration-300 flex-shrink-0">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Efficient Installation</h3>
                  <p className="text-slate-300 leading-relaxed">Our experienced crews work efficiently to complete most residential replacements in 1-3 days, minimizing disruption while maintaining the highest quality standards.</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-8 shadow-2xl hover:bg-white/15 transition-all duration-300 group border border-white/15">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-blue-700 to-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center group-hover:from-blue-600 group-hover:to-blue-500 transition-all duration-300 flex-shrink-0">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.623 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Complete Service</h3>
                  <p className="text-slate-300 leading-relaxed">From permits and inspections to cleanup and disposal, we handle every aspect of your roof replacement project from start to finish.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roof Replacement Process */}
      <section className="bg-black py-16">
        <div className="mx-auto w-[min(1200px,94%)]">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Replacement Process</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              We follow a proven process to ensure your roof replacement is completed efficiently and to the highest standards.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur rounded-lg shadow-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 group border border-white/15">
              <div className="bg-gradient-to-br from-blue-700 to-blue-600 p-6 text-white">
                <div className="w-12 h-12 mb-4 bg-white/20 rounded-lg flex items-center justify-center text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">Free Inspection</h3>
                <p className="text-blue-100">Comprehensive assessment of your current roof condition and replacement needs.</p>
              </div>
              <div className="p-6">
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> Detailed evaluation</li>
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> Photo documentation</li>
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> Written estimate</li>
                </ul>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-lg shadow-2xl overflow-hidden hover:bg-zinc-800/80 transition-all duration-300 group border border-zinc-800">
              <div className="bg-gradient-to-br from-zinc-800 to-zinc-700 p-6 text-white">
                <div className="w-12 h-12 mb-4 bg-white/20 rounded-lg flex items-center justify-center text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">Material Selection</h3>
                <p className="text-zinc-200">Choose from quality roofing materials that fit your budget and style preferences.</p>
              </div>
              <div className="p-6">
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> Style options</li>
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> Color matching</li>
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> Warranty details</li>
                </ul>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-lg shadow-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 group border border-white/15">
              <div className="bg-gradient-to-br from-blue-700 to-blue-600 p-6 text-white">
                <div className="w-12 h-12 mb-4 bg-white/20 rounded-lg flex items-center justify-center text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">Permits & Preparation</h3>
                <p className="text-blue-100">We handle all permits and prepare your property for the replacement process.</p>
              </div>
              <div className="p-6">
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> Permit applications</li>
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> Material delivery</li>
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> Site protection</li>
                </ul>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-lg shadow-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 group border border-white/15">
              <div className="bg-gradient-to-br from-blue-700 to-blue-600 p-6 text-white">
                <div className="w-12 h-12 mb-4 bg-white/20 rounded-lg flex items-center justify-center text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                  4
                </div>
                <h3 className="text-xl font-semibold mb-2">Old Roof Removal</h3>
                <p className="text-blue-100">Complete tear-off of existing materials down to the roof deck.</p>
              </div>
              <div className="p-6">
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> Full tear-off</li>
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> Deck inspection</li>
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> Debris removal</li>
                </ul>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-lg shadow-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 group border border-white/15">
              <div className="bg-gradient-to-br from-blue-700 to-blue-600 p-6 text-white">
                <div className="w-12 h-12 mb-4 bg-white/20 rounded-lg flex items-center justify-center text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                  5
                </div>
                <h3 className="text-xl font-semibold mb-2">New Roof Installation</h3>
                <p className="text-blue-100">Professional installation of your new roofing system with quality materials.</p>
              </div>
              <div className="p-6">
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> Underlayment</li>
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> Shingles & flashing</li>
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> Ventilation system</li>
                </ul>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-lg shadow-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 group border border-white/15">
              <div className="bg-gradient-to-br from-blue-700 to-blue-600 p-6 text-white">
                <div className="w-12 h-12 mb-4 bg-white/20 rounded-lg flex items-center justify-center text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                  6
                </div>
                <h3 className="text-xl font-semibold mb-2">Final Inspection</h3>
                <p className="text-blue-100">Thorough quality check and official inspection to ensure code compliance.</p>
              </div>
              <div className="p-6">
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> Quality review</li>
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> Code inspection</li>
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> Final cleanup</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roof Replacement FAQ Section */}
      <section className="bg-black py-16">
        <div className="mx-auto w-[min(1200px,94%)]">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Roof Replacement FAQs</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Common questions about roof replacement services in Nashville and Middle Tennessee.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {replacementFAQs.map((faq, index) => (
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
                Have more questions? We're here to help with all your roof replacement needs.
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
              <h2 className="mb-2 text-3xl font-bold text-white">Get Your Free Roof Replacement Estimate</h2>
              <p className="mb-6 text-slate-300 text-lg">
                Ready for a new roof? Schedule your complimentary inspection and receive a detailed replacement estimate.
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
                <h3 className="text-xl font-semibold text-white mb-4">Replacement Services</h3>
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-white text-sm font-medium">Inspections</span>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur rounded-lg p-4 hover:bg-white/15 transition-all duration-300 border border-white/15">
                    <div className="flex items-center gap-2 text-yellow-400 mb-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2m5 0h2a2 2 0 002-2V7a2 2 0 00-2-2h-2m-5 4v2m0 0v2m0-2h2m-2 0H9" />
                      </svg>
                      <span className="text-white text-sm font-medium">Full Service</span>
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