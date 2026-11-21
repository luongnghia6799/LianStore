import * as THREE from 'three';
import { buildPerson, setPose } from './peopleModel-street.js';
import { DATUM } from './shop.js';

export const LOOP_SECONDS = 18;

function addNonLa(headGroup, mats) {
  const cone = new THREE.Mesh(new THREE.ConeGeometry(0.28, 0.16, 16, 1, true), mats.nonLa);
  cone.position.set(0, 0.21, 0.01);
  cone.rotation.x = -0.08;
  cone.castShadow = true;
  headGroup.add(cone);
  const inner = new THREE.Mesh(new THREE.ConeGeometry(0.275, 0.155, 16, 1, true), mats.nonLa);
  inner.position.set(0, 0.208, 0.01);
  inner.rotation.x = -0.08;
  inner.scale.set(-1, 1, 1);
  headGroup.add(inner);
}

function makeJugProp(mats) {
  const g = new THREE.Group();
  const body = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.24, 0.12), mats.bottleWhite);
  body.castShadow = true;
  g.add(body);
  const label = new THREE.Mesh(new THREE.BoxGeometry(0.165, 0.10, 0.125), mats.bottleCapGreen);
  g.add(label);
  const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.05, 8), mats.bottleCapGreen);
  cap.position.y = 0.145;
  g.add(cap);
  return g;
}

function makeHandFan(mats) {
  const g = new THREE.Group();
  const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.14, 6), mats.bonsaiBark);
  handle.position.y = 0.05;
  g.add(handle);
  const blade = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.13, 0.014, 10), mats.nonLa);
  blade.rotation.x = Math.PI * 0.5;
  blade.position.y = 0.20;
  g.add(blade);
  return g;
}

function walkPose(phase, carryArms = false) {
  const s = Math.sin(phase);
  const c = Math.cos(phase);
  return {
    torso: [0.05, -s * 0.06, 0],
    head: [-0.03, s * 0.04, 0],
    hipL: [-s * 0.52, 0, 0],
    hipR: [s * 0.52, 0, 0],
    kneeL: [Math.max(0, c * 0.55) + 0.06, 0, 0],
    kneeR: [Math.max(0, -c * 0.55) + 0.06, 0, 0],
    shoulderL: carryArms ? [-0.72, 0, 0.18] : [s * 0.42, 0, 0.06],
    shoulderR: carryArms ? [-0.72, 0, -0.18] : [-s * 0.42, 0, -0.06],
    elbowL: carryArms ? [-0.85, 0, 0] : [-0.22 - Math.max(0, -s) * 0.25, 0, 0],
    elbowR: carryArms ? [-0.85, 0, 0] : [-0.22 - Math.max(0, s) * 0.25, 0, 0],
  };
}

function samplePath(waypoints, u) {
  // u in [0, 1]
  let total = 0;
  const segs = [];
  for (let i = 0; i < waypoints.length - 1; i++) {
    const a = waypoints[i];
    const b = waypoints[i + 1];
    const d = Math.hypot(b[0] - a[0], b[1] - a[1]);
    segs.push({ a, b, d });
    total += d;
  }
  let dist = Math.max(0, Math.min(1, u)) * total;
  for (const s of segs) {
    if (dist <= s.d || s === segs[segs.length - 1]) {
      const k = s.d > 1e-5 ? dist / s.d : 0;
      const x = s.a[0] + (s.b[0] - s.a[0]) * k;
      const z = s.a[1] + (s.b[1] - s.a[1]) * k;
      const yaw = Math.atan2(s.b[0] - s.a[0], s.b[1] - s.a[1]);
      return { x, z, yaw };
    }
    dist -= s.d;
  }
  return { x: waypoints[0][0], z: waypoints[0][1], yaw: 0 };
}

