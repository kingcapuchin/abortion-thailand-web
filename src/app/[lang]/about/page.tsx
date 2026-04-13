import { Metadata } from 'next';
import Link from 'next/link';
import { getDictionary, Lang } from '@/content';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const isTh = lang === 'th';
  
  return {
    title: isTh ? 'เกี่ยวกับเรา - ข้อมูลองค์กรและนโยบาย' : 'About Us - Organization & Policies',
    description: isTh
      ? 'เรียนรู้เกี่ยวกับองค์กรของเรา ความร่วมมือกับโรงพยาบาลคลองตัน และนโยบายความเป็นส่วนตัว'
      : 'Learn about our organization, partnership with Klongtun Hospital, and privacy policy.',
  };
}

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang as Lang);
  const t = dict;
  const isTh = lang === 'th';

  const sections = [
    {
      icon: (
        <svg className="w-8 h-8 text-[#7FB069]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      ...t.about.organization,
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#7FB069]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      ...t.about.partner,
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#7FB069]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      ...t.about.medical,
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#7FB069]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      ...t.about.privacy,
    },
  ];

  return (
    <div className="py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#2D3436] mb-4">
            {t.about.title}
          </h1>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          {sections.map((section, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0">{section.icon}</div>
                <div>
                  <h2 className="text-xl font-semibold text-[#2D3436]">
                    {section.title}
                  </h2>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed pl-12">
                {section.description}
              </p>
            </div>
          ))}
        </div>

        {/* Medical Disclaimer */}
        <section className="mt-12 bg-[#F5F0E8] rounded-2xl p-6 md:p-8">
          <h2 className="text-lg font-semibold text-[#2D3436] mb-4">
            {isTh ? 'ข้อจำกัดความรับผิดชอบทางการแพทย์' : 'Medical Disclaimer'}
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            {t.footer.disclaimer}
          </p>
        </section>

        {/* Partner Disclosure */}
        <section className="mt-8 bg-white rounded-2xl border border-gray-100 p-6 md:p-8">
          <h2 className="text-lg font-semibold text-[#2D3436] mb-4">
            {isTh ? 'การเปิดเผยข้อมูลเกี่ยวกับคู่ความร่วมมือ' : 'Partnership Disclosure'}
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {isTh 
              ? 'เว็บไซต์นี้ดำเนินการโดยองค์กรอิสระ ไม่ได้เป็นส่วนหนึ่งของโรงพยาบาลคลองตันหรือหน่วยงานรัฐบาลใดๆ ข้อมูลเกี่ยวกับความร่วมมือกับโรงพยาบาลคลองตันมีไว้เพื่อความโปร่งใสเท่านั้น ไม่มีการใช้โลโก้หรือเครื่องหมายของโรงพยาบาลในเว็บไซต์นี้'
              : 'This website is operated by an independent organization and is not affiliated with Klongtun Hospital or any government agency. Information about our partnership with Klongtun Hospital is provided for transparency only. No hospital logos or trademarks are used on this website.'}
          </p>
        </section>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            {isTh ? 'มีคำถามเพิ่มเติม?' : 'Have more questions?'}
          </p>
          <Link
            href={`/${lang}`}
            className="inline-flex items-center gap-2 text-[#7FB069] font-medium hover:underline"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {t.nav.home}
          </Link>
        </div>
      </div>
    </div>
  );
}
