import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function RotatingCamera() {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  const lensRef = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (lensRef.current) {
      lensRef.current.rotation.y = clock.getElapsedTime() * 0.3;
      lensRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.2) * 0.1;
    }
  });

  return (
    <>
      <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 0, 8]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#D4AF37" />
      
      <group ref={lensRef}>
        <mesh>
          <cylinderGeometry args={[1.5, 1.8, 0.8, 32]} />
          <meshStandardMaterial 
            color="#1a1a1a" 
            metalness={0.9} 
            roughness={0.1}
          />
        </mesh>
        
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[1.2, 1.2, 0.3, 32]} />
          <meshStandardMaterial 
            color="#D4AF37" 
            metalness={1} 
            roughness={0.2}
            emissive="#D4AF37"
            emissiveIntensity={0.3}
          />
        </mesh>
        
        <mesh position={[0, 0, 0.2]}>
          <circleGeometry args={[0.8, 32]} />
          <meshStandardMaterial 
            color="#000000" 
            metalness={0.5} 
            roughness={0.3}
          />
        </mesh>
        
        {[...Array(6)].map((_, i) => (
          <mesh 
            key={i} 
            position={[
              Math.cos((i / 6) * Math.PI * 2) * 0.6,
              Math.sin((i / 6) * Math.PI * 2) * 0.6,
              0.25
            ]}
          >
            <circleGeometry args={[0.05, 16]} />
            <meshStandardMaterial 
              color="#D4AF37" 
              emissive="#D4AF37"
              emissiveIntensity={0.5}
            />
          </mesh>
        ))}
      </group>

      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </>
  );
}

export default function CameraScene() {
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setHasWebGL(false);
      }
    } catch (e) {
      setHasWebGL(false);
    }
  }, []);

  if (!hasWebGL) {
    return null;
  }

  return (
    <div className="absolute inset-0 opacity-40">
      <Canvas onCreated={({ gl }) => {
        gl.setClearColor('#000000', 0);
      }}>
        <RotatingCamera />
      </Canvas>
    </div>
  );
}
