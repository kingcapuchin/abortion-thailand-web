import Link from 'next/link';
import { Lang, Dictionary } from '@/content';

interface FooterProps {
  lang: Lang;
  dict: Dictionary;
}

export function Footer({ lang, dict }: FooterProps) {
  const t = dict.footer;

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
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide">
              {lang === 'th' ? 'ลิงก์ด่วน' : 'Quick Links'}
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
                <Link href={`/${lang}/about`} className="text-sm text-gray-400 hover:text-white transition-colors">
                  {dict.nav.about}
                </Link>
              </li>
            </ul>
          </div>

          {/* Emergency & Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide">
              {lang === 'th' ? 'ติดต่อฉุกเฉิน' : 'Emergency'}
            </h3>
            <div className="flex items-center gap-2 text-[#E8A598] mb-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="font-semibold">{t.emergency}</span>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              {t.disclaimer}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            {t.copyright}
          </p>
          <Link href={`/${lang}/about`} className="text-sm text-gray-400 hover:text-white transition-colors">
            {t.privacy}
          </Link>
        </div>
      </div>
    </footer>
  );
}
