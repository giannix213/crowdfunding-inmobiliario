const CACHE_NAME = 'crowdprop-v2.1';
const urlsToCache = [
  '/',
  '/projects',
  '/how-it-works',
  '/download',
  '/manifest.json',
  '/icon-192x192.png',
  '/icon-512x512.png'
];

// Instalar el service worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Cache abierto');
        return cache.addAll(urlsToCache);
      })
  );
  self.skipWaiting();
});

// Activar el service worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          // Eliminar TODAS las cachés anteriores, incluso si tienen nombres similares
          if (cacheName !== CACHE_NAME) {
            console.log('Eliminando cache antiguo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      // Forzar que todos los clientes usen la nueva versión inmediatamente
      return self.clients.claim();
    })
  );
});

// Interceptar requests
self.addEventListener('fetch', (event) => {
  // Para iconos y manifest, siempre ir a la red primero
  if (event.request.url.includes('icon-') || event.request.url.includes('manifest.json')) {
    event.respondWith(
      fetch(event.request).then((response) => {
        if (response && response.status === 200) {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return response;
      }).catch(() => {
        // Solo si falla la red, usar caché
        return caches.match(event.request);
      })
    );
    return;
  }

  // Para el resto, usar estrategia cache-first
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Si está en cache, devolverlo
        if (response) {
          return response;
        }

        // Si no, hacer fetch y cachear
        return fetch(event.request).then((response) => {
          // Solo cachear respuestas válidas
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Clonar la respuesta
          const responseToCache = response.clone();

          caches.open(CACHE_NAME)
            .then((cache) => {
              cache.put(event.request, responseToCache);
            });

          return response;
        }).catch(() => {
          // Si falla la conexión, mostrar página offline básica
          if (event.request.destination === 'document') {
            return caches.match('/');
          }
        });
      })
  );
});