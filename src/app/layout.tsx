import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Providers } from '@/lib/providers';
import { Header } from '@/components/ui/header';
import { ToastProvider } from '@/lib/toast-provider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Mini-Commerce | Modern E-commerce Experience',
  description:
    'Discover amazing products at Mini-Commerce. Browse our curated collection of electronics, fashion, sports gear, and more with seamless shopping experience.',
  keywords: 'e-commerce, shopping, electronics, fashion, sports, home goods',
  authors: [{ name: 'Mini-Commerce Team' }],
  openGraph: {
    title: 'Mini-Commerce | Modern E-commerce Experience',
    description:
      'Discover amazing products at Mini-Commerce. Browse our curated collection with seamless shopping experience.',
    url: 'https://mini-commerce.vercel.app',
    siteName: 'Mini-Commerce',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mini-Commerce - Modern E-commerce Experience',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mini-Commerce | Modern E-commerce Experience',
    description:
      'Discover amazing products at Mini-Commerce. Browse our curated collection with seamless shopping experience.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// Script to prevent flash of wrong theme
const themeScript = `
  (function() {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldUseDark = savedTheme === 'dark' || (!savedTheme && systemPrefersDark);
    
    if (shouldUseDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.style.colorScheme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.colorScheme = 'light';
    }
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased transition-colors duration-300`}
      >
        <Providers>
          <ToastProvider>
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
              <Header />
              <main className="transition-colors duration-300">{children}</main>
            </div>
          </ToastProvider>
        </Providers>
      </body>
    </html>
  );
}
