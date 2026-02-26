"use client";
import { useState } from "react";
import LeadCTA from "@/components/LeadCTA";
import TrustBadges from "@/components/TrustBadges";

export default function RoofReplacementClient() {
  const [activeProcess, setActiveProcess] = useState<'insurance' | 'retail'>('insurance');
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
    { question: "How do I know if I need a roof replacement vs. repair?", answer: "Consider replacement if your roof is over 20 years old, has extensive damage, multiple leaks, or repair costs exceed 50% of replacement cost. Our free inspection can help determine the best option." },
    { question: "How long does a roof replacement take?", answer: "Most residential roof replacements take 1-2 days depending on size, weather, and complexity. We work efficiently to minimize disruption to your daily routine." },
    { question: "What's included in a complete roof replacement?", answer: "A full replacement includes removing old materials, inspecting and repairing the deck if needed, installing new underlayment, drip edge, flashing, shingles, and ridge vents for proper ventilation." },
    { question: "Do you handle permits and inspections?", answer: "Yes, we take care of all necessary permits and coordinate inspections with local authorities to ensure your new roof meets all building codes and requirements." },
    { question: "What happens if it rains during my roof replacement?", answer: "We monitor weather closely and use tarps and temporary protection when needed. If severe weather threatens, we'll secure your roof and resume work when conditions improve." },
    { question: "What warranty comes with a new roof?", answer: "We provide workmanship warranties on our installation, and materials come with manufacturer warranties. Warranty terms vary by product - we'll explain all coverage during your consultation." }
  ];
  const phoneDisplay = process.env.NEXT_PUBLIC_COMPANY_PHONE_DISPLAY || "(615) 636-6126";
  // ...existing JSX from RoofReplacementPage goes here...
  return null;
}
