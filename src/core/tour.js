import * as THREE from 'three';
import { buildPerson, setPose } from '../scene/peopleModel-street.js';
import { DATUM } from '../scene/shop.js';

export const WORLD_SCALE = 1.55; // ~90%+ true-to-life spacious rural Vietnamese depot scale

// Smooth guided walking waypoints (local coords; scaled by WORLD_SCALE)
const TOUR_STOPS = [
  { pos: [1.15, 0, 3.15], look: [0.3, 1.4, 0.2], label: 'Mặt tiền & Cổng vòm Đại lý Lí An' },
  { pos: [1.05, 0, 1.15], look: [-0.95, 1.2, -1.1], label: 'Bước qua cổng vòm Hoptri Super Humic' },
  { pos: [-0.85, 0, 0.25], look: [-1.05, 1.1, -1.25], label: 'Quầy tiếp tân Hoptri Summit & bonsai mini' },
  { pos: [-2.15, 0, -0.85], look: [-4.2, 1.0, -2.2], label: 'Sảnh rổ thuốc đủ màu & dãy tủ BAYER · HB-101' },
  { pos: [-2.35, 0, -3.55], look: [-4.3, 1.2, -4.3], label: 'Kệ sắt V lỗ, kệ Syngenta & lối vào kho' },
  { pos: [-3.05, 0, -6.20], look: [-5.0, 1.2, -7.2], label: 'Kho phân bón — bao Kraft, bao xanh & cân Nhơn Hòa' },
  { pos: [-4.10, 0, -11.50], look: [-4.1, 1.2, -16.5], label: 'Hành lang kho sâu — YaraMila, xe đẩy đỏ & bao xám' },
  { pos: [-4.10, 0, -17.40], look: [-4.1, 1.3, -21.0], label: 'Cửa hậu kho nhìn thẳng ra đồng lúa miền Tây' },
  { pos: [-4.10, 0, -12.80], look: [-4.0, 1.3, -4.5], label: 'Quay nhìn toàn cảnh hành lang kho thuốc dài 30m' },
  { pos: [-2.35, 0, -3.35], look: [-1.4, 1.2, -1.4], label: 'Trở ra sảnh bán hàng & quầy tính tiền' },
];

// Solid 2D AABB collision boxes in local coordinates [minX, maxX, minZ, maxZ]
// Widened shop & warehouse (x: -9.0..+0.8) has a MASSIVE 3.3 m to 4.8 m wide unobstructed central avenue!
const OBSTACLES = [
  // L-shaped checkout counter (recessed cleanly at z = -3.98..-1.38 for a huge open front porch!)
  [-1.78, 0.05, -3.98, -1.38],
  // Wide beige TV / clock / hand-tools pillar
  [-2.15, -1.62, -4.36, -3.88],
  // Water dispenser & standing fan
  [0.12, 0.60, -2.00, -0.85],
  // Stainless-steel front table + stacked entrance cartons (tucked left at x = -6.4..-4.6)
  [-6.42, -4.55, -0.94, 0.16],
  // Sea of 20 colorful plastic baskets (tucked left at x = -7.8..-5.0)
  [-7.80, -5.02, -3.44, -1.22],
  // Left-wall BAYER / hoptri / HB-101 cabinets + green Syngenta stand
  [-8.95, -7.85, -4.08, -0.35],
  // Slotted-angle metal racks (kệ sắt V lỗ, tucked left at x = -7.2..-5.3)
  [-7.20, -5.30, -4.40, -3.90],
  // Deep left fertilizer bag stacks + 3rd inner row (leaving wide 3.8 m central aisle x = -6.1..-2.2!)
  [-8.95, -6.22, -18.10, -8.75],
  [-8.95, -7.05, -8.75, -4.10],
  [-6.95, -6.20, -8.05, -6.52],
  // Deep right warehouse stacks + 3rd inner row
  [-2.25, 0.68, -18.10, -12.25],
  [-1.90, 0.68, -12.25, -5.05],
  // Left & right warehouse walls (solid, extending to z = -18.9)
  [-9.25, -8.82, -18.90, 0.85],
  [0.64, 1.02, -18.90, -0.95],
  // Rear warehouse wall (split cleanly around the WIDE open rear doorway x: -5.25..-2.95 at z = -18.7!)
  [-9.25, -5.25, -18.95, -18.52],
  [-2.95, 1.02, -18.95, -18.52],
  // Front perimeter fence sections (leaving wide open archway x: -0.2..+3.2!)
  [-4.45, -0.22, 1.00, 1.48],
  [3.22, 8.60, 1.00, 1.48],
  // Parked motorbikes on left sidewalk
  [-5.65, -3.90, 1.75, 2.85],
  // Cream house (shifted +2.4 m right -> wide open sunlit side lane x = 1.0..4.0 into the Bonsai Garden!)
  [4.05, 10.60, -5.85, -1.45],
  [4.50, 5.50, -1.65, -0.65],
  [7.40, 8.40, -1.65, -0.65],
  // Natural eco koi & lotus pond in center of Bonsai Garden
  [4.85, 8.95, -11.75, -8.65],
];

