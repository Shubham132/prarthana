const $ = (id) => document.getElementById(id);

const prefs = {
  get(key) {
    try { return localStorage.getItem(key); } catch { return null; }
  },
  set(key, value) {
    try { localStorage.setItem(key, value); } catch { /* storage may be blocked */ }
  },
};

let active = PRAYERS[0];
let lineEls = [];
let lineTexts = [];
let scale = Number(prefs.get("scale")) || 1;
let script = prefs.get("script") === "en" ? "en" : "hi";

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function renderTabs() {
  for (const p of PRAYERS) {
    const b = el("button", "", p.tab);
    b.type = "button";
    b.role = "tab";
    b.dataset.id = p.id;
    b.addEventListener("click", () => { location.hash = p.id; });
    $("tabs").append(b);
  }
}

function renderPrayer(prayer) {
  active = prayer;
  document.title = `${prayer.tab} · Prarthana`;
  $("byline").textContent = `${prayer.author} · ${prayer.language}`;
  $("intro").textContent = prayer.intro;
  for (const b of $("tabs").children) {
    b.setAttribute("aria-selected", String(b.dataset.id === prayer.id));
  }

  const root = $("verses");
  root.replaceChildren();
  lineEls = [];
  lineTexts = [];
  for (const section of prayer.sections) {
    root.append(el("h3", "section-heading", section.heading));
    for (const verse of section.verses) {
      const row = el("article", "verse");
      const num = el("span", "num");
      num.dataset.n = verse.n;
      row.append(num);
      const original = el("div", "original");
      for (const text of verse.lines) {
        const line = el("span", "line");
        const index = lineEls.length;
        line.addEventListener("click", () => { if (singing) moveTo(index); });
        original.append(line);
        lineEls.push(line);
        lineTexts.push(text);
      }
      row.append(original, el("p", "meaning", verse.meaning));
      root.append(row);
    }
  }
  renderPlayerControls(prayer);
  applyScript();
}

function applyScript() {
  const english = script === "en";
  const options = { hindi: Boolean(active.hindi) };
  const show = (text) => (english ? romanize(text, options) : text);
  $("title").textContent = english ? active.tab : active.title;
  $("title").lang = english ? "en" : "hi";
  lineEls.forEach((line, i) => { line.textContent = show(lineTexts[i]); });
  for (const box of document.querySelectorAll(".original")) {
    box.lang = english ? "en" : "hi";
    box.classList.toggle("latin", english);
  }
  for (const num of document.querySelectorAll(".num")) {
    num.textContent = english ? romanize(num.dataset.n) : num.dataset.n;
  }
  $("script-hi").setAttribute("aria-pressed", String(!english));
  $("script-en").setAttribute("aria-pressed", String(english));
}

function setScript(next) {
  script = next;
  prefs.set("script", script);
  applyScript();
}

function renderPlayerControls(prayer) {
  const { embed, id } = prayer.video;
  closePlayer();
  $("listen").hidden = !embed;
  $("youtube").hidden = embed;
  $("youtube").href = `https://www.youtube.com/watch?v=${id}`;
}

function closePlayer() {
  $("player").replaceChildren();
  $("player").hidden = true;
  $("listen").textContent = "Listen";
  $("listen").setAttribute("aria-expanded", "false");
}

function togglePlayer() {
  if (!$("player").hidden) {
    closePlayer();
    return;
  }
  const { id, source } = active.video;
  const frame = el("iframe");
  frame.title = `${active.tab} recording`;
  frame.allow = "autoplay; encrypted-media; picture-in-picture";
  frame.allowFullscreen = true;
  frame.referrerPolicy = "strict-origin-when-cross-origin";
  frame.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
  const credit = el("p", "", `Recording from ${source}. `);
  const link = el("a", "", "Open on YouTube");
  link.href = `https://www.youtube.com/watch?v=${id}`;
  link.target = "_blank";
  link.rel = "noopener";
  credit.append(link);
  $("player").replaceChildren(frame, credit);
  $("player").hidden = false;
  $("listen").textContent = "Hide player";
  $("listen").setAttribute("aria-expanded", "true");
}

