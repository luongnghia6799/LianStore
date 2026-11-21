import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { roundedBoxGeometry } from './core/geometry.js';

const canvas = document.getElementById('stage');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, preserveDrawingBuffer: true });
renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const scene = new THREE.Scene();

const hemi = new THREE.HemisphereLight(0xffffff, 0xc8bca8, 1.45);
scene.add(hemi);

const key = new THREE.DirectionalLight(0xfff8ee, 1.65);
key.position.set(2.8, 4.8, 4.2);
key.castShadow = true;
key.shadow.mapSize.set(1024, 1024);
key.shadow.camera.near = 1;
key.shadow.camera.far = 15;
key.shadow.camera.left = -2.2;
key.shadow.camera.right = 2.2;
key.shadow.camera.top = 2.6;
key.shadow.camera.bottom = -0.6;
key.shadow.bias = -0.0004;
scene.add(key);

const rim = new THREE.DirectionalLight(0xcbe4ff, 0.85);
rim.position.set(-3.2, 3.2, -3.0);
scene.add(rim);

// Clean VRoid Studio turntable pedestal
const ped = new THREE.Mesh(
  new THREE.CylinderGeometry(0.86, 0.94, 0.10, 48),
  new THREE.MeshStandardMaterial({ color: 0xf4efe4, roughness: 0.85 })
);
ped.position.y = -0.05;
ped.receiveShadow = true;
scene.add(ped);

const ring = new THREE.Mesh(
  new THREE.TorusGeometry(0.87, 0.014, 8, 48),
  new THREE.MeshStandardMaterial({ color: 0x4b7496, roughness: 0.5 })
);
ring.rotation.x = Math.PI * 0.5;
ring.position.y = 0.004;
scene.add(ring);

const camera = new THREE.PerspectiveCamera(30, 16 / 9, 0.1, 50);
camera.position.set(0.68, 1.32, 3.05);

const controls = new OrbitControls(camera, canvas);
controls.target.set(0, 0.96, 0);
controls.enableDamping = true;
controls.dampingFactor = 0.08;
controls.minDistance = 0.75;
controls.maxDistance = 6.5;
controls.maxPolarAngle = Math.PI * 0.52;
controls.update();

// Crisp Mekong checkered khăn rằn texture
function makeKhanRanTex(rx, ry) {
  const c = document.createElement('canvas');
  c.width = 128;
  c.height = 128;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#f2ede0';
  ctx.fillRect(0, 0, 128, 128);
  const step = 16;
  for (let y = 0; y < 128; y += step) {
    for (let x = 0; x < 128; x += step) {
      const a = (x / step) % 2 === 0;
      const b = (y / step) % 2 === 0;
      if (a && b) ctx.fillStyle = '#25262a';
      else if (a || b) ctx.fillStyle = '#6c7078';
      else continue;
      ctx.fillRect(x, y, step, step);
    }
  }
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(rx, ry);
  return tex;
}

const state = {
  shirtTint: '#7a9ec2', // Casual farmer faded denim
  khanRan: true,
  hatMode: 'back', // 'back' | 'head' | 'none'
  animMode: 'idle', // 'idle' | 'walk'
};

let vrmRoot = null;
let bones = {};
let topMats = [];
let bottomMats = [];
let scarfGroup = null;
let backHatGroup = null;
let headHatGroup = null;

function applyOutfit() {
  for (const m of topMats) {
    m.color.set(state.shirtTint);
  }
  for (const m of bottomMats) {
    // Warm earthy casual khaki/denim tint on pants
    m.color.set('#b8a48c');
  }
  if (scarfGroup) scarfGroup.visible = state.khanRan;
  if (backHatGroup) backHatGroup.visible = state.hatMode === 'back';
  if (headHatGroup) headHatGroup.visible = state.hatMode === 'head';
}

function buildNonLaMesh() {
  const g = new THREE.Group();
  const mat = new THREE.MeshStandardMaterial({ color: 0xe2ca88, roughness: 0.78, side: THREE.DoubleSide });
  const cone = new THREE.Mesh(new THREE.ConeGeometry(0.27, 0.155, 24, 1, true), mat);
  cone.castShadow = true;
  g.add(cone);
  // Subtle bamboo rim
  const rimM = new THREE.Mesh(
    new THREE.TorusGeometry(0.27, 0.007, 6, 24),
    new THREE.MeshStandardMaterial({ color: 0x9c7b48, roughness: 0.8 })
  );
  rimM.rotation.x = Math.PI * 0.5;
  rimM.position.y = -0.077;
  g.add(rimM);
  return g;
}

