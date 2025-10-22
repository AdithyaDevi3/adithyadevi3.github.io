import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Stars, OrbitControls } from "@react-three/drei";
import Atom from "./Atom";
import Connections from "./Connections";

// Hex-like lattice generator
function generateLattice(rings = 4, spacing = 0.3) {
  const positions = [[0, 0, 0]];
  for (let r = 1; r <= rings; r++) {
    for (let i = 0; i < 6 * r; i++) {
      const angle = (Math.PI / 3 / r) * i;
      const x = spacing * r * Math.cos(angle);
      const z = spacing * r * Math.sin(angle);
      positions.push([x, 0, z]);
    }
  }
  return positions;
}

export default function App() {
  const lattice = generateLattice(4);
  const [builtAtoms, setBuiltAtoms] = useState([]);

  // Build automatically
  useEffect(() => {
    let idx = 0;
    const interval = setInterval(() => {
      if (idx < lattice.length) {
        setBuiltAtoms((prev) => [...prev, { pos: lattice[idx], delay: idx * 0.2 }]);
        idx++;
      } else clearInterval(interval);
    }, 300);
    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    setBuiltAtoms((prev) => {
      const nextIdx = prev.length;
      if (nextIdx < lattice.length) {
        return [...prev, { pos: lattice[nextIdx], delay: nextIdx * 0.2 }];
      }
      return prev;
    });
  };

  return (
    <div style={{ width: "100vw", height: "100vh" }} onClick={handleClick}>
      <Canvas camera={{ position: [0, 2, 5] }}>
        <color attach="background" args={["#000"]} />
        <Stars radius={100} depth={50} count={5000} factor={4} fade speed={1} />
        <ambientLight intensity={0.2} />
        <pointLight position={[5, 5, 5]} intensity={1.5} color="#00ffff" />
        <pointLight position={[-5, -5, -5]} intensity={1} color="#ff00ff" />

        {builtAtoms.map((atom, idx) => (
          <Atom key={idx} position={atom.pos} delay={atom.delay} />
        ))}

        <Connections atoms={builtAtoms} />

        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
