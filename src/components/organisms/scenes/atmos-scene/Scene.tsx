import * as THREE from "three";
import { useMemo, useRef } from "react";
import { Float, PerspectiveCamera, useScroll } from "@react-three/drei";
import { Background } from "@/components/molecules/backgrounds/atmos-background/Background";
import { Airplane2 } from "@/components/molecules/airplane2/Airplane2";
import { Cloud } from "@/components/molecules/cloud/Cloud";
import { useFrame } from "@react-three/fiber";

const linePointsCount = 12000;

export const Scene = () => {
  const airplaneRef = useRef<THREE.Group>(null);
  const cameraGroupRef = useRef<THREE.Group>(null);

  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3(
      [
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(0, 0, -10),
        new THREE.Vector3(-2, 0, -20),
        new THREE.Vector3(-3, 0, -30),
        new THREE.Vector3(0, 0, -40),
        new THREE.Vector3(5, 0, -50),
        new THREE.Vector3(7, 0, -60),
        new THREE.Vector3(5, 0, -70),
        new THREE.Vector3(0, 0, -80),
        new THREE.Vector3(0, 0, -90),
        new THREE.Vector3(0, 0, -100),
      ],
      false,
      "catmullrom",
      0.4
    );
  }, []);

  const linePoints = useMemo(() => {
    return curve.getPoints(linePointsCount);
  }, [curve]);

  const shape = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, -0.2);
    shape.lineTo(0, 0.2);

    return shape;
  }, []);

  const scroll = useScroll();

  useFrame((_state, delta) => {
    const currentPointIndex = Math.min(
      Math.round(scroll.offset * linePoints.length),
      linePoints.length - 1
    );

    const currentPoint = linePoints[currentPointIndex];

    const pointAhead =
      linePoints[Math.min(currentPointIndex + 1, linePoints.length - 1)];

    console.log(
      currentPoint,
      `currentPointIndex: ${currentPointIndex} - currentPoint: {${currentPoint.x} ${currentPoint.y}}`
    );

    const xDisplacement = (pointAhead.x - currentPoint.x) * 80;

    // turn left or right the plane
    // Math.PI / 2 -> left
    // -Math.PI / 2 -> right

    const angleRotation =
      (xDisplacement < 0 ? 1 : -1) *
      Math.min(Math.abs(xDisplacement), Math.PI / 3);

    const targetAirplaneQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        airplaneRef.current?.rotation.x,
        airplaneRef.current?.rotation.y,
        angleRotation
      )
    );

    const targetCameraQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        cameraGroupRef.current?.rotation.x,
        angleRotation,
        cameraGroupRef.current?.rotation.z
      )
    );

    airplaneRef.current?.quaternion.slerp(targetAirplaneQuaternion, delta * 2);
    cameraGroupRef.current?.quaternion.slerp(targetCameraQuaternion, delta * 2);

    cameraGroupRef.current?.position.lerp(currentPoint, delta * 24);
  });

  return (
    <>
      <ambientLight intensity={1} />

      <group ref={cameraGroupRef}>
        <Background />

        <PerspectiveCamera position={[0, 0, 5]} fov={30} makeDefault />

        <group ref={airplaneRef}>
          <Float floatIntensity={2} speed={2}>
            <Airplane2
              rotation-y={Math.PI}
              scale={[0.2, 0.2, 0.2]}
              position-y={0.1}
            />
          </Float>
        </group>
      </group>

      <group position-y={-1}>
        {/* <Line
          points={linePoints}
          color={"white"}
          opacity={0.7}
          transparent
          lineWidth={16}
        /> */}

        <mesh>
          <extrudeGeometry
            args={[
              shape,
              {
                steps: linePointsCount,
                bevelEnabled: false,
                extrudePath: curve,
              },
            ]}
          />

          <meshStandardMaterial color="white" opacity={0.7} transparent />
        </mesh>
      </group>

      <Cloud opacity={0.5} scale={[0.3, 0.3, 0.3]} position={[-2, 1, -3]} />
      <Cloud opacity={0.5} scale={[0.2, 0.3, 0.4]} position={[1.5, -0.5, -2]} />

      <Cloud
        opacity={0.7}
        scale={[0.3, 0.3, 0.4]}
        position={[2, -0.2, -2]}
        rotation-y={Math.PI / 9}
      />
      <Cloud
        opacity={0.7}
        scale={[0.4, 0.4, 0.4]}
        position={[1, -0.2, -12]}
        rotation-y={Math.PI / 9}
      />

      <Cloud opacity={0.7} scale={[0.5, 0.5, 0.5]} position={[-1, 1, -53]} />
      <Cloud opacity={0.3} scale={[0.8, 0.8, 0.8]} position={[0, 1, -100]} />
    </>
  );
};