// Interactive shopping & checkout zones (updated to match widened 9.8 m shop & warehouse!)
export const SHOP_ZONES = [
  {
    id: 'checkout',
    type: 'checkout',
    pos: [-0.95, -0.65],
    radius: 2.35,
    title: 'Quầy tính tiền Đại lý Lí An',
    prompt: 'Thanh toán tại quầy',
    items: [],
  },
  {
    id: 'baskets',
    type: 'shelf',
    pos: [-4.65, -2.25],
    radius: 2.45,
    title: 'Sảnh rổ thuốc BVTV',
    prompt: 'Chọn gói thuốc trong rổ',
    items: [
      { id: 'oshin', name: 'Thuốc trừ sâu Oshin 20WP (gói)', price: 45000 },
      { id: 'daoon', name: 'Thuốc đặc trị đạo ôn lúa (gói)', price: 55000 },
    ],
  },
  {
    id: 'cabinets',
    type: 'shelf',
    pos: [-7.45, -2.05],
    radius: 2.35,
    title: 'Tủ BAYER · Hoptri · HB-101',
    prompt: 'Xem tủ thuốc BAYER / HB-101',
    items: [
      { id: 'hb101', name: 'Dưỡng cây HB-101 Nhật Bản (chai)', price: 120000 },
      { id: 'movento', name: 'Movento 150OD đặc trị rệp sáp', price: 185000 },
    ],
  },
  {
    id: 'racks',
    type: 'shelf',
    pos: [-5.85, -4.55],
    radius: 2.35,
    title: 'Kệ Syngenta & Kệ sắt V lỗ',
    prompt: 'Chọn thuốc trên kệ sắt',
    items: [
      { id: 'kenbast', name: 'Thuốc trừ cỏ Kenbast 15SL (chai đỏ)', price: 95000 },
      { id: 'humic', name: 'Hoptri Super Humic 70% (gói 1kg)', price: 160000 },
    ],
  },
  {
    id: 'warehouse',
    type: 'shelf',
    pos: [-4.15, -11.5],
    radius: 7.2,
    title: 'Kho phân bón & thuốc BVTV',
    prompt: 'Lấy bao phân bón trong kho',
    items: [
      { id: 'yaramila', name: 'Phân bón YaraMila Complex (bao 25kg)', price: 420000 },
      { id: 'kraft', name: 'Phân hữu cơ bao Kraft (bao 25kg)', price: 280000 },
    ],
  },
];

const TOUR_DURATION = 34;

function buildPlayerAvatar(world, mats) {
  const player = buildPerson(mats, {
    skin: mats.skinTones[0],
    hair: mats.hair[0],
    top: mats.cloth.teal,
    bottom: mats.cloth.navy,
    sleeve: 'short',
    scale: [0.95, 0.95, 0.95],
  });
  const cone = new THREE.Mesh(new THREE.ConeGeometry(0.28, 0.16, 16, 1, true), mats.nonLa);
  cone.position.set(0, 0.21, 0.01);
  cone.rotation.x = -0.06;
  cone.castShadow = true;
  player.joints.head.add(cone);
  player.group.visible = false;
  world.add(player.group);
  return player;
}

