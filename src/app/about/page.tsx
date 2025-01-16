"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, Float, Text, Sphere, Cylinder } from "@react-three/drei"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

function TeamMember({ position, name, role }: { position: [number, number, number], name: string, role: string }) {
  return (
    <Float speed={5} rotationIntensity={0.2} floatIntensity={2}>
      <group position={position}>
        <Sphere args={[0.3, 32, 32]}>
          <meshStandardMaterial color="#8B5CF6" />
        </Sphere>
        <Cylinder args={[0.2, 0.2, 0.6, 32]} position={[0, -0.45, 0]}>
          <meshStandardMaterial color="#4B5563" />
        </Cylinder>
        <Text position={[0, -0.8, 0]} fontSize={0.2} anchorX="center" anchorY="middle">
          {name}
        </Text>
        <Text position={[0, -1, 0]} fontSize={0.15} anchorX="center" anchorY="middle" color="gray">
          {role}
        </Text>
      </group>
    </Float>
  )
}

function Team3D() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <TeamMember position={[-2, 0, 0]} name="千渡" role="首席技术官" />
      <TeamMember position={[0, 0, 0]} name="千渡" role="AI研究主管" />
      <TeamMember position={[2, 0, 0]} name="千渡" role="VR开发负责人" />
      <Environment preset="studio" />
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-gray-600">
          关于灵渲科技工作室 | 聚焦科技与创新，打造未来
        </h1>
        <p className="text-xl mb-12 text-center text-gray-400">
          灵渲科技工作室成立于上海，是一家以技术创新为驱动，致力于为全球客户提供高效、智能化解决方案的科技公司。我们的团队拥有深厚的技术积累，专注于3D图形渲染、人工智能与前端开发等技术领域。
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-400">我们的愿景</h2>
          <p className="text-lg text-gray-300">
            通过不断创新，为全球企业带来数字化转型的动力，打破行业壁垒，创造无界限的未来。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-400">我们的使命</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-gray-800 backdrop-blur-md border-gray-700 hover:border-gray-500 transition-colors transform hover:scale-105 duration-300">
              <CardHeader>
                <CardTitle className="text-gray-400">技术创新</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  我们始终保持技术领先，推动产业的数字化升级。
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 backdrop-blur-md border-gray-700 hover:border-gray-500 transition-colors transform hover:scale-105 duration-300">
              <CardHeader>
                <CardTitle className="text-gray-400">客户至上</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  关注每一个细节，满足客户的个性化需求，助力客户快速发展。
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 backdrop-blur-md border-gray-700 hover:border-gray-500 transition-colors transform hover:scale-105 duration-300">
              <CardHeader>
                <CardTitle className="text-gray-400">全球合作</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  我们的技术解决方案面向全球市场，帮助企业迈向国际化。
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-400">团队介绍</h2>
          <p className="text-lg mb-4 text-gray-300">
            灵渲科技由一群经验丰富、富有创造力的技术专家和设计师组成。我们将技术与艺术相结合，以解决复杂的业务问题，帮助客户实现最大化的商业价值。
          </p>
          <div className="h-[50vh] mb-8">
            <Team3D />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-400">我们的价值观</h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-300">
            <li>创新：勇于尝试新技术，推动行业变革。</li>
            <li>责任：始终坚持客户利益至上，关注社会责任。</li>
            <li>协作：与客户密切合作，共同打造成功的项目。</li>
          </ul>
        </section>

        <div className="text-center">
          <Button asChild className="bg-gray-700 text-gray-400 hover:bg-gray-600 transform hover:scale-105 duration-300">
            <Link href="/contact">了解更多关于我们</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

