'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useCartStore } from '@/store/cart-store';
import { ShoppingCartIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useDarkMode } from '@/lib/use-dark-mode';

export function Header() {
  const [isHydrated, setIsHydrated] = useState(false);
  const itemCount = useCartStore((state) => state.getItemCount());
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  // Prevent hydration mismatch by only showing cart count after client hydration
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Text Logo Only */}
          <Link href="/" className="flex items-center">
            <span className="font-bold text-2xl text-gray-900 dark:text-white transition-colors duration-200">
              Mini-Commerce
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
            >
              Products
            </Link>
            <Link
              href="/cart"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
            >
              Cart
            </Link>
          </nav>

          {/* Dark Mode Toggle & Cart */}
          <div className="flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>

            {/* Cart Icon */}
            <Link 
              href="/cart" 
              className="relative p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-200 group"
            >
              <ShoppingCartIcon className="h-6 w-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200" />
              {isHydrated && itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 dark:bg-blue-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                  {itemCount > 99 ? '99+' : itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
