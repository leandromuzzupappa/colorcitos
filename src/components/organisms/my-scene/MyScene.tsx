import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Ball } from "@/components/molecules/ball/Ball";
import { Floor } from "@/components/molecules/floor/Floor";
import { Geometry } from "@/components/molecules/geometry/Geometry";

function updateColor(currentRedValue: number, deltaTime: number): number {
  let newRedValue = currentRedValue + deltaTime;
  return Math.min(Math.max(newRedValue, 0), 255);
}

export const MyScene = () => {
  const cubeRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    console.log(delta);
    cubeRef.current!.material.color.r = updateColor(
      cubeRef.current!.material.color.r,
      delta
    );

    groupRef.current!.rotation.y += delta;
  });

  return (
    <>
      <group ref={groupRef}>
        <Geometry myRef={cubeRef} />
        <Ball />
      </group>

      <Floor />
    </>
  );
};
