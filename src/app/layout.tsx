import type { Metadata, Viewport } from 'next';

import Cursor from '@/components/Cursor';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Preloader from '@/components/Preloader';
import ProgressWrap from '@/components/ProgressWrap';
import { assetPath } from '@/utils/assetPath';

import './globals.css';

/** Page title used for the tab, Open Graph and Twitter cards. */
const TITLE = 'Md Sagor Hossen | Frontend-Focused Full-Stack Developer';

const DESCRIPTION =
  'Frontend-Focused Full-Stack Developer with 4+ years of experience specializing in React, Next.js and TypeScript, with full-stack expertise in Node.js, Express, REST APIs, JWT, MongoDB and PostgreSQL.';

const PREVIEW_IMAGE = assetPath('/assets/imgs/header/profile.png');

export const metadata: Metadata = {
  // Base used to turn the relative Open Graph image paths into absolute URLs.
  // Points at the GitHub Pages origin of this repository (DevSagar007/my-portfolio).
  metadataBase: new URL('https://devsagar007.github.io/my-portfolio/'),
  title: TITLE,
  description: DESCRIPTION,
  authors: [{ name: 'Md Sagor Hossen' }],
  icons: {
    icon: assetPath('/assets/imgs/favicon.svg'),
    shortcut: assetPath('/assets/imgs/favicon.svg'),
  },
  openGraph: {
    type: 'website',
    title: TITLE,
    description: DESCRIPTION,
    siteName: 'Sagor Hossen',
    images: [PREVIEW_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [PREVIEW_IMAGE],
  },
};

// Mirrors <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zxx">
      <head>
        {/* Google Fonts, loaded exactly as the static pages did so metrics and
            fallback behaviour stay identical. */}
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Preloader />
        <Cursor />
        <ProgressWrap />

        {/* The static page carried this as data-background and let a script
            turn it into an inline style; the image is declared directly here. */}
        <div className="bg-img noise-bg tw:bg-[url('/assets/imgs/patterns/noise1.png')]"></div>

        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
