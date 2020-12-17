import React, { Suspense, useRef, useState } from 'react'
import Header from './components/Header';
import { Canvas, useFrame, useThree } from 'react-three-fiber';
import { useSpring, a} from '@react-spring/three'
import  { useGesture } from 'react-use-gesture'
import './components/Style/app.css'


const Dodecahedron = () => {
  const ref = useRef();
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;
  const [{ rotation, ...rest }, set] = useSpring(() => ({
    scale: [1, 1, 1],
    position: [0, 0, 0],
    rotation: [0, 0, 0],
    config: { mass: 3, friction: 40, tension: 800 }
  }))

  const bind = useGesture({
    onDrag: ({ offset: [x, y] }) => {

      set({ position: [x / aspect, -y / aspect, 0], rotation: [y / aspect, x / aspect, 0] })
    },
    onHover: ({ hovering }) => set({ scale: hovering ? [1.2, 1.2, 1.2] : [1, 1, 1] })
  })

  return(
    
    <a.mesh rotation={rotation} {...rest} {...bind()}>
      <dodecahedronBufferGeometry attach="geometry"/>
      <meshLambertMaterial attach="material" emissive="gray"/>
    </a.mesh>
      
  )
}

function App() {

  return (
    <>
      <Header/>
      <Canvas
      camera={{position:[0,0,7.5]}}
      >
        <spotLight intensity={1.2} position={[30, 30, 50]} angle={0.2} penumbra={1} castShadow />
        <Dodecahedron/>
      </Canvas>
    </>
    
  );
}

export default App;
