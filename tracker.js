// Follows a singer through a list of lines using speech-to-text output.
// Sung Sanskrit comes back from hi-IN recognition as misspelled Hindi words, so
// matching runs on a loose consonant skeleton with local alignment, not exact text.
const FOLD = {
  ख: "क", घ: "ग", छ: "च", झ: "ज", ठ: "ट", ढ: "ड", थ: "त", ध: "द", फ: "प", भ: "ब",
  श: "स", ष: "स", ण: "न", ङ: "न", ञ: "न", व: "ब", ऋ: "र", ळ: "ल",
};

function skeleton(text) {
  let out = "";
  for (const ch of text.normalize("NFD")) {
    if (ch >= "क" && ch <= "ह") out += FOLD[ch] || ch;
    else if (ch === "ऋ") out += "र";
  }
  return out;
}

// Smith-Waterman: best match between any part of `heard` and any part of `line`.
function align(heard, line) {
  const w = line.length + 1;
  let prev = new Int32Array(w);
  let prevStart = new Int32Array(w);
  let prevHits = new Int32Array(w);
  const best = { score: 0, hits: 0, heardStart: 0, heardEnd: 0, lineEnd: 0 };
  for (let i = 1; i <= heard.length; i++) {
    const cur = new Int32Array(w);
    const curStart = new Int32Array(w);
    const curHits = new Int32Array(w);
    curStart[0] = i;
    for (let j = 1; j < w; j++) {
      const hit = heard[i - 1] === line[j - 1];
      const diag = prev[j - 1] + (hit ? 2 : -1);
      const up = prev[j] - 1;
      const left = cur[j - 1] - 1;
      const s = Math.max(0, diag, up, left);
      cur[j] = s;
      if (s === 0) {
        curStart[j] = i;
      } else if (s === diag) {
        curStart[j] = prev[j - 1] === 0 ? i - 1 : prevStart[j - 1];
        curHits[j] = (prev[j - 1] === 0 ? 0 : prevHits[j - 1]) + (hit ? 1 : 0);
      } else if (s === up) {
        curStart[j] = prevStart[j];
        curHits[j] = prevHits[j];
      } else {
        curStart[j] = curStart[j - 1];
        curHits[j] = curHits[j - 1];
      }
      if (s > best.score) {
        Object.assign(best, { score: s, hits: curHits[j], heardStart: curStart[j], heardEnd: i, lineEnd: j });
      }
    }
    prev = cur;
    prevStart = curStart;
    prevHits = curHits;
  }
  return best;
}

class Tracker {
  constructor(lines, { lookahead = 3, tail = 80 } = {}) {
    this.lines = lines.map(skeleton);
    this.lookahead = lookahead;
    this.tail = tail;
    this.index = 0;
    this.progress = 0;
    this.used = 0;
  }

  jump(index) {
    this.index = Math.max(0, Math.min(index, this.lines.length - 1));
    this.progress = 0;
  }

  // Call when a new recognition session begins, since its transcript restarts.
  newSession() {
    this.used = 0;
  }

  // `transcript` is everything heard this session; interim text may be revised.
  update(transcript) {
    const heard = skeleton(transcript);
    this.used = Math.min(this.used, heard.length);
    for (let guard = 0; guard < 12; guard++) {
      const from = Math.max(this.used, heard.length - this.tail);
      const piece = heard.slice(from);
      if (piece.length < 4) break;
      const m = this.bestMatch(piece);
      if (!m) break;
      const len = this.lines[m.index].length;
      const carried = m.index === this.index ? this.progress : 0;
      this.index = m.index;
      this.progress = Math.max(carried, m.lineEnd / len);
      if (m.lineEnd / len < 0.85 || m.hits < len * 0.5) break;
      this.used = from + m.heardEnd;
      if (this.index + 1 >= this.lines.length) {
        this.progress = 1;
        break;
      }
      this.index += 1;
      this.progress = 0;
    }
    return { index: this.index, progress: this.progress };
  }

  bestMatch(piece) {
    let near = null;
    const last = Math.min(this.index + this.lookahead, this.lines.length - 1);
    for (let i = this.index; i <= last; i++) {
      const line = this.lines[i];
      const a = align(piece, line);
      const need = Math.min(6, Math.ceil(line.length * 0.5));
      // Long pieces find a few stray letters anywhere, so errors must stay low too.
      if (a.hits < need || a.score < a.hits * 1.4) continue;
      // Sequential singing is the norm, so distance ahead has to be paid for.
      const rank = a.hits - (i - this.index) * 2;
      if (!near || rank > near.rank) near = { ...a, index: i, rank };
    }
    const far = this.farJump(piece);
    return far && (!near || far.hits > near.hits + 3) ? far : near;
  }

  // Singer started mid-prayer or skipped: accept only a long, nearly whole line match.
  farJump(piece) {
    if (piece.length < 10) return null;
    let best = null;
    // Search forward from here first so a repeated refrain never pulls us backwards.
    for (let step = 0; step < this.lines.length; step++) {
      const i = (this.index + step) % this.lines.length;
      const line = this.lines[i];
      if (line.length < 10) continue;
      const a = align(piece, line);
      if (a.hits >= line.length * 0.75 && (!best || a.hits > best.hits)) best = { ...a, index: i };
    }
    return best;
  }
}

if (typeof module !== "undefined") module.exports = { Tracker, skeleton, align };
