import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

// 기본 세팅
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 5

const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#three-canvas') })
renderer.setSize(window.innerWidth, window.innerHeight)

// 맵 로딩
const mapIndex = window.selectedMap || 1
const mapPaths = ['/models/map1.glb', '/models/map2.glb', '/models/map3.glb']

const loader = new GLTFLoader()
loader.load(mapPaths[mapIndex - 1], (gltf) => {
  scene.add(gltf.scene)
  animate()
})

function animate() {
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
}

// 리사이즈 대응
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})
