import type { Metadata } from 'next';
import { GTMScript, GTMNoscript } from '@/components/GTM';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://abortionthailand.com'),
  title: {
    default: 'Abortion Thailand - Safe, Legal Abortion Services',
    template: '%s | Abortion Thailand',
  },
  description: 'Accurate medical information for pregnancy termination in Thailand. Safe, legal, and confidential services with partner hospitals.',
  keywords: ['abortion Thailand', 'safe abortion Thailand', 'abortion pill Thailand', 'medical abortion Thailand', 'MVA Thailand', 'ทำแท้ง', 'ยาทำแท้ง', 'ยุติการตั้งครรภ์'],
  authors: [{ name: 'Abortion Thailand' }],
  openGraph: {
    type: 'website',
    locale: 'th_TH',
    alternateLocale: 'en_US',
    url: 'https://abortionthailand.com',
    siteName: 'Abortion Thailand',
    title: 'Abortion Thailand - Safe, Legal Abortion Services',
    description: 'Accurate medical information for pregnancy termination in Thailand.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abortion Thailand',
    description: 'Safe, legal abortion services in Thailand',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <head>
        <GTMScript />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="antialiased">
        <GTMNoscript />
        {children}
      </body>
    </html>
  );
}
