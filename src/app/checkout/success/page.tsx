'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { Suspense } from 'react';

function CheckoutSuccessContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('orderId') || 'ORDER123';

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <CheckCircleIcon className="h-16 w-16 text-green-500 mx-auto mb-6" />
        
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Order Confirmed!
        </h1>
        
        <p className="text-lg text-gray-600 mb-8">
          Thank you for your purchase. Your order has been successfully placed.
        </p>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-semibold text-green-900 mb-2">
            Order Details
          </h2>
          <p className="text-green-800">
            <strong>Order ID:</strong> {orderId}
          </p>
          <p className="text-green-800 mt-1">
            <strong>Status:</strong> Processing
          </p>
          <p className="text-green-800 mt-1 text-sm">
            You will receive an email confirmation shortly with tracking information.
          </p>
        </div>

        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <Link
            href="/"
            className="block w-full sm:w-auto bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center"
          >
            Continue Shopping
          </Link>
          
          <button
            onClick={() => window.print()}
            className="block w-full sm:w-auto bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium text-center"
          >
            Print Receipt
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            What happens next?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-600">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <span className="font-bold text-blue-600">1</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Order Processing</h4>
              <p>We&apos;ll prepare your items for shipment</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <span className="font-bold text-blue-600">2</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Shipping</h4>
              <p>Your order will be shipped within 2-3 business days</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <span className="font-bold text-blue-600">3</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Delivery</h4>
              <p>Track your package and enjoy your purchase</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CheckoutSuccessPage() {
  return (
    <Suspense fallback={
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <div className="animate-pulse">
            <div className="h-16 w-16 bg-gray-200 rounded-full mx-auto mb-6"></div>
            <div className="h-8 bg-gray-200 rounded mb-4 w-48 mx-auto"></div>
            <div className="h-6 bg-gray-200 rounded mb-8 w-64 mx-auto"></div>
          </div>
        </div>
      </div>
    }>
      <CheckoutSuccessContent />
    </Suspense>
  );
} 