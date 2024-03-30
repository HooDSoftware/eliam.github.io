'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "d81bdea40af11f01142f677f8554277a",
"assets/AssetManifest.bin.json": "e1dd104c7b1a198305c83e8fa4469c12",
"assets/AssetManifest.json": "8bc4538acc6485c24b9f0c0f2028781a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "215c398cff0477529301a429b89abd12",
"assets/images/accessories/accessories0.jpg": "aabd72ac0b00e247a7af88b3673ac8c9",
"assets/images/accessories/accessories1.jpg": "e856ec92b6b0c33366ffe942db705215",
"assets/images/accessories/accessories10.jpg": "5509f3fced8d855e4b2be0bcf21256b4",
"assets/images/accessories/accessories2.jpg": "d71025b5b12b457913666f9eebc8de3d",
"assets/images/accessories/accessories3.jpg": "9921c402374e2514e9479c4c27615410",
"assets/images/accessories/accessories4.jpg": "14960aef81e0a4b5a057cb2d852991ce",
"assets/images/accessories/accessories5.jpg": "0ca252ba2cc850a62f93e47eeb374615",
"assets/images/accessories/accessories6.jpg": "fd4bd1c58344a24c58a518a974d2d4f2",
"assets/images/accessories/accessories7.jpg": "1987e9933812567f8f0fbd5e19ef01ec",
"assets/images/accessories/accessories8.jpg": "6a329d4373d260ffd3d9d8365e028d03",
"assets/images/accessories/accessories9.jpg": "562e629e21ef1780456423ed84ec782d",
"assets/images/bags/bags0.jpg": "7282cf7e5e0e06bfd0a9168d8616ff77",
"assets/images/bags/bags1.jpg": "78c0c0b8a14570b3daac3f9ea63f7e22",
"assets/images/bags/bags2.jpg": "05e459103d3594eab828af3a2c7ad8ba",
"assets/images/bags/bags3.jpg": "a9b29751b61a07c75178dc4bc7089601",
"assets/images/bags/bags4.jpg": "016de88c620e5f1f204d233406bd242c",
"assets/images/bags/bags5.jpg": "2f0c0703494749ecb5049fb3c6f68c69",
"assets/images/bags/bags6.jpg": "38672d01be54090faf0ad99e263a6f51",
"assets/images/bags/bags7.jpg": "5509f3fced8d855e4b2be0bcf21256b4",
"assets/images/beauty/beauty0.jpg": "83719cc9496c6098781f1b8a8008ff1a",
"assets/images/beauty/beauty1.jpg": "fb1e5395cda588928449130fd637c277",
"assets/images/beauty/beauty2.jpg": "e36e5115991b8a96e20767e24e02ffed",
"assets/images/beauty/beauty3.jpg": "71ba3886a24cc1c54bbc2fc04889071f",
"assets/images/beauty/beauty4.jpg": "ff42f94074c6ad01fc316f54c9ed8f78",
"assets/images/beauty/beauty5.jpg": "5509f3fced8d855e4b2be0bcf21256b4",
"assets/images/electronics/electronics0.jpg": "c400d37fc823a5f30a2ca66cb3e5c8b1",
"assets/images/electronics/electronics1.jpg": "7197fc82d356a9480a9aa2cd97c7bd03",
"assets/images/electronics/electronics2.jpg": "da9d1257a8827a2b96139bbd92c05eed",
"assets/images/electronics/electronics3.jpg": "115979314cb8bda0ee0138a8c74335e0",
"assets/images/electronics/electronics4.jpg": "1bee6ef90457834a1d533029c703f83f",
"assets/images/electronics/electronics5.jpg": "7a4f4d66d9af11b093678e41f7d7b590",
"assets/images/electronics/electronics6.jpg": "db1e6a774336224d89f14775a3d63b88",
"assets/images/electronics/electronics7.jpg": "da7aa78858c63cb7f7a601542331eddd",
"assets/images/electronics/electronics8.jpg": "caaebbace3b949b6aafb335a68f6bd11",
"assets/images/electronics/electronics9.jpg": "ce1a14e5136f11560b6f03fa705bfb53",
"assets/images/homegarden/home0.jpg": "9a872b3b44f4f5363283bac02c822259",
"assets/images/homegarden/home1.jpg": "b6b2aed72a146995e0c3c6f42ed73a1a",
"assets/images/homegarden/home2.jpg": "9a1756b76e0362cbeb0fb45ab7dbcdbf",
"assets/images/homegarden/home3.jpg": "d48170dab79844cce1134338eaa483bc",
"assets/images/homegarden/home4.jpg": "0ff146cf9ccba68bfe96b14b8a558ad6",
"assets/images/homegarden/home5.jpg": "83bcb7066de40f28547f415cd8525fd1",
"assets/images/homegarden/home6.jpg": "6026b715584fd41d906cdd0df5c3d0c2",
"assets/images/homegarden/home7.jpg": "8a27eaf2b488ba5fb9c6a210dccc90f1",
"assets/images/homegarden/home8.jpg": "d9e24f5714384fa52b19b7a6e0d4582d",
"assets/images/homegarden/home9.jpg": "5509f3fced8d855e4b2be0bcf21256b4",
"assets/images/inapp/bgimage.jpg": "98d468aec9968c50aa356978c97e1eca",
"assets/images/inapp/coverimage.jpg": "50d5f4e6d5656c0bbc57c0c32e90b6b5",
"assets/images/inapp/facebook.jpg": "307ff6afdc1bb9319fe0a9d8aa1dfbbd",
"assets/images/inapp/google.jpg": "b75aecaf9e70a9b1760497e33bcd6db1",
"assets/images/inapp/guest.jpg": "374cd9e4fa2e79621086710b7dbe8066",
"assets/images/inapp/logo.jpg": "a4235c29e2189aa50cbda399ce248afe",
"assets/images/inapp/store.jpg": "edd585f6d5c7a5583b1141f5cb0a9e64",
"assets/images/kids/kids0.jpg": "54f16a3d8ffcdc6ffe40990d9e674260",
"assets/images/kids/kids1.jpg": "6af1f3e2ebccb67a0d4c71ebeceae5a9",
"assets/images/kids/kids10.jpg": "fb1d0766502cf193e28f24699385e72d",
"assets/images/kids/kids11.jpg": "e9314544f9747930583b82448b59c82a",
"assets/images/kids/kids12.jpg": "5509f3fced8d855e4b2be0bcf21256b4",
"assets/images/kids/kids2.jpg": "f4e28efcaf10c296585ea989457604cd",
"assets/images/kids/kids3.jpg": "18e434fb03136d7b204dde418c7cbcdd",
"assets/images/kids/kids4.jpg": "071ed802718cc9f2300e2fd907b833e4",
"assets/images/kids/kids5.jpg": "0c3996b8bad70e4462aa96f588a9a007",
"assets/images/kids/kids6.jpg": "dd250225950dab58a725a12b62e2e5a5",
"assets/images/kids/kids7.jpg": "c22841711521cccc87a2208557b3c3b7",
"assets/images/kids/kids8.jpg": "59475233010442126788c0a13fc0db2f",
"assets/images/kids/kids9.jpg": "a59c44008b3360cf670cece50e08e31c",
"assets/images/men/men0.jpg": "4412e9ee7f674ef75fe8c8ac00e4296a",
"assets/images/men/men1.jpg": "99fd118811f9eb16629f435ca5843930",
"assets/images/men/men2.jpg": "546fc02f66929f2ce1dbd7810caef695",
"assets/images/men/men3.jpg": "809714470f1289d00d4e4703a33669e8",
"assets/images/men/men4.jpg": "a122f2ca677918fee67582915190a1cb",
"assets/images/men/men5.jpg": "a037a712a835b2fee939de7ceea8157c",
"assets/images/men/men6.jpg": "9d129df8d560f6aa440f7e09cc8cdbc2",
"assets/images/men/men7.jpg": "b8bd5b9a856f28b7e45e01f3c9b33f0c",
"assets/images/men/men8.jpg": "5509f3fced8d855e4b2be0bcf21256b4",
"assets/images/shoes/shoes0.jpg": "aeb5832ef99ee5f6ede0a28e97ccd9e5",
"assets/images/shoes/shoes1.jpg": "c8ed475f491cacd1366cc505f781704e",
"assets/images/shoes/shoes10.jpg": "85607bc791c89403480a4b4acbef4d8d",
"assets/images/shoes/shoes11.jpg": "fdd5b4571a1117997212f6b657c296c4",
"assets/images/shoes/shoes12.jpg": "7eb1bbd7a3757f02e030af5bdf45c7a8",
"assets/images/shoes/shoes13.jpg": "5509f3fced8d855e4b2be0bcf21256b4",
"assets/images/shoes/shoes2.jpg": "fc9bbcc343368ca8070449359652197b",
"assets/images/shoes/shoes3.jpg": "2cc52391f9b4353ad1f123fc8f532633",
"assets/images/shoes/shoes4.jpg": "141a7d13ec2c721510306d0aac379086",
"assets/images/shoes/shoes5.jpg": "86dd5e67e7adf0e21bfde3b242dfe430",
"assets/images/shoes/shoes6.jpg": "e1460a1ce2512011351d059cb3a9b5d7",
"assets/images/shoes/shoes7.jpg": "ede8bb614d5798d55f174429780175fa",
"assets/images/shoes/shoes8.jpg": "d67e857048c92bbd0f2b9e99caf84a8b",
"assets/images/shoes/shoes9.jpg": "98f8fbf6ae9e70340be77d8f0c317b9d",
"assets/images/try/image0.jpg": "730c2525795f0735a2f1c0661638c2c3",
"assets/images/try/image1.jpg": "34db5a59e0b83fbe462b600f8f0ab073",
"assets/images/try/image2.jpg": "9a32e64fbf7a506770dfbaf65fed1791",
"assets/images/try/image3.jpg": "1b79718761256fed07ba8381001d886b",
"assets/images/women/women0.jpg": "1afac607847ba861c88be3a7ed420a12",
"assets/images/women/women1.jpg": "f3e3e5313b8eb30d51409ecccbbd1ae0",
"assets/images/women/women2.jpg": "99a77a2e918fd7a758a0b019fd2c7d48",
"assets/images/women/women3.jpg": "8635d0aa9d3c037df741deef8c396ba2",
"assets/images/women/women4.jpg": "37d81588ed41a2b2659dc7b3d98b5827",
"assets/images/women/women5.jpg": "48e1f5a9bef0525e92432d4fc2286d73",
"assets/images/women/women6.jpg": "5ed58106ff26b23e4dd76543b655c5be",
"assets/images/women/women7.jpg": "fc8270d2694ad199139e3ab66b542345",
"assets/images/women/women8.jpg": "73df65313516e93556e961ec3c11e209",
"assets/images/women/women9.jpg": "5509f3fced8d855e4b2be0bcf21256b4",
"assets/NOTICES": "0a8d05c8b1869580511ed2082285c3f6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5b96328067567daa7f1e419c378cebee",
"/": "5b96328067567daa7f1e419c378cebee",
"main.dart.js": "12a42c340b6a131f3dfc173cc79ca17a",
"manifest.json": "7f80e737f40e3f9ad36642c8f982a7fb",
"version.json": "3a5364c7c934af9d2c77be6cbe087df2"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
