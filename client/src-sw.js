const { precacheAndRoute } = require ('workbox-precaching/precacheAndRoute');
const { CacheFirst, StaleWhileRevalidate } = require ('workbox-strategies');
const { registerRoute } = require ('require (workbox-routing');
const { CacheableResponsePlugin } = require ('workbox-cacheable-response');
const { ExpirationPlugin } = require ('workbox-expiration');
const { warmStrategyCache } = require ('workbox-recipes');


// Precache and route all the assets specified in the Workbox manifest file
precacheAndRoute(self.__WB_MANIFEST);

// Create a cache strategy for pages with CacheFirst strategy
const pageCache = new CacheFirst({
  cacheName: 'page-cache',
  plugins: [
    new CacheableResponsePlugin({
      statuses: [0, 200],
    }),
    new ExpirationPlugin({
      maxAgeSeconds: 30 * 24 * 60 * 60,
    }),
  ],
});

warmStrategyCache({
  urls: ['/index.html', '/'],
  strategy: pageCache,
});


// Warm the cache for specified URLs with the pageCache strategy
// self.addEventListener('install', (event) => {
//   event.waitUntil(
//     caches.open('page-cache').then((cache) => {
//       return cache.addAll(['/index.html', '/']);
//     })
//   );
// });


// Register the route for navigating to pages
registerRoute(({ request }) => request.mode === 'navigate', pageCache);


// TODO: Implement asset caching
// caching assets using the CacheFirst strategy
// const assetCache = new CacheFirst({
//   cacheName: 'asset-cache',
//   plugins: [
//     new CacheableResponsePlugin({
//       statuses: [0, 200],
//     }),
//     new ExpirationPlugin({
//       maxAgeSeconds: 7 * 24 * 60 * 60, // Adjust the max age as per your requirements
//     }),
//   ],
// });

// registerRoute(({ request }) => request.destination === 'script' || request.destination === 'style', ({ event }) => {
//   return assetCache.handle({ event });
// });
registerRoute(
  ({ request }) => ['style', 'script', 'worker'].includes(request.destination),
  new StaleWhileRevalidate({
    cacheName: 'asset-cache',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
);
