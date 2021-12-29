import React, { useRef, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { proxy, useSnapshot } from "valtio";
import { useSpring } from "@react-spring/core";
import { a } from "@react-spring/three";

const state = proxy({
  current: null,
  items: {
    cvr: "black",
    pos: [0, 1, 0],
  },
});
export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/gearComp.glb");

  useFrame(() => {
    // group.current.rotation.y += 0.005;
    group.current.position.z = 1;
    group.current.position.y = -1.5;
    group.current.position.x = 0;
    group.current.rotation.x = 0.15;
  });

  const snap = useSnapshot(state);

  useEffect(() => {
    state.items.cvr = props.mycol;
  }, [props.mycol]);

  const [active, setActive] = useState(0);
  // const [active2, setActive2] = useState(0);

  const { spring } = useSpring({
    spring: active,
    config: { mass: 5, tension: 400, friction: 50, precision: 0.0001 },
  });

  // const color = spring.to([0, 1], ["black", "red"]);
  const pos = spring.to([0, 1], [-0.02, -50]);
  // const fners = spring.to([0, 1], [-0.02, 100]);
  return (
    <group ref={group} {...props} dispose={null}>
      <a.mesh
        geometry={nodes.usb.geometry}
        material={nodes.usb.material}
        position={[0, -0.02, 0]}
        rotation={[1.94, 0, 0]}
        scale={[1.6, 1.6, 1.6]}
      />
      <mesh
        geometry={nodes.rubber2.geometry}
        material={nodes.rubber2.material}
        position={[0, -0.02, 0]}
        rotation={[1.94, 0, 0]}
        scale={[1.6, 1.6, 1.6]}
      />
      <mesh
        geometry={nodes.electrodeHolder.geometry}
        material={nodes.electrodeHolder.material}
        position={[0, -0.02, 0]}
        rotation={[1.94, 0, 0]}
        scale={[1.6, 1.6, 1.6]}
      />
      <a.mesh
        geometry={nodes.fNirs.geometry}
        material={nodes.fNirs.material}
        position={[0, -0.02, 0]}
        rotation={[1.94, 0, 0]}
        scale={[1.6, 1.6, 1.6]}
        position-y={pos}
        onClick={() => setActive(Number(!active))}
        // material-color={color}
        // onClick={() => setActive(Number(!active))}
      />
      <mesh
        geometry={nodes.bottomCoverBack.geometry}
        material={nodes.bottomCoverBack.material}
        position={[0, -0.02, 0]}
        rotation={[1.94, 0, 0]}
        scale={[1.6, 1.6, 1.6]}
      />
      <mesh
        geometry={nodes.led.geometry}
        material={nodes.led.material}
        position={[0, -0.02, 0]}
        rotation={[1.94, 0, 0]}
        scale={[1.6, 1.6, 1.6]}
      />
      <mesh
        geometry={nodes.rubber1.geometry}
        material={nodes.rubber1.material}
        position={[0, -0.02, 0]}
        rotation={[1.94, 0, 0]}
        scale={[1.6, 1.6, 1.6]}
      />
      <mesh
        geometry={nodes.electrode2.geometry}
        material={nodes.electrode2.material}
        position={[0, -0.02, 0]}
        rotation={[1.94, 0, 0]}
        scale={[1.6, 1.6, 1.6]}
      />
      <mesh
        geometry={nodes.electrode1.geometry}
        material={nodes.electrode1.material}
        position={[0, -0.02, 0]}
        rotation={[1.94, 0, 0]}
        scale={[1.6, 1.6, 1.6]}
      />
      <mesh
        geometry={nodes.cover3.geometry}
        material={nodes.cover3.material}
        position={[0, -0.02, 0]}
        rotation={[1.94, 0, 0]}
        scale={[1.6, 1.6, 1.6]}
      />
      <mesh
        geometry={nodes.cover2.geometry}
        material={nodes.cover2.material}
        position={[0, -0.02, 0]}
        rotation={[1.94, 0, 0]}
        scale={[1.6, 1.6, 1.6]}
      />
      <mesh
        geometry={nodes.electrode3.geometry}
        material={nodes.electrode3.material}
        position={[0, -0.02, 0]}
        rotation={[1.94, 0, 0]}
        scale={[1.6, 1.6, 1.6]}
      />
      <mesh
        geometry={nodes.strip.geometry}
        material={materials["Material.003"]}
        position={[0, -0.02, 0]}
        rotation={[1.94, 0, 0]}
        scale={[1.6, 1.6, 1.6]}
      />
      <mesh
        geometry={nodes.cover.geometry}
        material={nodes.cover.material}
        position={[0, -0.02, 0]}
        rotation={[1.94, 0, 0]}
        scale={[1.6, 1.6, 1.6]}
        material-color={snap.items.cvr}
      />
      <mesh
        geometry={nodes.logo.geometry}
        material={materials.logo}
        position={[-5, 4, 24]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={25}
      />
    </group>
  );
}

useGLTF.preload("/gearComp.glb");
