'use client';

import Link from 'next/link';
import { useCartStore } from '@/store/cart-store';
import { CartItem } from '@/components/cart/cart-item';
import { formatPrice } from '@/lib/utils';
import { EmptyState } from '@/components/ui/error-boundary';

export default function CartPage() {
  const { items, getSubtotal, getTotal, getItemCount } = useCartStore();

  const subtotal = getSubtotal();
  const total = getTotal();
  const itemCount = getItemCount();

  if (items.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Shopping Cart</h1>
        <EmptyState
          title="Your cart is empty"
          message="Add some products to your cart to get started."
        />
        <div className="text-center mt-8">
          <Link
            href="/"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Cart Items ({itemCount} {itemCount === 1 ? 'item' : 'items'})
            </h2>

            <div className="divide-y divide-gray-200 dark:divide-gray-600">
              {items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 sticky top-4">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Order Summary
            </h2>

            <div className="space-y-3">
              <div className="flex justify-between text-gray-600 dark:text-gray-300">
                <span>Subtotal ({itemCount} items)</span>
                <span>{formatPrice(subtotal)}</span>
              </div>

              <div className="flex justify-between text-gray-600 dark:text-gray-300">
                <span>Shipping</span>
                <span className="text-green-600 dark:text-green-400">Free</span>
              </div>

              <div className="flex justify-between text-gray-600 dark:text-gray-300">
                <span>Tax</span>
                <span>Calculated at checkout</span>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-600 pt-3">
                <div className="flex justify-between text-lg font-bold text-gray-900 dark:text-white">
                  <span>Total</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>
            </div>

            <Link
              href="/checkout"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center block mt-6"
            >
              Proceed to Checkout
            </Link>

            <Link
              href="/"
              className="w-full text-blue-600 dark:text-blue-400 py-2 px-4 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors font-medium text-center block mt-3"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
