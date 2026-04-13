export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  imageUrl: string;
  imageAlt: string;
}

export const blogPosts: Record<string, BlogPost[]> = {
  th: [
    {
      slug: 'what-to-expect-medication-abortion',
      title: 'การทำแท้งด้วยยา: สิ่งที่ควรเตรียมตัวและสิ่งที่คาดหวัง',
      excerpt: 'การยุติการตั้งครรภ์ด้วยยาสองชนิด (Mifepristone และ Misoprostol) เป็นวิธีที่ปลอดภัยและมีประสิทธิภาพสูง มาดูกันว่ากระบวนการเป็นอย่างไร',
      content: `การยุติการตั้งครรภ์ด้วยยาเป็นวิธีที่ได้รับการรับรองจากองค์การอนามัยโลก (WHO) ว่ามีความปลอดภัยและมีประสิทธิภาพสูง โดยใช้ยาสองชนิดร่วมกัน

**ยาชนิดแรก: Mifepristone**
ยาชนิดนี้ทำงานโดยการปิดกั้นฮอร์โมนโปรเจสเตอร์ออน ซึ่งจำเป็นสำหรับการตั้งครรภ์ ทำให้เยื่อบุมดลูกเริ่มสลายตัว

**ยาชนิดที่สอง: Misoprostol**
ยาชนิดนี้จะกระตุ้นให้มดลูกหดตัวและขับเนื้อเยื่อออกมา มักใช้หลังจากยาชนิดแรก 24-48 ชั่วโมง

**ระยะเวลาดำเนินการ**
- อาการเริ่มเกิดขึ้นภายใน 1-4 ชั่วโมงหลังใช้ยาชนิดที่สอง
- การปรากฏตัวของเลือดและเนื้อเยื่ออาจใช้เวลาหลายชั่วโมง
- อาการปวดและประจำเดือนอาจดำเนินต่อเนื่อง 1-2 สัปดาห์

**การดูแลตัวเอง**
- พักผ่อนให้เพียงพอ
- หลีกเลี่ยงการยกของหนัก
- สวมผ้าอนามัยแบบเต็มตัว
- งดเพศสัมพันธ์ 1-2 สัปดาห์
- งดอาบน้ำในอ่างอาบน้ำ 1-2 สัปดาห์

**เมื่อใดควรติดต่อแพทย์**
- เลือดออกมากผิดปกติ (แชมพ์หรือผ้าอนามัยเต็มภายในชั่วโมง)
- ไข้สูงหรือหนาวสั่น
- ปวดรุนแรงที่ไม่ดีขึ้นหลังใช้ยาแก้ปวด
- อาการไม่ดีขึ้นหลัง 24 ชั่วโมง`,
      date: '2024-04-08',
      category: 'ความรู้ทั่วไป',
      imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&h=600&fit=crop',
      imageAlt: 'สภาพแวดล้อมทางการแพทย์ที่อบอุ่นและสงบ',
    },
    {
      slug: 'understanding-your-rights',
      title: 'สิทธิของคุณ: การยุติการตั้งครรภ์ในประเทศไทย',
      excerpt: 'การยุติการตั้งครรภ์ในประเทศไทยถูกกฎหมายภายใต้เงื่อนไขบางประการ มาทำความเข้าใจสิทธิของคุณกัน',
      content: `การยุติการตั้งครรภ์ในประเทศไทยได้รับการรับรองตามกฎหมายมาตั้งแต่ พ.ศ. 2521 และมีการขยายเงื่อนไขเพิ่มเติมในปี พ.ศ. 2558 โดยมีสาระสำคัญดังนี้

**เงื่อนไขทางกฎหมาย**
การยุติการตั้งครรภ์ในประเทศไทยถูกกฎหมายเมื่อ:
- การตั้งครรภ์เป็นอันตรายต่อสุขภาพของมารดา
- การตั้งครรภ์เกิดจากการถูกข่มขืนหรือกระทำชำเรา
- ทารกในครรภ์มีความผิดปกติที่ไม่สามารถดำรงชีวิตได้
- ผู้ตั้งครรภ์มีอายุน้อยกว่า 16 ปี

**สิทธิในการรักษาความลับ**
คุณมีสิทธิที่จะได้รับการรักษาความลับของข้อมูลส่วนตัว ซึ่งรวมถึง:
- การไม่เปิดเผยข้อมูลการรักษาต่อบุคคลที่สาม
- การใช้ชื่อปลอมในการลงทะเบียน (ในบางกรณี)
- การเข้าถึงบริการโดยไม่ต้องมีบัตรประจำตัวประชาชน (ในบางสถานพยาบาล)

**สิทธิในการได้รับข้อมูล**
คุณมีสิทธิที่จะได้รับ:
- ข้อมูลที่ถูกต้องเกี่ยวกับกระบวนการและความเสี่ยง
- คำแนะนำจากแพทย์ผู้เชี่ยวชาญ
- ทางเลือกในการรักษาที่เหมาะสมกับสถานการณ์ของคุณ

**ไม่มีการเลือกปฏิบัติ**
คุณมีสิทธิที่จะไม่ถูกเลือกปฏิบัติเนื่องจาก:
- เชื้อชาติหรือสัญชาติ
- สถานะการสมรส
- อายุ
- สถานะทางเศรษฐกิจ

**เมื่อใดควรขอความช่วยเหลือ**
หากคุณรู้สึกว่าสิทธิของคุณถูกละเมิด หรือต้องการคำแนะนำเพิ่มเติม สามารถติดต่อเราได้ตลอด 24 ชั่วโมง`,
      date: '2024-04-05',
      category: 'สิทธิและกฎหมาย',
      imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop',
      imageAlt: 'แพทย์กำลังให้คำปรึกษาผู้ป่วยอย่างใส่ใจ',
    },
    {
      slug: 'choosing-right-method',
      title: 'วิธีไหนเหมาะกับคุณ? เปรียบเทียบวิธีการยุติการตั้งครรภ์',
      excerpt: 'การเลือกวิธีการยุติการตั้งครรภ์ขึ้นอยู่กับหลายปัจจัย มาดูความแตกต่างของแต่ละวิธีกัน',
      content: `การเลือกวิธีการยุติการตั้งครรภ์เป็นการตัดสินใจที่สำคัญ แต่ละวิธีมีข้อดีและข้อจำกัดที่แตกต่างกัน

**1. การยุติการตั้งครรภ์ด้วยยา (Medication Abortion)**
เหมาะสำหรับ: อายุครรภ์ไม่เกิน 8-12 สัปดาห์

ข้อดี:
- สามารถทำที่บ้านได้
- กระบวนการเป็นธรรมชาติมากขึ้น
- ไม่ต้องทำหัตถการทางการแพทย์
- ค่าใช้จ่ายต่ำกว่า

ข้อจำกัด:
- ใช้เวลานานกว่า (1-3 วัน)
- อาจมีอาการปวดและเลือดออกมากกว่า
- ต้องติดตามอาการอย่างใกล้ชิด

**2. MVA (Manual Vacuum Aspiration)**
เหมาะสำหรับ: อายุครรภ์ 8-12 สัปดาห์

ข้อดี:
- กระบวนการรวดเร็ว (15-30 นาที)
- ประสิทธิภาพสูง (>98%)
- ฟื้นตัวเร็ว
- แพทย์ควบคุมกระบวนการตลอด

ข้อจำกัด:
- ต้องทำที่สถานพยาบาล
- ค่าใช้จ่ายสูงกว่ายา

**3. ยาที่โรงพยาบาล (Hospital Medication)**
เหมาะสำหรับ: ผู้ที่ต้องการความควบคุมและการดูแลจากแพทย์

ข้อดี:
- มีแพทย์ดูแลตลอดเวลา
- สภาพแวดล้อมทางการแพทย์ที่ปลอดภัย
- สามารถจัดการกับอาการแทรกซ้อนได้ทันที

ข้อจำกัด:
- ต้องพักที่โรงพยาบาล 1-2 วัน
- ค่าใช้จ่ายปานกลางถึงสูง

**ปัจจัยในการเลือก**
- อายุครรภ์
- สุขภาพโดยรวม
- ความชอบส่วนตัว
- งบประมาณ
- ความต้องการความเป็นส่วนตัว

**คำแนะนำ**
การเลือกวิธีที่เหมาะสมที่สุดควรปรึกษากับแพทย์ผู้เชี่ยวชาญ เพื่อรับคำแนะนำที่เหมาะกับสถานการณ์ของคุณ`,
      date: '2024-04-01',
      category: 'ความรู้ทั่วไป',
      imageUrl: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&h=600&fit=crop',
      imageAlt: 'ห้องตรวจที่ทันสมัยและสะอาด',
    },
    {
      slug: 'aftercare-recovery',
      title: 'การดูแลหลังการยุติการตั้งครรภ์: คู่มือฟื้นตัว',
      excerpt: 'การดูแลตัวเองหลังการยุติการตั้งครรภ์เป็นสิ่งสำคัญ มาดูแนวทางการดูแลที่ถูกต้องกัน',
      content: `การดูแลตัวเองหลังการยุติการตั้งครรภ์เป็นสิ่งสำคัญเพื่อให้ร่างกายฟื้นตัวได้ดีและลดความเสี่ยงของภาวะแทรกซ้อน

**ช่วง 24-48 ชั่วโมงแรก**
- พักผ่อนให้มากที่สุด
- หลีกเลี่ยงกิจกรรมที่ต้องใช้แรง
- สวมผ้าอนามัยแบบเต็มตัวเพื่อรับมือกับเลือดออก
- รับประทานยาแก้ปวดตามที่แพทย์สั่ง
- ดื่มน้ำให้เพียงพอ

**สัปดาห์แรก**
- หลีกเลี่ยงการยกของหนัก (มากกว่า 5 กิโลกรัม)
- หลีกเลี่ยงการออกกำลังกายหนัก
- งดเพศสัมพันธ์อย่างน้อย 1-2 สัปดาห์
- งดอาบน้ำในอ่างอาบน้ำหรือว่ายน้ำ 1-2 สัปดาห์
- รับประทานอาหารที่มีประโยชน์และมีธาตุเหล็กสูง

**อาการที่ปกติ**
- เลือดออกเป็นสีแดงสดในช่วงแรก จากนั้นเปลี่ยนเป็นสีน้ำตาลหรือดำ
- ปวดท้องน้อยคล้ายปวดประจำเดือน
- อ่อนเพลีย
- คลื่นไส้ (โดยเฉพาะหลังยา)

**อาการที่ต้องติดต่อแพทย์ทันที**
- เลือดออกมากผิดปกติ (แชมพ์เต็มภายใน 1 ชั่วโมง)
- ไข้สูงกว่า 38.5 องศาเซลเซียส
- หนาวสั่นอย่างรุนแรง
- ปวดท้องรุนแรงที่ไม่ดีขึ้นหลังใช้ยาแก้ปวด
- กลิ่นเหม็นผิดปกติจากตกเลือด
- ไม่มีเลือดออกเลยหลังการทำหัตถการ

**การตรวจติดตาม**
- แนะนำให้ตรวจอัลตราซาวด์หรือตรวจเลือดเพื่อยืนยันว่าการตั้งครรภ์สิ้นสุดแล้ว
- การตรวจติดตามมักทำภายใน 1-2 สัปดาห์หลังการทำหัตถการ

**สุขภาพจิต**
- การรู้สึกเศร้าหรือผิดหวังเป็นเรื่องปกติ
- พูดคุยกับคนที่คุณไว้วางใจเกี่ยวกับความรู้สึกของคุณ
- หากต้องการความช่วยเหลือด้านจิตใจ สามารถติดต่อเราได้`,
      date: '2024-03-28',
      category: 'การดูแลสุขภาพ',
      imageUrl: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=800&h=600&fit=crop',
      imageAlt: 'บรรยากาศสงบและอบอุ่นสำหรับการพักฟื้น',
    },
    {
      slug: 'for-international-patients',
      title: 'คู่มือสำหรับผู้ป่วยต่างชาติ: การยุติการตั้งครรภ์ในประเทศไทย',
      excerpt: 'ข้อมูลสำคัญสำหรับชาวต่างชาติที่ต้องการรับบริการยุติการตั้งครรภ์ในประเทศไทย ตั้งแต่การเตรียมตัวจนถึงการเดินทาง',
      content: `ประเทศไทยเป็นจุดหมายปลายทางยอดนิยมสำหรับการรับบริการทางการแพทย์ รวมถึงการยุติการตั้งครรภ์ ด้วยบริการที่มีคุณภาพและค่าใช้จ่ายที่เข้าถึงได้

**การเตรียมตัวก่อนเดินทาง**
เอกสารที่ต้องเตรียม:
- หนังสือเดินทางที่ยังไม่หมดอายุ
- วีซ่า (สำหรับบางสัญชาติ)
- บันทึกการตรวจพบการตั้งครรภ์ (ถ้ามี)
- ประวัติการแพทย์ (ถ้ามี)

**การติดต่อล่วงหน้า**
- ติดต่อเราผ่าน LINE, WhatsApp หรืออีเมลล่วงหน้า
- แจ้งอายุครรภ์โดยประมาณ
- สอบถามเกี่ยวกับการนัดหมายและค่าใช้จ่าย
- สอบถามเกี่ยวกับที่พักและการเดินทาง (เราสามารถแนะนำได้)

**การเดินทางในประเทศไทย**
- เราสามารถจัดรถรับ-ส่งจากสนามบินหรือที่พักได้
- มีเจ้าหน้าที่พูดภาษาอังกฤษและจีนคอยดูแลตลอดกระบวนการ
- การเดินทางไปโรงพยาบาลสามารถจัดได้อย่างสะดวก

**ค่าใช้จ่าย**
ราคาสำหรับผู้ป่วยต่างชาติเท่ากับคนไทย:
- ยาเพียงอย่างเดียว: เริ่มต้น 5,000 บาท
- ยาที่โรงพยาบาล: เริ่มต้น 5,500 บาท
- MVA: เริ่มต้น 8,500 บาท

**การชำระเงิน**
- รับชำระเป็นเงินสด (บาท, ดอลลาร์, ยูโร)
- บัตรเครดิต/เดบิต (Visa, Mastercard)
- การโอนเงินผ่านธนาคาร

**ที่พัก**
เราสามารถแนะนำที่พักใกล้โรงพยาบาลที่มีราคาเหมาะสม

**การพักฟื้น**
- แนะนำให้พักในประเทศไทย 2-3 วันหลังทำหัตถการ
- สามารถเดินทางกลับได้หลังจากนั้น (โดยเฉพาะเส้นทางบินสั้น)
- เราจะติดตามอาการทางออนไลน์หลังคุณเดินทางกลับ

**ติดต่อเรา**
สามารถติดต่อได้ตลอด 24 ชั่วโมงผ่าน LINE, WhatsApp หรืออีเมล`,
      date: '2024-03-20',
      category: 'สำหรับผู้ป่วยต่างชาติ',
      imageUrl: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=600&fit=crop',
      imageAlt: 'วิวเมืองไทยสำหรับผู้มาเยือน',
    },
  ],
  en: [
    {
      slug: 'what-to-expect-medication-abortion',
      title: 'Medication Abortion: What to Prepare For and Expect',
      excerpt: 'Medication abortion using two drugs (Mifepristone and Misoprostol) is a safe and highly effective method. Here is what the process looks like.',
      content: `Medication abortion is a WHO-recommended safe and highly effective method using two medications together.

**First Medication: Mifepristone**
This medication works by blocking progesterone, the hormone needed for pregnancy, causing the uterine lining to break down.

**Second Medication: Misoprostol**
This medication induces uterine contractions to expel the pregnancy tissue. It's usually taken 24-48 hours after the first medication.

**Timeline**
- Symptoms typically begin 1-4 hours after taking the second medication
- Bleeding and tissue passage may continue for several hours
- Cramping and bleeding may persist for 1-2 weeks

**Self-Care**
- Get plenty of rest
- Avoid lifting heavy objects
- Use full-size pads
- Avoid sexual intercourse for 1-2 weeks
- Avoid baths for 1-2 weeks

**When to Contact a Doctor**
- Excessively heavy bleeding (soaking through a pad or more within an hour)
- High fever or chills
- Severe pain not relieved by pain medication
- No improvement after 24 hours`,
      date: '2024-04-08',
      category: 'General Information',
      imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&h=600&fit=crop',
      imageAlt: 'Warm and calm medical environment',
    },
    {
      slug: 'understanding-your-rights',
      title: 'Your Rights: Abortion in Thailand',
      excerpt: 'Abortion in Thailand is legal under certain conditions. Learn about your rights.',
      content: `Abortion in Thailand has been legal since 1978, with expanded conditions added in 2015.

**Legal Conditions**
Abortion in Thailand is legal when:
- The pregnancy poses a health risk to the mother
- The pregnancy resulted from rape
- The fetus has abnormalities incompatible with life
- The pregnant person is under 16 years old

**Right to Confidentiality**
You have the right to:
- Have your personal information kept confidential
- Use an alias for registration (in some cases)
- Access services without ID (at some facilities)

**Right to Information**
You have the right to receive:
- Accurate information about procedures and risks
- Expert medical advice
- Treatment options suitable for your situation

**Non-Discrimination**
You have the right not to be discriminated against due to:
- Race or nationality
- Marital status
- Age
- Economic status

**When to Seek Help**
If you feel your rights have been violated or need further advice, contact us 24/7.`,
      date: '2024-04-05',
      category: 'Rights & Legal',
      imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop',
      imageAlt: 'Doctor consulting with patient attentively',
    },
    {
      slug: 'choosing-right-method',
      title: 'Which Method is Right for You? Comparing Abortion Methods',
      excerpt: 'Choosing an abortion method depends on several factors. Here are the differences between each method.',
      content: `Choosing an abortion method is an important decision. Each method has different advantages and limitations.

**1. Medication Abortion**
Suitable for: Pregnancy up to 8-12 weeks

Advantages:
- Can be done at home
- More natural process
- No surgical procedure required
- Lower cost

Limitations:
- Takes longer (1-3 days)
- May involve more bleeding and cramping
- Requires close monitoring

**2. MVA (Manual Vacuum Aspiration)**
Suitable for: Pregnancy 8-12 weeks

Advantages:
- Quick procedure (15-30 minutes)
- High efficacy (>98%)
- Fast recovery
- Doctor-controlled process

Limitations:
- Must be done at a medical facility
- Higher cost

**3. Hospital Medication**
Suitable for: Those who want medical supervision throughout

Advantages:
- Doctor supervision at all times
- Safe medical environment
- Immediate management of complications

Limitations:
- Requires 1-2 day hospital stay
- Moderate to high cost

**Factors to Consider**
- Gestational age
- Overall health
- Personal preference
- Budget
- Privacy needs

**Recommendation**
Consult with a specialist doctor to receive advice tailored to your situation.`,
      date: '2024-04-01',
      category: 'General Information',
      imageUrl: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&h=600&fit=crop',
      imageAlt: 'Modern and clean examination room',
    },
    {
      slug: 'aftercare-recovery',
      title: 'Aftercare Following Abortion: A Recovery Guide',
      excerpt: 'Self-care after abortion is important. Here is the proper care guide.',
      content: `Self-care after abortion is important for good recovery and reducing the risk of complications.

**First 24-48 Hours**
- Rest as much as possible
- Avoid strenuous activities
- Use full-size pads for bleeding
- Take prescribed pain medication
- Stay well hydrated

**First Week**
- Avoid lifting heavy objects (more than 5 kg)
- Avoid heavy exercise
- Avoid sexual intercourse for at least 1-2 weeks
- Avoid baths or swimming for 1-2 weeks
- Eat nutritious food high in iron

**Normal Symptoms**
- Fresh red bleeding initially, then turning brown or black
- Mild cramping similar to menstrual pain
- Fatigue
- Nausea (especially after medication)

**Symptoms Requiring Immediate Medical Attention**
- Abnormally heavy bleeding (soaking through a pad within 1 hour)
- Fever above 38.5°C
- Severe chills
- Severe abdominal pain not relieved by pain medication
- Unusual foul odor from bleeding
- No bleeding at all after procedure

**Follow-Up**
- Ultrasound or blood test recommended to confirm pregnancy termination
- Follow-up usually within 1-2 weeks after procedure

**Mental Health**
- Feeling sad or regretful is normal
- Talk to someone you trust about your feelings
- If you need mental health support, contact us`,
      date: '2024-03-28',
      category: 'Health Care',
      imageUrl: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=800&h=600&fit=crop',
      imageAlt: 'Calm and warm atmosphere for recovery',
    },
    {
      slug: 'for-international-patients',
      title: 'Guide for International Patients: Abortion in Thailand',
      excerpt: 'Essential information for foreigners seeking abortion services in Thailand, from preparation to travel.',
      content: `Thailand is a popular destination for medical services, including abortion, due to quality care and accessible costs.

**Pre-Travel Preparation**
Required documents:
- Valid passport
- Visa (for some nationalities)
- Record of pregnancy confirmation (if available)
- Medical history (if available)

**Advance Contact**
- Contact us via LINE, WhatsApp or email in advance
- Provide estimated gestational age
- Inquire about appointments and costs
- Ask about accommodation and transportation (we can recommend)

**Travel in Thailand**
- We can arrange airport/hotel transfers
- English and Chinese-speaking staff available throughout
- Hospital transportation can be arranged conveniently

**Costs**
Prices for international patients are the same as for Thai citizens:
- Medication only: From 5,000 THB
- Medication at hospital: From 5,500 THB
- MVA: From 8,500 THB

**Payment**
- Cash (Baht, USD, EUR)
- Credit/debit cards (Visa, Mastercard)
- Bank transfer

**Accommodation**
We can recommend affordable accommodation near the hospital.

**Recovery**
- Recommend staying in Thailand for 2-3 days after the procedure
- Travel can resume after that (especially short flights)
- We will follow up online after you return home

**Contact Us**
Reach us 24/7 via LINE, WhatsApp or email.`,
      date: '2024-03-20',
      category: 'For International Patients',
      imageUrl: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=600&fit=crop',
      imageAlt: 'Thai cityscape for visitors',
    },
  ],
};

export function getBlogPosts(lang: string): BlogPost[] {
  return blogPosts[lang] || blogPosts.th;
}

export function getBlogPost(lang: string, slug: string): BlogPost | undefined {
  const posts = blogPosts[lang] || blogPosts.th;
  return posts.find(post => post.slug === slug);
}
