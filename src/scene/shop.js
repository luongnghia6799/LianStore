import * as THREE from 'three';
import { roundedBoxGeometry } from '../core/geometry.js';

export const DATUM = Object.freeze({
  SLAB_W: 30.0,
  SLAB_D: 31.5,
  SLAB_Z_CENTER: -6.5, // spans z: -22.25 to +9.25 (fits extra-long 19.4 m local / ~30 m real-scale warehouse!)
  SLAB_H: 1.0,
  ROAD_Y: 0.0,
  WALK_Y: 0.08,
  YARD_Y: 0.12,
  SHOP_Y: 0.14,
});

function box(parent, w, h, d, mat, x, y, z, { r = 0, rot = null, cast = true, recv = true } = {}) {
  const geo = r > 0 ? roundedBoxGeometry(w, h, d, r, 2) : new THREE.BoxGeometry(w, h, d);
  const m = new THREE.Mesh(geo, mat);
  m.position.set(x, y, z);
  if (rot) m.rotation.set(rot[0], rot[1], rot[2]);
  m.castShadow = cast;
  m.receiveShadow = recv;
  parent.add(m);
  return m;
}

function cyl(parent, rt, rb, h, seg, mat, x, y, z, { rot = null, cast = true, recv = true } = {}) {
  const m = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg), mat);
  m.position.set(x, y, z);
  if (rot) m.rotation.set(rot[0], rot[1], rot[2]);
  m.castShadow = cast;
  m.receiveShadow = recv;
  parent.add(m);
  return m;
}

function buildSignPanel(parent, w, h, d, frontMat, backMat, x, y, z) {
  const geo = new THREE.BoxGeometry(w, h, d);
  const mats = [backMat, backMat, backMat, backMat, frontMat, backMat];
  const m = new THREE.Mesh(geo, mats);
  m.position.set(x, y, z);
  m.castShadow = true;
  m.receiveShadow = true;
  parent.add(m);
  return m;
}

function buildFenceBay(parent, mats, x0, x1, z, baseY, addPoster = false) {
  const len = x1 - x0;
  const cx = (x0 + x1) * 0.5;
  box(parent, len, 0.56, 0.24, mats.stoneBase, cx, baseY + 0.28, z);
  box(parent, len + 0.04, 0.06, 0.28, mats.benchWhite, cx, baseY + 0.59, z);

  const railBottom = baseY + 0.72;
  const railTop = baseY + 1.68;
  box(parent, len, 0.05, 0.05, mats.wroughtIron, cx, railBottom, z);
  box(parent, len, 0.08, 0.06, mats.goldFinial, cx, railBottom + 0.12, z);
  box(parent, len, 0.05, 0.05, mats.wroughtIron, cx, railTop, z);
  box(parent, len, 0.08, 0.06, mats.goldFinial, cx, railTop - 0.12, z);

  const count = Math.max(4, Math.floor(len / 0.24));
  for (let i = 1; i < count; i++) {
    const px = x0 + (len * i) / count;
    box(parent, 0.032, 1.12, 0.032, mats.wroughtIron, px, baseY + 1.18, z);
    const spear = new THREE.Mesh(new THREE.ConeGeometry(0.042, 0.16, 4), mats.goldFinial);
    spear.position.set(px, railTop + 0.11, z);
    spear.castShadow = true;
    parent.add(spear);
  }

  const med = new THREE.Mesh(new THREE.OctahedronGeometry(0.18, 0), mats.goldFinial);
  med.scale.set(1, 1, 0.28);
  med.position.set(cx, baseY + 1.2, z);
  parent.add(med);

  if (addPoster) {
    buildSignPanel(parent, Math.min(1.1, len * 0.62), 0.68, 0.03, mats.poster, mats.signBack, cx, baseY + 1.18, z + 0.06);
  }
}

function buildStonePillar(parent, mats, x, z, baseY, h = 1.98) {
  box(parent, 0.44, 0.58, 0.44, mats.stoneBase, x, baseY + 0.29, z);
  box(parent, 0.38, h - 0.58, 0.38, mats.pillarBeige, x, baseY + 0.58 + (h - 0.58) * 0.5, z);
  box(parent, 0.41, 0.07, 0.41, mats.pillarBand, x, baseY + 0.96, z);
  box(parent, 0.41, 0.07, 0.41, mats.pillarBand, x, baseY + 1.48, z);
  box(parent, 0.48, 0.1, 0.48, mats.pillarBand, x, baseY + h + 0.05, z);
  box(parent, 0.18, 0.2, 0.18, mats.benchWhite, x, baseY + h + 0.2, z, { r: 0.02 });
  box(parent, 0.24, 0.05, 0.24, mats.wroughtIron, x, baseY + h + 0.32, z);
}

// Helper: crossed pair of hand-painted alpha-cutout Anime Leaf Cards (replaces plastic spheres!)
const LEAF_CARD_GEO = new THREE.PlaneGeometry(1, 1);
function addLeafCardCluster(parent, mat, x, y, z, size, seed = 0) {
  const g = new THREE.Group();
  g.position.set(x, y, z);
  g.rotation.set(
    Math.sin(seed * 3.1) * 0.35,
    (seed * 1.9) % Math.PI,
    Math.cos(seed * 2.3) * 0.25
  );
  const m1 = new THREE.Mesh(LEAF_CARD_GEO, mat);
  m1.scale.set(size, size, 1);
  m1.castShadow = true;
  m1.receiveShadow = true;
  g.add(m1);

  const m2 = new THREE.Mesh(LEAF_CARD_GEO, mat);
  m2.scale.set(size, size, 1);
  m2.rotation.y = Math.PI * 0.5;
  m2.rotation.x = 0.22;
  m2.castShadow = true;
  m2.receiveShadow = true;
  g.add(m2);
  parent.add(g);
}

function buildBonsai(parent, mats, x, y, z, scale = 1.0) {
  const g = new THREE.Group();
  g.position.set(x, y, z);
  g.scale.setScalar(scale);

  const potProfile = [
    new THREE.Vector2(0.0, 0.0),
    new THREE.Vector2(0.32, 0.0),
    new THREE.Vector2(0.36, 0.10),
    new THREE.Vector2(0.44, 0.32),
    new THREE.Vector2(0.48, 0.50),
    new THREE.Vector2(0.52, 0.56),
    new THREE.Vector2(0.44, 0.56),
    new THREE.Vector2(0.40, 0.48),
  ];
  const pot = new THREE.Mesh(new THREE.LatheGeometry(potProfile, 16), mats.ceramicPot);
  pot.castShadow = true;
  pot.receiveShadow = true;
  g.add(pot);

  cyl(g, 0.40, 0.40, 0.04, 14, mats.slabEarth, 0, 0.50, 0, { cast: false });

  const trunkCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 0.48, 0),
    new THREE.Vector3(-0.12, 0.85, 0.05),
    new THREE.Vector3(0.08, 1.25, -0.04),
    new THREE.Vector3(-0.04, 1.62, 0.02),
  ]);
  const trunk = new THREE.Mesh(new THREE.TubeGeometry(trunkCurve, 12, 0.075, 8, false), mats.bonsaiBark);
  trunk.castShadow = true;
  g.add(trunk);

  // Hand-painted anime leaf-card pads (zero plastic balls!)
  const foliage = new THREE.Group();
  g.add(foliage);
  const pads = [
    [-0.34, 1.04, 0.08, 0.68, mats.animeLeafCard],
    [0.34, 1.24, -0.06, 0.72, mats.animeLeafCard],
    [-0.22, 1.48, -0.12, 0.66, mats.bonsaiLeafLight],
    [0.04, 1.72, 0.02, 0.82, mats.bonsaiLeafLight],
    [0.18, 1.48, 0.14, 0.58, mats.animeLeafCard],
  ];
  pads.forEach(([px, py, pz, sz, mat], i) => addLeafCardCluster(foliage, mat, px, py, pz, sz, i + x));

  parent.add(g);
  return foliage;
}

// Natural Ground-Planted Eco-Park Bonsai (NO pot! Mossy earth mound + river boulders + exposed roots + sculptural canopy)
function buildGroundBonsai(parent, mats, x, y, z, { scale = 1.0, rotY = 0, blossom = false } = {}) {
  const g = new THREE.Group();
  g.position.set(x, y, z);
  g.rotation.y = rotY;
  g.scale.setScalar(scale);

  // Soft mossy earth mound (gò đất rêu tự nhiên)
  const moundGeo = new THREE.DodecahedronGeometry(0.68, 1);
  moundGeo.scale(1.25, 0.34, 1.15);
  const mound = new THREE.Mesh(moundGeo, mats.grassLight);
  mound.position.set(0, 0.08, 0);
  mound.receiveShadow = true;
  mound.castShadow = false;
  g.add(mound);

  // Warm dark soil patch at root crown
  cyl(g, 0.38, 0.46, 0.08, 10, mats.slabEarth, 0, 0.18, 0, { cast: false });

  // Natural river boulders nestled around the base
  const rocks = [
    [-0.52, 0.12, 0.24, 0.24, 0.16, 0.20, mats.stoneBase],
    [0.48, 0.11, -0.22, 0.28, 0.15, 0.22, mats.pillarBand],
    [0.14, 0.10, 0.52, 0.20, 0.13, 0.18, mats.stoneBase],
    [-0.32, 0.10, -0.44, 0.22, 0.14, 0.19, mats.pillarBand],
  ];
  for (const [rx, ry, rz, sx, sy, sz, rMat] of rocks) {
    const rGeo = new THREE.DodecahedronGeometry(1, 0);
    rGeo.scale(sx, sy, sz);
    const rock = new THREE.Mesh(rGeo, rMat);
    rock.position.set(rx, ry, rz);
    rock.rotation.set(rx * 2, rz * 3, ry * 2);
    rock.castShadow = true;
    rock.receiveShadow = true;
    g.add(rock);
  }

  // Flared sculptural buttress roots (bộ rễ nổi)
  for (let ri = 0; ri < 4; ri++) {
    const ang = (ri / 4) * Math.PI * 2 + 0.35;
    const rootCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0.36, 0),
      new THREE.Vector3(Math.cos(ang) * 0.22, 0.22, Math.sin(ang) * 0.22),
      new THREE.Vector3(Math.cos(ang) * 0.44, 0.09, Math.sin(ang) * 0.44),
    ]);
    const rMesh = new THREE.Mesh(new THREE.TubeGeometry(rootCurve, 6, 0.055, 6, false), mats.bonsaiBark);
    rMesh.castShadow = true;
    g.add(rMesh);
  }

  // Winding gnarled main bonsai trunk + side limbs
  const trunkCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 0.20, 0),
    new THREE.Vector3(-0.22, 0.72, 0.08),
    new THREE.Vector3(0.16, 1.24, -0.06),
    new THREE.Vector3(-0.08, 1.76, 0.04),
    new THREE.Vector3(0.06, 2.08, 0.0),
  ]);
  const trunk = new THREE.Mesh(new THREE.TubeGeometry(trunkCurve, 14, 0.11, 8, false), mats.bonsaiBark);
  trunk.castShadow = true;
  g.add(trunk);

  // Sculptural sweeping side branches
  const limb1 = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-0.16, 0.85, 0.06),
    new THREE.Vector3(-0.56, 1.02, 0.18),
    new THREE.Vector3(-0.82, 1.12, 0.22),
  ]);
  const limb2 = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0.14, 1.22, -0.05),
    new THREE.Vector3(0.58, 1.38, -0.14),
    new THREE.Vector3(0.84, 1.48, -0.18),
  ]);
  for (const lc of [limb1, limb2]) {
    const lm = new THREE.Mesh(new THREE.TubeGeometry(lc, 8, 0.055, 6, false), mats.bonsaiBark);
    lm.castShadow = true;
    g.add(lm);
  }

  // Lush layered Ghibli cloud-pruned foliage pads (tán mây bonsai)
  const foliage = new THREE.Group();
  g.add(foliage);
  const accentMat = blossom ? mats.animeBlossomCard : mats.bonsaiLeafLight;
  const pads = [
    [-0.78, 1.22, 0.22, 0.88, mats.animeLeafCard],
    [-0.50, 1.36, 0.12, 0.74, accentMat],
    [0.78, 1.56, -0.16, 0.92, mats.animeLeafCard],
    [0.48, 1.68, -0.06, 0.76, accentMat],
    [-0.24, 1.88, -0.14, 0.82, mats.animeLeafCard],
    [0.08, 2.18, 0.04, 1.05, accentMat],
    [0.24, 1.94, 0.22, 0.72, mats.animeLeafCard],
  ];
  pads.forEach(([px, py, pz, sz, mat], i) => addLeafCardCluster(foliage, mat, px, py, pz, sz, i + x * 1.3 + z));

  parent.add(g);
  return foliage;
}

