import { useRef } from "react";
import { OrbitControls, TransformControls } from "@react-three/drei";
import { Physics, RapierRigidBody, RigidBody } from "@react-three/rapier";
import { Object3D } from "three";
import { Geometry } from "@/components/molecules/geometry/Geometry";
import { CustomGeometry } from "@/components/molecules/custom-geometry/CustomGeometry";

export const MyScene = () => {
  const cubeRef = useRef<THREE.Mesh>(null);
  const customGeometryRef = useRef<THREE.Mesh>(null);

  const ballRBRef = useRef<RapierRigidBody>(null);
  const ballRef = useRef<THREE.Mesh>(null);

  const jumpBall = () => {
    console.log("jump", ballRef);
    console.log("oreos", ballRBRef);
    ballRBRef.current?.applyImpulse({ x: 0, y: 10, z: 0 }, true);
  };

  return (
    <>
      <directionalLight castShadow position={[5, 10, 19]} intensity={0.8} />
      <ambientLight intensity={0.05} />

      <OrbitControls makeDefault />

      <Physics debug>
        <RigidBody>
          <Geometry myRef={cubeRef} />
        </RigidBody>

        <RigidBody colliders="ball" ref={ballRBRef}>
          <mesh ref={ballRef} position={[-3, 1, -1]} onClick={jumpBall}>
            <sphereGeometry />
            <meshStandardMaterial color="purple" />
          </mesh>
        </RigidBody>

        <TransformControls object={customGeometryRef.current as Object3D} />
        <RigidBody>
          <CustomGeometry myRef={customGeometryRef} />
        </RigidBody>

        <RigidBody type="fixed">
          <mesh receiveShadow scale={[20, 1, 20]} position-y={-1.5}>
            <boxGeometry args={[3, 0.5, 3]} />
            <meshStandardMaterial color="#636e72" />
          </mesh>
        </RigidBody>
      </Physics>
    </>
  );
};
