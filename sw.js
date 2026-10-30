/* TooSocial OS — private, offline-ready app shell. Does not store or transmit workspace data. */
const CACHE = 'toosocial-os-app-v2.2';
const SHELL = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './icon-180.png'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith('toosocial-os-app-') && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const req=event.request, url=new URL(req.url);
  if(req.method !== 'GET' || url.origin !== self.location.origin) return;
  const scope=new URL(self.registration.scope);
  if(!url.pathname.startsWith(scope.pathname))return;
  // Navigation: try fresh version, fall back to offline shell. Never cache client data.
  if(req.mode === 'navigate'){
    event.respondWith(fetch(req).catch(() => caches.match('./index.html')));
    return;
  }
  event.respondWith(caches.match(req).then(r => r || fetch(req)));
});
