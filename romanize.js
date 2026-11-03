// Devanagari to plain English letters, for people who cannot read the script.
// Sanskrit sounds every inherent "a"; Hindi drops the word-final one, so `hindi` removes it.
// Medial vowels stay: dropping them by rule garbles words like "kumati" and "raghupati".
const CONSONANTS = {
  क: "k", ख: "kh", ग: "g", घ: "gh", ङ: "n", च: "ch", छ: "chh", ज: "j", झ: "jh", ञ: "n",
  ट: "t", ठ: "th", ड: "d", ढ: "dh", ण: "n", त: "t", थ: "th", द: "d", ध: "dh", न: "n",
  प: "p", फ: "ph", ब: "b", भ: "bh", म: "m", य: "y", र: "r", ल: "l", व: "v",
  श: "sh", ष: "sh", स: "s", ह: "h",
};
const VOWELS = { अ: "a", आ: "a", इ: "i", ई: "i", उ: "u", ऊ: "u", ऋ: "ri", ए: "e", ऐ: "ai", ओ: "o", औ: "au" };
const MATRAS = { "ा": "a", "ि": "i", "ी": "i", "ु": "u", "ू": "u", "ृ": "ri", "े": "e", "ै": "ai", "ो": "o", "ौ": "au" };
const HALANT = "्";
const NUKTA = "़";
const NASALS = "ंँ";
const LABIALS = "पफबभम";
const DIGITS = "०१२३४५६७८९";

// Everyday spellings that the deletion rule would otherwise get wrong.
const HINDI_WORDS = { तुलसीदास: "tulsidas", पवनसुत: "pavansut", बजरंगी: "bajrangi", रामचंद्र: "ramchandra" };

function parseWord(word, hindi) {
  const syllables = [];
  let cluster = "";
  let size = 0;
  const close = (vowel, inherent) => {
    syllables.push({ cluster, size, vowel, inherent, coda: "" });
    cluster = "";
    size = 0;
  };
  const chars = [...word];
  for (let i = 0; i < chars.length; i++) {
    const ch = chars[i];
    const next = chars[i + 1];
    if (ch === "ज" && next === HALANT && chars[i + 2] === "ञ") {
      cluster += "gy";
      size += 2;
      i += 2;
      if (chars[i + 1] in MATRAS) close(MATRAS[chars[++i]], false);
      else if (chars[i + 1] === HALANT) i++;
      else close("a", true);
    } else if (ch in CONSONANTS) {
      let sound = CONSONANTS[ch];
      let after = i + 1;
      if (chars[after] === NUKTA) {
        sound = ch === "ड" ? "r" : ch === "ढ" ? "rh" : sound;
        after++;
      }
      cluster += sound;
      size++;
      i = after - 1;
      if (chars[after] === HALANT) i = after;
      else if (chars[after] in MATRAS) i = after, close(MATRAS[chars[after]], false);
      else close("a", true);
    } else if (ch in VOWELS) {
      close(VOWELS[ch], false);
    } else if (NASALS.includes(ch) && syllables.length) {
      const follower = chars[i + 1] || "";
      const last = syllables[syllables.length - 1];
      last.coda += follower && LABIALS.includes(follower) ? "m" : ch === "ं" && !follower && !hindi ? "m" : "n";
      last.nasal = true;
    } else if (ch === "ः" && syllables.length) {
      syllables[syllables.length - 1].coda += "h";
    }
  }
  if (cluster) syllables.push({ cluster, size, vowel: "", inherent: false, coda: "" });
  return syllables;
}

function romanizeWord(word, hindi) {
  if (hindi) {
    const known = HINDI_WORDS[word];
    if (known) return known;
  }
  const syllables = parseWord(word, hindi);
  const end = syllables[syllables.length - 1];
  // A final cluster keeps its vowel, as in "putra".
  if (hindi && syllables.length > 1 && end.inherent && end.size === 1 && !end.coda) end.vowel = "";
  return syllables.map((s) => s.cluster + s.vowel + s.coda).join("");
}

function romanize(text, { hindi = false } = {}) {
  const clean = text.replace(/[‌‍]/g, "").normalize("NFD");
  const out = clean
    .replace(/ॐ/g, "Om ")
    .replace(/॥/g, " || ")
    .replace(/।/g, " | ")
    .replace(/[ऀ-ॣॱ-ॿ]+/g, (word) => romanizeWord(word, hindi))
    .replace(/[०-९]/g, (d) => DIGITS.indexOf(d))
    .replace(/\s+/g, " ")
    .replace(/\|\| (\d+) \|\|/g, "|| $1 ||")
    .trim();
  return out.charAt(0).toUpperCase() + out.slice(1);
}

if (typeof module !== "undefined") module.exports = { romanize };
