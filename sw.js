const CACHE_NAME = 'numberblocks-v1';
const ASSETS = [
    '/',
    '/index.html',
    '/numberblocks-addition.html',
    '/numberblocks-subtraction.html',
    '/numberblocks-subtractionV2.html',
    '/numberblocks-runner.html',
    '/numberblocks-preview.html'
];

// Install
self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(ASSETS))
            .then(() => self.skipWaiting())
    );
});

// Activate
self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then(keys => 
            Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
        ).then(() => self.clients.claim())
    );
});

// Fetch
self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request)
            .then(res => res || fetch(e.request))
            .catch(() => caches.match('/index.html'))
    );
});
