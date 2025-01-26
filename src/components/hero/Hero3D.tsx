import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

function Hero3D() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mountRef.current) return

    let renderer: THREE.WebGLRenderer
    try {
      // Scene setup
      const scene = new THREE.Scene()
      scene.background = new THREE.Color(0xf0f0f0)

      // Camera setup
      const camera = new THREE.PerspectiveCamera(
        75,
        mountRef.current.clientWidth / mountRef.current.clientHeight,
        0.1,
        1000
      )
      camera.position.z = 5
      camera.position.y = 2

      // Renderer setup
      renderer = new THREE.WebGLRenderer({ antialias: true })
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight)
      renderer.shadowMap.enabled = true
      mountRef.current.appendChild(renderer.domElement)

      // House geometry
      const house = new THREE.Group()

      // Main structure
      const walls = new THREE.Mesh(
        new THREE.BoxGeometry(2, 2, 2),
        new THREE.MeshPhongMaterial({ color: 0xcccccc })
      )
      walls.castShadow = true
      walls.receiveShadow = true
      house.add(walls)

      // Roof
      const roof = new THREE.Mesh(
        new THREE.ConeGeometry(1.5, 1, 4),
        new THREE.MeshPhongMaterial({ color: 0x8b4513 })
      )
      roof.position.y = 1.5
      roof.rotation.y = Math.PI / 4
      roof.castShadow = true
      house.add(roof)

      // Door
      const door = new THREE.Mesh(
        new THREE.PlaneGeometry(0.5, 1),
        new THREE.MeshPhongMaterial({ color: 0x8b4513 })
      )
      door.position.z = 1.01
      door.position.y = -0.5
      house.add(door)

      // Windows
      const windowGeometry = new THREE.PlaneGeometry(0.4, 0.4)
      const windowMaterial = new THREE.MeshPhongMaterial({ color: 0x87ceeb })

      const window1 = new THREE.Mesh(windowGeometry, windowMaterial)
      window1.position.set(0.5, 0.2, 1.01)
      house.add(window1)

      const window2 = new THREE.Mesh(windowGeometry, windowMaterial)
      window2.position.set(-0.5, 0.2, 1.01)
      house.add(window2)

      scene.add(house)

      // Ground
      const ground = new THREE.Mesh(
        new THREE.PlaneGeometry(10, 10),
        new THREE.MeshPhongMaterial({ color: 0x90ee90 })
      )
      ground.rotation.x = -Math.PI / 2
      ground.position.y = -1
      ground.receiveShadow = true
      scene.add(ground)

      // Lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
      scene.add(ambientLight)

      const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
      directionalLight.position.set(5, 5, 5)
      directionalLight.castShadow = true
      scene.add(directionalLight)

      // Controls
      const controls = new OrbitControls(camera, renderer.domElement)
      controls.enableDamping = true
      controls.dampingFactor = 0.05
      controls.minDistance = 3
      controls.maxDistance = 10
      controls.maxPolarAngle = Math.PI / 2

      // Animation
      let animationFrameId: number

      const animate = () => {
        animationFrameId = requestAnimationFrame(animate)
        controls.update()
        renderer.render(scene, camera)
      }
      animate()

      // Handle resize
      const handleResize = () => {
        if (!mountRef.current) return
        
        const width = mountRef.current.clientWidth
        const height = mountRef.current.clientHeight
        
        camera.aspect = width / height
        camera.updateProjectionMatrix()
        renderer.setSize(width, height)
      }
      window.addEventListener('resize', handleResize)

      // Cleanup
      return () => {
        window.removeEventListener('resize', handleResize)
        cancelAnimationFrame(animationFrameId)
        if (mountRef.current && renderer) {
          mountRef.current.removeChild(renderer.domElement)
        }
        renderer.dispose()
      }
    } catch (error) {
      console.error('Error initializing Three.js:', error)
      return () => {
        if (mountRef.current && renderer) {
          mountRef.current.removeChild(renderer.domElement)
        }
      }
    }
  }, [])

  return (
    <div className="relative">
      <div ref={mountRef} className="w-full h-[60vh]" />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Find Your Dream Home</h1>
          <p className="text-xl">Discover the perfect property that matches your lifestyle</p>
        </div>
      </div>
    </div>
  )
}

export default Hero3D
