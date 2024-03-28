

import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import { useCustomization } from '../context/Customization'
import tableModel2 from '../assets/Models/Table'
import pineTextureBaseColor from '../Textures/Pine_wood/Wood_Plywood_Front_001_basecolor.jpg'
import pineTexturNormalMap from '../Textures/Pine_wood/Wood_Plywood_Front_001_normal.jpg'
import pineTextureRoughnessMap from '../Textures/Pine_wood/Wood_Plywood_Front_001_roughness.jpg'
import pineTextureAoMap from '../Textures/Pine_wood/Wood_Plywood_Front_001_ambientOcclusion.jpg'
import OakTextureBaseColor from '../Textures/Oak_wood/Wood_025_basecolor.jpg'
import OakTextureNormalMap from '../Textures/Oak_wood/Wood_025_normal.jpg'
import OakTextureRoughnessMap from '../Textures/Oak_wood/Wood_025_roughness.jpg'
import OakTextureAoMap from '../Textures/Oak_wood/Wood_025_ambientOcclusion.jpg'

const Table_type_02 = (props) => {
  const { nodes, materials } = useGLTF(tableModel2)
  const {material ,tableWidth,tableDepth,tableHeight,} = useCustomization()

  const tableWidthScale = (tableWidth  /200) 
  const tableDepthScale = (tableDepth / 60)
  const tableHeightScale = (tableHeight / 100)


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
    <group {...props} dispose={null}>
      <mesh castShadow
            geometry={nodes.Table_top.geometry} 
            material={nodes.Table_top.material}
            position={[0,  tableHeightScale , 0]}
            scale={[tableWidthScale +0.30,1,tableDepthScale ]} >


            <meshStandardMaterial  
              map={useTexture(selectedTexture.map)}
              normalMap={useTexture(selectedTexture.normalMap)}
              roughnessMap={useTexture(selectedTexture.roughnessMap)}
              aoMap={useTexture(selectedTexture.aoMap)}
            />

      </mesh>

      <mesh castShadow
            geometry={nodes.Leg.geometry} 
            material={nodes.Leg.material} 
            position={[ 0.9 - tableWidthScale ,  tableHeightScale - 0.4, tableDepthScale / 2 - 0.5]}
            scale={[1, 1.85 , 1]} >

            <meshStandardMaterial  
              map={useTexture(selectedTexture.map)}
              normalMap={useTexture(selectedTexture.normalMap)}
              roughnessMap={useTexture(selectedTexture.roughnessMap)}
              aoMap={useTexture(selectedTexture.aoMap)}
            />    
      </mesh>
      <mesh castShadow
            geometry={nodes.Leg002.geometry} 
            material={nodes.Leg002.material} 
            position={[ -0.9 + tableWidthScale ,  tableHeightScale - 0.4,  tableDepthScale / 2 - 0.5]}
            scale={[1, 1.85 , 1]} >

            <meshStandardMaterial  
              map={useTexture(selectedTexture.map)}
              normalMap={useTexture(selectedTexture.normalMap)}
              roughnessMap={useTexture(selectedTexture.roughnessMap)}
              aoMap={useTexture(selectedTexture.aoMap)}
            />    
      </mesh>

      

      <mesh castShadow
            geometry={nodes.Leg004.geometry} 
            material={nodes.Leg004.material} 
            position={[  0.9 - tableWidthScale ,  tableHeightScale - 0.4, -tableDepthScale / 2 + 0.5]}
            scale={[1, 1.85 , 1]} >

            <meshStandardMaterial  
              map={useTexture(selectedTexture.map)}
              normalMap={useTexture(selectedTexture.normalMap)}
              roughnessMap={useTexture(selectedTexture.roughnessMap)}
              aoMap={useTexture(selectedTexture.aoMap)}
            />    
      </mesh>

      <mesh castShadow
            geometry={nodes.Leg006.geometry} 
            material={nodes.Leg006.material} 
            position={[  -0.9 + tableWidthScale,  tableHeightScale - 0.4, -tableDepthScale / 2 + 0.5]}
            scale={[1, 1.85 , 1]} >

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

useGLTF.preload(tableModel2)

export default Table_type_02