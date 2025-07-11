'use client';

import Image from 'next/image';
import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useCartStore } from '@/store/cart-store';
import { formatPrice } from '@/lib/utils';
import type { CartItem } from '@/types';

interface CartItemProps {
  item: CartItem;
}

export function CartItem({ item }: CartItemProps) {
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(item.id);
    } else {
      updateQuantity(item.id, newQuantity);
    }
  };

  const itemTotal = item.price * item.quantity;

  return (
    <div className="flex items-center space-x-4 py-6 border-b border-gray-200 dark:border-gray-700">
      {/* Product Image */}
      <div className="relative h-20 w-20 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
          sizes="80px"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate">
          {item.name}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mt-1">{formatPrice(item.price)} each</p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center space-x-2">
        <button
          onClick={() => handleQuantityChange(item.quantity - 1)}
          className="p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          aria-label="Decrease quantity"
        >
          <MinusIcon className="h-4 w-4 text-gray-600 dark:text-gray-300" />
        </button>
        
        <span className="w-12 text-center font-medium text-gray-900 dark:text-white">
          {item.quantity}
        </span>
        
        <button
          onClick={() => handleQuantityChange(item.quantity + 1)}
          className="p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          aria-label="Increase quantity"
        >
          <PlusIcon className="h-4 w-4 text-gray-600 dark:text-gray-300" />
        </button>
      </div>

      {/* Item Total */}
      <div className="text-right">
        <p className="text-lg font-semibold text-gray-900 dark:text-white">
          {formatPrice(itemTotal)}
        </p>
      </div>

      {/* Remove Button */}
      <button
        onClick={() => removeItem(item.id)}
        className="p-2 text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md transition-colors"
        aria-label="Remove item"
      >
        <TrashIcon className="h-5 w-5" />
      </button>
    </div>
  );
}
