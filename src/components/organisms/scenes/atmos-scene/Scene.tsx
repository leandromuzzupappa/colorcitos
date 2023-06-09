import { Background } from "@/components/molecules/backgrounds/atmos-background/Background";
import { OrbitControls } from "@react-three/drei";

export const Scene = () => {
  return (
    <>
      <ambientLight intensity={1} />
      <OrbitControls makeDefault />

      <Background />

      <mesh>
        <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
        <meshStandardMaterial attach="material" color="hotpink" />
      </mesh>
    </>
  );
};
