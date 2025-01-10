import { useRef } from 'react';

import { MeshDistortMaterial } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function AnimatedSphere() {
  const meshRef = useRef(null)
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 64, 64]} />
      <MeshDistortMaterial
        color="#8B5CF6"
        attach="material"
        distort={0.3}
        speed={1.5}
        roughness={0}
      />
    </mesh>
  )
}