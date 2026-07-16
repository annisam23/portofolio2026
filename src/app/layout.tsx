import type { Metadata } from 'next';
import { Holtwood_One_SC, Roboto } from 'next/font/google';
import './globals.css';
import ClientLayout from './ClientLayout';

const holtwood = Holtwood_One_SC({
  variable: '--font-holtwood',
  subsets: ['latin'],
  weight: ['400'],
});

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'Anceyow portfolio 💚',
  description: 'Anceyow Portfolio - Quality Assurance Engineer',
  metadataBase: new URL('https://smllns-portfolio.vercel.app'),
  openGraph: {
    title: 'Anceyow Portfolio',
    description: 'Anceyow Portfolio - Quality Assurance Engineer',
    url: 'https://smllns-portfolio.vercel.app/',
    siteName: 'Anceyow Portfolio',
    images: [
      {
        url: '/preview.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anceyow Portfolio',
    description: 'Anceyow Portfolio - Quality Assurance Engineer',
    images: ['/preview.png'],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover'
        />
      </head>
      <body 
        className={`${roboto.variable} ${holtwood.variable} antialiased`}
        suppressHydrationWarning
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}