import React, { Suspense, useState } from "react";
import GearComp from "./GearComp";
import { Canvas } from "@react-three/fiber";
import {
  /*Stage,*/
  BakeShadows,
  OrbitControls,
  Environment,
  ContactShadows,
} from "@react-three/drei";
import "./css/gear.css";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Aud from "./Aud";
function Mod() {
  const [mycol, updateCol] = useState("black");

  const changeColor = (col) => {
    console.log(col);
    updateCol(col);
  };

  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <>
      <Aud />
      <Modal show={show} onHide={handleClose} style={{ width: "100%" }}>
        <Modal.Body style={{ width: "100%" }}>
          <div className="headModel">
            <div className="glass">
              <div className="colorPallet">
                <button
                  onClick={() => changeColor("red")}
                  style={{ backgroundColor: "red" }}
                />
                <button
                  onClick={() => changeColor("green")}
                  style={{ backgroundColor: "green" }}
                />
                <button
                  onClick={() => changeColor("pink")}
                  style={{ backgroundColor: "pink" }}
                />
                <button
                  onClick={() => changeColor("DarkSlateBlue")}
                  style={{ backgroundColor: "DarkSlateBlue" }}
                />
                <button
                  onClick={() => changeColor("orange")}
                  style={{ backgroundColor: "orange" }}
                />
                <button
                  onClick={() => changeColor("teal")}
                  style={{ backgroundColor: "teal" }}
                />

                <button
                  onClick={() => changeColor("black")}
                  style={{ backgroundColor: "black" }}
                />
              </div>
              <Suspense fallback={<h1>Loading...</h1>}>
                <Canvas
                  shadows
                  gl={{ antialias: true }}
                  camera={{ position: [0, 0, 500], fov: 35 }}
                  className="headCanvas"
                  dpr={[1, 2]}
                >
                  <directionalLight intensity={3} />
                  <ambientLight intensity={0.7} />
                  <spotLight
                    intensity={0.5}
                    angle={0.1}
                    penumbra={1}
                    position={[10, 15, 10]}
                    castShadow
                  />
                  <Suspense fallback={null}>
                    {/* <Stage
              environment="city"
              intensity={0.5}
              contactShadowOpacity={0.6}
              contactShadowBlur={1}
            > */}
                    <GearComp mycol={mycol} />
                    <Environment preset="city" />
                    <ContactShadows
                      rotation-x={Math.PI / 2}
                      position={[0, -0.8, 0]}
                      opacity={1}
                      width={200}
                      height={10}
                      blur={1.5}
                      far={0.8}
                    />
                    {/* </Stage> */}
                    <BakeShadows />
                  </Suspense>
                  <OrbitControls autoRotate enableZoom={false} />
                </Canvas>
              </Suspense>
              <div
                style={{
                  padding: "10px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <Button variant="primary" onClick={handleClose}>
                  Know More
                </Button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Mod;
