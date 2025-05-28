// "use client";

// import { useRef, useState, useMemo } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import * as THREE from "three";

// function createDiceFace(number: number): THREE.CanvasTexture {
//   const size = 128;
//   const canvas = document.createElement("canvas");
//   canvas.width = size;
//   canvas.height = size;
//   const ctx = canvas.getContext("2d")!;

//   ctx.fillStyle = "white";
//   ctx.fillRect(0, 0, size, size);

//   ctx.fillStyle = "black";
//   const dot = (x: number, y: number) => {
//     ctx.beginPath();
//     ctx.arc(x, y, 10, 0, Math.PI * 2);
//     ctx.fill();
//   };

//   const cx = size / 2;
//   const cy = size / 2;
//   const offset = size / 4;

//   const positions: Record<number, [number, number][]> = {
//     1: [[cx, cy]],
//     2: [[cx - offset, cy - offset], [cx + offset, cy + offset]],
//     3: [[cx, cy], [cx - offset, cy - offset], [cx + offset, cy + offset]],
//     4: [[cx - offset, cy - offset], [cx + offset, cy - offset], [cx - offset, cy + offset], [cx + offset, cy + offset]],
//     5: [[cx, cy], [cx - offset, cy - offset], [cx + offset, cy - offset], [cx - offset, cy + offset], [cx + offset, cy + offset]],
//     6: [[cx - offset, cy - offset], [cx, cy - offset], [cx + offset, cy - offset], [cx - offset, cy + offset], [cx, cy + offset], [cx + offset, cy + offset]],
//   };

//   positions[number].forEach(([x, y]) => dot(x, y));

//   const texture = new THREE.CanvasTexture(canvas);
//   texture.needsUpdate = true;
//   return texture;
// }

// function DiceMesh({
//   startX = 0,
//   startY = 5,
//   faceUp = 1,
// }: {
//   startX?: number;
//   startY?: number;
//   faceUp?: number;
// }) {
//   const meshRef = useRef<THREE.Mesh>(null!);
//   const [position, setPosition] = useState([startX, startY, 0]);
//   const [rolling, setRolling] = useState(true);
//   const fallSpeed = 0.2;
//   const rotationSpeed = 0.25;

//   const materials = useMemo(() => {
//     return Array.from({ length: 6 }, (_, i) => {
//       return new THREE.MeshStandardMaterial({
//         map: createDiceFace(i + 1),
//       });
//     });
//   }, []);

//   useFrame(() => {
//     if (!meshRef.current) return;

//     if (rolling) {
//       // падіння до центру
//       if (position[1] > 0) {
//         setPosition(([x, y, z]) => {
//           const newY = Math.max(0, y - fallSpeed);
//           meshRef.current!.position.set(x, newY, z);
//           meshRef.current!.rotation.x += rotationSpeed;
//           meshRef.current!.rotation.y += rotationSpeed;
//           return [x, newY, z];
//         });
//       } else {
//         // встановлюємо обертання так, щоб обрана грань була вгору
//         setRolling(false);
//         meshRef.current.rotation.set(...getRotationForFace(faceUp));
//       }
//     }
//   });

//   function getRotationForFace(face: number): [number, number, number] {
//     const rotations: Record<number, [number, number, number]> = {
//       1: [0, 0, 0],
//       2: [Math.PI / 2, 0, 0],
//       3: [0, 0, -Math.PI / 2],
//       4: [0, 0, Math.PI / 2],
//       5: [-Math.PI / 2, 0, 0],
//       6: [Math.PI, 0, 0],
//     };
//     return rotations[face];
//   }

//   return (
//     <>
//       <mesh
//         ref={meshRef}
//         scale={[0.4, 0.4, 0.4]}
//         position={position as any}
//         material={materials}
//       >
//         <boxGeometry args={[2, 2, 2]} />
//       </mesh>
//       <ambientLight intensity={0.6} />
//       <pointLight position={[10, 10, 10]} intensity={1} />
//       <directionalLight position={[-5, 5, 5]} intensity={0.7} />
//     </>
//   );
// }

// export default function Page() {
//   return (
//     <main
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         gap: 20,
//         padding: 20,
//       }}
//     >
//       <h1>3D Dice в Next.js</h1>
//       <p>Кубик падає з висоти та показує результат</p>
//       <Canvas style={{ width: 300, height: 300 }}>
//         <DiceMesh startX={0} startY={5} faceUp={4} />
//       </Canvas>
//     </main>
//   );
// }


// // ✅ Що ти можеш змінювати:

// // startX={0} — положення по X

// // startY={5} — висота, з якої падає кубик

// // faceUp={4} — яка грань буде зверху (від 1 до 6)


"use client";

import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import { DiceMesh,DiceRef } from "@/dice-mash/dice-mash";

export default function Page() {
  const diceRef = useRef<DiceRef>(null);

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 20,
        padding: 20,
      }}
    >
      <h1>3D Dice в Next.js</h1>
      <p>Кубик падає з висоти та показує випадковий результат</p>
      <Canvas style={{ width: 300, height: 300 }}>
        <DiceMesh ref={diceRef} startX={0} startY={5} />
      </Canvas>
      <button
        onClick={() => diceRef.current?.rollDice()}
        style={{ padding: "10px 20px", fontSize: "16px" }}
      >
        Кинути кубик 🎲
      </button>
    </main>
  );
}
