"use client"

import Link from 'next/link';
import { useState } from 'react';

import AnimatedSphere from '@/components/animated-sphere';
import AnimatedText from '@/components/animated-text';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Environment, Float, OrbitControls, Text } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Image from 'next/image';

function ServiceCard({ title, description, icon: Icon, image }) {
  const [hovered, setHovered] = useState(false)

  return (
    <Card 
      className="bg-gray-900 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative w-full h-0 pb-[75%] mb-4">
        <Image src={image} alt={title} layout="fill" objectFit="cover" className="rounded-t-lg" />
      </div>
      <CardHeader>
        <CardTitle className="text-blue-400 flex items-center">
          <Icon className={`w-6 h-6 mr-2 ${hovered ? 'animate-bounce' : ''}`} />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-400">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  )
}

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-16">
        <AnimatedText>
          <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            我们的服务 | 引领科技创新
          </h1>
        </AnimatedText>
        
        <AnimatedText>
          <p className="text-xl mb-12 text-center text-gray-300">
            灵渲科技工作室融合3D图形渲染、人工智能和虚拟现实技术，为企业提供全方位的创新解决方案，助力快速应对行业挑战，实现业务增长。
          </p>
        </AnimatedText>

        <div className="h-[50vh] mb-12 relative">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <Float speed={4} rotationIntensity={1} floatIntensity={2}>
              <AnimatedSphere />
            </Float>
            <Environment preset="studio" />
            <OrbitControls enableZoom={false} />
            <Text
              color="white"
              fontSize={0.5}
              maxWidth={2}
              lineHeight={1}
              letterSpacing={0.02}
              textAlign="center"
              font="/fonts/Inter-Bold.ttf"
              anchorX="center"
              anchorY="middle"
            >
              创新科技
            </Text>
          </Canvas>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <ServiceCard
            title="3D图形与虚拟现实"
            description="我们的3D和VR技术为企业创造沉浸式数字体验，应用于产品展示、虚拟培训和互动营销等领域。"
            icon={() => (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
              </svg>
            )}
            image="/img/3d-vr.jpg"
          />
          <ServiceCard
            title="AI与机器学习解决方案"
            description="利用先进的AI技术，我们帮助企业挖掘数据价值，优化决策流程，提升运营效率。"
            icon={() => (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
              </svg>
            )}
            image="/img/ai-ml.jpg"
          />
          <ServiceCard
            title="创新技术集成"
            description="我们将3D、AI和VR技术无缝集成，为企业打造独特的创新解决方案。"
            icon={() => (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            )}
            image="/img/tech-integration.jpg"
          />
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-600 transform hover:scale-105 duration-300">
            <Link href="/contact">联系我们，探索创新可能</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

