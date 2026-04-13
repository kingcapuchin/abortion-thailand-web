import Link from 'next/link';

interface InfoCardProps {
  title: string;
  description: string;
  badge: string;
  href: string;
}

export function InfoCard({ title, description, badge, href }: InfoCardProps) {
  return (
    <div className="bg-[#F5F0E8] rounded-2xl p-6">
      <span className="inline-block px-3 py-1 bg-[#E8A598]/20 text-[#E8A598] text-xs font-medium rounded-full mb-4">
        {badge}
      </span>
      <h3 className="text-lg font-semibold text-[#2D3436] mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-4">{description}</p>
      <Link href={href} className="text-sm font-medium text-[#7FB069] hover:underline">
        {badge} →
      </Link>
    </div>
  );
}
