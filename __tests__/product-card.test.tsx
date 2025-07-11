import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ProductCard } from '@/components/product/product-card';
import { ToastProvider } from '@/lib/toast-provider';
import type { Product } from '@/types';

// Mock the cart store
jest.mock('@/store/cart-store', () => ({
  useCartStore: () => ({
    addItem: jest.fn(),
  }),
}));

// Mock the toast provider hook
const mockAddToast = jest.fn();
jest.mock('@/lib/toast-provider', () => ({
  ToastProvider: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  useToastContext: () => ({
    addToast: mockAddToast,
  }),
}));

const mockProduct: Product = {
  id: '1',
  slug: 'test-product',
  name: 'Test Product',
  description: 'A test product description',
  price: 99.99,
  image: '/test-image.jpg',
  category: 'Electronics',
  inStock: true,
  features: ['Feature 1', 'Feature 2'],
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

function renderWithProviders(component: React.ReactElement) {
  return render(
    <QueryClientProvider client={queryClient}>
      <ToastProvider>
        {component}
      </ToastProvider>
    </QueryClientProvider>
  );
}

describe('ProductCard', () => {
  it('renders product information correctly', () => {
    renderWithProviders(<ProductCard product={mockProduct} />);

    expect(screen.getByText(mockProduct.name)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.description)).toBeInTheDocument();
    expect(screen.getByText(`₦${mockProduct.price.toFixed(2)}`)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.category)).toBeInTheDocument();
  });

  it('shows "Add to Cart" button when product is in stock', () => {
    renderWithProviders(<ProductCard product={mockProduct} />);

    const addToCartButton = screen.getByRole('button', { name: /add to cart/i });
    expect(addToCartButton).toBeInTheDocument();
    expect(addToCartButton).not.toBeDisabled();
  });

  it('shows "Unavailable" button when product is out of stock', () => {
    const outOfStockProduct = { ...mockProduct, inStock: false };
    renderWithProviders(<ProductCard product={outOfStockProduct} />);

    const button = screen.getByRole('button', { name: /unavailable/i });
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
  });
});
