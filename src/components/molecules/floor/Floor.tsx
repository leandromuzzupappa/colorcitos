export const Floor = () => {
  return (
    <mesh rotation-x={-Math.PI * 0.5} position-y={-1} scale={10}>
      <planeBufferGeometry />
      <meshStandardMaterial color="grey" />
    </mesh>
  );
};
