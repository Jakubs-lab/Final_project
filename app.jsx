import { createRoot } from 'react-dom/client'
import React from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import Experience from './src/components/Experience'
import Configurator from './src/components/Configurator'
import { CustomizationProvider } from './src/context/Customization'
import { PerspectiveCamera } from '@react-three/drei'



const Configuration = () => {
 
  return ( 
    <CustomizationProvider>
  <div className='config'>
    <Canvas  >
      <color attach={"background"} args={["#7a9fbf"]}/>
      <fog attach="fog" args={["#7a9fbf", 5, 20]} />
      <PerspectiveCamera zoom={[0.5]} position={[0,0,5]} makeDefault/>
        <Experience/>
    </Canvas >
    
    <Configurator/>
  </div>
</CustomizationProvider>
  
  )
}
const container = document.querySelector(".app")
const root = createRoot(container)
root.render(<Configuration/>)

export default Configuration