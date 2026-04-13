import { Metadata } from 'next';
import Link from 'next/link';
import { getDictionary, Lang } from '@/content';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const isTh = lang === 'th';
  
  return {
    title: isTh ? 'บริการ - วิธีการยุติการตั้งครรภ์ที่ปลอดภัย' : 'Services - Safe Abortion Methods',
    description: isTh
      ? 'เรียนรู้เกี่ยวกับวิธีการยุติการตั้งครรภ์ที่ปลอดภัย 3 วิธี: ยา alone, ยาที่โรงพยาบาล และ MVA พร้อมราคาและข้อมูลความเหมาะสม'
      : 'Learn about 3 safe pregnancy termination methods: medication only, medication at hospital, and MVA with pricing and eligibility info.',
  };
}

export default async function ServicesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang as Lang);
  const t = dict;
  const isTh = lang === 'th';

  const services = [
    {
      id: 'medication',
      name: t.services.medication.name,
      weeks: t.services.medication.weeks,
      price: t.services.medication.price,
      description: t.services.medication.description,
      features: t.services.medication.features,
      color: '#7FB069',
    },
    {
      id: 'hospital',
      name: t.services.hospital.name,
      weeks: t.services.hospital.weeks,
      price: t.services.hospital.price,
      description: t.services.hospital.description,
      features: t.services.hospital.features,
      color: '#E8A598',
      popular: true,
    },
    {
      id: 'mva',
      name: t.services.mva.name,
      weeks: t.services.mva.weeks,
      price: t.services.mva.price,
      description: t.services.mva.description,
      features: t.services.mva.features,
      color: '#2D3436',
    },
  ];

  return (
    <div className="py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#2D3436] mb-4">
            {t.services.title}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        {/* Services Detail */}
        <div className="space-y-8">
          {services.map((service) => (
            <section
              key={service.id}
              id={service.id}
              className="bg-white rounded-3xl border border-gray-100 overflow-hidden"
            >
              <div className="p-6 md:p-8 lg:p-10">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      {service.popular && (
                        <span className="px-3 py-1 bg-[#7FB069] text-white text-xs font-medium rounded-full">
                          {isTh ? 'แนะนำ' : 'Recommended'}
                        </span>
                      )}
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                        {service.weeks}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#2D3436] mb-4">
                      {service.name}
                    </h2>
                    <p className="text-3xl font-bold mb-4" style={{ color: service.color }}>
                      {service.price}
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <Link
                      href="https://line.me/ti/p/~emmy"
                      target="_blank"
                      className="inline-flex items-center gap-2 px-6 py-3 text-white font-medium rounded-full hover:opacity-90 transition-opacity"
                      style={{ backgroundColor: service.color }}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.365 9.863c.349 0 .626.32.626.71 0 .391-.277.71-.626.71H17.61v1.405h1.755c.349 0 .626.32.626.71 0 .392-.277.71-.626.71h-2.386c-.943 0-1.702-.759-1.702-1.703v-1.128H13.9c-.349 0-.626-.32-.626-.71 0-.391.277-.71.626-.71h1.755v-1.404H13.9c-.349 0-.626-.32-.626-.71 0-.391.277-.71.626-.71h2.386c.943 0 1.702.759 1.702 1.703v1.129h1.753zm-3.69 3.237l-2.34 2.34c-.489.49-1.13.763-1.793.763-.663 0-1.304-.273-1.794-.763l-2.34-2.34c-.757-.757-.757-1.98 0-2.737.757-.756 1.98-.756 2.736 0l1.704 1.704 1.705-1.704c.757-.756 1.979-.756 2.736 0 .757.757.757 1.98 0 2.737"/>
                      </svg>
                      {t.services.cta}
                    </Link>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2D3436] mb-4">
                      {isTh ? 'รายละเอียดบริการ' : 'Service Details'}
                    </h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div
                            className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                            style={{ backgroundColor: `${service.color}20` }}
                          >
                            <svg
                              className="w-4 h-4"
                              style={{ color: service.color }}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Preparation Info */}
        <section className="mt-12 bg-[#F5F0E8] rounded-3xl p-6 md:p-8 lg:p-10">
          <h2 className="text-2xl font-bold text-[#2D3436] mb-6">
            {isTh ? 'การเตรียมตัวก่อนรับบริการ' : 'Before Your Appointment'}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-[#2D3436] mb-3">
                {isTh ? 'สิ่งที่ควรเตรียม' : 'What to Bring'}
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-[#7FB069] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {isTh ? 'บัตรประจำตัวประชาชน หรือหนังสือเดินทาง' : 'ID card or passport'}
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-[#7FB069] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {isTh ? 'ผลอัลตราซาวด์ (ถ้ามี)' : 'Ultrasound results (if available)'}
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-[#7FB069] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {isTh ? 'รายชื่อยาที่กำลังรับประทาน' : 'List of current medications'}
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-[#2D3436] mb-3">
                {isTh ? 'คำแนะนำ' : 'Recommendations'}
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-[#7FB069] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {isTh ? 'งดอาหาร 6-8 ชั่วโมงก่อนหัตถการ' : 'Fast 6-8 hours before procedure'}
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-[#7FB069] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {isTh ? 'มาพร้อมเพื่อนหรือญาติที่ไว้วางใจ' : 'Come with a trusted friend or relative'}
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-[#7FB069] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {isTh ? 'สวมเสื้อผ้าที่สบาย' : 'Wear comfortable clothing'}
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="https://line.me/ti/p/~emmy"
            target="_blank"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#7FB069] text-white font-semibold rounded-full hover:bg-[#6a9558] transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.365 9.863c.349 0 .626.32.626.71 0 .391-.277.71-.626.71H17.61v1.405h1.755c.349 0 .626.32.626.71 0 .392-.277.71-.626.71h-2.386c-.943 0-1.702-.759-1.702-1.703v-1.128H13.9c-.349 0-.626-.32-.626-.71 0-.391.277-.71.626-.71h1.755v-1.404H13.9c-.349 0-.626-.32-.626-.71 0-.391.277-.71.626-.71h2.386c.943 0 1.702.759 1.702 1.703v1.129h1.753zm-3.69 3.237l-2.34 2.34c-.489.49-1.13.763-1.793.763-.663 0-1.304-.273-1.794-.763l-2.34-2.34c-.757-.757-.757-1.98 0-2.737.757-.756 1.98-.756 2.736 0l1.704 1.704 1.705-1.704c.757-.756 1.979-.756 2.736 0 .757.757.757 1.98 0 2.737"/>
            </svg>
            {t.services.cta}
          </Link>
        </div>
      </div>
    </div>
  );
}
