import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import type { Mesh } from 'three'

export default function HeroShape() {
  const torusRef = useRef<Mesh>(null)
  const sphereRef = useRef<Mesh>(null)

  useFrame((_, delta) => {
    if (torusRef.current) {
      torusRef.current.rotation.x += delta * 0.15
      torusRef.current.rotation.y += delta * 0.2
    }
    if (sphereRef.current) {
      sphereRef.current.rotation.y -= delta * 0.1
    }
  })

  return (
    <group>
      {/* Outer wireframe torus - teal */}
      <mesh ref={torusRef}>
        <torusGeometry args={[1.1, 0.35, 16, 100]} />
        <meshStandardMaterial
          color="#2dd4bf"
          wireframe
          emissive="#14b8a6"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Inner wireframe sphere - amber */}
      <mesh ref={sphereRef}>
        <sphereGeometry args={[0.8, 24, 24]} />
        <meshStandardMaterial
          color="#fbbf24"
          wireframe
          emissive="#f59e0b"
          emissiveIntensity={0.2}
        />
      </mesh>
    </group>
  )
}