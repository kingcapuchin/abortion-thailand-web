'use client';

import { useState, useMemo, useCallback } from 'react';
import { Dictionary, Lang } from '@/content';

interface FAQSearchProps {
  dict: Dictionary;
  lang: Lang;
}

function getCategoryFromQuestion(q: string): string {
  const lowerQ = q.toLowerCase();
  if (lowerQ.includes('legal') || lowerQ.includes('กฎหมาย') || lowerQ.includes('สิทธิ') || lowerQ.includes('rights'))
    return 'กฎหมาย';
  if (lowerQ.includes('cost') || lowerQ.includes('ราคา') || lowerQ.includes('price') || lowerQ.includes('เงิน'))
    return 'ราคา';
  if (lowerQ.includes('minor') || lowerQ.includes('ผู้เยาว์') || lowerQ.includes('under 16') || lowerQ.includes('อายุ'))
    return 'ผู้เยาว์';
  if (lowerQ.includes('international') || lowerQ.includes('ต่างชาติ') || lowerQ.includes('foreign'))
    return 'ผู้ป่าวต่างชาติ';
  if (lowerQ.includes('care') || lowerQ.includes('recovery') || lowerQ.includes('ดูแล') || lowerQ.includes('พัก') || lowerQ.includes('เจ็บ'))
    return 'การดูแล';
  return 'ทั่วไป';
}

export function FAQSearch({ dict, lang }: FAQSearchProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('ทั้งหมด');
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const isTh = lang === 'th';

  const allCategories = useMemo(() => {
    const cats = new Set<string>();
    dict.faq.questions.forEach(item => {
      cats.add(getCategoryFromQuestion(item.q));
    });
    return ['ทั้งหมด', ...Array.from(cats)];
  }, [dict.faq.questions]);

  const filteredQuestions = useMemo(() => {
    let filtered = dict.faq.questions;
    
    // Filter by category
    if (activeCategory !== 'ทั้งหมด') {
      filtered = filtered.filter(item => getCategoryFromQuestion(item.q) === activeCategory);
    }
    
    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(item => 
        item.q.toLowerCase().includes(query) || 
        item.a.toLowerCase().includes(query)
      );
    }
    
    return filtered;
  }, [dict.faq.questions, activeCategory, searchQuery]);

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  }, []);

  const clearSearch = useCallback(() => {
    setSearchQuery('');
  }, []);

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder={isTh ? 'ค้นหาคำถาม...' : 'Search questions...'}
          className="w-full pl-12 pr-12 py-4 bg-white border border-gray-200 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7FB069] focus:border-transparent transition-all"
        />
        {searchQuery && (
          <button
            onClick={clearSearch}
            className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2">
        {allCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === cat
                ? 'bg-[#7FB069] text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* FAQ Items */}
      {filteredQuestions.length > 0 ? (
        <div className="space-y-3">
          {filteredQuestions.map((item, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm">
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
      ) : (
        /* No Results State */
        <div className="text-center py-12">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
            <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            {isTh ? 'ไม่พบผลลัพธ์ที่ตรงกับการค้นหา' : 'No results found'}
          </h3>
          <p className="text-gray-500 mb-4">
            {isTh 
              ? 'ลองค้นหาด้วยคำอื่น หรือเปลี่ยนหมวดหมู่ที่เลือก' 
              : 'Try searching with different keywords or change the selected category'}
          </p>
          <button
            onClick={() => {
              clearSearch();
              setActiveCategory('ทั้งหมด');
            }}
            className="px-4 py-2 text-[#7FB069] font-medium hover:underline"
          >
            {isTh ? 'ล้างการค้นหาทั้งหมด' : 'Clear all filters'}
          </button>
        </div>
      )}
    </div>
  );
}
