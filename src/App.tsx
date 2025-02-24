import { GradientTexture, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { editable as e, PerspectiveCamera, SheetProvider } from "@theatre/r3f";
import extension from "@theatre/r3f/dist/extension";
import studio from "@theatre/studio";
import { BackSide } from "three";
import { Revolver } from "./Revolver";
import { demoSheet } from "./Sheet";

if (import.meta.env.DEV) {
  studio.initialize();
  studio.extend(extension);
}

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
      <ScrollControls pages={7} damping={0.1}>
        <SheetProvider sheet={demoSheet}>
          <PerspectiveCamera
            theatreKey="Camera"
            makeDefault
            position={[5, 5, -5]}
            fov={75}
          >
            <e.pointLight
              theatreKey="pointLight1"
              position={[0, 2, 2]}
              intensity={5}
            />
            <e.pointLight
              theatreKey="pointLight2"
              position={[0, -2, -2]}
              intensity={5}
            />
            <mesh position={[0, 0, 0]}>
              <sphereGeometry args={[10, 10, 10]} />
              <meshBasicMaterial side={BackSide}>
                <GradientTexture
                  stops={[0, 1]} // As many stops as you want
                  colors={["#231A1A", "#161212"]} // Colors need to match the number of stops
                  size={1024} // Size is optional, default = 1024
                />
              </meshBasicMaterial>
            </mesh>
          </PerspectiveCamera>
          <e.pointLight
            theatreKey="pointLight3"
            position={[0, 5, 0]}
            intensity={5}
          />
          <Revolver />
        </SheetProvider>
      </ScrollControls>
    </Canvas>
  );
};

export default App;
