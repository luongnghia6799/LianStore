# DESIGN — Cửa hàng Thuốc BVTV Lí An (Diorama)

## Intake Decisions (5.7.0)
- **Decision receipt:** `Stroked Toon / Illustrated Miniature · hybrid sourcing · narrative · minimal controls` (updated per explicit user request: "eii làm kiểu đẹp sịn sò đi, đừng làm kiểu pixel xấu quá")
- **Render Preset:** `stroked-toon` (Native Retina DPR up to 2, `antialias: true`, 4-step `MeshToonMaterial` ramp `[68, 122, 184, 246]`, fine warm charcoal `OutlineEffect` `#2a241e`, no pixelation or dither).
- **Model Sourcing:** `hybrid` ("Hybrid — nguồn mạng + tự dựng")
  - Downloaded CC BY 4.0 GLB assets from Polyfork CDN (see `refs/SOURCES.md` & `CREDITS.md`), converted to `pixel-stroke` toon materials with `vertexColors: true`.
  - Authored shop architecture, layered Vietnamese signage (`LÍ AN`, `HOPTRI SUPER HUMIC`, `GARSONI`, `BEHN MEYER AgriCare`), ornate black-and-gold fence, orange archway, tiled courtyard, cloud-pruned bonsai in blue-and-white pots, cream house with terracotta roof & blue-white striped awnings, concrete bench, utility pole, and articulated clothed cast (`peopleModel-street.js`).
- **Scene Profile:** `narrative` (`uiMode: minimal-controls`). No educational UI, no lesson cards, no floating callouts, no debug panel. Free user orbit + deterministic hero reset (`R`) + pause/play (`Space`).

## Real-World Subject Reference
- **Subject:** Cửa hàng Thuốc BVTV Lí An (Google Maps & Sep 2025 Street View)
- **Location:** `191/8 Ấp Long Thuận, X. An Lục Long, T. Tây Ninh` (formerly Long Trì, Châu Thành, Long An), on Trần Văn Giàu / DT879C (`10.4251071, 106.4573066`).
- **Key Architectural Landmarks:**
  1. Wide left agricultural supply shop bay under corrugated metal roof (`mái tôn`) with dark green rolling shutter (`cửa cuốn`), open interior shelves of pesticide bottles, stacked white chemical buckets, counter, and water dispenser.
  2. Tall 3-panel upper billboard (`hoptri summit · LÍ AN` green/white, `HOPTRI SUPER HUMIC`, and `GARSONI · ĐẠI LÝ VẬT TƯ NÔNG NGHIỆP LÍ AN` bright red/white) + lower white fascia banner (`bm BEHN MEYER AgriCare · LÍ AN`).
  3. Dark grey stone base + beige tiled pillars with lantern caps + black wrought-iron fence with gold spearhead finials & product posters.
  4. Bright orange driveway archway (`HOPTRI SUPER HUMIC / ĐẠI LÝ LÍ AN`) with hanging red Tết medallion and green/orange 2025 pillar wraps.
  5. Grey-and-white patterned tiled courtyard (`sân gạch`) with two manicured bonsai trees in blue-and-white ceramic pots, leading to a cream residence with orange terracotta-tiled roof (`mái ngói`) and blue-and-white vertical striped fabric awnings (`bạt sọc xanh trắng`).
  6. Left stacked white fertilizer sacks under blue tarpaulin, two parked motorbikes on the concrete apron, classic white concrete bench (`ghế đá`) on the right sidewalk, and Trần Văn Giàu asphalt road with dashed yellow center line & concrete utility pole.

## Shared Spatial Datums (1 unit = 1 metre, Y up)
- **Slab:** `18.0 m × 13.0 m` (`x: [-9, +9]`, `z: [-6.5, +6.5]`), bevelled base down to `y = -0.85`.
- **Road surface:** `y = 0.0` (`z: +3.1` to `+6.5`).
- **Sidewalk concrete apron:** `y = 0.08` (`z: +1.2` to `+3.1`).
- **Courtyard tiled floor:** `y = 0.12` (`x: +0.8` to `+8.4`, `z: -5.4` to `+1.2`).
- **Shop interior floor:** `y = 0.14` (`x: -6.6` to `+0.8`, `z: -5.2` to `+0.7`).
- **Camera (Hero):** Perspective `fov = 26°`, azimuth `30°`, elevation `25°`, distance fitted to full bounds, target `(0.2, 1.8, -0.2)`.

## Narrative Loop (`18 s` deterministic cycle)
- **Shopkeeper** at open shop entrance/counter greeting & handing over a green-capped pesticide jug.
- **Farmer customer (nón lá)** walking a clear, obstacle-free path from the parked motorbikes through the orange archway to the shop counter, receiving the jug, and walking back.
- **Shop helper** carrying a fertilizer sack from the left blue-tarp stack to the shop entrance.
- **Seated villager** properly grounded on the white concrete bench (`ghế đá`), gently fanning.
- **Rural shop dog** (`farm-dog-723730`) patrolling/wagging in the tiled courtyard near the bonsai pots.
- **Ambient:** swaying red Tết medallion under the archway, gentle breeze on bonsai foliage & potted shrubs.
