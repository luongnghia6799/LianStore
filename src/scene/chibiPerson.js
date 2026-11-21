import * as THREE from 'three';

/**
 * Super-Cute 3D Chibi Character Model (Nendoroid / Animal Crossing / Ghibli Chibi proportions ~1:2.2).
 * Big squishy round head, huge sparkling starry anime eyes, rosy oval blush, stubby pear-shaped body,
 * rounded mitten hands, cute boots, and bouncy hair with ahoge.
 * Keeps the exact joint names & sign convention of buildPerson / setPose!
 */
export const RIG = {
  hipY: 0.42,
  hipX: 0.095,
  thigh: 0.19,
  shin: 0.19,
  shoulderY: 0.30,
  shoulderX: 0.19,
  upperArm: 0.16,
  foreArm: 0.14,
  headY: 0.56,
};

const chibiFaceCache = new Map();

function getChibiFaceMaterial(skinMat, { eyeHex = '#232046', smile = 'happy' } = {}) {
  const skinHex = '#' + skinMat.color.getHexString();
  const key = `${skinHex}|${eyeHex}|${smile}`;
  if (chibiFaceCache.has(key)) return chibiFaceCache.get(key);

  const c = document.createElement('canvas');
  c.width = 256;
  c.height = 256;
  const ctx = c.getContext('2d');
  ctx.fillStyle = skinHex;
  ctx.fillRect(0, 0, 256, 256);

  // Big soft rosy chibi oval cheek blush!
  ctx.fillStyle = 'rgba(255, 128, 140, 0.46)';
  ctx.beginPath();
  ctx.ellipse(72, 168, 22, 12, 0, 0, Math.PI * 2);
  ctx.ellipse(184, 168, 22, 12, 0, 0, Math.PI * 2);
  ctx.fill();
  // Cute tiny blush diagonal highlight dashes
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.55)';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(64, 166); ctx.lineTo(70, 171);
  ctx.moveTo(74, 166); ctx.lineTo(80, 171);
  ctx.moveTo(176, 166); ctx.lineTo(182, 171);
  ctx.moveTo(186, 166); ctx.lineTo(192, 171);
  ctx.stroke();

  // Huge sparkling kawaii chibi eyes!
  const drawChibiEye = (cx, cy) => {
    // Big glossy white sclera
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.ellipse(cx, cy, 22, 26, 0, 0, Math.PI * 2);
    ctx.fill();
    // Huge deep iris
    ctx.fillStyle = eyeHex;
    ctx.beginPath();
    ctx.ellipse(cx, cy + 2, 18.5, 22.5, 0, 0, Math.PI * 2);
    ctx.fill();
    // Luminous jewel lower gradient crescent
    ctx.fillStyle = '#5e88e6';
    ctx.beginPath();
    ctx.arc(cx, cy + 10, 12, 0, Math.PI, false);
    ctx.fill();
    ctx.fillStyle = '#9ec8ff';
    ctx.beginPath();
    ctx.arc(cx, cy + 14, 6.5, 0, Math.PI, false);
    ctx.fill();
    // Twin bright white anime sparkle catchlights!
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(cx - 7, cy - 8, 6.8, 0, Math.PI * 2);
    ctx.arc(cx + 6.5, cy + 8, 3.2, 0, Math.PI * 2);
    ctx.arc(cx + 7.5, cy - 9, 2.2, 0, Math.PI * 2);
    ctx.fill();
    // Thick cute curved upper eyelash
    ctx.strokeStyle = '#18182a';
    ctx.lineWidth = 5.5;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.arc(cx, cy + 2, 23, Math.PI * 1.10, Math.PI * 1.90);
    ctx.stroke();
  };
  drawChibiEye(88, 134);
  drawChibiEye(168, 134);

  // Cute tiny curved eyebrows
  ctx.strokeStyle = '#382a38';
  ctx.lineWidth = 3.2;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(74, 98); ctx.quadraticCurveTo(88, 92, 102, 97);
  ctx.moveTo(154, 97); ctx.quadraticCurveTo(168, 92, 182, 98);
  ctx.stroke();

  // Super cute chibi mouth (w-cat smile or happy open smile!)
  ctx.strokeStyle = '#8e3c48';
  ctx.lineWidth = 3.5;
  ctx.lineCap = 'round';
  if (smile === 'cat') {
    ctx.beginPath();
    ctx.arc(121, 168, 7, 0.1 * Math.PI, 0.9 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(135, 168, 7, 0.1 * Math.PI, 0.9 * Math.PI);
    ctx.stroke();
  } else {
    ctx.fillStyle = '#f2828e';
    ctx.beginPath();
    ctx.arc(128, 166, 10, 0, Math.PI, false);
    ctx.fill();
    ctx.stroke();
  }

  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.needsUpdate = true;

  const mat = skinMat.clone();
  mat.color = new THREE.Color(0xffffff);
  mat.map = tex;
  mat.userData.outlineParameters = { visible: false };
  chibiFaceCache.set(key, mat);
  return mat;
}

