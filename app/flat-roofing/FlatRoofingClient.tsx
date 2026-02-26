"use client";
import { useState } from "react";
import LeadCTA from "@/components/LeadCTA";
import TrustBadges from "@/components/TrustBadges";

export default function FlatRoofingClient() {
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
  const flatRoofingFAQs = [
    { question: "What are the benefits of flat roofing systems?", answer: "Flat roofs offer cost-effective installation, easy maintenance access, maximum interior space utilization, and excellent performance for commercial and industrial buildings." },
    { question: "How long do flat roofing systems last?", answer: "Quality flat roofing systems typically last 15-30 years depending on the membrane type and maintenance. TPO and EPDM systems offer excellent longevity with proper installation." },
    { question: "Which flat roofing membrane is best for Middle Tennessee?", answer: "TPO and EPDM perform excellently in Tennessee's climate. We evaluate your specific needs, building use, and budget to recommend the optimal membrane system." },
    { question: "Can flat roofs handle snow and ice loads?", answer: "Yes, properly designed flat roofs easily handle Tennessee's snow loads. Our installations include proper drainage and structural considerations for all weather conditions." },
    { question: "What maintenance do flat roofs require?", answer: "Regular inspections, drain cleaning, and minor repairs. Flat roofs are actually easier to maintain than sloped roofs due to safe, easy access for routine maintenance." },
    { question: "Are flat roofs energy efficient?", answer: "Very energy efficient, especially white TPO membranes that reflect heat. Flat roofs also accommodate insulation upgrades and rooftop HVAC equipment efficiently." }
  ];
  const phoneDisplay = process.env.NEXT_PUBLIC_COMPANY_PHONE_DISPLAY || "(615) 636-6126";
  // ...existing JSX from FlatRoofingPage goes here...
  return null;
}
