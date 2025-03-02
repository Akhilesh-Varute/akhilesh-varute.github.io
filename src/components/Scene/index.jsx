// components/Scene/index.jsx
import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import {
  OrbitControls,
  Stars,
  Float,
  AdaptiveDpr
} from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
// import {
//   EffectComposer,
//   Bloom,
//   ChromaticAberration,
//   Noise,
//   Vignette
// } from '@react-three/postprocessing';
// import { BlendFunction } from 'postprocessing';
import * as THREE from 'three';
import { SceneContainer, CanvasContainer } from './styles';
import { blackHoleVertexShader, blackHoleFragmentShader } from './shaders';

// RobotHead Component
const RobotHead = ({ scroll }) => {
  const headRef = useRef();
  const eyeRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (headRef.current) {
      headRef.current.rotation.y = Math.sin(t * 0.5) * 0.1 + scroll * Math.PI;
      headRef.current.position.y = Math.sin(t * 0.5) * 0.2 + scroll * 2;
    }
    if (eyeRef.current) {
      eyeRef.current.material.emissiveIntensity = 1 + Math.sin(t * 2) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.2}>
      <group ref={headRef}>
        <mesh castShadow>
          <boxGeometry args={[2, 2.5, 2]} />
          <meshStandardMaterial
            color="#1a1a1a"
            metalness={0.9}
            roughness={0.1}
            envMapIntensity={1}
          />
        </mesh>
        <mesh ref={eyeRef} position={[0, 0, 1.01]}>
          <circleGeometry args={[0.3, 32]} />
          <meshStandardMaterial
            color="#00ff88"
            emissive="#00ff88"
            emissiveIntensity={1}
            toneMapped={false}
          />
        </mesh>
        <mesh position={[0, -1.25, 0.7]}>
          <boxGeometry args={[1.5, 0.2, 0.3]} />
          <meshStandardMaterial color="#333333" metalness={0.8} />
        </mesh>
        <mesh position={[0, 1.5, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 1, 8]} />
          <meshStandardMaterial color="#333333" metalness={0.8} />
        </mesh>
      </group>
    </Float>
  );
};

// BlackHole Component
const BlackHole = ({ scroll }) => {
  const meshRef = useRef();
  const materialRef = useRef();

  const uniforms = useMemo(
    () => ({
      time: { value: 0 },
      distortionIntensity: { value: 0 }
    }),
    []
  );

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (materialRef.current) {
      materialRef.current.uniforms.time.value = t;
      materialRef.current.uniforms.distortionIntensity.value = scroll;
    }
    if (meshRef.current) {
      meshRef.current.rotation.z = t * 0.1;
    }
  });

  const shaderMaterial = new THREE.ShaderMaterial({
    vertexShader: blackHoleVertexShader,
    fragmentShader: blackHoleFragmentShader,
    uniforms,
    side: THREE.DoubleSide
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -5]}>
      <planeGeometry args={[10, 10, 32, 32]} />
      <primitive object={shaderMaterial} ref={materialRef} />
    </mesh>
  );
};

// Particles Component
const Particles = ({ count = 200, scroll }) => {
  const particlesRef = useRef();

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, [count]);

  useFrame(() => {
    if (particlesRef.current) {
      const positions = particlesRef.current.geometry.attributes.position.array;
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        positions[i3 + 2] += (0.1 + scroll * 0.5);
        if (positions[i3 + 2] > 5) {
          positions[i3 + 2] = -5;
        }
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03} // Reduced from 0.05
        color="#00ff88"
        transparent
        opacity={0.4} // Reduced from 0.6
        sizeAttenuation
      />
    </points>
  );
};

// Main Scene Component
const SceneContent = () => {
  const { camera } = useThree();
  const scrollRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollRef.current = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useFrame(() => {
    const targetX = Math.sin(scrollRef.current * Math.PI * 2) * 2; // Reduced range for subtler movement
    const targetY = scrollRef.current * 1.5; // Reduced vertical movement
    camera.position.x += (targetX - camera.position.x) * 0.05;
    camera.position.y += (targetY - camera.position.y) * 0.05;
    camera.lookAt(0, 0, 0);
  });

  return (
    <group>
      {/* Move BlackHole further back and slightly off-center */}
      <BlackHole scroll={scrollRef.current} position={[-2, 0, -8]} />
      
      {/* Move RobotHead slightly off-center and reduce its prominence */}
      <RobotHead scroll={scrollRef.current} position={[2, 0, -2]} />
      
      {/* Keep particles subtle */}
      <Particles count={150} scroll={scrollRef.current} />

      {/* Subtle lighting */}
      <ambientLight intensity={0.08} />
      <pointLight position={[5, 5, 5]} intensity={0.2} color="#00ff88" />
      <spotLight
        position={[0, 5, 2]}
        angle={0.4}
        penumbra={1}
        intensity={0.2}
        color="#ffffff"
        castShadow
      />

      {/* Consolidated and softened fog */}
      <fog attach="fog" args={['#000000', 10, 25]} />

      {/* Further subdued stars */}
      <Stars
        radius={60}
        depth={60}
        count={300}
        factor={2}
        saturation={0}
        fade
        opacity={0.3}
      />
    </group>
  );
};

// Performance Wrapper Component
const PerformanceScene = () => (
  <Canvas
    camera={{ position: [0, 0, 12], fov: 75 }} // Moved camera back slightly
    dpr={[1, 2]}
    gl={{
      antialias: true,
      powerPreference: "high-performance",
      alpha: true, // Changed to true for better layering with hero
      stencil: false,
      depth: true // Re-enabled depth for better 3D separation
    }}
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.1)', // Subtle dark overlay
    }}
  >
    <AdaptiveDpr pixelated />
    <SceneContent />
    <EffectComposer>
      <Bloom intensity={0.6} luminanceThreshold={0.4} luminanceSmoothing={0.6} height={150} /> {/* Further toned down */}
    </EffectComposer>
    <OrbitControls
      enableZoom={false}
      enablePan={false}
      maxPolarAngle={Math.PI / 2}
      minPolarAngle={Math.PI / 3}
      rotateSpeed={0.5}
    />
  </Canvas>
);

// Main Scene Export
const Scene = () => {
  return (
    <SceneContainer>
      <CanvasContainer>
        <PerformanceScene />
      </CanvasContainer>
    </SceneContainer>
  );
};

export default Scene;