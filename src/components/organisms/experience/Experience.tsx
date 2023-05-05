import { Canvas } from "@react-three/fiber";
import { MyScene } from "../my-scene/MyScene";
import styles from "./Experience.module.scss";

export const Experience = () => {
  return (
    <div className={styles.pepitos}>
      <Canvas>
        <MyScene />
      </Canvas>
    </div>
  );
};
