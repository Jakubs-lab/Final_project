
import { MeshReflectorMaterial,PresentationControls,Stage} from '@react-three/drei';
import React from 'react';
import Table_type_01 from './Table_type_01';
//import Table_type_02 from './Table_type_02';



const Experience = () =>{
    
    
    
    return(
    <PresentationControls
        speed={1}
        polar={[-0.5, Math.PI / 4]}
        rotation={[Math.PI / 8, Math.PI / 9, 0]}
        >
    <Stage  >
        <Table_type_01/>
    </Stage>
    <mesh  rotation={[-Math.PI / 2, 0, 0]} position-y={-0.4}>
        <planeGeometry args={[100,100]} />
        <MeshReflectorMaterial
            blur={[300, 100]}
            resolution={2048}
            mixBlur={1}
            mixStrength={1}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0}
            maxDepthThreshold={0}
            color="#7a9fbf"
            metalness={1}
            mirror={0}
            
          />
          
    </mesh>
    </PresentationControls>
    )
}

export default Experience