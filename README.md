# Mini-Commerce

A modern e-commerce prototype built with Next.js 14, demonstrating clean architecture, responsive design, and excellent user experience. This client-side application features product browsing, cart management, and a mock checkout flow with persistent state.

## 🚀 Live Demo

Visit the live application: [https://mini-commerce.vercel.app](https://mini-commerce.vercel.app)

## 📋 Project Overview

Mini-Commerce is a fully functional e-commerce prototype that showcases modern web development practices. The application allows users to:

- **Browse Products**: View a catalog of 10+ products with search and category filtering
- **Product Details**: Detailed product pages with features, pricing, and add-to-cart functionality
- **Cart Management**: Add, remove, and modify quantities with persistent storage
- **Checkout Flow**: Complete mock checkout process with order confirmation
- **State Persistence**: All cart data survives page reloads using localStorage

### Key Features Implemented

✅ **Product Catalogue** (`/`) - Grid layout with search and category filters  
✅ **Product Detail Pages** (`/product/[slug]`) - Dynamic routing with full product info  
✅ **Shopping Cart** (`/cart`) - Quantity management and order summary  
✅ **Checkout Flow** (`/checkout` → `/checkout/success`) - Mock payment with order confirmation  
✅ **Error Handling** - Graceful loading states and error boundaries  
✅ **SEO Optimization** - Meta tags, Open Graph, and structured data  
✅ **Testing** - Jest + React Testing Library component tests  

## 🎨 Design Approach

### Layout & Responsiveness
- **Mobile-First Design**: Built with responsive breakpoints (sm, md, lg, xl)
- **Grid Layouts**: CSS Grid for product listings, Flexbox for components
- **Clean Typography**: Geist font family for modern, readable text
- **Consistent Spacing**: Tailwind's spacing scale for visual harmony

### Color Palette
- **Primary Blue**: `#2563eb` for CTAs and interactive elements
- **Neutral Grays**: `#f9fafb` to `#111827` for backgrounds and text
- **Semantic Colors**: Green for success states, Red for errors/removal
- **High Contrast**: WCAG AA compliant color combinations

### User Experience
- **Progressive Enhancement**: Core functionality works without JavaScript
- **Loading States**: Skeleton screens and spinners for better perceived performance
- **Error Recovery**: Clear error messages with retry mechanisms
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation support

## 🛠 Tools & Techniques

### Core Stack
- **Next.js 14** with App Router for modern React development
- **TypeScript** in strict mode for type safety and developer experience
- **Tailwind CSS** for utility-first styling and rapid development
- **React Query** for data fetching, caching, and synchronization
- **Zustand** for lightweight state management with persistence

### Development Tools
- **ESLint + Prettier** for code quality and formatting
- **Jest + React Testing Library** for component testing
- **TypeScript Strict Mode** with additional compiler options
- **Husky** for git hooks (optional enhancement)

### Data Layer
- **localStorage** for cart persistence and product caching
- **JSON API** endpoints for product data fetching
- **React Query** for intelligent caching and background refetching

### Architecture Patterns
- **Component Composition**: Reusable UI components with clear interfaces
- **Custom Hooks**: Encapsulated logic for cart operations and data fetching
- **Error Boundaries**: Graceful error handling at component levels
- **Loading States**: Consistent loading UI patterns across the application

## 🔍 SEO Strategy

### Meta Tags & Open Graph
- **Dynamic Page Titles**: Product-specific titles for better search visibility
- **Meta Descriptions**: Compelling descriptions for each page type
- **Open Graph Tags**: Rich social media previews with images and descriptions
- **Twitter Cards**: Optimized sharing experience across social platforms

### Technical SEO
- **Structured Data**: JSON-LD schema for products and organization
- **Image Optimization**: Next.js Image component with proper sizing
- **Semantic HTML**: Proper heading hierarchy and landmark elements
- **Clean URLs**: SEO-friendly slug-based routing for products

### Performance Optimizations
- **Code Splitting**: Automatic route-based code splitting with Next.js
- **Image Optimization**: WebP conversion and responsive sizing
- **Caching Strategy**: Service worker caching for repeat visits
- **Critical CSS**: Above-the-fold styles prioritized for faster rendering

## ⚠️ Error Handling Technique

### Client-Side Error Management
- **React Error Boundaries**: Catch and display component-level errors
- **API Error Handling**: Graceful degradation for network failures
- **Form Validation**: Real-time validation with clear error messages
- **404 Handling**: Custom not-found pages with navigation options

### User Experience Focus
- **Loading States**: Skeleton screens prevent layout shift
- **Retry Mechanisms**: Users can retry failed operations
- **Fallback Content**: Alternative content when data fails to load
- **Toast Notifications**: Non-intrusive feedback for user actions

### Error Recovery
- **Local Storage Fallbacks**: Cart data persists through errors
- **Progressive Enhancement**: Core functionality works without JS
- **Error Logging**: Console errors for development debugging
- **User-Friendly Messages**: Technical errors translated to user language

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Git for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/mini-commerce.git
   cd mini-commerce
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build production application
npm run start        # Start production server
npm run lint         # Run ESLint checks
npm run lint:fix     # Fix ESLint issues automatically
npm run format       # Format code with Prettier
npm run test         # Run Jest test suite
npm run test:watch   # Run tests in watch mode
npm run type-check   # Run TypeScript type checking
```

### Project Structure

```
mini-commerce/
├── src/
│   ├── app/                 # Next.js 14 App Router pages
│   │   ├── api/            # API routes
│   │   ├── cart/           # Cart page
│   │   ├── checkout/       # Checkout flow
│   │   ├── product/        # Product detail pages
│   │   └── layout.tsx      # Root layout
│   ├── components/         # Reusable UI components
│   │   ├── cart/          # Cart-specific components
│   │   ├── product/       # Product-related components
│   │   └── ui/            # Generic UI components
│   ├── data/              # Static data and JSON files
│   ├── lib/               # Utility functions and providers
│   ├── store/             # Zustand state management
│   └── types/             # TypeScript type definitions
├── public/                # Static assets
├── __tests__/            # Test files
└── package.json          # Dependencies and scripts
```

## 🧪 Testing

The project includes comprehensive testing setup:

- **Unit Tests**: Component testing with React Testing Library
- **Integration Tests**: User interaction flows and state management
- **Type Safety**: TypeScript strict mode catches errors at compile time
- **Linting**: ESLint ensures code quality and consistency

Run tests with:
```bash
npm test              # Single test run
npm run test:watch    # Watch mode for development
npm run test:coverage # Generate coverage report
```

## 📦 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure build settings (auto-detected for Next.js)
3. Deploy with automatic CI/CD on push to main

### Other Platforms
The application can be deployed to any platform supporting Node.js:
- Netlify
- Cloudflare Pages
- Railway
- Heroku

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Built with ❤️ by [Your Name]**  
*Demonstrating modern React, Next.js, and e-commerce development practices*
