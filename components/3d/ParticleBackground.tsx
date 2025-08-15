'use client';

import React, { useRef, useMemo, useState, useCallback } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, Line } from '@react-three/drei';
import * as THREE from 'three';

interface ParticleBackgroundProps {
  count?: number;
  className?: string;
  interactive?: boolean;
  showConnections?: boolean;
}

// 创世纪粒子云组件
function ParticleCloud({ count = 2000, interactive = true, showConnections = false }: {
  count: number;
  interactive: boolean;
  showConnections: boolean;
}) {
  const ref = useRef<THREE.Points>(null);
  const connectionsRef = useRef<THREE.Group>(null);
  const mouseRef = useRef(new THREE.Vector2());
  const { size, viewport } = useThree();
  
  // 生成粒子数据
  const [positions, colors, velocities, originalPositions] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    const originalPositions = new Float32Array(count * 3);
    
    // 灵渲科技色彩系统
    const colorPalette = [
      new THREE.Color('#64FFDA'), // 创世青
      new THREE.Color('#915EFF'), // 脉冲紫
      new THREE.Color('#FF9500'), // 活力橙
      new THREE.Color('#00BFFF'), // 深海蓝
      new THREE.Color('#FFD700'), // 星光金
    ];
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      // 创建球形分布的粒子
      const radius = Math.random() * 30 + 10;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      
      positions[i3] = x;
      positions[i3 + 1] = y;
      positions[i3 + 2] = z;
      
      // 保存原始位置用于交互效果
      originalPositions[i3] = x;
      originalPositions[i3 + 1] = y;
      originalPositions[i3 + 2] = z;
      
      // 轨道运动速度
      velocities[i3] = (Math.random() - 0.5) * 0.005;
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.005;
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.005;
      
      // 随机颜色
      const selectedColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i3] = selectedColor.r;
      colors[i3 + 1] = selectedColor.g;
      colors[i3 + 2] = selectedColor.b;
    }
    
    return [positions, colors, velocities, originalPositions];
  }, [count]);

  // 生成连接线数据
  const connectionLines = useMemo(() => {
    if (!showConnections) return [];
    
    const lines = [];
    const maxDistance = 8;
    const maxConnections = 200; // 限制连接数量以提高性能
    
    for (let i = 0; i < count && lines.length < maxConnections; i++) {
      const i3 = i * 3;
      const pos1 = new THREE.Vector3(
        originalPositions[i3],
        originalPositions[i3 + 1],
        originalPositions[i3 + 2]
      );
      
      for (let j = i + 1; j < count && lines.length < maxConnections; j++) {
        const j3 = j * 3;
        const pos2 = new THREE.Vector3(
          originalPositions[j3],
          originalPositions[j3 + 1],
          originalPositions[j3 + 2]
        );
        
        const distance = pos1.distanceTo(pos2);
        if (distance < maxDistance) {
          lines.push({
            start: pos1,
            end: pos2,
            opacity: 1 - (distance / maxDistance)
          });
        }
      }
    }
    
    return lines;
  }, [count, originalPositions, showConnections]);

  // 鼠标交互处理
  const handlePointerMove = useCallback((event: any) => {
    if (!interactive) return;
    
    mouseRef.current.x = (event.clientX / size.width) * 2 - 1;
    mouseRef.current.y = -(event.clientY / size.height) * 2 + 1;
  }, [size, interactive]);

  // 动画循环
  useFrame((state, delta) => {
    if (!ref.current) return;
    
    const time = state.clock.elapsedTime;
    const positions = ref.current.geometry.attributes.position;
    const colors = ref.current.geometry.attributes.color;
    
    // 鼠标交互影响
    const mouseVector = new THREE.Vector3(
      mouseRef.current.x * viewport.width / 2,
      mouseRef.current.y * viewport.height / 2,
      0
    );
    
    for (let i = 0; i < positions.count; i++) {
      const i3 = i * 3;
      
      // 获取原始位置
      const originalX = originalPositions[i3];
      const originalY = originalPositions[i3 + 1];
      const originalZ = originalPositions[i3 + 2];
      
      // 添加波浪效果
      const wave = Math.sin(time * 0.5 + originalX * 0.1) * 0.5;
      const pulse = Math.sin(time * 2 + i * 0.01) * 0.2;
      
      // 计算新位置
      let newX = originalX + Math.sin(time * 0.3 + i * 0.01) * 2 + wave;
      let newY = originalY + Math.cos(time * 0.2 + i * 0.015) * 2 + pulse;
      let newZ = originalZ + Math.sin(time * 0.4 + i * 0.02) * 1;
      
      // 鼠标交互效果
      if (interactive) {
        const particleVector = new THREE.Vector3(newX, newY, newZ);
        const distance = particleVector.distanceTo(mouseVector);
        const influence = Math.max(0, 10 - distance);
        
        if (influence > 0) {
          const force = influence * 0.1;
          newX += (mouseVector.x - newX) * force * 0.1;
          newY += (mouseVector.y - newY) * force * 0.1;
          newZ += force * 2;
        }
      }
      
      // 更新位置
      positions.array[i3] = newX;
      positions.array[i3 + 1] = newY;
      positions.array[i3 + 2] = newZ;
      
      // 动态颜色变化
      const colorPulse = Math.sin(time * 3 + i * 0.02) * 0.3 + 0.7;
      colors.array[i3] *= colorPulse;
      colors.array[i3 + 1] *= colorPulse;
      colors.array[i3 + 2] *= colorPulse;
    }
    
    positions.needsUpdate = true;
    colors.needsUpdate = true;
    
    // 整体旋转
    ref.current.rotation.y = time * 0.05;
    ref.current.rotation.x = Math.sin(time * 0.1) * 0.1;
  });

  return (
    <group onPointerMove={handlePointerMove}>
      {/* 主粒子系统 */}
      <Points ref={ref}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={colors.length / 3}
            array={colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.15}
          sizeAttenuation={true}
          vertexColors={true}
          transparent={true}
          opacity={0.9}
          blending={THREE.AdditiveBlending}
        />
      </Points>

      {/* 连接线系统 */}
      {showConnections && (
        <group ref={connectionsRef}>
          {connectionLines.map((line, index) => (
            <Line
              key={index}
              points={[line.start, line.end]}
              color="#64FFDA"
              lineWidth={1}
              transparent={true}
              opacity={line.opacity * 0.3}
            />
          ))}
        </group>
      )}
    </group>
  );
}

// 环境光效组件
function AmbientEffects() {
  return (
    <>
      <ambientLight intensity={0.1} color="#64FFDA" />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#915EFF" />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#FF9500" />
      <spotLight
        position={[0, 20, 0]}
        angle={0.3}
        penumbra={1}
        intensity={0.5}
        color="#00BFFF"
        castShadow
      />
    </>
  );
}

export default function ParticleBackground({
  count = 3000,
  className = "canvas-container",
  interactive = true,
  showConnections = false
}: ParticleBackgroundProps) {
  return (
    <div className={className}>
      <Canvas
        camera={{
          position: [0, 0, 20],
          fov: 75,
          near: 0.1,
          far: 1000
        }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]} // 提高渲染质量
      >
        <AmbientEffects />
        <ParticleCloud
          count={count}
          interactive={interactive}
          showConnections={showConnections}
        />
      </Canvas>
    </div>
  );
}