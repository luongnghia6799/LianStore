import * as THREE from 'three';

/**
 * Hand-crafted Studio Ghibli / Anime stylized character rig.
 * Keeps the exact joint names & sign convention of peopleModel-street.js:
 * Faces +Z. Positive hip/shoulder X swings a limb backward.
 */
export const RIG = {
  hipY: 0.84,
  hipX: 0.095,
  thigh: 0.41,
  shin: 0.39,
  shoulderY: 0.40,
  shoulderX: 0.175,
  upperArm: 0.28,
  foreArm: 0.25,
  headY: 0.56,
};

const faceCache = new Map();

function getAnimeFaceMaterial(skinMat, eyeHex = '#1b2848', blushRgba = 'rgba(242, 126, 122, 0.38)') {
  const skinHex = '#' + skinMat.color.getHexString();
  const key = `${skinHex}|${eyeHex}|${blushRgba}`;
  if (faceCache.has(key)) return faceCache.get(key);

  const c = document.createElement('canvas');
  c.width = 256;
  c.height = 256;
  const ctx = c.getContext('2d');
  // Base skin tone
  ctx.fillStyle = skinHex;
  ctx.fillRect(0, 0, 256, 256);

  // Soft anime rosy cheek blush
  ctx.fillStyle = blushRgba;
  ctx.beginPath();
  ctx.ellipse(86, 154, 18, 10, 0, 0, Math.PI * 2);
  ctx.ellipse(170, 154, 18, 10, 0, 0, Math.PI * 2);
  ctx.fill();

  // Expressive anime eyes (left & right centered around front UV x=128)
  const drawEye = (cx, cy) => {
    // White sclera
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.ellipse(cx, cy, 15, 17, 0, 0, Math.PI * 2);
    ctx.fill();
    // Rich dark-indigo anime iris
    ctx.fillStyle = eyeHex;
    ctx.beginPath();
    ctx.ellipse(cx, cy + 1, 11.5, 14, 0, 0, Math.PI * 2);
    ctx.fill();
    // Lower iris sunlit highlight crescent
    ctx.fillStyle = '#4e7cc8';
    ctx.beginPath();
    ctx.arc(cx, cy + 6, 7, 0, Math.PI, false);
    ctx.fill();
    // Crisp white anime catchlights (big top-left + tiny bottom-right!)
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(cx - 4.5, cy - 4.5, 4.2, 0, Math.PI * 2);
    ctx.arc(cx + 4.0, cy + 5.5, 2.0, 0, Math.PI * 2);
    ctx.fill();
    // Bold curved upper anime eyelash
    ctx.strokeStyle = '#141a2e';
    ctx.lineWidth = 4.5;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.arc(cx, cy + 2, 16, Math.PI * 1.12, Math.PI * 1.88);
    ctx.stroke();
  };
  drawEye(96, 128);
  drawEye(160, 128);

  // Delicate anime eyebrows
  ctx.strokeStyle = '#2d2430';
  ctx.lineWidth = 3.2;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(82, 103); ctx.quadraticCurveTo(96, 97, 110, 102);
  ctx.moveTo(146, 102); ctx.quadraticCurveTo(160, 97, 174, 103);
  ctx.stroke();

  // Tiny anime nose shadow dot
  ctx.fillStyle = 'rgba(138, 76, 62, 0.45)';
  ctx.beginPath();
  ctx.arc(128, 148, 2.2, 0, Math.PI * 2);
  ctx.fill();

  // Gentle warm anime smile
  ctx.strokeStyle = '#8e4244';
  ctx.lineWidth = 3.0;
  ctx.beginPath();
  ctx.arc(128, 162, 11, 0.18 * Math.PI, 0.82 * Math.PI);
  ctx.stroke();

  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.needsUpdate = true;

  const mat = skinMat.clone();
  mat.color = new THREE.Color(0xffffff);
  mat.map = tex;
  mat.userData.outlineParameters = { visible: false };
  faceCache.set(key, mat);
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

function addAnimeHair(head, hairMat, style = 'short') {
  // Voluminous sculpted back hair dome
  addMesh(head, new THREE.SphereGeometry(0.172, 16, 14), hairMat, 0, 0.032, -0.022, { scale: [1.03, 1.02, 1.05] });

  // Swept layered anime bangs (spiky/curved locks framing forehead!)
  const bangSpecs = [
    [-0.085, 0.095, 0.132, 0.046, 0.11, 0.25, 0.35],
    [-0.032, 0.105, 0.146, 0.052, 0.12, 0.12, 0.12],
    [0.032, 0.105, 0.146, 0.052, 0.12, -0.10, -0.15],
    [0.088, 0.092, 0.130, 0.044, 0.105, -0.26, -0.35],
  ];
  for (const [bx, by, bz, r, h, rx, rz] of bangSpecs) {
    addMesh(head, new THREE.ConeGeometry(r, h, 7), hairMat, bx, by, bz, { rot: [Math.PI + rx, 0, rz] });
  }
  // Sideburns framing cheeks
  addMesh(head, new THREE.ConeGeometry(0.038, 0.14, 7), hairMat, -0.142, 0.015, 0.045, { rot: [Math.PI, 0, 0.12] });
  addMesh(head, new THREE.ConeGeometry(0.038, 0.14, 7), hairMat, 0.142, 0.015, 0.045, { rot: [Math.PI, 0, -0.12] });

  if (style === 'ponytail') {
    addMesh(head, new THREE.SphereGeometry(0.068, 10, 10), hairMat, 0, 0.05, -0.195);
    addMesh(head, new THREE.ConeGeometry(0.062, 0.24, 9), hairMat, 0, -0.06, -0.215, { rot: [Math.PI - 0.25, 0, 0] });
  } else if (style === 'bob') {
    addMesh(head, new THREE.CylinderGeometry(0.155, 0.172, 0.18, 14, 1, false, Math.PI * 0.2, Math.PI * 1.6), hairMat, 0, -0.04, -0.02);
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
  const faceMat = getAnimeFaceMaterial(skin);

  const root = new THREE.Group();
  const J = {};
  const sleeve = opts.sleeve ?? 'short';
  const hairStyle = opts.hairStyle ?? 'short';

  // Pelvis / Hips
  const pelvis = new THREE.Group();
  pelvis.position.y = RIG.hipY;
  root.add(pelvis);
  J.pelvis = pelvis;
  addMesh(pelvis, new THREE.CylinderGeometry(0.132, 0.155, 0.19, 14), bottom, 0, 0.0, 0, { scale: [1.05, 1, 0.82] });
  addMesh(pelvis, new THREE.CylinderGeometry(0.138, 0.138, 0.04, 14), mats.leather ?? bottom, 0, 0.08, 0, { scale: [1.05, 1, 0.84] });

  // Torso (slim anime waist flaring gently to shoulders + crisp shirt collar!)
  const torso = new THREE.Group();
  torso.position.y = 0.08;
  pelvis.add(torso);
  J.torso = torso;

  const torsoGeo = new THREE.CylinderGeometry(0.162, 0.128, 0.42, 16);
  addMesh(torso, torsoGeo, top, 0, 0.21, 0, { scale: [1.06, 1, 0.76] });
  // Crisp white anime shirt collar V-neck
  addMesh(torso, new THREE.TorusGeometry(0.082, 0.022, 8, 14), collarMat, 0, 0.41, 0.015, { rot: [Math.PI * 0.5 + 0.2, 0, 0] });
  // Neck
  addMesh(torso, new THREE.CylinderGeometry(0.048, 0.056, 0.11, 10), skin, 0, 0.46, 0);

  // Expressive Anime Head (slightly larger Ghibli proportions + tapered chin + painted anime face!)
  const head = new THREE.Group();
  head.position.y = RIG.headY;
  torso.add(head);
  J.head = head;

  // Main head sphere
  addMesh(head, new THREE.SphereGeometry(0.156, 18, 16), skin, 0, 0.015, 0, { scale: [0.98, 1.04, 0.96] });
  // Soft tapered anime chin
  addMesh(head, new THREE.SphereGeometry(0.082, 12, 10), skin, 0, -0.095, 0.042, { scale: [1.0, 0.82, 0.9] });
  // Curved front face decal plate mapped cleanly with our anime eyes/blush/smile texture
  const facePlane = new THREE.Mesh(
    new THREE.SphereGeometry(0.158, 18, 14, -Math.PI * 0.34, Math.PI * 0.68, Math.PI * 0.26, Math.PI * 0.52),
    faceMat
  );
  facePlane.rotation.y = Math.PI * 0.5;
  facePlane.position.set(0, 0.015, 0.002);
  facePlane.scale.set(0.98, 1.04, 0.96);
  head.add(facePlane);
  // Cute ears
  addMesh(head, new THREE.SphereGeometry(0.032, 8, 8), skin, -0.152, -0.005, -0.01, { scale: [0.55, 1.0, 0.75] });
  addMesh(head, new THREE.SphereGeometry(0.032, 8, 8), skin, 0.152, -0.005, -0.01, { scale: [0.55, 1.0, 0.75] });

  // Sculpted anime hairstyle
  addAnimeHair(head, hairMat, hairStyle);

  // Arms (left & right)
  for (const s of [-1, 1]) {
    const shoulder = new THREE.Group();
    shoulder.position.set(s * RIG.shoulderX, RIG.shoulderY, 0);
    torso.add(shoulder);
    // Sleeve puff
    addMesh(shoulder, new THREE.SphereGeometry(0.062, 12, 10), top, 0, -0.01, 0);
    const upperMat = sleeve === 'none' ? skin : top;
    addMesh(shoulder, new THREE.CylinderGeometry(0.052, 0.044, RIG.upperArm * 0.78, 10), upperMat, 0, -RIG.upperArm * 0.42, 0);
    if (sleeve === 'short') {
      addMesh(shoulder, new THREE.CylinderGeometry(0.042, 0.038, RIG.upperArm * 0.32, 10), skin, 0, -RIG.upperArm * 0.84, 0);
    }

    const elbow = new THREE.Group();
    elbow.position.y = -RIG.upperArm;
    shoulder.add(elbow);
    const foreMat = sleeve === 'long' ? top : skin;
    addMesh(elbow, new THREE.CylinderGeometry(0.040, 0.034, RIG.foreArm, 10), foreMat, 0, -RIG.foreArm * 0.5, 0);

    const wrist = new THREE.Group();
    wrist.position.y = -RIG.foreArm;
    elbow.add(wrist);
    addMesh(wrist, new THREE.SphereGeometry(0.042, 10, 8), skin, 0, -0.02, 0.01, { scale: [0.85, 1.15, 0.85] });

    J[s < 0 ? 'shoulderL' : 'shoulderR'] = shoulder;
    J[s < 0 ? 'elbowL' : 'elbowR'] = elbow;
    J[s < 0 ? 'wristL' : 'wristR'] = wrist;
  }

  // Legs (left & right)
  for (const s of [-1, 1]) {
    const hip = new THREE.Group();
    hip.position.set(s * RIG.hipX, -0.04, 0);
    pelvis.add(hip);
    addMesh(hip, new THREE.CylinderGeometry(0.068, 0.056, RIG.thigh, 12), bottom, 0, -RIG.thigh * 0.5, 0);

    const knee = new THREE.Group();
    knee.position.y = -RIG.thigh;
    hip.add(knee);
    addMesh(knee, new THREE.CylinderGeometry(0.054, 0.044, RIG.shin, 12), bottom, 0, -RIG.shin * 0.5, 0);

    const ankle = new THREE.Group();
    ankle.position.y = -RIG.shin;
    knee.add(ankle);
    // Cute rounded anime shoes/sneakers
    addMesh(ankle, new THREE.CapsuleGeometry(0.048, 0.10, 6, 10), shoe, 0, 0.012, 0.045, { rot: [Math.PI * 0.5, 0, 0] });
    addMesh(ankle, new THREE.BoxGeometry(0.098, 0.022, 0.19), collarMat, 0, -0.018, 0.045);

    J[s < 0 ? 'hipL' : 'hipR'] = hip;
    J[s < 0 ? 'kneeL' : 'kneeR'] = knee;
    J[s < 0 ? 'ankleL' : 'ankleR'] = ankle;
  }

  if (opts.scale) root.scale.set(opts.scale[0], opts.scale[1], opts.scale[2]);
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
