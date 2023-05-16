import { Html } from "@react-three/drei";
import { IBallProps } from "@/data/interfaces";
import styles from "./Ball.module.scss";

export const Ball = ({ myRef }: IBallProps) => {
  return (
    <mesh castShadow position-x={-2} ref={myRef}>
      <sphereGeometry />
      <meshStandardMaterial color="yellow" />
      <Html wrapperClass={styles.oreos} position={[0, 2, 0]} occlude="blending">
        Pepitos
      </Html>
    </mesh>
  );
};
