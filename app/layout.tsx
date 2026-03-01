import type { Metadata, Viewport } from 'next';
import './globals.css';
import { JsonLd } from '@/components/seo/JsonLd';
import { OrganizationSchema } from '@/lib/seo/schemas';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0A2540',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://axolotlhub.com'),
  title: {
    default: 'AxolotlHub | Complete Axolotl Care Guide, Facts & Resources',
    template: '%s | AxolotlHub',
  },
  description: 'The ultimate resource for axolotl care, facts, morphs, and breeding. Daily fresh axolotl content, interactive tools, and expert guidance for keepers worldwide.',
  keywords: ['axolotl', 'axolotl care', 'axolotl facts', 'axolotl morphs', 'axolotl breeding', 'Ambystoma mexicanum', 'Mexican walking fish'],
  authors: [{ name: 'AxolotlHub Team' }],
  creator: 'AxolotlHub',
  publisher: 'AxolotlHub',
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
  alternates: {
    canonical: './',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://axolotlhub.com',
    siteName: 'AxolotlHub',
    title: 'AxolotlHub | Complete Axolotl Care Guide, Facts & Resources',
    description: 'The ultimate resource for axolotl care, facts, morphs, and breeding. Daily fresh axolotl content, interactive tools, and expert guidance.',
    images: [
      {
        url: '/og/default.jpg',
        width: 1200,
        height: 630,
        alt: 'AxolotlHub - Your Complete Axolotl Resource',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@axolotlhub',
    creator: '@axolotlhub',
    title: 'AxolotlHub | Complete Axolotl Care Guide',
    description: 'The ultimate resource for axolotl care, facts, morphs, and breeding.',
    images: ['/og/default.jpg'],
  },
  verification: {
    google: 'GLXZsEJksZNORwjvHa82_tcUEOXBzei8umPgMr7iRts',
  },
  category: 'pets',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="dns-prefetch" href="https://axoltlapi.herokuapp.com" />
        <link rel="preconnect" href="https://axoltlapi.herokuapp.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased bg-water-surface text-deep-abyss">
        <JsonLd data={OrganizationSchema} />
        {children}
      </body>
    </html>
  );
}
