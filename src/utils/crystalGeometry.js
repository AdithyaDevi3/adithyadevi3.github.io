import * as THREE from 'three';


// Utility: Create crystal geometry
function createCrystalGeometry(structureGroup, starTexture) {
  const atoms = [];
  const edges = [];
  const radius = 5;

  const phi = (1 + Math.sqrt(5)) / 2;
  const icosahedronVertices = [
    [0, 1, phi], [0, -1, phi], [0, 1, -phi], [0, -1, -phi],
    [1, phi, 0], [-1, phi, 0], [1, -phi, 0], [-1, -phi, 0],
    [phi, 0, 1], [-phi, 0, 1], [phi, 0, -1], [-phi, 0, -1]
  ].map(v => {
    const len = Math.sqrt(v[0]*v[0] + v[1]*v[1] + v[2]*v[2]);
    return new THREE.Vector3(v[0]/len * radius, v[1]/len * radius, v[2]/len * radius);
  });

  const edgeVertices = [];
  const icosahedronEdges = [
    [0,1],[0,4],[0,5],[0,8],[0,9],
    [1,6],[1,7],[1,8],[1,9],
    [2,3],[2,4],[2,5],[2,10],[2,11],
    [3,6],[3,7],[3,10],[3,11],
    [4,5],[4,8],[4,10],
    [5,9],[5,11],
    [6,7],[6,8],[6,10],
    [7,9],[7,11],
    [8,10],[9,11]
  ];

  icosahedronVertices.forEach(vertex => {
    edgeVertices.push(vertex.clone());
  });

  const pointsPerEdge = 8;
  icosahedronEdges.forEach(([i, j]) => {
    const v1 = icosahedronVertices[i];
    const v2 = icosahedronVertices[j];
    
    for (let k = 1; k < pointsPerEdge; k++) {
      const t = k / pointsPerEdge;
      const edgePoint = new THREE.Vector3().lerpVectors(v1, v2, t);
      edgeVertices.push(edgePoint);
    }
  });

  const geometry = new THREE.IcosahedronGeometry(radius, 0);
  const positions = geometry.attributes.position;
  for (let i = 0; i < positions.count; i += 3) {
    const v1 = new THREE.Vector3(positions.getX(i), positions.getY(i), positions.getZ(i));
    const v2 = new THREE.Vector3(positions.getX(i+1), positions.getY(i+1), positions.getZ(i+1));
    const v3 = new THREE.Vector3(positions.getX(i+2), positions.getY(i+2), positions.getZ(i+2));
    
    const center = new THREE.Vector3().add(v1).add(v2).add(v3).divideScalar(3);
    edgeVertices.push(center);
    
    for (let j = 0; j < 3; j++) {
      const midpoint = new THREE.Vector3().lerpVectors(center, [v1, v2, v3][j], 0.5);
      edgeVertices.push(midpoint);
    }
  }

  edgeVertices.forEach((pos) => {
    const spriteMaterial = new THREE.SpriteMaterial({
      map: starTexture,
      color: new THREE.Color(0xccddff),
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending
    });

    const sprite = new THREE.Sprite(spriteMaterial);
    sprite.position.copy(pos);
    sprite.scale.set(0, 0, 0);
    
    const targetScale = 0.15 + Math.random() * 0.08;
    
    structureGroup.add(sprite);
    atoms.push({
      sprite,
      targetScale,
      glimmerOffset: Math.random() * Math.PI * 2,
      glimmerSpeed: 0.8 + Math.random() * 1.2,
      position: pos.clone()
    });
  });

  for (let i = 0; i < atoms.length; i++) {
    for (let j = i + 1; j < atoms.length; j++) {
      const distance = atoms[i].position.distanceTo(atoms[j].position);
      if (distance < 2.8) {
        const points = [atoms[i].position, atoms[j].position];
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        
        const material = new THREE.LineBasicMaterial({
          color: new THREE.Color(0x88aadd),
          transparent: true,
          opacity: 0,
          blending: THREE.AdditiveBlending
        });
        
        const line = new THREE.Line(geometry, material);
        structureGroup.add(line);
        
        edges.push({
          line,
          atom1: atoms[i],
          atom2: atoms[j],
          glimmerOffset: Math.random() * Math.PI * 2,
          glimmerSpeed: 0.5 + Math.random() * 1.0,
          baseOpacity: 0.15 + Math.random() * 0.15
        });
      }
    }
  }

  return { atoms, edges };
}

export default createCrystalGeometry 
// function createCrystalGeometry(structureGroup, starTexture) {
//   const atoms = [];
//   const edges = [];
//   const radius = 5;

