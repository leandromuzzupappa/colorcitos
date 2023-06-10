import { Scene } from "@/components/organisms/scenes/atmos-scene/Scene";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, ScrollControls } from "@react-three/drei";

import styles from "./AtmosPage.module.scss";

export const AtmosPage = () => {
  return (
    <section className={styles.pepitos}>
      <Canvas>
        <OrbitControls enableZoom={false} />
        <ScrollControls pages={5} damping={0.3}>
          <Scene />
        </ScrollControls>
      </Canvas>
    </section>
  );
};
