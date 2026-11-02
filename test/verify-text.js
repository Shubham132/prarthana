// Compares every line of data.js with the reference texts, ignoring spelling
// conventions (anusvara vs nasal, punctuation, verse numbers).
const fs = require("fs"), path = require("path");
const PRAYERS = require("../data.js");
const { skeleton } = require("../tracker.js");
const dir = process.argv[2];
const files = { "ram-raksha": ["ws_4.txt", "sh_rr.txt", "vachmi.txt"], "hanuman-chalisa": ["sh_hc.txt", "ht_hc.txt"], "kal-bhairav": ["sh_kb.txt", "ht_kb.txt"] };
const norm = (s) => skeleton(s.replace(/न्ह/g, "ह्न").replace(/म्ह/g, "ह्म").replace(/[ङञणनम]्(?=[क-ह])/g, "ं").replace(/ड्ग/g, "ंग"));
let total = 0, miss = 0;
for (const p of PRAYERS) {
  const refs = files[p.id].map((f) => norm(fs.readFileSync(path.join(dir, f), "utf8").replace(/\([^)]*\)/g, "")));
  for (const s of p.sections) for (const v of s.verses) for (const line of v.lines) {
    const k = norm(line.replace(/॥.*$/, "")); total++;
    const hits = refs.filter((r) => r.includes(k)).length;
    if (!hits) { miss++; console.log(p.id, "NO MATCH:", line); }
  }
}
console.log(`${total - miss}/${total} lines found verbatim in at least one reference`);
