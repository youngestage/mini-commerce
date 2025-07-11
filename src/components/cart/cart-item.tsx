'use client';

import Image from 'next/image';
import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useCartStore } from '@/store/cart-store';
import type { CartItem } from '@/types';

interface CartItemProps {
  item: CartItem;
}

export function CartItemComponent({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCartStore();

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(item.productId);
    } else {
      updateQuantity(item.productId, newQuantity);
    }
  };

  const itemTotal = item.price * item.quantity;

  return (
    <div className="flex items-center space-x-4 py-6 border-b border-gray-200">
      {/* Product Image */}
      <div className="flex-shrink-0">
        <div className="w-20 h-20 relative bg-gray-100 rounded-lg overflow-hidden">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
            sizes="80px"
          />
        </div>
      </div>

      {/* Product Info */}
      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-semibold text-gray-900 truncate">
          {item.name}
        </h3>
        <p className="text-gray-600 mt-1">
          ${item.price.toFixed(2)} each
        </p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center space-x-3">
        <button
          onClick={() => handleQuantityChange(item.quantity - 1)}
          className="p-1 rounded-md hover:bg-gray-100 transition-colors"
          aria-label="Decrease quantity"
        >
          <MinusIcon className="h-5 w-5 text-gray-600" />
        </button>
        
        <span className="font-semibold text-gray-900 min-w-[2rem] text-center">
          {item.quantity}
        </span>
        
        <button
          onClick={() => handleQuantityChange(item.quantity + 1)}
          className="p-1 rounded-md hover:bg-gray-100 transition-colors"
          aria-label="Increase quantity"
        >
          <PlusIcon className="h-5 w-5 text-gray-600" />
        </button>
      </div>

      {/* Item Total */}
      <div className="text-right">
        <p className="text-lg font-bold text-gray-900">
          ${itemTotal.toFixed(2)}
        </p>
      </div>

      {/* Remove Button */}
      <button
        onClick={() => removeItem(item.productId)}
        className="p-2 text-red-600 hover:bg-red-50 rounded-md transition-colors"
        aria-label="Remove item"
      >
        <TrashIcon className="h-5 w-5" />
      </button>
    </div>
  );
} 