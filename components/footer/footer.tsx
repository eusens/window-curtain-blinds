'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes'; // For detecting theme mode
import { inclusions } from '../constants/footerContent'; // Assuming you store the inclusion content separately

export default function Footer() {
  const { theme } = useTheme(); // Hook to determine current theme

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 p-6">
      <div className="container mx-auto flex flex-col space-y-6">
        {/* Upper Line: Inclusions Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
          {inclusions.map((item) => (
            <div key={item.title} className="flex flex-col items-center md:items-start">
              <Image src={item.icon} alt={item.title} width={30} height={30} />
              <h4 className="text-lg font-semibold mt-2">{item.title}</h4>
              <p className="text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Lower Line: Logo and Copyright Message */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Company Logo */}
          <div>
            {theme === 'dark' ? (
              <Image
                src="/logo-black.svg" // Dark mode logo
                alt="Company Logo"
                width={150}
                height={40}
              />
            ) : (
              <Image
                src="/logo-white.svg" // Light mode logo
                alt="Company Logo"
                width={150}
                height={40}
              />
            )}
          </div>

          {/* Copyright Message */}
          <div className="text-center text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Company Name. All Rights Reserved.
            <p>
               We Supply Store sells factory new and new surplus products. This website
               is not sanctioned or approved by any manufacturer or trade name listed. We
               are not an authorized distributor or representative for the listed
               manufacturers. Brand names, brands, and designated trademarks appearing
               herein are the property of their respective owners.
             </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
