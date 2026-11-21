import { build } from 'esbuild';
import { readFile, writeFile, mkdir } from 'node:fs/promises';

const minify = process.argv.includes('--minify');

await mkdir('dist', { recursive: true });

await build({
  entryPoints: ['src/main.js'],
  bundle: true,
  format: 'iife',
  target: ['es2020'],
  outfile: 'dist/app.js',
  minify,
  sourcemap: minify ? false : 'inline',
  legalComments: 'none',
  logLevel: 'info',
});

await build({
  entryPoints: ['src/preview-vroid.js'],
  bundle: true,
  format: 'iife',
  target: ['es2020'],
  outfile: 'dist/preview-vroid.js',
  minify,
  sourcemap: minify ? false : 'inline',
  legalComments: 'none',
  logLevel: 'info',
});

const js = await readFile('dist/app.js', 'utf8');

const css = `
  :root { color-scheme: light; }
  * { box-sizing: border-box; }
  button, button:focus, button:focus-visible {
    outline: none !important;
    -webkit-tap-highlight-color: transparent;
  }
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background: linear-gradient(180deg, #52a4ee 0%, #96d2fb 52%, #e6f5ee 100%);
    transition: background 0.6s ease;
    font-family: "Space Grotesk", system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
  }
  body[data-time="sunset"] {
    background: linear-gradient(180deg, #2d3464 0%, #98587c 36%, #ee8c5e 70%, #ffd894 100%);
  }
  body[data-time="night"] {
    background: linear-gradient(180deg, #06143a 0%, #0b367c 54%, #1882b8 100%);
  }
  #stage {
    display: block;
    width: 100vw;
    height: 100vh;
    background: transparent;
    outline: none;
    cursor: grab;
    filter: saturate(1.08) sepia(0.06) brightness(1.02);
  }
  body::after {
    content: "";
    position: fixed;
    inset: 0;
    pointer-events: none;
    background: radial-gradient(circle at 50% 44%, rgba(255, 250, 232, 0.06) 0%, rgba(40, 32, 48, 0.10) 100%);
    z-index: 5;
  }
  #stage:active { cursor: grabbing; }
  #controls {
    position: fixed;
    left: 16px;
    bottom: 16px;
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 6px;
    border-radius: 16px;
    background: rgba(255, 253, 248, 0.78);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(39, 35, 30, 0.14);
    box-shadow: 0 8px 24px rgba(24, 22, 18, 0.12);
    z-index: 12;
  }
  #controls button {
    appearance: none;
    width: 40px;
    height: 40px;
    display: grid;
    place-items: center;
    border: 1px solid transparent;
    background: transparent;
    color: #27231e;
    border-radius: 11px;
    cursor: pointer;
    transition: transform 0.14s ease, background 0.16s ease, color 0.16s ease;
  }
  #controls button:hover {
    background: rgba(39, 35, 30, 0.08);
    transform: translateY(-1px);
  }
  #controls button[aria-pressed="true"] {
    background: #176632;
    color: #ffffff;
    box-shadow: 0 3px 10px rgba(23, 102, 50, 0.28);
  }
  #controls button[hidden] { display: none; }
  #tour-hud {
    position: fixed;
    top: 16px;
    right: 68px;
    width: 44px;
    height: 44px;
    display: grid;
    place-items: center;
    background: rgba(255, 253, 248, 0.84);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(39, 35, 30, 0.14);
    color: #176632;
    border-radius: 14px;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.10);
    z-index: 12;
  }
  #tour-hud[hidden] { display: none; }
  /* Customer roleplay HUD — sleek frosted-glass Lucide icon buttons */
  #cart-pill {
    position: fixed;
    top: 16px;
    right: 16px;
    appearance: none;
    width: 44px;
    height: 44px;
    display: grid;
    place-items: center;
    border: 1px solid rgba(39, 35, 30, 0.14);
    background: rgba(255, 253, 248, 0.84);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    color: #27231e;
    border-radius: 14px;
    cursor: pointer;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.10);
    z-index: 12;
  }
  #cart-pill .cart-badge {
    position: absolute;
    top: -5px;
    right: -5px;
    min-width: 19px;
    height: 19px;
    padding: 0 5px;
    border-radius: 999px;
    background: #d6342c;
    color: #ffffff;
    font: 700 11px/19px "Space Grotesk", sans-serif;
    text-align: center;
  }
  #cart-pill[hidden] { display: none; }
  #walk-pad {
    position: fixed;
    right: 16px;
    bottom: 16px;
    display: grid;
    grid-template-columns: repeat(3, 42px);
    grid-template-rows: repeat(2, 42px);
    gap: 6px;
    padding: 8px;
    border-radius: 18px;
    background: rgba(255, 253, 248, 0.78);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(39, 35, 30, 0.14);
    box-shadow: 0 8px 24px rgba(24, 22, 18, 0.12);
    z-index: 12;
    user-select: none;
  }
  #walk-pad[hidden] { display: none; }
  #walk-pad button {
    appearance: none;
    display: grid;
    place-items: center;
    border: 1px solid rgba(39, 35, 30, 0.10);
    background: rgba(255, 255, 255, 0.72);
    color: #27231e;
    border-radius: 11px;
    cursor: pointer;
    touch-action: none;
    transition: transform 0.12s ease, background 0.14s ease, color 0.14s ease;
  }
  #walk-pad button:hover { background: #ffffff; }
  #walk-pad button:active, #walk-pad button[aria-pressed="true"] {
    background: #176632;
    color: #ffffff;
    transform: scale(0.95);
  }
  #walk-pad .pad-up { grid-column: 2; grid-row: 1; }
  #walk-pad .pad-auto { grid-column: 3; grid-row: 1; }
  #walk-pad .pad-left { grid-column: 1; grid-row: 2; }
  #walk-pad .pad-down { grid-column: 2; grid-row: 2; }
  #walk-pad .pad-right { grid-column: 3; grid-row: 2; }
  #zone-prompt {
    position: fixed;
    right: 16px;
    bottom: 132px;
    appearance: none;
    width: 46px;
    height: 46px;
    display: grid;
    place-items: center;
    border: none;
    background: #176632;
    color: #ffffff;
    border-radius: 14px;
    cursor: pointer;
    box-shadow: 0 6px 18px rgba(23, 102, 50, 0.34);
    z-index: 12;
    transition: transform 0.14s ease, background 0.16s ease;
  }
  #zone-prompt:hover { transform: translateY(-2px) scale(1.04); }
  #zone-prompt:hover { background: #176632; color: #ffffff; }
  #zone-prompt[hidden] { display: none; }
  #shop-modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: min(380px, 92vw);
    background: #fffdf8;
    border: 1px solid rgba(39, 35, 30, 0.22);
    border-radius: 14px;
    padding: 18px;
    box-shadow: 0 12px 36px rgba(24, 22, 18, 0.22);
    z-index: 20;
    color: #27231e;
    font-family: "Space Grotesk", system-ui, sans-serif;
  }
  #shop-modal[hidden] { display: none; }
  #shop-modal h3 {
    margin: 0 0 10px;
    font-size: 16px;
    color: #155c2e;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  #shop-modal .close-x {
    border: none;
    background: transparent;
    font-size: 18px;
    cursor: pointer;
    color: #665e54;
  }
  #shop-modal .item-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    padding: 9px 0;
    border-bottom: 1px solid rgba(39, 35, 30, 0.10);
    font-size: 13px;
  }
  #shop-modal .item-price { font-weight: 700; color: #b83226; }
  #shop-modal .btn-add, #shop-modal .btn-pay {
    border: none;
    background: #176632;
    color: #ffffff;
    font: 700 12px/1 "Space Grotesk", system-ui, sans-serif;
    padding: 7px 11px;
    border-radius: 7px;
    cursor: pointer;
    white-space: nowrap;
  }
  #shop-modal .btn-pay {
    width: 100%;
    margin-top: 12px;
    padding: 10px;
    font-size: 14px;
  }
  #shop-toast {
    position: fixed;
    top: 62px;
    left: 50%;
    transform: translateX(-50%);
    background: #176632;
    color: #ffffff;
    padding: 9px 16px;
    border-radius: 10px;
    font: 600 13px/1.3 "Space Grotesk", system-ui, sans-serif;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.16);
    z-index: 25;
  }
  #shop-toast[hidden] { display: none; }
  /* Theme-adaptive UI glass for Sunset & Night modes */
  body[data-time="sunset"] #controls,
  body[data-time="sunset"] #walk-pad,
  body[data-time="sunset"] #tour-hud,
  body[data-time="sunset"] #cart-pill {
    background: rgba(255, 240, 224, 0.82);
    border-color: rgba(168, 86, 54, 0.24);
    color: #3a1f1c;
  }
  body[data-time="night"] #controls,
  body[data-time="night"] #walk-pad,
  body[data-time="night"] #tour-hud,
  body[data-time="night"] #cart-pill,
  body[data-time="night"] #shop-modal {
    background: rgba(12, 26, 58, 0.82);
    border-color: rgba(114, 184, 255, 0.26);
    color: #eaf4ff;
  }
  body[data-time="night"] #controls button,
  body[data-time="night"] #walk-pad button {
    color: #eaf4ff;
    background: rgba(255, 255, 255, 0.06);
  }
  body[data-time="night"] #controls button:hover,
  body[data-time="night"] #walk-pad button:hover {
    background: rgba(114, 184, 255, 0.22);
  }
  body[data-time="night"] #controls button[aria-pressed="true"],
  body[data-time="night"] #walk-pad button[aria-pressed="true"] {
    background: #f2a23a;
    color: #101d3b;
  }
  body[data-time="night"] #zone-prompt {
    background: rgba(12, 26, 58, 0.92);
    border-color: #f2a23a;
    color: #ffdf8a;
  }
  body[data-time="night"] #shop-modal h3 { color: #ffdf8a; }
  body[data-time="night"] #shop-modal .item-price { color: #ff9c54; }
  body[data-time="night"] #shop-modal .btn-add,
  body[data-time="night"] #shop-modal .btn-pay {
    background: #f2a23a;
    color: #101d3b;
  }
  #fallback {
    position: fixed;
    inset: 0;
    display: grid;
    place-items: center;
    background: #f6f4ee;
    color: #27231e;
    font: 14px/1.5 ui-monospace, monospace;
    padding: 2rem;
    text-align: center;
  }
  #fallback[hidden] { display: none; }
`;

