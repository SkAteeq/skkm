import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useEffect, useState, useRef, useMemo } from "react";
import * as THREE from "three";

function AnimatedSphere({ color, opacity }: { color: string, opacity: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1.2, 64, 64]}>
        <MeshDistortMaterial
          color={color}
          speed={4}
          distort={0.4}
          radius={1}
          roughness={0}
          metalness={0.8}
          transparent
          opacity={opacity}
        />
      </Sphere>
    </Float>
  );
}

function Particles({ count = 1000, color, opacity }: { count?: number, color: string, opacity: number }) {
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        p[i * 3] = (Math.random() - 0.5) * 10;
        p[i * 3 + 1] = (Math.random() - 0.5) * 10;
        p[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return p;
  }, [count]);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length / 3}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.015} color={color} transparent opacity={opacity} />
    </points>
  );
}

export default function Hero3D() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Initial check
    setIsDark(document.documentElement.classList.contains('dark'));

    // Observer for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          setIsDark(document.documentElement.classList.contains('dark'));
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  const themeColor = isDark ? "#00f2ff" : "#0891b2";
  const particleColor = isDark ? "#7000ff" : "#6d28d9";
  const sphereOpacity = isDark ? 0.8 : 0.05;
  const particleOpacity = isDark ? 0.6 : 0.1;

  return (
    <div className="absolute inset-0 z-0">
      <Canvas dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={isDark ? 0.5 : 0.8} />
        <pointLight position={[10, 10, 10]} intensity={isDark ? 1 : 0.5} color={themeColor} />
        <pointLight position={[-10, -10, -10]} intensity={isDark ? 0.5 : 0.2} color={particleColor} />
        
        <AnimatedSphere color={themeColor} opacity={sphereOpacity} />
        <Particles color={particleColor} opacity={particleOpacity} />
        
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
