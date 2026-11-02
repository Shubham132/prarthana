// Simulates a singer: feeds each prayer through the tracker in growing chunks,
// with noisy transcription, and checks the tracker reaches the final line.
const PRAYERS = require("../data.js");
const { Tracker } = require("../tracker.js");
let seed = 7;
const rand = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
const SWAPS = { "ा": "", "ी": "ि", "ू": "ु", "ं": "न", "श": "स", "ष": "श", "व": "ब", "ध": "द", "ण": "न" };
const noisy = (s, rate) => [...s.replace(/[।॥०-९]/g, "")].map((c) => {
  if (rand() > rate) return c;
  if (c in SWAPS) return SWAPS[c];
  return rand() < 0.3 ? "" : c;
}).join("");
let failed = 0;
for (const rate of [0, 0.15, 0.3]) for (const p of PRAYERS) {
  const lines = p.sections.flatMap((s) => s.verses.flatMap((v) => v.lines));
  const t = new Tracker(lines);
  let said = "", maxBack = 0, prev = 0, track = 0, seen = 0;
  lines.forEach((line, i) => {
    const words = noisy(line, rate).split(/\s+/);
    for (let c = 0; c < words.length; c += 2) {
      said += " " + words.slice(c, c + 2).join(" ");
      const { index } = t.update(said);
      maxBack = Math.max(maxBack, prev - index); prev = index;
      seen++; if (Math.abs(index - i) <= 1) track++;
    }
  });
  const pct = Math.round((track / seen) * 100);
  const ok = t.index >= lines.length - 2 && pct >= 85 && maxBack <= 1;
  if (!ok) failed++;
  console.log(`${ok ? "ok  " : "FAIL"} noise=${rate} ${p.id}: end ${t.index + 1}/${lines.length}, on-line ${pct}%, maxBack ${maxBack}`);
}
// Starting mid-prayer, skipping the opening doha, must land on the sung line.
for (const rate of [0, 0.15]) {
  const lines = PRAYERS[1].sections.flatMap((s) => s.verses.flatMap((v) => v.lines));
  const t = new Tracker(lines);
  const sung = noisy(lines[4] + " " + lines[5], rate);
  const { index } = t.update(sung);
  const ok = index === 5 || index === 6;
  if (!ok) failed++;
  console.log(`${ok ? "ok  " : "FAIL"} noise=${rate} start at chaupai: landed on line ${index}, want 5 or 6`);
}
// Silence and unrelated speech must not move the pointer.
const t = new Tracker(PRAYERS[1].sections[1].verses[0].lines);
t.update("आज मौसम बहुत अच्छा है और हम सब लोग बाजार जा रहे हैं फिर शाम को घर वापस आएंगे"); if (t.index !== 0) { failed++; console.log("FAIL moved on unrelated speech"); }
process.exit(failed ? 1 : 0);
