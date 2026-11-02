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
let scale = Number(prefs.get("scale")) || 1;

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
  $("title").textContent = prayer.title;
  $("byline").textContent = `${prayer.author} · ${prayer.language}`;
  $("intro").textContent = prayer.intro;
  for (const b of $("tabs").children) {
    b.setAttribute("aria-selected", String(b.dataset.id === prayer.id));
  }

  const root = $("verses");
  root.replaceChildren();
  lineEls = [];
  for (const section of prayer.sections) {
    root.append(el("h3", "section-heading", section.heading));
    for (const verse of section.verses) {
      const row = el("article", "verse");
      row.append(el("span", "num", verse.n));
      const original = el("div", "original");
      original.lang = "hi";
      for (const text of verse.lines) {
        const line = el("span", "line", text);
        const index = lineEls.length;
        line.addEventListener("click", () => { if (singing) moveTo(index); });
        original.append(line);
        lineEls.push(line);
      }
      row.append(original, el("p", "meaning", verse.meaning));
      root.append(row);
    }
  }
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
  tracker = new Tracker(lineEls.map((line) => line.textContent));
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
$("prev").addEventListener("click", () => moveTo(tracker.index - 1));
$("next").addEventListener("click", () => moveTo(tracker.index + 1));
$("smaller").addEventListener("click", () => setScale(scale - 0.1));
$("larger").addEventListener("click", () => setScale(scale + 0.1));
window.addEventListener("hashchange", route);

if (!location.hash && prefs.get("last")) location.hash = prefs.get("last");
else route();
