import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function CrystalShard({ index, total, delay = 0 }) {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const buildProgress = Math.min(1, (t - delay) / 2); // 2 sec per shard
    if (meshRef.current) {
      meshRef.current.scale.set(buildProgress, buildProgress, buildProgress);
      meshRef.current.rotation.y = t * 0.5 + index * 0.2;
      meshRef.current.rotation.x = Math.sin(t * 0.3 + index) * 0.2;
    }
  });

  // Slight offset for each shard so it doesn’t overlap perfectly
  const angle = (index / total) * Math.PI * 2;
  const radius = 0.1 * index;

  return (
    <mesh ref={meshRef} position={[Math.cos(angle) * radius, 0, Math.sin(angle) * radius]}>
      <cylinderGeometry args={[0.3, 0.3, 1, 6, 1, false]} />
      <meshStandardMaterial
        color="#00ffff"
        metalness={0.9}
        roughness={0.1}
        emissive="#00ffff"
        emissiveIntensity={0.3}
      />
    </mesh>
  );
}
