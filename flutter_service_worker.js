'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "982e19be92ac3c2f8a53c45066ac328e",
"assets/AssetManifest.bin.json": "68c86a2c2327b68709dacf8e4ca18e8c",
"assets/AssetManifest.json": "32e5a22e9cd11a441eb226e81c535cf2",
"assets/assets/files/students.xlsx": "7bf48e31abae1a0db9ef5ccd1b7c189f",
"assets/assets/fonts/TS-Safaa-Medium.otf": "b4d69ca65f7bcc60268b9f2a378bdd41",
"assets/assets/images/appbar_image.png": "44ed7d26c91bcef1f32b3252aa013b5e",
"assets/assets/images/appbar_title.png": "e93be0fc42fc2d5f96d9fa70e1694e95",
"assets/assets/images/application.png": "56197931aa12e2ad74980fec5eb18950",
"assets/assets/images/app_logo.png": "7e39432a167139b0f228601c6212e9dc",
"assets/assets/images/defult_subject_icon.png": "6802d37c032577394b09a062c3dc8298",
"assets/assets/images/education.png": "71ed4f38c72d752520d60ac0e2e05b3d",
"assets/assets/images/error.png": "64e1a4a70d9f59fa9d2118e14c22cd17",
"assets/assets/images/form.png": "c31c955ed10384dcd3d160f38d6ca570",
"assets/assets/images/home_image.png": "0f87e730ac509e1aed2ab3ef03aa64a9",
"assets/assets/images/hybrid.png": "7ed200adfe577dfa500538aeb145617e",
"assets/assets/images/lecture.png": "aa057aaa98756a00c504b4e5455b0a4a",
"assets/assets/images/logo.png": "bf5c3cd77970db1188f4af89c62d3fac",
"assets/assets/images/logo_background.png": "850349ef327697744efe8ab52701d461",
"assets/assets/images/Ok-amico%25201.png": "1aeb462bc853133ba285058635b0c875",
"assets/assets/images/person.png": "2a9699c6c76ad65c62863dad33e19917",
"assets/assets/images/splash.jpg": "6098ab9223ce2185c7e40662e5ed08c6",
"assets/assets/images/splash2.jpg": "8d68d816f2abdcb854dd13693c035d6a",
"assets/assets/images/title.png": "e0efab6a8985da07a8837e5fbde9be01",
"assets/FontManifest.json": "9f285734c0c532eeb4b778eb853d6dc7",
"assets/fonts/MaterialIcons-Regular.otf": "adc0cdd1fb70e082b026dbcf489d783e",
"assets/NOTICES": "855e96e42c81552d58c365ff4254643e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/toast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/toast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "d794dc45c1de892169ca6847bf3f2b74",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "b2dac507b2e2279fa1c3fc13be88b68d",
"icons/Icon-192.png": "5079eb134b2e2b4e95d988d6a44fc408",
"icons/Icon-512.png": "4b766982af9ad1ae86955e16b07ef683",
"icons/Icon-maskable-192.png": "5079eb134b2e2b4e95d988d6a44fc408",
"icons/Icon-maskable-512.png": "4b766982af9ad1ae86955e16b07ef683",
"index.html": "e3acf2a95414720db13e966bb5f21b5e",
"/": "e3acf2a95414720db13e966bb5f21b5e",
"main.dart.js": "701261245b51d50a8fff142f31b32ce2",
"manifest.json": "6bebdd1edec701bc73f24d279682af18",
"version.json": "b9fc16957c6b7bb10e1f50100cc1666e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
