import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/lib/providers";
import { Header } from "@/components/ui/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mini-Commerce | Modern E-commerce Experience",
  description: "Discover amazing products at Mini-Commerce. Browse our curated collection of electronics, fashion, sports gear, and more with seamless shopping experience.",
  keywords: "e-commerce, shopping, electronics, fashion, sports, home goods",
  authors: [{ name: "Mini-Commerce Team" }],
  openGraph: {
    title: "Mini-Commerce | Modern E-commerce Experience",
    description: "Discover amazing products at Mini-Commerce. Browse our curated collection with seamless shopping experience.",
    url: "https://mini-commerce.vercel.app",
    siteName: "Mini-Commerce",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mini-Commerce - Modern E-commerce Experience",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mini-Commerce | Modern E-commerce Experience",
    description: "Discover amazing products at Mini-Commerce. Browse our curated collection with seamless shopping experience.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 min-h-screen`}
      >
        <Providers>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <footer className="bg-white border-t border-gray-200 py-8 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
              <p>&copy; 2024 Mini-Commerce. Built with Next.js, React Query, and Zustand.</p>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
