import React, { useMemo } from "react";
import * as THREE from "three";

export default function Connections({ atoms }) {
  const lines = useMemo(() => {
    const positions = [];
    atoms.forEach((a, i) => {
      for (let j = 0; j < i; j++) {
        const b = atoms[j];
        const dist = new THREE.Vector3(...a.pos).distanceTo(new THREE.Vector3(...b.pos));
        if (dist < 0.35) { // connect nearby atoms only
          positions.push(...a.pos, ...b.pos);
        }
      }
    });
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3)
    );
    return geometry;
  }, [atoms]);

  return (
    <lineSegments>
      <bufferGeometry attach="geometry" {...lines} />
      <lineBasicMaterial attach="material" color="white" transparent={false} />
    </lineSegments>
  );
}
