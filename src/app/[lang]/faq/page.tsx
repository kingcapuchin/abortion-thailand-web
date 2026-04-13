import { Metadata } from 'next';
import { FAQSearch } from '@/components/FAQSearch';
import { getDictionary, Lang } from '@/content';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const isTh = lang === 'th';
  
  return {
    title: isTh ? 'คำถามที่พบบ่อย - การยุติการตั้งครรภ์' : 'FAQ - Pregnancy Termination',
    description: isTh
      ? 'คำตอบสำหรับคำถามที่พบบ่อยเกี่ยวกับการยุติการตั้งครรภ์ในประเทศไทย รวมถึงความปลอดภัย ค่าใช้จ่าย และกระบวนการ'
      : 'Answers to frequently asked questions about pregnancy termination in Thailand, including safety, costs, and procedures.',
  };
}

export default async function FAQPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang as Lang);
  const t = dict;
  const isTh = lang === 'th';

  // JSON-LD FAQPage schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: t.faq.questions.map((q) => ({
      '@type': 'Question',
      name: q.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.a,
      },
    })),
  };

  return (
    <div className="py-12 md:py-16">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-3xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#2D3436] mb-4">
            {t.faq.title}
          </h1>
          <p className="text-gray-600">
            {isTh 
              ? 'ค้นหาคำตอบสำหรับคำถามที่พบบ่อยของคุณ' 
              : 'Find answers to your common questions'}
          </p>
        </div>

        {/* FAQ Content */}
        <FAQSearch dict={dict} lang={lang as Lang} />

        {/* Still Have Questions CTA */}
        <div className="mt-12 bg-[#7FB069] rounded-2xl p-6 md:p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-2">
            {isTh ? 'ยังมีคำถามเพิ่มเติม?' : 'Still have more questions?'}
          </h2>
          <p className="text-white/80 mb-4">
            {isTh 
              ? 'ติดต่อเราได้ตลอด 24 ชั่วโมง' 
              : 'Contact us anytime, 24/7'}
          </p>
          <a
            href="https://line.me/ti/p/~emmy"
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#7FB069] font-medium rounded-full hover:bg-gray-100 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.365 9.863c.349 0 .626.32.626.71 0 .391-.277.71-.626.71H17.61v1.405h1.755c.349 0 .626.32.626.71 0 .392-.277.71-.626.71h-2.386c-.943 0-1.702-.759-1.702-1.703v-1.128H13.9c-.349 0-.626-.32-.626-.71 0-.391.277-.71.626-.71h1.755v-1.404H13.9c-.349 0-.626-.32-.626-.71 0-.391.277-.71.626-.71h2.386c.943 0 1.702.759 1.702 1.703v1.129h1.753zm-3.69 3.237l-2.34 2.34c-.489.49-1.13.763-1.793.763-.663 0-1.304-.273-1.794-.763l-2.34-2.34c-.757-.757-.757-1.98 0-2.737.757-.756 1.98-.756 2.736 0l1.704 1.704 1.705-1.704c.757-.756 1.979-.756 2.736 0 .757.757.757 1.98 0 2.737"/>
            </svg>
            {t.nav.contact}
          </a>
        </div>
      </div>
    </div>
  );
}
