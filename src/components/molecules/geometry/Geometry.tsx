interface GeometryProps {
  myRef: React.MutableRefObject<THREE.Mesh | null>;
}

export const Geometry = ({ myRef }: GeometryProps) => {
  return (
    <mesh ref={myRef} rotation-y={Math.PI * 0.25} position-x={2} scale={1.5}>
      <boxBufferGeometry />
      <meshStandardMaterial color="green" />
    </mesh>
  );
};
