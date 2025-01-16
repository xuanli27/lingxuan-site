import type { Metadata } from 'next'
import './globals.css';

import { Geist } from 'next/font/google';

import { Footer } from '@/components/footer';
import { Navigation } from '@/components/navigation';
import { ThemeProvider } from '@/components/theme-provider';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';

import Head from './head';

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
})

export const metadata: Metadata = {
  title: '灵渲科技工作室 | 引领科技创新，塑造未来',
  description: '灵渲科技工作室是您的数字化转型伙伴，融合3D图形、人工智能和虚拟现实技术，为企业提供创新解决方案。',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh" suppressHydrationWarning>
      <Head />
      <GoogleTagManager gtmId="G-Q2VJBHRBKL" />
      <body className={`${geist.variable} font-sans antialiased bg-black text-white`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Navigation />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
            {/* <ChatBot /> */}
          </div>
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="GTM-54SKTNFL" />
    </html>
  )
}