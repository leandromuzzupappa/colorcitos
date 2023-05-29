import * as THREE from "three";
import { useState, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import styles from "./MarbleRunPage.module.scss";
import { OrbitControls } from "@react-three/drei";
import { Physics, RapierRigidBody, RigidBody } from "@react-three/rapier";
import { button, useControls } from "leva";
import { RampitaModel } from "@/components/molecules/rampita-model/Model";
import Elevator from "@/components/molecules/elevator/Elevator";

export default function MarbleRunPage() {
  const { camera_position } = useControls({
    camera_position: {
      value: [0, 25, -3],
    },
  });

  return (
    <div className={styles.marble_page}>
      <Canvas shadows camera={{ position: camera_position }}>
        <Scene />
      </Canvas>
    </div>
  );
}

function Scene() {
  const ballRef = useRef<THREE.Mesh>(null);
  const ballRBRef = useRef<RapierRigidBody>(null);

  const lookAtVec = new THREE.Vector3(0, 0, 0);
  const cameraVector = new THREE.Vector3(0, 0, 0);

  // useControls for the pepitos mesh. Position is not working
  const { sphere_position, cube_position, follow_ball } = useControls({
    sphere_position: {
      value: [1, 19, 1],
    },
    cube_position: {
      value: [-5, 1, -6],
    },
    follow_ball: {
      value: false,
    },
    reset_ball: button(() => {
      console.log(ballRBRef.current);
      resetBall();
    }),
  });

  useFrame((state, delta) => {
    if (follow_ball) {
      if (!ballRBRef.current) return;

      const ballPosition = ballRBRef.current.translation();
      if (!ballPosition) return;

      lookAtVec.set(ballPosition.x, ballPosition.y, ballPosition.z);
      cameraVector.lerp(lookAtVec, 0.1);
      state.camera.lookAt(cameraVector);
      state.camera.updateProjectionMatrix();
    }
  });

  const [isBallMoving, setIsBallMoving] = useState(false);

  const resetBall = () => {
    ballRBRef.current?.setLinvel(new THREE.Vector3(0, 0, 0), true);
    ballRBRef.current?.setAngvel(new THREE.Vector3(0, 0, 0), true);

    ballRBRef.current?.setAngularDamping(0.0);
    ballRBRef.current?.setLinearDamping(0.0);
    ballRBRef.current?.setTranslation(new THREE.Vector3(2, 10, 8), true);
  };

  return (
    <>
      <ambientLight castShadow intensity={0.8} position={[0, 1, 0]} />
      <directionalLight castShadow position={[0, 2, 0]} intensity={1.2} />

      <pointLight
        castShadow
        position={[0, 2, 0]}
        intensity={1.2}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
      />

      <OrbitControls makeDefault />

      <Physics gravity={[0, -10, 0]}>
        {/* <RigidBody colliders="ball">
          <mesh castShadow receiveShadow position={[1, 25, 2]} scale={0.8}>
            <sphereGeometry />
            <meshStandardMaterial color="red" />
          </mesh>
        </RigidBody> */}

        <RigidBody ref={ballRBRef} colliders="ball">
          <mesh
            ref={ballRef}
            castShadow
            receiveShadow
            position={sphere_position}
            scale={0.8}
          >
            <sphereGeometry />
            <meshStandardMaterial color="red" />
          </mesh>
        </RigidBody>

        <RigidBody>
          <mesh
            castShadow
            receiveShadow
            position={cube_position}
            scale={[0.4, 1, 2]}
          >
            <boxGeometry />
            <meshStandardMaterial color="hotpink" />
          </mesh>
        </RigidBody>

        <RigidBody type="fixed" colliders="trimesh">
          <RampitaModel />
        </RigidBody>

        <Elevator />

        <RigidBody type="fixed">
          <mesh receiveShadow position-y={-1} scale={10}>
            <boxGeometry args={[10, 0.2, 10]} />
            <meshStandardMaterial
              color="#333"
              emissive="#000"
              roughness={0.8}
              metalness={1}
            />
          </mesh>
        </RigidBody>
      </Physics>
    </>
  );
}
