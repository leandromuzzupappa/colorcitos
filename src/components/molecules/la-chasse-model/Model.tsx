import { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export const LaChasseModel = () => {
  const { nodes } = useGLTF("/la_chasse/scene.gltf");
  const modelRef = useRef<THREE.Group>(null);

  console.log(nodes);

  return (
    <group
      ref={modelRef}
      rotation={[-Math.PI / 2, 0, 0]}
      scale={0.6}
      dispose={null}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["tmpo002_tmpo002_baked_material_0"].geometry}
      >
        <meshBasicMaterial color="#000" />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["tmpo002_tmpo002_baked_material_0_1"].geometry}
      >
        <meshBasicMaterial color="#000" />
      </mesh>
    </group>
  );
};
