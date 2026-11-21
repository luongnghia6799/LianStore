import * as THREE from 'three';
import { createStrokedToon } from './core/stroked-toon.js';
import { createDioramaOrbit } from './core/orbit.js';
import { createTourController, WORLD_SCALE } from './core/tour.js';
import { icon } from './core/icons.js';
import { createMaterials } from './scene/materials.js';
import { buildShopScene } from './scene/shop.js';
import { loadHybridAssets } from './scene/assets.js';
import { buildCast, LOOP_SECONDS } from './scene/cast.js';
import { createAnimeAtmosphere, TIME_LABELS } from './scene/atmosphere.js';

const canvas = document.getElementById('stage');
const fallback = document.getElementById('fallback');
const tourHud = document.getElementById('tour-hud');
const cartPill = document.getElementById('cart-pill');
const zonePrompt = document.getElementById('zone-prompt');
const walkPad = document.getElementById('walk-pad');
const btnAutoWalk = document.getElementById('btn-auto-walk');
const shopModal = document.getElementById('shop-modal');
const shopToast = document.getElementById('shop-toast');
const btnPause = document.getElementById('btn-pause');
const btnTime = document.getElementById('btn-time');
const btnRoof = document.getElementById('btn-roof');
const btnTour = document.getElementById('btn-tour');
const btnView = document.getElementById('btn-view');
const btnReset = document.getElementById('btn-reset');

function showFallback(msg) {
  if (fallback) {
    fallback.textContent = msg;
    fallback.hidden = false;
  }
}

async function waitForSpaceGrotesk() {
  if (!document.fonts) return;
  try {
    await Promise.race([
      Promise.all([
        document.fonts.load('500 24px "Space Grotesk"'),
        document.fonts.load('600 28px "Space Grotesk"'),
        document.fonts.load('700 64px "Space Grotesk"'),
      ]),
      new Promise((r) => setTimeout(r, 1800)),
    ]);
  } catch {
    // Fallback gracefully if offline
  }
}

