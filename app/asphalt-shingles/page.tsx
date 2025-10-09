"use client";
import { useState } from "react";
import LeadCTA from "@/components/LeadCTA";
import TrustBadges from "@/components/TrustBadges";

export default function AsphaltShinglesPage() {
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

  const asphaltFAQs = [
    {
      question: "How long do GAF asphalt shingles last?",
      answer: "GAF asphalt shingles typically last 25-50 years depending on the product line, with proper installation and maintenance. Our GAF Master Elite installation ensures maximum lifespan."
    },
    {
      question: "Are asphalt shingles good for Tennessee weather?",
      answer: "Absolutely. GAF shingles are engineered for extreme weather conditions including high winds, hail, and temperature fluctuations common in Middle Tennessee."
    },
    {
      question: "What's included in the GAF warranty?",
      answer: "GAF warranties cover material defects, workmanship (with Master Elite contractors), and can include system warranties covering all roof components when installed together."
    },
    {
      question: "How much do GAF asphalt shingles cost?",
      answer: "Costs vary by shingle type and roof complexity. 3-tab shingles are most economical, architectural offer best value, and designer provide luxury appeal. We provide detailed estimates for all options."
    },
    {
      question: "Can you install over existing shingles?",
      answer: "In some cases, yes. However, we typically recommend full removal for best results and warranty compliance. We'll assess your specific situation during our free inspection."
    },
    {
      question: "Do you handle insurance claims?",
      answer: "Yes! We specialize in insurance claims and work directly with your insurance company to ensure you get the coverage you deserve for storm damage repairs."
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
                🏆 GAF Master Elite Contractor
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg bg-black/35 px-4 py-2 text-white backdrop-blur">
                🛡️ 25+ Year Warranties
              </span>
            </div>

            <h1 className="max-w-xl text-5xl font-extrabold leading-[1.05] tracking-tight text-white md:text-6xl">
              Premium GAF Asphalt Shingles in Nashville
            </h1>

            <p className="mt-4 max-w-2xl text-lg text-slate-200">
              Tennessee's most trusted roofing choice. GAF certified shingles with unmatched durability, style, and value backed by industry-leading warranties.
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

      {/* Why Choose Asphalt Shingles */}
      <section className="bg-zinc-900 py-16">
        <div className="mx-auto w-[min(1200px,94%)]">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Asphalt Shingles?</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Asphalt shingles remain America's #1 roofing choice for good reason. Perfect for Nashville's climate with unbeatable value.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Cost Effective */}
            <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700">
              <div className="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Most Cost-Effective</h3>
              <p className="text-slate-300 text-sm">
                Premium quality at the best value. Lower upfront costs with excellent long-term ROI for your home investment.
              </p>
            </div>

            {/* Weather Resistant */}
            <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700">
              <div className="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.002 4.002 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Tennessee Weather Tough</h3>
              <p className="text-slate-300 text-sm">
                Built to withstand Nashville's extreme weather - from scorching summers to ice storms and severe thunderstorms.
              </p>
            </div>

            {/* Style Options */}
            <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700">
              <div className="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2zM16 8v2M8 8v2m0 4v2m8-2v2" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Endless Style Options</h3>
              <p className="text-slate-300 text-sm">
                From traditional 3-tab to luxury architectural shingles. Colors and textures to match any home design.
              </p>
            </div>

            {/* Easy Maintenance */}
            <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700">
              <div className="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Low Maintenance</h3>
              <p className="text-slate-300 text-sm">
                Simple upkeep requirements. Regular inspections and basic maintenance keep your roof performing for decades.
              </p>
            </div>

            {/* Quick Installation */}
            <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700">
              <div className="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Faster Installation</h3>
              <p className="text-slate-300 text-sm">
                Quick professional installation means less disruption to your daily life and faster protection for your home.
              </p>
            </div>

            {/* Proven Performance */}
            <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700">
              <div className="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Proven Track Record</h3>
              <p className="text-slate-300 text-sm">
                Decades of reliable performance across millions of homes. The most tested and trusted roofing material in America.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GAF Certified Excellence */}
      <section className="bg-black py-16">
        <div className="mx-auto w-[min(1200px,94%)]">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">GAF Master Elite Certified</h2>
              <p className="text-lg text-slate-300 mb-6">
                We're proud to be a GAF Master Elite Contractor - an honor earned by less than 2% of roofing contractors nationwide. This certification means you get the best materials, installation, and warranty protection.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-yellow-500 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Factory-Trained Installers</h4>
                    <p className="text-slate-300 text-sm">Our team is certified and continuously trained on the latest GAF installation techniques.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-yellow-500 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Premium Product Access</h4>
                    <p className="text-slate-300 text-sm">Exclusive access to GAF's complete line of premium roofing products and accessories.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-yellow-500 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Enhanced Warranty Coverage</h4>
                    <p className="text-slate-300 text-sm">Only Master Elite contractors can offer GAF's most comprehensive warranty packages.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-zinc-800 rounded-xl p-8 border border-zinc-700">
              <div className="text-center">
                <div className="bg-yellow-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-black">GAF</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">25+ Year Warranty Protection</h3>
                <div className="space-y-3 text-left">
                  <div className="flex justify-between py-2 border-b border-zinc-600">
                    <span className="text-slate-300">Material Coverage:</span>
                    <span className="text-white font-semibold">25-50 Years</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-zinc-600">
                    <span className="text-slate-300">Workmanship:</span>
                    <span className="text-white font-semibold">5 Years</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-zinc-600">
                    <span className="text-slate-300">System Warranty:</span>
                    <span className="text-white font-semibold">Available</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-slate-300">Transferable:</span>
                    <span className="text-white font-semibold">Yes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shingle Types & Styles */}
      <section className="bg-zinc-900 py-16">
        <div className="mx-auto w-[min(1200px,94%)]">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">GAF Shingle Options</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              From budget-friendly to luxury designer shingles, we offer GAF's complete line to match your style and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Architectural Shingles */}
            <div className="bg-zinc-800 rounded-xl border border-zinc-700 overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">Architectural Shingles</h3>
                <p className="text-slate-300 text-sm mb-4">
                  Our most popular choice. Dimensional design with enhanced curb appeal and superior weather protection.
                </p>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                    25-30 Year Warranty
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                    Dimensional Appearance
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                    Multiple Color Options
                  </li>
                </ul>
              </div>
            </div>

            {/* Designer Shingles */}
            <div className="bg-zinc-800 rounded-xl border border-zinc-700 overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">Designer Luxury</h3>
                <p className="text-slate-300 text-sm mb-4">
                  Premium luxury shingles that replicate the look of wood shake or slate with superior durability.
                </p>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                    Lifetime Limited Warranty
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                    Ultra-Premium Appearance
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                    Advanced Protection
                  </li>
                </ul>
              </div>
            </div>
            {/* 3-Tab Shingles */}
            <div className="bg-zinc-800 rounded-xl border border-zinc-700 overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">N/A</h3>
                <p className="text-slate-300 text-sm mb-4">
                  Cost-effective solution with reliable protection and clean, traditional appearance.
                </p>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                    25 Year Warranty
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                    Budget-Friendly
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                    Classic Clean Lines
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-black py-16">
        <div className="mx-auto w-[min(1200px,94%)]">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Asphalt Shingle FAQs</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Common questions about GAF asphalt shingles from Nashville homeowners.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {asphaltFAQs.map((faq, index) => (
                <div 
                  key={index}
                  className="bg-zinc-800 rounded-lg border border-zinc-700 overflow-hidden hover:bg-zinc-750 transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50"
                    aria-expanded={openFAQs.has(index)}
                  >
                    <span className="text-lg font-medium text-white pr-4">
                      {faq.question}
                    </span>
                    <div className={`flex-shrink-0 transition-transform duration-300 ${openFAQs.has(index) ? 'rotate-180' : ''}`}>
                      <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openFAQs.has(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-4">
                      <div className="text-slate-300 leading-relaxed">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-t from-zinc-900 to-black">
        <div className="mx-auto w-[min(1200px,94%)] text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for Premium GAF Asphalt Shingles?
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Get your free estimate from Nashville's GAF Master Elite Contractor. 25+ year warranties and expert installation guaranteed.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href={`tel:${phoneDisplay}`}
              className="group btn-gold neon relative inline-flex items-center justify-center overflow-hidden rounded-xl px-8 py-4 font-extrabold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                📞 Call Now: {phoneDisplay}
              </span>
            </a>
            
            <a 
              href="/#estimate"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-yellow-500 text-yellow-500 font-bold hover:bg-yellow-500 hover:text-black transition-all duration-300"
            >
              Get FREE Estimate
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}