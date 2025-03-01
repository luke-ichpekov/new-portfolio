import { Canvas, useFrame, extend } from '@react-three/fiber'
import { useRef, useState, useEffect } from 'react'
import * as THREE from 'three'

const ParticleSystem = () => {
  const particlesRef = useRef<THREE.Points>(null!)
  const [particles] = useState(() => {
    const particleCount = 5000
    const geometry = new THREE.BufferGeometry()
    const positions = new Float32Array(particleCount * 3)
    
    // Randomly generate particle positions
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = Math.random() * 10 - 5
      positions[i * 3 + 1] = Math.random() * 10 - 5
      positions[i * 3 + 2] = Math.random() * 10 - 5
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    
    return geometry
  })

  const material = new THREE.PointsMaterial({
    color: 0x888888, // Particle color
    size: 0.01, // Size of the particles (larger for spheres)
    alphaTest: 0.5,
    transparent: true,
  })

  // Track mouse movement
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1 // Normalize to [-1, 1]
      const y = -(e.clientY / window.innerHeight) * 2 + 1 // Normalize to [-1, 1]
      setMouse({ x, y })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  useFrame(() => {
    if (particlesRef.current) {
      // Apply parallax effect by adjusting the particle positions
      const positions = particlesRef.current.geometry.attributes.position.array
      for (let i = 0; i < positions.length; i += 3) {
        // Make particles move based on mouse position
        positions[i] += (mouse.x * 0.01) // X-axis parallax effect
        positions[i + 1] += (mouse.y * 0.01) // Y-axis parallax effect
      }

      // Rotate the particles to animate them
      particlesRef.current.rotation.x += 0.001
      particlesRef.current.rotation.y += 0.001

      // Mark geometry as needing an update
      particlesRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <points ref={particlesRef} geometry={particles} material={material} />
  )
}

export default function App() {
  return (
    <Canvas>
      <ParticleSystem />
    </Canvas>
  )
}
