import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import { I18nProvider } from '@/components/providers/I18nProvider';
import { SiteShell } from '@/components/layout/SiteShell';
import { siteName, siteUrl } from '@/lib/site';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} — Frontend Developer`,
    template: `%s | ${siteName}`,
  },
  description:
    'Portfolio de Nelson Adarmes. Desarrollador Frontend especializado en interfaces modernas con React, TypeScript y Next.js.',
  keywords: [
    'Nelson Adarmes',
    'Frontend Developer',
    'React',
    'TypeScript',
    'Next.js',
    'Portfolio',
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  openGraph: {
    title: `${siteName} — Frontend Developer`,
    description:
      'Portfolio de Nelson Adarmes. Desarrollador Frontend especializado en interfaces modernas.',
    type: 'website',
    locale: 'es_AR',
    alternateLocale: 'en_US',
    url: siteUrl,
    siteName,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteName} — Frontend Developer`,
    description:
      'Portfolio de Nelson Adarmes. Desarrollador Frontend especializado en interfaces modernas.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

export const viewport: Viewport = {
  themeColor: '#06070D',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <I18nProvider>
          <SiteShell>{children}</SiteShell>
        </I18nProvider>
      </body>
    </html>
  );
}
