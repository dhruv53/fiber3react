import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import HeadComp from "./HeadComp";

// function Camera(props) {
//   const ref = useRef();
//   const set = useThree((state) => state.set);
//   // Make the camera known to the system
//   useEffect(() => void set({ camera: ref.current }), []);
//   // Update it every frame
//   useFrame(() => ref.current.updateMatrixWorld());
//   return <perspectiveCamera ref={ref} {...props} />;
// }

function Test2() {
  return (
    <>
      <Canvas
        style={{
          backgroundImage: "url('./assets/back.png')",
          width: "50%",
          height: "50vh",
          backgroundSize: "cover",
        }}
      >
        <h1>HeadGear</h1>
        <OrbitControls />
        <directionalLight intensity={0.5} />
        <ambientLight intensity={0.2} />
        <Suspense fallback={null}>
          <HeadComp />
        </Suspense>
      </Canvas>
    </>
  );
}

export default Test2;
