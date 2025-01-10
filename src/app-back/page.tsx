'use client'

import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';

import { Suspense } from 'react';

const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })
const Duck = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Duck), { ssr: false })
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false,
  loading: () => (
    <div className='flex h-96 w-full flex-col items-center justify-center'>
      <svg className='-ml-1 mr-3 h-5 w-5 animate-spin text-white' fill='none' viewBox='0 0 24 24'>
        <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
        <path
          className='opacity-75'
          fill='currentColor'
          d='M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
        />
      </svg>
    </div>
  ),
})

export default function Home() {
  return (
    <div className="w-full h-full font-[family-name:var(--font-geist-sans)]">
      <header className="fixed w-full top-2 z-10 row-start-1 flex items-center justify-between gap-6 px-8 shadow-md py-2">
        <Image
          aria-hidden
          src="/img/logo.svg"
          alt="Next.js logo"
          width={32}
          height={32}
        />
        <nav className="flex gap-4">
          <Link href="/" className="hover:underline text-lg">首页</Link>
          <Link href="/services" className="hover:underline text-lg">服务</Link>
          <Link href="/cases" className="hover:underline text-lg">案例</Link>
          <Link href="/about" className="hover:underline text-lg">关于我们</Link>
          <Link href="/contact" className="hover:underline text-lg">联系我们</Link>
        </nav>
      </header>
      <main className="w-full h-full font-[family-name:var(--font-geist-sans)]">
        <View orbit className='relative h-full w-full'>
          <Suspense fallback={null}>
            <Duck scale={2} position={[0, -1.6, 0]} rotation={[0.0, -0.3, 0]} />
            <Common color={'#000'} />
          </Suspense>
        </View>
      </main>
      <footer className="fixed w-full bottom-2 z-10 row-start-3 flex justify-between items-center px-8">
        <div className="text-sm">
          <a
            href="https://beian.miit.gov.cn/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            ICP备案号
          </a>
        </div>
      </footer>
    </div>
  );
}