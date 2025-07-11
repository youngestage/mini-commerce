# Mini-Commerce

A modern e-commerce prototype built with Next.js 15, demonstrating clean architecture, responsive design, and excellent user experience. This client-side application features product browsing, cart management, and a mock checkout flow with persistent state, dark mode support, and Nigerian Naira currency.

## 🚀 Live Demo

Visit the live application: [https://mini-commerce-[your-app-name].onrender.com](https://mini-commerce-[your-app-name].onrender.com)

## 📋 Project Overview

Mini-Commerce is a fully functional e-commerce prototype that showcases modern web development practices. The application allows users to:

- **Browse Products**: View a catalog of 10+ products with search and category filtering
- **Product Details**: Detailed product pages with features, pricing, and add-to-cart functionality
- **Cart Management**: Add, remove, and modify quantities with persistent storage
- **Checkout Flow**: Complete mock checkout process with order confirmation
- **Dark Mode**: Toggle between light and dark themes with system preference detection
- **State Persistence**: All cart data and theme preferences survive page reloads
- **Nigerian Currency**: All prices displayed in Naira (₦) with proper formatting

### Key Features Implemented

✅ **Product Catalogue** (`/`) - Grid layout with search and category filters  
✅ **Product Detail Pages** (`/product/[slug]`) - Dynamic routing with full product info  
✅ **Shopping Cart** (`/cart`) - Quantity management and order summary  
✅ **Checkout Flow** (`/checkout` → `/checkout/success`) - Mock payment with order confirmation  
✅ **Dark Mode Toggle** - Seamless theme switching with persistent preferences  
✅ **Nigerian Naira Currency** - Localized pricing with proper ₦ formatting  
✅ **Toast Notifications** - Real-time feedback for user actions  
✅ **Error Handling** - Graceful loading states and error boundaries  
✅ **SEO Optimization** - Meta tags, Open Graph, and structured data  
✅ **Testing** - Jest + React Testing Library component tests  
✅ **Responsive Design** - Mobile-first approach with smooth animations

## 🎨 Design Approach

### Layout & Responsiveness

- **Mobile-First Design**: Built with responsive breakpoints (sm, md, lg, xl)
- **Grid Layouts**: CSS Grid for product listings, Flexbox for components
- **Clean Typography**: Geist font family for modern, readable text
- **Consistent Spacing**: Tailwind's spacing scale for visual harmony
- **Smooth Animations**: Micro-interactions and transitions for enhanced UX

### Color Palette & Theming

#### Light Mode
- **Primary Blue**: `#2563eb` for CTAs and interactive elements
- **Neutral Grays**: `#f9fafb` to `#111827` for backgrounds and text
- **Semantic Colors**: Green for success states, Red for errors/removal

#### Dark Mode
- **Primary Blue**: `#60a5fa` for enhanced contrast in dark theme
- **Dark Backgrounds**: `#111827` to `#1f2937` for comfortable viewing
- **Light Text**: `#f9fafb` to `#d1d5db` for optimal readability
- **System Integration**: Automatic detection of user's preferred color scheme

### User Experience Enhancements

- **Progressive Enhancement**: Core functionality works without JavaScript
- **Loading States**: Skeleton screens and spinners for better perceived performance
- **Error Recovery**: Clear error messages with retry mechanisms
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation support
- **Toast Notifications**: Non-intrusive feedback with slide-in animations
- **Theme Persistence**: Dark/light mode preference saved across sessions

## 🛠 Tools & Techniques

### Core Stack

- **Next.js 15** with App Router for modern React development
- **TypeScript** in strict mode for type safety and developer experience
- **Tailwind CSS v4** for utility-first styling and rapid development
- **React Query** for data fetching, caching, and synchronization
- **Zustand** for lightweight state management with persistence

### Enhanced Features

- **Dark Mode System**: Custom hook with localStorage persistence and system preference detection
- **Currency Formatting**: Nigerian Naira (₦) with proper thousand separators and locale support
- **Toast System**: Real-time notifications for user actions with auto-dismiss
- **Enhanced Animations**: Staggered loading, hover effects, and smooth transitions

### Development Tools

- **ESLint + Prettier** for code quality and formatting
- **Jest + React Testing Library** for component testing
- **TypeScript Strict Mode** with additional compiler options
- **clsx + tailwind-merge** for conditional styling utilities

### Data Layer

- **localStorage** for cart persistence and theme preferences
- **JSON API** endpoints for product data fetching
- **React Query** for intelligent caching and background refetching
- **Currency Utilities**: Custom formatting functions for Nigerian Naira

### Architecture Patterns

- **Component Composition**: Reusable UI components with clear interfaces
- **Custom Hooks**: Encapsulated logic for cart operations, theme management, and data fetching
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
- **Dark Mode Error Handling**: Consistent error UI across themes

### Error Recovery

- **Local Storage Fallbacks**: Cart data and preferences persist through errors
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
npm run format:check # Check if files are formatted
npm run test         # Run Jest test suite
npm run test:watch   # Run tests in watch mode
npm run type-check   # Run TypeScript type checking
```

### Project Structure

```
mini-commerce/
├── src/
│   ├── app/                 # Next.js 15 App Router pages
│   │   ├── cart/           # Cart page
│   │   ├── checkout/       # Checkout flow
│   │   ├── product/        # Product detail pages
│   │   └── layout.tsx      # Root layout with theme support
│   ├── components/         # Reusable UI components
│   │   ├── cart/          # Cart-specific components
│   │   ├── product/       # Product-related components
│   │   └── ui/            # Generic UI components (header, toast, etc.)
│   ├── data/              # Static data and JSON files
│   ├── lib/               # Utility functions and providers
│   │   ├── providers.tsx  # React Query provider
│   │   ├── use-dark-mode.ts # Dark mode hook
│   │   └── utils.ts       # Currency formatting utilities
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

## 📦 Deployment on Render

### Step-by-Step Deployment Guide

#### 1. Prepare Your Repository

1. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

#### 2. Deploy on Render

1. **Sign up/Login** to [Render](https://render.com)

2. **Create a New Web Service**:
   - Click "New" → "Web Service"
   - Connect your GitHub repository
   - Select your `mini-commerce` repository

3. **Configure Build Settings**:
   ```
   Name: mini-commerce
   Environment: Node
   Region: Frankfurt (EU Central) or Oregon (US West)
   Branch: main
   Build Command: npm install && npm run build
   Start Command: npm start
   ```

4. **Environment Variables** (if needed):
   ```
   NODE_ENV=production
   ```

5. **Advanced Settings**:
   ```
   Node Version: 18 (or latest)
   Auto-Deploy: Yes
   ```

#### 3. Domain Configuration

Your app will be available at: `https://mini-commerce-[random-string].onrender.com`

For a custom domain:
1. Go to Settings → Custom Domains
2. Add your domain
3. Configure DNS records as instructed

#### 4. Deployment Verification

✅ Build completes successfully  
✅ App starts without errors  
✅ All routes are accessible  
✅ Dark mode toggle works  
✅ Cart persistence functions  
✅ Images load properly  

### Render Configuration Files

Create these optional files for enhanced deployment:

**`render.yaml`** (for Infrastructure as Code):
```yaml
services:
  - type: web
    name: mini-commerce
    env: node
    buildCommand: npm install && npm run build
    startCommand: npm start
    envVars:
      - key: NODE_ENV
        value: production
```

### Alternative Deployment Platforms

The application can also be deployed to:

- **Vercel**: `vercel --prod`
- **Netlify**: Connect GitHub repo with build command `npm run build`
- **Railway**: Connect GitHub and deploy automatically
- **Heroku**: Add buildpack and deploy via Git

## 💰 Nigerian Market Features

### Currency Localization

- **Nigerian Naira (₦)**: All prices displayed in local currency
- **Proper Formatting**: Comma separators for thousands (₦1,299.99)
- **Locale Support**: Nigerian English (`en-NG`) formatting standards

### Local Considerations

- **Payment Methods**: Mock checkout ready for Flutterwave/Paystack integration
- **Shipping**: Free shipping placeholder for local delivery options
- **Tax**: VAT calculation placeholder for Nigerian tax requirements

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Built with ❤️ and deployed on Render**  
_Demonstrating modern React, Next.js, and e-commerce development practices with Nigerian market focus_
