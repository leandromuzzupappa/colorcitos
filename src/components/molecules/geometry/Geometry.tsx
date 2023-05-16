import { IGeometryProps } from "@/data/interfaces";

export const Geometry = ({ myRef }: IGeometryProps) => {
  return (
    <mesh
      castShadow
      ref={myRef}
      rotation-y={Math.PI * 0.25}
      position-x={2}
      scale={1.5}
    >
      <boxBufferGeometry />
      <meshStandardMaterial color="green" />
    </mesh>
  );
};
