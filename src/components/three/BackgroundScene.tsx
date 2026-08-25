import { Canvas } from '@react-three/fiber'
import { Suspense, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import type { Mesh } from 'three'

function FloatingShape() {
  const meshRef = useRef<Mesh>(null)

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.05
      meshRef.current.rotation.y += delta * 0.08
    }
  })

  return (
    <mesh ref={meshRef} position={[3, 1, -2]}>
      <icosahedronGeometry args={[1.8, 1]} />
      <meshStandardMaterial
        color="#2dd4bf"
        wireframe
        emissive="#14b8a6"
        emissiveIntensity={0.6}
        transparent
        opacity={0.5}
      />
    </mesh>
  )
}

function FloatingShapeTwo() {
  const meshRef = useRef<Mesh>(null)

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x -= delta * 0.06
      meshRef.current.rotation.z += delta * 0.04
    }
  })

  return (
    <mesh ref={meshRef} position={[-3, -1.5, -3]}>
      <octahedronGeometry args={[1.4, 0]} />
      <meshStandardMaterial
        color="#fbbf24"
        wireframe
        emissive="#f59e0b"
        emissiveIntensity={0.5}
        transparent
        opacity={0.45}
      />
    </mesh>
  )
}

export default function BackgroundScene() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={1.4} color="#2dd4bf" />
        <pointLight position={[-5, -3, 3]} intensity={1} color="#fbbf24" />
        <Suspense fallback={null}>
          <FloatingShape />
          <FloatingShapeTwo />
        </Suspense>
      </Canvas>
    </div>
  )
}