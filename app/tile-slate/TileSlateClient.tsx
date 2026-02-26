"use client";
import { useState } from "react";
import LeadCTA from "@/components/LeadCTA";
import TrustBadges from "@/components/TrustBadges";

export default function TileSlateClient() {
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
  const tileSlateFAQs = [
    { question: "How long do tile and slate roofs last?", answer: "Natural slate can last 100+ years, while clay tiles typically last 50-100 years. Both materials are considered lifetime investments for your home." },
    { question: "Can my roof structure support tile or slate?", answer: "Most roofs can support tile, but slate requires structural evaluation due to its weight. We provide thorough structural assessments and can recommend reinforcement if needed." },
    { question: "What maintenance do tile and slate roofs require?", answer: "Minimal maintenance is required - primarily periodic inspections and occasional tile replacement. Slate requires virtually no maintenance beyond basic gutter cleaning." },
    { question: "Are tile and slate roofs suitable for Tennessee weather?", answer: "Yes, both materials perform excellently in Tennessee's climate. They're highly resistant to freeze-thaw cycles, wind, and hail damage common in our area." },
    { question: "What colors and styles are available?", answer: "Natural slate comes in gray, black, green, and purple tones. Clay tiles offer numerous profiles and colors, from traditional terracotta to modern designs." },
    { question: "How much do tile and slate roofs cost?", answer: "Costs vary significantly based on material type, complexity, and structural requirements. We provide detailed estimates after assessing your specific project needs." }
  ];
  const phoneDisplay = process.env.NEXT_PUBLIC_COMPANY_PHONE_DISPLAY || "(615) 636-6126";
  // ...existing JSX from TileSlatePage goes here...
  return null;
}
