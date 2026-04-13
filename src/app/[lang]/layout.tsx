import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { getDictionary, Lang } from '@/content';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return [{ lang: 'th' }, { lang: 'en' }];
}

interface LangLayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

export default async function LangLayout({ children, params }: LangLayoutProps) {
  const { lang } = await params;
  
  if (lang !== 'th' && lang !== 'en') {
    notFound();
  }

  const dict = getDictionary(lang as Lang);

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F0E8]">
      <Navbar lang={lang as Lang} dict={dict} />
      <main className="flex-grow pt-16">
        {children}
      </main>
      <Footer lang={lang as Lang} dict={dict} />
    </div>
  );
}
