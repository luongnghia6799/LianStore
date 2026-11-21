import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DATUM } from './shop.js';

function loadGlb(loader, url) {
  return new Promise((resolve, reject) => {
    loader.load(url, (gltf) => resolve(gltf), undefined, (err) => reject(err));
  });
}

function groundToY(obj, targetY) {
  obj.updateMatrixWorld(true);
  const box = new THREE.Box3().setFromObject(obj);
  if (Number.isFinite(box.min.y)) {
    obj.position.y += targetY - box.min.y;
  }
}

export async function loadHybridAssets(root, adaptGlbToToon) {
  const loader = new GLTFLoader();
  const loaded = [];
  const handles = {
    dogRoot: null,
    dogBaseY: DATUM.YARD_Y,
    carriedSackProto: null,
    chars: null,
  };

  // 1. Parked Motorbikes (×2) — Delivery Moped (CC BY 4.0)
  try {
    const mopedGltf = await loadGlb(loader, './public/assets/delivery-moped-1aa2ce.glb');
    const moped1 = adaptGlbToToon(mopedGltf.scene.clone(true), { tint: 0xdbe6f5, stroke: 0.0024 });
    moped1.scale.setScalar(0.95);
    moped1.position.set(-5.15, DATUM.WALK_Y, 2.28);
    moped1.rotation.y = 0.62;
    groundToY(moped1, DATUM.WALK_Y);
    root.add(moped1);

    const moped2 = adaptGlbToToon(mopedGltf.scene.clone(true), { tint: 0xf4d8d2, stroke: 0.0024 });
    moped2.scale.setScalar(0.95);
    moped2.position.set(-4.35, DATUM.WALK_Y, 2.38);
    moped2.rotation.y = 0.48;
    groundToY(moped2, DATUM.WALK_Y);
    root.add(moped2);
    loaded.push('delivery-moped-1aa2ce (x2)');
  } catch (e) {
    console.warn('Failed to load delivery-moped-1aa2ce:', e);
  }

  // 2. Stacked Fertilizer Sacks — Hemp Grain Sack (CC BY 4.0), retinted to crisp fertilizer white/cream
  try {
    const sackGltf = await loadGlb(loader, './public/assets/hemp-grain-sack-f91edc.glb');
    const sackSpots = [
      [-9.15, DATUM.WALK_Y, 1.32, 0.2, 0.72],
      [-8.62, DATUM.WALK_Y, 1.38, -0.35, 0.72],
      [-8.88, DATUM.WALK_Y + 0.56, 1.35, 0.15, 0.68],
      [-9.35, DATUM.WALK_Y, 1.85, 0.5, 0.70],
      [-8.75, DATUM.WALK_Y, 1.88, -0.1, 0.70],
      [-9.08, DATUM.WALK_Y + 0.52, 1.86, 0.3, 0.66],
      // Inside shop bay beside left entrance
      [-7.25, DATUM.SHOP_Y, -0.45, 0.4, 0.68],
      [-6.72, DATUM.SHOP_Y, -0.48, -0.25, 0.68],
    ];
    for (const [x, y, z, rotY, sc] of sackSpots) {
      const sack = adaptGlbToToon(sackGltf.scene.clone(true), { tint: 0xf6f3ea, stroke: 0.0022 });
      sack.scale.setScalar(sc);
      sack.position.set(x, y, z);
      sack.rotation.y = rotY;
      if (y === DATUM.WALK_Y || y === DATUM.SHOP_Y) groundToY(sack, y);
      root.add(sack);
    }
    const carryProto = adaptGlbToToon(sackGltf.scene.clone(true), { tint: 0xf6f3ea, stroke: 0.0020 });
    carryProto.scale.setScalar(0.46);
    handles.carriedSackProto = carryProto;
    loaded.push('hemp-grain-sack-f91edc (x8 + carry)');
  } catch (e) {
    console.warn('Failed to load hemp-grain-sack-f91edc:', e);
  }

  // 3. Shop Interior Pesticide Bottle Display Racks — Reagent Bottle Shelf (CC BY 4.0)
  // Mounted along the right interior wall & upper counter alcove (clear of left-wall BAYER/Hoptri/HB-101 cabinets)
  try {
    const shelfGltf = await loadGlb(loader, './public/assets/reagent-bottle-shelf-8fd723.glb');
    const shelfSpots = [
      [0.48, DATUM.SHOP_Y + 1.15, -2.55, -Math.PI * 0.5, 1.2],
      [0.48, DATUM.SHOP_Y + 1.15, -3.75, -Math.PI * 0.5, 1.2],
      [-8.35, DATUM.SHOP_Y + 2.15, -18.38, 0, 1.2],
    ];
    for (const [x, y, z, rotY, sc] of shelfSpots) {
      const shelf = adaptGlbToToon(shelfGltf.scene.clone(true), { tint: 0xffffff, stroke: 0.0018 });
      shelf.scale.setScalar(sc);
      shelf.position.set(x, y, z);
      shelf.rotation.y = rotY;
      root.add(shelf);
    }
    loaded.push('reagent-bottle-shelf-8fd723 (x3)');
  } catch (e) {
    console.warn('Failed to load reagent-bottle-shelf-8fd723:', e);
  }

  // 4. Courtyard & Roadside Potted Shrubs (×2) — Potted Shrub (CC BY 4.0) — soft Ghibli no-outline greenery
  try {
    const shrubGltf = await loadGlb(loader, './public/assets/potted-shrub-43bd21.glb');
    const shrub1 = adaptGlbToToon(shrubGltf.scene.clone(true), { tint: 0xf4ffe8, outline: false });
    shrub1.scale.setScalar(0.92);
    shrub1.position.set(7.45, DATUM.YARD_Y, 0.25);
    groundToY(shrub1, DATUM.YARD_Y);
    root.add(shrub1);

    const shrub2 = adaptGlbToToon(shrubGltf.scene.clone(true), { tint: 0xf4ffe8, outline: false });
    shrub2.scale.setScalar(0.85);
    shrub2.position.set(-10.15, DATUM.WALK_Y, -1.25);
    groundToY(shrub2, DATUM.WALK_Y);
    root.add(shrub2);
    loaded.push('potted-shrub-43bd21 (x2)');
  } catch (e) {
    console.warn('Failed to load potted-shrub-43bd21:', e);
  }

  // 5. Rural Shop Dog in Courtyard — Farm Dog (CC BY 4.0)
  try {
    const dogGltf = await loadGlb(loader, './public/assets/farm-dog-723730.glb');
    const dogWrap = new THREE.Group();
    const dogMesh = adaptGlbToToon(dogGltf.scene.clone(true), { tint: 0xffffff, stroke: 0.0024 });
    dogMesh.scale.setScalar(0.82);
    groundToY(dogMesh, 0);
    dogWrap.add(dogMesh);
    dogWrap.position.set(3.9, DATUM.YARD_Y, -0.05);
    root.add(dogWrap);
    handles.dogRoot = dogWrap;
    loaded.push('farm-dog-723730 (x1)');
  } catch (e) {
    console.warn('Failed to load farm-dog-723730:', e);
  }

  // 6. Rigged 3D Stylized Human Characters (×5, CC BY 4.0 Polyfork, full Mixamo-compatible skeletons)
  try {
    const [keeperGltf, farmerGltf, helperGltf, villagerGltf, playerGltf] = await Promise.all([
      loadGlb(loader, './public/assets/shopkeeper-be5547.glb'),
      loadGlb(loader, './public/assets/farmer-304a43.glb'),
      loadGlb(loader, './public/assets/village-mechanic-508a0a.glb'),
      loadGlb(loader, './public/assets/flower-vendor-bc708b.glb'),
      loadGlb(loader, './public/assets/village-gardener-9f7af6.glb'),
    ]);
    const prepChar = (gltf, scale = 0.96) => {
      const rootChar = adaptGlbToToon(gltf.scene, { tint: 0xfff6e8, outline: false });
      rootChar.scale.setScalar(scale);
      return rootChar;
    };
    const walkClip = playerGltf.animations?.find((a) => /walk/i.test(a.name)) || playerGltf.animations?.[0] || null;
    handles.chars = {
      shopkeeper: prepChar(keeperGltf, 0.96),
      farmer: prepChar(farmerGltf, 0.95),
      helper: prepChar(helperGltf, 0.94),
      villager: prepChar(villagerGltf, 0.93),
      player: prepChar(playerGltf, 0.95),
      walkClip,
    };
    loaded.push('shopkeeper-be5547', 'farmer-304a43', 'village-mechanic-508a0a', 'flower-vendor-bc708b', 'village-gardener-9f7af6');
  } catch (e) {
    console.warn('Failed to load Polyfork 3D characters:', e);
  }

  return { loaded, handles };
}
