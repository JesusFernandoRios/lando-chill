import React, {Suspense} from 'react'
import {Canvas} from 'react-three-fiber'
import { useGLTF} from 'drei'

const Model = () => {
    const gltf = useGLTF('/dodecahedron.gtlf', true)
    return <primitive object={gltf.scene} dispose={null}/>
}

export default function ModelBody() {
    return (
        <Canvas
        colorManagement
        camera={{position: [0,0, 10], fov: 70}}
        >
            <Suspense fallback={null}>
                <mesh position={[0,0,0]}>
                    <Model/>
                </mesh> 
            </Suspense>
            
        </Canvas>
    )
}
