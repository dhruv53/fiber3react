import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/brainBothFeetColorComp.glb"
  );
  const { actions } = useAnimations(animations, group);

  useFrame(() => {
    group.current.position.y = 0;
    group.current.position.z = -3.5;
  });

  useEffect(() => {
    actions.Left.play();
    actions.Right.play();
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        name="Left"
        geometry={nodes.Left.geometry}
        material={materials["Material.005"]}
        position={[0, 0.84, 0]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        name="Right"
        geometry={nodes.Right.geometry}
        material={materials["Material.002"]}
        position={[0, 0.84, 0]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
    </group>
  );
}

useGLTF.preload("/brainBothFeetColorComp.glb");