const loader = new GLTFLoader();
loader.load('./public/assets/vroid-male.vrm', (gltf) => {
  vrmRoot = gltf.scene;
  // VRM 0.x faces -Z by default -> rotate PI to face +Z!
  vrmRoot.rotation.y = Math.PI;

  vrmRoot.traverse((obj) => {
    if (!obj.isMesh) return;
    obj.castShadow = true;
    obj.receiveShadow = true;
    obj.frustumCulled = false;
    const matsArr = Array.isArray(obj.material) ? obj.material : [obj.material];
    for (const m of matsArr) {
      if (!m) continue;
      if (/Tops/i.test(m.name)) topMats.push(m);
      if (/Bottoms/i.test(m.name)) bottomMats.push(m);
    }
  });

  // Collect standard VRM humanoid bones
  const names = [
    'J_Bip_C_Hips', 'J_Bip_C_Spine', 'J_Bip_C_Chest', 'J_Bip_C_UpperChest',
    'J_Bip_C_Neck', 'J_Bip_C_Head',
    'J_Bip_L_UpperArm', 'J_Bip_L_LowerArm', 'J_Bip_L_Hand',
    'J_Bip_R_UpperArm', 'J_Bip_R_LowerArm', 'J_Bip_R_Hand',
    'J_Bip_L_UpperLeg', 'J_Bip_L_LowerLeg', 'J_Bip_L_Foot',
    'J_Bip_R_UpperLeg', 'J_Bip_R_LowerLeg', 'J_Bip_R_Foot',
  ];
  for (const n of names) {
    const b = vrmRoot.getObjectByName(n);
    if (b) bones[n] = b;
  }

  // Ground feet accurately on pedestal y = 0
  vrmRoot.updateMatrixWorld(true);
  const box = new THREE.Box3().setFromObject(vrmRoot);
  if (Number.isFinite(box.min.y)) {
    vrmRoot.position.y -= box.min.y;
  }

  // Attach Mekong Khăn Rằn to UpperChest / Chest (note: VRM local front is -Z!)
  const chestBone = bones.J_Bip_C_UpperChest || bones.J_Bip_C_Chest || bones.J_Bip_C_Spine;
  if (chestBone) {
    scarfGroup = new THREE.Group();
    const ringMat = new THREE.MeshStandardMaterial({ map: makeKhanRanTex(8, 1.5), roughness: 0.85 });
    const tailMat = new THREE.MeshStandardMaterial({ map: makeKhanRanTex(1.5, 4.5), roughness: 0.85 });
    const collar = new THREE.Mesh(new THREE.TorusGeometry(0.082, 0.022, 12, 24), ringMat);
    collar.position.set(0, 0.115, -0.005);
    collar.rotation.x = Math.PI * 0.47;
    collar.castShadow = true;
    scarfGroup.add(collar);

    const t1 = new THREE.Mesh(roundedBoxGeometry(0.048, 0.21, 0.014, 0.006, 2), tailMat);
    t1.position.set(0.046, 0.00, -0.118);
    t1.rotation.set(0.10, 0.12, -0.10);
    t1.castShadow = true;
    scarfGroup.add(t1);

    const t2 = new THREE.Mesh(roundedBoxGeometry(0.046, 0.18, 0.014, 0.006, 2), tailMat);
    t2.position.set(-0.044, 0.015, -0.120);
    t2.rotation.set(0.08, -0.14, 0.12);
    t2.castShadow = true;
    scarfGroup.add(t2);
    chestBone.add(scarfGroup);

    // Nón lá slung casually on back (+Z in VRM local space!)
    backHatGroup = buildNonLaMesh();
    backHatGroup.position.set(0.0, 0.02, 0.155);
    backHatGroup.rotation.set(1.38, 0.05, 0.12);
    chestBone.add(backHatGroup);
  }

  // Nón lá worn on Head bone
  if (bones.J_Bip_C_Head) {
    headHatGroup = buildNonLaMesh();
    headHatGroup.position.set(0, 0.195, -0.01);
    headHatGroup.rotation.x = 0.06;
    bones.J_Bip_C_Head.add(headHatGroup);
  }

  applyOutfit();
  scene.add(vrmRoot);
});

function resize() {
  const w = Math.max(1, window.innerWidth);
  const h = Math.max(1, window.innerHeight);
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
}
window.addEventListener('resize', resize);
resize();

// UI Controls
document.querySelectorAll('[data-shirt]').forEach((btn) => {
  btn.addEventListener('click', () => {
    state.shirtTint = btn.dataset.shirt;
    document.querySelectorAll('[data-shirt]').forEach((b) => b.classList.toggle('active', b === btn));
    applyOutfit();
  });
});

document.getElementById('btn-scarf')?.addEventListener('click', (e) => {
  state.khanRan = !state.khanRan;
  e.currentTarget.classList.toggle('active', state.khanRan);
  applyOutfit();
});

