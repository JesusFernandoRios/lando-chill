import React, {useRef, useState} from 'react'
import Header from './components/Header';
import { Canvas, useFrame, useThree } from 'react-three-fiber';
import { useSpring, a} from '@react-spring/three'
import  { useDrag } from 'react-use-gesture'
import './components/Style/app.css'


const Dodecahedron = () => {
  const ref = useRef();
  const [position, setPosition] = useState([0, 0, 0]);
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;
  useFrame(() => {
    ref.current.rotation.z = ref.current.rotation.x += 0.01
  })

  const bind = useDrag(({ offset: [x, y] }) => {
    const [,, z] = position;
    setPosition([x / aspect, -y / aspect, z]);
}, { pointerEvents: true });

  return(
    
    <mesh position={position} {...bind()} ref={ref}>
      <dodecahedronBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" emissive="gray"/>
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
        <spotLight intensity={1.2} position={[30, 30, 50]} angle={0.2} penumbra={1} castShadow />
        <Dodecahedron/>
      </Canvas>
    </>
    
  );
}

export default App;