function playerWalkPose(phase, isMoving) {
  if (!isMoving) {
    return {
      torso: [0.02, 0, 0],
      head: [0, 0, 0],
      hipL: [0, 0, 0],
      hipR: [0, 0, 0],
      kneeL: [0.04, 0, 0],
      kneeR: [0.04, 0, 0],
      shoulderL: [0, 0, 0.08],
      shoulderR: [0, 0, -0.08],
      elbowL: [-0.15, 0, 0],
      elbowR: [-0.15, 0, 0],
    };
  }
  const s = Math.sin(phase);
  const c = Math.cos(phase);
  return {
    torso: [0.06, -s * 0.06, 0],
    head: [-0.02, s * 0.04, 0],
    hipL: [-s * 0.54, 0, 0],
    hipR: [s * 0.54, 0, 0],
    kneeL: [Math.max(0, c * 0.55) + 0.06, 0, 0],
    kneeR: [Math.max(0, -c * 0.55) + 0.06, 0, 0],
    shoulderL: [s * 0.44, 0, 0.06],
    shoulderR: [-s * 0.44, 0, -0.06],
    elbowL: [-0.22 - Math.max(0, -s) * 0.25, 0, 0],
    elbowR: [-0.22 - Math.max(0, s) * 0.25, 0, 0],
  };
}

