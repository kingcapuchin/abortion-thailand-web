'use client';

import { useState } from 'react';
import { Dictionary } from '@/content';

interface FAQAccordionProps {
  dict: Dictionary;
}

export function FAQAccordion({ dict }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const t = dict.faq.questions;

  return (
    <div className="space-y-3">
      {t.map((item, index) => (
        <div key={index} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
          >
            <span className="font-medium text-[#2D3436] pr-4">{item.q}</span>
            <svg
              className={`w-5 h-5 text-[#7FB069] flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openIndex === index && (
            <div className="px-5 pb-4 text-gray-600 leading-relaxed">
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