const html = `<!doctype html>
<html lang="vi">
<head>
  <meta charset="utf-8" />
  <link rel="icon" href="data:," />
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
  <meta name="theme-color" content="#f5f0e6" />
  <title>Cửa hàng Thuốc BVTV Lí An — Diorama</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet" />
  <style>${css}</style>
</head>
<body>
  <canvas id="stage" aria-label="Cửa hàng Thuốc BVTV Lí An — 3D miniature diorama" tabindex="0"></canvas>
  <div id="tour-hud" hidden></div>
  <button id="cart-pill" type="button" title="Giỏ hàng" aria-label="Giỏ hàng" hidden></button>
  <button id="zone-prompt" type="button" hidden></button>
  <div id="walk-pad" hidden aria-label="Điều khiển nhân vật">
    <button class="pad-up" data-dir="forward" type="button" title="Đi tới (W / ↑)" aria-label="Đi tới"></button>
    <button class="pad-auto" id="btn-auto-walk" type="button" title="Tự động tham quan" aria-label="Tự động tham quan"></button>
    <button class="pad-left" data-dir="turnLeft" type="button" title="Quay trái (←)" aria-label="Quay trái"></button>
    <button class="pad-down" data-dir="back" type="button" title="Đi lùi (S / ↓)" aria-label="Đi lùi"></button>
    <button class="pad-right" data-dir="turnRight" type="button" title="Quay phải (→)" aria-label="Quay phải"></button>
  </div>
  <div id="shop-modal" hidden></div>
  <div id="shop-toast" hidden></div>
  <div id="controls" aria-label="Điều khiển cảnh">
    <button id="btn-pause" type="button" title="Tạm dừng / Chạy (Space)" aria-label="Tạm dừng"></button>
    <button id="btn-time" type="button" title="Ngày / Hoàng hôn / Đêm (N)" aria-label="Đổi khung giờ"></button>
    <button id="btn-roof" type="button" title="Mở mái / Đóng mái (I)" aria-label="Mở mái"></button>
    <button id="btn-tour" type="button" title="Đóng vai khách hàng (T)" aria-label="Đóng vai khách hàng"></button>
    <button id="btn-view" type="button" title="Đổi góc nhìn xa / thứ nhất (V)" aria-label="Đổi góc nhìn" hidden></button>
    <button id="btn-reset" type="button" title="Về góc nhìn chính (R)" aria-label="Về góc nhìn chính"></button>
  </div>
  <div id="fallback" hidden>Trình duyệt cần hỗ trợ WebGL2 để hiển thị diorama này.</div>
  <script src="./dist/app.js"></script>
</body>
</html>
`;

await writeFile('index.html', html);
console.log(`built dist/app.js (${(js.length / 1024).toFixed(0)} kB), index.html`);
