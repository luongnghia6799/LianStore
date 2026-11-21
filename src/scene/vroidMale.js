import * as THREE from 'three';
import { roundedBoxGeometry } from '../core/geometry.js';

/**
 * VRoid-style Male Anime Character Rig — Casual Vietnamese Farmer ("Phôi VRoid Nam · Nông dân Casual").
 * Proportions: ~1.74 m tall (~1:7 VRoid male anime ratio), sculpted anime jawline head,
 * 512x512 painted anime face texture, 26 tapered VRoid hair-strand locks, open-collar
 * rolled-sleeve casual farmer shirt over cream tee, Mekong checkered khăn rằn scarf,
 * rolled-cuff khaki trousers, casual sneakers, and optional nón lá slung on back.
 *
 * Joint names & sign convention match peopleModel-street.js:
 * Faces +Z. Positive hip/shoulder X swings a limb backward.
 */
export const RIG = {
  hipY: 0.90,
  hipX: 0.088,
  thigh: 0.44,
  shin: 0.42,
  shoulderY: 0.45,
  shoulderX: 0.195,
  upperArm: 0.30,
  foreArm: 0.27,
  headY: 0.60,
};

function makeCanvasTex(w, h, draw, { repeat = [1, 1] } = {}) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  const ctx = c.getContext('2d');
  draw(ctx, w, h);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(repeat[0], repeat[1]);
  tex.needsUpdate = true;
  return tex;
}

