// offline cache for the hosted build (registered only on http/https)
const C = "pcss-sim-v5";
const FILES = ["./", "index.html", "styles.css", "app.js", "vendor/or3d.bundle.js", "manifest.webmanifest", "icon.svg", "CORUS_PCSS_Virtual_OR.html"];
self.addEventListener("install", (e) => e.waitUntil(caches.open(C).then((c) => c.addAll(FILES).catch(() => {})).then(() => self.skipWaiting())));
self.addEventListener("activate", (e) => e.waitUntil(caches.keys().then((k) => Promise.all(k.filter((x) => x !== C).map((x) => caches.delete(x)))).then(() => self.clients.claim())));
self.addEventListener("fetch", (e) => { if (e.request.method !== "GET") return; e.respondWith(caches.match(e.request).then((r) => r || fetch(e.request).then((res) => { const cp = res.clone(); caches.open(C).then((c) => c.put(e.request, cp)); return res; }))); });
