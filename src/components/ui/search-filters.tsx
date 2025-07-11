'use client';

import { useState } from 'react';
import { MagnifyingGlassIcon, FunnelIcon } from '@heroicons/react/24/outline';

interface SearchFiltersProps {
  searchQuery: string;
  selectedCategory: string;
  categories: string[];
  onSearchChange: (query: string) => void;
  onCategoryChange: (category: string) => void;
}

export function SearchFilters({
  searchQuery,
  selectedCategory,
  categories,
  onSearchChange,
  onCategoryChange,
}: SearchFiltersProps) {
  const [localSearch, setLocalSearch] = useState(searchQuery);
  const [isFilterFocused, setIsFilterFocused] = useState(false);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchChange(localSearch);
  };

  const handleSearchChange = (value: string) => {
    setLocalSearch(value);
    // Debounce search for better UX
    const timeoutId = setTimeout(() => {
      onSearchChange(value);
    }, 300);

    return () => clearTimeout(timeoutId);
  };

  return (
    <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-10 backdrop-blur-md bg-white/95 dark:bg-gray-800/95 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          {/* Search Bar */}
          <form onSubmit={handleSearchSubmit} className="flex-1 w-full">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 dark:text-gray-500 group-focus-within:text-blue-500 dark:group-focus-within:text-blue-400 transition-colors duration-300" />
              </div>
              <input
                type="text"
                value={localSearch}
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder="Search products, categories, features..."
                className="block w-full pl-12 pr-4 py-3 text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg leading-5 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300 hover:shadow-md focus:shadow-lg"
              />
            </div>
          </form>

          {/* Category Filter */}
          <div className="flex-shrink-0 w-full sm:w-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FunnelIcon className={`h-5 w-5 transition-colors duration-300 ${
                  isFilterFocused 
                    ? 'text-blue-500 dark:text-blue-400' 
                    : 'text-gray-400 dark:text-gray-500'
                }`} />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => onCategoryChange(e.target.value)}
                onFocus={() => setIsFilterFocused(true)}
                onBlur={() => setIsFilterFocused(false)}
                className="block w-full sm:w-auto pl-10 pr-10 py-3 text-base text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 rounded-lg transition-all duration-300 hover:shadow-md focus:shadow-lg cursor-pointer"
              >
                {categories.map((category) => (
                  <option key={category} value={category.toLowerCase()}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Active Filter Indicator */}
        {(searchQuery || selectedCategory !== 'all') && (
          <div className="mt-4 flex flex-wrap gap-2 animate-in slide-in-from-top-2 duration-300">
            {searchQuery && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 border border-blue-200 dark:border-blue-700">
                Search: &ldquo;{searchQuery}&rdquo;
                <button
                  onClick={() => {
                    setLocalSearch('');
                    onSearchChange('');
                  }}
                  className="ml-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                >
                  ×
                </button>
              </span>
            )}
            {selectedCategory !== 'all' && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 border border-green-200 dark:border-green-700">
                Category: {selectedCategory}
                <button
                  onClick={() => onCategoryChange('all')}
                  className="ml-2 text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 transition-colors"
                >
                  ×
                </button>
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
