"use client";
import { useState } from "react";
import LeadCTA from "@/components/LeadCTA";
import TrustBadges from "@/components/TrustBadges";

export default function CommercialRoofingClient() {
  const [activeProcess, setActiveProcess] = useState<'maintenance' | 'new-build'>('maintenance');
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

  const commercialFAQs = [
    { question: "What types of commercial properties do you service?", answer: "We service office buildings, retail centers, warehouses, restaurants, medical facilities, and other commercial properties throughout Middle Tennessee." },
    { question: "Do you offer maintenance programs for commercial roofs?", answer: "Yes, we provide scheduled maintenance services to help extend your roof's lifespan and prevent costly emergency repairs. Regular inspections are key to commercial roof longevity." },
    { question: "How do you minimize business disruption during repairs?", answer: "We work around your business hours whenever possible and use efficient installation methods to minimize downtime. Our team coordinates closely with property managers to ensure smooth operations." },
    { question: "Do you work with property management companies?", answer: "Absolutely! We work with property managers, facility directors, and building owners throughout Nashville and Middle Tennessee. We understand the unique needs of commercial properties." },
    { question: "What's the typical lifespan of a commercial roof?", answer: "It varies by material and maintenance. Metal roofs can last 40+ years, while membrane roofs typically last 15-25 years with proper care. Regular maintenance significantly extends roof life." },
    { question: "Do you handle insurance claims for commercial properties?", answer: "Yes, we assist with commercial insurance claims and work directly with adjusters to ensure proper coverage for storm damage and other covered repairs." }
  ];
  const phoneDisplay = process.env.NEXT_PUBLIC_COMPANY_PHONE_DISPLAY || "(615) 636-6126";

  // ...existing JSX from CommercialRoofingPage goes here...
  return null;
}
