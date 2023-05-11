import { Canvas } from "@react-three/fiber";
import { TheWallPage } from "@/components/pages/the-wall/TheWallPage";
import styles from "./index.module.scss";

export default function Page() {
  return (
    <section className={styles.the_wall_canvas}>
      <Canvas dpr={[1, 1.5]} shadows>
        <TheWallPage />
      </Canvas>
    </section>
  );
}