//   const phi = (1 + Math.sqrt(5)) / 2;
//   const icosahedronVertices = [
//     [0, 1, phi], [0, -1, phi], [0, 1, -phi], [0, -1, -phi],
//     [1, phi, 0], [-1, phi, 0], [1, -phi, 0], [-1, -phi, 0],
//     [phi, 0, 1], [-phi, 0, 1], [phi, 0, -1], [-phi, 0, -1]
//   ].map(v => {
//     const len = Math.sqrt(v[0]*v[0] + v[1]*v[1] + v[2]*v[2]);
//     return new THREE.Vector3(v[0]/len * radius, v[1]/len * radius, v[2]/len * radius);
//   });

//   const edgeVertices = [];
//   const icosahedronEdges = [
//     [0,1],[0,4],[0,5],[0,8],[0,9],
//     [1,6],[1,7],[1,8],[1,9],
//     [2,3],[2,4],[2,5],[2,10],[2,11],
//     [3,6],[3,7],[3,10],[3,11],
//     [4,5],[4,8],[4,10],
//     [5,9],[5,11],
//     [6,7],[6,8],[6,10],
//     [7,9],[7,11],
//     [8,10],[9,11]
//   ];

//   icosahedronVertices.forEach(vertex => {
//     edgeVertices.push(vertex.clone());
//   });

//   const pointsPerEdge = 8;
//   icosahedronEdges.forEach(([i, j]) => {
//     const v1 = icosahedronVertices[i];
//     const v2 = icosahedronVertices[j];
    
//     for (let k = 1; k < pointsPerEdge; k++) {
//       const t = k / pointsPerEdge;
//       const edgePoint = new THREE.Vector3().lerpVectors(v1, v2, t);
//       edgeVertices.push(edgePoint);
//     }
//   });

//   const geometry = new THREE.IcosahedronGeometry(radius, 0);
//   const positions = geometry.attributes.position;
//   for (let i = 0; i < positions.count; i += 3) {
//     const v1 = new THREE.Vector3(positions.getX(i), positions.getY(i), positions.getZ(i));
//     const v2 = new THREE.Vector3(positions.getX(i+1), positions.getY(i+1), positions.getZ(i+1));
//     const v3 = new THREE.Vector3(positions.getX(i+2), positions.getY(i+2), positions.getZ(i+2));
    
//     const center = new THREE.Vector3().add(v1).add(v2).add(v3).divideScalar(3);
//     edgeVertices.push(center);
    
//     for (let j = 0; j < 3; j++) {
//       const midpoint = new THREE.Vector3().lerpVectors(center, [v1, v2, v3][j], 0.5);
//       edgeVertices.push(midpoint);
//     }
//   }

//   edgeVertices.forEach((pos) => {
//     const spriteMaterial = new THREE.SpriteMaterial({
//       map: starTexture,
//       color: new THREE.Color(0xccddff),
//       transparent: true,
//       opacity: 0,
//       blending: THREE.AdditiveBlending
//     });

//     const sprite = new THREE.Sprite(spriteMaterial);
//     sprite.position.copy(pos);
//     sprite.scale.set(0, 0, 0);
    
//     const targetScale = 0.15 + Math.random() * 0.08;
    
//     structureGroup.add(sprite);
//     atoms.push({
//       sprite,
//       targetScale,
//       glimmerOffset: Math.random() * Math.PI * 2,
//       glimmerSpeed: 0.8 + Math.random() * 1.2,
//       position: pos.clone()
//     });
//   });

//   for (let i = 0; i < atoms.length; i++) {
//     for (let j = i + 1; j < atoms.length; j++) {
//       const distance = atoms[i].position.distanceTo(atoms[j].position);
//       if (distance < 2.8) {
//         const points = [atoms[i].position, atoms[j].position];
//         const geometry = new THREE.BufferGeometry().setFromPoints(points);
        
//         const material = new THREE.LineBasicMaterial({
//           color: new THREE.Color(0x88aadd),
//           transparent: true,
//           opacity: 0,
//           blending: THREE.AdditiveBlending
//         });
        
//         const line = new THREE.Line(geometry, material);
//         structureGroup.add(line);
        
//         edges.push({
//           line,
//           atom1: atoms[i],
//           atom2: atoms[j],
//           glimmerOffset: Math.random() * Math.PI * 2,
//           glimmerSpeed: 0.5 + Math.random() * 1.0,
//           baseOpacity: 0.15 + Math.random() * 0.15
//         });
//       }
//     }
//   }

//   return { atoms, edges };
// }
// export { createCrystalGeometry }