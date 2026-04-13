import { Metadata } from 'next';
import { getDictionary, Lang } from '@/content';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  
  return {
    title: lang === 'th' ? 'บริการสำหรับผู้ป่วยต่างชาติ' : 'International Patients',
    description: lang === 'th'
      ? 'ข้อมูลสำหรับผู้ป่วยต่างชาติที่ต้องการรับบริการยุติการตั้งครรภ์ในประเทศไทย รวมถึงข้อกำหนดหนังสือเดินทาง ภาษาที่รองรับ และการชำระเงิน'
      : 'Information for international patients seeking pregnancy termination services in Thailand, including passport requirements, language support, and payment options.',
  };
}

export default async function InternationalPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang as Lang);
  const t = dict;
  const isTh = lang === 'th';

  const infoCards = [
    {
      icon: (
        <svg className="w-8 h-8 text-[#7FB069]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
        </svg>
      ),
      ...t.international.passport,
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#7FB069]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      ...t.international.payment,
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#7FB069]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      ),
      ...t.international.english,
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#E8A598]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      ...t.international.nhs,
    },
  ];

  return (
    <div className="py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#2D3436] mb-4">
            {t.international.title}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t.international.subtitle}
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {infoCards.map((card, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-100 p-6">
              <div className="mb-4">{card.icon}</div>
              <h2 className="text-xl font-semibold text-[#2D3436] mb-2">
                {card.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Process Steps */}
        <section className="bg-[#F5F0E8] rounded-3xl p-6 md:p-8 lg:p-10 mb-12">
          <h2 className="text-2xl font-bold text-[#2D3436] mb-6">
            {isTh ? 'ขั้นตอนการรับบริการ' : 'Service Process'}
          </h2>
          <div className="space-y-6">
            {[
              { step: '1', title: isTh ? 'ติดต่อเรา' : 'Contact Us', desc: isTh ? 'ส่งข้อความผ่าน LINE หรือโทรศัพท์' : 'Send message via LINE or call' },
              { step: '2', title: isTh ? 'ปรึกษา' : 'Consultation', desc: isTh ? 'แพทย์จะประเมินความเหมาะสม' : 'Doctor will assess suitability' },
              { step: '3', title: isTh ? 'นัดหมาย' : 'Appointment', desc: isTh ? 'นัดวันและเวลาที่สะดวก' : 'Schedule a convenient date and time' },
              { step: '4', title: isTh ? 'รับบริการ' : 'Receive Service', desc: isTh ? 'มาถึงโรงพยาบาลตามนัด' : 'Arrive at hospital as scheduled' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#7FB069] text-white flex items-center justify-center font-bold flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold text-[#2D3436]">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Note */}
        <section className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 mb-12">
          <h2 className="text-xl font-semibold text-[#2D3436] mb-4">
            {isTh ? 'หมายเหตุเกี่ยวกับราคา' : 'Pricing Note'}
          </h2>
          <div className="space-y-3 text-gray-600">
            <p>{isTh 
              ? 'ราคาที่แสดงเป็นราคาเริ่มต้น ราคาจริงอาจแตกต่างกันตามอายุครรภ์และวิธีการที่เลือก' 
              : 'Displayed prices are starting prices. Actual price may vary based on gestational age and chosen method.'}</p>
            <p>{isTh 
              ? 'เราจะแจ้งราคาที่ชัดเจนก่อนเริ่มการรักษาเสมอ' 
              : 'We will always provide clear pricing before starting treatment.'}</p>
            <p>{isTh 
              ? 'ชำระเงินด้วยเงินสด บัตรเครดิต หรือโอนเงินผ่านธนาคาร' 
              : 'Pay with cash, credit card, or bank transfer.'}</p>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://line.me/ti/p/~emmy"
            target="_blank"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#7FB069] text-white font-semibold rounded-full hover:bg-[#6a9558] transition-colors"
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
