import { Metadata } from 'next';
import Link from 'next/link';
import { FAQAccordion } from '@/components/FAQAccordion';
import { ServiceCard } from '@/components/ServiceCard';
import { InfoCard } from '@/components/InfoCard';
import { getDictionary, Lang } from '@/content';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const isTh = lang === 'th';
  
  return {
    title: isTh 
      ? 'ยุติการตั้งครรภ์ในประเทศไทย - บริการที่ปลอดภัย ถูกกฎหมาย'
      : 'Abortion Thailand - Safe, Legal Abortion Services',
    description: isTh
      ? 'ข้อมูลทางการแพทย์ที่ถูกต้องสำหรับการยุติการตั้งครรภ์ในประเทศไทย บริการที่ปลอดภัย เป็นความลับ และถูกกฎหมาย'
      : 'Accurate medical information for pregnancy termination in Thailand. Safe, legal, and confidential services.',
    alternates: {
      canonical: `/${lang}`,
      languages: {
        'th': '/th',
        'en': '/en',
      },
    },
  };
}

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang as Lang);
  const t = dict;
  const isTh = lang === 'th';

  const services = [
    {
      ...t.services.medication,
      href: `/${lang}/services#medication`,
      cta: t.services.cta,
    },
    {
      ...t.services.hospital,
      href: `/${lang}/services#hospital`,
      popular: true,
      cta: t.services.cta,
    },
    {
      ...t.services.mva,
      href: `/${lang}/services#mva`,
      cta: t.services.cta,
    },
  ];

  const eligibilityCards = [
    {
      ...t.eligibility.card1,
      href: `/${lang}/faq`,
    },
    {
      ...t.eligibility.card2,
      href: `/${lang}/international`,
    },
    {
      ...t.eligibility.card3,
      href: `/${lang}/faq#minors`,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#7FB069]/10 via-[#F5F0E8] to-[#E8A598]/10">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-[#7FB069]/10 text-[#7FB069] text-sm font-medium rounded-full mb-6">
                {t.hero.badge}
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-[#2D3436] mb-4 leading-tight">
                {t.hero.headline}
              </h1>
              <p className="text-xl text-[#7FB069] font-medium mb-4">
                {t.hero.subheadline}
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {t.hero.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://line.me/ti/p/~emmy"
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#7FB069] text-white font-medium rounded-full hover:bg-[#6a9558] transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.365 9.863c.349 0 .626.32.626.71 0 .391-.277.71-.626.71H17.61v1.405h1.755c.349 0 .626.32.626.71 0 .392-.277.71-.626.71h-2.386c-.943 0-1.702-.759-1.702-1.703v-1.128H13.9c-.349 0-.626-.32-.626-.71 0-.391.277-.71.626-.71h1.755v-1.404H13.9c-.349 0-.626-.32-.626-.71 0-.391.277-.71.626-.71h2.386c.943 0 1.702.759 1.702 1.703v1.129h1.753zm-3.69 3.237l-2.34 2.34c-.489.49-1.13.763-1.793.763-.663 0-1.304-.273-1.794-.763l-2.34-2.34c-.757-.757-.757-1.98 0-2.737.757-.756 1.98-.756 2.736 0l1.704 1.704 1.705-1.704c.757-.756 1.979-.756 2.736 0 .757.757.757 1.98 0 2.737"/>
                  </svg>
                  {t.hero.cta}
                </Link>
                <Link
                  href={`/${lang}/services`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#2D3436] font-medium rounded-full border border-gray-200 hover:border-gray-300 transition-colors"
                >
                  {t.services.title}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
              </div>
              <div className="mt-6 flex items-center gap-2 text-[#E8A598]">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-sm font-medium">{t.hero.emergency}</span>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative">
                <div className="w-full aspect-square rounded-3xl bg-gradient-to-br from-[#7FB069]/20 to-[#E8A598]/20 flex items-center justify-center">
                  <svg className="w-48 h-48 text-[#7FB069]/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#7FB069]/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#7FB069]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-[#2D3436]">{t.trust.badge}</p>
                <p className="text-sm text-gray-500">{t.trust.subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#2D3436] mb-4">
              {t.services.title}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t.services.subtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ServiceCard
                key={i}
                lang={lang as Lang}
                {...service}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2D3436] mb-8 text-center">
            {t.eligibility.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {eligibilityCards.map((card, i) => (
              <InfoCard key={i} {...card} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#2D3436] mb-4">
              {t.faq.title}
            </h2>
          </div>
          <FAQAccordion dict={dict} />
          <div className="mt-8 text-center">
            <Link
              href={`/${lang}/faq`}
              className="inline-flex items-center gap-2 text-[#7FB069] font-medium hover:underline"
            >
              {isTh ? 'ดูคำถามทั้งหมด' : 'View all questions'}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#7FB069]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {isTh ? 'พร้อมสอบถามหรือจองคิวหรือไม่?' : 'Ready to inquire or book an appointment?'}
          </h2>
          <p className="text-white/80 mb-8">
            {isTh 
              ? 'ติดต่อเราผ่าน LINE ได้ตลอด 24 ชั่วโมง' 
              : 'Contact us via LINE anytime, 24/7'}
          </p>
          <Link
            href="https://line.me/ti/p/~emmy"
            target="_blank"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#7FB069] font-semibold rounded-full hover:bg-gray-100 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.365 9.863c.349 0 .626.32.626.71 0 .391-.277.71-.626.71H17.61v1.405h1.755c.349 0 .626.32.626.71 0 .392-.277.71-.626.71h-2.386c-.943 0-1.702-.759-1.702-1.703v-1.128H13.9c-.349 0-.626-.32-.626-.71 0-.391.277-.71.626-.71h1.755v-1.404H13.9c-.349 0-.626-.32-.626-.71 0-.391.277-.71.626-.71h2.386c.943 0 1.702.759 1.702 1.703v1.129h1.753zm-3.69 3.237l-2.34 2.34c-.489.49-1.13.763-1.793.763-.663 0-1.304-.273-1.794-.763l-2.34-2.34c-.757-.757-.757-1.98 0-2.737.757-.756 1.98-.756 2.736 0l1.704 1.704 1.705-1.704c.757-.756 1.979-.756 2.736 0 .757.757.757 1.98 0 2.737"/>
            </svg>
            {t.hero.cta}
          </Link>
        </div>
      </section>
    </div>
  );
}
