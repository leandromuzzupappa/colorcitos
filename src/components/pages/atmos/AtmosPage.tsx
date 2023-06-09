import { Scene } from "@/components/organisms/scenes/atmos-scene/Scene";
import { Canvas } from "@react-three/fiber";

import styles from "./AtmosPage.module.scss";

export const AtmosPage = () => {
  return (
    <section className={styles.pepitos}>
      <Canvas>
        <Scene />
      </Canvas>
    </section>
  );
};
