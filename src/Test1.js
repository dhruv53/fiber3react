import "./App.css";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Cube from "./Cube";

function Test1() {
  return (
    <Canvas style={{ width: "50%", height: "50vh", backgroundColor: "black" }}>
      <OrbitControls />
      <directionalLight intensity={0.5} />
      <ambientLight intensity={0.2} />
      <Suspense fallback={null}>
        <Cube />
        <Stars />
      </Suspense>
    </Canvas>
  );
}

export default Test1;
