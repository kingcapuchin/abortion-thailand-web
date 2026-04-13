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
          width: 1200,
          height: 630,
          alt: post.imageAlt,
        },
      ],
    },
  };
}

// Calculate estimated read time
function getReadTime(content: string, isTh: boolean): string {
  const wordsPerMinute = isTh ? 200 : 250;
  const wordCount = content.split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} ${isTh ? 'นาที' : 'min'} ${isTh ? 'อ่าน' : 'read'}`;
}

// Parse content into structured sections
interface ContentSection {
  type: 'intro' | 'heading' | 'subheading' | 'paragraph' | 'list' | 'info-box' | 'pull-quote' | 'divider';
  content?: string;
  items?: string[];
  boxType?: 'info' | 'warning' | 'tip';
}

function parseContent(content: string): ContentSection[] {
  const sections: ContentSection[] = [];
  const lines = content.split('\n');
  let currentParagraph = '';
  let listItems: string[] = [];
  
  const flushParagraph = () => {
    if (currentParagraph.trim()) {
      sections.push({ type: 'paragraph', content: currentParagraph.trim() });
      currentParagraph = '';
    }
  };
  
  const flushList = () => {
    if (listItems.length > 0) {
      sections.push({ type: 'list', items: [...listItems] });
      listItems = [];
    }
  };
  
  for (const line of lines) {
    const trimmed = line.trim();
    
    if (!trimmed) {
      flushParagraph();
      flushList();
      continue;
    }
    
    // Main heading (starts with ** and ends with **)
    if (trimmed.startsWith('**') && trimmed.endsWith('**') && !trimmed.slice(2, -2).includes('**')) {
      flushParagraph();
      flushList();
      sections.push({ type: 'heading', content: trimmed.slice(2, -2) });
    }
    // Subheading (starts with - but not a list item)
    else if (trimmed.startsWith('- ') && !trimmed.startsWith('- ')) {
      // Not a list item
    }
    // List items
    else if (trimmed.startsWith('- ')) {
      flushParagraph();
      listItems.push(trimmed.slice(2));
    }
    // Info box indicators
    else if (trimmed.startsWith('📋') || trimmed.startsWith('⚠️') || trimmed.startsWith('💡')) {
      const icon = trimmed.slice(0, trimmed.indexOf(' '));
      const boxType = icon === '⚠️' ? 'warning' : icon === '💡' ? 'tip' : 'info';
      sections.push({ type: 'info-box', content: trimmed.slice(trimmed.indexOf(' ') + 1), boxType });
    }
    // Regular paragraph
    else {
      if (listItems.length > 0) {
        flushList();
      }
      currentParagraph += (currentParagraph ? ' ' : '') + trimmed;
    }
  }
  
  flushParagraph();
  flushList();
  
  return sections;
}

// Generate table of contents from content
function generateTOC(content: string): { level: number; text: string; id: string }[] {
  const toc: { level: number; text: string; id: string }[] = [];
  const lines = content.split('\n');
  
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith('**') && trimmed.endsWith('**') && !trimmed.slice(2, -2).includes('**')) {
      const text = trimmed.slice(2, -2);
      const id = text.toLowerCase().replace(/[^a-z0-9\u0E00-\u0E7F]+/g, '-');
      toc.push({ level: 2, text, id });
    }
  }
  
  return toc;
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
  
  const readTime = getReadTime(post.content, isTh);
  const toc = generateTOC(post.content);
  const sections = parseContent(post.content);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(isTh ? 'th-TH' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  // JSON-LD Article schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.imageUrl,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: isTh ? 'ทีมงาน Abortion Thailand' : 'Abortion Thailand Team',
      jobTitle: isTh ? 'ทีมแพทย์ผู้เชี่ยวชาญ' : 'Medical Expert Team',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Abortion Thailand',
      url: 'https://abortionthailand.com',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://abortionthailand.com/${lang}/blog/${slug}`,
    },
  };

  // FAQ JSON-LD for articles with Q&A
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: sections
      .filter(s => s.type === 'paragraph' && (post.content.includes('?')))
      .slice(0, 5)
      .map((s, i) => ({
        '@type': 'Question',
        name: isTh ? `คำถามที่ ${i + 1}` : `Question ${i + 1}`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: s.content,
        },
      })),
  };

  return (
    <div className="py-12 md:py-16">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema.mainEntity.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <article className="max-w-4xl mx-auto px-4">
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
          {isTh ? 'กลับไปยังบทความสุขภาพ' : 'Back to Health Articles'}
        </Link>

        {/* Hero Image */}
        <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-10">
          <img
            src={post.imageUrl}
            alt={post.imageAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2D3436]/40 to-transparent" />
          <div className="absolute bottom-4 left-4 flex gap-2">
            <span className="px-4 py-1.5 bg-[#7FB069] text-white text-sm font-medium rounded-full">
              {post.category}
            </span>
          </div>
        </div>

        {/* Post Header */}
        <header className="mb-10">
          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{readTime}</span>
            </div>
          </div>
          
          {/* Title */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2D3436] mb-4 leading-tight">
            {post.title}
          </h1>
          
          {/* Author Byline */}
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-6 pb-6 border-b border-gray-100">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span>
              {isTh ? 'โดย ทีมงาน Abortion Thailand' : 'By Abortion Thailand Team'}
            </span>
            <span className="text-gray-300">•</span>
            <span>
              {isTh ? 'ตรวจสอบโดย: ทีมแพทย์ผู้เชี่ยวชาญ' : 'Reviewed by: Medical Expert Team'}
            </span>
          </div>
          
          {/* Excerpt / Lead */}
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed border-l-4 border-[#7FB069] pl-4">
            {post.excerpt}
          </p>
        </header>

        {/* Table of Contents (for long articles) */}
        {toc.length >= 3 && (
          <nav className="bg-[#F5F0E8] rounded-2xl p-6 mb-10">
            <h2 className="text-lg font-semibold text-[#2D3436] mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-[#7FB069]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
              {isTh ? 'สารบัญ' : 'Table of Contents'}
            </h2>
            <ol className="space-y-2">
              {toc.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-[#7FB069] font-medium">{index + 1}.</span>
                  <a href={`#${item.id}`} className="text-gray-700 hover:text-[#7FB069] transition-colors">
                    {item.text}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        )}

        {/* Divider */}
        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-px bg-gray-200" />
          <div className="w-2 h-2 rounded-full bg-[#7FB069]" />
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Post Content */}
        <div className="space-y-8">
          {sections.map((section, index) => {
            switch (section.type) {
              case 'heading':
                return (
                  <h2
                    key={index}
                    id={section.content?.toLowerCase().replace(/[^a-z0-9\u0E00-\u0E7F]+/g, '-')}
                    className="text-xl md:text-2xl font-bold text-[#2D3436] pt-4 scroll-mt-24"
                  >
                    {section.content}
                  </h2>
                );
              case 'paragraph':
                return (
                  <p key={index} className="text-gray-700 leading-relaxed text-lg">
                    {section.content}
                  </p>
                );
              case 'list':
                return (
                  <ul key={index} className="space-y-3">
                    {section.items?.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#7FB069] mt-2.5 flex-shrink-0" />
                        <span className="text-gray-700 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              case 'info-box':
                const boxStyles = {
                  info: 'bg-[#7FB069]/10 border-[#7FB069]/30',
                  warning: 'bg-[#E8A598]/20 border-[#E8A598]/40',
                  tip: 'bg-[#7FB069]/10 border-[#7FB069]/30',
                };
                const boxIcons = {
                  info: (
                    <svg className="w-5 h-5 text-[#7FB069]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  warning: (
                    <svg className="w-5 h-5 text-[#E8A598]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  ),
                  tip: (
                    <svg className="w-5 h-5 text-[#7FB069]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  ),
                };
                return (
                  <div key={index} className={`flex items-start gap-4 p-5 rounded-xl border ${boxStyles[section.boxType || 'info']}`}>
                    <div className="flex-shrink-0 mt-0.5">
                      {boxIcons[section.boxType || 'info']}
                    </div>
                    <p className="text-gray-700 leading-relaxed">{section.content}</p>
                  </div>
                );
              default:
                return null;
            }
          })}
        </div>

        {/* Medical Disclaimer */}
        <div className="mt-12 p-6 bg-[#F5F0E8] rounded-xl border border-gray-200">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-[#7FB069] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="font-medium text-[#2D3436] mb-1">
                {isTh ? 'ข้อมูลทางการแพทย์' : 'Medical Information'}
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                {isTh 
                  ? 'ข้อมูลในบทความนี้มีไว้เพื่อการศึกษาเท่านั้น ไม่สามารถใช้แทนคำแนะนำทางการแพทย์จากแพทย์ผู้เชี่ยวชาญ หากมีคำถามหรือข้อกังวล ควรปรึกษาแพทย์โดยตรง'
                  : 'The information in this article is for educational purposes only and cannot replace professional medical advice. If you have questions or concerns, please consult a doctor directly.'}
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-br from-[#7FB069] to-[#6a9558] rounded-2xl p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
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
                className="flex items-center gap-2 px-4 py-3 bg-white text-[#7FB069] rounded-lg hover:bg-gray-100 transition-colors font-medium"
              >
                <span>💚</span> LINE
              </a>
              <a
                href="mailto:info@abortionthailand.com"
                className="flex items-center gap-2 px-4 py-3 bg-white text-[#7FB069] rounded-lg hover:bg-gray-100 transition-colors font-medium"
              >
                <span>📧</span> info@abortionthailand.com
              </a>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-xl font-bold text-[#2D3436] mb-6 flex items-center gap-2">
              <svg className="w-5 h-5 text-[#7FB069]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              {isTh ? 'บทความที่เกี่ยวข้อง' : 'Related Articles'}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/${lang}/blog/${relatedPost.slug}`}
                  className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="relative w-full h-40 overflow-hidden">
                    <img
                      src={relatedPost.imageUrl}
                      alt={relatedPost.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 bg-[#7FB069] text-white text-xs font-medium rounded-full">
                        {relatedPost.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-[#2D3436] group-hover:text-[#7FB069] transition-colors line-clamp-2 mb-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-gray-500">
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
