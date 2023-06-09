import { OrbitControls } from "@react-three/drei";
import { Background } from "@/components/molecules/backgrounds/atmos-background/Background";
import { Airplane2 } from "@/components/molecules/airplane2/Airplane2";

export const Scene = () => {
  return (
    <>
      <ambientLight intensity={1} />
      <OrbitControls makeDefault />

      <Background />

      <Airplane2 rotation={[0, Math.PI, 0]} />
    </>
  );
};
