// build a80941d: network-first for pages, versioned cache, old caches purged
const C="pcss-sim-a80941d";
self.addEventListener("install",e=>{self.skipWaiting();});
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",e=>{const q=e.request;if(q.method!=="GET"||new URL(q.url).origin!==location.origin)return;
 const nav=q.mode==="navigate";const req=nav?new Request(q.url.split("#")[0]+(q.url.includes("?")?"&":"?")+"_sw="+Date.now(),{cache:"no-store",credentials:"same-origin"}):q;
 e.respondWith(fetch(req,nav?undefined:{cache:"no-store"}).then(res=>{if(res.ok){const cp=res.clone();caches.open(C).then(c=>c.put(q,cp));}return res;}).catch(()=>caches.match(q).then(r=>r||caches.match("./"))));});
