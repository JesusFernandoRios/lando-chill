import React, { Suspense, useRef, useState } from 'react'
import Header from './components/Header';
import { Canvas, useFrame, useThree } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei'
import  { useDrag } from 'react-use-gesture'
import './components/Style/app.css'


const Dodecahedron = () => {
  const ref = useRef();
  const [position, setPosition] = useState([0,0,0])
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;

  useFrame(() => {
    ref.current.rotation.z = ref.current.rotationx += 0.003
  })

  const bind = useDrag(({ offset: [x,y] }) => {
    const [,,z] = position;
    setPosition([x / aspect, -y / aspect, z]);
  }, { pointerEvents: true})

  return(
    <mesh position={position} {...bind()} ref={ref}>
      <Suspense fallback={null}>
        <dodecahedronBufferGeometry />
        <meshStandardMaterial roughness={0.75} emissive="gray"/>
      </Suspense>
    </mesh>
  )
}

function App() {

  return (
    <>
      <Header/>
      <Canvas
      camera={{position:[0,0,7.5]}}
      >
        <pointLight color='white'/>
        <pointLight position={[10, 10, -10]} color='white' />
        <pointLight position={[-10, -10, 10]} color='white' />
        <Dodecahedron/>
      </Canvas>
    </>
    
  );
}

export default App;
