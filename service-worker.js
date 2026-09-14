const CACHE_NAME = 'dispecing-v1';

// Inštalácia Service Workera
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

// Aktivácia
self.addEventListener('activate', (e) => {
  return self.clients.claim();
});

// Obsluha požiadaviek (nevyhnutná pre PWA inštaláciu)
self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
