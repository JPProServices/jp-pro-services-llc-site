import Hero from "@/components/Hero";
import LeadCTA from "@/components/LeadCTA";
import TrustBadges from "@/components/TrustBadges";
import FAQ from "@/components/FAQ";

export default function HomePage() {
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
          <Hero />
          <div className="md:pt-6">
            <LeadCTA />
          </div>
        </div>
      </section>

      {/* Trust & Stats Bar */}
      <section className="bg-gradient-to-r from-zinc-900 to-black py-12 border-y border-zinc-700">
        <div className="mx-auto w-[min(1200px,94%)]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {/* Satisfaction Guarantee */}
            <div className="group">
              <div className="flex items-center justify-center mb-3">
                <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-1">1,826</div>
              <div className="text-slate-300 font-medium">Day Guarantee</div>
            </div>

            {/* Emergency Response */}
            <div className="group">
              <div className="flex items-center justify-center mb-3">
                <div className="bg-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-1">1 Hour</div>
              <div className="text-slate-300 font-medium">Emergency Response</div>
            </div>

            {/* Customer Rating */}
            <div className="group">
              <div className="flex items-center justify-center mb-3">
                <div className="bg-yellow-500 text-white rounded-full w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.922-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-1">5.0★</div>
              <div className="text-slate-300 font-medium">Customer Rating</div>
            </div>

            {/* BBB A-Rating */}
            <div className="group">
              <div className="flex items-center justify-center mb-3">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-1">BBB A</div>
              <div className="text-slate-300 font-medium">Accredited Rating</div>
            </div>
          </div>

          {/* Trust Badges Row */}
          <div className="mt-8 pt-8 border-t border-slate-300">
            <div className="flex flex-wrap items-center justify-center gap-6">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white text-sm font-bold">B</div>
                <span className="text-slate-700 font-medium">BBB Accredited</span>
              </div>
              
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
                <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center text-white text-sm font-bold">G</div>
                <span className="text-slate-700 font-medium">GAF Certified</span>
              </div>
              
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
                <div className="w-8 h-8 bg-yellow-500 rounded flex items-center justify-center text-white text-sm font-bold">★</div>
                <span className="text-slate-700 font-medium">25+ Year Product Warranties</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-black py-16">
        <div className="mx-auto w-[min(1200px,94%)]">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose JP Pro Services?</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              At JP Pro Services, we're more than just a roofing company — we're Nashville's trusted partner in protecting your home or business. Here are four reasons why Middle Tennessee residents and businesses choose us for their roofing needs:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-800 rounded-xl p-8 shadow-2xl hover:bg-zinc-750 transition-all duration-300 group border border-zinc-700">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300 flex-shrink-0">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">BBB-Accredited Excellence</h3>
                  <p className="text-slate-300 leading-relaxed">As a BBB-accredited, licensed, insured, and bonded roofing company, we uphold the highest standards of quality and trust. With over two years of serving Nashville and Middle Tennessee, our commitment to integrity and craftsmanship ensures your roof is in reliable hands.</p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800 rounded-xl p-8 shadow-2xl hover:bg-zinc-750 transition-all duration-300 group border border-zinc-700">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300 flex-shrink-0">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Local Expertise, Tailored to Nashville</h3>
                  <p className="text-slate-300 leading-relaxed">We understand Middle Tennessee's unique weather challenges — spring storms, summer heat, and occasional ice. From historic homes in Franklin to modern builds in Brentwood, we specialize in repairs and installations that preserve Nashville's charm and withstand its elements.</p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800 rounded-xl p-8 shadow-2xl hover:bg-zinc-750 transition-all duration-300 group border border-zinc-700">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300 flex-shrink-0">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Comprehensive Roofing Solutions</h3>
                  <p className="text-slate-300 leading-relaxed">Whether it's leak repairs, shingle replacements, or emergency storm damage tarping, we offer a full range of services for residential and commercial properties. Our skilled team uses premium materials to deliver lasting results across Davidson, Williamson, Rutherford, Sumner, and beyond.</p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800 rounded-xl p-8 shadow-2xl hover:bg-zinc-750 transition-all duration-300 group border border-zinc-700">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300 flex-shrink-0">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Customer-First Service</h3>
                  <p className="text-slate-300 leading-relaxed">We prioritize your peace of mind with free inspections, transparent pricing, and responsive support. Available Monday–Sunday (8:00 AM–5:00 PM for office) and 24/7 for emergencies, we're here to protect your property with unmatched care.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-zinc-900 py-16">
        <div className="mx-auto w-[min(1200px,94%)]">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              From new installations to emergency repairs, we provide comprehensive roofing solutions for every need.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-zinc-800 rounded-lg shadow-2xl overflow-hidden hover:bg-zinc-750 transition-all duration-300 group border border-zinc-700">
              <div className="bg-gradient-to-br from-blue-600 to-blue-500 p-6 text-white">
                <svg className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 21l4-7 4 7" />
                </svg>
                <h3 className="text-xl font-semibold mb-2">Residential Roofing</h3>
                <p className="text-blue-100">Complete roofing solutions for your home including installation, repair, and maintenance.</p>
              </div>
              <div className="p-6">
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> New roof installation</li>
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> Roof replacement</li>
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> Maintenance & inspections</li>
                </ul>
              </div>
            </div>

            <div className="bg-zinc-800 rounded-lg shadow-2xl overflow-hidden hover:bg-zinc-750 transition-all duration-300 group border border-zinc-700">
              <div className="bg-gradient-to-br from-blue-600 to-blue-500 p-6 text-white">
                <svg className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <h3 className="text-xl font-semibold mb-2">Commercial Roofing</h3>
                <p className="text-blue-100">Professional roofing services for businesses, warehouses, and commercial properties.</p>
              </div>
              <div className="p-6">
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> Flat roof systems</li>
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> Metal roofing</li>
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> Industrial solutions</li>
                </ul>
              </div>
            </div>

            <div className="bg-zinc-800 rounded-lg shadow-2xl overflow-hidden hover:bg-zinc-750 transition-all duration-300 group border border-zinc-700">
              <div className="bg-gradient-to-br from-blue-600 to-blue-500 p-6 text-white">
                <svg className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-semibold mb-2">Emergency Repairs</h3>
                <p className="text-blue-100">24/7 emergency roofing services for storm damage and urgent repairs.</p>
              </div>
              <div className="p-6">
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> Storm damage repair</li>
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> Leak detection & repair</li>
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> Emergency tarping</li>
                </ul>
              </div>
            </div>

            <div className="bg-zinc-800 rounded-lg shadow-2xl overflow-hidden hover:bg-zinc-750 transition-all duration-300 group border border-zinc-700">
              <div className="bg-gradient-to-br from-blue-600 to-blue-500 p-6 text-white">
                <svg className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <h3 className="text-xl font-semibold mb-2">Roof Replacement</h3>
                <p className="text-blue-100">Complete roof replacement with premium materials and expert installation.</p>
              </div>
              <div className="p-6">
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> Full tear-off & replacement</li>
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> Licensed & bonded</li>
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> Warranty included</li>
                </ul>
              </div>
            </div>

            <div className="bg-zinc-800 rounded-lg shadow-2xl overflow-hidden hover:bg-zinc-750 transition-all duration-300 group border border-zinc-700">
              <div className="bg-gradient-to-br from-blue-600 to-blue-500 p-6 text-white">
                <svg className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <h3 className="text-xl font-semibold mb-2">Storm Damage</h3>
                <p className="text-blue-100">Comprehensive storm damage assessment and repair services.</p>
              </div>
              <div className="p-6">
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> Insurance claim assistance</li>
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> Damage assessment</li>
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> Restoration services</li>
                </ul>
              </div>
            </div>

            <div className="bg-zinc-800 rounded-lg shadow-2xl overflow-hidden hover:bg-zinc-750 transition-all duration-300 group border border-zinc-700">
              <div className="bg-gradient-to-br from-blue-600 to-blue-500 p-6 text-white">
                <svg className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12.0001L2 14.5001L11.6422 19.3212C11.7734 19.3868 11.839 19.4196 11.9078 19.4325C11.9687 19.4439 12.0313 19.4439 12.0922 19.4325C12.161 19.4196 12.2266 19.3868 12.3578 19.3212L22 14.5001L17 12.0001M2 9.50006L11.6422 4.67895C11.7734 4.61336 11.839 4.58056 11.9078 4.56766C11.9687 4.55622 12.0313 4.55622 12.0922 4.56766C12.161 4.58056 12.2266 4.61336 12.3578 4.67895L22 9.50006L12.3578 14.3212C12.2266 14.3868 12.161 14.4196 12.0922 14.4325C12.0313 14.4439 11.9687 14.4439 11.9078 14.4325C11.839 14.4196 11.7734 14.3868 11.6422 14.3212L2 9.50006Z" />
                </svg>
                <h3 className="text-xl font-semibold mb-2">Premium Materials</h3>
                <p className="text-blue-100">High-quality roofing materials from trusted manufacturers.</p>
              </div>
              <div className="p-6">
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> 25+ years warranty</li>
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> GAF certified</li>
                  <li className="flex items-center"><span className="text-yellow-500 mr-2">•</span> 5 years workmanship warranty</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-black py-16">
        <div className="mx-auto w-[min(1200px,94%)]">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">What Our Customers Say</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say about our work.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-800 rounded-lg shadow-2xl p-6 hover:bg-zinc-750 transition-all duration-300 border border-zinc-700">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.922-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-300 mb-4 italic">
                "JP Pro Services did an amazing job on our roof replacement. Professional, timely, and the quality of work exceeded our expectations. Highly recommend!"
              </p>
              <div className="flex items-center">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-sm font-semibold mr-3">
                  SM
                </div>
                <div>
                  <p className="font-semibold text-white">Sarah Mitchell</p>
                  <p className="text-slate-400 text-sm">Homeowner</p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800 rounded-lg shadow-2xl p-6 hover:bg-zinc-750 transition-all duration-300 border border-zinc-700">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.922-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-300 mb-4 italic">
                "After storm damage, JP Pro Services handled everything from insurance claims to completion. Outstanding service and quality workmanship."
              </p>
              <div className="flex items-center">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-sm font-semibold mr-3">
                  MJ
                </div>
                <div>
                  <p className="font-semibold text-white">Mike Johnson</p>
                  <p className="text-slate-400 text-sm">Business Owner</p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800 rounded-lg shadow-2xl p-6 hover:bg-zinc-750 transition-all duration-300 border border-zinc-700">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.922-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-300 mb-4 italic">
                "The team was professional, clean, and completed our commercial roof ahead of schedule. Excellent communication throughout the project."
              </p>
              <div className="flex items-center">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-sm font-semibold mr-3">
                  LD
                </div>
                <div>
                  <p className="font-semibold text-white">Lisa Davis</p>
                  <p className="text-slate-400 text-sm">Property Manager</p>
                </div>
              </div>
            </div>
          </div>


        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-zinc-900 py-16">
        <div className="mx-auto w-[min(1200px,94%)]">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Answering your questions about our roofing services.
            </p>
          </div>
          
          <FAQ />
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