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
        size={0.05}
        color="#00ff88"
        transparent
        opacity={0.6}
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
    const targetX = Math.sin(scrollRef.current * Math.PI * 2) * 3;
    const targetY = scrollRef.current * 2;

    camera.position.x += (targetX - camera.position.x) * 0.05;
    camera.position.y += (targetY - camera.position.y) * 0.05;
    camera.lookAt(0, 0, 0);
  });

  return (
    <group>
      <BlackHole scroll={scrollRef.current} />
      <RobotHead scroll={scrollRef.current} />
      <Particles count={200} scroll={scrollRef.current} />

      <ambientLight intensity={0.2} />
      <pointLight position={[5, 5, 5]} intensity={0.5} color="#00ff88" />
      <spotLight
        position={[0, 5, 2]}
        angle={0.4}
        penumbra={1}
        intensity={0.5}
        color="#ffffff"
        castShadow
      />

      <Stars
        radius={50}
        depth={50}
        count={1000}
        factor={4}
        saturation={0}
        fade
      />

      <fog attach="fog" args={['#000000', 5, 15]} />
    </group>
  );
};

// Performance Wrapper Component
const PerformanceScene = () => (
  <Canvas
    camera={{ position: [0, 0, 10], fov: 75 }}
    dpr={[1, 2]}
    gl={{
      antialias: true,
      powerPreference: "high-performance",
      alpha: false,
      stencil: false,
      depth: false
    }}
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%'
    }}
  >
    <AdaptiveDpr pixelated />
    <SceneContent />
    <EffectComposer>
      <Bloom
        intensity={1.5}
        luminanceThreshold={0.1}
        luminanceSmoothing={0.9}
        height={300}
      />
    </EffectComposer>
    {/* <EffectComposer>
      <Bloom
        intensity={1.5}
        luminanceThreshold={0.1}
        luminanceSmoothing={0.9}
        height={300}
      />
      <ChromaticAberration
        offset={[0.002, 0.002]}
        blendFunction={BlendFunction.NORMAL}
      />
      <Noise opacity={0.02} />
      <Vignette darkness={0.5} offset={0.5} />
    </EffectComposer> */}
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