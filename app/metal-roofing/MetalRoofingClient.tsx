"use client";
import { useState } from "react";
import LeadCTA from "@/components/LeadCTA";
import TrustBadges from "@/components/TrustBadges";

export default function MetalRoofingClient() {
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
  const phoneDisplay = process.env.NEXT_PUBLIC_COMPANY_PHONE_DISPLAY || "(615) 636-6126";

  // ...existing JSX from MetalRoofingPage goes here...
  return null;
}
