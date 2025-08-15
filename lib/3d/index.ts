import * as THREE from 'three';

/**
 * 3D工具函数库
 * 用于创建粒子系统、神经网络和几何体
 */

// 创建粒子系统
export function createParticleSystem(count: number = 1000): THREE.Points {
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const velocities = new Float32Array(count * 3);
  const sizes = new Float32Array(count);

  // 创世青色和脉冲紫色
  const genesisColor = new THREE.Color('#64FFDA');
  const impulseColor = new THREE.Color('#915EFF');

  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    
    // 随机位置
    positions[i3] = (Math.random() - 0.5) * 20;
    positions[i3 + 1] = (Math.random() - 0.5) * 20;
    positions[i3 + 2] = (Math.random() - 0.5) * 20;

    // 随机颜色（在两个主色之间插值）
    const colorMix = Math.random();
    const mixedColor = genesisColor.clone().lerp(impulseColor, colorMix);
    colors[i3] = mixedColor.r;
    colors[i3 + 1] = mixedColor.g;
    colors[i3 + 2] = mixedColor.b;

    // 随机速度
    velocities[i3] = (Math.random() - 0.5) * 0.02;
    velocities[i3 + 1] = (Math.random() - 0.5) * 0.02;
    velocities[i3 + 2] = (Math.random() - 0.5) * 0.02;

    // 随机大小
    sizes[i] = Math.random() * 0.5 + 0.5;
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  geometry.setAttribute('velocity', new THREE.BufferAttribute(velocities, 3));
  geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

  // 粒子材质
  const material = new THREE.PointsMaterial({
    size: 0.1,
    sizeAttenuation: true,
    vertexColors: true,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending,
  });

  return new THREE.Points(geometry, material);
}

// 创建神经网络连接线
export function createNeuralNetwork(nodeCount: number = 50): THREE.Group {
  const group = new THREE.Group();
  const nodes: THREE.Vector3[] = [];
  
  // 创建节点
  for (let i = 0; i < nodeCount; i++) {
    const node = new THREE.Vector3(
      (Math.random() - 0.5) * 15,
      (Math.random() - 0.5) * 15,
      (Math.random() - 0.5) * 15
    );
    nodes.push(node);
    
    // 节点球体
    const nodeGeometry = new THREE.SphereGeometry(0.05, 8, 8);
    const nodeMaterial = new THREE.MeshBasicMaterial({ 
      color: '#64FFDA',
      transparent: true,
      opacity: 0.8 
    });
    const nodeMesh = new THREE.Mesh(nodeGeometry, nodeMaterial);
    nodeMesh.position.copy(node);
    group.add(nodeMesh);
  }

  // 创建连接线
  const connectionGeometry = new THREE.BufferGeometry();
  const positions: number[] = [];
  const colors: number[] = [];

  const genesisColor = new THREE.Color('#64FFDA');
  const impulseColor = new THREE.Color('#915EFF');

  for (let i = 0; i < nodeCount; i++) {
    for (let j = i + 1; j < nodeCount; j++) {
      const distance = nodes[i].distanceTo(nodes[j]);
      
      // 只连接距离较近的节点
      if (distance < 5 && Math.random() > 0.7) {
        positions.push(nodes[i].x, nodes[i].y, nodes[i].z);
        positions.push(nodes[j].x, nodes[j].y, nodes[j].z);
        
        // 颜色渐变
        const mixFactor = Math.random();
        const color1 = genesisColor.clone().lerp(impulseColor, mixFactor);
        const color2 = impulseColor.clone().lerp(genesisColor, mixFactor);
        
        colors.push(color1.r, color1.g, color1.b);
        colors.push(color2.r, color2.g, color2.b);
      }
    }
  }

  connectionGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  connectionGeometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

  const connectionMaterial = new THREE.LineBasicMaterial({ 
    vertexColors: true,
    transparent: true,
    opacity: 0.3,
    blending: THREE.AdditiveBlending
  });

  const connections = new THREE.LineSegments(connectionGeometry, connectionMaterial);
  group.add(connections);

  return group;
}

// 创建智能晶体
export function createIntelligentCrystal(): THREE.Group {
  const group = new THREE.Group();

  // 创建多面体晶体
  const crystalGeometry = new THREE.IcosahedronGeometry(2, 1);
  const crystalMaterial = new THREE.MeshPhongMaterial({
    color: '#64FFDA',
    transparent: true,
    opacity: 0.6,
    shininess: 100,
    specular: '#915EFF'
  });
  
  const crystal = new THREE.Mesh(crystalGeometry, crystalMaterial);
  group.add(crystal);

  // 创建内部发光核心
  const coreGeometry = new THREE.SphereGeometry(0.8, 16, 16);
  const coreMaterial = new THREE.MeshBasicMaterial({
    color: '#915EFF',
    transparent: true,
    opacity: 0.8
  });
  
  const core = new THREE.Mesh(coreGeometry, coreMaterial);
  group.add(core);

  // 创建围绕晶体的能量环
  const ringGeometry = new THREE.TorusGeometry(3, 0.1, 8, 32);
  const ringMaterial = new THREE.MeshBasicMaterial({
    color: '#64FFDA',
    transparent: true,
    opacity: 0.5
  });

  for (let i = 0; i < 3; i++) {
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    ring.rotation.x = (Math.PI / 3) * i;
    ring.rotation.y = (Math.PI / 4) * i;
    group.add(ring);
  }

  return group;
}

// 更新粒子系统动画
export function updateParticles(particles: THREE.Points, time: number) {
  const positions = particles.geometry.attributes.position;
  const velocities = particles.geometry.attributes.velocity;
  
  for (let i = 0; i < positions.count; i++) {
    const i3 = i * 3;
    
    // 更新位置
    positions.array[i3] += velocities.array[i3];
    positions.array[i3 + 1] += velocities.array[i3 + 1];
    positions.array[i3 + 2] += velocities.array[i3 + 2];
    
    // 边界检查并重置
    if (Math.abs(positions.array[i3]) > 10) {
      positions.array[i3] = (Math.random() - 0.5) * 20;
      velocities.array[i3] = (Math.random() - 0.5) * 0.02;
    }
    if (Math.abs(positions.array[i3 + 1]) > 10) {
      positions.array[i3 + 1] = (Math.random() - 0.5) * 20;
      velocities.array[i3 + 1] = (Math.random() - 0.5) * 0.02;
    }
    if (Math.abs(positions.array[i3 + 2]) > 10) {
      positions.array[i3 + 2] = (Math.random() - 0.5) * 20;
      velocities.array[i3 + 2] = (Math.random() - 0.5) * 0.02;
    }
  }
  
  positions.needsUpdate = true;
}

// 动画晶体旋转
export function animateCrystal(crystal: THREE.Group, time: number) {
  crystal.rotation.y = time * 0.5;
  crystal.rotation.x = Math.sin(time * 0.3) * 0.2;
  
  // 动画能量环
  crystal.children.forEach((child, index) => {
    if (child instanceof THREE.Mesh && child.geometry instanceof THREE.TorusGeometry) {
      child.rotation.z = time * (0.5 + index * 0.2);
    }
  });
}

// 相机动画路径
export function getCameraPath(progress: number): THREE.Vector3 {
  const radius = 10;
  const height = Math.sin(progress * Math.PI * 2) * 5;
  const angle = progress * Math.PI * 2;
  
  return new THREE.Vector3(
    Math.cos(angle) * radius,
    height,
    Math.sin(angle) * radius
  );
}