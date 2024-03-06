import { Canvas,useLoader } from '@react-three/fiber';
import {MeshReflectorMaterial,PresentationControls,Stage} from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
const Experience = () =>{
    
    const gltf = useLoader(GLTFLoader, './src/Models/Table_type_01.gltf')
    
    return(
    <PresentationControls
        castShadow={false}
        speed={1}
        global
        polar={[-0.5, Math.PI / 4]}
        rotation={[Math.PI / 8, Math.PI / 9, 0]}
        >
    <Stage preset={'upfront'} shadows="false" >
        <primitive object={gltf.scene}  />
    </Stage>
        <mesh>
            
            <meshLambertMaterial/>
        </mesh>
    </PresentationControls>
    )
}

export default Experience