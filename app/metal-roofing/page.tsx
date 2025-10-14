"use client";
import { useState } from "react";
import LeadCTA from "@/components/LeadCTA";
import TrustBadges from "@/components/TrustBadges";

export default function MetalRoofingPage() {
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

  const metalFAQs = [
    {
      question: "How long do metal roofs last?",
      answer: "Quality metal roofs typically last 50-70 years with minimal maintenance, significantly longer than traditional asphalt shingles which last 15-25 years."
    },
    {
      question: "Are metal roofs noisy during rain or storms?",
      answer: "Modern metal roofing with proper insulation and installation is no noisier than other roofing materials. Proper decking and insulation eliminate noise concerns."
    },
    {
      question: "What warranty comes with metal roofing?",
      answer: "Metal roofing typically comes with 40-50 year manufacturer warranties on materials, plus our workmanship warranty. Many systems include paint warranties as well."
    },
    {
      question: "Is metal roofing energy efficient?",
      answer: "Yes! Metal roofs reflect heat and can reduce cooling costs by up to 25%. Many qualify for energy efficiency tax credits and rebates."
    },
    {
      question: "Can metal roofing be installed over existing shingles?",
      answer: "In many cases, yes. Metal roofing can often be installed over one layer of existing shingles, saving on removal costs and reducing waste."
    },
    {
      question: "Do metal roofs attract lightning?",
      answer: "No, metal roofs do not attract lightning. If struck, metal roofing actually disperses energy more safely than other materials and is non-combustible."
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
                🔧 Metal Roofing Specialists
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg bg-black/35 px-4 py-2 text-white backdrop-blur">
                ⚡ 50+ Year Lifespan
              </span>
            </div>

            <h1 className="max-w-xl text-5xl font-extrabold leading-[1.05] tracking-tight text-white md:text-6xl">
              Premium Metal Roofing in Nashville
            </h1>

            <p className="mt-4 max-w-2xl text-lg text-slate-200">
              Durable, energy-efficient metal roofing systems that last decades. Superior weather protection with modern aesthetics for Middle Tennessee homes.
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

      {/* Why Choose Metal Roofing */}
      <section className="bg-black py-16">
        <div className="mx-auto w-[min(1200px,94%)]">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Metal Roofing?</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Metal roofing offers exceptional longevity, energy efficiency, and weather resistance. Perfect for Tennessee's climate with superior performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Long Lasting */}
            <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700">
              <div className="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">50+ Year Lifespan</h3>
              <p className="text-slate-300 text-sm">
                Metal roofs can last 50-70 years with minimal maintenance, far exceeding traditional roofing materials.
              </p>
            </div>

            {/* Weather Resistant */}
            <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700">
              <div className="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Superior Weather Protection</h3>
              <p className="text-slate-300 text-sm">
                Exceptional resistance to wind, hail, fire, and extreme weather conditions common in Middle Tennessee.
              </p>
            </div>

            {/* Energy Efficient */}
            <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700">
              <div className="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Energy Efficient</h3>
              <p className="text-slate-300 text-sm">
                Reflective coatings reduce cooling costs by up to 25%, making your home more energy efficient year-round.
              </p>
            </div>

            {/* Low Maintenance */}
            <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700">
              <div className="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Minimal Maintenance</h3>
              <p className="text-slate-300 text-sm">
                Metal roofs require very little maintenance beyond periodic inspections and basic gutter cleaning.
              </p>
            </div>

            {/* Environmentally Friendly */}
            <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700">
              <div className="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Eco-Friendly</h3>
              <p className="text-slate-300 text-sm">
                Made from recycled materials and fully recyclable at end of life. Supports sustainable building practices.
              </p>
            </div>

            {/* Property Value */}
            <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700">
              <div className="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Increases Property Value</h3>
              <p className="text-slate-300 text-sm">
                Premium metal roofing significantly increases home value and curb appeal with modern, attractive designs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Installation Excellence */}
      <section className="bg-zinc-900 py-16">
        <div className="mx-auto w-[min(1200px,94%)]">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Professional Metal Roof Installation</h2>
              <p className="text-lg text-slate-300 mb-6">
                Metal roofing requires specialized installation techniques. Our certified team ensures proper installation for maximum performance and longevity.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-yellow-500 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Specialized Training</h4>
                    <p className="text-slate-300 text-sm">Our team is trained in advanced metal roofing installation techniques and safety protocols.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-yellow-500 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Quality Materials</h4>
                    <p className="text-slate-300 text-sm">We use premium metal roofing systems from trusted manufacturers with proven performance records.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-yellow-500 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Comprehensive Warranty</h4>
                    <p className="text-slate-300 text-sm">Manufacturer warranties plus our workmanship guarantee for complete peace of mind.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-zinc-800 rounded-xl p-8 border border-zinc-700">
              <div className="text-center">
                <div className="bg-yellow-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Premium Warranty Protection</h3>
                <div className="space-y-3 text-left">
                  <div className="flex justify-between py-2 border-b border-zinc-600">
                    <span className="text-slate-300">Material Coverage:</span>
                    <span className="text-white font-semibold">40-50 Years</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-zinc-600">
                    <span className="text-slate-300">Paint Warranty:</span>
                    <span className="text-white font-semibold">30-40 Years</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-zinc-600">
                    <span className="text-slate-300">Workmanship:</span>
                    <span className="text-white font-semibold">5 Years</span>
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

      {/* Metal Roofing Types & Styles */}
      <section className="bg-black py-16">
        <div className="mx-auto w-[min(1200px,94%)]">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Metal Roofing Options</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              We offer various metal roofing systems to match your style preferences, budget, and performance requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Standing Seam */}
            <div className="bg-zinc-800 rounded-xl border border-zinc-700 overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">Standing Seam Metal</h3>
                <p className="text-slate-300 text-sm mb-4">
                  Premium concealed fastener system with clean lines and maximum weather protection. The gold standard for metal roofing.
                </p>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                    50+ Year Lifespan
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                    Superior Weather Sealing
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                    Modern Clean Lines
                  </li>
                </ul>
              </div>
            </div>

            {/* Metal Shingles */}
            <div className="bg-zinc-800 rounded-xl border border-zinc-700 overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">Metal Shingles</h3>
                <p className="text-slate-300 text-sm mb-4">
                  Traditional shingle appearance with metal durability. Available in styles that mimic slate, wood shake, or tile.
                </p>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                    Classic Aesthetic Appeal
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                    Multiple Design Options
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                    Easier Installation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-zinc-900 py-16">
        <div className="mx-auto w-[min(1200px,94%)]">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Metal Roofing FAQs</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Common questions about metal roofing from Nashville homeowners.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {metalFAQs.map((faq, index) => (
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

      {/* Contact Section */}
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
                <div className="bg-zinc-800 rounded-lg p-6 space-y-4 border border-zinc-700 hover:bg-zinc-750 transition-all duration-300">
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
                  <div className="bg-zinc-800 rounded-lg p-4 hover:bg-zinc-750 transition-all duration-300 border border-zinc-700">
                    <div className="flex items-center gap-2 text-yellow-400 mb-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                      </svg>
                      <span className="text-white text-sm font-medium">Residential</span>
                    </div>
                  </div>
                  
                  <div className="bg-zinc-800 rounded-lg p-4 hover:bg-zinc-750 transition-all duration-300 border border-zinc-700">
                    <div className="flex items-center gap-2 text-yellow-400 mb-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <span className="text-white text-sm font-medium">Commercial</span>
                    </div>
                  </div>
                  
                  <div className="bg-zinc-800 rounded-lg p-4 hover:bg-zinc-750 transition-all duration-300 border border-zinc-700">
                    <div className="flex items-center gap-2 text-yellow-400 mb-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-white text-sm font-medium">Emergency</span>
                    </div>
                  </div>
                  
                  <div className="bg-zinc-800 rounded-lg p-4 hover:bg-zinc-750 transition-all duration-300 border border-zinc-700">
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