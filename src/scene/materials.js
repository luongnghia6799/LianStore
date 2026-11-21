import * as THREE from 'three';

const FONT = '"Space Grotesk", system-ui, -apple-system, sans-serif';

function makeCanvasTex(w, h, drawFn, { repeat = null } = {}) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  const ctx = c.getContext('2d');
  drawFn(ctx, w, h);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  if (repeat) {
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(repeat[0], repeat[1]);
  }
  tex.needsUpdate = true;
  return tex;
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

export function createMaterials(look) {
  // Crisp anime illustration style: confident deep-indigo ink on architecture/props, ZERO outlines on painted leaf cards!
  const t = (hex, opts = {}) => look.toon(hex, { stroke: 0.0017, ...opts });
  const thin = (hex, opts = {}) => look.toon(hex, { stroke: 0.0012, ...opts });
  const noLine = (hex, opts = {}) => look.toon(hex, { outline: false, ...opts });

  // Hand-painted Anime gouache brush texture generator
  function makeGouacheTex(baseHex, dabs, { w = 256, h = 256, repeat = [2, 2], weatherBottom = false, dappledShadows = false } = {}) {
    return makeCanvasTex(w, h, (ctx, cw, ch) => {
      ctx.fillStyle = baseHex;
      ctx.fillRect(0, 0, cw, ch);
      for (let i = 0; i < 280; i++) {
        const x = (i * 79 + (i % 11) * 19) % cw;
        const y = (i * 53 + (i % 7) * 23) % ch;
        const rx = 8 + (i % 18);
        const ry = 4 + (i % 10);
        ctx.fillStyle = dabs[i % dabs.length];
        ctx.beginPath();
        ctx.ellipse(x, y, rx, ry, ((i * 0.7) % Math.PI), 0, Math.PI * 2);
        ctx.fill();
      }
      // Painted cool-blue dappled leaf shadows on stucco walls (signature anime look!)
      if (dappledShadows) {
        ctx.fillStyle = 'rgba(54, 98, 152, 0.22)';
        for (let i = 0; i < 28; i++) {
          const lx = ((i * 47) % cw);
          const ly = ((i * 29) % (ch * 0.65));
          ctx.beginPath();
          ctx.ellipse(lx, ly, 14 + (i % 10), 6 + (i % 5), (i * 0.9) % Math.PI, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      if (weatherBottom) {
        const grad = ctx.createLinearGradient(0, ch * 0.72, 0, ch);
        grad.addColorStop(0, 'rgba(38, 62, 102, 0)');
        grad.addColorStop(1, 'rgba(38, 62, 102, 0.24)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, ch * 0.72, cw, ch * 0.28);
      }
    }, { repeat });
  }

  // Hand-painted Alpha-Cutout ANIME LEAF CLUSTER card (replaces plastic 3D spheres!)
  function makeAnimeLeafCardTex({ withBlossoms = false } = {}) {
    return makeCanvasTex(256, 256, (ctx, w, h) => {
      ctx.clearRect(0, 0, w, h);
      const drawLeaf = (cx, cy, len, wid, ang, col) => {
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(ang);
        ctx.fillStyle = col;
        ctx.beginPath();
        ctx.moveTo(0, -len * 0.5);
        ctx.quadraticCurveTo(wid, 0, 0, len * 0.5);
        ctx.quadraticCurveTo(-wid, 0, 0, -len * 0.5);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      };
      // Layer 1: Warm Ghibli deep moss-green shadow leaves
      for (let i = 0; i < 18; i++) {
        const a = (i / 18) * Math.PI * 2;
        const r = 46 + (i % 3) * 20;
        drawLeaf(128 + Math.cos(a) * r, 128 + Math.sin(a) * r, 58, 22, a + 0.4, '#366e40');
      }
      // Layer 2: Nostalgic Ghibli sage-emerald mid leaves
      for (let i = 0; i < 16; i++) {
        const a = (i / 16) * Math.PI * 2 + 0.2;
        const r = 34 + (i % 3) * 18;
        drawLeaf(128 + Math.cos(a) * r, 122 + Math.sin(a) * r, 52, 20, a - 0.3, '#589b48');
      }
      // Layer 3: Sunlit Totoro chartreuse-gold highlight leaves on top
      for (let i = 0; i < 12; i++) {
        const a = (i / 12) * Math.PI * 2 + 0.5;
        const r = 18 + (i % 3) * 16;
        drawLeaf(128 + Math.cos(a) * r, 114 + Math.sin(a) * r, 44, 17, a + 0.6, '#96cc5e');
      }
      // Optional warm coral-orange anime flower clusters (just like the reference painting!)
      if (withBlossoms) {
        const spots = [[88, 96], [164, 108], [122, 152], [148, 76], [96, 148]];
        for (const [bx, by] of spots) {
          ctx.fillStyle = '#d4582a';
          ctx.beginPath(); ctx.arc(bx, by, 16, 0, Math.PI * 2); ctx.fill();
          ctx.fillStyle = '#f28b44';
          ctx.beginPath(); ctx.arc(bx - 3, by - 3, 12, 0, Math.PI * 2); ctx.fill();
          ctx.fillStyle = '#ffd082';
          ctx.beginPath(); ctx.arc(bx - 5, by - 5, 5, 0, Math.PI * 2); ctx.fill();
        }
      }
    });
  }

  // Hand-painted Alpha-Cutout FEATHERED PALM FROND (real anime palm silhouette, zero boxy blocks!)
  const animePalmFrondTex = makeCanvasTex(256, 128, (ctx, w, h) => {
    ctx.clearRect(0, 0, w, h);
    // Central curved rachis stem
    ctx.strokeStyle = '#1b5a52';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(8, 64);
    ctx.quadraticCurveTo(128, 44, 248, 72);
    ctx.stroke();
    // Sharp pointed feathered palm leaflets along both sides
    for (let i = 0; i < 15; i++) {
      const t = (i + 1) / 16;
      const sx = 12 + t * 228;
      const sy = 64 - Math.sin(t * Math.PI) * 14 + t * 6;
      const len = (1 - Math.abs(t - 0.45) * 1.1) * 52;
      for (const side of [-1, 1]) {
        ctx.fillStyle = i % 2 === 0 ? '#4e8f42' : '#74b452';
        ctx.beginPath();
        ctx.moveTo(sx, sy);
        ctx.quadraticCurveTo(sx + 14, sy + side * len * 0.55, sx + 26, sy + side * len);
        ctx.quadraticCurveTo(sx + 6, sy + side * len * 0.45, sx - 5, sy);
        ctx.closePath();
        ctx.fill();
      }
    }
  });

  // Glowing Anime Curtained Window Texture (warm amber-gold glow + silhouetted sheer curtains + mullions!)
  const animeWindowTex = makeCanvasTex(256, 256, (ctx, w, h) => {
    const grad = ctx.createLinearGradient(0, 0, 0, h);
    grad.addColorStop(0, '#ffdf78');
    grad.addColorStop(0.55, '#ffb448');
    grad.addColorStop(1, '#e87e2c');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);
    // Soft translucent anime curtains pulled slightly to left & right
    ctx.fillStyle = 'rgba(255, 244, 212, 0.36)';
    ctx.beginPath();
    ctx.moveTo(0, 0); ctx.lineTo(86, 0);
    ctx.quadraticCurveTo(64, 130, 32, h);
    ctx.lineTo(0, h); ctx.closePath(); ctx.fill();
    ctx.beginPath();
    ctx.moveTo(w, 0); ctx.lineTo(w - 86, 0);
    ctx.quadraticCurveTo(w - 64, 130, w - 32, h);
    ctx.lineTo(w, h); ctx.closePath(); ctx.fill();
    // Crisp dark-indigo window crossbars & frame
    ctx.strokeStyle = '#1b2d4c';
    ctx.lineWidth = 10;
    ctx.strokeRect(5, 5, w - 10, h - 10);
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(w / 2, 0); ctx.lineTo(w / 2, h);
    ctx.moveTo(0, h * 0.52); ctx.lineTo(w, h * 0.52);
    ctx.stroke();
  });

  // Cobalt-Blue Wooden Louvered Shutters Texture (from reference painting!)
  const animeShutterTex = makeCanvasTex(128, 256, (ctx, w, h) => {
    ctx.fillStyle = '#265c96';
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = '#153864';
    ctx.lineWidth = 6;
    ctx.strokeRect(3, 3, w - 6, h - 6);
    for (let y = 18; y < h - 14; y += 16) {
      ctx.fillStyle = '#3c7ec0';
      ctx.fillRect(12, y, w - 24, 6);
      ctx.fillStyle = '#143258';
      ctx.fillRect(12, y + 6, w - 24, 5);
    }
  });

  const animeLeafCardTex = makeAnimeLeafCardTex({ withBlossoms: false });
  const animeBlossomCardTex = makeAnimeLeafCardTex({ withBlossoms: true });

  const ghibliStuccoTex = makeGouacheTex('#f7eedc', ['rgba(255,252,240,0.48)', 'rgba(232,216,188,0.34)', 'rgba(202,214,224,0.22)'], { repeat: [2, 2], weatherBottom: true, dappledShadows: true });
  const ghibliTinRoofTex = makeGouacheTex('#88a6ba', ['rgba(214,234,248,0.38)', 'rgba(104,132,154,0.30)', 'rgba(176,148,118,0.18)'], { repeat: [3, 4] });
  const ghibliConcreteTex = makeGouacheTex('#e2d8c8', ['rgba(250,244,232,0.38)', 'rgba(200,188,168,0.28)', 'rgba(174,166,150,0.18)'], { repeat: [4, 2] });
  const ghibliBarkTex = makeGouacheTex('#785842', ['rgba(138,104,78,0.38)', 'rgba(82,58,42,0.35)', 'rgba(106,126,76,0.22)'], { repeat: [1, 3] });
  // Warm earthy compacted soil / terracotta-ochre warehouse floor texture (nền màu đất)
  const warehouseEarthTex = makeGouacheTex('#b58d63', ['rgba(154,112,72,0.42)', 'rgba(208,176,134,0.32)', 'rgba(122,86,56,0.26)'], { repeat: [5, 7] });

  // High-res Upper 3-panel billboard texture (2400x360) — Space Grotesk, balanced layout & generous margins
  const upperSignTex = makeCanvasTex(2400, 360, (ctx, w, h) => {
    // ── PANEL 1 (0..860): White & Emerald Green SÁU QUÝ ──
    ctx.fillStyle = '#fcfdfc';
    ctx.fillRect(0, 0, 860, h);
    // Subtle top emerald accent bar
    ctx.fillStyle = '#15843b';
    ctx.fillRect(0, 0, 860, 12);

    // Hoptri Summit badge card on left
    ctx.fillStyle = '#eaf6ed';
    roundRect(ctx, 22, 28, 148, h - 56, 14);
    ctx.fill();
    // Leaf + water drop emblem
    ctx.fillStyle = '#188a42';
    ctx.beginPath();
    ctx.arc(96, 126, 36, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#1d70b8';
    ctx.beginPath();
    ctx.arc(96, 162, 18, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#126430';
    ctx.font = `700 28px ${FONT}`;
    ctx.textAlign = 'center';
    ctx.fillText('hoptri', 96, 232);
    ctx.fillStyle = '#1d70b8';
    ctx.font = `600 18px ${FONT}`;
    ctx.fillText('SUMMIT', 96, 258);

    // Main title & green LÍ AN
    const p1cx = 516;
    ctx.textAlign = 'center';
    ctx.fillStyle = '#185c32';
    ctx.font = `700 27px ${FONT}`;
    ctx.fillText('CỬA HÀNG VẬT TƯ NÔNG NGHIỆP', p1cx, 66);

    ctx.fillStyle = 'rgba(15, 74, 34, 0.16)';
    ctx.font = `700 108px ${FONT}`;
    ctx.fillText('LÍ AN', p1cx + 4, 174);
    ctx.fillStyle = '#12853a';
    ctx.fillText('LÍ AN', p1cx, 170);

    ctx.fillStyle = '#1a5388';
    ctx.font = `600 23px ${FONT}`;
    ctx.fillText('CHUYÊN KINH DOANH PHÂN BÓN  •  THUỐC BVTV', p1cx, 218);

    // Sleek dark slate address pill
    ctx.fillStyle = '#153447';
    roundRect(ctx, 192, 240, 646, 94, 10);
    ctx.fill();
    ctx.fillStyle = '#ffffff';
    ctx.font = `700 23px ${FONT}`;
    ctx.fillText('ĐT: 0901.234.567   •   02723.000.999', p1cx, 278);
    ctx.fillStyle = '#d4e6f0';
    ctx.font = `500 19px ${FONT}`;
    ctx.fillText('ĐC: 191/8 Ấp Long Thuận, X. An Lục Long, T. Tây Ninh', p1cx, 314);

    // ── PANEL 2 (860..1500): HOPTRI SUPER HUMIC ──
    const skyGrad = ctx.createLinearGradient(860, 0, 860, 214);
    skyGrad.addColorStop(0, '#f4faf3');
    skyGrad.addColorStop(1, '#dcefd6');
    ctx.fillStyle = skyGrad;
    ctx.fillRect(860, 0, 640, 214);
    // Curved lush field hill
    ctx.fillStyle = '#68a630';
    ctx.beginPath();
    ctx.moveTo(860, 172);
    ctx.quadraticCurveTo(1180, 138, 1500, 176);
    ctx.lineTo(1500, 214);
    ctx.lineTo(860, 214);
    ctx.closePath();
    ctx.fill();
    // Dark rich soil bottom strip
    ctx.fillStyle = '#20262b';
    ctx.fillRect(860, 214, 640, h - 214);

    // Stylized product pouch
    ctx.fillStyle = '#edf5ea';
    roundRect(ctx, 892, 46, 120, 156, 10);
    ctx.fill();
    ctx.strokeStyle = '#1c6e38';
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.fillStyle = '#228b42';
    ctx.beginPath();
    ctx.arc(952, 122, 28, 0, Math.PI * 2);
    ctx.fill();
    // Red university seal
    ctx.fillStyle = '#c83228';
    ctx.beginPath();
    ctx.arc(1046, 78, 22, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.textAlign = 'left';
    ctx.fillStyle = '#173828';
    ctx.font = `700 24px ${FONT}`;
    ctx.fillText('HOPTRI SUPER HUMIC', 1086, 74);
    ctx.font = `700 38px ${FONT}`;
    ctx.fillText('TRĂM TRIỆU NĂM', 1086, 120);
    ctx.fillText('DƯỠNG CHẤT', 1086, 162);

    ctx.textAlign = 'center';
    ctx.fillStyle = '#f5cf52';
    ctx.font = `700 33px ${FONT}`;
    ctx.fillText('AXIT HUMIC 70%', 1180, 274);
    ctx.fillStyle = '#e6dec2';
    ctx.font = `600 24px ${FONT}`;
    ctx.fillText('TỪ MỎ LEONARDITE TỰ NHIÊN', 1180, 318);

    // ── PANEL 3 (1500..2400): GARSONI + Crimson Red SÁU QUÝ ──
    ctx.fillStyle = '#f6f7f9';
    ctx.fillRect(1500, 0, 250, h);
    const redGrad = ctx.createLinearGradient(1720, 0, 2400, h);
    redGrad.addColorStop(0, '#de3728');
    redGrad.addColorStop(1, '#b82218');
    ctx.fillStyle = redGrad;
    ctx.beginPath();
    ctx.moveTo(1726, 0);
    ctx.lineTo(2400, 0);
    ctx.lineTo(2400, h);
    ctx.lineTo(1726, h);
    ctx.lineTo(1774, h / 2);
    ctx.closePath();
    ctx.fill();
    // Clean white chevron accent
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(1738, 0);
    ctx.lineTo(1786, h / 2);
    ctx.lineTo(1738, h);
    ctx.stroke();

    // GARSONI emblem
    ctx.fillStyle = '#d93627';
    ctx.beginPath();
    ctx.moveTo(1622, 62);
    ctx.lineTo(1678, 180);
    ctx.lineTo(1622, 286);
    ctx.lineTo(1566, 180);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = '#1e2328';
    ctx.font = `700 34px ${FONT}`;
    ctx.textAlign = 'center';
    ctx.fillText('GARSONI', 1622, 190);

    // Huge crisp white LÍ AN with generous left/right margins
    const p3cx = 2088;
    ctx.fillStyle = '#ffeae6';
    ctx.font = `600 29px ${FONT}`;
    ctx.fillText('ĐẠI LÝ VẬT TƯ NÔNG NGHIỆP', p3cx, 78);

    ctx.fillStyle = 'rgba(65, 10, 6, 0.28)';
    ctx.font = `700 112px ${FONT}`;
    ctx.fillText('LÍ AN', p3cx + 5, 206);
    ctx.fillStyle = '#ffffff';
    ctx.fillText('LÍ AN', p3cx, 201);

    // Subtle darker red address bar
    ctx.fillStyle = 'rgba(72, 10, 6, 0.35)';
    roundRect(ctx, 1824, 248, 528, 56, 8);
    ctx.fill();
    ctx.fillStyle = '#ffffff';
    ctx.font = `600 18px ${FONT}`;
    ctx.fillText('ẤP LONG THUẬN  •  LONG TRÌ  •  CHÂU THÀNH  •  LONG AN', p3cx, 283);

    // Crisp aluminum frame & panel dividers
    ctx.strokeStyle = '#4c555c';
    ctx.lineWidth = 8;
    ctx.strokeRect(4, 4, w - 8, h - 8);
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(860, 0); ctx.lineTo(860, h);
    ctx.moveTo(1500, 0); ctx.lineTo(1500, h);
    ctx.stroke();
  });

  // Lower fascia banner (1600x200) — Space Grotesk, balanced spacing
  const lowerSignTex = makeCanvasTex(1600, 200, (ctx, w, h) => {
    ctx.fillStyle = '#f8fafb';
    ctx.fillRect(0, 0, w, h);

    // bm BEHN MEYER AgriCare left
    ctx.fillStyle = '#173a64';
    ctx.font = `700 88px ${FONT}`;
    ctx.textAlign = 'left';
    ctx.fillText('bm', 40, 108);
    ctx.font = `700 26px ${FONT}`;
    ctx.fillText('BEHN MEYER', 194, 72);
    ctx.fillStyle = '#248a3e';
    ctx.fillText('AgriCare', 194, 108);

    // Green sweeping divider
    ctx.strokeStyle = '#3da33a';
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(410, 14);
    ctx.quadraticCurveTo(438, 78, 406, 144);
    ctx.stroke();

    // Balanced red LÍ AN
    const cx = 1010;
    ctx.textAlign = 'center';
    ctx.fillStyle = '#252c32';
    ctx.font = `600 22px ${FONT}`;
    ctx.fillText('CỬA HÀNG VẬT TƯ NÔNG NGHIỆP', cx, 38);
    ctx.fillStyle = '#c82c22';
    ctx.font = `700 72px ${FONT}`;
    ctx.fillText('LÍ AN', cx, 108);
    ctx.fillStyle = '#1a6632';
    ctx.font = `600 18px ${FONT}`;
    ctx.fillText('PHÂN BÓN CAO CẤP  •  THUỐC BẢO VỆ THỰC VẬT', cx, 136);

    // Dark navy bottom brand strip
    ctx.fillStyle = '#162f4d';
    ctx.fillRect(0, 152, w, 48);
    ctx.fillStyle = '#e4edf7';
    ctx.font = `600 22px ${FONT}`;
    ctx.fillText('ENTEC     •     Nitrophoska     •     NovaTec     •     Blaukorn     •     Korn-KALI Plus', w / 2, 184);
  });

  // Orange driveway archway header (1200x180) — Space Grotesk, clean proportions
  const archTex = makeCanvasTex(1200, 180, (ctx, w, h) => {
    const grad = ctx.createLinearGradient(0, 0, w, 0);
    grad.addColorStop(0, '#d84e1c');
    grad.addColorStop(0.5, '#f0712c');
    grad.addColorStop(1, '#c74516');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);
    // Subtle gold top & bottom trim lines
    ctx.fillStyle = 'rgba(255, 232, 160, 0.55)';
    ctx.fillRect(0, 0, w, 8);
    ctx.fillRect(0, h - 8, w, 8);

    ctx.fillStyle = '#ffffff';
    ctx.font = `700 56px ${FONT}`;
    ctx.textAlign = 'left';
    ctx.fillText('HOPTRI SUPER HUMIC', 48, 110);

    // Vertical divider
    ctx.fillStyle = 'rgba(255, 255, 255, 0.35)';
    ctx.fillRect(820, 34, 4, h - 68);

    ctx.textAlign = 'center';
    ctx.fillStyle = '#ffecc2';
    ctx.font = `600 26px ${FONT}`;
    ctx.fillText('ĐẠI LÝ', 1005, 68);
    ctx.fillStyle = '#ffffff';
    ctx.font = `700 48px ${FONT}`;
    ctx.fillText('LÍ AN', 1005, 128);
  });

  // Red hanging Tết medallion (420x240)
  const medallionTex = makeCanvasTex(420, 240, (ctx, w, h) => {
    ctx.fillStyle = '#c92420';
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = '#f5cf58';
    ctx.lineWidth = 10;
    roundRect(ctx, 14, 14, w - 28, h - 28, 12);
    ctx.stroke();
    ctx.fillStyle = '#ffffff';
    ctx.font = `700 36px ${FONT}`;
    ctx.textAlign = 'center';
    ctx.fillText('hoptri summit', w / 2, 74);
    ctx.fillStyle = '#fae382';
    ctx.font = `700 28px ${FONT}`;
    ctx.fillText('TỐT ĐẤT - KHỎE CÂY', w / 2, 136);
    ctx.font = `600 26px ${FONT}`;
    ctx.fillText('TẾT VẠN ĐIỀU MAY', w / 2, 184);
  });

  // Vertical pillar wrap (200x800)
  const pillarWrapTex = makeCanvasTex(200, 800, (ctx, w, h) => {
    ctx.fillStyle = '#dd531e';
    ctx.fillRect(0, 0, w, 400);
    ctx.fillStyle = '#186b37';
    ctx.fillRect(0, 400, w, 400);
    ctx.fillStyle = '#fae382';
    ctx.font = `700 44px ${FONT}`;
    ctx.textAlign = 'center';
    ctx.fillText('2025', w / 2, 92);
    ctx.fillText('TẾT', w / 2, 148);
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(w / 2, 272, 54, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#c92622';
    ctx.font = `700 19px ${FONT}`;
    ctx.fillText('ĐH CẦN THƠ', w / 2, 278);
    ctx.fillStyle = '#fae382';
    ctx.font = `700 34px ${FONT}`;
    ctx.fillText('HUMIC', w / 2, 502);
    ctx.fillText('70%', w / 2, 552);
    ctx.fillStyle = '#ffffff';
    ctx.font = `600 24px ${FONT}`;
    ctx.fillText('TỐT ĐẤT', w / 2, 634);
    ctx.fillText('KHỎE CÂY', w / 2, 674);
  });

  // Hand-painted Ghibli terracotta overlapping clay roof tiles
  const terracottaTex = makeCanvasTex(256, 256, (ctx, w, h) => {
    ctx.fillStyle = '#d4663c';
    ctx.fillRect(0, 0, w, h);
    const rows = 8;
    const cols = 8;
    const rh = h / rows;
    const cw = w / cols;
    const tilePalette = ['#df7448', '#ce5f38', '#e58654', '#c55532', '#d66e44'];
    for (let r = 0; r < rows; r++) {
      const y = r * rh;
      ctx.fillStyle = 'rgba(104, 38, 22, 0.22)';
      ctx.fillRect(0, y + rh - 5, w, 5);
      for (let c = 0; c < cols; c++) {
        const x = c * cw + (r % 2 ? cw * 0.5 : 0);
        ctx.fillStyle = tilePalette[(r * 3 + c * 5) % tilePalette.length];
        ctx.beginPath();
        ctx.arc(x % w, y + rh * 0.55, cw * 0.45, 0, Math.PI, false);
        ctx.fill();
        ctx.strokeStyle = 'rgba(84, 32, 18, 0.22)';
        ctx.lineWidth = 2;
        ctx.stroke();
      }
    }
  }, { repeat: [6, 3] });

  // Soft painterly Ghibli weathered asphalt road (warm slate-lavender grey, crisp white lines)
  const asphaltTex = makeCanvasTex(512, 256, (ctx, w, h) => {
    ctx.fillStyle = '#5a606c';
    ctx.fillRect(0, 0, w, h);
    // Warm sunlit sandy-gravel shoulders
    ctx.fillStyle = '#9c9282';
    ctx.fillRect(0, 0, w, 16);
    ctx.fillRect(0, h - 16, w, 16);
    // Soft painted white road edge lines
    ctx.fillStyle = '#f2efe6';
    ctx.fillRect(0, 20, w, 6);
    ctx.fillRect(0, h - 26, w, 6);
    // Painterly brush streaks along road direction
    for (let i = 0; i < 420; i++) {
      const x = (i * 97) % w;
      const y = 24 + ((i * 53) % (h - 48));
      ctx.fillStyle = i % 2 === 0 ? 'rgba(230,224,214,0.07)' : 'rgba(42,46,62,0.10)';
      ctx.fillRect(x, y, 18 + (i % 14), 3);
    }
  }, { repeat: [6, 1] });

  // Painterly rice paddy water & soil bed texture
  const riceFieldTex = makeCanvasTex(256, 256, (ctx, w, h) => {
    ctx.fillStyle = '#4e7d34';
    ctx.fillRect(0, 0, w, h);
    // Soft shimmering shallow paddy water bands
    for (let y = 0; y < h; y += 24) {
      ctx.fillStyle = y % 48 === 0 ? '#5c8f3c' : '#436e2c';
      ctx.fillRect(0, y, w, 14);
    }
    for (let i = 0; i < 240; i++) {
      const x = (i * 59) % w;
      const y = (i * 41) % h;
      ctx.fillStyle = i % 3 === 0 ? 'rgba(164, 212, 118, 0.28)' : 'rgba(42, 74, 28, 0.25)';
      ctx.fillRect(x, y, 10, 3);
    }
  }, { repeat: [6, 3] });

  // Lush meadow grass ground texture for verges & bunds
  const grassGroundTex = makeCanvasTex(256, 256, (ctx, w, h) => {
    ctx.fillStyle = '#62943c';
    ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < 420; i++) {
      const x = (i * 73) % w;
      const y = (i * 47) % h;
      ctx.fillStyle = i % 3 === 0 ? '#74ab46' : (i % 3 === 1 ? '#538232' : '#85ba50');
      ctx.fillRect(x, y, 6, 4);
    }
  }, { repeat: [8, 8] });

  // Courtyard patterned grey-and-white tiles
  const courtyardTileTex = makeCanvasTex(256, 256, (ctx, w, h) => {
    ctx.fillStyle = '#dfe4e7';
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = '#a4adb4';
    ctx.lineWidth = 3;
    const step = 64;
    for (let y = 0; y < h; y += step) {
      for (let x = 0; x < w; x += step) {
        ctx.strokeRect(x, y, step, step);
        ctx.fillStyle = '#bcc4ca';
        ctx.beginPath();
        ctx.moveTo(x + step / 2, y + 10);
        ctx.lineTo(x + step - 10, y + step / 2);
        ctx.lineTo(x + step / 2, y + step - 10);
        ctx.lineTo(x + 10, y + step / 2);
        ctx.closePath();
        ctx.fill();
      }
    }
  }, { repeat: [7, 6] });

  // Beige stone tile texture for fence pillars
  const pillarTileTex = makeCanvasTex(128, 256, (ctx, w, h) => {
    ctx.fillStyle = '#dfd1b6';
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = 'rgba(95, 82, 64, 0.28)';
    ctx.lineWidth = 3;
    for (let y = 0; y < h; y += 32) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
      const off = (y / 32) % 2 === 0 ? 0 : 32;
      for (let x = off; x < w; x += 64) {
        ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x, y + 32); ctx.stroke();
      }
    }
  });

  // Blue-and-white vertical striped fabric awning
  const stripedAwningTex = makeCanvasTex(256, 256, (ctx, w, h) => {
    for (let i = 0; i < 8; i++) {
      ctx.fillStyle = i % 2 === 0 ? '#286ab0' : '#f7f9fb';
      ctx.fillRect(i * 32, 0, 32, h);
    }
  }, { repeat: [2, 1] });

  // Blue-and-white glazed ceramic bonsai pot pattern
  const ceramicPotTex = makeCanvasTex(512, 256, (ctx, w, h) => {
    ctx.fillStyle = '#f2f6f9';
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#24528e';
    ctx.fillRect(0, 14, w, 20);
    ctx.fillRect(0, h - 32, w, 18);
    for (let x = 32; x < w; x += 64) {
      ctx.beginPath();
      ctx.arc(x, h / 2, 22, 0, Math.PI * 2);
      ctx.strokeStyle = '#24528e';
      ctx.lineWidth = 6;
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(x, h / 2, 8, 0, Math.PI * 2);
      ctx.fillStyle = '#3b73b5';
      ctx.fill();
    }
  });

  // Fence agricultural product poster
  const posterTex = makeCanvasTex(384, 240, (ctx, w, h) => {
    ctx.fillStyle = '#eef7ec';
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#1d7a3d';
    ctx.fillRect(0, 0, w, 58);
    ctx.fillStyle = '#266cb2';
    ctx.fillRect(0, 182, w, 58);
    ctx.fillStyle = '#ffffff';
    ctx.font = `700 28px ${FONT}`;
    ctx.textAlign = 'center';
    ctx.fillText('THUỐC BVTV', w / 2, 40);
    ctx.fillStyle = '#1d6e3a';
    ctx.fillRect(54, 78, 60, 84);
    ctx.fillStyle = '#2d82c4';
    ctx.fillRect(162, 78, 60, 84);
    ctx.fillStyle = '#e08e26';
    ctx.fillRect(270, 78, 60, 84);
  });

  // ── INTERIOR TEXTURES (from real shop interior video) ──
  // Light cream-beige tiled shop floor
  const shopTileTex = makeCanvasTex(256, 256, (ctx, w, h) => {
    ctx.fillStyle = '#e5e0d4';
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = '#c8c1b2';
    ctx.lineWidth = 3;
    for (let y = 0; y < h; y += 64) {
      for (let x = 0; x < w; x += 64) {
        ctx.strokeRect(x, y, 64, 64);
      }
    }
  }, { repeat: [6, 5] });

  // Black-and-gold veined marble column texture (Frame 03)
  const marbleColTex = makeCanvasTex(128, 256, (ctx, w, h) => {
    ctx.fillStyle = '#222428';
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = 'rgba(218, 178, 92, 0.55)';
    ctx.lineWidth = 2.5;
    for (let i = 0; i < 9; i++) {
      ctx.beginPath();
      ctx.moveTo((i * 27) % w, (i * 31) % h);
      ctx.bezierCurveTo(w * 0.3, (i * 41) % h, w * 0.7, (i * 53 + 40) % h, (i * 19 + 80) % w, (i * 29 + 90) % h);
      ctx.stroke();
    }
  });

  // White hoptri summit front desk panel (Frame 01)
  const hoptriDeskTex = makeCanvasTex(512, 256, (ctx, w, h) => {
    ctx.fillStyle = '#f8faf8';
    ctx.fillRect(0, 0, w, h);
    // Blue/yellow/green curved wave at bottom
    ctx.fillStyle = '#4aa6e0';
    ctx.beginPath();
    ctx.moveTo(0, 200);
    ctx.quadraticCurveTo(180, 178, 320, 224);
    ctx.lineTo(0, h);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = '#f2c94c';
    ctx.beginPath();
    ctx.moveTo(140, 220);
    ctx.quadraticCurveTo(320, 185, w, 215);
    ctx.lineTo(w, h);
    ctx.lineTo(140, h);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = '#189642';
    ctx.beginPath();
    ctx.moveTo(210, 232);
    ctx.quadraticCurveTo(370, 192, w, 210);
    ctx.lineTo(w, h);
    ctx.lineTo(210, h);
    ctx.closePath();
    ctx.fill();
    // Hoptri flask/leaf icon
    ctx.fillStyle = '#48a4e0';
    ctx.beginPath();
    ctx.arc(146, 118, 32, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#189642';
    ctx.beginPath();
    ctx.arc(130, 128, 18, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#f2b824';
    ctx.beginPath();
    ctx.arc(146, 98, 12, 0, Math.PI * 2);
    ctx.fill();
    // Text
    ctx.fillStyle = '#168a3d';
    ctx.font = `700 62px ${FONT}`;
    ctx.textAlign = 'left';
    ctx.fillText('hoptri', 194, 118);
    ctx.font = `700 42px ${FONT}`;
    ctx.fillText('summit', 196, 158);
  });

  // Branded display cabinet headers (Bayer, hoptri summit, HB-101)
  const makeCabinetHeader = (bg, fg, title, sub = '') => makeCanvasTex(256, 96, (ctx, w, h) => {
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = fg;
    ctx.font = `700 36px ${FONT}`;
    ctx.textAlign = 'center';
    ctx.fillText(title, w / 2, sub ? 48 : 62);
    if (sub) {
      ctx.font = `600 20px ${FONT}`;
      ctx.fillText(sub, w / 2, 78);
    }
  });
  const cabBayerTex = makeCabinetHeader('#1e883e', '#ffffff', 'BAYER', 'TIÊU CHUẨN');
  const cabHoptriTex = makeCabinetHeader('#f2d03b', '#145c2c', 'hoptri', 'summit');
  const cabHb101Tex = makeCabinetHeader('#f6efe8', '#c82820', 'HB-101', 'NHẬT BẢN');

  // Cardboard carton box texture (Frame 03)
  const cartonTex = makeCanvasTex(256, 128, (ctx, w, h) => {
    ctx.fillStyle = '#d4b483';
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#2c8442';
    ctx.fillRect(w - 26, 0, 26, h);
    ctx.fillStyle = '#b83226';
    ctx.fillRect(22, 18, 120, 26);
    ctx.fillStyle = '#383028';
    ctx.fillRect(22, 56, 160, 12);
    ctx.fillRect(22, 78, 110, 10);
  });

  // Classic green cân Nhơn Hòa dial face (Frame 11)
  const scaleDialTex = makeCanvasTex(128, 128, (ctx, w, h) => {
    ctx.fillStyle = '#34a853';
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#f8faf8';
    ctx.beginPath();
    ctx.arc(64, 64, 48, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#22262a';
    ctx.lineWidth = 4;
    ctx.stroke();
    ctx.strokeStyle = '#d62828';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(64, 64);
    ctx.lineTo(64, 24);
    ctx.stroke();
  });

  // Movento counter poster (Frame 09)
  const moventoTex = makeCanvasTex(256, 192, (ctx, w, h) => {
    ctx.fillStyle = '#194f7a';
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#2e8c46';
    ctx.fillRect(0, 118, w, 34);
    ctx.fillStyle = '#ffffff';
    ctx.font = `700 32px ${FONT}`;
    ctx.textAlign = 'center';
    ctx.fillText('MOVENTO', w / 2, 76);
    ctx.fillStyle = '#f5d04c';
    ctx.font = `700 20px ${FONT}`;
    ctx.fillText('ĐẶC TRỊ RỆP SÁP', w / 2, 142);
  });

  const mats = {
    // Slab & countryside terrain
    slabEarth: t(0x6e5f50),
    slabRim: t(0x8e7e6c),
    grassVerge: noLine(0xffffff, { map: grassGroundTex }),
    grassBund: t(0x5c8b38, { stroke: 0.0012 }),
    riceField: noLine(0xffffff, { map: riceFieldTex }),
    riceBlade: noLine(0xffffff, { side: THREE.DoubleSide }),
    ditchWater: noLine(0x549eb0),
    woodPlank: t(0x9b724b, { stroke: 0.0015 }),

    asphalt: noLine(0xffffff, { map: asphaltTex }),
    roadStripe: noLine(0xf7cc52),
    concrete: noLine(0xffffff, { map: ghibliConcreteTex }),
    concreteDark: noLine(0xb0a696),
    courtyardTile: noLine(0xffffff, { map: courtyardTileTex }),
    shopFloor: noLine(0xffffff, { map: shopTileTex }),
    warehouseEarthFloor: noLine(0xffffff, { map: warehouseEarthTex }),
    skylightGlow: look.flat(0xfffbe8),
    sunbeam: new THREE.MeshBasicMaterial({
      color: 0xfff0b8,
      transparent: true,
      opacity: 0.14,
      depthWrite: false,
      side: THREE.DoubleSide,
    }),
    shopWallBlue: t(0xd6e6f0, { stroke: 0.001 }),

    // Building architecture (warm Ghibli gouache textures)
    creamWall: t(0xffffff, { map: ghibliStuccoTex, stroke: 0.0012 }),
    graniteDark: t(0xffffff, { map: marbleColTex, stroke: 0.0011 }),
    // Interior shop furniture & stock
    hoptriDesk: t(0xffffff, { map: hoptriDeskTex, stroke: 0.0016 }),
    deskGreenTop: t(0x287846, { stroke: 0.0015 }),
    moventoPoster: noLine(0xffffff, { map: moventoTex }),
    cabBayer: noLine(0xffffff, { map: cabBayerTex }),
    cabHoptri: noLine(0xffffff, { map: cabHoptriTex }),
    cabHb101: noLine(0xffffff, { map: cabHb101Tex }),
    cabGlass: noLine(0xdbe8f0),
    cartonBox: t(0xffffff, { map: cartonTex, stroke: 0.0015 }),
    basketRed: t(0xd6342c, { stroke: 0.0013 }),
    basketPink: t(0xe690a8, { stroke: 0.0013 }),
    basketBlue: t(0xa8c2dc, { stroke: 0.0013 }),
    basketMint: t(0x88cfa8, { stroke: 0.0013 }),
    basketWhite: t(0xeaecef, { stroke: 0.0013 }),
    bottleOrange: thin(0xe87a24, { stroke: 0.001 }),
    bottleYellow: thin(0xebc234, { stroke: 0.001 }),
    bottleBlue: thin(0x2a74c4, { stroke: 0.001 }),
    bottleCapRed: thin(0xd82820, { stroke: 0.001 }),
    // Warehouse (Kho thuốc & kho phân bón) stacked bags & dolly
    bagKraft: t(0xc8a472, { stroke: 0.0014 }),
    bagGreen: t(0x22883e, { stroke: 0.0014 }),
    bagYara: t(0xf2f4f2, { stroke: 0.0014 }),
    bagSilver: t(0x7c848c, { stroke: 0.0014 }),
    bagBlue: t(0x2a6fb8, { stroke: 0.0014 }),
    bagOrange: t(0xe27428, { stroke: 0.0014 }),
    dollyRed: thin(0xc82a22, { stroke: 0.0014 }),
    syngentaGreen: t(0x289a44, { stroke: 0.0014 }),
    sackOrange: t(0xdc6b26, { stroke: 0.0016 }),
    scaleGreen: t(0x309c4c, { stroke: 0.0014 }),
    scaleDial: noLine(0xffffff, { map: scaleDialTex }),
    woodChairDark: t(0x693022, { stroke: 0.0015 }),
    steelInox: t(0xcfd6dc, { stroke: 0.0015 }),
    leatherChair: t(0x26292e, { stroke: 0.0016 }),
    stoneBase: t(0x6d7379),
    pillarBeige: t(0xffffff, { map: pillarTileTex, stroke: 0.0018 }),
    pillarBand: t(0x6c6358, { stroke: 0.001 }),
    metalRoof: t(0xffffff, { map: ghibliTinRoofTex, stroke: 0.0011 }),
    roofUnder: noLine(0x525a62),
    terracotta: t(0xffffff, { map: terracottaTex, stroke: 0.0012 }),
    terracottaRidge: t(0xb84c2c, { stroke: 0.0011 }),
    shutterGreen: t(0x285a42, { stroke: 0.0018 }),
    steelPost: thin(0x5b6670),
    wroughtIron: thin(0x25292e, { stroke: 0.0012 }),
    goldFinial: thin(0xdca938, { stroke: 0.0012 }),
    awningStripe: t(0xffffff, { map: stripedAwningTex, stroke: 0.0016 }),
    windowGlass: noLine(0xffffff, { map: animeWindowTex }),
    shutterBlue: t(0xffffff, { map: animeShutterTex, stroke: 0.0014 }),
    timberDark: t(0x2d3a58, { stroke: 0.0014 }),

    // Signage
    upperSign: t(0xffffff, { map: upperSignTex, stroke: 0.0018 }),
    lowerSign: t(0xffffff, { map: lowerSignTex, stroke: 0.0016 }),
    archHeader: t(0xffffff, { map: archTex, stroke: 0.0018 }),
    medallion: t(0xffffff, { map: medallionTex, stroke: 0.0016 }),
    pillarWrap: t(0xffffff, { map: pillarWrapTex, stroke: 0.0016 }),
    signBack: t(0x505860),
    poster: noLine(0xffffff, { map: posterTex }),

    // Props & tropical greenery
    benchWhite: t(0xf2efe8),
    tarpaulinBlue: t(0x256cc0),
    sackWhite: t(0xeeeae0),
    sackGreenStripe: t(0x288444),
    bucketWhite: t(0xf2f4f6),
    bucketLidBlue: t(0x2462ab),
    bottleWhite: thin(0xf4f6f8, { stroke: 0.0011 }),
    bottleCapGreen: thin(0x208844, { stroke: 0.0011 }),
    counterWood: t(0x9e7048),
    plasticRed: t(0xcf362c),
    waterBlue: noLine(0x74bce8),
    ceramicPot: t(0xffffff, { map: ceramicPotTex, stroke: 0.0014 }),
    // Hand-painted Alpha-Cutout ANIME FOLIAGE CARDS (ZERO plastic spheres!)
    bonsaiBark: t(0xffffff, { map: ghibliBarkTex, stroke: 0.0012 }),
    animeLeafCard: noLine(0xffffff, { map: animeLeafCardTex, alphaTest: 0.42, side: THREE.DoubleSide }),
    animeBlossomCard: noLine(0xffffff, { map: animeBlossomCardTex, alphaTest: 0.42, side: THREE.DoubleSide }),
    animePalmCard: noLine(0xffffff, { map: animePalmFrondTex, alphaTest: 0.42, side: THREE.DoubleSide }),
    animePalmCardLight: noLine(0xdcffaa, { map: animePalmFrondTex, alphaTest: 0.42, side: THREE.DoubleSide }),
    bonsaiLeaf: noLine(0xffffff, { map: animeLeafCardTex, alphaTest: 0.42, side: THREE.DoubleSide }),
    bonsaiLeafLight: noLine(0x9be2a8, { map: animeLeafCardTex, alphaTest: 0.42, side: THREE.DoubleSide }),
    palmTrunk: t(0xffffff, { map: makeCanvasTex(128, 256, (ctx, w, h) => {
      ctx.fillStyle = '#8b7358';
      ctx.fillRect(0, 0, w, h);
      for (let y = 0; y < h; y += 16) {
        ctx.fillStyle = y % 32 === 0 ? '#735c44' : '#9c8366';
        ctx.fillRect(0, y, w, 6);
        ctx.fillStyle = 'rgba(54, 40, 28, 0.42)';
        ctx.fillRect(0, y + 6, w, 2);
      }
    }, { repeat: [1, 3] }), stroke: 0.0012 }),
    arecaTrunk: t(0xffffff, { map: makeCanvasTex(128, 256, (ctx, w, h) => {
      ctx.fillStyle = '#a9b398';
      ctx.fillRect(0, 0, w, h);
      for (let y = 0; y < h; y += 20) {
        ctx.fillStyle = '#d4d8c5';
        ctx.fillRect(0, y, w, 3);
        ctx.fillStyle = '#89967a';
        ctx.fillRect(0, y + 3, w, 4);
      }
    }, { repeat: [1, 4] }), stroke: 0.0010 }),
    arecaCrownshaft: t(0x52a34c, { stroke: 0.0010 }),
    arecaNut: noLine(0x7ac448),
    palmFrond: noLine(0xffffff, { map: animePalmFrondTex, alphaTest: 0.42, side: THREE.DoubleSide }),
    coconutGreen: noLine(0x528f48),
    coconutGold: noLine(0xc9a944),
    bananaLeaf: noLine(0x4a9e68, { side: THREE.DoubleSide }),
    treeCanopyDark: noLine(0x98c28c, { map: animeLeafCardTex, alphaTest: 0.42, side: THREE.DoubleSide }),
    treeCanopyMid: noLine(0xffffff, { map: animeLeafCardTex, alphaTest: 0.42, side: THREE.DoubleSide }),
    treeCanopyLight: noLine(0xf4ffd2, { map: animeLeafCardTex, alphaTest: 0.42, side: THREE.DoubleSide }),
    flowerPink: noLine(0xf28b44),
    flowerYellow: noLine(0xffcf70),
    poleConcrete: t(0x9aa4b6, { stroke: 0.0012 }),
    wireBlack: noLine(0x1b2b48),

    // Cast (compatible with peopleModel-street.js)
    skinTones: [t(0xebbda0), t(0xdea97e), t(0xd1956a)],
    hair: [t(0x232020), t(0x3b322b)],
    cloth: {
      navy: t(0x2e4e78),
      blueWork: t(0x4d7cb0),
      teal: t(0x2c7c70),
      poloCream: t(0xeee8d4),
      olive: t(0x62784e),
      coral: t(0xd15a4a),
      charcoal: t(0x383d44),
      brown: t(0x6e513e),
      rose: t(0xbc5454),
    },
    leather: t(0x503b2c),
    steelDark: t(0x3a4046),
    chrome: t(0xdce2e6),
    bone: t(0xf5f1e8),
    eye: noLine(0x1f1d1b),
    mouth: noLine(0x8e4c44),
    nonLa: t(0xe2ca88),
  };

  function adaptGlbToToon(root, { tint = 0xfff5e4, stroke = 0.0012, outline = true } = {}) {
    root.traverse((obj) => {
      if (!obj.isMesh) return;
      if (obj.geometry && !obj.geometry.attributes?.normal) {
        obj.geometry.computeVertexNormals();
      }
      const hasVertexColors = Boolean(obj.geometry?.attributes?.color);
      const isSkinned = Boolean(obj.isSkinnedMesh);
      // Warm Ghibli tint harmonize for all imported models (disable static outline on SkinnedMesh so bones deform cleanly)
      const mat = look.toon(tint, {
        vertexColors: hasVertexColors,
        outline: isSkinned ? false : outline,
        stroke,
      });
      obj.material = mat;
      obj.castShadow = true;
      obj.receiveShadow = true;
      if (isSkinned) obj.frustumCulled = false;
    });
    return root;
  }

  return { mats, adaptGlbToToon };
}
