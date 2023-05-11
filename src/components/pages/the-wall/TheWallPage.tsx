import { useRef } from "react";
import { extend, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  PivotControls,
  TransformControls,
} from "@react-three/drei";
import { Floor } from "@/components/molecules/floor/Floor";
import { DoorMaterial } from "@/components/molecules/door-material/DoorMaterial";

extend({ DoorMaterial });

export const TheWallPage = () => {
  const doorRef = useRef<any>(null);
  const ballRef = useRef<any>(null);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();

    doorRef.current.material.uniforms.u_time.value = time;

    if (doorRef.current.material.uniforms.u_resolution.value.x === 0) {
      doorRef.current.material.uniforms.u_resolution.value.x =
        window.innerWidth;
      doorRef.current.material.uniforms.u_resolution.value.y =
        window.innerHeight;
    }
  });

  return (
    <>
      <ambientLight intensity={2.5} />
      <OrbitControls makeDefault />

      <PivotControls>
        <pointLight position={[0, 0, 0]} intensity={10} color="purple" />
      </PivotControls>

      <mesh castShadow receiveShadow position={[-1, -0.75, 2]} scale={0.5}>
        <sphereBufferGeometry args={[0.5, 32, 32]} />
        {/* <meshLambertMaterial color="blue" /> */}

        <meshStandardMaterial
          color="#000"
          emissive="#1a1a1a"
          fog={true}
          roughness={0.8}
          metalness={1}
        />
      </mesh>

      <TransformControls mode="translate">
        <mesh
          ref={doorRef}
          castShadow
          receiveShadow
          position={[0, 0.8, 0]}
          rotation={[0, -0.3, 0]}
        >
          <boxGeometry args={[8, 4, 0.2]} />
          <doorMaterial />
        </mesh>
      </TransformControls>

      {/* <Floor
          mirror={0.0}
          blur={[0, 30]}
          mixBlur={1}
          mixStrength={1.1}
          resolution={1024}
          roughness={0.5}
          metalness={0.89}
          depthScale={0}
          minDepthThreshold={0.9}
          maxDepthThreshold={1}
          depthToBlurRatioBias={0.25}
          distortion={1}
        /> */}

      {/* <Floor
          mirror={1.5}
          blur={[500, 500]}
          resolution={2048}
          mixBlur={1}
          mixStrength={50}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#050505"
          metalness={0.5}
        /> */}
      <Floor
        mirror={1.5}
        blur={[400, 100]}
        resolution={1024}
        mixBlur={1}
        mixStrength={15}
        depthScale={1}
        minDepthThreshold={0.85}
        color="#151515"
        metalness={0.6}
        roughness={1}
      />
    </>
  );
};