export function buildCast(root, mats, assetHandles = {}) {
  // 1. Shopkeeper (Chú Sáu / Cô Quý) standing/greeting cleanly BEHIND the L-shaped hoptri counter!
  const keeper = buildPerson(mats, {
    skin: mats.skinTones[0],
    hair: mats.hair[0],
    hairStyle: 'ponytail',
    top: mats.cloth.poloCream,
    bottom: mats.cloth.charcoal,
    sleeve: 'short',
    scale: [0.96, 0.96, 0.96],
  });
  keeper.group.position.set(-0.88, DATUM.SHOP_Y, -2.28);
  keeper.group.rotation.y = 0.08;
  root.add(keeper.group);

  // 2. Farmer Customer (Bác nông dân) with nón lá
  const farmer = buildPerson(mats, {
    skin: mats.skinTones[2],
    hair: mats.hair[0],
    top: mats.cloth.blueWork,
    bottom: mats.cloth.navy,
    sleeve: 'long',
    scale: [0.95, 0.95, 0.95],
  });
  addNonLa(farmer.joints.head, mats);
  const jug = makeJugProp(mats);
  jug.position.set(0, -0.18, 0.10);
  farmer.joints.wristR.add(jug);
  root.add(farmer.group);

  // Clean obstacle-free route: motorbike -> sidewalk -> center of orange archway -> shop counter
  const farmerToShop = [
    [-3.35, 2.38],
    [1.15, 2.38],
    [1.15, 0.35],
    [-0.95, 0.05],
  ];
  const farmerBack = [...farmerToShop].reverse();

  // 3. Shop Helper carrying a fertilizer sack from left stack to shop interior
  const helper = buildPerson(mats, {
    skin: mats.skinTones[1],
    hair: mats.hair[1],
    top: mats.cloth.olive,
    bottom: mats.cloth.charcoal,
    sleeve: 'short',
    scale: [0.94, 0.94, 0.94],
  });
  let carriedSack;
  if (assetHandles.carriedSackProto) {
    carriedSack = assetHandles.carriedSackProto.clone(true);
    carriedSack.position.set(0, 0.12, 0.34);
  } else {
    carriedSack = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.44, 0.22), mats.sackWhite);
    carriedSack.position.set(0, 0.24, 0.32);
    carriedSack.castShadow = true;
  }
  helper.joints.torso.add(carriedSack);
  root.add(helper.group);

  const helperToShop = [
    [-5.85, 1.45],
    [-5.45, 0.45],
    [-4.35, 0.15],
  ];
  const helperBack = [...helperToShop].reverse();

  // 4. Seated Villager on White Concrete Bench (ghế đá at x: 6.1, z: 2.25)
  const sitter = buildPerson(mats, {
    skin: mats.skinTones[0],
    hair: mats.hair[1],
    hairStyle: 'bob',
    top: mats.cloth.coral,
    bottom: mats.cloth.navy,
    sleeve: 'short',
    scale: [0.94, 0.94, 0.94],
  });
  sitter.group.position.set(6.05, DATUM.WALK_Y, 2.24);
  sitter.group.rotation.y = 0.05; // Facing road (+Z)
  // Lower pelvis so underside rests solidly on bench slab (top at WALK_Y + 0.48)
  sitter.joints.pelvis.position.y = 0.56;
  const fan = makeHandFan(mats);
  fan.position.set(0, -0.14, 0.05);
  fan.rotation.x = 0.4;
  sitter.joints.wristR.add(fan);
  root.add(sitter.group);

  let glbCast = null;

  function attachGlbCast(handles) {
    const chars = handles?.chars;
    if (!chars) return;

    // Hide procedural fallback cast
    keeper.group.visible = false;
    farmer.group.visible = false;
    helper.group.visible = false;
    sitter.group.visible = false;

    const makeMixer = (obj, clip) => {
      if (!clip) return null;
      const mixer = new THREE.AnimationMixer(obj);
      const action = mixer.clipAction(clip);
      action.play();
      return { mixer, action };
    };

    // 1. Shopkeeper (Chủ tiệm Sáu Quý)
    const glbKeeper = chars.shopkeeper;
    glbKeeper.position.set(-0.88, DATUM.SHOP_Y, -2.28);
    glbKeeper.rotation.y = 0.08;
    root.add(glbKeeper);

    // 2. Farmer Customer (Bác nông dân) with nón lá on Head bone & jug on RightHand
    const glbFarmer = chars.farmer;
    const farmerHead = glbFarmer.getObjectByName('Head');
    if (farmerHead) {
      const cone = new THREE.Mesh(new THREE.ConeGeometry(0.28, 0.16, 16, 1, true), mats.nonLa);
      cone.position.set(0, 0.18, 0.01);
      cone.rotation.x = -0.06;
      cone.castShadow = true;
      farmerHead.add(cone);
    }
    const glbJug = makeJugProp(mats);
    const farmerHand = glbFarmer.getObjectByName('RightHand');
    if (farmerHand) {
      glbJug.position.set(0, 0.08, 0.06);
      farmerHand.add(glbJug);
    }
    root.add(glbFarmer);
    const farmerAnim = makeMixer(glbFarmer, chars.walkClip);

    // 3. Shop Helper (Phụ kho) carrying fertilizer sack
    const glbHelper = chars.helper;
    const glbSack = handles.carriedSackProto
      ? handles.carriedSackProto.clone(true)
      : new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.44, 0.22), mats.sackWhite);
    const helperChest = glbHelper.getObjectByName('Spine2') || glbHelper;
    glbSack.position.set(0, 0.08, 0.34);
    helperChest.add(glbSack);
    root.add(glbHelper);
    const helperAnim = makeMixer(glbHelper, chars.walkClip);

    // 4. Seated Villager on the white concrete bench (ghế đá at x: 6.1, z: 2.25) — properly seated, zero T-pose!
    const glbVillager = chars.villager;
    glbVillager.position.set(6.05, DATUM.WALK_Y - 0.31, 2.26);
    glbVillager.rotation.y = 0.04;
    const vB = (n) => glbVillager.getObjectByName(n);
    // Bend hips forward (-X -> +Z) & knees straight down (+X -> -Y) to sit solidly on bench
    if (vB('LeftUpLeg')) vB('LeftUpLeg').rotation.set(-1.46, 0.08, 0);
    if (vB('RightUpLeg')) vB('RightUpLeg').rotation.set(-1.46, -0.08, 0);
    if (vB('LeftLeg')) vB('LeftLeg').rotation.set(1.46, 0, 0);
    if (vB('RightLeg')) vB('RightLeg').rotation.set(1.46, 0, 0);
    // Relax arms down onto lap (no T-pose!)
    if (vB('LeftArm')) vB('LeftArm').rotation.set(-0.25, 0.18, -1.24);
    if (vB('RightArm')) vB('RightArm').rotation.set(-0.28, -0.18, 1.24);
    if (vB('LeftForeArm')) vB('LeftForeArm').rotation.set(0, 0.72, -0.12);
    if (vB('RightForeArm')) vB('RightForeArm').rotation.set(0, -0.72, 0.12);
    root.add(glbVillager);

    // Relax Shopkeeper's arms out of T-pose too!
    const kB = (n) => glbKeeper.getObjectByName(n);
    if (kB('LeftArm')) kB('LeftArm').rotation.set(-0.14, 0.12, -1.26);
    if (kB('RightArm')) kB('RightArm').rotation.set(-0.14, -0.12, 1.26);
    if (kB('LeftForeArm')) kB('LeftForeArm').rotation.set(0, 0.45, 0);
    if (kB('RightForeArm')) kB('RightForeArm').rotation.set(0, -0.45, 0);

    glbCast = {
      keeper: glbKeeper,
      keeperHead: kB('Head'),
      keeperSpine: kB('Spine1'),
      keeperRightArm: kB('RightArm'),
      keeperRightForeArm: kB('RightForeArm'),
      farmer: glbFarmer,
      farmerAnim,
      farmerHead,
      jug: glbJug,
      helper: glbHelper,
      helperAnim,
      sack: glbSack,
      villager: glbVillager,
      villagerHead: vB('Head'),
      villagerSpine: vB('Spine1'),
      villagerRightForeArm: vB('RightForeArm'),
    };
  }

  function update(t, animHandles = {}, dt = 1 / 60) {
    const u = ((t % LOOP_SECONDS) + LOOP_SECONDS) % LOOP_SECONDS / LOOP_SECONDS; // [0..1)
    const twoPi = Math.PI * 2;

    if (glbCast) {
      // A. GLB Farmer customer cycle with real skeletal Walk animation
      let farmerWalking = false;
      if (u < 0.38) {
        const p = samplePath(farmerToShop, u / 0.38);
        glbCast.farmer.position.set(p.x, p.z < 1.1 ? DATUM.SHOP_Y : DATUM.WALK_Y, p.z);
        glbCast.farmer.rotation.y = p.yaw;
        glbCast.jug.visible = false;
        farmerWalking = true;
      } else if (u < 0.56) {
        const chatK = (u - 0.38) / 0.18;
        glbCast.farmer.position.set(-0.95, DATUM.SHOP_Y, 0.05);
        glbCast.farmer.rotation.y = Math.PI;
        glbCast.jug.visible = chatK > 0.5;
      } else if (u < 0.94) {
        const p = samplePath(farmerBack, (u - 0.56) / 0.38);
        glbCast.farmer.position.set(p.x, p.z < 1.1 ? DATUM.SHOP_Y : DATUM.WALK_Y, p.z);
        glbCast.farmer.rotation.y = p.yaw;
        glbCast.jug.visible = true;
        farmerWalking = true;
      } else {
        glbCast.farmer.position.set(-3.35, DATUM.WALK_Y, 2.38);
        glbCast.farmer.rotation.y = -Math.PI * 0.5;
        glbCast.jug.visible = true;
      }
      if (glbCast.farmerAnim) {
        glbCast.farmerAnim.action.timeScale = farmerWalking ? 1.15 : 0;
        if (!farmerWalking) glbCast.farmerAnim.action.time = 0;
        glbCast.farmerAnim.mixer.update(dt);
      }

      // B. GLB Shopkeeper gentle breathing, nodding & welcoming wave
      const serving = u >= 0.36 && u <= 0.58;
      const serveWave = serving ? Math.sin(((u - 0.36) / 0.22) * Math.PI) : 0;
      if (glbCast.keeperSpine) glbCast.keeperSpine.rotation.y = Math.sin(t * 0.9) * 0.08;
      if (glbCast.keeperHead) glbCast.keeperHead.rotation.y = Math.sin(t * 1.4) * 0.16;
      if (glbCast.keeperRightArm) glbCast.keeperRightArm.rotation.set(-0.14 - 0.55 * serveWave, -0.12, 1.26 - 0.18 * serveWave);
      if (glbCast.keeperRightForeArm) glbCast.keeperRightForeArm.rotation.set(0, -0.45 - 0.35 * serveWave, 0);

      // C. GLB Shop Helper carrying fertilizer sack
      const hu = ((t + 4.5) % LOOP_SECONDS) / LOOP_SECONDS;
      let helperWalking = false;
      if (hu < 0.42) {
        const p = samplePath(helperToShop, hu / 0.42);
        glbCast.helper.position.set(p.x, p.z < 0.6 ? DATUM.SHOP_Y : DATUM.WALK_Y, p.z);
        glbCast.helper.rotation.y = p.yaw;
        glbCast.sack.visible = true;
        helperWalking = true;
      } else if (hu < 0.54) {
        glbCast.helper.position.set(-4.35, DATUM.SHOP_Y, 0.15);
        glbCast.helper.rotation.y = Math.PI * 0.75;
        glbCast.sack.visible = hu < 0.48;
      } else if (hu < 0.92) {
        const p = samplePath(helperBack, (hu - 0.54) / 0.38);
        glbCast.helper.position.set(p.x, p.z < 0.6 ? DATUM.SHOP_Y : DATUM.WALK_Y, p.z);
        glbCast.helper.rotation.y = p.yaw;
        glbCast.sack.visible = false;
        helperWalking = true;
      } else {
        glbCast.helper.position.set(-5.85, DATUM.WALK_Y, 1.45);
        glbCast.helper.rotation.y = -0.6;
        glbCast.sack.visible = hu > 0.96;
      }
      if (glbCast.helperAnim) {
        glbCast.helperAnim.action.timeScale = helperWalking ? 1.05 : 0;
        if (!helperWalking) glbCast.helperAnim.action.time = 0;
        glbCast.helperAnim.mixer.update(dt);
      }

      // D. GLB Courtyard Villager gentle look-around
      if (glbCast.villagerSpine) glbCast.villagerSpine.rotation.y = Math.sin(t * 0.65) * 0.07;
      if (glbCast.villagerHead) glbCast.villagerHead.rotation.y = Math.sin(t * 0.95) * 0.24;
    } else {
      // Procedural fallback before GLBs finish loading
      if (u < 0.38) {
        const k = u / 0.38;
        const p = samplePath(farmerToShop, k);
        farmer.group.position.set(p.x, p.z < 1.1 ? DATUM.SHOP_Y : DATUM.WALK_Y, p.z);
        farmer.group.rotation.y = p.yaw;
        setPose(farmer, walkPose(t * 6.2, false));
        jug.visible = false;
      } else if (u < 0.56) {
        const chatK = (u - 0.38) / 0.18;
        farmer.group.position.set(-0.95, DATUM.SHOP_Y, 0.05);
        farmer.group.rotation.y = Math.PI;
        const reach = Math.sin(chatK * Math.PI);
        setPose(farmer, {
          torso: [0.06 * reach, 0, 0],
          head: [0, Math.sin(t * 2.5) * 0.12, 0],
          shoulderR: [-0.75 * reach, 0, -0.12],
          elbowR: [-0.65 * reach, 0, 0],
          shoulderL: [-0.15, 0, 0.08],
          elbowL: [-0.3, 0, 0],
        });
        jug.visible = chatK > 0.5;
      } else if (u < 0.94) {
        const k = (u - 0.56) / 0.38;
        const p = samplePath(farmerBack, k);
        farmer.group.position.set(p.x, p.z < 1.1 ? DATUM.SHOP_Y : DATUM.WALK_Y, p.z);
        farmer.group.rotation.y = p.yaw;
        const pose = walkPose(t * 6.2, false);
        pose.shoulderR = [-0.28, 0, -0.12];
        pose.elbowR = [-0.45, 0, 0];
        setPose(farmer, pose);
        jug.visible = true;
      } else {
        farmer.group.position.set(-3.35, DATUM.WALK_Y, 2.38);
        farmer.group.rotation.y = -Math.PI * 0.5;
        setPose(farmer, {
          torso: [0.08, 0, 0],
          head: [0.05, 0.1, 0],
          shoulderR: [-0.35, 0, -0.1],
          elbowR: [-0.4, 0, 0],
        });
        jug.visible = true;
      }

      const serving = u >= 0.36 && u <= 0.58;
      const serveWave = serving ? Math.sin(((u - 0.36) / 0.22) * Math.PI) : 0;
      setPose(keeper, {
        torso: [0.06 * serveWave, Math.sin(t * 0.9) * 0.08, 0],
        head: [0, Math.sin(t * 1.4) * 0.16, 0],
        shoulderR: [-0.72 * serveWave - 0.12, 0, -0.1],
        elbowR: [-0.55 * serveWave - 0.25, 0, 0],
        shoulderL: [-0.22, 0, 0.1],
        elbowL: [-0.35, 0, 0],
      });

      const hu = ((t + 4.5) % LOOP_SECONDS) / LOOP_SECONDS;
      if (hu < 0.42) {
        const p = samplePath(helperToShop, hu / 0.42);
        helper.group.position.set(p.x, p.z < 0.6 ? DATUM.SHOP_Y : DATUM.WALK_Y, p.z);
        helper.group.rotation.y = p.yaw;
        setPose(helper, walkPose(t * 5.6, true));
        carriedSack.visible = true;
      } else if (hu < 0.54) {
        helper.group.position.set(-4.35, DATUM.SHOP_Y, 0.15);
        helper.group.rotation.y = Math.PI * 0.75;
        const bend = Math.sin(((hu - 0.42) / 0.12) * Math.PI);
        setPose(helper, {
          torso: [0.42 * bend, 0, 0],
          shoulderL: [-0.65, 0, 0.15],
          shoulderR: [-0.65, 0, -0.15],
          elbowL: [-0.5, 0, 0],
          elbowR: [-0.5, 0, 0],
        });
        carriedSack.visible = hu < 0.48;
      } else if (hu < 0.92) {
        const p = samplePath(helperBack, (hu - 0.54) / 0.38);
        helper.group.position.set(p.x, p.z < 0.6 ? DATUM.SHOP_Y : DATUM.WALK_Y, p.z);
        helper.group.rotation.y = p.yaw;
        setPose(helper, walkPose(t * 5.8, false));
        carriedSack.visible = false;
      } else {
        helper.group.position.set(-5.85, DATUM.WALK_Y, 1.45);
        helper.group.rotation.y = -0.6;
        const bend = Math.sin(((hu - 0.92) / 0.08) * Math.PI);
        setPose(helper, {
          torso: [0.45 * bend, 0, 0],
          shoulderL: [-0.7, 0, 0.15],
          shoulderR: [-0.7, 0, -0.15],
        });
        carriedSack.visible = hu > 0.96;
      }

      setPose(sitter, {
        torso: [-0.08, Math.sin(t * 0.7) * 0.06, 0],
        head: [0.04, Math.sin(t * 0.85) * 0.22, 0],
        hipL: [-1.46, 0.06, 0],
        hipR: [-1.46, -0.06, 0],
        kneeL: [1.48, 0, 0],
        kneeR: [1.48, 0, 0],
        shoulderL: [-0.25, 0, 0.14],
        elbowL: [-0.75, 0, 0],
        shoulderR: [-0.55, 0, -0.14],
        elbowR: [-1.15, 0, 0],
        wristR: [Math.sin(t * 5.4) * 0.42, 0, 0.15],
      });
    }

    // E. Rural Shop Dog trotting playfully in open courtyard
    const dogRoot = animHandles.dogRoot || assetHandles.dogRoot;
    if (dogRoot) {
      const ang = u * twoPi;
      const rx = 0.72, rz = 0.42;
      const dx = 4.05 + Math.cos(ang) * rx;
      const dz = -0.05 + Math.sin(ang) * rz;
      const vx = -Math.sin(ang) * rx;
      const vz = Math.cos(ang) * rz;
      dogRoot.position.set(
        dx,
        DATUM.YARD_Y + Math.abs(Math.sin(t * 7.5)) * 0.045,
        dz
      );
      dogRoot.rotation.y = Math.atan2(vx, vz);
      dogRoot.rotation.z = Math.sin(t * 7.5) * 0.04;
    }

    // F. Ambient breeze: hanging Tết medallion, bonsai/tree crowns, coconut fronds & rice paddies
    if (animHandles.medallionPivot) {
      animHandles.medallionPivot.rotation.x = Math.sin(t * 1.9) * 0.09 + 0.03;
      animHandles.medallionPivot.rotation.z = Math.sin(t * 1.3 + 0.7) * 0.04;
    }
    if (animHandles.bonsaiCrowns) {
      animHandles.bonsaiCrowns.forEach((crown, i) => {
        crown.rotation.z = Math.sin(t * 1.5 + i * 1.7) * 0.025;
        crown.rotation.x = Math.cos(t * 1.2 + i) * 0.018;
      });
    }
    if (animHandles.palmCrowns) {
      animHandles.palmCrowns.forEach((crown, i) => {
        crown.rotation.z = Math.sin(t * 1.35 + i * 1.4) * 0.045;
        crown.rotation.x = Math.cos(t * 1.05 + i * 0.9) * 0.03;
      });
    }
    // Grass & rice paddies stay crisp and still (no sway)
  }

  return { update, attachGlbCast };
}
