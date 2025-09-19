import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="max-w-6xl mx-auto p-4">
      <div className="mt-4 flex flex-col items-center gap-8 md:gap-0 md:flex-row md:justify-between md:items-start bg-gray-800 p-8 rounded-lg">
        <div className="flex flex-col gap-2 items-center md:items-start">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="TrendLama" width={36} height={36} />
            <p className="hidden md:block text-md font-medium tracking-wider text-white">
              TRENDLAMA
            </p>
          </Link>
          <p className="text-sm text-gray-400">&copy; 2025 TrendLama</p>
          <p className="text-sm text-gray-400">All rights reserved</p>
        </div>

        <div className="flex flex-col gap-2 items-center md:items-start text-sm text-gray-400">
          <p className="text-sm text-amber-50">Links</p>
          <Link href="/">Home</Link>
          <Link href="/">Contact</Link>
          <Link href="/">Terms of Services</Link>
          <Link href="/">Privacy Policy</Link>
        </div>

        <div className="flex flex-col gap-2 items-center md:items-start text-sm text-gray-400">
          <p className="text-sm text-amber-50">Links</p>
          <Link href="/">All Products</Link>
          <Link href="/">New Arrivals</Link>
          <Link href="/">Best Sellers</Link>
          <Link href="/">Sale</Link>
        </div>

        <div className="flex flex-col gap-2 items-center md:items-start text-sm text-gray-400">
          <p className="text-sm text-amber-50">Links</p>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          <Link href="/">Blog</Link>
          <Link href="/">Affiliate Program</Link>
        </div>
      </div>
    </footer>
  );
}
