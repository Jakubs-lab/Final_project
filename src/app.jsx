import { createRoot } from 'react-dom/client'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import Experience from './components/Experience'
import Configurator from './components/Configurator'

const Configuration = () => {
 
  return <div className='config'>
    <Canvas>
      <color attach={"background"} args={["#7a9fbf"]}/>
      <fog attach="fog" args={["#7a9fbf", 5, 20]} />
        <Experience/>
    </Canvas>
    <Configurator/>
  </div>

  
  
}
const container = document.querySelector(".app")
const root = createRoot(container)
root.render(<Configuration/>)

export default Configuration