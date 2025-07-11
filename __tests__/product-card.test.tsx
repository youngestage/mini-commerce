import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ProductCard } from '@/components/product/product-card';
import type { Product } from '@/types';

// Mock the cart store
jest.mock('@/store/cart-store', () => ({
  useCartStore: () => ({
    addItem: jest.fn(),
  }),
}));

// Mock Next.js router
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

const mockProduct: Product = {
  id: '1',
  slug: 'test-product',
  name: 'Test Product',
  price: 99.99,
  image: '/test-image.jpg',
  description: 'A test product description',
  category: 'Electronics',
  inStock: true,
  features: ['Feature 1', 'Feature 2'],
};

const renderWithQueryClient = (component: React.ReactElement) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { retry: false },
      mutations: { retry: false },
    },
  });

  return render(
    <QueryClientProvider client={queryClient}>
      {component}
    </QueryClientProvider>
  );
};

describe('ProductCard', () => {
  it('renders product information correctly', () => {
    renderWithQueryClient(<ProductCard product={mockProduct} />);

    expect(screen.getByText(mockProduct.name)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.description)).toBeInTheDocument();
    expect(screen.getByText(`$${mockProduct.price.toFixed(2)}`)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.category)).toBeInTheDocument();
  });

  it('shows "Add to Cart" button when product is in stock', () => {
    renderWithQueryClient(<ProductCard product={mockProduct} />);

    const addToCartButton = screen.getByRole('button', { name: /add to cart/i });
    expect(addToCartButton).toBeInTheDocument();
    expect(addToCartButton).not.toBeDisabled();
  });

  it('shows "Unavailable" button when product is out of stock', () => {
    const outOfStockProduct = { ...mockProduct, inStock: false };
    renderWithQueryClient(<ProductCard product={outOfStockProduct} />);

    const unavailableButton = screen.getByRole('button', { name: /unavailable/i });
    expect(unavailableButton).toBeInTheDocument();
    expect(unavailableButton).toBeDisabled();
  });

  it('displays "Out of Stock" overlay when product is not in stock', () => {
    const outOfStockProduct = { ...mockProduct, inStock: false };
    renderWithQueryClient(<ProductCard product={outOfStockProduct} />);

    expect(screen.getByText('Out of Stock')).toBeInTheDocument();
  });
}); 