export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  inStock: boolean;
  features: string[];
}

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getItemCount: () => number;
  getSubtotal: () => number;
  getTotal: () => number;
}

export interface Order {
  id: string;
  items: CartItem[];
  subtotal: number;
  total: number;
  createdAt: Date;
}

export interface ApiError {
  message: string;
  status?: number;
}
