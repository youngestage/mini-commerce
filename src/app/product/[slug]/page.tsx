'use client';

import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeftIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import { fetchProductBySlug } from '@/lib/api';
import { useCartStore } from '@/store/cart-store';
import { LoadingSpinner } from '@/components/ui/loading';
import { ProductNotFound, ErrorDisplay } from '@/components/ui/error-boundary';

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const addItem = useCartStore((state) => state.addItem);

  const {
    data: product,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ['product', slug],
    queryFn: () => fetchProductBySlug(slug),
    enabled: !!slug,
  });

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <LoadingSpinner />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ErrorDisplay
          title="Failed to load product"
          message={error instanceof Error ? error.message : 'Something went wrong while loading the product.'}
          retry={() => refetch()}
        />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ProductNotFound />
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Button */}
      <Link
        href="/"
        className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 transition-colors"
      >
        <ArrowLeftIcon className="h-5 w-5 mr-2" />
        Back to Products
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="aspect-square relative bg-gray-100 rounded-lg overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
          {!product.inStock && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <span className="text-white font-semibold text-xl">Out of Stock</span>
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <div className="mb-4">
            <span className="text-sm text-blue-600 font-medium uppercase tracking-wide">
              {product.category}
            </span>
            <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
              {product.name}
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Features */}
          {product.features && product.features.length > 0 && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Price and Add to Cart */}
          <div className="mt-auto">
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-bold text-gray-900">
                ${product.price.toFixed(2)}
              </span>
            </div>

            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="w-full bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200 font-medium text-lg flex items-center justify-center space-x-2"
            >
              <ShoppingCartIcon className="h-6 w-6" />
              <span>
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </span>
            </button>

            {product.inStock && (
              <p className="text-green-600 text-sm mt-2 text-center">
                ✓ In stock and ready to ship
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 