// Helper: build a 3D V-folded arched palm frond geometry (curved spine + dihedral leaflet droop!)
function createArchedFrondGeo(length, width, archLift, tipDrop, vFold) {
  const geo = new THREE.PlaneGeometry(length, width, 10, 2);
  const fp = geo.attributes.position;
  for (let i = 0; i < fp.count; i++) {
    const fx = fp.getX(i) + length * 0.5; // 0..length
    const fy = fp.getY(i); // -width/2 .. +width/2
    const u = fx / length;
    const v = Math.abs(fy) / (width * 0.5); // 0 at midrib, 1 at outer leaflet tip
    fp.setX(i, fx);
    // Arch upward along midrib, droop gracefully at tip, and fold outer leaflets down in a natural V!
    const archZ = Math.sin(u * Math.PI) * archLift - u * u * tipDrop;
    const foldZ = -v * vFold * (0.35 + 0.65 * Math.sin(u * Math.PI));
    fp.setZ(i, archZ + foldZ);
  }
  geo.computeVertexNormals();
  return geo;
}

const COCO_FROND_GEO = createArchedFrondGeo(2.95, 1.38, 0.62, 1.15, 0.30);
const COCO_YOUNG_GEO = createArchedFrondGeo(2.05, 0.98, 0.85, 0.42, 0.20);
const ARECA_FROND_GEO = createArchedFrondGeo(1.75, 0.82, 0.52, 0.68, 0.22);

// Super-Lush Ghibli Mekong Delta Coconut Palm (ringed trunk, root collar, rich coconut clusters, 16-frond 3-tier V-folded crown!)
function buildCoconutPalm(parent, mats, x, y, z, { height = 5.8, leanX = 0.7, leanZ = 0.35, rotY = 0 } = {}) {
  const g = new THREE.Group();
  g.position.set(x, y, z);
  g.rotation.y = rotY;

  // Flared fibrous root collar (gốc dừa)
  cyl(g, 0.20, 0.33, 0.44, 10, mats.palmTrunk, 0, 0.22, 0);

  // Gracefully curving tapered ringed trunk
  const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 0.05, 0),
    new THREE.Vector3(leanX * 0.22, height * 0.34, leanZ * 0.22),
    new THREE.Vector3(leanX * 0.68, height * 0.72, leanZ * 0.68),
    new THREE.Vector3(leanX, height, leanZ),
  ]);
  const trunkGeo = new THREE.TubeGeometry(curve, 18, 0.19, 10, false);
  const pos = trunkGeo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const py = pos.getY(i);
    const k = 1.0 - 0.42 * Math.min(1, py / height);
    const c = curve.getPointAt(Math.max(0, Math.min(1, py / height)));
    pos.setX(i, c.x + (pos.getX(i) - c.x) * k);
    pos.setZ(i, c.z + (pos.getZ(i) - c.z) * k);
  }
  trunkGeo.computeVertexNormals();
  const trunk = new THREE.Mesh(trunkGeo, mats.palmTrunk);
  trunk.castShadow = true;
  trunk.receiveShadow = true;
  g.add(trunk);

  const crown = new THREE.Group();
  crown.position.set(leanX, height, leanZ);
  g.add(crown);

  // Fibrous crown heart (bẹ dừa)
  cyl(crown, 0.18, 0.13, 0.36, 8, mats.bonsaiBark, 0, -0.04, 0);

  // Abundant hanging coconut clusters (buồng dừa xiêm xanh & dừa vàng)
  const nutGeo = new THREE.SphereGeometry(0.145, 9, 8);
  nutGeo.scale(0.92, 1.15, 0.92);
  for (let i = 0; i < 9; i++) {
    const a = (i / 9) * Math.PI * 2 + (i % 2) * 0.18;
    const rad = 0.20 + (i % 2) * 0.08;
    const ny = -0.18 - (i % 3) * 0.09;
    const nut = new THREE.Mesh(nutGeo, i % 3 === 0 ? mats.coconutGold : mats.coconutGreen);
    nut.position.set(Math.cos(a) * rad, ny, Math.sin(a) * rad);
    nut.castShadow = true;
    crown.add(nut);
  }

  // 3-Tier Volumetric 16-Frond Crown:
  // Tier 1 (Bottom: 6 long drooping mature fronds)
  for (let i = 0; i < 6; i++) {
    const fg = new THREE.Group();
    fg.rotation.y = (i / 6) * Math.PI * 2 + 0.12;
    const m = new THREE.Mesh(COCO_FROND_GEO, mats.animePalmCard);
    m.rotation.x = -Math.PI * 0.5 + 0.24;
    m.position.y = -0.04;
    m.scale.setScalar(1.06);
    m.castShadow = true;
    fg.add(m);
    crown.add(fg);
  }
  // Tier 2 (Middle: 6 wide sunlit sweeping fronds)
  for (let i = 0; i < 6; i++) {
    const fg = new THREE.Group();
    fg.rotation.y = (i / 6) * Math.PI * 2 + 0.64;
    const m = new THREE.Mesh(COCO_FROND_GEO, mats.animePalmCard);
    m.rotation.x = -Math.PI * 0.5 - 0.12;
    m.position.y = 0.08;
    m.scale.setScalar(0.98);
    m.castShadow = true;
    fg.add(m);
    crown.add(fg);
  }
  // Tier 3 (Top: 4 perky bright-green young inner fronds)
  for (let i = 0; i < 4; i++) {
    const fg = new THREE.Group();
    fg.rotation.y = (i / 4) * Math.PI * 2 + 0.35;
    const m = new THREE.Mesh(COCO_YOUNG_GEO, mats.animePalmCardLight);
    m.rotation.x = -Math.PI * 0.5 - 0.52;
    m.position.y = 0.16;
    m.castShadow = true;
    fg.add(m);
    crown.add(fg);
  }

  parent.add(g);
  return crown;
}

// Authentic Vietnamese Areca Palm (Cây Cau miền Tây — slender ringed trunk, emerald crownshaft, buồng cau, fountain crown!)
function buildArecaPalm(parent, mats, x, y, z, { height = 5.4, lean = 0.08, rotY = 0 } = {}) {
  const g = new THREE.Group();
  g.position.set(x, y, z);
  g.rotation.y = rotY;

  const shaftH = 0.92;
  const trunkH = height - shaftH;

  // Neat root collar
  cyl(g, 0.11, 0.16, 0.24, 9, mats.arecaTrunk, 0, 0.12, 0);

  // Slender arrow-straight ringed areca trunk
  const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(lean * 0.4, trunkH * 0.5, 0),
    new THREE.Vector3(lean, trunkH, 0),
  ]);
  const trunkGeo = new THREE.TubeGeometry(curve, 12, 0.095, 8, false);
  const pos = trunkGeo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const py = pos.getY(i);
    const k = 1.0 - 0.18 * Math.min(1, py / trunkH);
    const c = curve.getPointAt(Math.max(0, Math.min(1, py / trunkH)));
    pos.setX(i, c.x + (pos.getX(i) - c.x) * k);
    pos.setZ(i, c.z + (pos.getZ(i) - c.z) * k);
  }
  trunkGeo.computeVertexNormals();
  const trunk = new THREE.Mesh(trunkGeo, mats.arecaTrunk);
  trunk.castShadow = true;
  trunk.receiveShadow = true;
  g.add(trunk);

  // Signature smooth bright-green upper crownshaft (bẹ cau xanh mướt)
  cyl(g, 0.088, 0.098, shaftH, 10, mats.arecaCrownshaft, lean, trunkH + shaftH * 0.5, 0);

  // Hanging buồng cau (cluster of glossy green areca nuts right below the crownshaft!)
  const nutGeo = new THREE.SphereGeometry(0.052, 7, 6);
  nutGeo.scale(0.85, 1.35, 0.85);
  for (let i = 0; i < 10; i++) {
    const a = (i / 10) * Math.PI * 2;
    const ny = trunkH - 0.04 - (i % 3) * 0.065;
    const rad = 0.11 + (i % 2) * 0.045;
    const nut = new THREE.Mesh(nutGeo, mats.arecaNut);
    nut.position.set(lean + Math.cos(a) * rad, ny, Math.sin(a) * rad);
    g.add(nut);
  }

  // Crisp 11-frond 2-tier upright fountain crown
  const crown = new THREE.Group();
  crown.position.set(lean, height - 0.05, 0);
  g.add(crown);

  for (let i = 0; i < 7; i++) {
    const fg = new THREE.Group();
    fg.rotation.y = (i / 7) * Math.PI * 2;
    const m = new THREE.Mesh(ARECA_FROND_GEO, mats.animePalmCard);
    m.rotation.x = -Math.PI * 0.5 - 0.14;
    m.castShadow = true;
    fg.add(m);
    crown.add(fg);
  }
  for (let i = 0; i < 4; i++) {
    const fg = new THREE.Group();
    fg.rotation.y = (i / 4) * Math.PI * 2 + 0.45;
    const m = new THREE.Mesh(ARECA_FROND_GEO, mats.animePalmCardLight);
    m.rotation.x = -Math.PI * 0.5 - 0.58;
    m.scale.setScalar(0.74);
    m.castShadow = true;
    fg.add(m);
    crown.add(fg);
  }

  parent.add(g);
  return crown;
}

// Tropical banana clump (bụi chuối)
function buildBananaClump(parent, mats, x, y, z, scale = 1.0) {
  const g = new THREE.Group();
  g.position.set(x, y, z);
  g.scale.setScalar(scale);

  for (let s = 0; s < 3; s++) {
    const sa = (s / 3) * Math.PI * 2 + 0.4;
    const sx = Math.cos(sa) * 0.22;
    const sz = Math.sin(sa) * 0.22;
    const h = 1.35 + (s % 2) * 0.35;
    cyl(g, 0.08, 0.12, h, 8, mats.grassBund, sx, h * 0.5, sz);

    for (let l = 0; l < 4; l++) {
      const la = sa + (l / 4) * Math.PI * 2;
      const lg = new THREE.Group();
      lg.position.set(sx, h, sz);
      lg.rotation.y = la;
      const leaf = new THREE.Mesh(new THREE.BoxGeometry(1.15, 0.045, 0.36), mats.bananaLeaf);
      leaf.position.set(0.55, 0.14, 0);
      leaf.rotation.z = -0.32;
      leaf.castShadow = true;
      lg.add(leaf);
      g.add(lg);
    }
  }
  parent.add(g);
  return g;
}

