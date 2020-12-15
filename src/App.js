import React, { Suspense, useRef } from 'react'
import './App.css';
import Header from './components/Header';
import { Canvas, useFrame } from 'react-three-fiber';


const Dodecahedron = ( {...props}) => {
  return(
    <mesh {...props}>
      <Suspense fallback={null}>
        <dodecahedronBufferGeometry />
        <meshStandardMaterial roughness={0.75} emissive="gray"/>
      </Suspense>
    </mesh>
  )
}

const Content = () => {
 const ref = useRef()
 useFrame(() => (ref.current.rotation.x = ref.current.rotation.y += 0.01))
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
      camera={{position:[0,0,0,0]}}
      >
        <pointLight color='green'/>
        <pointLight position={[10, 10, -10]} color='orange' />
        <pointLight position={[10, 10, -10]} color='lightblue' />
        <Content/>
      </Canvas>
    </>
    
  );
}

export default App;
