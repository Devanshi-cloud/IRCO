"use client";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const TechSymbol = () => {
  const symbolRef = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    if (symbolRef.current) {
      symbolRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={symbolRef} position={[0, 0.5, 0]}>
      <octahedronGeometry args={[0.5, 0]} />
      <meshStandardMaterial color="cyan" emissive="blue" emissiveIntensity={0.5} />
    </mesh>
  );
};

export default TechSymbol;