// True Hand-Painted Anime Tree built from 24 layered alpha-cutout leaf-cluster cards (ZERO plastic spheres!)
function buildShadeTree(parent, mats, x, y, z, scale = 1.0) {
  const g = new THREE.Group();
  g.position.set(x, y, z);
  g.scale.setScalar(scale);

  cyl(g, 0.17, 0.30, 2.25, 10, mats.bonsaiBark, 0, 1.12, 0);
  cyl(g, 0.09, 0.15, 1.25, 8, mats.bonsaiBark, -0.42, 2.25, 0.14, { rot: [0.1, 0, 0.58] });
  cyl(g, 0.09, 0.15, 1.20, 8, mats.bonsaiBark, 0.38, 2.18, -0.16, { rot: [0.2, 0, -0.52] });
  cyl(g, 0.08, 0.12, 1.05, 8, mats.bonsaiBark, 0.05, 2.30, 0.36, { rot: [0.45, 0, 0.1] });

  const crown = new THREE.Group();
  crown.position.set(0, 2.75, 0);
  g.add(crown);

  // 24 overlapping painted leaf-cluster cards in deep teal -> emerald -> sunlit mint-gold
  for (let i = 0; i < 24; i++) {
    const phi = Math.acos(1 - 2 * ((i + 0.5) / 24));
    const theta = Math.PI * (1 + Math.sqrt(5)) * i;
    const rad = 0.72 + (i % 3) * 0.34;
    const px = Math.sin(phi) * Math.cos(theta) * rad * 1.18;
    const py = Math.cos(phi) * rad * 0.76 + 0.35;
    const pz = Math.sin(phi) * Math.sin(theta) * rad * 1.12;
    const mat = py > 0.68 ? mats.treeCanopyLight : (py < 0.05 ? mats.treeCanopyDark : mats.treeCanopyMid);
    const sz = 1.18 + (i % 4) * 0.22;
    addLeafCardCluster(crown, mat, px, py, pz, sz, i + x * 0.7);
  }
  parent.add(g);
  return crown;
}

// Hand-Painted Anime Flowering Bush / Orange-Blossom Hedge (from reference painting! ZERO plastic spheres!)
function buildBush(parent, mats, x, y, z, scale = 1.0, flowerMat = null) {
  const g = new THREE.Group();
  g.position.set(x, y, z);
  g.scale.setScalar(scale);
  const cardMat = flowerMat ? mats.animeBlossomCard : mats.animeLeafCard;
  const spots = [
    [0, 0.42, 0, 0.98],
    [-0.38, 0.32, 0.18, 0.82],
    [0.38, 0.34, -0.15, 0.84],
    [0.08, 0.56, 0.16, 0.76],
    [-0.14, 0.38, -0.26, 0.78],
  ];
  spots.forEach(([bx, by, bz, sz], i) => addLeafCardCluster(g, cardMat, bx, by, bz, sz, i + z));
  parent.add(g);
}

