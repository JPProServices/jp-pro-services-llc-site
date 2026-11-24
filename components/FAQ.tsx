"use client";
import { useState } from "react";

const faqs = [
  {
    question: "What services do you offer?",
    answer: "Roofing and gutters; decks, fencing and outdoor living; siding and exterior finishes; and custom remodeling. Every project starts with a free estimate."
  },
  {
    question: "What areas do you serve?",
    answer: "We work with homeowners within 50 miles of Nashville. Our office is at 2803 Foster Ave, Suite 101, Nashville, TN 37210."
  },
  {
    question: "Are you licensed and insured?",
    answer: "Yes. We hold Tennessee Home Improvement License #13503, we are insured and bonded, BBB accredited, and a GAF certified roofing contractor."
  },
  {
    question: "What products do you use?",
    answer: "GAF for roofing, and Trex and TimberTech for decks. We walk you through the options for your project during the estimate."
  },
  {
    question: "How long will my project take?",
    answer: "It depends on the size of the project and the weather. We give you a schedule with your written estimate."
  },
  {
    question: "What does a project typically cost?",
    answer: "Cost depends on the size of the job, the materials you choose and how complex the work is. We provide transparent, detailed estimates with no surprise costs."
  },
  {
    question: "Do you help with insurance claims?",
    answer: "Yes. We have experience negotiating and handling insurance claims for storm damage. We document the damage and work with your insurance adjuster."
  },
  {
    question: "What warranties are included?",
    answer: "Roofing comes with a 5-year labor warranty and a 50-year materials warranty. All other work comes with a 2-year labor warranty. We explain the coverage before work begins."
  },
  {
    question: "How quickly can you schedule a repair?",
    answer: "We offer fast scheduling for storm damage and leak repairs. Call us during office hours, Monday–Saturday, 8:00 AM–4:00 PM, and we'll find the earliest time that works for you."
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
          Have more questions? We're here to help with all your roofing needs.
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