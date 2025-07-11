import type { Product } from '@/types';

const PRODUCTS_STORAGE_KEY = 'mini-commerce-products';

export async function fetchProducts(): Promise<Product[]> {
  try {
    // First, try to get products from localStorage
    const storedProducts = localStorage.getItem(PRODUCTS_STORAGE_KEY);
    if (storedProducts) {
      return JSON.parse(storedProducts);
    }

    // If not in localStorage, fetch from JSON file
    const response = await fetch('/api/products');
    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.status}`);
    }

    const products: Product[] = await response.json();
    
    // Seed to localStorage for future use
    localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(products));
    
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw new Error('Failed to load products. Please try again later.');
  }
}

export async function fetchProductBySlug(slug: string): Promise<Product | null> {
  try {
    const products = await fetchProducts();
    return products.find((product) => product.slug === slug) || null;
  } catch (error) {
    console.error('Error fetching product by slug:', error);
    throw new Error('Failed to load product. Please try again later.');
  }
}

export function searchProducts(products: Product[], query: string): Product[] {
  if (!query.trim()) return products;
  
  const lowercaseQuery = query.toLowerCase();
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(lowercaseQuery) ||
      product.description.toLowerCase().includes(lowercaseQuery) ||
      product.category.toLowerCase().includes(lowercaseQuery)
  );
}

export function filterProductsByCategory(
  products: Product[],
  category: string
): Product[] {
  if (!category || category === 'all') return products;
  return products.filter((product) => product.category === category);
}

export function getUniqueCategories(products: Product[]): string[] {
  const categories = products.map((product) => product.category);
  return ['All', ...Array.from(new Set(categories))];
} 