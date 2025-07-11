'use client';

import { useState, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import {
  fetchProducts,
  searchProducts,
  filterProductsByCategory,
  getUniqueCategories,
} from '@/lib/api';
import { ProductCard } from '@/components/product/product-card';
import { SearchFilters } from '@/components/ui/search-filters';
import { ProductGridSkeleton } from '@/components/ui/loading';
import { ErrorDisplay, EmptyState } from '@/components/ui/error-boundary';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const {
    data: products = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
    staleTime: 5 * 60 * 1000,
  });

  const categories = useMemo(() => getUniqueCategories(products), [products]);

  const filteredProducts = useMemo(() => {
    let filtered = products;

    if (selectedCategory !== 'all') {
      filtered = filterProductsByCategory(filtered, selectedCategory);
    }

    if (searchQuery.trim()) {
      filtered = searchProducts(filtered, searchQuery);
    }

    return filtered;
  }, [products, selectedCategory, searchQuery]);

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 animate-in fade-in duration-500">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Our Products
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Discover amazing products for every need
          </p>
        </div>
        <ProductGridSkeleton />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ErrorDisplay
          title="Failed to load products"
          message={
            error instanceof Error
              ? error.message
              : 'Something went wrong while loading products.'
          }
          retry={() => refetch()}
        />
      </div>
    );
  }

  return (
    <>
      <SearchFilters
        searchQuery={searchQuery}
        selectedCategory={selectedCategory}
        categories={categories}
        onSearchChange={setSearchQuery}
        onCategoryChange={setSelectedCategory}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 animate-in fade-in duration-500">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Our Products
          </h1>
          <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
            {filteredProducts.length}{' '}
            {filteredProducts.length === 1 ? 'product' : 'products'} found
            {searchQuery && (
              <span className="text-blue-600 dark:text-blue-400 font-medium">
                {' '}for &ldquo;{searchQuery}&rdquo;
              </span>
            )}
            {selectedCategory !== 'all' && (
              <span className="text-green-600 dark:text-green-400 font-medium">
                {' '}in {selectedCategory}
              </span>
            )}
          </p>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="animate-in fade-in duration-500">
            <EmptyState
              title="No products found"
              message={
                searchQuery || selectedCategory !== 'all'
                  ? 'Try adjusting your search or filter criteria.'
                  : 'No products are currently available.'
              }
            />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-in fade-in duration-700">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-in slide-in-from-bottom-4 duration-500"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: 'both',
                }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