async function boot() {
  await waitForSpaceGrotesk();

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      preserveDrawingBuffer: true,
    });
  } catch (err) {
    showFallback('WebGL2 is required to view this diorama.');
    throw err;
  }

  const look = createStrokedToon(renderer, {
    bands: [98, 158, 216, 255], // Warm nostalgic Studio Ghibli gouache cel ramp
    ink: 0x44352a, // Soft warm sepia-umber Ghibli ink linework
    thickness: 0.0014,
    maxDpr: 2,
  });

  const scene = new THREE.Scene();

  // Sunlit Mekong Delta studio lighting
  const hemi = new THREE.HemisphereLight(0xfafcff, 0x8b8870, 1.55);
  scene.add(hemi);

  const key = new THREE.DirectionalLight(0xfff5e2, 2.5);
  key.position.set(16, 28, 18);
  key.castShadow = true;
  key.shadow.mapSize.set(2048, 2048);
  key.shadow.camera.near = 4;
  key.shadow.camera.far = 80;
  const S = 40.0;
  key.shadow.camera.left = -S;
  key.shadow.camera.right = S;
  key.shadow.camera.top = S;
  key.shadow.camera.bottom = -S;
  key.shadow.bias = -0.0004;
  key.shadow.normalBias = 0.025;
  scene.add(key);

  const fill = new THREE.DirectionalLight(0xcde0ff, 0.78);
  fill.position.set(-16, 12, -12);
  scene.add(fill);

  // Warm inviting interior shop + extra-long warehouse glow (scaled inside world group!)
  const world = new THREE.Group();
  world.scale.setScalar(WORLD_SCALE);
  scene.add(world);

  const shopLight1 = new THREE.PointLight(0xfff0d4, 2.5, 18, 1.35);
  shopLight1.position.set(-2.2, 2.8, -1.6);
  world.add(shopLight1);
  const shopLight2 = new THREE.PointLight(0xeef6ff, 2.2, 20, 1.3);
  shopLight2.position.set(-4.1, 2.8, -7.2);
  world.add(shopLight2);
  const shopLight3 = new THREE.PointLight(0xeef6ff, 2.2, 22, 1.25);
  shopLight3.position.set(-4.1, 2.8, -14.5);
  world.add(shopLight3);

  // Camera & deterministic hero pose (higher near/far ratio for rock-solid depth precision!)
  const camera = new THREE.PerspectiveCamera(26, 16 / 9, 0.45, 260);
  const HERO_TARGET = new THREE.Vector3(-1.2 * WORLD_SCALE, 1.8 * WORLD_SCALE, -5.8 * WORLD_SCALE);

  function placeCameraSpherical(azDeg, elDeg, dist, target = HERO_TARGET) {
    const az = THREE.MathUtils.degToRad(azDeg);
    const el = THREE.MathUtils.degToRad(elDeg);
    const rHoriz = dist * Math.cos(el);
    camera.position.set(
      target.x + rHoriz * Math.sin(az),
      target.y + dist * Math.sin(el),
      target.z + rHoriz * Math.cos(az)
    );
    camera.lookAt(target);
  }

  placeCameraSpherical(26, 25, 78.0);

  let needsRender = true;
  const orbit = createDioramaOrbit(camera, canvas, {
    target: HERO_TARGET,
    minDistance: 14,
    maxDistance: 150,
    minPolarAngle: 0.22,
    maxPolarAngle: Math.PI * 0.485,
    onChange: () => { needsRender = true; },
  });

  const { mats, adaptGlbToToon } = createMaterials(look);
  const animHandles = buildShopScene(world, mats);
  const cast = buildCast(world, mats, {});
  const atmosphere = createAnimeAtmosphere(scene, world, mats, {
    hemi, key, fill, shopLight1, shopLight2, shopLight3,
  });

  // Initialize static Lucide icons on buttons
  if (btnReset) btnReset.innerHTML = icon('rotateCcw');
  if (btnRoof) btnRoof.innerHTML = icon('layers');
  if (btnAutoWalk) btnAutoWalk.innerHTML = icon('compass');
  walkPad?.querySelector('.pad-up')?.replaceChildren();
  const setPadIcon = (sel, name) => {
    const el = walkPad?.querySelector(sel);
    if (el) el.innerHTML = icon(name);
  };
  setPadIcon('.pad-up', 'arrowUp');
  setPadIcon('.pad-down', 'arrowDown');
  setPadIcon('.pad-left', 'rotateCcw');
  setPadIcon('.pad-right', 'rotateCw');

  function updateTimeButton() {
    if (!btnTime) return;
    const m = atmosphere.getMode();
    btnTime.innerHTML = icon(m === 'day' ? 'sun' : m === 'sunset' ? 'sunset' : 'moon');
    btnTime.title = `${TIME_LABELS[m] || 'Ban ngày'} (N)`;
  }
  updateTimeButton();

  btnTime?.addEventListener('click', () => {
    atmosphere.next();
    updateTimeButton();
    needsRender = true;
  });

  let loadedAssets = [];
  let assetsReady = false;

  loadHybridAssets(world, adaptGlbToToon).then(({ loaded, handles }) => {
    loadedAssets = loaded;
    if (handles.dogRoot) animHandles.dogRoot = handles.dogRoot;
    if (handles.chars) {
      cast.attachGlbCast(handles);
      tour.setPlayerGlb(handles.chars.player, handles.chars.walkClip);
    }
    assetsReady = true;
    needsRender = true;
  });

  function resize() {
    const rect = canvas.getBoundingClientRect();
    const w = Math.max(1, Math.round(rect.width || window.innerWidth));
    const h = Math.max(1, Math.round(rect.height || window.innerHeight));
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    needsRender = true;
  }

  window.addEventListener('resize', resize);
  resize();

  const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
  let paused = reducedMotion;
  let frozenT = null;
  let simT = 2.4;
  let lastNow = performance.now();

  function updatePauseButton() {
    if (!btnPause) return;
    const isPaused = paused || frozenT !== null;
    btnPause.innerHTML = icon(isPaused ? 'play' : 'pause');
    btnPause.title = isPaused ? 'Tiếp tục (Space)' : 'Tạm dừng (Space)';
    btnPause.setAttribute('aria-pressed', String(isPaused));
  }
  updatePauseButton();

  btnPause?.addEventListener('click', () => {
    frozenT = null;
    paused = !paused;
    lastNow = performance.now();
    updatePauseButton();
  });

  // Shopping cart & interactive customer roleplay state
  const cart = new Map(); // id -> { item, qty }
  let activeZone = null;
  let toastTimer = null;

  function fmtVnd(n) {
    return `${n.toLocaleString('vi-VN')}đ`;
  }

  function showToast(msg) {
    if (!shopToast) return;
    shopToast.textContent = msg;
    shopToast.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { shopToast.hidden = true; }, 2800);
  }

  function updateCartPill() {
    if (!cartPill) return;
    let count = 0;
    let total = 0;
    for (const { item, qty } of cart.values()) {
      count += qty;
      total += item.price * qty;
    }
    cartPill.innerHTML = `${icon('shoppingCart')}${count > 0 ? `<span class="cart-badge">${count}</span>` : ''}`;
    cartPill.title = count > 0 ? `Giỏ hàng (${count}) · ${fmtVnd(total)}` : 'Giỏ hàng (0)';
  }

  function closeModal() {
    if (shopModal) shopModal.hidden = true;
  }

  function openCheckoutModal() {
    if (!shopModal) return;
    let total = 0;
    let rows = '';
    for (const { item, qty } of cart.values()) {
      const sub = item.price * qty;
      total += sub;
      rows += `<div class="item-row"><span>${item.name} × ${qty}</span><span class="item-price">${fmtVnd(sub)}</span></div>`;
    }
    if (!rows) {
      rows = `<p style="font-size:13px;color:#5a5248;margin:8px 0;">Giỏ hàng đang trống. Hãy đi quanh sảnh rổ thuốc, tủ BAYER/HB-101 hoặc kho phân bón để chọn sản phẩm nhé!</p>`;
    }
    shopModal.innerHTML = `
      <h3><span>🧾 Hóa đơn Đại lý Lí An</span><button class="close-x" type="button" aria-label="Đóng">×</button></h3>
      ${rows}
      ${total > 0 ? `<div class="item-row" style="border:none;font-weight:700;font-size:15px;"><span>Tổng cộng</span><span class="item-price">${fmtVnd(total)}</span></div>
      <button class="btn-pay" type="button">Thanh toán tại quầy (${fmtVnd(total)})</button>` : ''}
    `;
    shopModal.hidden = false;
    shopModal.querySelector('.close-x')?.addEventListener('click', closeModal);
    shopModal.querySelector('.btn-pay')?.addEventListener('click', () => {
      cart.clear();
      updateCartPill();
      closeModal();
      showToast('Chủ tiệm Lí An: "Cảm ơn bà con đã ủng hộ Lí An! Chúc vụ mùa bội thu nhé!" 🌾');
    });
  }

  function openZoneModal(zone) {
    if (!zone || !shopModal) return;
    if (zone.type === 'checkout') {
      openCheckoutModal();
      return;
    }
    const rows = zone.items.map((it) => `
      <div class="item-row">
        <div>
          <div style="font-weight:600">${it.name}</div>
          <div class="item-price">${fmtVnd(it.price)}</div>
        </div>
        <button class="btn-add" data-item-id="${it.id}" type="button">+ Thêm vào giỏ</button>
      </div>
    `).join('');
    shopModal.innerHTML = `
      <h3><span>🛍 ${zone.title}</span><button class="close-x" type="button" aria-label="Đóng">×</button></h3>
      ${rows}
    `;
    shopModal.hidden = false;
    shopModal.querySelector('.close-x')?.addEventListener('click', closeModal);
    shopModal.querySelectorAll('.btn-add').forEach((btn) => {
      btn.addEventListener('click', () => {
        const it = zone.items.find((x) => x.id === btn.dataset.itemId);
        if (!it) return;
        const prev = cart.get(it.id);
        cart.set(it.id, { item: it, qty: (prev?.qty || 0) + 1 });
        updateCartPill();
        showToast(`Đã thêm "${it.name}" vào giỏ hàng!`);
      });
    });
  }

  const tour = createTourController(camera, canvas, orbit, world, mats, {
    onLabel(text) {
      if (!tourHud) return;
      if (text) {
        tourHud.innerHTML = icon('mapPin');
        tourHud.title = text;
        tourHud.hidden = false;
      } else {
        tourHud.hidden = true;
      }
    },
    onZoneChange(zone) {
      activeZone = zone;
      if (!zonePrompt) return;
      if (zone && tour.isActive()) {
        zonePrompt.innerHTML = icon(zone.type === 'checkout' ? 'receipt' : 'shoppingBag');
        zonePrompt.title = `${zone.prompt} (E)`;
        zonePrompt.setAttribute('aria-label', zone.prompt);
        zonePrompt.hidden = false;
      } else {
        zonePrompt.hidden = true;
      }
    },
  });

  function updateViewButton() {
    if (!btnView) return;
    const tp = tour.isThirdPerson();
    btnView.innerHTML = icon(tp ? 'video' : 'eye');
    btnView.title = tp ? 'Đang góc nhìn xa (nhấn V đổi góc nhìn thứ 1)' : 'Đang góc nhìn thứ 1 (nhấn V đổi góc nhìn xa)';
    btnView.setAttribute('aria-pressed', String(tp));
  }

  function updateTourButton() {
    const on = tour.isActive();
    if (btnTour) {
      btnTour.innerHTML = icon('user');
      btnTour.title = on ? 'Thoát chế độ khách hàng (T)' : 'Đóng vai khách hàng (T)';
      btnTour.setAttribute('aria-pressed', String(on));
    }
    if (btnView) btnView.hidden = !on;
    if (walkPad) walkPad.hidden = !on;
    if (cartPill) cartPill.hidden = !on;
    if (!on) {
      if (zonePrompt) zonePrompt.hidden = true;
      closeModal();
    }
    if (btnAutoWalk) {
      btnAutoWalk.setAttribute('aria-pressed', String(tour.isAutoWalk()));
    }
    updateViewButton();
  }
  updateTourButton();
  updateCartPill();

  btnTour?.addEventListener('click', () => {
    tour.toggle();
    updateTourButton();
    needsRender = true;
  });

  btnView?.addEventListener('click', () => {
    if (!tour.isActive()) return;
    tour.toggleViewMode();
    updateViewButton();
    needsRender = true;
  });

  cartPill?.addEventListener('click', () => {
    if (tour.isActive()) openCheckoutModal();
  });

  zonePrompt?.addEventListener('click', () => {
    if (activeZone) openZoneModal(activeZone);
  });

  btnAutoWalk?.addEventListener('click', () => {
    tour.setAutoWalk(!tour.isAutoWalk());
    btnAutoWalk.setAttribute('aria-pressed', String(tour.isAutoWalk()));
  });

  // Wire on-screen D-Pad hold buttons (pointerdown/up/leave/cancel)
  walkPad?.querySelectorAll('button[data-dir]').forEach((btn) => {
    const dir = btn.dataset.dir;
    const start = (e) => {
      e.preventDefault();
      tour.setVirtual(dir, true);
      btnAutoWalk?.setAttribute('aria-pressed', 'false');
    };
    const stop = () => tour.setVirtual(dir, false);
    btn.addEventListener('pointerdown', start);
    btn.addEventListener('pointerup', stop);
    btn.addEventListener('pointerleave', stop);
    btn.addEventListener('pointercancel', stop);
  });

  btnReset?.addEventListener('click', () => {
    if (tour.isActive()) {
      tour.exit();
      updateTourButton();
    } else {
      orbit.reset();
    }
  });

  let roofOpen = false;
  function toggleRoof() {
    roofOpen = !roofOpen;
    if (animHandles.shopRoofGroup) {
      animHandles.shopRoofGroup.visible = !roofOpen;
    }
    if (btnRoof) {
      btnRoof.innerHTML = icon(roofOpen ? 'home' : 'layers');
      btnRoof.title = roofOpen ? 'Đóng mái (I)' : 'Mở mái xem kho (I)';
      btnRoof.setAttribute('aria-pressed', String(roofOpen));
    }
    needsRender = true;
  }
  btnRoof?.addEventListener('click', toggleRoof);

  window.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && document.activeElement?.tagName !== 'BUTTON') {
      e.preventDefault();
      frozenT = null;
      paused = !paused;
      lastNow = performance.now();
      updatePauseButton();
    } else if (e.key.toLowerCase() === 'i' && document.activeElement?.tagName !== 'BUTTON') {
      e.preventDefault();
      toggleRoof();
    } else if (e.key.toLowerCase() === 'n' && document.activeElement?.tagName !== 'BUTTON') {
      e.preventDefault();
      atmosphere.next();
      updateTimeButton();
      needsRender = true;
    } else if (e.key.toLowerCase() === 't' && document.activeElement?.tagName !== 'BUTTON') {
      e.preventDefault();
      tour.toggle();
      updateTourButton();
      needsRender = true;
    } else if (e.key.toLowerCase() === 'v' && tour.isActive() && document.activeElement?.tagName !== 'BUTTON') {
      e.preventDefault();
      tour.toggleViewMode();
      updateViewButton();
      needsRender = true;
    } else if (e.key.toLowerCase() === 'e' && tour.isActive() && activeZone) {
      e.preventDefault();
      openZoneModal(activeZone);
    } else if (e.key === 'Escape' && tour.isActive()) {
      e.preventDefault();
      if (shopModal && !shopModal.hidden) {
        closeModal();
      } else {
        tour.exit();
        updateTourButton();
        needsRender = true;
      }
    }
  });

  function updateRealtimeClock() {
    if (!animHandles.clockHands) return;
    const now = new Date();
    const s = now.getSeconds() + now.getMilliseconds() / 1000;
    const m = now.getMinutes() + s / 60;
    const h = (now.getHours() % 12) + m / 60;
    // Clock faces +Z: clockwise rotation is negative Z angle
    animHandles.clockHands.secHand.rotation.z = -(s / 60) * Math.PI * 2;
    animHandles.clockHands.minHand.rotation.z = -(m / 60) * Math.PI * 2;
    animHandles.clockHands.hourHand.rotation.z = -(h / 12) * Math.PI * 2;
  }

  function renderAt(t, dt = 0) {
    cast.update(t, animHandles, dt);
    atmosphere.update(t);
    updateRealtimeClock();
    look.render(scene, camera);
  }

  function tick(now) {
    requestAnimationFrame(tick);
    const dt = Math.min(0.1, (now - lastNow) / 1000);
    lastNow = now;
    if (tour.isActive()) {
      tour.update(paused ? 0 : dt);
    }
    if (frozenT !== null) {
      if (needsRender || tour.isActive()) {
        renderAt(frozenT, 0);
        needsRender = false;
      }
      return;
    }
    if (!paused || tour.isActive()) {
      const simDt = paused ? 0 : dt;
      if (!paused) simT = (simT + dt) % LOOP_SECONDS;
      renderAt(simT, simDt);
      needsRender = false;
    } else if (needsRender) {
      renderAt(simT, 0);
      needsRender = false;
    }
  }

  renderAt(simT);
  requestAnimationFrame(tick);

  window.__DIORAMA__ = {
    preset: 'stroked-toon',
    sourcing: 'hybrid',
    profile: 'narrative',
    loopSeconds: LOOP_SECONDS,
    freeze(t = simT) {
      frozenT = t;
      simT = t;
      updatePauseButton();
      renderAt(t);
      needsRender = false;
    },
    unfreeze() {
      frozenT = null;
      paused = false;
      lastNow = performance.now();
      updatePauseButton();
    },
    setView(azDeg, elDeg, dist, target = HERO_TARGET) {
      placeCameraSpherical(azDeg, elDeg, dist, target);
      orbit.controls.target.copy(target);
      orbit.controls.update();
      renderAt(frozenT ?? simT);
      needsRender = false;
    },
    resetView() {
      orbit.reset();
      renderAt(frozenT ?? simT);
      needsRender = false;
    },
    getState() {
      return {
        preset: 'stroked-toon',
        dpr: renderer.getPixelRatio(),
        t: frozenT ?? simT,
        paused: paused || frozenT !== null,
        assetsReady,
        loadedAssets,
        cameraPos: camera.position.toArray(),
      };
    },
  };
}

boot();
