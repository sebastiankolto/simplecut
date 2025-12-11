import type { Metadata } from 'next';
import './globals.css';
import React from 'react';
import { i18n } from '../../i18n-config';
import { nunito } from '../../utils/fontsImporter';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export const metadata: Metadata = {
  title: 'SimpleCut',
  keywords: ['simplecut', 'barbershop'],
  robots: 'index, follow',
  description:
    'Nálunk a tökéletességre való törekvés nem csupán egy cél, hanem a mindennapok részévé vált.',
  openGraph: {
    title: 'SimpleCut',
    description:
      'Nálunk a tökéletességre való törekvés nem csupán egy cél, hanem a mindennapok részévé vált.',
    url: 'https://simplecut.hu/',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
  },
  icons: {
    icon: '/icon.png',
  },
};

export default async function RootLayout({ children, params }) {
  const paramss = await params;
  return (
    <html lang={paramss.lang}>
      <body style={{ background: '#000E0F' }} className={nunito.className}>
        <React.StrictMode>{children}</React.StrictMode>
      </body>
    </html>
  );
}
