'use client';

import Link from 'next/link';
import { useCartStore } from '@/store/cart-store';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

export function Header() {
  const itemCount = useCartStore((state) => state.getItemCount());

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-blue-600 text-white p-2 rounded-lg">
              <span className="font-bold text-lg">MC</span>
            </div>
            <span className="font-bold text-xl text-gray-900">Mini-Commerce</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Products
            </Link>
            <Link
              href="/cart"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Cart
            </Link>
          </nav>

          {/* Cart Icon */}
          <Link href="/cart" className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <ShoppingCartIcon className="h-6 w-6 text-gray-700" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {itemCount > 99 ? '99+' : itemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
} 