"use client";
import { useState } from "react";

const residentialFaqs = [
  {
    question: "How long does a roof installation take?",
    answer: "A typical residential roof installation in Nashville takes 1-2 days, depending on the roof's size, complexity, and weather conditions. Larger or intricate roofs (e.g., historic homes in Franklin or commercial buildings in downtown Nashville) may take longer. Our team works efficiently Monday-Friday, 8:00 AM-5:00 PM, to minimize disruption, with weather delays rescheduled promptly."
  },
  {
    question: "What is the cost of a new roof installation?",
    answer: "Retail costs for a new asphalt shingle roof in Middle Tennessee depends on various factors including the size of the home, materials (e.g., asphalt, metal, slate) and roof complexity. For an accurate estimate, we offer free inspections. Contact us at (615) 705-0779 or online for a tailored quote."
  },
  {
    question: "Will my homeowner's insurance cover a new roof?",
    answer: "Insurance may cover a new roof if damage is caused by a covered peril, like storm or hail damage, common in areas like Murfreesboro or Hendersonville. Coverage depends on your policy (e.g., replacement cost vs. actual cash value). We assist with insurance claims by providing detailed inspections and documentation to streamline the process."
  },
  {
    question: "What types of roofing materials do you offer?",
    answer: "We install a variety of materials suited for Nashville's climate: asphalt shingles (cost-effective, durable), metal roofing (long-lasting, energy-efficient), slate or tile (ideal for historic homes in Belle Meade), and flat roof membranes (e.g., TPO, EPDM for commercial properties in Donelson). We help you choose based on budget, aesthetics, and durability."
  },
  {
    question: "Do I need a full roof replacement or just repairs?",
    answer: "If your roof has widespread damage, missing shingles, or is nearing the end of its lifespan (25+ years for asphalt shingles), a full replacement may be more cost-effective. For minor issues like leaks or isolated storm damage, repairs may suffice. Our free inspection in areas like Brentwood or Lebanon will provide clarity."
  },
  {
    question: "How do you handle insurance claims for roof installations?",
    answer: "We work closely with you and your insurance provider. After a free inspection, we document damage (e.g., from Tennessee storms), provide photos and reports, and liaise with adjusters to ensure fair coverage. Our BBB-accredited team ensures transparency throughout the process for all customers."
  },
  {
    question: "What warranties do you offer on new roof installations?",
    answer: "We provide manufacturer warranties (25+ years for materials like asphalt or metal) and our own workmanship warranty (5 years) for all installations. This ensures peace of mind for homes and businesses in Nashville, Franklin, and beyond. Ask about extended warranty options during your free quote."
  },
  {
    question: "Can you install a new roof in winter or during rainy seasons?",
    answer: "Yes, but timing depends on weather. Nashville's mild winters allow installations year-round, though we avoid rainy or icy days to ensure safety and quality. Spring and fall are ideal for areas like Mt. Juliet or Goodlettsville to avoid summer heat or winter delays. We monitor forecasts to schedule efficiently."
  },
  {
    question: "How do I know if my roof qualifies for an insurance-covered replacement?",
    answer: "If your roof has significant damage from a covered event (e.g., hail, wind, or fallen trees, common in Springfield or La Vergne), your insurance may cover a full or partial replacement. We conduct a thorough inspection to assess damage and guide you through the claim process, ensuring all damage is documented."
  },
  {
    question: "What sets your company apart for roof installations?",
    answer: "As a BBB-accredited, licensed, insured, and bonded company with over two years serving Middle Tennessee, we combine local expertise with premium materials and customer-first service. From historic restorations in Franklin to modern installs in Green Hills, we deliver durable roofs backed by transparent pricing and free inspections."
  },
  {
    question: "Do you offer financing options?",
    answer: "Yes, we offer flexible financing options to make your roof installation affordable. Our plans include low monthly payments and competitive rates, tailored to fit your budget. Whether you're in Hendersonville or Columbia, contact us online to discuss financing details and get a free inspection to start the process."
  }
];

interface ResidentialFAQProps {
  variant?: 'default' | 'compact';
}

export default function ResidentialFAQ({ variant = 'default' }: ResidentialFAQProps) {
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(new Set());

  const toggleFAQ = (index: number) => {
    setOpenIndexes(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const displayFaqs = variant === 'compact' ? residentialFaqs.slice(0, 6) : residentialFaqs;

  return (
    <div className="max-w-4xl mx-auto">
      {displayFaqs.map((faq, index) => (
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
                openIndexes.has(index)
                  ? 'border-yellow-500 bg-yellow-500 rotate-45' 
                  : 'group-hover:border-yellow-400'
              }`}>
                <svg
                  className={`w-4 h-4 transition-colors duration-300 ${
                    openIndexes.has(index) ? 'text-black' : 'text-zinc-400 group-hover:text-yellow-400'
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
            openIndexes.has(index) ? 'max-h-96 pb-6' : 'max-h-0'
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
          Have more questions? We're here to help with all your residential roofing needs.
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
  );
}