// Build a neat, low-trimmed velvety 9-blade Ghibli meadow grass clump
function createBladeTuftGeometry() {
  const positions = [];
  const normals = [];
  const bladeCount = 9;
  for (let b = 0; b < bladeCount; b++) {
    const ang = (b / bladeCount) * Math.PI * 2 + (b % 3) * 0.22;
    const ca = Math.cos(ang);
    const sa = Math.sin(ang);
    const tx = -sa;
    const tz = ca;
    const rOff = (b % 3) * 0.055;
    const ox = ca * rOff;
    const oz = sa * rOff;
    const h = 0.14 + (b % 4) * 0.025; // Low, neat Ghibli lawn height!
    const lean = 0.08 + (b % 3) * 0.025;
    const w0 = 0.048;
    const w1 = 0.026;

    const p0L = [ox + tx * w0, 0, oz + tz * w0];
    const p0R = [ox - tx * w0, 0, oz - tz * w0];
    const p1L = [ox + ca * lean * 0.45 + tx * w1, h * 0.56, oz + sa * lean * 0.45 + tz * w1];
    const p1R = [ox + ca * lean * 0.45 - tx * w1, h * 0.56, oz + sa * lean * 0.45 - tz * w1];
    const p2 = [ox + ca * lean * 1.15, h, oz + sa * lean * 1.15];

    const pushTri = (a, c, d) => {
      positions.push(...a, ...c, ...d);
      normals.push(0, 1, 0, 0, 1, 0, 0, 1, 0);
    };
    pushTri(p0L, p0R, p1R);
    pushTri(p0L, p1R, p1L);
    pushTri(p1L, p1R, p2);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
  return geo;
}

const SHARED_BLADE_GEO = createBladeTuftGeometry();

// Dense low velvety Ghibli meadow grass & rice (warm sunlit olive/sage/emerald palette!)
function buildRiceTufts(parent, mats, x0, x1, z0, z1, y, stepX = 0.36, stepZ = 0.34, palette = [0x6ca848, 0x7fb84e, 0x5c9842, 0x8ec45c, 0x50883c]) {
  const pts = [];
  let idx = 0;
  for (let z = z0; z <= z1; z += stepZ) {
    for (let x = x0; x <= x1; x += stepX) {
      const jx = Math.sin(idx * 12.7) * (stepX * 0.38);
      const jz = Math.cos(idx * 7.3) * (stepZ * 0.38);
      pts.push({ x: x + jx, z: z + jz, idx });
      idx++;
    }
  }
  const mesh = new THREE.InstancedMesh(SHARED_BLADE_GEO, mats.riceBlade, pts.length);
  const dummy = new THREE.Object3D();
  const col = new THREE.Color();
  for (let i = 0; i < pts.length; i++) {
    const p = pts[i];
    dummy.position.set(p.x, y, p.z);
    dummy.rotation.set(0, (p.idx * 1.37) % (Math.PI * 2), 0);
    const sc = 0.88 + (p.idx % 4) * 0.08;
    dummy.scale.set(sc * 1.15, sc * 0.72, sc * 1.15);
    dummy.updateMatrix();
    mesh.setMatrixAt(i, dummy.matrix);
    col.setHex(palette[p.idx % palette.length]);
    mesh.setColorAt(i, col);
  }
  mesh.instanceMatrix.needsUpdate = true;
  if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
}

export function buildShopScene(root, mats) {
  const animHandles = {
    medallionPivot: null,
    bonsaiCrowns: [],
    palmCrowns: [],
    riceGroups: [],
    shopRoofGroup: null,
    clockHands: null,
  };

  // 1. Expanded Bevelled Mekong Delta Diorama Slab (26.0 x 19.5 m, z: -10.5 to +9.0)
  const zc = DATUM.SLAB_Z_CENTER;
  box(root, DATUM.SLAB_W, DATUM.SLAB_H, DATUM.SLAB_D, mats.slabEarth, 0, -DATUM.SLAB_H * 0.5, zc, { r: 0.16, cast: false });
  box(root, DATUM.SLAB_W + 0.1, 0.12, DATUM.SLAB_D + 0.1, mats.slabRim, 0, -0.06, zc, { r: 0.04, cast: false });

  // 2. Surrounding Countryside Base (grass verge + terraced rice paddies + irrigation ditch)
  // Full lush green grass base over the countryside slab
  box(root, DATUM.SLAB_W - 0.1, 0.06, DATUM.SLAB_D - 0.1, mats.grassVerge, 0, 0.01, zc, { cast: false });

  // Rear Terraced Rice Paddies (đồng ruộng phía sau kho & vườn bonsai)
  box(root, 14.2, 0.05, 2.8, mats.riceField, -7.4, 0.02, -20.5, { cast: false });
  box(root, 14.2, 0.05, 2.8, mats.riceField, 7.4, 0.02, -20.5, { cast: false });
  // Rice paddy behind the Bonsai Garden (z: -18.8 to -14.8)
  box(root, 12.8, 0.05, 3.8, mats.riceField, 7.9, 0.02, -16.8, { cast: false });
  box(root, 29.4, 0.16, 0.34, mats.grassBund, 0, 0.08, -18.95, { r: 0.04, cast: false });
  box(root, 29.4, 0.16, 0.34, mats.grassBund, 0, 0.08, -21.95, { r: 0.04, cast: false });
  box(root, 0.42, 0.18, 3.2, mats.grassBund, 0.0, 0.09, -20.5, { r: 0.04, cast: false });
  box(root, 12.8, 0.16, 0.34, mats.grassBund, 7.9, 0.08, -14.85, { r: 0.04, cast: false });
  buildRiceTufts(root, mats, -14.0, -0.7, -21.5, -19.3, 0.04, 0.42, 0.40);
  buildRiceTufts(root, mats, 0.7, 14.0, -21.5, -19.3, 0.04, 0.42, 0.40);
  buildRiceTufts(root, mats, 2.0, 14.0, -18.4, -15.3, 0.04, 0.44, 0.44);

  // Left-side Rice Paddy + Long Irrigation Ditch (running full length along z: -18.6 to +1.0!)
  box(root, 3.2, 0.05, 17.8, mats.riceField, -13.2, 0.02, -9.3, { cast: false });
  buildRiceTufts(root, mats, -14.4, -11.9, -17.8, -0.8, 0.04, 0.38, 0.40);
  box(root, 0.72, 0.04, 19.6, mats.ditchWater, -11.25, 0.025, -8.4, { cast: false });
  // Cute little wooden plank footbridge over the irrigation ditch
  for (let i = 0; i < 4; i++) {
    box(root, 1.15, 0.06, 0.18, mats.woodPlank, -11.25, 0.14, 0.45 + i * 0.22, { r: 0.01 });
  }
  box(root, 0.10, 0.10, 0.95, mats.bonsaiBark, -11.75, 0.08, 0.78);
  box(root, 0.10, 0.10, 0.95, mats.bonsaiBark, -10.75, 0.08, 0.78);

  // Across-the-road Velvety Green Meadow & Front Rice Paddy Edge (dense lush grass carpet!)
  box(root, 29.4, 0.04, 2.0, mats.riceField, 0, 0.015, 7.75, { cast: false });
  box(root, 29.4, 0.14, 0.34, mats.grassBund, 0, 0.07, 6.65, { r: 0.04, cast: false });
  buildRiceTufts(root, mats, -14.4, 14.4, 6.85, 8.75, 0.035, 0.32, 0.30);

  // 3. Trần Văn Giàu (DT879C) Weathered Asphalt Road + Dashed Yellow Center Line
  box(root, DATUM.SLAB_W, 0.05, 3.35, mats.asphalt, 0, DATUM.ROAD_Y + 0.045, 4.78, { cast: false });
  for (let x = -13.8; x <= 13.8; x += 2.2) {
    box(root, 1.05, 0.012, 0.14, mats.roadStripe, x, DATUM.ROAD_Y + 0.076, 4.78, { cast: false });
  }
  // Dense velvety wild meadow grass lining the roadside verges, ditch banks & side gardens!
  buildRiceTufts(root, mats, -14.4, 14.4, 6.45, 6.80, 0.12, 0.28, 0.22, [0x3d8c3a, 0x52a844, 0x6ec04c, 0x489a42]);
  buildRiceTufts(root, mats, -10.85, -10.45, -18.2, 0.2, 0.04, 0.26, 0.34, [0x3d8c3a, 0x52a844, 0x6ec04c]);
  buildRiceTufts(root, mats, 11.6, 14.3, -6.2, 2.8, 0.04, 0.36, 0.36, [0x3d8c3a, 0x52a844, 0x6ec04c, 0x7acc54]);
  buildRiceTufts(root, mats, -14.3, -11.4, 1.2, 2.9, 0.04, 0.34, 0.34, [0x3d8c3a, 0x52a844, 0x6ec04c]);

  // 4. Concrete Sidewalk Apron & Curb
  box(root, 20.6, DATUM.WALK_Y, 1.9, mats.concrete, -0.8, DATUM.WALK_Y * 0.5, 2.15, { cast: false });
  box(root, 20.6, 0.10, 0.16, mats.concreteDark, -0.8, 0.05, 3.12, { cast: false });

  // 5. Retail Hall Tiled Floor (z: -4.20 to +1.20) + Warm Earth Warehouse Floor (z: -19.00 to -4.20) — ZERO overlap!
  box(root, 11.6, DATUM.SHOP_Y, 5.40, mats.shopFloor, -5.0, DATUM.SHOP_Y * 0.5, -1.50, { cast: false });
  box(root, 11.6, DATUM.SHOP_Y - 0.004, 14.80, mats.warehouseEarthFloor, -5.0, (DATUM.SHOP_Y - 0.004) * 0.5, -11.60, { cast: false });
  // Crisp concrete threshold divider strip cleanly bridging the tile-to-earth seam at z = -4.20
  box(root, 9.6, 0.012, 0.14, mats.concreteDark, -4.1, DATUM.SHOP_Y + 0.006, -4.20, { cast: false });
  // Expanded Courtyard Tiled Floor (x: +0.8 to +11.4, creating wide sunlit side lane between warehouse & house!)
  box(root, 10.6, DATUM.YARD_Y, 7.6, mats.courtyardTile, 6.1, DATUM.YARD_Y * 0.5, -2.6, { cast: false });

  // 6. TALL AIRY SHOP BAY & KHO THUỐC (9.8 m wide x 19.4 m deep x 5.4 m HIGH ceiling — zero coplanar corner overlap!)
  const shopY = DATUM.SHOP_Y;
  const wallH = 5.40;
  // Tall rear wall with wide sunlit loading doorway (x: -5.2 to -3.0) + high transom skylight band!
  box(root, 3.9, wallH, 0.24, mats.shopWallBlue, -7.15, shopY + wallH * 0.5, -18.7);
  box(root, 3.9, wallH, 0.24, mats.shopWallBlue, -1.05, shopY + wallH * 0.5, -18.7);
  box(root, 2.4, 2.20, 0.24, mats.shopWallBlue, -4.1, shopY + 4.30, -18.7);
  // High transom skylight window above rear doorway
  box(root, 2.1, 0.55, 0.30, mats.skylightGlow, -4.1, shopY + 4.45, -18.7, { cast: false });

  // Tall left & right warehouse walls (ending cleanly at z = -18.58 before the rear wall — zero corner Z-fighting!)
  box(root, 0.24, wallH, 19.28, mats.shopWallBlue, -9.0, shopY + wallH * 0.5, -8.94);
  box(root, 0.24, wallH, 17.48, mats.shopWallBlue, 0.8, shopY + wallH * 0.5, -9.84);

  // High Clerestory Skylight Windows (lỗ thông sáng trên cao) + Soft Slanting Anime Sunbeams!
  for (const lz of [-2.4, -5.6, -8.8, -12.0, -15.2, -17.6]) {
    // Left-wall bright skylight opening + frame
    box(root, 0.30, 0.62, 1.45, mats.skylightGlow, -8.98, shopY + 4.42, lz, { cast: false });
    box(root, 0.34, 0.08, 1.52, mats.timberDark, -8.98, shopY + 4.74, lz, { cast: false });
    box(root, 0.34, 0.08, 1.52, mats.timberDark, -8.98, shopY + 4.10, lz, { cast: false });
    // Right-wall bright skylight opening
    if (lz < -4.0) {
      box(root, 0.30, 0.62, 1.45, mats.skylightGlow, 0.78, shopY + 4.42, lz, { cast: false });
      box(root, 0.34, 0.08, 1.52, mats.timberDark, 0.78, shopY + 4.74, lz, { cast: false });
      box(root, 0.34, 0.08, 1.52, mats.timberDark, 0.78, shopY + 4.10, lz, { cast: false });
    }
    // Soft slanting golden sunbeam streaming down from left skylight into the warehouse!
    if (lz < -4.0) {
      const beam = new THREE.Mesh(new THREE.PlaneGeometry(1.35, 5.2), mats.sunbeam);
      beam.position.set(-7.1, shopY + 2.45, lz);
      beam.rotation.y = Math.PI * 0.5;
      beam.rotation.x = 0.58;
      root.add(beam);
    }
  }

  // Interior structural wall pilasters sitting flush against inner walls (no coplanar face overlap!)
  for (const bz of [-4.2, -8.2, -12.2, -16.2]) {
    box(root, 0.26, wallH - 0.04, 0.28, mats.creamWall, -8.74, shopY + (wallH - 0.04) * 0.5, bz);
    box(root, 0.26, wallH - 0.04, 0.28, mats.creamWall, 0.54, shopY + (wallH - 0.04) * 0.5, bz);
  }

  // Black-and-gold veined marble front columns set cleanly back at z = -0.85 (creating a wide 2.1 m open porch behind the orange archway!)
  box(root, 0.42, 3.6, 0.42, mats.graniteDark, -8.85, shopY + 1.80, -0.85);
  box(root, 0.42, 3.6, 0.42, mats.graniteDark, -4.6, shopY + 1.80, -0.85);
  box(root, 0.42, 3.6, 0.42, mats.graniteDark, 0.80, shopY + 1.80, -0.85);
  buildSignPanel(root, 0.34, 0.72, 0.025, mats.poster, mats.signBack, -4.6, shopY + 1.75, -0.615);
  buildSignPanel(root, 0.34, 0.72, 0.025, mats.poster, mats.signBack, 0.80, shopY + 1.75, -0.615);

  // High Corrugated Metal Roof (y = 5.45 m!) with exposed timber purlins & translucent skylight strips (tôn lấy sáng)
  const roofWrap = new THREE.Group();
  const roofGroup = new THREE.Group();
  roofGroup.position.set(-4.1, shopY + 5.22, -8.8);
  roofGroup.rotation.x = 0.032;
  box(roofGroup, 10.6, 0.12, 20.6, mats.metalRoof, 0, 0, 0);
  for (let rx = -5.1; rx <= 5.1; rx += 0.38) {
    box(roofGroup, 0.08, 0.06, 20.62, mats.metalRoof, rx, 0.08, 0);
  }
  // Exposed timber purlins underneath roof + 4 translucent glowing roof skylight panels (tôn lấy sáng)!
  for (let pz = -9.2; pz <= 9.2; pz += 2.6) {
    box(roofGroup, 10.2, 0.14, 0.14, mats.bonsaiBark, 0, -0.14, pz, { cast: false });
  }
  for (const sz of [-6.0, -1.5, 3.0, 6.8]) {
    box(roofGroup, 2.2, 0.20, 1.4, mats.skylightGlow, -1.6, -0.02, sz, { cast: false });
    box(roofGroup, 2.2, 0.20, 1.4, mats.skylightGlow, 1.6, -0.02, sz, { cast: false });
  }
  roofWrap.add(roofGroup);
  box(roofWrap, 9.2, 0.58, 0.12, mats.shutterGreen, -4.1, shopY + 3.25, -0.92);
  for (let i = 0; i < 4; i++) {
    box(roofWrap, 9.2, 0.03, 0.15, mats.wroughtIron, -4.1, shopY + 3.03 + i * 0.15, -0.91);
  }
  root.add(roofWrap);
  animHandles.shopRoofGroup = roofWrap;

  // Slim front steel support posts under the tall billboard & eave (clear of archway columns!)
  for (const px of [-8.8, -6.5, -4.3, -2.35]) {
    cyl(root, 0.055, 0.055, 3.62, 8, mats.steelPost, px, DATUM.WALK_Y + 1.81, 1.38);
  }

  // 7. Refined, Well-Proportioned Layered Signage (spanning widened shop + driveway!)
  buildSignPanel(root, 13.0, 1.56, 0.16, mats.upperSign, mats.signBack, -2.15, 4.44, 1.42);
  for (const sx of [-8.0, -5.2, -2.4, 0.4, 2.8]) {
    box(root, 0.07, 0.07, 1.3, mats.steelPost, sx, 4.1, 0.72);
  }

  // Lower Fascia Banner (BEHN MEYER AgriCare · Red SÁU QUÝ) set back neatly above the recessed shop front
  buildSignPanel(root, 9.2, 0.80, 0.12, mats.lowerSign, mats.signBack, -3.95, 3.35, -0.68);

  // 8. Ornate Black-and-Gold Perimeter Fence & Beige Stone Pillars (no duplicate pillars at -0.45 / +3.45!)
  buildStonePillar(root, mats, -4.2, 1.24, DATUM.WALK_Y);
  buildStonePillar(root, mats, -2.32, 1.24, DATUM.WALK_Y);
  buildFenceBay(root, mats, -4.0, -2.52, 1.24, DATUM.WALK_Y, true);
  buildFenceBay(root, mats, -2.12, -0.68, 1.24, DATUM.WALK_Y, false);

  buildStonePillar(root, mats, 5.9, 1.24, DATUM.WALK_Y);
  buildStonePillar(root, mats, 8.35, 1.24, DATUM.WALK_Y);
  buildFenceBay(root, mats, 3.68, 5.7, 1.24, DATUM.WALK_Y, true);
  buildFenceBay(root, mats, 6.1, 8.15, 1.24, DATUM.WALK_Y, true);

  // 9. Bright Orange Driveway Archway (single clean wrapped columns at -0.45 and +3.45 — ZERO Z-fighting!)
  buildSignPanel(root, 4.38, 0.56, 0.28, mats.archHeader, mats.signBack, 1.5, 3.12, 1.26);
  buildSignPanel(root, 0.48, 2.78, 0.48, mats.pillarWrap, mats.pillarBeige, -0.45, DATUM.WALK_Y + 1.39, 1.26);
  buildSignPanel(root, 0.48, 2.78, 0.48, mats.pillarWrap, mats.pillarBeige, 3.45, DATUM.WALK_Y + 1.39, 1.26);

  // Hanging Red Tết Medallion
  const medPivot = new THREE.Group();
  medPivot.position.set(1.85, 2.86, 1.44);
  buildSignPanel(medPivot, 0.94, 0.58, 0.06, mats.medallion, mats.medallion, 0, -0.32, 0);
  root.add(medPivot);
  animHandles.medallionPivot = medPivot;

  // 10. Authentic Shop Hall + Deep Kho Thuốc & Kho Phân Bón (from real photos & warehouse video!)
  const bottleMats = [mats.bottleWhite, mats.bottleOrange, mats.bottleYellow, mats.bottleBlue, mats.bottleCapGreen];

  // A. Exact L-Shaped Checkout Counter Zone (set back cleanly inside the recessed shop front!)
  // 1. White "hoptri summit" front reception desk facing +Z (street/entrance)
  buildSignPanel(root, 1.68, 0.82, 0.06, mats.hoptriDesk, mats.benchWhite, -0.95, shopY + 0.41, -1.45);
  box(root, 1.68, 0.78, 0.62, mats.benchWhite, -0.95, shopY + 0.39, -1.78, { r: 0.02 });
  box(root, 1.76, 0.06, 0.70, mats.cabGlass, -0.95, shopY + 0.82, -1.76, { r: 0.01 });
  // Mini bonsai in white ceramic pot on left of hoptri desk + wooden pen cup & white POS on right
  cyl(root, 0.13, 0.10, 0.14, 10, mats.benchWhite, -1.45, shopY + 0.92, -1.66);
  cyl(root, 0.025, 0.03, 0.18, 6, mats.bonsaiBark, -1.45, shopY + 1.06, -1.66);
  box(root, 0.28, 0.14, 0.22, mats.bonsaiLeafLight, -1.45, shopY + 1.18, -1.66, { r: 0.05 });
  box(root, 0.12, 0.12, 0.10, mats.counterWood, -0.52, shopY + 0.91, -1.64, { r: 0.01 });
  box(root, 0.16, 0.06, 0.14, mats.benchWhite, -0.32, shopY + 0.88, -1.64);

  // 2. Long green-topped wooden counter running perpendicular (along z = -2.15..-3.95, facing -X toward baskets!)
  box(root, 0.64, 0.78, 1.85, mats.counterWood, -1.42, shopY + 0.39, -3.00, { r: 0.02 });
  box(root, 0.70, 0.06, 1.92, mats.deskGreenTop, -1.42, shopY + 0.81, -3.00, { r: 0.01 });
  // MOVENTO blue/green poster on the customer-facing (-X) side of the wooden counter
  const movMesh = new THREE.Mesh(
    new THREE.BoxGeometry(0.03, 0.60, 0.92),
    [mats.counterWood, mats.moventoPoster, mats.counterWood, mats.counterWood, mats.counterWood, mats.counterWood]
  );
  movMesh.position.set(-1.75, shopY + 0.42, -2.75);
  root.add(movMesh);
  // Desktop monitor, keyboard & landline phone on the green-topped counter
  box(root, 0.05, 0.30, 0.42, mats.leatherChair, -1.52, shopY + 1.04, -2.45);
  box(root, 0.18, 0.04, 0.32, mats.benchWhite, -1.32, shopY + 0.86, -2.95);
  box(root, 0.16, 0.08, 0.18, mats.benchWhite, -1.35, shopY + 0.88, -2.28);

  // 3. Two black leather executive swivel chairs tucked cleanly BEHIND the L-shaped counter (x = -0.52)
  for (const [cx, cz, ry] of [[-0.52, -2.35, -0.3], [-0.52, -3.35, -Math.PI * 0.5]]) {
    const cg = new THREE.Group();
    cg.position.set(cx, shopY, cz);
    cg.rotation.y = ry;
    cyl(cg, 0.03, 0.03, 0.42, 8, mats.steelInox, 0, 0.21, 0);
    box(cg, 0.48, 0.05, 0.06, mats.steelInox, 0, 0.05, 0);
    box(cg, 0.06, 0.05, 0.48, mats.steelInox, 0, 0.05, 0);
    box(cg, 0.48, 0.10, 0.48, mats.leatherChair, 0, 0.45, 0, { r: 0.04 });
    box(cg, 0.46, 0.68, 0.10, mats.leatherChair, 0, 0.82, -0.22, { r: 0.04, rot: [-0.08, 0, 0] });
    root.add(cg);
  }

  // 4. Wide beige structural pillar standing cleanly at the back-left of the counter (x = -1.88, z = -4.12)
  box(root, 0.52, 5.20, 0.48, mats.creamWall, -1.88, shopY + 2.60, -4.12);
  box(root, 0.50, 0.32, 0.05, mats.leatherChair, -1.88, shopY + 2.52, -3.86); // Black wall TV

  // REAL-TIME WORKING ANALOG WALL CLOCK (numbers 1-12 + real 3D hour, minute & red second hands!)
  const clockGroup = new THREE.Group();
  clockGroup.position.set(-1.88, shopY + 2.08, -3.86);
  // Outer dark bezel + crisp painted dial face
  cyl(clockGroup, 0.165, 0.165, 0.04, 24, mats.timberDark, 0, 0, 0, { rot: [Math.PI * 0.5, 0, 0] });
  const dialCanvas = document.createElement('canvas');
  dialCanvas.width = 256;
  dialCanvas.height = 256;
  const dctx = dialCanvas.getContext('2d');
  dctx.fillStyle = '#fffdf8';
  dctx.beginPath(); dctx.arc(128, 128, 124, 0, Math.PI * 2); dctx.fill();
  dctx.strokeStyle = '#1d2b44';
  dctx.lineWidth = 6;
  dctx.stroke();
  for (let i = 0; i < 60; i++) {
    const a = (i / 60) * Math.PI * 2 - Math.PI * 0.5;
    const major = i % 5 === 0;
    const r0 = major ? 96 : 108;
    const r1 = 116;
    dctx.strokeStyle = major ? '#182438' : '#7b8494';
    dctx.lineWidth = major ? 4 : 2;
    dctx.beginPath();
    dctx.moveTo(128 + Math.cos(a) * r0, 128 + Math.sin(a) * r0);
    dctx.lineTo(128 + Math.cos(a) * r1, 128 + Math.sin(a) * r1);
    dctx.stroke();
  }
  dctx.fillStyle = '#182438';
  dctx.font = '700 22px "Space Grotesk", sans-serif';
  dctx.textAlign = 'center';
  dctx.textBaseline = 'middle';
  for (let h = 1; h <= 12; h++) {
    const a = (h / 12) * Math.PI * 2 - Math.PI * 0.5;
    dctx.fillText(String(h), 128 + Math.cos(a) * 76, 128 + Math.sin(a) * 76);
  }
  const dialTex = new THREE.CanvasTexture(dialCanvas);
  dialTex.colorSpace = THREE.SRGBColorSpace;
  const dialMat = new THREE.MeshBasicMaterial({ map: dialTex });
  dialMat.userData.outlineParameters = { visible: false };
  const dialDisc = new THREE.Mesh(new THREE.CircleGeometry(0.152, 24), dialMat);
  dialDisc.position.z = 0.023;
  clockGroup.add(dialDisc);

  // 3D animated clock hands pivoting around Z (clock faces +Z)
  const makeHand = (w, len, mat, zOff) => {
    const pivot = new THREE.Group();
    pivot.position.z = zOff;
    const geo = new THREE.BoxGeometry(w, len, 0.006);
    geo.translate(0, len * 0.42, 0);
    const m = new THREE.Mesh(geo, mat);
    pivot.add(m);
    clockGroup.add(pivot);
    return pivot;
  };
  const hourHand = makeHand(0.014, 0.082, mats.wroughtIron, 0.027);
  const minHand = makeHand(0.010, 0.118, mats.wroughtIron, 0.032);
  const secHand = makeHand(0.005, 0.128, mats.plasticRed, 0.037);
  const centerPin = new THREE.Mesh(new THREE.SphereGeometry(0.012, 8, 8), mats.plasticRed);
  centerPin.position.z = 0.040;
  clockGroup.add(centerPin);
  root.add(clockGroup);
  animHandles.clockHands = { hourHand, minHand, secHand };

  box(root, 0.36, 0.24, 0.03, mats.plasticRed, -1.88, shopY + 1.72, -3.86); // Red Tet painting
  for (let ti = 0; ti < 5; ti++) {
    cyl(root, 0.018, 0.018, 1.05, 6, mats.bonsaiBark, -2.04 + ti * 0.08, shopY + 0.55, -3.78, { rot: [0.06, 0, (ti - 2) * 0.04] });
  }

  // White water dispenser & standing grey floor fan tucked cleanly beside the counter
  box(root, 0.38, 0.96, 0.38, mats.benchWhite, 0.35, shopY + 0.48, -1.75, { r: 0.03 });
  cyl(root, 0.14, 0.14, 0.42, 12, mats.waterBlue, 0.35, shopY + 1.17, -1.75);
  cyl(root, 0.18, 0.22, 0.06, 12, mats.steelInox, 0.28, shopY + 0.03, -1.05);
  cyl(root, 0.025, 0.025, 0.95, 8, mats.steelInox, 0.28, shopY + 0.50, -1.05);
  cyl(root, 0.22, 0.22, 0.08, 14, mats.steelInox, 0.28, shopY + 1.05, -1.05, { rot: [Math.PI * 0.5, 0.35, 0] });

  // B. Left Wall Branded Glass Cabinets (BAYER, hoptri summit, HB-101) + Green Syngenta Stand (shifted cleanly to x = -8.62!)
  const leftCabs = [
    { z: -0.95, header: mats.cabBayer, frame: mats.shutterGreen },
    { z: -2.08, header: mats.cabHoptri, frame: mats.benchWhite },
    { z: -3.20, header: mats.cabHb101, frame: mats.benchWhite },
  ];
  for (let ci = 0; ci < leftCabs.length; ci++) {
    const cab = leftCabs[ci];
    box(root, 0.46, 2.05, 1.04, cab.frame, -8.62, shopY + 1.025, cab.z, { r: 0.02 });
    const hdr = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.30, 1.00), [cab.header, cab.frame, cab.frame, cab.frame, cab.frame, cab.frame]);
    hdr.position.set(-8.38, shopY + 1.86, cab.z);
    root.add(hdr);
    for (let sh = 0; sh < 4; sh++) {
      const sy = shopY + 0.34 + sh * 0.36;
      box(root, 0.38, 0.03, 0.96, mats.cabGlass, -8.56, sy, cab.z);
      for (let bz = -0.36; bz <= 0.36; bz += 0.18) {
        const bm = bottleMats[(ci + sh + Math.round((bz + 1) * 5)) % bottleMats.length];
        cyl(root, 0.04, 0.044, 0.20, 7, bm, -8.52, sy + 0.11, cab.z + bz);
      }
    }
    box(root, 0.38, 0.32, 0.46, mats.cartonBox, -8.62, shopY + 2.21, cab.z - 0.22);
    box(root, 0.36, 0.26, 0.42, mats.cartonBox, -8.62, shopY + 2.18, cab.z + 0.25);
  }
  box(root, 0.42, 1.55, 0.56, mats.syngentaGreen, -8.10, shopY + 0.78, -3.78, { r: 0.02 });
  for (let sh = 0; sh < 3; sh++) {
    cyl(root, 0.06, 0.06, 0.24, 7, mats.bottleWhite, -8.02, shopY + 0.32 + sh * 0.38, -3.88);
    cyl(root, 0.06, 0.06, 0.24, 7, mats.bottleWhite, -8.02, shopY + 0.32 + sh * 0.38, -3.68);
  }
  for (const fz of [-1.0, -2.0, -3.0, -4.2, -5.2]) {
    box(root, 0.04, 0.62, 0.54, mats.counterWood, -8.86, shopY + 2.92, fz);
  }

  // C. Iconic Sea of Colorful Plastic Baskets (shifted left to x = -7.45..-5.20 -> leaves a MASSIVE 3.3 m wide central walking avenue!)
  const basketMats = [mats.basketRed, mats.basketPink, mats.basketBlue, mats.basketWhite, mats.basketMint, mats.basketRed];
  const basketCols = [-7.55, -6.98, -6.41, -5.84, -5.27];
  const basketRows = [-3.20, -2.62, -2.04, -1.46];
  let bIdx = 0;
  for (const bz of basketRows) {
    for (const bx of basketCols) {
      const bm = basketMats[bIdx % basketMats.length];
      box(root, 0.44, 0.34, 0.42, bm, bx, shopY + 0.17, bz, { r: 0.03 });
      for (let p = 0; p < 3; p++) {
        const pm = bottleMats[(bIdx + p) % bottleMats.length];
        box(root, 0.15, 0.14, 0.05, pm, bx + (p - 1) * 0.10, shopY + 0.36, bz + (p % 2 ? 0.05 : -0.05), {
          rot: [0.22 * (p - 1), 0.3 * p, 0.15 * (p - 1)],
        });
      }
      bIdx++;
    }
  }

  // D. Front Entrance: Stacked Cartons + Stainless Table (tucked cleanly left at x = -6.3..-4.9 so front entry is wide open!)
  for (let c = 0; c < 6; c++) {
    box(root, 0.48, 0.28, 0.38, mats.cartonBox, -6.15, shopY + 0.14 + c * 0.285, -0.08, {
      rot: [0, (c % 2 ? 0.04 : -0.03), 0],
    });
  }
  box(root, 1.15, 0.05, 0.68, mats.steelInox, -5.15, shopY + 0.72, -0.58, { r: 0.02 });
  for (const [lx, lz] of [[-0.48, -0.26], [0.48, -0.26], [-0.48, 0.26], [0.48, 0.26]]) {
    cyl(root, 0.022, 0.022, 0.72, 6, mats.steelInox, -5.15 + lx, shopY + 0.36, -0.58 + lz);
  }
  for (const [sx, sz] of [[-5.38, -0.32], [-4.82, -0.78], [-4.50, -0.38]]) {
    box(root, 0.30, 0.05, 0.30, mats.plasticRed, sx, shopY + 0.44, sz, { r: 0.02 });
    for (const [lx, lz] of [[-0.11, -0.11], [0.11, -0.11], [-0.11, 0.11], [0.11, 0.11]]) {
      box(root, 0.04, 0.44, 0.04, mats.plasticRed, sx + lx, shopY + 0.22, sz + lz);
    }
  }

  // E. EXPANSIVE WIDE KHO THUỐC & KHO PHÂN BÓN (massive 4.8 m-wide central loading avenue x = -6.4..-1.8!)
  const buildBagStack = (x, z, layers, bagMat, rotY = 0) => {
    for (let l = 0; l < layers; l++) {
      box(root, 0.80, 0.16, 0.50, bagMat, x, shopY + 0.08 + l * 0.162, z, {
        r: 0.055,
        rot: [0, rotY + (l % 2 ? 0.03 : -0.02), 0],
      });
    }
  };
  // Long Left Warehouse Wall Runs (x = -8.4..-7.45)
  buildBagStack(-8.4, -4.45, 9, mats.bagKraft, 0.02);
  buildBagStack(-8.4, -5.05, 10, mats.bagKraft, -0.02);
  buildBagStack(-7.52, -4.55, 7, mats.bagKraft, 0.04);
  buildBagStack(-7.52, -5.15, 8, mats.bagKraft, -0.03);

  buildBagStack(-8.4, -5.85, 11, mats.bagGreen, 0.01);
  buildBagStack(-8.4, -6.50, 12, mats.bagGreen, -0.02);
  buildBagStack(-7.52, -5.95, 10, mats.bagGreen, 0.03);
  buildBagStack(-7.52, -6.60, 10, mats.bagGreen, -0.02);

  buildBagStack(-8.4, -7.40, 11, mats.bagYara, 0.02);
  buildBagStack(-8.4, -8.05, 11, mats.bagYara, -0.01);
  buildBagStack(-7.52, -7.50, 8, mats.bagYara, 0.03);
  buildBagStack(-7.52, -8.15, 7, mats.bagYara, -0.02);

  buildBagStack(-8.4, -9.00, 12, mats.bagSilver, 0.01);
  buildBagStack(-8.4, -9.65, 12, mats.bagSilver, -0.02);
  buildBagStack(-7.52, -9.10, 10, mats.bagSilver, 0.02);
  buildBagStack(-7.52, -9.75, 10, mats.bagSilver, -0.01);

  buildBagStack(-8.4, -10.75, 10, mats.bagGreen, 0.02);
  buildBagStack(-8.4, -11.45, 9, mats.bagYara, -0.02);
  buildBagStack(-7.52, -10.85, 8, mats.bagKraft, 0.03);
  buildBagStack(-7.52, -11.55, 8, mats.bagYara, -0.01);
  // Extra deep-warehouse left stacks extending to z = -17.8 + 3rd inner pallet stacks (nhiều phân hơn nữa!)
  buildBagStack(-8.4, -12.60, 12, mats.bagKraft, 0.01);
  buildBagStack(-8.4, -13.30, 12, mats.bagGreen, -0.02);
  buildBagStack(-7.52, -12.70, 10, mats.bagYara, 0.02);
  buildBagStack(-7.52, -13.40, 10, mats.bagSilver, -0.01);
  buildBagStack(-6.64, -12.70, 8, mats.bagBlue, 0.03);
  buildBagStack(-6.64, -13.40, 8, mats.bagOrange, -0.02);

  buildBagStack(-8.4, -14.60, 13, mats.bagYara, 0.02);
  buildBagStack(-8.4, -15.30, 12, mats.bagSilver, -0.02);
  buildBagStack(-7.52, -14.70, 11, mats.bagGreen, 0.03);
  buildBagStack(-7.52, -15.40, 10, mats.bagKraft, -0.02);
  buildBagStack(-6.64, -14.70, 9, mats.bagYara, 0.01);
  buildBagStack(-6.64, -15.40, 8, mats.bagGreen, -0.03);

  buildBagStack(-8.4, -16.65, 11, mats.bagGreen, 0.01);
  buildBagStack(-8.4, -17.40, 10, mats.bagYara, -0.02);
  buildBagStack(-7.52, -16.75, 9, mats.bagKraft, 0.02);
  buildBagStack(-7.52, -17.50, 9, mats.bagSilver, -0.01);
  buildBagStack(-6.64, -16.75, 7, mats.bagBlue, 0.02);
  buildBagStack(-6.64, -17.50, 7, mats.bagOrange, -0.02);
  // Extra mid-left 3rd row of colorful fertilizer bags (z = -8.9..-11.5)
  buildBagStack(-6.64, -9.15, 8, mats.bagOrange, 0.02);
  buildBagStack(-6.64, -9.85, 8, mats.bagBlue, -0.02);
  buildBagStack(-6.64, -10.85, 7, mats.bagYara, 0.01);
  buildBagStack(-6.64, -11.55, 7, mats.bagGreen, -0.02);

  // Classic RED Steel Hand Truck / Sack Dolly parked neatly beside left stacks (x = -6.62)
  const dx = -6.62, dz = -7.65;
  cyl(root, 0.022, 0.022, 1.18, 6, mats.dollyRed, dx - 0.18, shopY + 0.62, dz, { rot: [-0.14, 0, 0] });
  cyl(root, 0.022, 0.022, 1.18, 6, mats.dollyRed, dx + 0.18, shopY + 0.62, dz, { rot: [-0.14, 0, 0] });
  box(root, 0.40, 0.04, 0.04, mats.dollyRed, dx, shopY + 1.18, dz - 0.08);
  box(root, 0.40, 0.04, 0.04, mats.dollyRed, dx, shopY + 0.62, dz);
  box(root, 0.44, 0.04, 0.30, mats.dollyRed, dx, shopY + 0.08, dz + 0.18);
  cyl(root, 0.11, 0.11, 0.05, 10, mats.wroughtIron, dx - 0.22, shopY + 0.11, dz - 0.04, { rot: [0, 0, Math.PI * 0.5] });
  cyl(root, 0.11, 0.11, 0.05, 10, mats.wroughtIron, dx + 0.22, shopY + 0.11, dz - 0.04, { rot: [0, 0, Math.PI * 0.5] });

  // Stacked KENBAST / WEHG Cartons with 5 Red-Capped Green Herbicide Bottles beside left stacks
  box(root, 0.64, 0.38, 0.46, mats.cartonBox, -6.55, shopY + 0.19, -6.85);
  box(root, 0.64, 0.36, 0.46, mats.cartonBox, -6.55, shopY + 0.56, -6.85);
  for (let bi = 0; bi < 5; bi++) {
    const bx = -6.76 + (bi % 3) * 0.18;
    const bz = -6.94 + Math.floor(bi / 3) * 0.18;
    cyl(root, 0.058, 0.062, 0.24, 8, mats.syngentaGreen, bx, shopY + 0.86, bz);
    cyl(root, 0.048, 0.056, 0.10, 8, mats.bottleCapRed, bx, shopY + 1.03, bz);
  }

  // F. Slotted-Angle Metal Shelving Racks positioned cleanly on LEFT (x = -6.75..-5.55 -> wide open 3.5 m central hall!)
  for (const [rx, rz] of [[-6.75, -4.15], [-5.75, -4.15]]) {
    box(root, 0.82, 1.85, 0.44, mats.steelInox, rx, shopY + 0.925, rz);
    for (let sh = 0; sh < 4; sh++) {
      const sy = shopY + 0.30 + sh * 0.42;
      box(root, 0.80, 0.04, 0.46, mats.benchWhite, rx, sy, rz);
      for (let bx = -0.30; bx <= 0.30; bx += 0.15) {
        const bm = bottleMats[(sh + Math.round((bx + 1) * 7)) % bottleMats.length];
        cyl(root, 0.044, 0.048, 0.21, 7, bm, rx + bx, sy + 0.12, rz + 0.04);
      }
    }
  }

  // G. Deep Right Warehouse Side (z: -12.1 to -6.2): Tall Glass Cabinets + Bulk Carton Wall + More Fertilizer Stacks
  // Two tall glass cabinets along right wall
  for (const gz of [-6.45, -7.65]) {
    box(root, 0.46, 2.15, 1.08, mats.benchWhite, 0.35, shopY + 1.075, gz, { r: 0.02 });
    for (let sh = 0; sh < 4; sh++) {
      const sy = shopY + 0.36 + sh * 0.42;
      box(root, 0.38, 0.03, 1.00, mats.cabGlass, 0.29, sy, gz);
      for (let bz = -0.36; bz <= 0.36; bz += 0.18) {
        const bm = bottleMats[(sh + Math.round((bz + 2) * 5)) % bottleMats.length];
        cyl(root, 0.044, 0.046, 0.22, 7, bm, 0.26, sy + 0.12, gz + bz);
      }
    }
    box(root, 0.38, 0.34, 0.48, mats.cartonBox, 0.35, shopY + 2.32, gz - 0.22);
    box(root, 0.36, 0.30, 0.44, mats.cartonBox, 0.35, shopY + 2.30, gz + 0.24);
  }
  // Deep Right Warehouse Fertilizer & Bulk Carton Stacks (z: -8.8..-12.0)
  buildBagStack(0.05, -9.05, 10, mats.bagYara, -0.02);
  buildBagStack(0.05, -9.75, 11, mats.bagSilver, 0.02);
  buildBagStack(0.05, -10.55, 10, mats.bagGreen, -0.01);
  buildBagStack(0.05, -11.35, 9, mats.bagKraft, 0.02);
  buildBagStack(-0.92, -10.85, 8, mats.bagYara, 0.03);
  buildBagStack(-0.92, -11.55, 9, mats.bagSilver, -0.02);
  // Extra deep-warehouse right stacks extending to z = -17.8 + 3rd inner row (nhiều phân hơn nữa!)
  buildBagStack(0.05, -12.55, 12, mats.bagKraft, 0.01);
  buildBagStack(0.05, -13.30, 12, mats.bagGreen, -0.02);
  buildBagStack(-0.92, -12.65, 10, mats.bagYara, 0.02);
  buildBagStack(-0.92, -13.40, 9, mats.bagKraft, -0.01);
  buildBagStack(-1.82, -12.65, 8, mats.bagBlue, 0.02);
  buildBagStack(-1.82, -13.40, 8, mats.bagOrange, -0.02);

  buildBagStack(0.05, -14.55, 13, mats.bagYara, -0.01);
  buildBagStack(0.05, -15.30, 12, mats.bagSilver, 0.02);
  buildBagStack(-0.92, -14.65, 10, mats.bagGreen, 0.02);
  buildBagStack(-0.92, -15.40, 9, mats.bagYara, -0.02);
  buildBagStack(-1.82, -14.65, 8, mats.bagKraft, 0.01);
  buildBagStack(-1.82, -15.40, 8, mats.bagGreen, -0.02);

  buildBagStack(0.05, -16.65, 11, mats.bagGreen, 0.01);
  buildBagStack(0.05, -17.45, 10, mats.bagKraft, -0.02);
  buildBagStack(-0.92, -16.75, 9, mats.bagSilver, 0.02);
  buildBagStack(-0.92, -17.55, 9, mats.bagYara, -0.01);
  buildBagStack(-1.82, -16.75, 7, mats.bagOrange, 0.02);
  buildBagStack(-1.82, -17.55, 7, mats.bagBlue, -0.01);

  // Indoor Lush Greenery Inside the Warehouse (mảng xanh cây cảnh & dây leo trong kho!)
  // Potted indoor plants flanking the sunny rear doorway & warehouse pilasters
  for (const [gx, gz, sc] of [
    [-5.85, -18.05, 0.85],
    [-2.35, -18.05, 0.85],
    [-6.05, -8.25, 0.72],
    [-2.15, -8.25, 0.72],
    [-6.05, -12.15, 0.72],
    [-2.15, -12.15, 0.72],
  ]) {
    cyl(root, 0.22 * sc, 0.17 * sc, 0.36 * sc, 10, mats.terracotta, gx, shopY + 0.18 * sc, gz);
    addLeafCardCluster(root, mats.animeLeafCard, gx, shopY + 0.62 * sc, gz, 0.92 * sc, gx + gz);
    addLeafCardCluster(root, mats.bonsaiLeafLight, gx, shopY + 0.92 * sc, gz, 0.76 * sc, gx * 2 + gz);
  }
  // Hanging trailing greenery clusters draped from upper warehouse pilasters (mảng xanh trên cao!)
  for (const [vx, vz] of [[-8.65, -8.2], [-8.65, -12.2], [-8.65, -16.2], [0.45, -8.2], [0.45, -12.2], [0.45, -16.2]]) {
    addLeafCardCluster(root, mats.animeLeafCard, vx, shopY + 3.65, vz, 1.05, vx + vz);
    addLeafCardCluster(root, mats.animeBlossomCard, vx, shopY + 3.15, vz, 0.85, vx - vz);
  }
  // Bulk KENBAST / WEHG Carton Stacks lining right-mid aisle
  for (let row = 0; row < 2; row++) {
    for (let c = 0; c < 4; c++) {
      box(root, 0.62, 0.36, 0.46, mats.cartonBox, -1.05, shopY + 0.18 + c * 0.365, -8.55 - row * 0.56);
    }
  }

  // H. Orange Fertilizer Sacks + 2 Green Cân Nhơn Hòa Dial Scales + Wooden Reclining Chair (Frame 11)
  box(root, 0.72, 0.22, 0.48, mats.sackOrange, -1.55, shopY + 0.11, -5.85, { r: 0.08 });
  box(root, 0.68, 0.22, 0.46, mats.sackOrange, -1.52, shopY + 0.32, -5.85, { r: 0.08, rot: [0, 0.08, 0] });
  box(root, 0.64, 0.20, 0.44, mats.sackGreenStripe, -1.55, shopY + 0.52, -5.85, { r: 0.08, rot: [0, -0.06, 0] });
  for (const scx of [-1.72, -1.32]) {
    box(root, 0.26, 0.28, 0.22, mats.scaleGreen, scx, shopY + 0.14, -5.38, { r: 0.03 });
    buildSignPanel(root, 0.20, 0.20, 0.03, mats.scaleDial, mats.scaleGreen, scx, shopY + 0.16, -5.26);
    cyl(root, 0.15, 0.12, 0.04, 12, mats.steelInox, scx, shopY + 0.31, -5.38);
  }
  // Dark-wood Vietnamese reclining lounge chair (ghế gỗ xếp)
  box(root, 0.68, 0.10, 0.72, mats.woodChairDark, -0.45, shopY + 0.36, -5.75, { r: 0.03 });
  box(root, 0.68, 0.76, 0.10, mats.woodChairDark, -0.45, shopY + 0.74, -6.12, { r: 0.03, rot: [-0.28, 0, 0] });
  box(root, 0.08, 0.40, 0.74, mats.woodChairDark, -0.78, shopY + 0.32, -5.78, { r: 0.02 });
  box(root, 0.08, 0.40, 0.74, mats.woodChairDark, -0.12, shopY + 0.32, -5.78, { r: 0.02 });

  // 11. Right Courtyard, Cream Residence (shifted +2.4 m away from warehouse!) & VƯỜN BONSAI behind the house!
  const yardY = DATUM.YARD_Y;
  const hx = 7.35; // House center shifted cleanly right (leaves 3.4 m sunlit lane between warehouse x=0.8 and house x=4.25!)
  animHandles.bonsaiCrowns.push(buildBonsai(root, mats, hx - 2.35, yardY, -1.15, 0.96));
  animHandles.bonsaiCrowns.push(buildBonsai(root, mats, hx + 0.55, yardY, -1.15, 1.02));

  box(root, 6.2, 3.6, 3.5, mats.creamWall, hx, yardY + 1.8, -3.85, { r: 0.04 });
  box(root, 5.6, 0.24, 0.72, mats.concrete, hx, yardY + 0.12, -1.85, { r: 0.02 });
  // Deep cobalt-indigo timber cornice & roof rafters
  box(root, 6.42, 0.16, 0.40, mats.timberDark, hx, yardY + 3.58, -2.02, { r: 0.02 });
  for (let rx = hx - 2.95; rx <= hx + 2.95; rx += 0.95) {
    box(root, 0.10, 0.14, 0.55, mats.timberDark, rx, yardY + 3.45, -1.90);
  }
  // Teal-blue doorway + glowing curtained anime windows flanked by cobalt-blue louvered shutters!
  box(root, 1.76, 2.42, 0.14, mats.timberDark, hx, yardY + 1.44, -2.10);
  box(root, 1.60, 2.30, 0.12, mats.shutterBlue, hx, yardY + 1.40, -2.06);
  for (const wx of [hx - 2.10, hx + 2.10]) {
    box(root, 1.38, 1.48, 0.12, mats.timberDark, wx, yardY + 1.85, -2.10, { r: 0.02 });
    buildSignPanel(root, 1.24, 1.34, 0.06, mats.windowGlass, mats.timberDark, wx, yardY + 1.85, -2.05);
    buildSignPanel(root, 0.42, 1.36, 0.05, mats.shutterBlue, mats.timberDark, wx - 0.88, yardY + 1.85, -2.04);
    buildSignPanel(root, 0.42, 1.36, 0.05, mats.shutterBlue, mats.timberDark, wx + 0.88, yardY + 1.85, -2.04);
  }
  // Lush anime orange-blossom hedges flanking the house porch
  buildBush(root, mats, hx - 3.00, yardY, -1.95, 0.85, mats.flowerPink);
  buildBush(root, mats, hx + 2.90, yardY, -1.95, 0.92, mats.flowerPink);

  // Blue-and-white vertical striped fabric awnings
  box(root, 1.9, 0.08, 1.05, mats.awningStripe, hx - 2.10, yardY + 2.75, -1.68, { rot: [0.36, 0, 0] });
  box(root, 1.9, 0.08, 1.05, mats.awningStripe, hx + 2.10, yardY + 2.75, -1.68, { rot: [0.36, 0, 0] });
  box(root, 1.9, 0.42, 0.04, mats.awningStripe, hx - 2.10, yardY + 2.36, -1.2);
  box(root, 1.9, 0.42, 0.04, mats.awningStripe, hx + 2.10, yardY + 2.36, -1.2);

  // Orange Terracotta Pitched Roof
  const roofH = 1.65;
  const roofLen = 6.7;
  const roofHalfD = 2.25;
  const pitch = Math.atan2(roofH, roofHalfD);
  const slopeLen = Math.hypot(roofH, roofHalfD);
  box(root, roofLen, 0.16, slopeLen, mats.terracotta, hx, yardY + 3.6 + roofH * 0.5, -3.85 + roofHalfD * 0.5, { rot: [pitch, 0, 0] });
  box(root, roofLen, 0.16, slopeLen, mats.terracotta, hx, yardY + 3.6 + roofH * 0.5, -3.85 - roofHalfD * 0.5, { rot: [-pitch, 0, 0] });
  box(root, roofLen + 0.1, 0.18, 0.24, mats.terracottaRidge, hx, yardY + 3.6 + roofH + 0.04, -3.85);
  const gableShape = new THREE.Shape();
  gableShape.moveTo(-1.75, 0);
  gableShape.lineTo(1.75, 0);
  gableShape.lineTo(0, roofH);
  gableShape.closePath();
  const gableGeo = new THREE.ExtrudeGeometry(gableShape, { depth: 6.16, bevelEnabled: false });
  gableGeo.rotateY(Math.PI * 0.5);
  const gableMesh = new THREE.Mesh(gableGeo, mats.creamWall);
  gableMesh.position.set(hx - 3.08, yardY + 3.6, -3.85);
  gableMesh.castShadow = true;
  gableMesh.receiveShadow = true;
  root.add(gableMesh);

  // 11B. KHU SINH THÁI VƯỜN BONSAI SÁU QUÝ (natural eco-park bonsai garden — ZERO pots, planted directly in mossy earth & rocks!)
  // Natural meandering flat flagstone path curving directly through the velvety grass from the side lane (x = 2.6)
  const steppingPath = [
    [2.65, -6.1, 0.92, 0.56, 0.08],
    [2.85, -7.1, 0.86, 0.54, -0.12],
    [3.15, -8.1, 0.88, 0.52, -0.22],
    [3.65, -9.1, 0.86, 0.54, -0.35],
    [4.10, -10.1, 0.84, 0.56, -0.15],
    [4.15, -11.2, 0.86, 0.54, 0.14],
    [4.75, -12.1, 0.88, 0.54, 0.36],
    [5.75, -12.6, 0.84, 0.56, 0.12],
    [6.85, -12.8, 0.88, 0.54, -0.05],
    [7.95, -12.6, 0.86, 0.54, -0.18],
    [9.00, -12.0, 0.84, 0.54, -0.42],
    [9.55, -11.0, 0.82, 0.54, -0.15],
    [9.35, -9.8, 0.84, 0.54, 0.22],
  ];
  for (const [sx, sz, sw, sd, srot] of steppingPath) {
    box(root, sw, 0.05, sd, mats.stoneBase, sx, 0.065, sz, { r: 0.08, rot: [0, srot, 0], cast: false });
  }

  // 10 Sculptural Ground-Planted Bonsai Trees rising directly from mossy mounds & natural river stones (NO pots!)
  const ecoBonsais = [
    [4.7, -7.3, 1.05, 0.4, false],
    [7.1, -7.2, 1.22, 1.8, true],   // flowering eco-bonsai
    [9.5, -7.5, 1.02, 2.9, false],
    [1.85, -8.3, 0.92, 0.9, false], // flanking the warehouse wall naturally
    [1.85, -11.4, 1.05, 2.2, true],
    [1.95, -14.2, 1.12, 0.5, false],
    [4.4, -14.5, 1.18, 1.3, false],
    [7.0, -14.8, 1.32, 2.5, false], // centerpiece grand ancient bonsai
    [9.6, -14.4, 1.10, 0.7, true],
    [10.8, -10.5, 1.15, 2.0, false],
  ];
  for (const [gbx, gbz, gsc, grot, isBlossom] of ecoBonsais) {
    animHandles.bonsaiCrowns.push(
      buildGroundBonsai(root, mats, gbx, 0.04, gbz, { scale: gsc, rotY: grot, blossom: isBlossom })
    );
  }

  // Natural Eco Koi & Lotus Pond (hồ sinh thái tự nhiên viền đá cuội, lá sen & hòn non bộ) at (6.9, -10.2)
  const pondX = 6.9, pondZ = -10.2;
  const pondWaterGeo = new THREE.CylinderGeometry(1.78, 1.85, 0.06, 20);
  pondWaterGeo.scale(1.22, 1, 0.88);
  const pondWater = new THREE.Mesh(pondWaterGeo, mats.ditchWater);
  pondWater.position.set(pondX, 0.09, pondZ);
  pondWater.receiveShadow = true;
  root.add(pondWater);

  // Organic ring of 18 natural mossy river boulders hugging the eco-pond shoreline
  for (let ri = 0; ri < 18; ri++) {
    const a = (ri / 18) * Math.PI * 2;
    const rx = pondX + Math.cos(a) * (2.15 + Math.sin(ri * 2.3) * 0.16);
    const rz = pondZ + Math.sin(a) * (1.56 + Math.cos(ri * 1.9) * 0.14);
    const rGeo = new THREE.DodecahedronGeometry(1, 0);
    rGeo.scale(0.32 + (ri % 3) * 0.10, 0.18 + (ri % 2) * 0.10, 0.28 + ((ri + 1) % 3) * 0.08);
    const rock = new THREE.Mesh(rGeo, ri % 2 === 0 ? mats.stoneBase : mats.pillarBand);
    rock.position.set(rx, 0.14 + (ri % 2) * 0.04, rz);
    rock.rotation.set(ri * 0.7, ri * 1.3, ri * 0.4);
    rock.castShadow = true;
    rock.receiveShadow = true;
    root.add(rock);
  }

  // Floating green lily pads & pink lotus flowers on the eco-pond
  for (const [lx, lz, lr, hasLotus] of [
    [pondX - 0.95, pondZ + 0.45, 0.24, true],
    [pondX - 0.65, pondZ + 0.72, 0.19, false],
    [pondX + 1.05, pondZ - 0.35, 0.26, true],
    [pondX + 0.82, pondZ + 0.62, 0.21, false],
    [pondX - 1.15, pondZ - 0.42, 0.22, false],
  ]) {
    cyl(root, lr, lr, 0.025, 10, mats.bonsaiLeafLight, lx, 0.13, lz, { cast: false });
    if (hasLotus) {
      cyl(root, 0.08, 0.04, 0.09, 6, mats.flowerPink, lx, 0.17, lz, { cast: false });
    }
  }

  // Central mossy rockery island (hòn non bộ) with a miniature cascading bonsai growing directly from the stone
  const islandGeo = new THREE.DodecahedronGeometry(0.62, 1);
  islandGeo.scale(1.15, 0.78, 0.95);
  const island = new THREE.Mesh(islandGeo, mats.pillarBand);
  island.position.set(pondX + 0.12, 0.34, pondZ - 0.08);
  island.castShadow = true;
  island.receiveShadow = true;
  root.add(island);
  addLeafCardCluster(root, mats.animeLeafCard, pondX + 0.12, 0.94, pondZ - 0.08, 0.88, 11);
  addLeafCardCluster(root, mats.bonsaiLeafLight, pondX - 0.16, 0.78, pondZ + 0.14, 0.62, 17);

  // Rustic natural timber garden bench overlooking the eco-pond (x = 3.25, z = -10.3)
  box(root, 0.46, 0.08, 1.55, mats.woodPlank, 3.18, 0.46, -10.3, { r: 0.03 });
  cyl(root, 0.10, 0.12, 0.42, 8, mats.bonsaiBark, 3.18, 0.22, -9.75);
  cyl(root, 0.10, 0.12, 0.42, 8, mats.bonsaiBark, 3.18, 0.22, -10.85);

  // Lush wildflower & fern shrubs scattered organically around the eco-park perimeter
  buildBush(root, mats, 1.85, 0.04, -6.7, 0.78, mats.flowerYellow);
  buildBush(root, mats, 1.90, 0.04, -9.9, 0.84, null);
  buildBush(root, mats, 1.85, 0.04, -12.8, 0.80, mats.flowerPink);
  buildBush(root, mats, 5.75, 0.04, -7.2, 0.72, null);
  buildBush(root, mats, 10.6, 0.04, -8.8, 0.85, mats.flowerPink);
  buildBush(root, mats, 10.5, 0.04, -12.6, 0.82, mats.flowerYellow);

  // Wooden garden shade pergola (giàn mát dây leo sinh thái) framing the rear garden edge
  for (const [px, pz] of [[4.6, -14.0], [9.4, -14.0], [4.6, -12.0], [9.4, -12.0]]) {
    cyl(root, 0.08, 0.09, 2.7, 8, mats.bonsaiBark, px, 1.40, pz);
  }
  box(root, 5.2, 0.10, 0.12, mats.bonsaiBark, 7.0, 2.75, -14.0);
  box(root, 5.2, 0.10, 0.12, mats.bonsaiBark, 7.0, 2.75, -12.0);
  for (let rx = 4.8; rx <= 9.2; rx += 0.84) {
    box(root, 0.08, 0.08, 2.2, mats.woodPlank, rx, 2.82, -13.0);
  }
  // Trailing orange-blossom & green vines over the pergola
  for (const vx of [5.0, 7.0, 9.0]) {
    addLeafCardCluster(root, mats.animeBlossomCard, vx, 2.92, -13.8, 1.15, vx);
    addLeafCardCluster(root, mats.animeLeafCard, vx + 0.4, 2.90, -12.1, 1.05, vx + 3);
  }

  // 12. Left Exterior Blue Tarpaulin over Fertilizer Sack Mound (shifted left of widened x=-9.0 wall)
  const tarpGeo = new THREE.DodecahedronGeometry(1.05, 1);
  tarpGeo.scale(1.25, 0.56, 0.92);
  const tarp = new THREE.Mesh(tarpGeo, mats.tarpaulinBlue);
  tarp.position.set(-9.95, DATUM.WALK_Y + 0.34, 0.35);
  tarp.castShadow = true;
  tarp.receiveShadow = true;
  root.add(tarp);

  // 13. Classic White Concrete Park Bench (ghế đá)
  const bx = 6.1, bz = 2.25, by = DATUM.WALK_Y;
  box(root, 0.12, 0.44, 0.46, mats.benchWhite, bx - 0.58, by + 0.22, bz, { r: 0.02 });
  box(root, 0.12, 0.44, 0.46, mats.benchWhite, bx + 0.58, by + 0.22, bz, { r: 0.02 });
  box(root, 1.56, 0.08, 0.48, mats.benchWhite, bx, by + 0.44, bz + 0.02, { r: 0.02 });
  box(root, 1.56, 0.44, 0.07, mats.benchWhite, bx, by + 0.72, bz - 0.22, { r: 0.02, rot: [-0.14, 0, 0] });

  // 14. Concrete Utility Poles & Overhead Cables (spanning cleanly across the 26 m frontage above signage!)
  const poleX = 8.4, poleZ = 2.85;
  cyl(root, 0.11, 0.16, 7.2, 10, mats.poleConcrete, poleX, DATUM.WALK_Y + 3.6, poleZ);
  box(root, 0.10, 0.10, 1.35, mats.steelPost, poleX, 6.75, poleZ);
  box(root, 0.10, 0.10, 1.15, mats.steelPost, poleX, 6.25, poleZ);
  box(root, 0.07, 0.07, 1.2, mats.steelPost, poleX, 7.05, poleZ + 0.55, { rot: [-0.18, 0, 0] });
  box(root, 0.22, 0.10, 0.36, mats.chrome, poleX, 7.12, poleZ + 1.12, { r: 0.03 });

  // Second concrete utility pole on far left roadside (-13.2, 2.85)
  const poleL = -13.2;
  cyl(root, 0.11, 0.16, 7.2, 10, mats.poleConcrete, poleL, 3.6, poleZ);
  box(root, 0.10, 0.10, 1.35, mats.steelPost, poleL, 6.75, poleZ);
  box(root, 0.10, 0.10, 1.15, mats.steelPost, poleL, 6.25, poleZ);

  for (const [cy, czOff] of [[6.72, -0.45], [6.72, 0.45], [6.22, 0.0]]) {
    const cableCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(poleL, cy, poleZ + czOff),
      new THREE.Vector3(-2.4, cy - 0.28, poleZ + czOff),
      new THREE.Vector3(poleX, cy, poleZ + czOff),
    ]);
    const cable = new THREE.Mesh(new THREE.TubeGeometry(cableCurve, 24, 0.016, 5, false), mats.wireBlack);
    cable.castShadow = false;
    root.add(cable);
  }

  // 15. Lush Anime Coconut Palms, Hàng Cau Miền Tây (Areca Palm Rows), Shade Trees & Bushes!
  // Grand curved Mekong Coconut Palms (cây dừa xiêm & dừa vàng tán 3 tầng)
  animHandles.palmCrowns.push(buildCoconutPalm(root, mats, -12.4, 0.04, -18.8, { height: 6.4, leanX: -0.8, leanZ: 0.55, rotY: 0.3 }));
  animHandles.palmCrowns.push(buildCoconutPalm(root, mats, -10.3, 0.04, -19.2, { height: 5.7, leanX: 0.5, leanZ: -0.65, rotY: 1.9 }));
  animHandles.palmCrowns.push(buildCoconutPalm(root, mats, 10.6, 0.04, -18.2, { height: 6.5, leanX: 0.75, leanZ: -0.5, rotY: 2.3 }));
  animHandles.palmCrowns.push(buildCoconutPalm(root, mats, 8.2, 0.04, -18.9, { height: 5.8, leanX: -0.55, leanZ: -0.45, rotY: 0.9 }));
  animHandles.palmCrowns.push(buildCoconutPalm(root, mats, -12.6, 0.04, -9.2, { height: 6.1, leanX: -0.7, leanZ: 0.4, rotY: 1.2 }));
  animHandles.palmCrowns.push(buildCoconutPalm(root, mats, 13.0, 0.04, -5.8, { height: 6.3, leanX: 0.85, leanZ: 0.45, rotY: 2.6 }));

  // HÀNG CAU MIỀN TÂY — Neat iconic rows of slender ringed Areca Palms (bẹ cau xanh + buồng cau!)
  // Right-side row of 7 areca palms framing the cream house & eco-bonsai garden
  for (let ci = 0; ci < 7; ci++) {
    const cz = 0.2 - ci * 2.75;
    const ch = 5.1 + (ci % 3) * 0.42;
    animHandles.palmCrowns.push(
      buildArecaPalm(root, mats, 12.15, 0.04, cz, { height: ch, lean: (ci % 2 ? 0.08 : -0.06), rotY: ci * 1.1 })
    );
  }
  // Left-side row of 5 areca palms lining the left flank of the shop & warehouse
  for (let ci = 0; ci < 5; ci++) {
    const cz = 0.0 - ci * 3.35;
    const ch = 5.0 + ((ci + 1) % 3) * 0.38;
    animHandles.palmCrowns.push(
      buildArecaPalm(root, mats, -11.35, 0.04, cz, { height: ch, lean: (ci % 2 ? -0.07 : 0.06), rotY: ci * 1.5 + 0.4 })
    );
  }

  animHandles.bonsaiCrowns.push(buildShadeTree(root, mats, 11.0, 0.04, 1.15, 1.05));
  animHandles.bonsaiCrowns.push(buildShadeTree(root, mats, -12.8, 0.04, 1.95, 0.92));
  animHandles.bonsaiCrowns.push(buildShadeTree(root, mats, 2.8, 0.04, -19.0, 0.92));

  buildBananaClump(root, mats, -10.35, 0.04, -3.9, 1.05);
  buildBananaClump(root, mats, -10.35, 0.04, -13.5, 1.0);
  buildBananaClump(root, mats, 12.1, 0.04, -3.5, 1.0);

  buildBush(root, mats, 9.45, 0.04, 2.25, 0.95, mats.flowerPink);
  buildBush(root, mats, 11.8, 0.04, 2.35, 0.85, mats.flowerYellow);
  buildBush(root, mats, -11.8, 0.04, 2.45, 0.85, mats.flowerYellow);
  buildBush(root, mats, -9.5, 0.04, 6.55, 0.8, mats.flowerPink);
  buildBush(root, mats, 7.6, 0.04, 6.55, 0.85, mats.flowerYellow);
  buildBush(root, mats, 11.6, 0.04, 6.6, 0.9, mats.flowerPink);

  return animHandles;
}
