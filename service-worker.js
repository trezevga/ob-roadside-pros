// OB Roadside Pros — Service Worker
const CACHE_NAME = 'ob-roadside-burnt-v1';
const OFFLINE_URL = './offline.html';

const CORE_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './offline.html',
  './icon-64.png',
  './icon-128.png',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(CORE_ASSETS)).then(self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.map(k => k !== CACHE_NAME && caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  e.respondWith(
    caches.match(req).then(cached => {
      const fetchPromise = fetch(req).then(networkRes => {
        const resClone = networkRes.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(req, resClone));
        return networkRes;
      }).catch(() => cached || caches.match(OFFLINE_URL));
      return cached || fetchPromise;
    })
  );
});
