import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Atom({ position, delay = 0 }) {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() - delay;
    const scale = t > 0 ? Math.min(1, t) : 0; // grow over 1 second
    if (meshRef.current) {
      meshRef.current.scale.set(scale, scale, scale);
      meshRef.current.rotation.x = t * 0.5;
      meshRef.current.rotation.y = t * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <icosahedronGeometry args={[0.15, 0]} />
      <meshStandardMaterial
        color="#00ffff"
        transparent
        opacity={0.5}
        metalness={0.7}
        roughness={0.2}
        emissive="#00ffff"
        emissiveIntensity={0.6}
      />
    </mesh>
  );
}
