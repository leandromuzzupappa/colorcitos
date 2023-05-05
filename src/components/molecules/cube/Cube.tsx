export const Cube = () => {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" />
      <meshStandardMaterial attach="material" color="blue" />
    </mesh>
  );
};
