import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.outputColorSpace = THREE.SRGBColorSpace;



renderer.setClearColor(0x000000);
renderer.setPixelRatio(window.devicePixelRatio);

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

document.getElementById("cont3d").appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(13, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.set(4, 5, 11);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enablePan = false;
controls.enableZoom=false
controls.autoRotate = false;
controls.target = new THREE.Vector3(0, 1, 0);
controls.update();

const ambientLight = new THREE.AmbientLight(0xffffff, 1.5); // higher intensity
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 2); // optional
directionalLight.position.set(5, 10, 5);
scene.add(directionalLight);

const loader = new GLTFLoader().setPath('./source/');
let currentMesh=null
loader.load('Samsung Galaxy S25 Ultra Galaxy AI Samsung España.gltf', (gltf) => {
    const mesh = gltf.scene;
    mesh.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
    mesh.scale.set(15, 15, 15);
    mesh.position.set(0, 1, 0);
    scene.add(mesh);
    currentMesh = mesh;
    document.getElementById('progress-container').style.display = 'none';
  }, undefined, (error) => {
    console.error('Error loading model:', error);
  });
function loadModel(filename) {
  loader.load(filename, (gltf) => {
    const mesh = gltf.scene;

    mesh.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });

    mesh.scale.set(15, 15, 15);
    mesh.position.set(0, 1, 0);
    scene.add(mesh);
    if (currentMesh) {
      scene.remove(currentMesh);
      currentMesh.traverse((child) => {
        if (child.isMesh) {
          child.geometry.dispose();
          if (child.material.map) child.material.map.dispose();
          child.material.dispose();
        }
      });
    }

    currentMesh = mesh;
    document.getElementById('progress-container').style.display = 'none';
  }, undefined, (error) => {
    console.error('Error loading model:', error);
  });
}
function col3d(id) {
    let vcl1=document.getElementById('cl1')
    let vcl2=document.getElementById('cl2')
    let vcl3=document.getElementById('cl3')
    let vcl4=document.getElementById('cl4')
    const meshs={
        cl1:'Samsung Galaxy S25 Ultra Galaxy AI Samsung España.gltf',
        cl2:'samsung-black.gltf',
        cl3:'samsung-gray.gltf',
        cl4:'samsung-silver.gltf'
    }
    let res=document.getElementById('d3mes')
    const filename=meshs[id]
    loadModel(filename)
    switch (id) {
        case 'cl1':
            vcl1.classList.add('forcl')
            vcl2.classList.remove('forcl')
            vcl3.classList.remove('forcl')
            vcl4.classList.remove('forcl')
            res.innerHTML='Titanium Silverblue'
            break;
        case 'cl2':
            vcl2.classList.add('forcl')
            vcl1.classList.remove('forcl')
            vcl3.classList.remove('forcl')
            vcl4.classList.remove('forcl')
            res.innerHTML='Titanium Black'
            break;
        case 'cl3':
            vcl3.classList.add('forcl')
            vcl2.classList.remove('forcl')
            vcl1.classList.remove('forcl')
            vcl4.classList.remove('forcl')
            res.innerHTML='Titanium Gray'
            break;
        case 'cl4':
            vcl4.classList.add('forcl')
            vcl2.classList.remove('forcl')
            vcl3.classList.remove('forcl')
            vcl1.classList.remove('forcl')
            res.innerHTML='Titanium Whitesilver'
            break;
        
        default:
            console.log('xbbbjdj');
            break;
    }
}
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
function updateCameraOnResize() {
  let width, height;

  if (window.innerWidth > 767) {
    width = 988;
    height = 729;
  } else {
    width = 312;
    height = 729;
  }

  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  console.log(camera.position);
  
  ;
}
window.col3d = col3d;
let mor = document.getElementById('mor');
let moris = document.getElementById('moris');

let an1=document.getElementById('an1')
let an2=document.getElementById('an2')
let an3=document.getElementById('an3')
let an4=document.getElementById('an4')
let an5=document.getElementById('an5')
let an6=document.getElementById('an6')
an1.addEventListener("click", () => {
  gsap.to(camera.position, {
    duration: 1.5,
    x: 0.47202856135103904,
    y: 1.1269921745418576,
    z: 12.3596546078308,
    onUpdate: () => {
      camera.lookAt(2, 0, 0); // adjust as needed
    }
  });
});
an2.addEventListener("click", () => {
  gsap.to(camera.position, {
    duration: 1.5,
    x: -12.360905154205394, 
    y: 1.4483785632828639, 
    z: 0.08354898399927778,
    onUpdate: () => {
      camera.lookAt(0, 0, 0); // adjust as needed
    }
  });
});
an3.addEventListener("click", () => {
  gsap.to(camera.position, {
    duration: 1.5,
    x: 3.6472153095017144e-9, y: 13.369316876846796, z: -0.000012369864677153967,
    onUpdate: () => {
      camera.lookAt(0, 0, 0); // adjust as needed
    }
  });
});
an4.addEventListener("click", () => {
  gsap.to(camera.position, {
    duration: 1.5,
    x: 0.47202856135103904,
    y: 1.1269921745418576,
    z: -12.3596546078308,
    onUpdate: () => {
      camera.lookAt(0, 0, 0); // adjust as needed
    }
  });
});
an5.addEventListener("click", () => {
  gsap.to(camera.position, {
    duration: 1.5,
    x: 12.360905154205394, 
    y: 1.4483785632828639, 
    z: 0.08354898399927778,
    onUpdate: () => {
      camera.lookAt(0, 0, 0); // adjust as needed
    }
  });
});
an6.addEventListener("click", () => {
  gsap.to(camera.position, {
    duration: 1.5,
    x: 3.6472153095017144e-9, y: -13.369316876846796, z: -0.000012369864677153967,
    onUpdate: () => {
      camera.lookAt(0, 0, 0); // adjust as needed
    }
  });
});
document.getElementById('cros1').addEventListener('click',()=>
    moris.classList.add('disp'),
)

updateCameraOnResize();
window.addEventListener('resize', updateCameraOnResize);
animate();