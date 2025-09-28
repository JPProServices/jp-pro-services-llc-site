"use client";
import { useState } from "react";

const faqs = [
  {
    question: "How long will my roof replacement project take?",
    answer: "Timeline varies by project size and weather. Most residential homes take 2-4 days to complete. We provide detailed scheduling during your consultation."
  },
  {
    question: "What signs indicate I need a new roof?",
    answer: "Key indicators include damaged or missing shingles, interior water damage, excessive granule loss, and roofs approaching 20+ years old. Schedule a free inspection for professional assessment."
  },
  {
    question: "Do you handle insurance claims?",
    answer: "Absolutely. We work directly with insurance adjusters, document damage thoroughly, and help navigate the claims process from start to finish."
  },
  {
    question: "What does a new roof typically cost?",
    answer: "Investment varies based on home size, material choice, and project complexity. We provide transparent, detailed estimates with no surprise costs."
  },
  {
    question: "Is it possible to install over existing shingles?",
    answer: "While sometimes possible, we typically recommend full removal to properly inspect and address underlying issues. This ensures better long-term performance."
  },
  {
    question: "What warranties are included?",
    answer: "We offer comprehensive manufacturer warranties on materials plus our own workmanship guarantee. Coverage details vary by product and are fully explained before installation."
  },
  {
    question: "Are emergency services available?",
    answer: "Yes, we provide urgent repair services for storm damage, leaks, and other emergency situations. Contact us immediately for rapid response."
  },
  {
    question: "How should I prepare my property?",
    answer: "We'll provide a detailed preparation checklist, but generally involves clearing driveway access, protecting landscaping, and securing outdoor items. Our team handles most preparation."
  }
];

export default function FAQ() {
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

  return (
    <div className="max-w-4xl mx-auto">
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-slate-200 last:border-b-0">
          <button
            className="w-full py-6 px-2 flex items-center justify-between text-left hover:bg-slate-50 transition-colors duration-200 group"
            onClick={() => toggleFAQ(index)}
          >
            <h3 className="text-lg font-semibold text-slate-900 pr-4 group-hover:text-blue-600 transition-colors duration-200">
              {faq.question}
            </h3>
            <div className="flex-shrink-0">
              <div className={`w-8 h-8 rounded-full border-2 border-slate-300 flex items-center justify-center transition-all duration-300 ${
                openIndexes.has(index)
                  ? 'border-blue-600 bg-blue-600 rotate-45' 
                  : 'group-hover:border-blue-600'
              }`}>
                <svg
                  className={`w-4 h-4 transition-colors duration-300 ${
                    openIndexes.has(index) ? 'text-white' : 'text-slate-400 group-hover:text-blue-600'
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
            <div className="px-2 py-2 bg-slate-50 rounded-lg border-l-4 border-blue-600">
              <p className="text-slate-700 leading-relaxed text-base">
                {faq.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
      
      {/* CTA at bottom */}
      <div className="text-center mt-12 pt-8 border-t border-slate-200">
        <p className="text-slate-600 mb-4">
          Have more questions? We're here to help with all your roofing needs.
        </p>
        <button
          onClick={() => {
            document.getElementById('contact')?.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'start' 
            });
          }}
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl group"
        >
          <span>Get Your Free Estimate</span>
          <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}