// Crisp 1024x512 (2:1 equirectangular!) VRoid Male Anime Face Texture — zero horizontal stretching on SphereGeometry!
const faceTexCache = new Map();
function createVroidMaleFaceTex(skinHex = '#f3ceb4', eyeColor = '#284060', eyeHighlight = '#74b0d8') {
  const key = `${skinHex}|${eyeColor}|${eyeHighlight}`;
  if (faceTexCache.has(key)) return faceTexCache.get(key);

  const tex = makeCanvasTex(1024, 512, (ctx, w, h) => {
    // Base warm anime skin
    ctx.fillStyle = skinHex;
    ctx.fillRect(0, 0, w, h);

    // Center of front face (+Z after -PI/2 Y rotation) is x = 512, y = 260
    const cx0 = 512;

    // Soft warm sun-kissed cheek glow
    for (const dx of [-58, 58]) {
      const cg = ctx.createRadialGradient(cx0 + dx, 304, 4, cx0 + dx, 304, 34);
      cg.addColorStop(0, 'rgba(232, 134, 112, 0.24)');
      cg.addColorStop(1, 'rgba(232, 134, 112, 0)');
      ctx.fillStyle = cg;
      ctx.fillRect(cx0 + dx - 40, 264, 80, 80);
    }

    // Helper: draw crisp, handsome VRoid male anime eye (true 1:1 visual aspect in 1024x512 equirectangular space!)
    const drawMaleEye = (cx, cy, dir) => {
      ctx.save();
      ctx.translate(cx, cy);

      // Clean white sclera (sharp handsome VRoid male proportion)
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.moveTo(-24 * dir, 4);
      ctx.quadraticCurveTo(-4 * dir, -20, 25 * dir, -6);
      ctx.quadraticCurveTo(22 * dir, 14, 0, 17);
      ctx.quadraticCurveTo(-18 * dir, 16, -24 * dir, 4);
      ctx.closePath();
      ctx.fill();

      // Clip iris inside sclera
      ctx.save();
      ctx.clip();

      // Upper lid soft shadow over top of iris
      const ig = ctx.createLinearGradient(0, -18, 0, 18);
      ig.addColorStop(0, '#101828');
      ig.addColorStop(0.45, eyeColor);
      ig.addColorStop(1, eyeHighlight);
      ctx.fillStyle = ig;
      ctx.beginPath();
      ctx.ellipse(1 * dir, 1, 14.5, 17.5, 0, 0, Math.PI * 2);
      ctx.fill();

      // Crisp dark pupil
      ctx.fillStyle = '#0c1220';
      ctx.beginPath();
      ctx.ellipse(1 * dir, 0, 6.2, 8.0, 0, 0, Math.PI * 2);
      ctx.fill();

      // Bright luminous lower-iris bounce arc (classic VRoid/Ghibli anime look)
      ctx.strokeStyle = 'rgba(218, 244, 255, 0.78)';
      ctx.lineWidth = 3.4;
      ctx.beginPath();
      ctx.arc(1 * dir, 2, 10.2, 0.16 * Math.PI, 0.84 * Math.PI);
      ctx.stroke();

      // Crisp white specular catchlights
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.ellipse(-5.5, -6.5, 4.6, 5.0, -0.2, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(7.5, 7.2, 2.4, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();

      // Bold sleek upper anime lash line
      ctx.strokeStyle = '#1b161a';
      ctx.lineWidth = 5.5;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(-25 * dir, 4);
      ctx.quadraticCurveTo(-5 * dir, -20, 26 * dir, -7);
      ctx.stroke();

      // Subtle lower lash line
      ctx.lineWidth = 2.0;
      ctx.strokeStyle = 'rgba(42, 32, 34, 0.55)';
      ctx.beginPath();
      ctx.moveTo(-14 * dir, 15);
      ctx.quadraticCurveTo(2 * dir, 18, 16 * dir, 13);
      ctx.stroke();

      // Crisp double-eyelid crease
      ctx.lineWidth = 2.0;
      ctx.strokeStyle = 'rgba(138, 86, 68, 0.58)';
      ctx.beginPath();
      ctx.moveTo(-18 * dir, -16);
      ctx.quadraticCurveTo(0, -27, 22 * dir, -17);
      ctx.stroke();

      ctx.restore();
    };

    drawMaleEye(cx0 - 44, 264, -1);
    drawMaleEye(cx0 + 44, 264, 1);

    // Clean, confident male anime eyebrows
    ctx.strokeStyle = '#241c1a';
    ctx.lineWidth = 4.6;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(cx0 - 68, 228);
    ctx.quadraticCurveTo(cx0 - 44, 219, cx0 - 20, 229);
    ctx.moveTo(cx0 + 68, 228);
    ctx.quadraticCurveTo(cx0 + 44, 219, cx0 + 20, 229);
    ctx.stroke();

    // Minimal crisp anime nose shadow
    ctx.strokeStyle = 'rgba(154, 98, 76, 0.52)';
    ctx.lineWidth = 2.2;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(cx0, 286);
    ctx.lineTo(cx0 - 2, 304);
    ctx.lineTo(cx0 + 2, 306);
    ctx.stroke();

    // Warm friendly male anime smile
    ctx.strokeStyle = '#924b44';
    ctx.lineWidth = 3.2;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(cx0 - 15, 335);
    ctx.quadraticCurveTo(cx0, 344, cx0 + 16, 334);
    ctx.stroke();

    // Tiny soft lower-lip shadow
    ctx.fillStyle = 'rgba(168, 98, 84, 0.22)';
    ctx.beginPath();
    ctx.ellipse(cx0, 346, 6.5, 2.2, 0, 0, Math.PI * 2);
    ctx.fill();
  });

  faceTexCache.set(key, tex);
  return tex;
}

// Mekong Delta checkered Khăn Rằn textures (separate aspect repeats for neck ring vs hanging tails!)
let khanRanTexCache = null;
let khanRanRingTexCache = null;
function drawKhanRanPattern(ctx, w, h) {
  ctx.fillStyle = '#f2ede0';
  ctx.fillRect(0, 0, w, h);
  const step = 16;
  for (let y = 0; y < h; y += step) {
    for (let x = 0; x < w; x += step) {
      const a = (x / step) % 2 === 0;
      const b = (y / step) % 2 === 0;
      if (a && b) ctx.fillStyle = '#25262a';
      else if (a || b) ctx.fillStyle = '#6c7078';
      else continue;
      ctx.fillRect(x, y, step, step);
    }
  }
}
function getKhanRanTex() {
  if (!khanRanTexCache) khanRanTexCache = makeCanvasTex(128, 128, drawKhanRanPattern, { repeat: [1.5, 4.5] });
  return khanRanTexCache;
}
function getKhanRanRingTex() {
  if (!khanRanRingTexCache) khanRanRingTexCache = makeCanvasTex(128, 128, drawKhanRanPattern, { repeat: [8, 1.5] });
  return khanRanRingTexCache;
}

// Subtle woven chambray / linen texture for casual farmer shirt
let shirtTexCache = null;
function getShirtTex(baseHex = '#567896') {
  const tex = makeCanvasTex(128, 128, (ctx, w, h) => {
    ctx.fillStyle = baseHex;
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = 'rgba(255,255,255,0.06)';
    for (let y = 0; y < h; y += 4) ctx.fillRect(0, y, w, 1);
    ctx.fillStyle = 'rgba(20,30,45,0.06)';
    for (let x = 0; x < w; x += 6) ctx.fillRect(x, 0, 1, h);
  }, { repeat: [3, 3] });
  shirtTexCache = tex;
  return tex;
}

// Sculpted VRoid Male Anime Head Geometry (tapered cheeks + clean anime chin!)
let cachedHeadGeo = null;
function getVroidHeadGeometry() {
  if (cachedHeadGeo) return cachedHeadGeo;
  const geo = new THREE.SphereGeometry(0.118, 36, 26);
  const pos = geo.attributes.position;
  // Remember: head will be rotated Y = -PI/2 so +X is the front face!
  for (let i = 0; i < pos.count; i++) {
    let x = pos.getX(i); // +X = front
    let y = pos.getY(i); // +Y = top
    let z = pos.getZ(i); // ±Z = left/right

    // Slightly elongate head vertically for crisp anime proportion
    y *= 1.07;

    // Taper lower half into sleek male anime jawline & pointed chin
    if (y < -0.01) {
      const t = Math.min(1, (-y - 0.01) / 0.115);
      // Narrow cheeks toward chin
      z *= 1.0 - 0.34 * t * t;
      // Pull chin gently forward and slightly down
      if (x > 0) {
        x *= 1.0 - 0.12 * t + 0.08 * t * (1 - Math.abs(z) / 0.12);
        y -= 0.014 * t * Math.max(0, x / 0.118);
      } else {
        // Tuck back of jaw neatly toward neck
        x *= 1.0 - 0.24 * t;
      }
    }

    // Subtle nose ridge at front center (+X, |z| < 0.018)
    if (x > 0.08 && Math.abs(z) < 0.018 && y > -0.036 && y < 0.012) {
      const nf = (1 - Math.abs(z) / 0.018) * (1 - Math.abs(y + 0.014) / 0.026);
      x += Math.max(0, nf) * 0.011;
    }

    pos.setXYZ(i, x, y, z);
  }
  geo.computeVertexNormals();
  cachedHeadGeo = geo;
  return geo;
}

// Build a single tapered ribbon-like VRoid anime hair lock along a 3D CatmullRomCurve3
function buildHairStrand(parent, mat, pts, radiusBase = 0.024, flattenZ = 0.55) {
  const curve = new THREE.CatmullRomCurve3(pts.map((p) => new THREE.Vector3(p[0], p[1], p[2])));
  const segs = 10;
  const radSegs = 6;
  const geo = new THREE.TubeGeometry(curve, segs, radiusBase, radSegs, false);
  const pos = geo.attributes.position;
  for (let i = 0; i <= segs; i++) {
    const u = i / segs;
    const center = curve.getPointAt(u);
    // Taper sharply to a crisp anime tip!
    const taper = u < 0.15 ? 0.72 + (u / 0.15) * 0.28 : Math.pow(1 - (u - 0.15) / 0.85, 0.78);
    const scale = Math.max(0.06, taper);
    for (let j = 0; j <= radSegs; j++) {
      const idx = i * (radSegs + 1) + j;
      const dx = pos.getX(idx) - center.x;
      const dy = pos.getY(idx) - center.y;
      const dz = pos.getZ(idx) - center.z;
      pos.setXYZ(
        idx,
        center.x + dx * scale,
        center.y + dy * scale,
        center.z + dz * scale * flattenZ
      );
    }
  }
  geo.computeVertexNormals();
  const m = new THREE.Mesh(geo, mat);
  m.castShadow = true;
  m.receiveShadow = true;
  parent.add(m);
  return m;
}

function buildVroidMaleHair(headGroup, hairMat) {
  const hair = new THREE.Group();
  headGroup.add(hair);

  // Fitted anime cranium hair volume (slightly lifted at crown, tucked cleanly behind ears)
  const capGeo = new THREE.SphereGeometry(0.128, 24, 18);
  const cp = capGeo.attributes.position;
  for (let i = 0; i < cp.count; i++) {
    let x = cp.getX(i);
    let y = cp.getY(i);
    let z = cp.getZ(i);
    if (z > 0.03 && y < 0.05) {
      // Open up the face area cleanly!
      z *= 0.62;
    }
    if (y < -0.02 && z < 0) {
      // Taper back nape
      x *= 0.92;
      y *= 1.12;
    }
    cp.setXYZ(i, x, y + 0.015, z - 0.008);
  }
  capGeo.computeVertexNormals();
  const cap = new THREE.Mesh(capGeo, hairMat);
  cap.castShadow = true;
  cap.receiveShadow = true;
  hair.add(cap);

  // 7 Layered Tousled Male Anime Bangs sweeping casually across forehead
  const bangs = [
    [[0.00, 0.125, 0.04], [-0.015, 0.095, 0.115], [-0.028, 0.042, 0.128], [-0.014, 0.014, 0.124]],
    [[-0.03, 0.122, 0.04], [-0.055, 0.092, 0.112], [-0.068, 0.045, 0.118], [-0.052, 0.018, 0.112]],
    [[0.03, 0.122, 0.04], [0.052, 0.094, 0.112], [0.064, 0.048, 0.118], [0.048, 0.020, 0.112]],
    [[-0.06, 0.112, 0.03], [-0.095, 0.082, 0.095], [-0.106, 0.030, 0.095], [-0.096, -0.006, 0.082]],
    [[0.06, 0.112, 0.03], [0.095, 0.082, 0.095], [0.106, 0.032, 0.095], [0.098, -0.004, 0.082]],
    [[-0.01, 0.132, 0.03], [0.024, 0.105, 0.112], [0.032, 0.058, 0.126], [0.018, 0.032, 0.124]],
    [[-0.045, 0.126, 0.03], [-0.078, 0.095, 0.105], [-0.090, 0.050, 0.108], [-0.080, 0.024, 0.102]],
  ];
  for (const pts of bangs) buildHairStrand(hair, hairMat, pts, 0.024, 0.58);

  // 4 Side-frame locks / sideburns framing ears & jaw
  const sides = [
    [[-0.095, 0.075, 0.01], [-0.124, 0.025, 0.042], [-0.120, -0.032, 0.042], [-0.102, -0.068, 0.026]],
    [[0.095, 0.075, 0.01], [0.124, 0.025, 0.042], [0.120, -0.032, 0.042], [0.102, -0.068, 0.026]],
    [[-0.100, 0.055, -0.02], [-0.130, 0.005, -0.025], [-0.118, -0.055, -0.032], [-0.095, -0.092, -0.035]],
    [[0.100, 0.055, -0.02], [0.130, 0.005, -0.025], [0.118, -0.055, -0.032], [0.095, -0.092, -0.035]],
  ];
  for (const pts of sides) buildHairStrand(hair, hairMat, pts, 0.022, 0.65);

  // 11 Layered Crown & Back Nape Locks (spiky casual anime silhouette)
  for (let i = 0; i < 9; i++) {
    const a = -1.15 + (i / 8) * 2.30; // fan around back (-Z)
    const sx = Math.sin(a) * 0.075;
    const sz = -Math.cos(a) * 0.075;
    const ox = Math.sin(a) * 0.132;
    const oz = -Math.cos(a) * 0.136;
    const tx = Math.sin(a) * 0.098;
    const tz = -Math.cos(a) * 0.108;
    buildHairStrand(
      hair,
      hairMat,
      [
        [sx, 0.11, sz],
        [ox, 0.035, oz],
        [ox * 0.96, -0.055, oz * 0.96],
        [tx, -0.122 - (i % 2) * 0.016, tz],
      ],
      0.027,
      0.72
    );
  }
  // 2 subtle casual ahoge / top crown cowlick strands
  buildHairStrand(hair, hairMat, [[0, 0.135, 0.01], [0.022, 0.162, 0.02], [0.058, 0.158, 0.00]], 0.015, 0.6);
  buildHairStrand(hair, hairMat, [[-0.01, 0.136, -0.01], [-0.042, 0.158, -0.02], [-0.074, 0.146, -0.04]], 0.015, 0.6);
}

function lathe(parent, profile, flattenZ, mat, y = 0, x = 0, z = 0) {
  const pts = profile.map(([r, h]) => new THREE.Vector2(r, h));
  const geo = new THREE.LatheGeometry(pts, 20);
  geo.scale(1, 1, flattenZ);
  const m = new THREE.Mesh(geo, mat);
  m.position.set(x, y, z);
  m.castShadow = true;
  m.receiveShadow = true;
  parent.add(m);
  return m;
}

function addMesh(parent, geo, mat, x = 0, y = 0, z = 0, rot = null, scale = null) {
  const m = new THREE.Mesh(geo, mat);
  m.position.set(x, y, z);
  if (rot) m.rotation.set(rot[0], rot[1], rot[2]);
  if (scale) m.scale.set(scale[0], scale[1], scale[2]);
  m.castShadow = true;
  m.receiveShadow = true;
  parent.add(m);
  return m;
}

export function buildVroidMale(mats, opts = {}) {
  const look = opts.look || null;
  const makeToon = (hex, extra = {}) => {
    if (look && typeof look.toon === 'function') {
      return look.toon(hex, { outline: false, ...extra });
    }
    const base = mats?.cloth?.navy?.clone?.() || new THREE.MeshToonMaterial({ color: hex });
    base.color = new THREE.Color(hex);
    if (extra.map) base.map = extra.map;
    if (extra.side) base.side = extra.side;
    base.needsUpdate = true;
    return base;
  };

  const skinHex = opts.skinHex || '#f1c9ae';
  const shirtHex = opts.shirtHex || '#567896'; // Faded casual denim-blue farmer work shirt
  const teeHex = opts.teeHex || '#f4eee0'; // Soft cream cotton inner tee
  const pantsHex = opts.pantsHex || '#7b6954'; // Warm casual khaki-earth farmer trousers
  const hairHex = opts.hairHex || '#241e1c'; // Warm dark espresso-black anime hair

  const skinMat = makeToon(skinHex);
  const faceMat = makeToon(0xffffff, { map: createVroidMaleFaceTex(skinHex, opts.eyeHex || '#2b3e58', opts.eyeLight || '#6fa4c8') });
  const hairMat = makeToon(hairHex);
  const shirtMat = makeToon(0xffffff, { map: getShirtTex(shirtHex) });
  const teeMat = makeToon(teeHex);
  const pantsMat = makeToon(pantsHex);
  const cuffMat = makeToon('#685744');
  const beltMat = makeToon('#463224');
  const buckleMat = makeToon('#d6aa4e');
  const shoeMat = makeToon('#4c545e');
  const soleMat = makeToon('#eee8dc');
  const khanRanMat = makeToon(0xffffff, { map: getKhanRanTex(), side: THREE.DoubleSide });
  const khanRanRingMat = makeToon(0xffffff, { map: getKhanRanRingTex(), side: THREE.DoubleSide });
  const nonLaMat = mats?.nonLa || makeToon('#e2ca88', { side: THREE.DoubleSide });

  const root = new THREE.Group();
  const J = {};

  // ── 1. PELVIS & BELT ──
  const pelvis = new THREE.Group();
  pelvis.position.y = RIG.hipY;
  root.add(pelvis);
  J.pelvis = pelvis;

  lathe(pelvis, [
    [0.092, -0.17],
    [0.140, -0.10],
    [0.158, 0.00],
    [0.154, 0.09],
  ], 0.80, pantsMat, 0);

  // Leather belt & brass buckle
  addMesh(pelvis, new THREE.CylinderGeometry(0.156, 0.160, 0.044, 18), beltMat, 0, 0.06, 0, null, [1, 1, 0.80]);
  addMesh(pelvis, roundedBoxGeometry(0.056, 0.052, 0.022, 0.008, 2), buckleMat, 0, 0.06, 0.126);

  // ── 2. TORSO (Casual Open-Collar Farmer Overshirt + Cream Inner Tee + Khăn Rằn!) ──
  const torso = new THREE.Group();
  torso.position.y = 0.08;
  pelvis.add(torso);
  J.torso = torso;

  // Inner cream T-shirt chest visible through unbuttoned shirt front
  lathe(torso, [
    [0.144, 0.00],
    [0.156, 0.14],
    [0.180, 0.30],
    [0.182, 0.41],
    [0.145, 0.465],
    [0.072, 0.495],
  ], 0.74, teeMat, 0);

  // Outer open-collar casual work shirt panels (left & right front + full back + shirt-tail hem)
  lathe(torso, [
    [0.162, -0.05],
    [0.158, 0.08],
    [0.170, 0.24],
    [0.194, 0.38],
    [0.190, 0.445],
    [0.135, 0.480],
  ], 0.77, shirtMat, 0);

  // Crisp front V-opening reveal of the inner cream tee (slightly proud of shirt center)
  addMesh(torso, roundedBoxGeometry(0.115, 0.36, 0.04, 0.012, 2), teeMat, 0, 0.26, 0.122);

  // Left & Right front shirt plackets + neat chest pockets + wooden buttons
  for (const s of [-1, 1]) {
    addMesh(torso, roundedBoxGeometry(0.065, 0.44, 0.036, 0.01, 2), shirtMat, s * 0.088, 0.22, 0.124, [0, s * -0.14, 0]);
    // Chest pocket + flap
    addMesh(torso, roundedBoxGeometry(0.068, 0.074, 0.016, 0.005, 2), shirtMat, s * 0.104, 0.31, 0.144, [0, s * -0.18, 0]);
    addMesh(torso, roundedBoxGeometry(0.070, 0.022, 0.018, 0.004, 2), cuffMat, s * 0.104, 0.342, 0.146, [0, s * -0.18, 0]);
    // Folded open shirt collar lapels
    addMesh(torso, roundedBoxGeometry(0.062, 0.075, 0.020, 0.006, 2), shirtMat, s * 0.072, 0.462, 0.094, [0.35, s * -0.45, s * 0.28]);
  }
  // Collar back wrap
  addMesh(torso, new THREE.CylinderGeometry(0.095, 0.102, 0.065, 14, 1, true, Math.PI * 0.25, Math.PI * 1.5), shirtMat, 0, 0.472, -0.01);

  // Classic Mekong Khăn Rằn draped casually around neck (crisp checkered ring + soft angled tails!)
  if (opts.khanRan !== false) {
    const scarfRing = new THREE.Mesh(new THREE.TorusGeometry(0.082, 0.022, 12, 24), khanRanRingMat);
    scarfRing.position.set(0, 0.464, 0.006);
    scarfRing.rotation.x = Math.PI * 0.45;
    scarfRing.scale.set(1.06, 1.0, 0.88);
    scarfRing.castShadow = true;
    torso.add(scarfRing);

    // Two soft hanging khăn rằn tails resting naturally on chest
    addMesh(torso, roundedBoxGeometry(0.052, 0.22, 0.014, 0.006, 2), khanRanMat, -0.052, 0.34, 0.146, [-0.10, -0.14, 0.10]);
    addMesh(torso, roundedBoxGeometry(0.050, 0.19, 0.014, 0.006, 2), khanRanMat, 0.046, 0.36, 0.148, [-0.08, 0.16, -0.12]);
  }

  // Optional Nón Lá slung casually on his back (so full VRoid anime hair & face shine!)
  if (opts.nonLaOnBack !== false) {
    const backHat = new THREE.Group();
    backHat.position.set(0.02, 0.28, -0.19);
    backHat.rotation.set(-1.32, 0.12, 0.18);
    const cone = new THREE.Mesh(new THREE.ConeGeometry(0.28, 0.16, 20, 1, true), nonLaMat);
    cone.castShadow = true;
    backHat.add(cone);
    const inner = new THREE.Mesh(new THREE.ConeGeometry(0.275, 0.155, 20, 1, true), nonLaMat);
    inner.scale.set(-1, 1, 1);
    backHat.add(inner);
    torso.add(backHat);
  }

  // Slender VRoid anime neck
  addMesh(torso, new THREE.CylinderGeometry(0.042, 0.049, 0.115, 16), skinMat, 0, 0.515, 0.004);

  // ── 3. VROID SCULPTED ANIME HEAD + LAYERED HAIR ──
  const head = new THREE.Group();
  head.position.set(0, RIG.headY, 0.006);
  torso.add(head);
  J.head = head;

  const headMesh = new THREE.Mesh(getVroidHeadGeometry(), faceMat);
  // Rotate -PI/2 around Y so +X (UV u=0.5 front face!) faces +Z!
  headMesh.rotation.y = -Math.PI * 0.5;
  headMesh.position.y = 0.065;
  headMesh.castShadow = true;
  headMesh.receiveShadow = true;
  head.add(headMesh);

  // Soft anime ears
  for (const s of [-1, 1]) {
    addMesh(head, new THREE.SphereGeometry(0.024, 10, 8), skinMat, s * 0.106, 0.052, -0.008, [0, 0, s * -0.15], [0.55, 1.0, 0.72]);
  }

  // 26-strand layered VRoid male hair
  const hairPivot = new THREE.Group();
  hairPivot.position.y = 0.065;
  head.add(hairPivot);
  buildVroidMaleHair(hairPivot, hairMat);

  if (opts.nonLaOnHead) {
    const cone = new THREE.Mesh(new THREE.ConeGeometry(0.29, 0.165, 20, 1, true), nonLaMat);
    cone.position.set(0, 0.21, 0.01);
    cone.rotation.x = -0.06;
    cone.castShadow = true;
    head.add(cone);
  }

  // ── 4. ARMS (Rolled-up Casual Short Sleeves + Toned Forearms + Hands) ──
  for (const [side, s] of [['L', 1], ['R', -1]]) {
    const shoulder = new THREE.Group();
    shoulder.position.set(s * 0.182, 0.418, 0);
    torso.add(shoulder);
    J[`shoulder${side}`] = shoulder;

    // Smooth naturally sloped casual shirt sleeve + crisp folded cuff
    addMesh(shoulder, new THREE.CapsuleGeometry(0.049, 0.105, 8, 14), shirtMat, 0, -0.055, 0);
    addMesh(shoulder, new THREE.CylinderGeometry(0.052, 0.052, 0.032, 14), cuffMat, 0, -0.125, 0);

    // Lower bare upper-arm
    addMesh(shoulder, new THREE.CapsuleGeometry(0.040, 0.12, 6, 12), skinMat, 0, -0.20, 0);

    const elbow = new THREE.Group();
    elbow.position.y = -RIG.upperArm;
    shoulder.add(elbow);
    J[`elbow${side}`] = elbow;

    // Slender tapered forearm
    addMesh(elbow, new THREE.CapsuleGeometry(0.037, RIG.foreArm - 0.06, 6, 12), skinMat, 0, -RIG.foreArm * 0.48, 0);

    const wrist = new THREE.Group();
    wrist.position.y = -RIG.foreArm;
    elbow.add(wrist);
    J[`wrist${side}`] = wrist;

    // Clean stylized anime hand
    addMesh(wrist, roundedBoxGeometry(0.052, 0.078, 0.034, 0.014, 2), skinMat, 0, -0.032, 0.006);
  }

  // ── 5. LEGS (Casual Rolled-Cuff Khaki Farmer Trousers + Canvas Sneakers) ──
  for (const [side, s] of [['L', 1], ['R', -1]]) {
    const hip = new THREE.Group();
    hip.position.set(s * RIG.hipX, -0.04, 0);
    pelvis.add(hip);
    J[`hip${side}`] = hip;

    // Relaxed-fit thigh trouser
    addMesh(hip, new THREE.CapsuleGeometry(0.072, RIG.thigh - 0.10, 6, 14), pantsMat, 0, -RIG.thigh * 0.48, 0);

    const knee = new THREE.Group();
    knee.position.y = -RIG.thigh;
    hip.add(knee);
    J[`knee${side}`] = knee;

    // Tapered calf trouser + neatly rolled cuff just above ankle!
    addMesh(knee, new THREE.CapsuleGeometry(0.058, RIG.shin - 0.15, 6, 14), pantsMat, 0, -RIG.shin * 0.40, 0);
    addMesh(knee, new THREE.CylinderGeometry(0.064, 0.064, 0.044, 14), cuffMat, 0, -RIG.shin + 0.095, 0);
    // Hint of ankle skin
    addMesh(knee, new THREE.CylinderGeometry(0.038, 0.038, 0.06, 12), skinMat, 0, -RIG.shin + 0.045, 0);

    const ankle = new THREE.Group();
    ankle.position.y = -RIG.shin;
    knee.add(ankle);
    J[`ankle${side}`] = ankle;

    // Clean casual canvas sneaker / outdoor shoe + off-white rubber sole
    addMesh(ankle, roundedBoxGeometry(0.088, 0.062, 0.215, 0.024, 2), shoeMat, 0, -0.008, 0.042);
    addMesh(ankle, roundedBoxGeometry(0.092, 0.024, 0.222, 0.008, 2), soleMat, 0, -0.034, 0.042);
  }

  if (opts.scale) root.scale.set(...opts.scale);
  return { group: root, joints: J };
}
