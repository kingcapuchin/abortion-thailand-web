import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F0E8]">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-[#7FB069] mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-[#2D3436] mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8">
          The page you are looking for does not exist.
        </p>
        <Link
          href="/th"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#7FB069] text-white font-medium rounded-full hover:bg-[#6a9558] transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Go Home
        </Link>
      </div>
    </div>
  );
}
