

import { useGLTF, useTexture } from '@react-three/drei';
import React from 'react';
import { useCustomization } from '../context/Customization';
import tableModel from '../assets/Models/Table_type_01.gltf';
import pineTextureBaseColor from '../Textures/Pine_wood/Wood_Plywood_Front_001_basecolor.jpg'
import pineTexturNormalMap from '../Textures/Pine_wood/Wood_Plywood_Front_001_normal.jpg'
import pineTextureRoughnessMap from '../Textures/Pine_wood/Wood_Plywood_Front_001_roughness.jpg'
import pineTextureAoMap from '../Textures/Pine_wood/Wood_Plywood_Front_001_ambientOcclusion.jpg'
import OakTextureBaseColor from '../Textures/Oak_wood/Wood_025_basecolor.jpg'
import OakTextureNormalMap from '../Textures/Oak_wood/Wood_025_normal.jpg'
import OakTextureRoughnessMap from '../Textures/Oak_wood/Wood_025_roughness.jpg'
import OakTextureAoMap from '../Textures/Oak_wood/Wood_025_ambientOcclusion.jpg'
import { MeshStandardMaterial } from 'three';





const Table_type_01 = (props) => {
  const { nodes, materials } = useGLTF(tableModel)
 
  const {material ,tableWidth,tableDepth,tableHeight,} = useCustomization()
  
  const tableWidthScale = tableWidth / 200 
  const tableDepthScale = tableDepth / 100 
  const tableHeightScale = tableHeight /100


const textures = {

  dub : {   
  map: OakTextureBaseColor,
  normalMap: OakTextureNormalMap,
  roughnessMap: OakTextureRoughnessMap ,
  aoMap: OakTextureAoMap,
},
  borovice : { 
  map: pineTextureBaseColor,
  normalMap: pineTexturNormalMap,
  roughnessMap:pineTextureRoughnessMap,
  aoMap: pineTextureAoMap,}

}

const selectedTexture = textures[material];
  
  return (
    
    <group  {...props} dispose={null}>
      
      <mesh  castShadow 
        
        geometry={nodes.Desk.geometry} 
        material={nodes.Desk.material} 
        position={[0.008 , 0.01 + tableHeightScale, -0.12]} 
        rotation={[0.001, 0.035, 0.002]}
        scale={[tableWidthScale,1,tableDepthScale]} >
            <meshStandardMaterial  
              map={useTexture(selectedTexture.map)}
              normalMap={useTexture(selectedTexture.normalMap)}
              roughnessMap={useTexture(selectedTexture.roughnessMap)}
              aoMap={useTexture(selectedTexture.aoMap)}
            
          />
            

      </mesh>
      <mesh castShadow 
        geometry={nodes.Leg1.geometry} 
        material={nodes.Leg1.material} 
        position={[0.885 * tableWidthScale, -0.086 + tableHeightScale, 0.205 * tableDepthScale]} 
        rotation={[3.141, 0.035, 3.14]} 
        scale={[1, tableHeightScale, 1]} >
            <meshStandardMaterial
              map={useTexture(selectedTexture.map)}
              normalMap={useTexture(selectedTexture.normalMap)}
              roughnessMap={useTexture(selectedTexture.roughnessMap)}
              aoMap={useTexture(selectedTexture.aoMap)}
            />
      </mesh>
      <mesh castShadow 
        geometry={nodes.Leg2.geometry} 
        material={nodes.Leg2.material} 
        position={[0.86 * tableWidthScale, -0.085 + tableHeightScale , -0.493 * tableDepthScale]} 
        rotation={[3.141, 0.035, 3.14]} 
        scale={[1, tableHeightScale, 1]} >
          <meshStandardMaterial
             map={useTexture(selectedTexture.map)}
             normalMap={useTexture(selectedTexture.normalMap)}
             roughnessMap={useTexture(selectedTexture.roughnessMap)}
             aoMap={useTexture(selectedTexture.aoMap)}
            />
      </mesh>
      <mesh castShadow 
        geometry={nodes.Leg3.geometry} 
        material={nodes.Leg3.material} 
        position={[-0.855 * tableWidthScale, -0.089 + tableHeightScale, 0.266 * tableDepthScale]} 
        rotation={[0.001, 0.035, 3.14]} 
        scale={[1, -tableHeightScale, 1]} >
          <meshStandardMaterial
             map={useTexture(selectedTexture.map)}
             normalMap={useTexture(selectedTexture.normalMap)}
             roughnessMap={useTexture(selectedTexture.roughnessMap)}
             aoMap={useTexture(selectedTexture.aoMap)}
            />
      </mesh>
      <mesh castShadow 
        geometry={nodes.Leg4.geometry} 
        material={nodes.Leg4.material} 
        position={[-0.88 * tableWidthScale, -0.088 + tableHeightScale, -0.432 * tableDepthScale]} 
        rotation={[3.141, 0.035, 3.14]} 
        scale={[1, tableHeightScale, 1]} >
          <meshStandardMaterial
             map={useTexture(selectedTexture.map)}
             normalMap={useTexture(selectedTexture.normalMap)}
             roughnessMap={useTexture(selectedTexture.roughnessMap)}
             aoMap={useTexture(selectedTexture.aoMap)}
            />
          
      </mesh>
    </group>
  )
}

useGLTF.preload(tableModel)

export default Table_type_01