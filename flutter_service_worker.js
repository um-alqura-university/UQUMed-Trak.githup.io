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
"assets/NOTICES": "69e766f7605b42f9590fc882a9ef2357",
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
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"firebase-messaging-sw.js": "9ac633dbb7618cc824e6ce25b9fc7855",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "07e4424b1be6a418777bfbb3751c38d4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/logo.png": "bf5c3cd77970db1188f4af89c62d3fac",
"icons/logo_16.png": "806113111702c37a8840b6205c809615",
"icons/logo_32.png": "2e929cb054c0ccc1762578ee87e34bba",
"index.html": "634e46408289f831663d6e5e7d0b51a6",
"/": "634e46408289f831663d6e5e7d0b51a6",
"main.dart.js": "19693dec61b7f1494ae3dd3e899421e8",
"manifest.json": "7bd799764976b74de31f2568ca112809",
"UQUMed-Trak.githup.io/.git/config": "f90e7838971e0173e3d6bd92c43dc45e",
"UQUMed-Trak.githup.io/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"UQUMed-Trak.githup.io/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"UQUMed-Trak.githup.io/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"UQUMed-Trak.githup.io/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"UQUMed-Trak.githup.io/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"UQUMed-Trak.githup.io/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"UQUMed-Trak.githup.io/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"UQUMed-Trak.githup.io/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"UQUMed-Trak.githup.io/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"UQUMed-Trak.githup.io/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"UQUMed-Trak.githup.io/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"UQUMed-Trak.githup.io/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"UQUMed-Trak.githup.io/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"UQUMed-Trak.githup.io/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"UQUMed-Trak.githup.io/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"UQUMed-Trak.githup.io/.git/index": "a4129bb6bc3ff2f9bc31b123716045c9",
"UQUMed-Trak.githup.io/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"UQUMed-Trak.githup.io/.git/logs/HEAD": "846c430ee039a6f3db3922e5a27c75ca",
"UQUMed-Trak.githup.io/.git/logs/refs/heads/main": "846c430ee039a6f3db3922e5a27c75ca",
"UQUMed-Trak.githup.io/.git/logs/refs/remotes/origin/HEAD": "846c430ee039a6f3db3922e5a27c75ca",
"UQUMed-Trak.githup.io/.git/objects/pack/pack-1f7004f1fd81d273a7d47efcdcece4515124d631.idx": "acc53b472500e8130be73d922fb519d8",
"UQUMed-Trak.githup.io/.git/objects/pack/pack-1f7004f1fd81d273a7d47efcdcece4515124d631.pack": "08160b6ecb2ca4db8e4b8018c9b04511",
"UQUMed-Trak.githup.io/.git/packed-refs": "83a3a01d983b3e0beaafa21cb1c8f6df",
"UQUMed-Trak.githup.io/.git/refs/heads/main": "54ab7309873e564518221a55ca2d7aaa",
"UQUMed-Trak.githup.io/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"UQUMed-Trak.githup.io/assets/AssetManifest.bin": "982e19be92ac3c2f8a53c45066ac328e",
"UQUMed-Trak.githup.io/assets/AssetManifest.bin.json": "68c86a2c2327b68709dacf8e4ca18e8c",
"UQUMed-Trak.githup.io/assets/AssetManifest.json": "32e5a22e9cd11a441eb226e81c535cf2",
"UQUMed-Trak.githup.io/assets/assets/files/students.xlsx": "7bf48e31abae1a0db9ef5ccd1b7c189f",
"UQUMed-Trak.githup.io/assets/assets/fonts/TS-Safaa-Medium.otf": "b4d69ca65f7bcc60268b9f2a378bdd41",
"UQUMed-Trak.githup.io/assets/assets/images/appbar_image.png": "44ed7d26c91bcef1f32b3252aa013b5e",
"UQUMed-Trak.githup.io/assets/assets/images/appbar_title.png": "e93be0fc42fc2d5f96d9fa70e1694e95",
"UQUMed-Trak.githup.io/assets/assets/images/application.png": "56197931aa12e2ad74980fec5eb18950",
"UQUMed-Trak.githup.io/assets/assets/images/app_logo.png": "7e39432a167139b0f228601c6212e9dc",
"UQUMed-Trak.githup.io/assets/assets/images/defult_subject_icon.png": "6802d37c032577394b09a062c3dc8298",
"UQUMed-Trak.githup.io/assets/assets/images/education.png": "71ed4f38c72d752520d60ac0e2e05b3d",
"UQUMed-Trak.githup.io/assets/assets/images/error.png": "64e1a4a70d9f59fa9d2118e14c22cd17",
"UQUMed-Trak.githup.io/assets/assets/images/form.png": "c31c955ed10384dcd3d160f38d6ca570",
"UQUMed-Trak.githup.io/assets/assets/images/home_image.png": "0f87e730ac509e1aed2ab3ef03aa64a9",
"UQUMed-Trak.githup.io/assets/assets/images/hybrid.png": "7ed200adfe577dfa500538aeb145617e",
"UQUMed-Trak.githup.io/assets/assets/images/lecture.png": "aa057aaa98756a00c504b4e5455b0a4a",
"UQUMed-Trak.githup.io/assets/assets/images/logo.png": "bf5c3cd77970db1188f4af89c62d3fac",
"UQUMed-Trak.githup.io/assets/assets/images/logo_background.png": "850349ef327697744efe8ab52701d461",
"UQUMed-Trak.githup.io/assets/assets/images/Ok-amico%25201.png": "1aeb462bc853133ba285058635b0c875",
"UQUMed-Trak.githup.io/assets/assets/images/person.png": "2a9699c6c76ad65c62863dad33e19917",
"UQUMed-Trak.githup.io/assets/assets/images/splash.jpg": "6098ab9223ce2185c7e40662e5ed08c6",
"UQUMed-Trak.githup.io/assets/assets/images/splash2.jpg": "8d68d816f2abdcb854dd13693c035d6a",
"UQUMed-Trak.githup.io/assets/assets/images/title.png": "e0efab6a8985da07a8837e5fbde9be01",
"UQUMed-Trak.githup.io/assets/FontManifest.json": "9f285734c0c532eeb4b778eb853d6dc7",
"UQUMed-Trak.githup.io/assets/fonts/MaterialIcons-Regular.otf": "d11f287c7fb5919f8f8d6c72208cfa0b",
"UQUMed-Trak.githup.io/assets/NOTICES": "0d5eaf94cea289734f3c89ac54fbe4ab",
"UQUMed-Trak.githup.io/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"UQUMed-Trak.githup.io/assets/packages/toast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"UQUMed-Trak.githup.io/assets/packages/toast/assets/toastify.js": "7167388315b479d339b1c6013b440bda",
"UQUMed-Trak.githup.io/assets/shaders/ink_sparkle.frag": "9bb2aaa0f9a9213b623947fa682efa76",
"UQUMed-Trak.githup.io/canvaskit/canvaskit.js": "b8f4beed9f92960c33fac4f3ec0f49db",
"UQUMed-Trak.githup.io/canvaskit/canvaskit.js.symbols": "a5abd9548c1ac52492fb83682355175c",
"UQUMed-Trak.githup.io/canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"UQUMed-Trak.githup.io/canvaskit/chromium/canvaskit.js": "ae8a22c690cdbe6db931f7fcfa32793c",
"UQUMed-Trak.githup.io/canvaskit/chromium/canvaskit.js.symbols": "e6a058eeb908ce2c2c30d450cffb438a",
"UQUMed-Trak.githup.io/canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"UQUMed-Trak.githup.io/canvaskit/skwasm.js": "78e709d9dc8ed5e0288a151e3cf3e95d",
"UQUMed-Trak.githup.io/canvaskit/skwasm.js.symbols": "d10d5b9ecde9454f3b5e0574a3d4649c",
"UQUMed-Trak.githup.io/canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"UQUMed-Trak.githup.io/canvaskit/skwasm.worker.js": "e35e7fbec8f04f340add4f6ace89a29c",
"UQUMed-Trak.githup.io/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"UQUMed-Trak.githup.io/flutter.js": "9fd90a6808bad6cfbaf32408c99eee90",
"UQUMed-Trak.githup.io/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"UQUMed-Trak.githup.io/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"UQUMed-Trak.githup.io/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"UQUMed-Trak.githup.io/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"UQUMed-Trak.githup.io/icons/logo.png": "bf5c3cd77970db1188f4af89c62d3fac",
"UQUMed-Trak.githup.io/icons/logo_16.png": "806113111702c37a8840b6205c809615",
"UQUMed-Trak.githup.io/icons/logo_32.png": "2e929cb054c0ccc1762578ee87e34bba",
"UQUMed-Trak.githup.io/index.html": "09d2b79ff0c64c5fe8a96cdc679730fa",
"UQUMed-Trak.githup.io/main.dart.js": "fc0485974dc64f658ac8a8bfae4a4822",
"UQUMed-Trak.githup.io/manifest.json": "7bd799764976b74de31f2568ca112809",
"UQUMed-Trak.githup.io/version.json": "daddb57faee272b6414f39afea3e53dc",
"version.json": "daddb57faee272b6414f39afea3e53dc"};
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
