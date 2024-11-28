import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar/Navbar';
import Providers from './providers';
import { ClerkProvider } from '@clerk/nextjs';
import Footer from '@/components/footer/footer';
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_WEBSITE_URL || 'http://localhost:3000'
  ),
  title: {
    default: 'Factory Automation',
    template: '%s | Factory Automation'
  },
  description: 'Supply industrial automation components - New and surplus components for industrial and marine automation',
  keywords: ['industrial automation', 'factory automation', 'automation components', 'PLC', 'HMI', 'servo drives'],
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Factory Automation',
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <Providers>
            <Navbar />
            <main className="container py-10">{children}</main>
            <Footer />
            <Analytics />
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}