import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  PivotControls,
  TransformControls,
} from "@react-three/drei";
import { MeshBasicMaterial, Object3D } from "three";
import { Ball } from "@/components/molecules/ball/Ball";
import { Floor } from "@/components/molecules/floor/Floor";
import { Geometry } from "@/components/molecules/geometry/Geometry";
import { CustomGeometry } from "@/components/molecules/custom-geometry/CustomGeometry";
import { updateColor } from "@/utils/utils";

export const MyScene = () => {
  const cubeRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const customGeometryRef = useRef<THREE.Mesh>(null);
  const ballRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    const angle = state.clock.getElapsedTime();
    /*
    state.camera.position.x = Math.sin(angle) + delta * 2;
    state.camera.position.z = Math.cos(angle) + delta * 2;
    state.camera.lookAt(0, 0, 0); */

    const cubeMaterial = cubeRef.current!.material as MeshBasicMaterial;
    cubeMaterial.color.r = updateColor(cubeMaterial.color.r, delta);

    groupRef.current!.rotation.y += delta * 0.0004;

    ballRef.current!.rotation.y = angle * 2;
  });

  return (
    <>
      <directionalLight
        position={[1, 2, 3]}
        color="limegreen"
        intensity={0.2}
      />
      <ambientLight intensity={0.05} />

      <OrbitControls makeDefault />

      <group ref={groupRef}>
        <PivotControls anchor={[0, 0, 0]} scale={1.5} depthTest={false}>
          <Geometry myRef={cubeRef} />
        </PivotControls>

        <Ball myRef={ballRef} />
      </group>

      <TransformControls object={customGeometryRef.current as Object3D} />
      <CustomGeometry myRef={customGeometryRef} />

      <Floor />
    </>
  );
};
