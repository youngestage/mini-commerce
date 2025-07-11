import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format a price in Nigerian Naira (₦)
 * @param price - The price as a number
 * @returns Formatted price string with naira symbol
 */
export function formatPrice(price: number): string {
  return `₦${price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
}

/**
 * Format a price for display with proper thousands separators
 * @param price - The price as a number
 * @returns Formatted price with naira symbol and comma separators
 */
export function formatCurrency(price: number): string {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 2,
  }).format(price);
} 