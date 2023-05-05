export const Ball = () => {
  return (
    <mesh position-x={-2}>
      <sphereGeometry />
      <meshStandardMaterial color="yellow" />
    </mesh>
  );
};
