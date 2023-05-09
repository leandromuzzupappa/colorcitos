import * as THREE from "three";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useTexture, Html, PivotControls } from "@react-three/drei";
import { easing } from "maath";
import styles from "./Model.module.scss";

export const LaChasseModel = () => {
  const { nodes } = useGLTF("/la_chasse/scene-transformed.glb");

  const modelRef = useRef<THREE.Group>(null);
  const lightRef = useRef<THREE.SpotLight>(null);

  const groupPosition = new THREE.Vector3(0, -3, -10);

  useFrame((state, delta) => {
    console.log(state.pointer);

    easing.dampE(
      modelRef.current!.rotation,
      [-Math.PI / 2, -state.pointer.x * Math.PI * 0.05, state.pointer.x],
      1.5,
      delta
    );

    easing.damp3(
      modelRef.current!.position,
      [groupPosition.x, groupPosition.y, 1 - Math.abs(state.pointer.x)],
      1,
      delta
    );

    if (!state.pointer.x && !state.pointer.y) return;
    easing.damp3(
      lightRef.current!.position,
      [state.pointer.x * 15, -3, 8 + state.pointer.y * 8],
      0.2,
      delta
    );
  });

  return (
    <group
      ref={modelRef}
      rotation={[-Math.PI / 2, 0, 0]}
      scale={1.2}
      position={groupPosition}
      dispose={null}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["tmpo002_tmpo002_baked_material_0"].geometry}
      >
        <Material />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["tmpo002_tmpo002_baked_material_0_1"].geometry}
      >
        <Material />
      </mesh>

      <spotLight
        angle={0.2}
        penumbra={0.5}
        ref={lightRef}
        castShadow
        intensity={30}
        shadow-mapSize={1024}
        shadow-bias={-2.001}
        position={[-10, -3, 8]}
      >
        <orthographicCamera
          attach="shadow-camera"
          args={[-10, 10, -10, 0.1, 10]}
        />
      </spotLight>

      <Html
        wrapperClass={styles.pepitos}
        position={[-2, 0, 3]}
        center
        occlude="blending"
      >
        Pepitos
      </Html>

      <Html
        wrapperClass={styles.pepitos}
        position={[1, -2, 3]}
        center
        occlude="blending"
      >
        Oreos
      </Html>
    </group>
  );
};

const Material = () => {
  return (
    <meshStandardMaterial
      color="#333"
      emissive="#000"
      fog={true}
      roughness={0.2}
      metalness={0.8}
    />
  );
};
