"use client";
import { useState } from "react";
import LeadCTA from "@/components/LeadCTA";
import TrustBadges from "@/components/TrustBadges";

export default function AsphaltShinglesClient() {
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
      answer: "GAF asphalt shingles typically last 25-50 years depending on the product line, with proper installation and maintenance. Our professional GAF-certified installation ensures maximum lifespan."
    },
    {
      question: "Are asphalt shingles good for Tennessee weather?",
      answer: "Absolutely. GAF shingles are engineered for extreme weather conditions including high winds, hail, and temperature fluctuations common in Middle Tennessee."
    },
    {
      question: "What's included in the GAF warranty?",
      answer: "GAF warranties cover material defects, workmanship (with certified contractors), and can include system warranties covering all roof components when installed together."
    },
    {
      question: "How much do GAF asphalt shingles cost?",
      answer: "Costs vary by shingle type and roof complexity. Architectural shingles offer excellent value, while designer shingles provide luxury appeal. We provide detailed estimates for all options."
    },
    {
      question: "Can you install over existing shingles?",
      answer: "No, not usually. We typically recommend full removal of existing shingles for best results, proper inspection of the roof deck, and full warranty compliance. This ensures optimal performance and longevity of your new GAF shingles."
    },
    {
      question: "Do you handle insurance claims?",
      answer: "Yes! We specialize in insurance claims and work directly with your insurance company to ensure you get the coverage you deserve for storm damage repairs."
    }
  ];
  const phoneDisplay = "(615) 636-6126";

  // ...existing JSX from page.tsx...
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[80vh]">
        <div aria-hidden className="absolute inset-0 -z-10">
          <img src="/hero.jpg" alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/40" />
        </div>
        <div className="relative z-10 mx-auto w-[min(1200px,94%)] grid items-start gap-8 py-10 md:grid-cols-2 md:py-14">
          <div>
            {/* Top badges */}
            <div className="mb-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-lg bg-black/35 px-4 py-2 text-white backdrop-blur">🏆 GAF Certified Contractor</span>
              <span className="inline-flex items-center gap-2 rounded-lg bg-black/35 px-4 py-2 text-white backdrop-blur">🛡️ 25+ Year Warranties</span>
            </div>
            <h1 className="max-w-xl text-5xl font-extrabold leading-[1.05] tracking-tight text-white md:text-6xl">Premium GAF Asphalt Shingles in Nashville</h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-200">Tennessee's most trusted roofing choice. GAF certified shingles with unmatched durability, style, and value backed by industry-leading warranties.</p>
            <div className="mt-6"><TrustBadges /></div>
          </div>
          <div className="md:pt-6"><LeadCTA /></div>
        </div>
      </section>
      {/* ...rest of the JSX from original page.tsx... */}
    </main>
  );
}
