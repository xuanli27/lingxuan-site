"use client"

import Link from 'next/link';
import { useEffect, useState } from 'react';

import AnimatedSphere from '@/components/animated-sphere';
import AnimatedText from '@/components/animated-text';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Image from 'next/image';

function TechCard({ title, description, icon: Icon, image }) {
  return (
    <Card className="bg-gray-900 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
      <div className="relative w-full h-0 pb-[75%] mb-4">
        <Image src={image} alt={title} fill objectFit="cover" className="rounded-t-lg" />
      </div>
      <CardContent className="p-6 flex flex-col items-center text-center">
        <Icon className="w-12 h-12 mb-4 text-blue-400" />
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </CardContent>
    </Card>
  )
}

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(50,50,50,0.3),rgba(0,0,0,0))] animate-gradient-rotate" />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-[url('/img/hero-background.jpg')] bg-cover bg-center opacity-10"
          style={{
            transform: `translate(${mousePosition.x / 50}px, ${mousePosition.y / 50}px)`
          }}
        />
        <div className="container mx-auto px-4 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <AnimatedText><h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 animate-text-glow">
                  灵渲科技工作室
                </h1>
              </AnimatedText>

              <AnimatedText><p className="text-xl md:text-2xl mb-8 text-gray-300">
                  引领科技创新，塑造数字未来
                </p>
              </AnimatedText>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-600 transform hover:scale-105 duration-300">
                  <Link href="/services">探索服务</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-100 transform hover:scale-105 duration-300">
                  <Link href="/contact">联系我们</Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block h-[500px]">
              <Canvas>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <AnimatedSphere />
                <OrbitControls enableZoom={false} />
              </Canvas>
            </div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <AnimatedText><h2 className="text-4xl font-bold mb-12 text-center text-white">我们的核心技术</h2></AnimatedText>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TechCard
              title="3D图形与渲染"
              description="利用先进的3D建模和渲染技术，为客户创造逼真的虚拟环境和产品展示。"
              icon={() => (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                </svg>
              )}
              image="/img/3d-rendering.jpg"
            />
            <TechCard
              title="AI智能算法"
              description="开发智能算法和机器学习模型，助力企业实现数据驱动的决策和自动化流程。"
              icon={() => (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              )}
              image="/img/ai-algorithms.jpg"
            />
            <TechCard
              title="虚拟现实体验"
              description="打造沉浸式VR体验，为教育、培训和娱乐行业带来革命性的互动方式。"
              icon={() => (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" />
                </svg>
              )}
              image="/img/vr-experience.jpg"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 text-center">
          <AnimatedText><h2 className="text-4xl font-bold mb-6 text-white">探索未来科技</h2></AnimatedText>
          <AnimatedText><p className="text-xl mb-8 text-gray-300">
              让我们一起探索如何利用前沿技术为您的企业创造价值。
            </p></AnimatedText>
          <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-600 transform hover:scale-105 duration-300">
            <Link href="/contact">立即联系我们</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

