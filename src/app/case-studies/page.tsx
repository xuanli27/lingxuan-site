"use client"

import { useState, useRef } from 'react'
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { OrbitControls, Text, Float, MeshDistortMaterial } from "@react-three/drei"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import AnimatedText from '@/components/animated-text'

function CaseStudy({ position, title, description }) {
  const [hovered, setHovered] = useState(false)
  const meshRef = useRef(null)
  const { viewport } = useThree()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15
    }
  })

  return (
    <group position={position}>
      <Float speed={5} rotationIntensity={0.2} floatIntensity={2}>
        <mesh
          ref={meshRef}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <sphereGeometry args={[0.5, 64, 64]} />
          <MeshDistortMaterial
            color={hovered ? "#ff69b4" : "#8B5CF6"}
            attach="material"
            distort={0.3}
            speed={1.5}
            roughness={0}
          />
        </mesh>
        <Text
          position={[0, -0.8, 0]}
          fontSize={viewport.width / 50}
          maxWidth={2}
          lineHeight={1}
          letterSpacing={0.02}
          textAlign="center"
          font="/fonts/Inter-Bold.ttf"
          anchorX="center"
          anchorY="middle"
          fillOpacity={hovered ? 1 : 0.7}
        >
          {title}
        </Text>
        {hovered && (
          <Text
            position={[0, -1.2, 0]}
            fontSize={viewport.width / 100}
            maxWidth={2.5}
            lineHeight={1.2}
            letterSpacing={0.02}
            textAlign="center"
            font="/fonts/Inter-Regular.ttf"
            anchorX="center"
            anchorY="middle"
          >
            {description}
          </Text>
        )}
      </Float>
    </group>
  )
}

function CaseStudies3D() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <CaseStudy
        position={[-2, 1, 0]}
        title="AI建筑设计"
        description="设计效率提高30%"
      />
      <CaseStudy
        position={[2, 1, 0]}
        title="VR艺术展览"
        description="用户参与度提升50%"
      />
      <CaseStudy
        position={[0, -1, 0]}
        title="智能数据分析"
        description="决策速度提高40%"
      />
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}

function CaseStudyCard({ title, challenge, solution, result }) {
  return (
    <Card className="bg-black/50 backdrop-blur-md border-primary/20 hover:border-primary transition-all duration-300 transform hover:scale-105">
      <CardHeader>
        <CardTitle className="text-primary">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-300 mb-2">
          <strong className="text-primary">挑战：</strong> {challenge}
        </CardDescription>
        <CardDescription className="text-gray-300 mb-2">
          <strong className="text-primary">解决方案：</strong> {solution}
        </CardDescription>
        <CardDescription className="text-gray-300">
          <strong className="text-primary">成果：</strong> {result}
        </CardDescription>
      </CardContent>
    </Card>
  )
}

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <AnimatedText>
          <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            我们的成功案例 | 技术赋能，成就非凡
          </h1>
        </AnimatedText>
        
        <AnimatedText>
          <p className="text-xl mb-12 text-center text-gray-300">
            灵渲科技工作室通过创新的技术，助力客户在各行各业中取得了显著成就。我们的解决方案不仅提升了客户的效率，也推动了行业的变革。
          </p>
        </AnimatedText>

        <div className="h-[50vh] mb-12">
          <CaseStudies3D />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <CaseStudyCard
            title="建筑设计智能AI工具"
            challenge="建筑设计师在图纸设计与修改时耗费大量时间，难以实时调整。"
            solution="通过AI与图像生成技术，我们为客户开发了一个智能化的建筑设计工具，极大地缩短了设计周期，提高了设计的精准度。"
            result="设计效率提高了30%，客户能够更加灵活、快速地应对项目需求。"
          />
          <CaseStudyCard
            title="虚拟现实艺术展示平台"
            challenge="传统的艺术展示方式限制了互动与沉浸感。"
            solution="我们打造了一个虚拟现实平台，用户可以通过VR设备与艺术作品互动，体验沉浸式的艺术展示。"
            result="用户参与度提升50%，客户品牌影响力大幅增强。"
          />
          <CaseStudyCard
            title="智能数据分析与预测平台"
            challenge="企业数据复杂，人工分析耗时且容易出错。"
            solution="利用机器学习与大数据分析技术，我们为客户开发了智能数据平台，自动化处理海量数据，并提供精准预测。"
            result="决策速度提高了40%，客户能够实时掌握市场动态，提升运营效率。"
          />
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/80">
            <Link href="/contact">了解更多案例</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

