import { MeshReflectorMaterial } from "@react-three/drei";

interface IFloorProps {
  mirror: number;
  [key: string]: any;
}

export const Floor = ({ mirror = 0.5, ...props }: IFloorProps) => {
  return (
    <mesh rotation-x={-Math.PI * 0.5} position-y={-1} scale={10}>
      <planeBufferGeometry />
      {/* <meshStandardMaterial color="grey" /> */}
      <MeshReflectorMaterial mirror={mirror} {...props} />
    </mesh>
  );
};
