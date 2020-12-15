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
 useFrame(() => (ref.current.rotation.x = ref.current.rotation.y += 0.003))
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
      camera={{position:[0,0,7], fov: 40}}
      >
        <pointLight color='green'/>
        <pointLight position={[10, 10, -10]} color='white' />
        <pointLight position={[-10, 10, 10]} color='white' />
        <Content/>
      </Canvas>
    </>
    
  );
}

export default App;
