import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Exo_2, Lato, IBM_Plex_Mono } from 'next/font/google';
import type { AbstractIntlMessages } from 'next-intl';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import '../globals.css';

const exo2 = Exo_2({
  subsets: ['latin'],
  variable: '--font-exo',
  display: 'swap',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-lato',
  display: 'swap',
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-ibm-mono',
  display: 'swap',
});

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: '上海灵渲科技 - 渲染未来，智能涌现',
    description: '上海灵渲科技专注于生成式AI、3D渲染和多模态交互技术，为客户提供前沿的数字化解决方案。',
    keywords: ['生成式AI', '3D渲染', '多模态交互', '上海科技公司', 'AI技术'],
    authors: [{ name: '上海灵渲科技' }],
  };
}

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#64FFDA',
  };
}

const fontUrl = 'https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;500;600;700&family=Lato:wght@300;400;700&family=IBM+Plex+Mono:wght@300;400;500&display=swap';

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'zh' | 'en')) {
    notFound();
  }

  const messages = await getMessages({ locale }) as AbstractIntlMessages;

  return (
    <html lang={locale} className={`${exo2.variable} ${lato.variable} ${ibmPlexMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href={fontUrl} rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="上海灵渲科技 - 渲染未来，智能涌现" />
        <meta property="og:description" content="专注于生成式AI、3D渲染和多模态交互技术的前沿科技公司" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="上海灵渲科技" />
        <meta name="twitter:description" content="渲染未来，智能涌现" />
      </head>
      <body className="font-lato antialiased">
        {/* @ts-expect-error Server Component */}
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Navigation />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}