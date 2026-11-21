import * as THREE from 'three';
import { DATUM } from './shop.js';
import { setToonOutline } from '../core/stroked-toon.js';

export const TIME_MODES = ['day', 'sunset', 'night'];
export const TIME_LABELS = {
  day: '☀ Ban ngày',
  sunset: '🌇 Hoàng hôn',
  night: '🌙 Ban đêm',
};

function makeSoftGlowSprite(innerHex, outerRgba) {
  const c = document.createElement('canvas');
  c.width = 64;
  c.height = 64;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(32, 32, 2, 32, 32, 30);
  g.addColorStop(0, innerHex);
  g.addColorStop(0.35, innerHex);
  g.addColorStop(1, outerRgba);
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 64, 64);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function makeSunburstSprite(coreHex, midRgba, outerRgba) {
  const c = document.createElement('canvas');
  c.width = 256;
  c.height = 256;
  const ctx = c.getContext('2d');
  // Soft radial atmospheric corona
  const g = ctx.createRadialGradient(128, 128, 10, 128, 128, 124);
  g.addColorStop(0, coreHex);
  g.addColorStop(0.24, coreHex);
  g.addColorStop(0.48, midRgba);
  g.addColorStop(1, outerRgba);
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 256, 256);
  // Subtle Makoto Shinkai anime sunburst rays
  ctx.save();
  ctx.translate(128, 128);
  for (let i = 0; i < 12; i++) {
    ctx.rotate(Math.PI / 6);
    const rg = ctx.createLinearGradient(0, 0, 120, 0);
    rg.addColorStop(0, 'rgba(255, 252, 232, 0.32)');
    rg.addColorStop(1, 'rgba(255, 240, 190, 0)');
    ctx.fillStyle = rg;
    ctx.beginPath();
    ctx.moveTo(0, -4);
    ctx.lineTo(122, 0);
    ctx.lineTo(0, 4);
    ctx.closePath();
    ctx.fill();
  }
  ctx.restore();
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export function createAnimeAtmosphere(scene, world, mats, lights) {
  const { hemi, key, fill, shopLight1, shopLight2, shopLight3 } = lights;

  // 1. Grand Panoramic Anime Cumulus Cloud Bank (14 lush billowing Ghibli/Shinkai clouds, ZERO black outline!)
  const cloudTopMat = setToonOutline(new THREE.MeshBasicMaterial({ color: 0xfffdf8, transparent: true, opacity: 0.96 }), false);
  const cloudBotMat = setToonOutline(new THREE.MeshBasicMaterial({ color: 0x9ec6f4, transparent: true, opacity: 0.90 }), false);
  const cloudGroup = new THREE.Group();
  const clouds = [];
  const cloudSpecs = [
    // Towering background cumulus clouds behind the rice paddies & palms
    [-26, 17.5, -36, 2.4, true],
    [-11, 19.5, -40, 2.8, true],
    [8, 18.8, -42, 3.1, true],
    [26, 17.2, -35, 2.5, true],
    // Mid-height framing clouds left & right
    [-32, 15.0, -18, 2.0, false],
    [-28, 16.5, -4, 1.75, false],
    [32, 15.5, -20, 2.1, false],
    [29, 16.0, -2, 1.85, false],
    // High wispy upper-sky clouds
    [-18, 24.5, -26, 1.7, false],
    [2, 26.0, -28, 1.9, false],
    [20, 24.0, -24, 1.65, false],
    // Gentle foreground-flanking clouds for wide 360° orbit
    [-24, 18.5, 16, 1.8, false],
    [24, 19.0, 18, 1.9, false],
    [0, 22.5, 24, 2.0, false],
  ];
  const puffGeo = new THREE.SphereGeometry(1, 14, 12);
  for (let idx = 0; idx < cloudSpecs.length; idx++) {
    const [cx, cy, cz, sc, isTower] = cloudSpecs[idx];
    const cg = new THREE.Group();
    cg.position.set(cx, cy, cz);
    cg.scale.setScalar(sc);
    const puffs = isTower
      ? [
          [0, 0.75, 0, 1.55, true],
          [-1.45, 0.20, 0.18, 1.22, false],
          [1.45, 0.24, -0.14, 1.25, false],
          [-2.35, -0.10, 0.05, 0.92, false],
          [2.35, -0.08, -0.05, 0.95, false],
          [0.62, 1.38, -0.12, 1.18, true],
          [-0.65, 1.18, 0.14, 1.08, true],
          [0.05, 1.85, 0.02, 0.92, true],
          [0.0, -0.15, 0.08, 1.48, false],
        ]
      : [
          [0, 0.48, 0, 1.38, true],
          [-1.30, 0.10, 0.15, 1.05, false],
          [1.30, 0.14, -0.10, 1.08, false],
          [0.48, 0.80, -0.12, 0.92, true],
          [-0.50, 0.66, 0.10, 0.86, true],
          [0.0, -0.08, 0.05, 1.26, false],
        ];
    for (const [px, py, pz, r, isTop] of puffs) {
      const puff = new THREE.Mesh(puffGeo, isTop ? cloudTopMat : cloudBotMat);
      puff.position.set(px, py, pz);
      puff.scale.set(r * 1.28, r * 0.72, r * 0.88);
      cg.add(puff);
    }
    cloudGroup.add(cg);
    clouds.push({ g: cg, baseX: cx, baseY: cy, speed: 0.16 + (idx % 4) * 0.05 });
  }
  scene.add(cloudGroup);

  // 2. Radiant Anime Sun with Glowing Corona & Sunburst Rays (Day & Sunset!)
  const sunGroup = new THREE.Group();
  const sunCoreMat = setToonOutline(new THREE.MeshBasicMaterial({ color: 0xfffce8 }), false);
  const sunCore = new THREE.Mesh(new THREE.SphereGeometry(2.2, 20, 18), sunCoreMat);
  sunGroup.add(sunCore);
  const sunHaloMat = new THREE.SpriteMaterial({
    map: makeSunburstSprite('#fffef2', 'rgba(255, 224, 130, 0.62)', 'rgba(255, 196, 92, 0)'),
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const sunHalo = new THREE.Sprite(sunHaloMat);
  sunHalo.scale.set(22, 22, 1);
  sunGroup.add(sunHalo);
  sunGroup.position.set(24, 26, -34);
  scene.add(sunGroup);

  // 3. Soft Glowing Anime Stars & Moon with Silver Lunar Halo (Sunset & Night!)
  const starGlowTex = makeSoftGlowSprite('#fffbe8', 'rgba(255,250,220,0)');
  const starCount = 160;
  const starPos = new Float32Array(starCount * 3);
  for (let i = 0; i < starCount; i++) {
    const ang = (i * 2.39996) % (Math.PI * 2);
    const rad = 32 + (i % 7) * 6.0;
    starPos[i * 3] = Math.cos(ang) * rad;
    starPos[i * 3 + 1] = 16 + (i % 11) * 2.1;
    starPos[i * 3 + 2] = Math.sin(ang) * rad - 8;
  }
  const starGeo = new THREE.BufferGeometry();
  starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
  const starMat = new THREE.PointsMaterial({
    map: starGlowTex,
    color: 0xfff8dc,
    size: 0.78,
    transparent: true,
    opacity: 0,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const stars = new THREE.Points(starGeo, starMat);
  scene.add(stars);

  const moonGroup = new THREE.Group();
  const moonMat = setToonOutline(new THREE.MeshBasicMaterial({ color: 0xfff6d2, transparent: true, opacity: 0 }), false);
  const moon = new THREE.Mesh(new THREE.SphereGeometry(2.0, 20, 18), moonMat);
  moonGroup.add(moon);
  const moonHaloMat = new THREE.SpriteMaterial({
    map: makeSoftGlowSprite('#dceeff', 'rgba(130, 190, 255, 0)'),
    transparent: true,
    opacity: 0,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const moonHalo = new THREE.Sprite(moonHaloMat);
  moonHalo.scale.set(14, 14, 1);
  moonGroup.add(moonHalo);
  moonGroup.position.set(-18, 22, -32);
  scene.add(moonGroup);

  // 3. Floating Golden Fireflies (đom đóm at night) / Sunlit Dandelion Pollen Motes (in day!)
  const fireflyGeo = new THREE.SphereGeometry(0.065, 6, 6);
  const fireflyMat = setToonOutline(new THREE.MeshBasicMaterial({ color: 0xffe86b, transparent: true, opacity: 0.55 }), false);
  const fireflyCount = 36;
  const fireflies = [];
  const fireflyGroup = new THREE.Group();
  for (let i = 0; i < fireflyCount; i++) {
    const m = new THREE.Mesh(fireflyGeo, fireflyMat);
    const zone = i % 3;
    let fx, fz;
    if (zone === 0) {
      // Rear rice paddies
      fx = -11.5 + (i * 1.9) % 23;
      fz = -15.0 + (i * 0.7) % 2.5;
    } else if (zone === 1) {
      // Left rice paddy & ditch
      fx = -12.0 + (i * 0.6) % 3.2;
      fz = -11.5 + (i * 1.3) % 10.5;
    } else {
      // Front roadside rice edge & courtyard garden
      fx = -11.0 + (i * 2.1) % 22;
      fz = 7.0 + (i * 0.4) % 1.4;
    }
    const fy = 0.55 + (i % 5) * 0.28;
    m.position.set(fx, fy, fz);
    fireflyGroup.add(m);
    fireflies.push({ m, x: fx, y: fy, z: fz, phase: i * 1.37 });
  }
  world.add(fireflyGroup);

  // 4. Night Practical Lights: Streetlamp, Pillar Lanterns & Billboard Floodlight
  const streetBulbMat = setToonOutline(new THREE.MeshBasicMaterial({ color: 0xfff0b8 }), false);
  const streetBulb = new THREE.Mesh(new THREE.SphereGeometry(0.14, 8, 8), streetBulbMat);
  streetBulb.position.set(8.4, 7.05, 3.96);
  streetBulb.visible = false;
  world.add(streetBulb);

  const streetLight = new THREE.PointLight(0xffcf78, 0, 16, 1.5);
  streetLight.position.set(8.4, 6.7, 3.96);
  world.add(streetLight);

  // Warm lantern glow spheres inside the 4 stone fence pillar caps
  const lanternBulbMat = setToonOutline(new THREE.MeshBasicMaterial({ color: 0xffd27a }), false);
  const lanternGroup = new THREE.Group();
  for (const px of [-4.2, -2.32, 5.9, 8.35]) {
    const b = new THREE.Mesh(new THREE.BoxGeometry(0.20, 0.21, 0.20), lanternBulbMat);
    b.position.set(px, DATUM.WALK_Y + 2.18, 1.24);
    lanternGroup.add(b);
  }
  lanternGroup.visible = false;
  world.add(lanternGroup);

  // Soft warm billboard floodlight shining on the SÁU QUÝ signage & driveway at Night
  const signLight = new THREE.PointLight(0xfff0d6, 0, 14, 1.4);
  signLight.position.set(-0.5, 4.8, 3.0);
  world.add(signLight);

  let mode = 'day';

  function setEmissive(mat, hex, intensity) {
    if (!mat || !mat.emissive) return;
    mat.emissive.setHex(hex);
    mat.emissiveIntensity = intensity;
  }

  function apply(nextMode) {
    mode = TIME_MODES.includes(nextMode) ? nextMode : 'day';
    document.body.dataset.time = mode;

    if (mode === 'day') {
      // Warm nostalgic Studio Ghibli summer daylight (Totoro / Kiki sunlit meadow palette!)
      hemi.color.setHex(0xcfe8ff);
      hemi.groundColor.setHex(0x8ea660);
      hemi.intensity = 1.42;

      key.color.setHex(0xfff0c8);
      key.intensity = 2.45;
      key.position.set(18, 26, 18);

      fill.color.setHex(0x9ec4f4);
      fill.intensity = 0.78;

      shopLight1.intensity = 2.0;
      shopLight2.intensity = 1.6;
      shopLight3.intensity = 1.6;
      streetLight.intensity = 0;
      signLight.intensity = 0;

      streetBulb.visible = false;
      lanternGroup.visible = false;
      sunGroup.visible = true;
      sunGroup.position.set(24, 26, -34);
      sunCoreMat.color.setHex(0xfffef0);
      sunHaloMat.color.setHex(0xffeaa0);
      sunHalo.scale.set(22, 22, 1);
      cloudTopMat.color.setHex(0xfffdf8);
      cloudBotMat.color.setHex(0x98c2f2);
      cloudTopMat.opacity = 0.96;
      cloudBotMat.opacity = 0.90;
      starMat.opacity = 0;
      moonMat.opacity = 0;
      moonHaloMat.opacity = 0;
      fireflyMat.color.setHex(0xfffbe0);
      fireflyMat.opacity = 0.45;

      setEmissive(mats.upperSign, 0x000000, 0);
      setEmissive(mats.lowerSign, 0x000000, 0);
      setEmissive(mats.archHeader, 0x000000, 0);
      setEmissive(mats.medallion, 0x000000, 0);
      setEmissive(mats.windowGlass, 0xffc864, 0.25);
    } else if (mode === 'sunset') {
      // Rich Makoto Shinkai twilight-amber sunset
      hemi.color.setHex(0xf29c7c);
      hemi.groundColor.setHex(0x2d3260);
      hemi.intensity = 1.05;

      key.color.setHex(0xff8e42);
      key.intensity = 2.55;
      key.position.set(-22, 13, 14);

      fill.color.setHex(0x5264b8);
      fill.intensity = 0.75;

      shopLight1.intensity = 3.2;
      shopLight2.intensity = 2.6;
      shopLight3.intensity = 2.4;
      streetLight.intensity = 3.8;
      signLight.intensity = 2.0;

      streetBulb.visible = true;
      lanternGroup.visible = true;
      sunGroup.visible = true;
      sunGroup.position.set(-22, 13.5, -36);
      sunCoreMat.color.setHex(0xffd078);
      sunHaloMat.color.setHex(0xff8e48);
      sunHalo.scale.set(28, 28, 1);
      cloudTopMat.color.setHex(0xffc99e);
      cloudBotMat.color.setHex(0x7c507c);
      cloudTopMat.opacity = 0.92;
      cloudBotMat.opacity = 0.86;
      starMat.opacity = 0.42;
      moonMat.opacity = 0.50;
      moonHaloMat.opacity = 0.35;
      fireflyMat.color.setHex(0xffe86b);
      fireflyMat.opacity = 0.70;

      setEmissive(mats.upperSign, 0xfff0d4, 0.22);
      setEmissive(mats.lowerSign, 0xfff0d4, 0.18);
      setEmissive(mats.archHeader, 0xff9b48, 0.24);
      setEmissive(mats.medallion, 0xff5a38, 0.22);
      setEmissive(mats.windowGlass, 0xffc24c, 0.72);
    } else {
      // Reference-matched Electric Cobalt-to-Cyan Anime Night + Warm Amber Glowing Windows & Lanterns!
      hemi.color.setHex(0x2864b8);
      hemi.groundColor.setHex(0x0f1f42);
      hemi.intensity = 0.92;

      key.color.setHex(0x64b4ff);
      key.intensity = 1.25;
      key.position.set(-14, 24, -14);

      fill.color.setHex(0x1e56a8);
      fill.intensity = 0.65;

      shopLight1.intensity = 5.2;
      shopLight2.intensity = 4.2;
      shopLight3.intensity = 3.8;
      streetLight.intensity = 7.8;
      signLight.intensity = 3.4;

      streetBulb.visible = true;
      lanternGroup.visible = true;
      sunGroup.visible = false;
      cloudTopMat.color.setHex(0x24569e);
      cloudBotMat.color.setHex(0x102854);
      cloudTopMat.opacity = 0.68;
      cloudBotMat.opacity = 0.60;
      starMat.opacity = 0.95;
      moonMat.opacity = 0.96;
      moonHaloMat.opacity = 0.78;
      fireflyMat.color.setHex(0xffdc5c);
      fireflyMat.opacity = 0.96;

      setEmissive(mats.upperSign, 0xfff4df, 0.44);
      setEmissive(mats.lowerSign, 0xeef4ff, 0.36);
      setEmissive(mats.archHeader, 0xff8c3a, 0.46);
      setEmissive(mats.medallion, 0xff4c36, 0.42);
      setEmissive(mats.windowGlass, 0xffc448, 0.96);
    }
  }

  function update(t) {
    // Gentle anime cloud drift & subtle sunlit halo pulse
    for (let i = 0; i < clouds.length; i++) {
      const c = clouds[i];
      c.g.position.x = c.baseX + Math.sin(t * c.speed + i * 1.4) * 1.8;
      c.g.position.y = c.baseY + Math.cos(t * (c.speed * 1.4) + i) * 0.22;
    }
    if (sunGroup.visible) {
      const baseScale = mode === 'sunset' ? 28 : 22;
      const pulse = baseScale + Math.sin(t * 1.4) * 1.1;
      sunHalo.scale.set(pulse, pulse, 1);
    }
    // Floating golden fireflies (night/sunset) & sunlit pollen motes (day)
    for (let i = 0; i < fireflies.length; i++) {
      const f = fireflies[i];
      f.m.position.x = f.x + Math.sin(t * 1.1 + f.phase) * 0.35;
      f.m.position.y = f.y + Math.sin(t * 1.9 + f.phase * 1.3) * 0.22;
      f.m.position.z = f.z + Math.cos(t * 0.9 + f.phase) * 0.35;
      const pulse = 0.65 + 0.35 * Math.sin(t * 3.8 + f.phase);
      f.m.scale.setScalar(pulse);
    }
  }

  apply('day');

  return {
    apply,
    next() {
      const idx = (TIME_MODES.indexOf(mode) + 1) % TIME_MODES.length;
      apply(TIME_MODES[idx]);
      return mode;
    },
    getMode: () => mode,
    update,
  };
}