function route() {
  const id = location.hash.slice(1);
  const prayer = PRAYERS.find((p) => p.id === id) || PRAYERS[0];
  if (singing) stopSinging();
  notice("");
  renderPrayer(prayer);
  window.scrollTo(0, 0);
  prefs.set("last", prayer.id);
}

function setScale(next) {
  scale = Math.min(1.6, Math.max(0.8, next));
  document.documentElement.style.setProperty("--scale", scale);
  prefs.set("scale", scale);
}

/* Sing along */

let singing = false;
let recognition = null;
let tracker = null;
let shown = -1;

function notice(text) {
  $("notice").textContent = text || "";
  $("notice").hidden = !text;
}

function paint(index, progress) {
  if (index !== shown) {
    lineEls.forEach((line, i) => {
      line.classList.toggle("current", i === index);
      line.classList.toggle("past", i < index);
      line.style.removeProperty("--done");
    });
    lineEls[index].scrollIntoView({ block: "center" });
    shown = index;
  }
  lineEls[index].style.setProperty("--done", `${Math.round(progress * 100)}%`);
}

function moveTo(index) {
  tracker.jump(index);
  paint(tracker.index, 0);
}

function startSinging() {
  const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!Recognition) {
    notice("Your browser does not support speech recognition. Sing along works in Chrome, Edge and Safari.");
    return;
  }
  notice("");
  singing = true;
  tracker = new Tracker(lineTexts);
  shown = -1;
  document.body.classList.add("singing");
  $("singbar").hidden = false;
  paint(0, 0);
  listen(Recognition);
}

function listen(Recognition) {
  recognition = new Recognition();
  recognition.lang = "hi-IN";
  recognition.continuous = true;
  recognition.interimResults = true;
  tracker.newSession();

  recognition.onresult = (event) => {
    let transcript = "";
    for (const result of event.results) transcript += `${result[0].transcript} `;
    $("status").textContent = "Heard:";
    $("heard").textContent = transcript.trim().slice(-60);
    const { index, progress } = tracker.update(transcript);
    paint(index, progress);
  };

  recognition.onerror = (event) => {
    if (event.error === "not-allowed" || event.error === "service-not-allowed") {
      stopSinging();
      notice("Microphone access was blocked. Allow the microphone for this site and try again.");
    } else if (event.error === "network") {
      stopSinging();
      notice("Speech recognition needs an internet connection. Check yours and try again.");
    }
  };

  // Browsers end sessions after silence, so keep listening until the user stops.
  recognition.onend = () => {
    if (singing) listen(Recognition);
  };

  recognition.start();
}

function stopSinging() {
  singing = false;
  if (recognition) {
    recognition.onend = null;
    recognition.abort();
    recognition = null;
  }
  document.body.classList.remove("singing");
  $("singbar").hidden = true;
  $("heard").textContent = "";
  $("status").textContent = "Listening…";
  lineEls.forEach((line) => {
    line.classList.remove("current", "past");
    line.style.removeProperty("--done");
  });
}

renderTabs();
setScale(scale);
$("sing").addEventListener("click", startSinging);
$("stop").addEventListener("click", stopSinging);
$("listen").addEventListener("click", togglePlayer);
$("script-hi").addEventListener("click", () => setScript("hi"));
$("script-en").addEventListener("click", () => setScript("en"));
$("prev").addEventListener("click", () => moveTo(tracker.index - 1));
$("next").addEventListener("click", () => moveTo(tracker.index + 1));
$("smaller").addEventListener("click", () => setScale(scale - 0.1));
$("larger").addEventListener("click", () => setScale(scale + 0.1));
window.addEventListener("hashchange", route);

if (!location.hash && prefs.get("last")) location.hash = prefs.get("last");
else route();
