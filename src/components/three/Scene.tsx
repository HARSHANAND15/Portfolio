import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import HeroShape from './HeroShape.tsx'

export default function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      className="!absolute inset-0"
    >
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={1.2} color="#2dd4bf" />
      <pointLight position={[-5, -5, -5]} intensity={0.8} color="#fbbf24" />

      <Suspense fallback={null}>
        <HeroShape />
      </Suspense>
    </Canvas>
  )
}