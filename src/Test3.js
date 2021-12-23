import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import HeadComp from "./HeadCompV5";
import { BakeShadows, OrbitControls, Stage } from "@react-three/drei";
function Test3() {
  return (
    <>
      <Canvas
        style={{
          backgroundImage: "url('./assets/back.png')",
          width: "100%",
          height: "100vh",
          backgroundSize: "cover",
        }}
      >
        <directionalLight intensity={5} />
        <ambientLight intensity={0.6} />
        <Suspense fallback={null}>
          <Stage
            environment="city"
            intensity={0.5}
            contactShadowOpacity={0.6}
            contactShadowBlur={1}
          >
            <HeadComp position={[0, 0, 0]} />
          </Stage>
          <BakeShadows />
        </Suspense>
        <OrbitControls autoRotate />
      </Canvas>
    </>
  );
}

export default Test3;
