import * as THREE from "three";
import { useRef } from "react";
import { extend, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  PivotControls,
  TransformControls,
} from "@react-three/drei";
import { Floor } from "@/components/molecules/floor/Floor";
import { vertexShader } from "@/webgl/shaders/door-material/vertexShader";
import { fragmentShader } from "@/webgl/shaders/door-material/fragmentShader";

export const TheWallPage = () => {
  const doorRef = useRef<any>(null);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();

    doorRef.current.material.uniforms.u_time.value = time;

    if (doorRef.current.material.uniforms.u_resolution.value.x === 0) {
      // Set the size of the boxGeometry
      doorRef.current.material.uniforms.u_resolution.value.x =
        doorRef.current.geometry.parameters.width * 400 + time;
      doorRef.current.material.uniforms.u_resolution.value.y =
        doorRef.current.geometry.parameters.height * 1000 + time;
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
          <shaderMaterial
            vertexShader={vertexShader}
            fragmentShader={fragmentShader}
            uniforms={{
              u_time: { value: 0 },
              u_resolution: { value: new THREE.Vector2(0, 0) },
            }}
          />
        </mesh>
      </TransformControls>

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
