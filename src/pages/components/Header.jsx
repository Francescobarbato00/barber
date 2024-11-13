// components/Header.jsx
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#202020] text-white font-['Helvetica'] shadow-md">
      <div className="container mx-auto flex justify-between items-center py-6 px-6 sm:px-8 md:px-8">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Barbercrop Logo" width={50} height={50} />
          <span
            className="text-[24px] sm:text-[28px] font-medium"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            DF BARBERSHOP
          </span>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <nav
          className={`hidden lg:flex items-center space-x-8 text-lg`}
        >
          <Link href="/" className="hover:text-red-500 transition-colors duration-200">
            HOME
          </Link>
          <Link href="/about" className="hover:text-red-500 transition-colors duration-200">
            CHI SIAMO
          </Link>
          <Link href="/service" className="hover:text-red-500 transition-colors duration-200">
            SERVIZI
          </Link>
          <Link href="/blog" className="hover:text-red-500 transition-colors duration-200">
            BLOG
          </Link>
          <Link href="/contact" className="hover:text-red-500 transition-colors duration-200">
            CONTATTI
          </Link>
        </nav>

        {/* Book Now Button (always visible on desktop) */}
        <div className="hidden lg:block">
          <Link href="/book" className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-md font-medium">
            PRENOTA
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#202020] p-4">
          <nav className="flex flex-col items-center space-y-4 text-lg">
            <Link href="/" className="hover:text-red-500 transition-colors duration-200">
              HOME
            </Link>
            <Link href="/about" className="hover:text-red-500 transition-colors duration-200">
              CHI SIAMO
            </Link>
            <Link href="/service" className="hover:text-red-500 transition-colors duration-200">
              SERVIZI
            </Link>
            <Link href="/blog" className="hover:text-red-500 transition-colors duration-200">
              BLOG
            </Link>
            <Link href="/contact" className="hover:text-red-500 transition-colors duration-200">
              CONTATTI
            </Link>
            <div className="mt-4">
              <Link href="/book" className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-md font-medium">
                PRENOTA
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
