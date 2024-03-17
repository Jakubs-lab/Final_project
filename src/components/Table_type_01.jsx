

import React from 'react'
import {  useGLTF, useTexture } from '@react-three/drei'
import { useCustomization } from '../context/Customization'



const Table_type_01 = (props) => {
  const { nodes, materials } = useGLTF('src/Models/Table_type_01.gltf')
 
  const {material ,tableWidth,tableDepth,tableHeight,} = useCustomization()
  
  const tableWidthScale = tableWidth / 200 
  const tableDepthScale = tableDepth / 100 
  const tableHeightScale = tableHeight /100

const dub = useTexture({
  map: './src/Textures/Oak_wood/Wood_025_basecolor.jpg',
  normalMap: './src/Textures/Oak_wood/Wood_025_normal.jpg',
  roughnessMap: 'src/Textures/Oak_wood/Wood_025_roughness.jpg',
  aoMap: './src/Textures/Oak_wood/Wood_025_ambientOcclusion.jpg',
})
const borovice = useTexture({
  map: './src/Textures/Pine_wood/Wood_Plywood_Front_001_basecolor.jpg',
  normalMap: './src/Textures/Pine_wood/Wood_Plywood_Front_001_normal.jpg',
  roughnessMap: 'src/Textures/Pine_wood/Wood_Plywood_Front_001_roughness.jpg',
  aoMap: './src/Textures/Pine_wood/Wood_Plywood_Front_001_ambientOcclusion.jpg',
})


  
  return (
    
    <group  {...props} dispose={null}>
      
      <mesh receiveShadow={false}
        
        geometry={nodes.Desk.geometry} 
        material={nodes.Desk.material} 
        position={[0.008 , 0.01 + tableHeightScale, -0.12]} 
        rotation={[0.001, 0.035, 0.002]}
        scale={[tableWidthScale,1,tableDepthScale]} >
            <meshStandardMaterial  {...(material === "Borovice" ? borovice : dub )}/>

      </mesh>
      <mesh 
        geometry={nodes.Leg1.geometry} 
        material={nodes.Leg1.material} 
        position={[0.885 * tableWidthScale, -0.086 + tableHeightScale, 0.205 * tableDepthScale]} 
        rotation={[3.141, 0.035, 3.14]} 
        scale={[1, tableHeightScale, 1]} >
            <meshStandardMaterial {...(material === "Borovice" ? borovice : dub )}/>
      </mesh>
      <mesh 
        geometry={nodes.Leg2.geometry} 
        material={nodes.Leg2.material} 
        position={[0.86 * tableWidthScale, -0.085 + tableHeightScale , -0.493 * tableDepthScale]} 
        rotation={[3.141, 0.035, 3.14]} 
        scale={[1, tableHeightScale, 1]} >
          <meshStandardMaterial {...(material === "Borovice" ? borovice : dub )}/>
      </mesh>
      <mesh 
        geometry={nodes.Leg3.geometry} 
        material={nodes.Leg3.material} 
        position={[-0.855 * tableWidthScale, -0.089 + tableHeightScale, 0.266 * tableDepthScale]} 
        rotation={[0.001, 0.035, 3.14]} 
        scale={[1, -tableHeightScale, 1]} >
          <meshStandardMaterial {...(material === "Borovice" ? borovice : dub )}/>
      </mesh>
      <mesh 
        geometry={nodes.Leg4.geometry} 
        material={nodes.Leg4.material} 
        position={[-0.88 * tableWidthScale, -0.088 + tableHeightScale, -0.432 * tableDepthScale]} 
        rotation={[3.141, 0.035, 3.14]} 
        scale={[1, tableHeightScale, 1]} >
          <meshStandardMaterial {...(material === "Borovice" ? borovice : dub )}/>
          
      </mesh>
    </group>
  )
}

useGLTF.preload('src/Models/Table_type_01.gltf')

export default Table_type_01