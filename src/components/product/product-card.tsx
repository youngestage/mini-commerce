'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCartStore } from '@/store/cart-store';
import { useToastContext } from '@/lib/toast-provider';
import { formatPrice } from '@/lib/utils';
import type { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);
  const { addToast } = useToastContext();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    addToast(`${product.name} added to cart!`, 'success');
  };

  return (
    <Link href={`/product/${product.slug}`} className="group block">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02]">
        {/* Product Image */}
        <div className="relative aspect-square bg-gray-100 dark:bg-gray-700 overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/0 via-transparent to-black/0 group-hover:from-black/10 transition-all duration-300" />
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center">
              <span className="text-white font-semibold text-lg bg-red-500 px-3 py-1 rounded-full animate-pulse">
                Out of Stock
              </span>
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="p-4 space-y-3">
          <div className="flex items-start justify-between">
            <h3 className="font-semibold text-gray-900 dark:text-white text-lg line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
              {product.name}
            </h3>
          </div>

          <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
            {product.description}
          </p>

          <div className="flex items-center justify-between pt-2">
            <div className="flex flex-col space-y-1">
              <span className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {formatPrice(product.price)}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide font-medium">
                {product.category}
              </span>
            </div>

            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 disabled:bg-gray-300 dark:disabled:bg-gray-600 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg transition-all duration-300 font-medium text-sm transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
            >
              {product.inStock ? 'Add to Cart' : 'Unavailable'}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
