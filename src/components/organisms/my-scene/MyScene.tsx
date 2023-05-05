import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Ball } from "@/components/molecules/ball/Ball";
import { Floor } from "@/components/molecules/floor/Floor";
import { Geometry } from "@/components/molecules/geometry/Geometry";
import { CustomGeometry } from "@/components/molecules/custom-geometry/CustomGeometry";

function updateColor(currentRedValue: number, deltaTime: number): number {
  let newRedValue = currentRedValue + deltaTime;
  return Math.min(Math.max(newRedValue, 0), 255);
}

export const MyScene = () => {
  const cubeRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    cubeRef.current!.material.color.r = updateColor(
      cubeRef.current!.material.color.r,
      delta
    );

    groupRef.current!.rotation.y += delta;
  });

  return (
    <>
      <directionalLight
        position={[1, 2, 3]}
        color="limegreen"
        intensity={0.2}
      />
      <ambientLight intensity={0.05} />

      <group ref={groupRef}>
        <Geometry myRef={cubeRef} />
        <Ball />
      </group>

      <CustomGeometry />

      <Floor />
    </>
  );
};
