import { Metadata } from 'next';
import Link from 'next/link';
import { getBlogPosts } from '@/content/blog';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const isTh = lang === 'th';
  
  return {
    title: isTh ? 'บล็อก - ความรู้และข่าวสาร' : 'Blog - Knowledge & News',
    description: isTh
      ? 'บทความและข่าวสารเกี่ยวกับการยุติการตั้งครรภ์ ความรู้ทางการแพทย์ และสิทธิของผู้ป่วย'
      : 'Articles and news about pregnancy termination, medical knowledge, and patient rights',
    alternates: {
      canonical: `/${lang}/blog`,
      languages: {
        'th': '/th/blog',
        'en': '/en/blog',
      },
    },
  };
}

export default async function BlogPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const posts = getBlogPosts(lang);
  const isTh = lang === 'th';

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(isTh ? 'th-TH' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="py-12 md:py-16">
      {/* JSON-LD Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Abortion Thailand',
            url: 'https://abortionthailand.com',
            contactPoint: {
              '@type': 'ContactPoint',
              email: 'info@abortionthailand.com',
              contactType: 'customer service',
            },
          }),
        }}
      />

      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#2D3436] mb-4">
            {isTh ? 'บล็อก' : 'Blog'}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {isTh
              ? 'บทความและข่าวสารเกี่ยวกับการยุติการตั้งครรภ์ ความรู้ทางการแพทย์ และสิทธิของผู้ป่วย'
              : 'Articles and news about pregnancy termination, medical knowledge, and patient rights'}
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-12">
          <img
            src="https://images.unsplash.com/photo-1551076805-e1869033e561?w=1200&h=600&fit=crop"
            alt={isTh ? 'สภาพแวดล้อมทางการแพทย์ที่อบอุ่น' : 'Warm medical environment'}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2D3436]/60 to-transparent flex items-end">
            <div className="p-6 md:p-8">
              <p className="text-white/80 text-sm mb-2">
                {isTh ? 'แหล่งข้อมูลทางการแพทย์ที่น่าเชื่อถือ' : 'Trusted Medical Information Source'}
              </p>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/${lang}/blog/${post.slug}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Post Image */}
              <div className="relative w-full h-48 overflow-hidden">
                <img
                  src={post.imageUrl}
                  alt={post.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#7FB069] text-white text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Post Content */}
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">
                  {formatDate(post.date)}
                </p>
                <h2 className="text-lg font-semibold text-[#2D3436] mb-2 group-hover:text-[#7FB069] transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center text-[#7FB069] font-medium text-sm">
                  {isTh ? 'อ่านเพิ่มเติม' : 'Read more'}
                  <svg
                    className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-br from-[#7FB069] to-[#6a9558] rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            {isTh ? 'มีคำถามเพิ่มเติม?' : 'Have More Questions?'}
          </h2>
          <p className="text-white/80 mb-6 max-w-xl mx-auto">
            {isTh
              ? 'ติดต่อเราได้ตลอด 24 ชั่วโมงผ่านช่องทางที่สะดวกสำหรับคุณ'
              : 'Contact us anytime, 24/7 via your preferred channel'}
          </p>
          
          {/* Multi-Channel CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://line.me/ti/p/~emmy"
              target="_blank"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#7FB069] font-medium rounded-full hover:bg-gray-100 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.365 9.863c.349 0 .626.32.626.71 0 .391-.277.71-.626.71H17.61v1.405h1.755c.349 0 .626.32.626.71 0 .392-.277.71-.626.71h-2.386c-.943 0-1.702-.759-1.702-1.703v-1.128H13.9c-.349 0-.626-.32-.626-.71 0-.391.277-.71.626-.71h1.755v-1.404H13.9c-.349 0-.626-.32-.626-.71 0-.391.277-.71.626-.71h2.386c.943 0 1.702.759 1.702 1.703v1.129h1.753zm-3.69 3.237l-2.34 2.34c-.489.49-1.13.763-1.793.763-.663 0-1.304-.273-1.794-.763l-2.34-2.34c-.757-.757-.757-1.98 0-2.737.757-.756 1.98-.756 2.736 0l1.704 1.704 1.705-1.704c.757-.756 1.979-.756 2.736 0 .757.757.757 1.98 0 2.737"/>
              </svg>
              LINE
            </a>
            <a
              href="mailto:info@abortionthailand.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/20 text-white font-medium rounded-full hover:bg-white/30 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              info@abortionthailand.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
