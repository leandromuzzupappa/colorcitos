export const Ball = () => {
  return (
    <mesh position-x={-2}>
      <sphereGeometry />
      <meshBasicMaterial color="yellow" />
    </mesh>
  );
};
