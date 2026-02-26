"use client";
import { useState } from "react";
import LeadCTA from "@/components/LeadCTA";
import ResidentialFAQ from "@/components/ResidentialFAQ";
import TrustBadges from "@/components/TrustBadges";

export default function ResidentialRoofingClient() {
  const [activeProcess, setActiveProcess] = useState<'insurance' | 'direct-pay'>('insurance');
  const phoneDisplay = process.env.NEXT_PUBLIC_COMPANY_PHONE_DISPLAY || "(615) 636-6126";
  // ...existing JSX from ResidentialRoofingPage goes here...
  return null;
}
