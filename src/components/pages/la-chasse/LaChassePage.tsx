import { Canvas } from "@react-three/fiber";
import { LaChasseModel } from "@/components/molecules/la-chasse-model/Model";
import styles from "./LaChassePage.module.scss";

export const LaChassePage = () => {
  return (
    <div className={styles.pepitos}>
      <Canvas>
        <ambientLight intensity={0.8} />
        <LaChasseModel />
      </Canvas>
    </div>
  );
};
