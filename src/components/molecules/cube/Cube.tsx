export const Cube = () => {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" />
      <meshBasicMaterial attach="material" color="blue" />
    </mesh>
  );
};
