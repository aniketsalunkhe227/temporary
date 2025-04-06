import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Chaitanya Genset - Premium Generator Rental Solutions',
  description: 'Reliable power solutions for your needs. Rent high-quality generators from Chaitanya Genset. 24/7 support and maintenance services available.',
  keywords: 'generator rental, power solutions, genset rental, power backup, industrial generators',
  openGraph: {
    title: 'Chaitanya Genset - Premium Generator Rental Solutions',
    description: 'Reliable power solutions for your needs. Rent high-quality generators from Chaitanya Genset.',
    type: 'website',
    locale: 'en_US',
    url: 'https://chaitanyagenset.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}