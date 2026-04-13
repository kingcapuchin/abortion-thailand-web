import Link from 'next/link';
import { Lang } from '@/content';

interface ServiceCardProps {
  lang: Lang;
  name: string;
  weeks: string;
  price: string;
  description: string;
  features: string[];
  href: string;
  cta: string;
  popular?: boolean;
}

export function ServiceCard({ lang, name, weeks, price, description, features, href, cta, popular }: ServiceCardProps) {
  return (
    <div className={`bg-white rounded-2xl border ${popular ? 'border-[#7FB069] shadow-lg' : 'border-gray-100'} p-6 flex flex-col`}>
      {popular && (
        <span className="inline-block px-3 py-1 bg-[#7FB069] text-white text-xs font-medium rounded-full mb-4 w-fit">
          {lang === 'th' ? 'แนะนำ' : 'Recommended'}
        </span>
      )}
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-[#2D3436] mb-1">{name}</h3>
        <p className="text-sm text-gray-500">{weeks}</p>
      </div>
      <p className="text-2xl font-bold text-[#7FB069] mb-4">{price}</p>
      <p className="text-gray-600 text-sm mb-6 leading-relaxed">{description}</p>
      <ul className="space-y-2 mb-6 flex-grow">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
            <svg className="w-5 h-5 text-[#7FB069] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <Link
        href={href}
        className={`w-full py-3 rounded-full font-medium text-center transition-colors ${
          popular
            ? 'bg-[#7FB069] text-white hover:bg-[#6a9558]'
            : 'bg-[#F5F0E8] text-[#2D3436] hover:bg-[#ebe5db]'
        }`}
      >
        {cta}
      </Link>
    </div>
  );
}
