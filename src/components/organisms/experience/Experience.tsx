import { Canvas } from "@react-three/fiber";
import { Cube } from "@/components/molecules/cube/Cube";
import { Geometry } from "@/components/molecules/geometry/Geometry";
import styles from "./Experience.module.scss";

export const Experience = () => {
  return (
    <div className={styles.pepitos}>
      <Canvas>
        <Geometry />
      </Canvas>
    </div>
  );
};
