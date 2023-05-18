import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function RampitaModel() {
  const { nodes, materials } = useGLTF("/marble_run/ruedita.glb") as any;
  return (
    <group dispose={null} scale={0.15} position-y={17}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={nodes.Cube.material}
        position={[0, 0.2, 0]}
        rotation={[0.04, -0.08, 0.89]}
        scale={[2.35, 0.24, 7.96]}
      >
        <meshStandardMaterial
          color="#fff"
          emissive="#000"
          fog={true}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/marble_run/ruedita.glb");
