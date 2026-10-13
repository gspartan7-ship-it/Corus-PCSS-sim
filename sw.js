// build 82a2c51: network-first for pages, versioned cache, old caches purged
const C="pcss-sim-82a2c51";
self.addEventListener("install",e=>{self.skipWaiting();});
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",e=>{const q=e.request;if(q.method!=="GET"||new URL(q.url).origin!==location.origin)return;
 e.respondWith(fetch(q,{cache:"no-store"}).then(res=>{if(res.ok){const cp=res.clone();caches.open(C).then(c=>c.put(q,cp));}return res;}).catch(()=>caches.match(q).then(r=>r||caches.match("./"))));});
