import Link from 'next/link';
import { Lang, Dictionary } from '@/content';

interface FooterProps {
  lang: Lang;
  dict: Dictionary;
}

export function Footer({ lang, dict }: FooterProps) {
  const t = dict.footer;
  const isTh = lang === 'th';

  return (
    <footer className="bg-[#2D3436] text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div>
            <Link href={`/${lang}`} className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-[#7FB069] flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <span className="font-semibold">abortionthailand.com</span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              {t.partner}
            </p>
            
            {/* Email Contact */}
            <div className="mt-4">
              <p className="text-sm text-gray-400 mb-1">{isTh ? 'ติดต่อเรา' : 'Contact us'}</p>
              <a 
                href="mailto:info@abortionthailand.com" 
                className="text-[#7FB069] hover:underline flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@abortionthailand.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide">
              {isTh ? 'ลิงก์ด่วน' : 'Quick Links'}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href={`/${lang}/services`} className="text-sm text-gray-400 hover:text-white transition-colors">
                  {dict.nav.services}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/faq`} className="text-sm text-gray-400 hover:text-white transition-colors">
                  {dict.nav.faq}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/international`} className="text-sm text-gray-400 hover:text-white transition-colors">
                  {dict.nav.international}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/blog`} className="text-sm text-gray-400 hover:text-white transition-colors">
                  {dict.nav.blog}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/about`} className="text-sm text-gray-400 hover:text-white transition-colors">
                  {dict.nav.about}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Channels */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide">
              {isTh ? 'สอบถาม / จองคิว' : 'Inquire / Book'}
            </h3>
            
            {/* Multi-Channel CTA */}
            <div className="space-y-3">
              <a
                href="https://line.me/R/ti/p/@895vdurk"
                target="_blank"
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-[#7FB069] transition-colors"
              >
                <span className="text-lg">💚</span>
                <span>LINE: @895vdurk</span>
              </a>
              <a
                href="mailto:info@abortionthailand.com"
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-[#7FB069] transition-colors"
              >
                <span className="text-lg">📧</span>
                <span>info@abortionthailand.com</span>
              </a>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <span className="text-lg">📱</span>
                <span>WhatsApp (pending)</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <span className="text-lg">📘</span>
                <span>Facebook (pending)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <p className="text-sm text-gray-400">
              {t.copyright}
            </p>
            <Link href={`/${lang}/about`} className="text-sm text-gray-400 hover:text-white transition-colors">
              {t.privacy}
            </Link>
          </div>
          
          {/* Admin Link - Hidden/Subtle */}
          <a 
            href="https://abortion-thailand-web.vercel.app/admin" 
            target="_blank"
            className="text-xs text-gray-600 hover:text-gray-400 transition-colors"
            title="Admin Dashboard"
          >
            {t.admin}
          </a>
        </div>
      </div>
    </footer>
  );
}
