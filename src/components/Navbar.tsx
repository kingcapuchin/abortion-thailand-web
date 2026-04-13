'use client';

import Link from 'next/link';
import { useState } from 'react';
import { LanguageToggle } from './LanguageToggle';
import { Lang, Dictionary } from '@/content';

interface NavbarProps {
  lang: Lang;
  dict: Dictionary;
}

export function Navbar({ lang, dict }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const t = dict.nav;

  const links = [
    { href: `/${lang}`, label: t.home },
    { href: `/${lang}/services`, label: t.services },
    { href: `/${lang}/faq`, label: t.faq },
    { href: `/${lang}/international`, label: t.international },
    { href: `/${lang}/blog`, label: t.blog },
    { href: `/${lang}/about`, label: t.about },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={`/${lang}`} className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#7FB069] flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <span className="font-semibold text-[#2D3436] hidden sm:block">abortionthailand.com</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-[#7FB069] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <LanguageToggle lang={lang} />
            <Link
              href="https://line.me/ti/p/~emmy" // Placeholder LINE link
              target="_blank"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-[#7FB069] text-white text-sm font-medium rounded-full hover:bg-[#6a9558] transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.365 9.863c.349 0 .626.32.626.71 0 .391-.277.71-.626.71H17.61v1.405h1.755c.349 0 .626.32.626.71 0 .392-.277.71-.626.71h-2.386c-.943 0-1.702-.759-1.702-1.703v-1.128H13.9c-.349 0-.626-.32-.626-.71 0-.391.277-.71.626-.71h1.755v-1.404H13.9c-.349 0-.626-.32-.626-.71 0-.391.277-.71.626-.71h2.386c.943 0 1.702.759 1.702 1.703v1.129h1.753zm-3.69 3.237l-2.34 2.34c-.489.49-1.13.763-1.793.763-.663 0-1.304-.273-1.794-.763l-2.34-2.34c-.757-.757-.757-1.98 0-2.737.757-.756 1.98-.756 2.736 0l1.704 1.704 1.705-1.704c.757-.756 1.979-.756 2.736 0 .757.757.757 1.98 0 2.737"/>
              </svg>
              {t.contact}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-gray-600 hover:text-[#7FB069]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
