// @ts-ignore
import extension from "@theatre/r3f/dist/extension";
// @ts-ignore
import { editable as e, SheetProvider, PerspectiveCamera } from "@theatre/r3f";

import * as THREE from "three";
import { createRoot } from "react-dom/client";
import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { getProject } from "@theatre/core";
import studio from "@theatre/studio";

if (import.meta.env.DEV) {
  studio.initialize();
  studio.extend(extension);
}

// our Theatre.js project sheet, we'll use this later
const demoSheet = getProject("Demo Project").sheet("Demo Sheet");

const App = () => {
  return (
    <Canvas
      camera={{
        position: [5, 5, -5],
        fov: 75,
      }}
      gl={{
        preserveDrawingBuffer: true,
      }}
    >
      <SheetProvider sheet={demoSheet}>
        <PerspectiveCamera
          theatreKey="Camera"
          makeDefault
          position={[5, 5, -5]}
          fov={75}
        />
        <e.ambientLight theatreKey="Ambient" />
        <e.pointLight theatreKey="Light" position={[10, 10, 10]} />
        <e.mesh theatreKey="Cube">
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="orange" />
        </e.mesh>
      </SheetProvider>
    </Canvas>
  );
};

export default App;
