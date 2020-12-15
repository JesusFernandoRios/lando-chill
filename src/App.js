import React, { Suspense } from 'react'
import './App.css';
import Header from './components/Header';
import { Canvas } from 'react-three-fiber';

import { useGLTF } from 'drei'


const Model = () => {
  const gltf = useGLTF('/dodecahedron.gltf');
  return <primitive object={gltf.scene} dispose={null}/>
}

function App() {

  return (
    <>
      <Header/>
      <Canvas
      colorManagement
      camera={{position:[0,0,20], fov:70}}
      >
        <Suspense fallback={null}>
          <mesh position={[0,250,0]}>
            <Model/>
          </mesh>
        </Suspense>
      </Canvas>
    </>
    
  );
}

export default App;
