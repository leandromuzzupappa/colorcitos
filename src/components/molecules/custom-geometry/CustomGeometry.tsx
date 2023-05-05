import * as THREE from "three";
import { useMemo, useRef, useEffect } from "react";

export const CustomGeometry = () => {
  const geometryRef = useRef<THREE.BufferGeometry>(null);

  const triangles = 10;
  const verticesPerTriangle = 3;
  const verticesCount = triangles * verticesPerTriangle;

  const positionsLength = verticesCount * 3;
  const positions = useMemo(() => {
    const positions = new Float32Array(positionsLength);

    for (let i = 0; i < positionsLength; i++) {
      positions[i] = (Math.random() - 0.5) * 3;
    }

    return positions;
  }, [positionsLength]);

  useEffect(() => {
    geometryRef.current!.computeVertexNormals();
  }, []);

  return (
    <mesh>
      <bufferGeometry ref={geometryRef}>
        <bufferAttribute
          attach={"attributes-position"}
          count={verticesCount}
          itemSize={verticesPerTriangle}
          array={positions}
        />
      </bufferGeometry>
      <meshStandardMaterial color="white" side={THREE.DoubleSide} />
    </mesh>
  );
};
