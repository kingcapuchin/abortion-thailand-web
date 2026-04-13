import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getBlogPost, getBlogPosts } from '@/content/blog';

interface BlogPostPageProps {
  params: Promise<{ lang: string; slug: string }>;
}

export async function generateStaticParams() {
  const params: { lang: string; slug: string }[] = [];
  
  ['th', 'en'].forEach((lang) => {
    const posts = getBlogPosts(lang);
    posts.forEach((post) => {
      params.push({ lang, slug: post.slug });
    });
  });
  
  return params;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { lang, slug } = await params;
  const post = getBlogPost(lang, slug);
  
  if (!post) {
    return { title: 'Post Not Found' };
  }
  
  return {
    title: `${post.title} | Abortion Thailand`,
    description: post.excerpt,
    alternates: {
      canonical: `/${lang}/blog/${slug}`,
      languages: {
        'th': `/th/blog/${slug}`,
        'en': `/en/blog/${slug}`,
      },
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      images: [
        {
          url: post.imageUrl,
          width: 800,
          height: 600,
          alt: post.imageAlt,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { lang, slug } = await params;
  const post = getBlogPost(lang, slug);
  
  if (!post) {
    notFound();
  }

  const isTh = lang === 'th';
  const allPosts = getBlogPosts(lang);
  const relatedPosts = allPosts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 2);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(isTh ? 'th-TH' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  // JSON-LD BlogPosting schema
  const blogPostSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.imageUrl,
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: 'Abortion Thailand',
      url: 'https://abortionthailand.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Abortion Thailand',
      url: 'https://abortionthailand.com',
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'info@abortionthailand.com',
        contactType: 'customer service',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://abortionthailand.com/${lang}/blog/${slug}`,
    },
  };

  return (
    <div className="py-12 md:py-16">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostSchema) }}
      />

      <article className="max-w-3xl mx-auto px-4">
        {/* Back Link */}
        <Link
          href={`/${lang}/blog`}
          className="inline-flex items-center gap-2 text-[#7FB069] font-medium mb-8 hover:underline"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          {isTh ? 'กลับไปยังบล็อก' : 'Back to Blog'}
        </Link>

        {/* Featured Image */}
        <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-8">
          <img
            src={post.imageUrl}
            alt={post.imageAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-[#7FB069] text-white text-xs font-medium rounded-full">
              {post.category}
            </span>
          </div>
        </div>

        {/* Post Header */}
        <header className="mb-8">
          <p className="text-sm text-gray-500 mb-2">
            {formatDate(post.date)}
          </p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2D3436] mb-4 leading-tight">
            {post.title}
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            {post.excerpt}
          </p>
        </header>

        {/* Post Content */}
        <div className="prose prose-lg max-w-none">
          {post.content.split('\n\n').map((paragraph, index) => {
            if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
              return (
                <h3 key={index} className="text-xl font-bold text-[#2D3436] mt-8 mb-4">
                  {paragraph.replace(/\*\*/g, '')}
                </h3>
              );
            }
            if (paragraph.startsWith('- ')) {
              const items = paragraph.split('\n').filter(line => line.startsWith('- '));
              return (
                <ul key={index} className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  {items.map((item, i) => (
                    <li key={i}>{item.replace(/^- /, '')}</li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={index} className="text-gray-700 leading-relaxed mb-4">
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-br from-[#7FB069] to-[#6a9558] rounded-2xl p-6 md:p-8">
          <h2 className="text-xl font-bold text-white mb-2">
            {isTh ? 'ต้องการคำปรึกษาเพิ่มเติม?' : 'Need More Consultation?'}
          </h2>
          <p className="text-white/80 mb-6">
            {isTh
              ? 'ติดต่อเราได้ตลอด 24 ชั่วโมงผ่านช่องทางที่สะดวกสำหรับคุณ'
              : 'Contact us anytime, 24/7 via your preferred channel'}
          </p>
          
          {/* Multi-Channel CTA */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-4">
            <p className="text-white font-medium mb-3 flex items-center gap-2">
              <span>📋</span> {isTh ? 'สอบถาม / จองคิว' : 'Inquire / Book Appointment'}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="https://line.me/ti/p/~emmy"
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 bg-white text-[#7FB069] rounded-lg hover:bg-gray-100 transition-colors"
              >
                <span>💚</span> LINE
              </a>
              <a
                href="mailto:info@abortionthailand.com"
                className="flex items-center gap-2 px-4 py-2 bg-white text-[#7FB069] rounded-lg hover:bg-gray-100 transition-colors"
              >
                <span>📧</span> info@abortionthailand.com
              </a>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-xl font-bold text-[#2D3436] mb-6">
              {isTh ? 'บทความที่เกี่ยวข้อง' : 'Related Articles'}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/${lang}/blog/${relatedPost.slug}`}
                  className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="relative w-full h-32 overflow-hidden">
                    <img
                      src={relatedPost.imageUrl}
                      alt={relatedPost.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-[#2D3436] group-hover:text-[#7FB069] transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {formatDate(relatedPost.date)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
}
