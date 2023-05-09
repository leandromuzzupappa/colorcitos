import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerformanceMonitor,
  SoftShadows,
} from "@react-three/drei";
import { LaChasseModel } from "@/components/molecules/la-chasse-model/Model";
import styles from "./LaChassePage.module.scss";

export const LaChassePage = () => {
  const [enabled, setEnabled] = useState(true);

  return (
    <div className={styles.pepitos}>
      <Canvas shadows="basic" camera={{ position: [0, 1.5, 7], fov: 45 }}>
        <OrbitControls makeDefault />

        <fog attach="fog" args={["black", 0, 1000]} />

        <pointLight position={[10, -10, -20]} intensity={2} />
        <pointLight position={[-10, -10, -20]} intensity={2} />

        <LaChasseModel />
        {enabled && <SoftShadows />}

        <PerformanceMonitor onDecline={() => setEnabled(false)} />
      </Canvas>
    </div>
  );
};
