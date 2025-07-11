'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCartStore } from '@/store/cart-store';
import { formatPrice } from '@/lib/utils';
import { EmptyState } from '@/components/ui/error-boundary';
import { v4 as uuidv4 } from 'uuid';

export default function CheckoutPage() {
  const router = useRouter();
  const { items, getSubtotal, getTotal, getItemCount, clearCart } =
    useCartStore();
  const [isProcessing, setIsProcessing] = useState(false);

  const subtotal = getSubtotal();
  const total = getTotal();
  const itemCount = getItemCount();

  if (items.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Checkout</h1>
        <EmptyState
          title="Your cart is empty"
          message="Add some products to your cart before proceeding to checkout."
        />
      </div>
    );
  }

  const handlePlaceOrder = async () => {
    setIsProcessing(true);

    // Simulate order processing delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Generate random order ID
    const orderId = uuidv4().split('-')[0]?.toUpperCase() || 'ORDER123';

    // Clear cart
    clearCart();

    // Redirect to success page with order ID
    router.push(`/checkout/success?orderId=${orderId}`);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Order Summary */}
        <div className="order-2 lg:order-1">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Order Summary
            </h2>

            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center"
                >
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 dark:text-white">{item.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {formatPrice(item.price)} × {item.quantity}
                    </p>
                  </div>
                  <div className="font-medium text-gray-900 dark:text-white">
                    {formatPrice(item.price * item.quantity)}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 dark:border-gray-600 mt-6 pt-4 space-y-2">
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
                <span>₦0.00</span>
              </div>
              <div className="flex justify-between text-lg font-bold text-gray-900 dark:text-white border-t border-gray-200 dark:border-gray-600 pt-2">
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Checkout Form */}
        <div className="order-1 lg:order-2">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Payment Information
            </h2>

            <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 rounded-lg p-4 mb-6">
              <p className="text-blue-800 dark:text-blue-200 text-sm">
                <strong>Demo Mode:</strong> This is a demonstration checkout. No
                real payment will be processed.
              </p>
            </div>

            <form className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="card"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Card Number
                </label>
                <input
                  type="text"
                  id="card"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="1234 5678 9012 3456"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="expiry"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    id="expiry"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="MM/YY"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="cvc"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    CVC
                  </label>
                  <input
                    type="text"
                    id="cvc"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="123"
                    required
                  />
                </div>
              </div>

              <button
                type="button"
                onClick={handlePlaceOrder}
                disabled={isProcessing}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed transition-colors font-medium mt-6"
              >
                {isProcessing ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Processing Order...</span>
                  </div>
                ) : (
                  `Place Order - ${formatPrice(total)}`
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