function addMesh(parent, geo, mat, x, y, z, { rot = null, scale = null, cast = true } = {}) {
  const m = new THREE.Mesh(geo, mat);
  m.position.set(x, y, z);
  if (rot) m.rotation.set(rot[0], rot[1], rot[2]);
  if (scale) m.scale.set(scale[0], scale[1], scale[2]);
  m.castShadow = cast;
  m.receiveShadow = true;
  parent.add(m);
  return m;
}

function addChibiHair(head, hairMat, style = 'short') {
  // Big puffy rounded chibi hair volume
  addMesh(head, new THREE.SphereGeometry(0.282, 20, 16), hairMat, 0, 0.04, -0.025, { scale: [1.05, 1.0, 1.05] });

  // Chunky cute rounded chibi bangs across forehead
  const bangs = [
    [-0.14, 0.145, 0.215, 0.075, 0.15, 0.28, 0.36],
    [-0.05, 0.162, 0.238, 0.082, 0.16, 0.14, 0.12],
    [0.05, 0.162, 0.238, 0.082, 0.16, -0.12, -0.14],
    [0.14, 0.145, 0.215, 0.075, 0.15, -0.28, -0.36],
  ];
  for (const [bx, by, bz, r, h, rx, rz] of bangs) {
    addMesh(head, new THREE.ConeGeometry(r, h, 8), hairMat, bx, by, bz, { rot: [Math.PI + rx, 0, rz] });
  }
  // Cute puffy side locks hugging chubby cheeks
  addMesh(head, new THREE.SphereGeometry(0.088, 12, 10), hairMat, -0.235, -0.02, 0.085, { scale: [0.72, 1.45, 0.85] });
  addMesh(head, new THREE.SphereGeometry(0.088, 12, 10), hairMat, 0.235, -0.02, 0.085, { scale: [0.72, 1.45, 0.85] });

  // Signature bouncy ahoge (cọng tóc ngố!) on top of the head
  addMesh(head, new THREE.ConeGeometry(0.036, 0.14, 7), hairMat, 0.02, 0.34, 0.02, { rot: [0.22, 0, -0.42] });

  if (style === 'ponytail') {
    addMesh(head, new THREE.SphereGeometry(0.11, 12, 10), hairMat, 0, 0.09, -0.30);
    addMesh(head, new THREE.ConeGeometry(0.10, 0.26, 10), hairMat, 0, -0.04, -0.32, { rot: [Math.PI - 0.3, 0, 0] });
  } else if (style === 'bob') {
    addMesh(head, new THREE.CylinderGeometry(0.255, 0.285, 0.24, 18, 1, false, Math.PI * 0.22, Math.PI * 1.56), hairMat, 0, -0.06, -0.02);
  }
}

