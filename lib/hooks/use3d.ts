'use client';

import { useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { gsap } from 'gsap';

/**
 * 自定义3D hooks
 */

// 粒子系统hook
export function useParticleSystem(count: number = 1000) {
  const meshRef = useRef<THREE.Points>(null);
  const [particles, setParticles] = useState<THREE.Points | null>(null);

  useEffect(() => {
    if (meshRef.current && !particles) {
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(count * 3);
      const colors = new Float32Array(count * 3);
      const velocities = new Float32Array(count * 3);

      const genesisColor = new THREE.Color('#64FFDA');
      const impulseColor = new THREE.Color('#915EFF');

      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        
        positions[i3] = (Math.random() - 0.5) * 20;
        positions[i3 + 1] = (Math.random() - 0.5) * 20;
        positions[i3 + 2] = (Math.random() - 0.5) * 20;

        const colorMix = Math.random();
        const mixedColor = genesisColor.clone().lerp(impulseColor, colorMix);
        colors[i3] = mixedColor.r;
        colors[i3 + 1] = mixedColor.g;
        colors[i3 + 2] = mixedColor.b;

        velocities[i3] = (Math.random() - 0.5) * 0.02;
        velocities[i3 + 1] = (Math.random() - 0.5) * 0.02;
        velocities[i3 + 2] = (Math.random() - 0.5) * 0.02;
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      geometry.setAttribute('velocity', new THREE.BufferAttribute(velocities, 3));

      meshRef.current.geometry = geometry;
      setParticles(meshRef.current);
    }
  }, [count, particles]);

  useFrame(() => {
    if (particles) {
      const positions = particles.geometry.attributes.position;
      const velocities = particles.geometry.attributes.velocity;
      
      for (let i = 0; i < positions.count; i++) {
        const i3 = i * 3;
        
        positions.array[i3] += velocities.array[i3];
        positions.array[i3 + 1] += velocities.array[i3 + 1];
        positions.array[i3 + 2] += velocities.array[i3 + 2];
        
        // 边界重置
        if (Math.abs(positions.array[i3]) > 10) {
          positions.array[i3] = (Math.random() - 0.5) * 20;
        }
        if (Math.abs(positions.array[i3 + 1]) > 10) {
          positions.array[i3 + 1] = (Math.random() - 0.5) * 20;
        }
        if (Math.abs(positions.array[i3 + 2]) > 10) {
          positions.array[i3 + 2] = (Math.random() - 0.5) * 20;
        }
      }
      
      positions.needsUpdate = true;
      
      // 整体旋转
      particles.rotation.y += 0.002;
    }
  });

  return meshRef;
}

// 智能晶体动画hook
export function useCrystalAnimation() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.getElapsedTime();
      
      // 主晶体旋转
      groupRef.current.rotation.y = time * 0.5;
      groupRef.current.rotation.x = Math.sin(time * 0.3) * 0.2;
      
      // 浮动动画
      groupRef.current.position.y = Math.sin(time * 1.5) * 0.5;
      
      // 子元素动画
      groupRef.current.children.forEach((child, index) => {
        if (child instanceof THREE.Mesh) {
          child.rotation.z = time * (0.5 + index * 0.2);
        }
      });
    }
  });

  return groupRef;
}

// 神经网络动画hook
export function useNeuralNetwork(nodeCount: number = 50) {
  const groupRef = useRef<THREE.Group>(null);
  const [network, setNetwork] = useState<{
    nodes: THREE.Vector3[];
    connections: number[][];
  } | null>(null);

  useEffect(() => {
    const nodes: THREE.Vector3[] = [];
    const connections: number[][] = [];

    // 生成节点
    for (let i = 0; i < nodeCount; i++) {
      nodes.push(new THREE.Vector3(
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15
      ));
      connections[i] = [];
    }

    // 生成连接
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const distance = nodes[i].distanceTo(nodes[j]);
        if (distance < 5 && Math.random() > 0.7) {
          connections[i].push(j);
          connections[j].push(i);
        }
      }
    }

    setNetwork({ nodes, connections });
  }, [nodeCount]);

  useFrame((state) => {
    if (groupRef.current && network) {
      const time = state.clock.getElapsedTime();
      
      // 脉冲动画
      groupRef.current.children.forEach((child, index) => {
        if (child instanceof THREE.Mesh) {
          const pulseScale = 1 + Math.sin(time * 3 + index * 0.5) * 0.2;
          child.scale.setScalar(pulseScale);
        }
      });
    }
  });

  return { groupRef, network };
}

// 滚动驱动的场景转换hook
export function useScrollSceneTransition() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentScene, setCurrentScene] = useState<'particles' | 'neural' | 'crystal' | 'ecosystem'>('particles');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollTop / docHeight, 1);
      
      setScrollProgress(progress);

      // 根据滚动进度切换场景
      if (progress < 0.25) {
        setCurrentScene('particles');
      } else if (progress < 0.5) {
        setCurrentScene('neural');
      } else if (progress < 0.75) {
        setCurrentScene('crystal');
      } else {
        setCurrentScene('ecosystem');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrollProgress, currentScene };
}

// GSAP动画hook
export function useGSAPAnimation() {
  const elementRef = useRef<HTMLElement>(null);

  const animateIn = (duration: number = 1, delay: number = 0) => {
    if (elementRef.current) {
      gsap.fromTo(elementRef.current, {
        opacity: 0,
        y: 50,
        scale: 0.8
      }, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration,
        delay,
        ease: "power3.out"
      });
    }
  };

  const animateOut = (duration: number = 0.5) => {
    if (elementRef.current) {
      gsap.to(elementRef.current, {
        opacity: 0,
        y: -30,
        scale: 0.9,
        duration,
        ease: "power2.in"
      });
    }
  };

  const pulseAnimation = () => {
    if (elementRef.current) {
      gsap.to(elementRef.current, {
        scale: 1.1,
        duration: 0.3,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut"
      });
    }
  };

  return { elementRef, animateIn, animateOut, pulseAnimation };
}

// 鼠标交互hook
export function useMouseInteraction() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return { mousePosition, isHovering, setIsHovering };
}