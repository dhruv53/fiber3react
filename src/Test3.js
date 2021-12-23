import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import HeadComp from "./HeadCompV5";

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
          <HeadComp />
        </Suspense>
      </Canvas>
    </>
  );
}

export default Test3;
