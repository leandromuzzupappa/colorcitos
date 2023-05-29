import * as THREE from "three";
import { PivotControls } from "@react-three/drei";

export default function Elevator() {
  const bottomSize = [1, 0.2, 1];
  const elevatorPositions = {
    bottomLeft: setPosition([-1, 0, 0]),
    bottomCenter: setPosition([-0, 0, 0]),
    bottomRight: setPosition([1, 0, 0]),
    topLeft: setPosition([-1, 1, 0]),
    topCenter: setPosition([0, 1, 1]),
    topRight: setPosition([1, 1, 0]),
  };

  return (
    <PivotControls scale={3} depthTest={false}>
      <group>
        {Object.entries(elevatorPositions).map(([key, position]) => (
          <mesh key={key} castShadow receiveShadow position={position}>
            <boxGeometry />
            <meshStandardMaterial color="hotpink" />
          </mesh>
        ))}
      </group>
    </PivotControls>
  );
}

const setPosition = (position: number[]): THREE.Vector3 => {
  return new THREE.Vector3(...position);
};