export function buildPerson(mats, opts = {}) {
  const cloth = mats.cloth ?? {};
  const skin = opts.skin ?? mats.skinTones?.[0];
  const hairMat = opts.hair ?? mats.hair?.[0] ?? cloth.charcoal;
  const top = opts.top ?? cloth.teal ?? cloth.blueWork;
  const bottom = opts.bottom ?? cloth.navy ?? cloth.charcoal;
  const shoe = opts.shoe ?? mats.leather ?? cloth.charcoal;
  const collarMat = mats.bone ?? mats.benchWhite ?? top;
  const faceMat = getChibiFaceMaterial(skin, { smile: opts.hairStyle === 'bob' ? 'cat' : 'happy' });

  const root = new THREE.Group();
  const J = {};
  const hairStyle = opts.hairStyle ?? 'short';

  // Stubby cute pelvis
  const pelvis = new THREE.Group();
  pelvis.position.y = RIG.hipY;
  root.add(pelvis);
  J.pelvis = pelvis;
  addMesh(pelvis, new THREE.SphereGeometry(0.175, 16, 12), bottom, 0, 0.01, 0, { scale: [1.05, 0.78, 0.92] });

  // Pear-shaped chubby chibi torso
  const torso = new THREE.Group();
  torso.position.y = 0.05;
  pelvis.add(torso);
  J.torso = torso;

  addMesh(torso, new THREE.CylinderGeometry(0.145, 0.188, 0.36, 16), top, 0, 0.18, 0, { scale: [1.04, 1, 0.88] });
  // Cute rounded Peter-Pan white collar!
  addMesh(torso, new THREE.TorusGeometry(0.125, 0.032, 10, 18), collarMat, 0, 0.345, 0.01, { rot: [Math.PI * 0.5 + 0.12, 0, 0] });
  // Tiny cute red/gold neckerchief button
  addMesh(torso, new THREE.SphereGeometry(0.034, 8, 8), mats.plasticRed ?? top, 0, 0.30, 0.145);

  // BIG SQUISHY CUTE CHIBI HEAD!
  const head = new THREE.Group();
  head.position.y = RIG.headY;
  torso.add(head);
  J.head = head;

  addMesh(head, new THREE.SphereGeometry(0.265, 22, 18), skin, 0, 0.0, 0, { scale: [1.06, 0.97, 0.98] });
  // Curved front face plate mapped with huge sparkling kawaii chibi eyes & blush
  const facePlate = new THREE.Mesh(
    new THREE.SphereGeometry(0.268, 22, 16, -Math.PI * 0.36, Math.PI * 0.72, Math.PI * 0.25, Math.PI * 0.55),
    faceMat
  );
  facePlate.rotation.y = Math.PI * 0.5;
  facePlate.position.set(0, 0.0, 0.003);
  facePlate.scale.set(1.06, 0.97, 0.98);
  head.add(facePlate);
  // Cute tiny round ears
  addMesh(head, new THREE.SphereGeometry(0.048, 10, 8), skin, -0.268, -0.02, -0.01, { scale: [0.55, 0.95, 0.75] });
  addMesh(head, new THREE.SphereGeometry(0.048, 10, 8), skin, 0.268, -0.02, -0.01, { scale: [0.55, 0.95, 0.75] });

  addChibiHair(head, hairMat, hairStyle);

  // Adorable stubby chibi arms + round mitten hands!
  for (const s of [-1, 1]) {
    const shoulder = new THREE.Group();
    shoulder.position.set(s * RIG.shoulderX, RIG.shoulderY, 0);
    torso.add(shoulder);
    addMesh(shoulder, new THREE.SphereGeometry(0.072, 12, 10), top, 0, -0.01, 0);
    addMesh(shoulder, new THREE.CapsuleGeometry(0.056, RIG.upperArm * 0.65, 6, 10), top, 0, -RIG.upperArm * 0.48, 0);

    const elbow = new THREE.Group();
    elbow.position.y = -RIG.upperArm;
    shoulder.add(elbow);
    addMesh(elbow, new THREE.CapsuleGeometry(0.048, RIG.foreArm * 0.55, 6, 10), skin, 0, -RIG.foreArm * 0.45, 0);

    const wrist = new THREE.Group();
    wrist.position.y = -RIG.foreArm;
    elbow.add(wrist);
    // Cute round chibi mitten paw!
    addMesh(wrist, new THREE.SphereGeometry(0.060, 12, 10), skin, 0, -0.02, 0.01);

    J[s < 0 ? 'shoulderL' : 'shoulderR'] = shoulder;
    J[s < 0 ? 'elbowL' : 'elbowR'] = elbow;
    J[s < 0 ? 'wristL' : 'wristR'] = wrist;
  }

  // Adorable stubby chibi legs + plump rounded boots!
  for (const s of [-1, 1]) {
    const hip = new THREE.Group();
    hip.position.set(s * RIG.hipX, -0.04, 0);
    pelvis.add(hip);
    addMesh(hip, new THREE.CapsuleGeometry(0.068, RIG.thigh * 0.55, 6, 10), bottom, 0, -RIG.thigh * 0.48, 0);

    const knee = new THREE.Group();
    knee.position.y = -RIG.thigh;
    hip.add(knee);
    addMesh(knee, new THREE.CapsuleGeometry(0.062, RIG.shin * 0.55, 6, 10), bottom, 0, -RIG.shin * 0.48, 0);

    const ankle = new THREE.Group();
    ankle.position.y = -RIG.shin;
    knee.add(ankle);
    // Plump cute rounded chibi shoe/boot!
    addMesh(ankle, new THREE.SphereGeometry(0.082, 12, 10), shoe, 0, 0.015, 0.035, { scale: [0.92, 0.72, 1.25] });

    J[s < 0 ? 'hipL' : 'hipR'] = hip;
    J[s < 0 ? 'kneeL' : 'kneeR'] = knee;
    J[s < 0 ? 'ankleL' : 'ankleR'] = ankle;
  }

  // Scale slightly so chibi sits comfortably at ~1.35 m cute-toy height beside the shop counter & bench!
  const sc = opts.scale ?? [1.15, 1.15, 1.15];
  root.scale.set(sc[0] * 1.12, sc[1] * 1.12, sc[2] * 1.12);
  return { group: root, joints: J, opts };
}

export function setPose(p, pose = {}) {
  const J = p.joints;
  const r = (obj, v) => {
    if (!obj) return;
    obj.rotation.set(v?.[0] ?? 0, v?.[1] ?? 0, v?.[2] ?? 0);
  };
  r(J.torso, pose.torso);
  r(J.head, pose.head);
  r(J.shoulderL, pose.shoulderL);
  r(J.shoulderR, pose.shoulderR);
  r(J.elbowL, pose.elbowL);
  r(J.elbowR, pose.elbowR);
  r(J.wristL, pose.wristL);
  r(J.wristR, pose.wristR);
  r(J.hipL, pose.hipL);
  r(J.hipR, pose.hipR);
  r(J.kneeL, pose.kneeL);
  r(J.kneeR, pose.kneeR);
  r(J.ankleL, pose.ankleL);
  r(J.ankleR, pose.ankleR);
  if (pose.pelvis) r(J.pelvis, pose.pelvis);
}
