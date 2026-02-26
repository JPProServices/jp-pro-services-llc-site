"use client";
import { useState } from "react";
import LeadCTA from "@/components/LeadCTA";
import TrustBadges from "@/components/TrustBadges";

export default function RoofRepairClient() {
  const [activeProcess, setActiveProcess] = useState<'emergency' | 'scheduled'>('emergency');
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
  const repairFAQs = [
    { question: "How do I know if I need roof repairs or a full replacement?", answer: "Minor issues like a few missing shingles or small leaks can often be repaired. However, extensive damage, multiple leaks, or roofs over 20 years old may require replacement. We provide honest assessments during our free inspection." },
    { question: "How quickly can you fix emergency roof leaks?", answer: "We offer emergency roof repair services with response times typically within 1-2 hours for urgent leaks. We'll provide immediate temporary solutions and schedule permanent repairs as soon as weather permits." },
    { question: "Do you provide temporary weatherproofing while waiting for repairs?", answer: "Yes! We provide emergency tarping and temporary weatherproofing to prevent further damage while permanent repairs are scheduled or insurance claims are processed." },
    { question: "Will insurance cover my roof repairs?", answer: "Insurance coverage depends on the cause of damage. Storm damage, hail, and wind damage are typically covered. We work directly with insurance companies and can help with the claims process." },
    { question: "How long do roof repairs typically take?", answer: "Most standard repairs can be completed in 1-2 days, depending on weather conditions and the extent of damage. Emergency repairs and temporary fixes are often completed the same day." },
    { question: "Do you warranty your roof repair work?", answer: "Yes, all our roof repairs come with a 5-year workmanship warranty. We also provide material warranties from manufacturers for any replacement components used." }
  ];
  const phoneDisplay = process.env.NEXT_PUBLIC_COMPANY_PHONE_DISPLAY || "(615) 636-6126";
  // ...existing JSX from RoofRepairPage goes here...
  return null;
}
