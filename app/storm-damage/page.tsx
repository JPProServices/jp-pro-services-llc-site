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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
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
                <svg className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 182 180">
                  <g>
                    <g>
                      <g>
                        <path d="M146.069,48.175c-1.881-25.887-24.296-46.392-51.576-46.392c-21.642,0-40.714,12.797-48.323,32.12
                          c-0.529-0.019-1.062-0.028-1.598-0.028C19.995,33.876,0,53.871,0,78.449s19.995,44.573,44.573,44.573
                          c0.467,0,0.93-0.007,1.389-0.021c0.129,0.014,0.261,0.021,0.394,0.021h99.843c0.258,0,0.512-0.028,0.759-0.083
                          c19.619-1.313,34.899-17.61,34.899-37.358C181.856,65.49,165.95,49.045,146.069,48.175z M146,115.847
                          c-0.126,0.007-0.251,0.021-0.376,0.042H46.888c-0.216-0.031-0.446-0.056-0.669-0.035c-0.547,0.021-1.093,0.035-1.647,0.035
                          c-20.646,0-37.441-16.795-37.441-37.441c0-20.645,16.795-37.441,37.441-37.441c1.243,0,2.476,0.061,3.691,0.179
                          c1.64,0.169,3.211-0.843,3.733-2.43C57.892,20.907,74.973,8.915,94.494,8.915c24.578,0,44.573,19.196,44.573,42.835
                          c0,0.977,0.4,1.91,1.107,2.584c0.71,0.674,1.675,1.047,2.636,0.977c0.533-0.026,1.065-0.04,1.605-0.04
                          c16.711,0,30.309,13.596,30.309,30.309C174.725,101.727,162.108,115.022,146,115.847z"/>
                        <path d="M40.053,134.999c-2.521,3.019-15.092,18.518-15.092,27.245c0,9.83,7.999,17.829,17.829,17.829
                          c9.83,0,17.829-7.999,17.829-17.829c0-8.727-12.571-24.226-15.092-27.245C44.169,133.378,41.411,133.378,40.053,134.999z
                           M42.79,172.943c-5.899,0-10.697-4.799-10.697-10.697c0-3.827,5.596-12.585,10.697-19.246
                          c5.102,6.658,10.697,15.412,10.697,19.246C53.487,168.144,48.689,172.943,42.79,172.943z"/>
                        <path d="M86.408,134.999c-2.521,3.019-15.092,18.518-15.092,27.245c0,9.83,7.999,17.829,17.829,17.829
                          c9.83,0,17.829-7.999,17.829-17.829c0-8.727-12.571-24.226-15.092-27.245C90.524,133.378,87.766,133.378,86.408,134.999z
                           M89.145,172.943c-5.899,0-10.697-4.799-10.697-10.697c0-3.827,5.596-12.585,10.697-19.246
                          c5.102,6.658,10.697,15.412,10.697,19.246C99.843,168.144,95.044,172.943,89.145,172.943z"/>
                        <path d="M132.764,134.999c-2.521,3.019-15.092,18.518-15.092,27.245c0,9.83,7.999,17.829,17.829,17.829
                          c9.83,0,17.829-7.999,17.829-17.829c0-8.727-12.571-24.226-15.092-27.245C136.88,133.378,134.122,133.378,132.764,134.999z
                           M135.501,172.943c-5.899,0-10.697-4.799-10.697-10.697c0-3.827,5.596-12.585,10.697-19.246
                          c5.102,6.658,10.697,15.412,10.697,19.246C146.198,168.144,141.4,172.943,135.501,172.943z"/>
                      </g>
                    </g>
                  </g>
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
                <svg className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 512 512">
                  <g>
                    <path d="M287.64,94.921c-31.721,0-57.528,25.807-57.528,57.528h34.517c0-12.688,10.323-23.011,23.011-23.011
                      c12.688,0,23.011,10.323,23.011,23.011c0,12.688-10.323,23.011-23.011,23.011H46.022v34.517H287.64
                      c31.721,0,57.528-25.807,57.528-57.528C345.169,120.728,319.361,94.921,287.64,94.921z"/>
                  </g>
                  <g>
                    <g>
                      <path d="M431.461,106.427c-34.893,0-63.281,28.388-63.281,63.281c0,25.377,20.646,46.022,46.022,46.022
                        c25.377,0,46.022-20.646,46.022-46.022h-34.517c0,6.344-5.161,11.506-11.506,11.506c-6.344,0-11.506-5.161-11.506-11.506
                        c0-15.861,12.904-28.764,28.764-28.764c25.377,0,46.022,20.646,46.022,46.022c0,25.377-20.646,46.022-46.022,46.022H0v34.517
                        h431.461c44.409,0,80.539-36.13,80.539-80.539C512,142.557,475.87,106.427,431.461,106.427z"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M345.169,290.517H46.022v34.517h299.146c15.861,0,28.764,12.904,28.764,28.764c0,15.861-12.904,28.764-28.764,28.764
                        c-15.86,0-28.764-12.904-28.764-28.764h-34.517c0,34.893,28.388,63.281,63.281,63.281c34.893,0,63.281-28.388,63.281-63.281
                        C408.449,318.905,380.062,290.517,345.169,290.517z"/>
                    </g>
                  </g>
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
                <svg className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 400 400">
                  <path d="M269.079,158.489c10.034-7.365,15.37-16.582,15.37-27.38c0-12.41-13.664-27.438-41.773-45.944
                    c-3.719-2.448-7.521-4.843-11.329-7.164c12.478-4.98,18.636-12.525,18.636-22.714c0-17.096-36.483-38.621-67.089-53.668
                    c-4.222-2.074-9.266-2.163-13.214-0.231c-30.82,15.101-67.56,36.709-67.56,53.899c0,10.189,6.158,17.734,18.635,22.714
                    c-3.58,2.182-7.155,4.431-10.664,6.728c-28.556,18.703-42.438,33.874-42.438,46.379c0,10.797,5.335,20.014,15.368,27.379
                    c-33.51,22.759-49.834,41.257-49.834,56.444c0,20.557,15.039,37.558,43.49,49.164c25.117,10.246,60.408,15.888,99.372,15.888
                    c38.965,0,74.256-5.643,99.372-15.888c28.452-11.606,43.491-28.607,43.491-49.164C318.914,199.745,302.589,181.251,269.079,158.489
                    z"/>
                  <path d="M197.037,301.491c-0.445,0-0.863,0.013-1.236,0.03c-6.539,0.307-13.185,0.463-19.75,0.463
                    c-6.722,0-14.608-0.152-20.093-0.389c-0.229-0.01-0.464-0.015-0.7-0.015c-6.92,0-11.754,3.911-11.754,9.511v33.01
                    c0,4.411,3.589,8,8,8h49c4.411,0,8-3.589,8-8v-33.004C208.504,306.454,205.491,301.491,197.037,301.491z"/>
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
                <svg className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3c0 0-6 8-6 12 0 3.31 2.69 6 6 6s6-2.69 6-6c0-4-6-12-6-12z"/>
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