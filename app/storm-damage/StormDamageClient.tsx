"use client";
import { useState } from "react";
import LeadCTA from "@/components/LeadCTA";
import TrustBadges from "@/components/TrustBadges";

export default function StormDamageClient() {
  const [openFAQs, setOpenFAQs] = useState<Set<number>>(new Set());
  const [activeProcess, setActiveProcess] = useState<'emergency' | 'insurance'>('emergency');
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
    { question: "What should I do immediately after storm damage?", answer: "First, ensure everyone's safety. Then, document the damage with photos, contact your insurance company, and call us for emergency tarping to prevent further water damage." },
    { question: "Will my insurance cover storm damage repairs?", answer: "Most homeowner's insurance policies cover storm damage from wind, hail, and falling trees. We work directly with insurance adjusters and can help document damage for your claim." },
    { question: "How quickly can you respond to storm damage?", answer: "We offer 24/7 emergency response for severe storm damage. Our priority is preventing further damage with temporary solutions like tarping while we assess the full scope of repairs needed." },
    { question: "What types of storm damage do you repair?", answer: "We handle wind damage, hail damage, fallen tree damage, missing shingles, damaged flashing, and water damage from roof leaks caused by storms." },
    { question: "Do you help with insurance claims?", answer: "Yes! We work with your insurance company throughout the claims process, provide detailed damage documentation, and ensure you receive fair coverage for necessary repairs." },
    { question: "Can you provide temporary protection while waiting for repairs?", answer: "Absolutely. We provide emergency tarping and temporary weatherproofing to prevent additional damage while insurance claims are processed and permanent repairs are scheduled." }
  ];
  const phoneDisplay = process.env.NEXT_PUBLIC_COMPANY_PHONE_DISPLAY || "(615) 636-6126";
  // ...existing JSX from StormDamagePage goes here...
  return null;
}
