import React, { Suspense, useRef } from 'react'
import Header from './components/Header';
import { Canvas, useFrame, useThree } from 'react-three-fiber';
import { OrbitControls, Html} from '@react-three/drei'
import { useGesture } from 'react-use-gesture'
import {useSpring, a} from 'react-spring/three'

import './components/Style/app.css'


const Dodecahedron = ({...props}) => {
  const { size , viewport } = useThree();
  const aspect = size.width / viewport.width 
  const [spring, setSpring] = useSpring(() => ({ scale: [1,1,1], position:[0,0,0], rotation: [0,0,0], config: {friction: 10}}))
  const bind = useGesture({
    onDrag: ({offset: [x,y]}) => ({position: [x / aspect, -y /aspect, 0], rotation: [y / aspect, x / aspect, 0] }),
    onHover: ({hovering}) => setSpring({scale: hovering ? [1.2, 1.2, 1.2] : [1,1,1] })
  })
  return(
    <a.mesh {...props} {...spring} {...bind()} castShadow >
      <Suspense fallback={null}>
        <dodecahedronBufferGeometry />
        <meshStandardMaterial roughness={0.75} emissive="gray"/>
        <Html scaleFactor={10}>
          <div className="facebook">
            <h1>Facebook</h1>
          </div>
        </Html>
      </Suspense>
    </a.mesh>
  )
}

const Content = () => {

 const ref = useRef()
 useFrame(() => (ref.current.rotation.x = ref.current.rotation.y = ref.current.rotation.z += 0.01))
 return(
    <group ref={ref}>
      <Dodecahedron position={[0,0,0]}/>
    </group>
 )
}

function App() {

  return (
    <>
      <Header/>
      <Canvas
      camera={{position:[0,0,7], fov:60}}
      >
        <pointLight color='white'/>
        <pointLight position={[10, 10, -10]} color='white' />
        <pointLight position={[-10, -10, 10]} color='white' />
        <Content/>
      </Canvas>
    </>
    
  );
}

export default App;
