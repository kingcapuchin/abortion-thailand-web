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
  const mission = t.mission;
  const whyUs = t.whyUs;

  // Organization JSON-LD schema
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Abortion Thailand',
    url: 'https://abortionthailand.com',
    description: isTh
      ? 'เว็บไซต์ให้ข้อมูลทางการแพทย์ที่ถูกต้องสำหรับการยุติการตั้งครรภ์ในประเทศไทย บริการที่ปลอดภัย เป็นความลับ และถูกกฎหมาย'
      : 'Comprehensive medical information portal for pregnancy termination in Thailand. Safe, legal, and confidential services.',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'info@abortionthailand.com',
      contactOption: '24/7',
    },
    sameAs: [
      'https://line.me/R/ti/p/@895vdurk',
    ],
  };

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

  const missionItems = [
    mission.items.knowledge,
    mission.items.counseling,
    mission.items.support,
    mission.items.booking,
    mission.items.campaign,
  ];

  return (
    <div>
      {/* Organization JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />

      {/* Hero Section with Warm Medical Image */}
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
              
              {/* Multi-Channel CTA */}
              <div className="mb-6">
                <p className="text-sm font-medium text-gray-500 mb-3">
                  {isTh ? '📋 สอบถาม / จองคิว' : '📋 Inquire / Book Appointment'}
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://line.me/R/ti/p/@895vdurk"
                    target="_blank"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#7FB069] text-white font-medium rounded-full hover:bg-[#6a9558] transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.365 9.863c.349 0 .626.32.626.71 0 .391-.277.71-.626.71H17.61v1.405h1.755c.349 0 .626.32.626.71 0 .392-.277.71-.626.71h-2.386c-.943 0-1.702-.759-1.702-1.703v-1.128H13.9c-.349 0-.626-.32-.626-.71 0-.391.277-.71.626-.71h1.755v-1.404H13.9c-.349 0-.626-.32-.626-.71 0-.391.277-.71.626-.71h2.386c.943 0 1.702.759 1.702 1.703v1.129h1.753zm-3.69 3.237l-2.34 2.34c-.489.49-1.13.763-1.793.763-.663 0-1.304-.273-1.794-.763l-2.34-2.34c-.757-.757-.757-1.98 0-2.737.757-.756 1.98-.756 2.736 0l1.704 1.704 1.705-1.704c.757-.756 1.979-.756 2.736 0 .757.757.757 1.98 0 2.737"/>
                    </svg>
                    💚 LINE
                  </a>
                  <a
                    href="mailto:info@abortionthailand.com"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white text-[#2D3436] font-medium rounded-full border border-gray-200 hover:border-[#7FB069] transition-colors"
                  >
                    📧 {isTh ? 'อีเมล' : 'Email'}
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white text-gray-400 font-medium rounded-full border border-gray-200 cursor-not-allowed"
                    title={isTh ? 'WhatsApp รอการอนุมัติ' : 'WhatsApp pending approval'}
                  >
                    📱 WhatsApp
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white text-gray-400 font-medium rounded-full border border-gray-200 cursor-not-allowed"
                    title={isTh ? 'Facebook รอการอนุมัติ' : 'Facebook pending approval'}
                  >
                    📘 Facebook
                  </a>
                </div>
              </div>
              
              {/* Email Contact */}
              <div className="flex items-center gap-2 text-[#7FB069]">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm font-medium">info@abortionthailand.com</span>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative">
                <div className="w-full aspect-square rounded-3xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&h=800&fit=crop"
                    alt={isTh ? 'สภาพแวดล้อมทางการแพทย์ที่อบอุ่นและทันสมัย' : 'Warm and modern medical environment'}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#E8A598]/20 rounded-full blur-2xl"></div>
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-[#7FB069]/20 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#7FB069]/10 flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-[#7FB069]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <p className="font-semibold text-[#2D3436] text-sm">{t.trust.badge}</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#7FB069]/10 flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-[#7FB069]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="font-semibold text-[#2D3436] text-sm">{isTh ? 'ดูแล 24 ชม.' : '24/7 Support'}</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#7FB069]/10 flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-[#7FB069]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <p className="font-semibold text-[#2D3436] text-sm">{isTh ? 'เป็นความลัด' : 'Confidential'}</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#7FB069]/10 flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-[#7FB069]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <p className="font-semibold text-[#2D3436] text-sm">{isTh ? 'แพทย์ผู้เชี่ยวชาญ' : 'Expert Doctors'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#F5F0E8] to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#2D3436] mb-4">
              {mission.title}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {mission.subtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-6">
            {missionItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="w-14 h-14 rounded-full bg-[#7FB069]/10 flex items-center justify-center mx-auto mb-4">
                  {index === 0 && (
                    <svg className="w-7 h-7 text-[#7FB069]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  )}
                  {index === 1 && (
                    <svg className="w-7 h-7 text-[#7FB069]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  )}
                  {index === 2 && (
                    <svg className="w-7 h-7 text-[#7FB069]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  )}
                  {index === 3 && (
                    <svg className="w-7 h-7 text-[#7FB069]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  )}
                  {index === 4 && (
                    <svg className="w-7 h-7 text-[#7FB069]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                    </svg>
                  )}
                </div>
                <h3 className="font-semibold text-[#2D3436] mb-2 text-sm leading-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500">
                  {item.description}
                </p>
              </div>
            ))}
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

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#2D3436] mb-4">
              {whyUs.title}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#F5F0E8] rounded-2xl p-6">
              <div className="w-12 h-12 rounded-full bg-[#7FB069]/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#7FB069]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-semibold text-[#2D3436] mb-2">{whyUs.items.confidential.title}</h3>
              <p className="text-sm text-gray-600">{whyUs.items.confidential.description}</p>
            </div>
            
            <div className="bg-[#F5F0E8] rounded-2xl p-6">
              <div className="w-12 h-12 rounded-full bg-[#7FB069]/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#7FB069]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-[#2D3436] mb-2">{whyUs.items.expert.title}</h3>
              <p className="text-sm text-gray-600">{whyUs.items.expert.description}</p>
            </div>
            
            <div className="bg-[#F5F0E8] rounded-2xl p-6">
              <div className="w-12 h-12 rounded-full bg-[#7FB069]/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#7FB069]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-[#2D3436] mb-2">{whyUs.items.support.title}</h3>
              <p className="text-sm text-gray-600">{whyUs.items.support.description}</p>
            </div>
            
            <div className="bg-[#F5F0E8] rounded-2xl p-6">
              <div className="w-12 h-12 rounded-full bg-[#7FB069]/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#7FB069]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold text-[#2D3436] mb-2">{whyUs.items.safe.title}</h3>
              <p className="text-sm text-gray-600">{whyUs.items.safe.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Cards */}
      <section className="py-16 bg-[#F5F0E8]">
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

      {/* CTA Section with Multi-Channel */}
      <section className="py-16 bg-gradient-to-br from-[#7FB069] to-[#6a9558]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {isTh ? 'พร้อมสอบถามหรือจองคิวหรือไม่?' : 'Ready to inquire or book an appointment?'}
          </h2>
          <p className="text-white/80 mb-8">
            {isTh 
              ? 'ติดต่อเราได้ตลอด 24 ชั่วโมงผ่านช่องทางที่สะดวกสำหรับคุณ' 
              : 'Contact us anytime, 24/7 via your preferred channel'}
          </p>
          
          {/* Multi-Channel CTA Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <a
              href="https://line.me/R/ti/p/@895vdurk"
              target="_blank"
              className="flex flex-col items-center gap-2 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-colors"
            >
              <span className="text-2xl">💚</span>
              <span className="text-white font-medium">{isTh ? 'LINE' : 'LINE'}</span>
              <span className="text-white/70 text-sm">@895vdurk</span>
            </a>
            <a
              href="mailto:info@abortionthailand.com"
              className="flex flex-col items-center gap-2 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-colors"
            >
              <span className="text-2xl">📧</span>
              <span className="text-white font-medium">{isTh ? 'อีเมล' : 'Email'}</span>
              <span className="text-white/70 text-sm truncate w-full">info@abortionthailand.com</span>
            </a>
            <div className="flex flex-col items-center gap-2 p-4 bg-white/5 rounded-xl cursor-not-allowed">
              <span className="text-2xl">📱</span>
              <span className="text-white/50 font-medium">{isTh ? 'WhatsApp' : 'WhatsApp'}</span>
              <span className="text-white/30 text-sm">{isTh ? 'รอการอนุมัติ' : 'Pending'}</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 bg-white/5 rounded-xl cursor-not-allowed">
              <span className="text-2xl">📘</span>
              <span className="text-white/50 font-medium">{isTh ? 'Facebook' : 'Facebook'}</span>
              <span className="text-white/30 text-sm">{isTh ? 'รอการอนุมัติ' : 'Pending'}</span>
            </div>
          </div>
          
          <a
            href="https://line.me/R/ti/p/@895vdurk"
            target="_blank"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#7FB069] font-semibold rounded-full hover:bg-gray-100 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.365 9.863c.349 0 .626.32.626.71 0 .391-.277.71-.626.71H17.61v1.405h1.755c.349 0 .626.32.626.71 0 .392-.277.71-.626.71h-2.386c-.943 0-1.702-.759-1.702-1.703v-1.128H13.9c-.349 0-.626-.32-.626-.71 0-.391.277-.71.626-.71h1.755v-1.404H13.9c-.349 0-.626-.32-.626-.71 0-.391.277-.71.626-.71h2.386c.943 0 1.702.759 1.702 1.703v1.129h1.753zm-3.69 3.237l-2.34 2.34c-.489.49-1.13.763-1.793.763-.663 0-1.304-.273-1.794-.763l-2.34-2.34c-.757-.757-.757-1.98 0-2.737.757-.756 1.98-.756 2.736 0l1.704 1.704 1.705-1.704c.757-.756 1.979-.756 2.736 0 .757.757.757 1.98 0 2.737"/>
            </svg>
            {t.hero.cta}
          </a>
        </div>
      </section>
    </div>
  );
}
