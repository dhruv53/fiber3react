import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/HeadCompV5.glb");

  useFrame(() => {
    group.current.rotation.y += 0.005;
    group.current.position.z = -1; //
    group.current.position.y = -1;
    group.current.position.x = 0;
    group.current.rotation.x = 0.1;
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={
          nodes[
            "EEG_Retail_assy_V2_20DEC21_-_EEG_RETAIL_USB_COVER_V2_15DEC21-1"
          ].geometry
        }
        material={
          nodes[
            "EEG_Retail_assy_V2_20DEC21_-_EEG_RETAIL_USB_COVER_V2_15DEC21-1"
          ].material
        }
        position={[0, -0.02, 0]}
        rotation={[1.94, 0, 0]}
        scale={[0.03, 0.03, 0.03]}
      />
      <mesh
        geometry={
          nodes[
            "EEG_Retail_assy_V2_20DEC21_-_EEG_RETAIL_RH_RUBBER_V2_15DEC21-1"
          ].geometry
        }
        material={
          nodes[
            "EEG_Retail_assy_V2_20DEC21_-_EEG_RETAIL_RH_RUBBER_V2_15DEC21-1"
          ].material
        }
        position={[0, -0.02, 0]}
        rotation={[1.94, 0, 0]}
        scale={[0.03, 0.03, 0.03]}
      />
      <mesh
        geometry={
          nodes[
            "EEG_Retail_assy_V2_20DEC21_-_EEG_RETAIL_RH_FORNT_COVER_V2_15DEC"
          ].geometry
        }
        material={
          nodes[
            "EEG_Retail_assy_V2_20DEC21_-_EEG_RETAIL_RH_FORNT_COVER_V2_15DEC"
          ].material
        }
        position={[0, -0.02, 0]}
        rotation={[1.94, 0, 0]}
        scale={[0.03, 0.03, 0.03]}
      />
      <mesh
        geometry={
          nodes[
            "EEG_Retail_assy_V2_20DEC21_-_EEG_RETAIL_PCB_ASSY_OPB_V2_15D008"
          ].geometry
        }
        material={
          nodes[
            "EEG_Retail_assy_V2_20DEC21_-_EEG_RETAIL_PCB_ASSY_OPB_V2_15D008"
          ].material
        }
        position={[0, -0.02, 0]}
        rotation={[1.94, 0, 0]}
        scale={[0.03, 0.03, 0.03]}
      />
      <mesh
        geometry={
          nodes[
            "EEG_Retail_assy_V2_20DEC21_-_EEG_RETAIL_MIDDLE_COVER_V2_15DEC21"
          ].geometry
        }
        material={
          nodes[
            "EEG_Retail_assy_V2_20DEC21_-_EEG_RETAIL_MIDDLE_COVER_V2_15DEC21"
          ].material
        }
        position={[0, -0.02, 0]}
        rotation={[1.94, 0, 0]}
        scale={[0.03, 0.03, 0.03]}
      />
      <mesh
        geometry={
          nodes[
            "EEG_Retail_assy_V2_20DEC21_-_EEG_RETAIL_LIGHT_PIPE_V2_15DEC21-1"
          ].geometry
        }
        material={materials["Material.001"]}
        position={[0, -0.02, 0]}
        rotation={[1.94, 0, 0]}
        scale={[0.03, 0.03, 0.03]}
      />
      <mesh
        geometry={
          nodes[
            "EEG_Retail_assy_V2_20DEC21_-_EEG_RETAIL_LH_RUBBER_V2_15DEC21-1"
          ].geometry
        }
        material={
          nodes[
            "EEG_Retail_assy_V2_20DEC21_-_EEG_RETAIL_LH_RUBBER_V2_15DEC21-1"
          ].material
        }
        position={[0, -0.02, 0]}
        rotation={[1.94, 0, 0]}
        scale={[0.03, 0.03, 0.03]}
      />
      <mesh
        geometry={
          nodes["EEG_Retail_assy_V2_20DEC21_-_EEG_ELECTRODE_V1_02Sep21-2"]
            .geometry
        }
        material={
          nodes["EEG_Retail_assy_V2_20DEC21_-_EEG_ELECTRODE_V1_02Sep21-2"]
            .material
        }
        position={[0, -0.02, 0]}
        rotation={[1.94, 0, 0]}
        scale={[0.03, 0.03, 0.03]}
      />
      <mesh
        geometry={
          nodes["EEG_Retail_assy_V2_20DEC21_-_EEG_ELECTRODE_V1_02Sep21-1"]
            .geometry
        }
        material={
          nodes["EEG_Retail_assy_V2_20DEC21_-_EEG_ELECTRODE_V1_02Sep21-1"]
            .material
        }
        position={[0, -0.02, 0]}
        rotation={[1.94, 0, 0]}
        scale={[0.03, 0.03, 0.03]}
      />
      <mesh
        geometry={
          nodes[
            "EEG_Retail_assy_V2_20DEC21_-_EEG_Retail_Y_Cover_Assembly_03DEC2"
          ].geometry
        }
        material={
          nodes[
            "EEG_Retail_assy_V2_20DEC21_-_EEG_Retail_Y_Cover_Assembly_03DEC2"
          ].material
        }
        position={[0, -0.02, 0]}
        rotation={[1.94, 0, 0]}
        scale={[0.03, 0.03, 0.03]}
      />
      <mesh
        geometry={
          nodes["EEG_Retail_assy_V2_20DEC21_-_EEG_Retail_Y_Cover_Assembly_03"]
            .geometry
        }
        material={
          nodes["EEG_Retail_assy_V2_20DEC21_-_EEG_Retail_Y_Cover_Assembly_03"]
            .material
        }
        position={[0, -0.02, 0]}
        rotation={[1.94, 0, 0]}
        scale={[0.03, 0.03, 0.03]}
      />
      <mesh
        geometry={
          nodes[
            "EEG_Retail_assy_V2_20DEC21_-_EEG_Retail_Y_Cover_Assembly_03002"
          ].geometry
        }
        material={
          nodes[
            "EEG_Retail_assy_V2_20DEC21_-_EEG_Retail_Y_Cover_Assembly_03002"
          ].material
        }
        position={[0, -0.02, 0]}
        rotation={[1.94, 0, 0]}
        scale={[0.03, 0.03, 0.03]}
      />
      <mesh
        geometry={
          nodes[
            "EEG_Retail_assy_V2_20DEC21_-_EEG_RETAIL_POWER_BUTON_V2_15DEC21-"
          ].geometry
        }
        material={materials["Material.003"]}
        position={[0, -0.02, 0]}
        rotation={[1.94, 0, 0]}
        scale={[0.03, 0.03, 0.03]}
      />
      <mesh
        geometry={
          nodes[
            "EEG_Retail_assy_V2_20DEC21_-_EEG_RETAIL_REAR_COVER_V2_15DEC21-1"
          ].geometry
        }
        material={materials["Material.006"]}
        position={[0, -0.02, 0]}
        rotation={[1.94, 0, 0]}
        scale={[0.03, 0.03, 0.03]}
      />
      <mesh
        geometry={nodes.logo001.geometry}
        material={materials.logo}
        position={[-0.6, 0.36, 3.22]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.55}
      />
    </group>
  );
}

useGLTF.preload("/HeadCompV5.glb");
