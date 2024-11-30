"use client"; // This marks the component as a client component

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-yellow-100 shadow-md py-4 border-b border-gray-300">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/" className="text-2xl font-semibold text-gray-800">
          
        </Link>
        <div className="space-x-6">
          <Link
            href="/Services"
            className={`text-gray-600 hover:text-gray-800 ${
              pathname === '/Services' ? 'font-bold text-gray-800' : ''
            }`}
          >
            Services
          </Link>
          <Link
            href="/about"
            className={`text-gray-600 hover:text-gray-800 ${
              pathname === '/about' ? 'font-bold text-gray-800' : ''
            }`}
          >
            About
          </Link>
          <Link
            href="/Contact"
            className={`text-gray-600 hover:text-gray-800 ${
              pathname === '/Contact' ? 'font-bold text-gray-800' : ''
            }`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
