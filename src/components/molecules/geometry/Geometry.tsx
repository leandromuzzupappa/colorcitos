export const Geometry = () => {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" />
      <meshBasicMaterial attach="material" color="green" wireframe />
    </mesh>
  );
};