export function createTourController(camera, canvas, orbit, world, mats, { onLabel = () => {}, onZoneChange = () => {} } = {}) {
  let active = false;
  let autoWalk = false;
  let thirdPerson = true; // DEFAULT: Góc nhìn xa theo nhân vật (3rd-person follow cam)!
  let tourT = 0;
  let lastZoneId = null;

  const S = WORLD_SCALE;
  const PLAYER_RADIUS = 0.24; // nimble collision radius for smooth walking around aisles

  const player = buildPlayerAvatar(world, mats);
  let glbPlayer = null;
  let glbPlayerMixer = null;
  let glbPlayerWalk = null;

  function setPlayerGlb(playerObj, walkClip) {
    if (!playerObj) return;
    glbPlayer = playerObj;
    const head = glbPlayer.getObjectByName('Head');
    if (head) {
      const cone = new THREE.Mesh(new THREE.ConeGeometry(0.28, 0.16, 16, 1, true), mats.nonLa);
      cone.position.set(0, 0.18, 0.01);
      cone.rotation.x = -0.06;
      cone.castShadow = true;
      head.add(cone);
    }
    glbPlayer.visible = active && thirdPerson;
    world.add(glbPlayer);
    if (walkClip) {
      glbPlayerMixer = new THREE.AnimationMixer(glbPlayer);
      glbPlayerWalk = glbPlayerMixer.clipAction(walkClip);
      glbPlayerWalk.play();
    }
    player.group.visible = false;
  }

  const posCurve = new THREE.CatmullRomCurve3(
    TOUR_STOPS.map((s) => new THREE.Vector3(s.pos[0], 0, s.pos[2])),
    true,
    'catmullrom',
    0.35
  );

  // Player position in LOCAL world coordinates (so it stays 100% locked to shop/OBSTACLES!)
  const localPos = new THREE.Vector3(0.85, DATUM.WALK_Y, 2.25);
  let yaw = 0.42; // 0 = facing -Z (into shop)
  let pitch = -0.14;
  let walkPhase = 0;
  const smoothCamPos = new THREE.Vector3();
  const smoothLookAt = new THREE.Vector3();
  let camInit = false;

  const keys = new Set();
  const virtualInput = { forward: false, back: false, turnLeft: false, turnRight: false };
  let dragging = false;
  let lastX = 0;
  let lastY = 0;

  function collidesAt(x, z) {
    // Outer walkable boundary (covers extra-long warehouse + Bonsai Garden behind the house!)
    if (x < -8.60 || x > 11.2 || z < -19.8 || z > 4.2) return true;
    for (const [minX, maxX, minZ, maxZ] of OBSTACLES) {
      if (
        x + PLAYER_RADIUS > minX &&
        x - PLAYER_RADIUS < maxX &&
        z + PLAYER_RADIUS > minZ &&
        z - PLAYER_RADIUS < maxZ
      ) {
        return true;
      }
    }
    return false;
  }

  function tryMoveLocal(dx, dz) {
    let moved = false;
    if (dx !== 0 && !collidesAt(localPos.x + dx, localPos.z)) {
      localPos.x += dx;
      moved = true;
    }
    if (dz !== 0 && !collidesAt(localPos.x, localPos.z + dz)) {
      localPos.z += dz;
      moved = true;
    }
    localPos.y = localPos.z < 1.05 ? DATUM.SHOP_Y : DATUM.WALK_Y;
    return moved;
  }

  function stopAutoIfManual() {
    if (autoWalk) autoWalk = false;
  }

  function onKeyDown(e) {
    if (!active) return;
    const k = e.key.toLowerCase();
    if (['w', 'a', 's', 'd', 'arrowup', 'arrowdown', 'arrowleft', 'arrowright'].includes(k)) {
      e.preventDefault();
      keys.add(k);
      stopAutoIfManual();
    }
  }

  function onKeyUp(e) {
    keys.delete(e.key.toLowerCase());
  }

  function onPointerDown(e) {
    if (!active || e.target !== canvas) return;
    dragging = true;
    lastX = e.clientX;
    lastY = e.clientY;
    stopAutoIfManual();
  }

  function onPointerMove(e) {
    if (!active || !dragging) return;
    const dx = e.clientX - lastX;
    const dy = e.clientY - lastY;
    lastX = e.clientX;
    lastY = e.clientY;
    yaw -= dx * 0.0052;
    pitch = Math.max(-0.58, Math.min(0.45, pitch - dy * 0.0038));
  }

  function onPointerUp() {
    dragging = false;
  }

  window.addEventListener('keydown', onKeyDown);
  window.addEventListener('keyup', onKeyUp);
  canvas.addEventListener('pointerdown', onPointerDown);
  window.addEventListener('pointermove', onPointerMove);
  window.addEventListener('pointerup', onPointerUp);

  function checkNearestZone() {
    let best = null;
    let bestDist = Infinity;
    for (const z of SHOP_ZONES) {
      const d = Math.hypot(localPos.x - z.pos[0], localPos.z - z.pos[1]);
      if (d <= z.radius && d < bestDist) {
        best = z;
        bestDist = d;
      }
    }
    const nextId = best ? best.id : null;
    if (nextId !== lastZoneId) {
      lastZoneId = nextId;
      onZoneChange(best);
    }
    return best;
  }

  function enter() {
    active = true;
    autoWalk = false;
    thirdPerson = true;
    localPos.set(0.85, DATUM.WALK_Y, 2.25);
    yaw = 0.42;
    pitch = -0.14;
    walkPhase = 0;
    camInit = false;
    lastZoneId = null;
    player.group.visible = !glbPlayer;
    if (glbPlayer) glbPlayer.visible = true;
    orbit.controls.enabled = false;
    camera.fov = 72; // Wide, spacious human/third-person FOV!
    camera.updateProjectionMatrix();
    onLabel('Đóng vai khách hàng · Góc nhìn xa');
    update(0);
  }

  function exit() {
    if (!active) return;
    active = false;
    autoWalk = false;
    keys.clear();
    Object.keys(virtualInput).forEach((k) => { virtualInput[k] = false; });
    dragging = false;
    lastZoneId = null;
    player.group.visible = false;
    if (glbPlayer) glbPlayer.visible = false;
    camera.fov = 26;
    camera.updateProjectionMatrix();
    orbit.controls.enabled = true;
    orbit.reset();
    onLabel('');
    onZoneChange(null);
  }

  function setAutoWalk(enabled) {
    autoWalk = Boolean(enabled);
  }

  function toggleViewMode() {
    thirdPerson = !thirdPerson;
    player.group.visible = active && thirdPerson;
    camInit = false;
    return thirdPerson;
  }

  function setVirtual(name, pressed) {
    if (name in virtualInput) {
      virtualInput[name] = Boolean(pressed);
      if (pressed) stopAutoIfManual();
    }
  }

  function update(dt) {
    if (!active) return;

    let isMoving = false;

    if (autoWalk) {
      tourT = (tourT + dt) % TOUR_DURATION;
      const u = tourT / TOUR_DURATION;
      const p = posCurve.getPointAt(u);
      const ahead = posCurve.getPointAt((u + 0.015) % 1);
      localPos.x = p.x;
      localPos.z = p.z;
      localPos.y = localPos.z < 1.05 ? DATUM.SHOP_Y : DATUM.WALK_Y;
      yaw = Math.atan2(-(ahead.x - p.x), -(ahead.z - p.z));
      isMoving = true;
      walkPhase += dt * 7.2;
      const stopIdx = Math.min(TOUR_STOPS.length - 1, Math.floor(u * TOUR_STOPS.length));
      onLabel(TOUR_STOPS[stopIdx].label);
    } else {
      const turnSpeed = 2.1;
      if (keys.has('arrowleft') || virtualInput.turnLeft) yaw += turnSpeed * dt;
      if (keys.has('arrowright') || virtualInput.turnRight) yaw -= turnSpeed * dt;

      const speed = 2.85; // local m/s (= ~4.4 m/s world)
      const fx = -Math.sin(yaw);
      const fz = -Math.cos(yaw);
      const rx = Math.cos(yaw);
      const rz = -Math.sin(yaw);
      let mx = 0;
      let mz = 0;
      if (keys.has('w') || keys.has('arrowup') || virtualInput.forward) { mx += fx; mz += fz; }
      if (keys.has('s') || keys.has('arrowdown') || virtualInput.back) { mx -= fx; mz -= fz; }
      if (keys.has('d')) { mx += rx; mz += rz; }
      if (keys.has('a')) { mx -= rx; mz -= rz; }

      const len = Math.hypot(mx, mz);
      if (len > 1e-4) {
        const step = (speed * dt) / len;
        isMoving = tryMoveLocal(mx * step, mz * step);
        if (isMoving) walkPhase += dt * 7.4;
      }

      const zone = checkNearestZone();
      onLabel(zone ? zone.title : (thirdPerson ? 'Khách hàng · Góc nhìn xa' : 'Khách hàng · Góc nhìn thứ 1'));
    }

    // Update playable 3D Customer Avatar pose & transform
    if (glbPlayer) {
      glbPlayer.position.copy(localPos);
      glbPlayer.rotation.y = yaw + Math.PI;
      glbPlayer.visible = thirdPerson;
      player.group.visible = false;
      if (glbPlayerMixer && glbPlayerWalk) {
        glbPlayerWalk.timeScale = isMoving ? 1.25 : 0;
        if (!isMoving) glbPlayerWalk.time = 0;
        glbPlayerMixer.update(Math.max(0.001, dt));
      }
    } else {
      player.group.position.copy(localPos);
      // peopleModel faces +Z; yaw=0 faces -Z, so add PI
      player.group.rotation.y = yaw + Math.PI;
      setPose(player, playerWalkPose(walkPhase, isMoving));
      player.group.visible = thirdPerson;
    }

    const wx = localPos.x * S;
    const wy = localPos.y * S;
    const wz = localPos.z * S;

    if (thirdPerson) {
      // Spacious Third-Person Follow Camera (smoothly pulled behind & above the customer!)
      const camDist = 3.25 * S;
      const camHeight = (2.45 - pitch * 1.1) * S;
      let targetCamX = wx + Math.sin(yaw) * camDist;
      let targetCamZ = wz + Math.cos(yaw) * camDist;
      let targetCamY = Math.max(wy + 1.4 * S, Math.min(wy + 3.4 * S, wy + camHeight));
      // Keep third-person camera cleanly inside outer warehouse walls when indoors
      if (localPos.z < 0.8 && localPos.x < 0.7) {
        targetCamX = Math.max(-8.6 * S, Math.min(0.55 * S, targetCamX));
        targetCamZ = Math.max(-18.3 * S, targetCamZ);
      }
      const desiredPos = new THREE.Vector3(targetCamX, targetCamY, targetCamZ);
      const desiredLook = new THREE.Vector3(
        wx - Math.sin(yaw) * 1.4 * S,
        wy + 1.38 * S,
        wz - Math.cos(yaw) * 1.4 * S
      );
      if (!camInit) {
        smoothCamPos.copy(desiredPos);
        smoothLookAt.copy(desiredLook);
        camInit = true;
      } else {
        const k = 1 - Math.exp(-9 * Math.max(0.016, dt));
        smoothCamPos.lerp(desiredPos, k);
        smoothLookAt.lerp(desiredLook, k);
      }
      camera.position.copy(smoothCamPos);
      camera.lookAt(smoothLookAt);
    } else {
      // Wide First-Person View (72° FOV)
      const bob = isMoving ? Math.sin(walkPhase) * 0.04 : 0;
      const eyeY = wy + 1.50 * S + bob;
      camera.position.set(wx, eyeY, wz);
      const lookDir = new THREE.Vector3(
        -Math.sin(yaw) * Math.cos(pitch),
        Math.sin(pitch),
        -Math.cos(yaw) * Math.cos(pitch)
      );
      camera.lookAt(camera.position.clone().add(lookDir));
    }

    if (autoWalk) checkNearestZone();
  }

  return {
    enter,
    exit,
    toggle() {
      if (active) exit();
      else enter();
      return active;
    },
    isActive: () => active,
    isAutoWalk: () => autoWalk,
    isThirdPerson: () => thirdPerson,
    setAutoWalk,
    toggleViewMode,
    setVirtual,
    setPlayerGlb,
    update,
  };
}