document.getElementById('btn-hat')?.addEventListener('click', (e) => {
  const order = ['back', 'head', 'none'];
  state.hatMode = order[(order.indexOf(state.hatMode) + 1) % order.length];
  const labels = { back: 'Nón lá: Đeo lưng', head: 'Nón lá: Đội đầu', none: 'Nón lá: Bỏ' };
  e.currentTarget.textContent = labels[state.hatMode];
  applyOutfit();
});

document.getElementById('btn-pose')?.addEventListener('click', (e) => {
  state.animMode = state.animMode === 'idle' ? 'walk' : 'idle';
  e.currentTarget.textContent = state.animMode === 'walk' ? 'Dáng: Bước đi' : 'Dáng: Đứng tự nhiên';
  e.currentTarget.classList.toggle('active', state.animMode === 'walk');
});

document.getElementById('btn-face')?.addEventListener('click', () => {
  camera.position.set(0.14, 1.48, 0.92);
  controls.target.set(0, 1.44, 0);
  controls.update();
});

document.getElementById('btn-full')?.addEventListener('click', () => {
  camera.position.set(0.68, 1.32, 3.05);
  controls.target.set(0, 0.96, 0);
  controls.update();
});

let t = 0;
let last = performance.now();
function tick(now) {
  requestAnimationFrame(tick);
  const dt = Math.min(0.05, (now - last) / 1000);
  last = now;
  t += dt;

  if (vrmRoot) {
    const b = Math.sin(t * 1.8);
    // Natural relaxed arms down from T-pose (VRM 0.x: L arm Z = -1.25 down, R arm Z = +1.25 down!)
    if (state.animMode === 'walk') {
      const s = Math.sin(t * 5.4);
      const c = Math.cos(t * 5.4);
      if (bones.J_Bip_L_UpperArm) bones.J_Bip_L_UpperArm.rotation.set(s * 0.35, 0, -1.28);
      if (bones.J_Bip_R_UpperArm) bones.J_Bip_R_UpperArm.rotation.set(-s * 0.35, 0, 1.28);
      if (bones.J_Bip_L_LowerArm) bones.J_Bip_L_LowerArm.rotation.set(0, 0.25 + Math.max(0, -s) * 0.2, 0);
      if (bones.J_Bip_R_LowerArm) bones.J_Bip_R_LowerArm.rotation.set(0, -0.25 - Math.max(0, s) * 0.2, 0);
      if (bones.J_Bip_L_UpperLeg) bones.J_Bip_L_UpperLeg.rotation.set(-s * 0.42, 0, 0);
      if (bones.J_Bip_R_UpperLeg) bones.J_Bip_R_UpperLeg.rotation.set(s * 0.42, 0, 0);
      if (bones.J_Bip_L_LowerLeg) bones.J_Bip_L_LowerLeg.rotation.set(-Math.max(0, c * 0.50), 0, 0);
      if (bones.J_Bip_R_LowerLeg) bones.J_Bip_R_LowerLeg.rotation.set(-Math.max(0, -c * 0.50), 0, 0);
      if (bones.J_Bip_C_Spine) bones.J_Bip_C_Spine.rotation.set(-0.04, s * 0.06, 0);
      if (bones.J_Bip_C_Head) bones.J_Bip_C_Head.rotation.set(0, -s * 0.05, 0);
    } else {
      if (bones.J_Bip_L_UpperArm) bones.J_Bip_L_UpperArm.rotation.set(0.05, 0.08, -1.26 - 0.02 * b);
      if (bones.J_Bip_R_UpperArm) bones.J_Bip_R_UpperArm.rotation.set(0.05, -0.08, 1.26 + 0.02 * b);
      if (bones.J_Bip_L_LowerArm) bones.J_Bip_L_LowerArm.rotation.set(0, 0.22, -0.08);
      if (bones.J_Bip_R_LowerArm) bones.J_Bip_R_LowerArm.rotation.set(0, -0.22, 0.08);
      if (bones.J_Bip_L_UpperLeg) bones.J_Bip_L_UpperLeg.rotation.set(0.02, 0, -0.03);
      if (bones.J_Bip_R_UpperLeg) bones.J_Bip_R_UpperLeg.rotation.set(-0.02, 0, 0.03);
      if (bones.J_Bip_L_LowerLeg) bones.J_Bip_L_LowerLeg.rotation.set(-0.04, 0, 0);
      if (bones.J_Bip_R_LowerLeg) bones.J_Bip_R_LowerLeg.rotation.set(-0.04, 0, 0);
      if (bones.J_Bip_C_Spine) bones.J_Bip_C_Spine.rotation.set(0.015 * b, Math.sin(t * 0.65) * 0.04, 0);
      if (bones.J_Bip_C_Head) bones.J_Bip_C_Head.rotation.set(0.02 * b, Math.sin(t * 0.85) * 0.10, 0);
    }
  }

  controls.update();
  renderer.render(scene, camera);
}
requestAnimationFrame(tick);
