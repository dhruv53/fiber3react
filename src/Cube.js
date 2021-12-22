import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/Cube.glb");
  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    console.log(actions);
    actions.Cube.play();
  }, []);
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        name="Cube"
        geometry={nodes.Cube.geometry}
        material={materials.Material}
        position={[-0.02, 0, -0.02]}
      />
    </group>
  );
}

useGLTF.preload("/Cube.glb");
