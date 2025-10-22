
// // ============================================
// // FILE: src/utils/textureUtils.js
// // ============================================
// import * as THREE from 'three'; 

// function createStarTexture() {
//     const canvas = document.createElement('canvas');
//     canvas.width = 64;
//     canvas.height = 64;
//     const ctx = canvas.getContext('2d');
    
//     const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
//     gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
//     gradient.addColorStop(0.3, 'rgba(255, 255, 255, 0.6)');
//     gradient.addColorStop(0.6, 'rgba(255, 255, 255, 0.2)');
//     gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
    
//     ctx.fillStyle = gradient;
//     ctx.fillRect(0, 0, 64, 64);
    
//     const texture = new THREE.Texture(canvas);
//     texture.needsUpdate = true;
//     return texture;
// }
// export { createStarTexture }
// ============================================
// FILE: src/utils/textureUtils.js
// ============================================
import * as THREE from 'three'; 
function createStarTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    
    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.3, 'rgba(255, 255, 255, 0.6)');
    gradient.addColorStop(0.6, 'rgba(255, 255, 255, 0.2)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 64, 64);
    
    const texture = new THREE.Texture(canvas);
    texture.needsUpdate = true;
    return texture;
  }
  export { createStarTexture }