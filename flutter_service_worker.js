'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js": "90c3a6ca494f987c2d095f4de9686f5b",
"manifest.json": "d1d64474eec6285b13fc84e6123fad7d",
"version.json": "5f0d205eabcf98266492e17ecc4e2094",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.json": "99914b932bd37a50b983c5e7c90ae93b",
"assets/NOTICES": "7a30913b58ba326751d54d3cf81adc67",
".git/COMMIT_EDITMSG": "09ff39fe2b9e2b4ac666a33d3c31e411",
".git/config": "b7c403319b9b5df95363e5e6f8a9e11b",
".git/index": "5431d27b02c124b4969c1aa666ed3381",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/FETCH_HEAD": "0c6a0b0de4205dea0cd1635e50cfd53a",
".git/refs/remotes/origin/main": "a1686686f4e230cfe906329ec1d94fb8",
".git/refs/heads/main": "a1686686f4e230cfe906329ec1d94fb8",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/objects/84/312316fcbf0d68ead04af8985ec6577e0c9e14": "2a84fddde732001fda7d8884bc4893ab",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/35/8d9e0d69a8c3b65df37508915f178e6ab2ccc6": "be32fca7438aa16c2d340e8942b9be03",
".git/objects/35/3230ad25c351b6a1e8d687ad6ffabd11dbb392": "705dd9923900ab6bfabac44e1422eab0",
".git/objects/c5/17c6caf7c69446cb64189c2243a3a2345abd4b": "6aff8f00d82bc4ec7b010b8803d8d9d3",
".git/objects/66/21df32815c62ab96ca0b96931fc2202c2e6912": "e5167549c7c2b09ea066e88176f11b30",
".git/objects/66/3a9a89e11eb9a337f640c2eee7335ae667111d": "a33369e2f5ea67f649213b443b028273",
".git/objects/42/bf29f8323adbbc3c541e16c78132c73bfa4ffd": "08dd3023806e797c4d61e5f447895211",
".git/objects/18/3aef44deac8d12f40bf145f97f93a2cba3633a": "cfb2a732a386e3869778602881e376a8",
".git/objects/e8/3f9fd477ca9ed08d011d9226789015da32c02a": "0f559c6b1fd70926612bcb1d53ed4bb9",
".git/objects/75/22d0974055063f1bc7c59c92a000c902c6eb34": "707489492126a86a2333cd86937e6a8c",
".git/objects/d2/913b712fed5224bcdabaee1b8b6e50704f2b50": "1e27812b3a4ebcf7609a7a91edca6152",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/b4/61ff46a355be7631b9a89f2ac65e78ef224b20": "1ad4beafbf1a37dd620e5dacf282fe61",
".git/objects/78/d316c107ea8793f53f1f37ae0325a3baf1d8f6": "233d27afbf4840343baaa1e550e0a67c",
".git/objects/78/7993ba42ac5d6999d8bc43736916258aba4f15": "3adb1743c8f730da9c9dafba52e34356",
".git/objects/3b/346285211dc6b69b12760314073078aafb7ba1": "37a5926abab61f1e9a86d41561e197a0",
".git/objects/3b/c80dd32073cc166ac8bee3bcf4f922b23ea279": "ddeec0cd1c7dd265348b042dc5a1bd66",
".git/objects/6f/813f0f4299a49d66443fe46bc98af5e8d67a0a": "7810e5dac2c369b637763c2429741a3c",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/2d/ee8c42ef0999368a550ae15916d1b858f0ee97": "099300fc28e68dbb013b95d2fe1b3a47",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/06/258676b8f6aee00aaf917ae5946911c18007f4": "c7f484a0efb817059188f6b6e5474be9",
".git/objects/86/db346db1cecfd2940ded7f1a6545a58059d23c": "f620d075eb9e45cbe934ddfce1a45e87",
".git/objects/4b/f416d3a1b94f6a9bac6a5e8d77c72202526aa8": "ad1d87d876b18b3d9596502d1841aad3",
".git/objects/4b/8893817e9b6fb37a8c0ed77033b79a1657bf9e": "c7d19a8facc3a12e263cccc2920e4865",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/5b/8eb4861215764add3b15392cd1e3c503d9aa2f": "157fcf92d8d315e44816592d2a39d1c0",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/0f/167a9de0b60e6abd8acf18c6c09d4bf4f3cbe6": "bac2bb35475bf36ec8c4fd439c9ad8fe",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/be/121cc7c416729817b180a93cfe38470e3844ca": "434c8103bad75fd6299eb4239d7fb665",
".git/objects/62/626f077b8b18b464021d4d20a62c70c3103eb5": "8f21a63750d958a78285761438fd9374",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/cb/0c8a9af51ec693583d0495e1995511ec043975": "208cb6b70d7aba65a5a1dfeba0e19e4c",
".git/objects/0a/627f6816b7926bfdd64d301b9204671a108aca": "b1e3fcad270831428667124ad90025fd",
".git/objects/a6/d717698722038ab85dc3d0b4fbe10303cd94fe": "f6152044b20a254d67ab16fde4ef03d1",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/03/74dfe975562bc0f28e0299738f6b361c7b67bb": "082c030537697f247d044df2092bfd35",
".git/objects/aa/ff61e2457db8f6d12f6470169f523d2af7025b": "aa8a5af70089f5a2df72a44b98767211",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/98/afabcb1ac2bf8b12e1f601b8429c661a008bd5": "e8f3b98b7562005e9060a80e5cc126b7",
".git/objects/94/a25f7f4cb416c083d265558da75d457237d671": "f4ba8c706b5e4a214d83e95a0099370a",
".git/objects/b6/f683d8d52b2a2e87062fbfba4b905668dff4ff": "c8c356a187f6654299353f718fa01f24",
".git/objects/65/2dd451ad6c670e6547aaf87131f67dc5a755ee": "c19bc0a58670128e36c2df6f581e1d92",
".git/objects/9e/26dfeeb6e641a33dae4961196235bdb965b21b": "304148c109fef2979ed83fbc7cd0b006",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/a917b933b254bed8337fd034af444dedf340a0": "2dbe8c1e3fb54884c57a6f13c113c9f3",
".git/objects/d6/eb7e277ebf439b74f61c948977f5bc2e74da6e": "e0b5e8995c84fdd06a26bf778e1b815f",
".git/objects/d6/2f13cd6e404919a0ec4abd86c27f64e7b01fbe": "c888336c03f2d90b9ed960955afde6c5",
".git/objects/d6/ebd4805981b8400db3e3291c74a743fef9a824": "6c33f0e88a71d9ba8563eab3ee932f04",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/c6/c9af81b256a5cb4bf6722ab446f802fdacb34e": "7e47c5afc1a0fb5e3ad4334d19b09980",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/ce/b782df26e723120adaa4cc84e6dda627acb38e": "40658ff36fca6a82f808039efc4a76c1",
".git/objects/f5/89ca37d210990980a9d9b1a5cb4a29d2db6c70": "8b8d21aac8e6cdbec1fc106163311c31",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/b8/9d947a582e84c9b79726f70c5f7d0948b64049": "7d7840eccfb476c014f4d4002ab1bb06",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/ec/9c6ba67b3c30c00cfb495635cf07a99c4abf60": "16bf8a8520c7f8607e05e3f886b169c0",
".git/objects/7c/0655384b12372abf984f2e778a454c20063364": "a9ac0eedfde9c51cab681e52c0b7a9c0",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f9/bf8762c5e4976aa0ba81a0d1ae5b5c765804c4": "90b7b6c6c732468418fa9246150e69da",
".git/objects/43/b42839a4f18283d049a32077bb8b6f8b4df3bd": "9f10e751a964b627268d4774d1cc3183",
".git/objects/31/7d15da1522feb91812d5f0f6d7a1492ac61e39": "de4d524e766b85ef15c8e4995ff18cb2",
".git/objects/93/8f9d040caf6fdaab2b3c7f013489e64ac6008e": "11280d524b2894bb7fc7288760c43080",
".git/objects/fc/93c2cdbc250382e39d1b1dc4eadee097be0d49": "d4f07ccd48dce95a67408cacbee4c000",
".git/objects/28/0bf9a7097373aec8e795784a9d532ef7565915": "2357ce77f8a3eb546f4070e109ac3850",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/83/f1864f5dafac9bff66f917de67e64fc874a245": "89a0a49899f91ef3ff58f68e4430531d",
".git/objects/81/53c8af637db1eb19a6763b5dd2e68cb13350d4": "390966a8ec0ac4e1e66030ab83078f4c",
".git/objects/07/b3283eb20842d2e6b90dfa6daca7e29b2b88eb": "941ccb16f6ae103516c8aa7bd90f2b3c",
".git/logs/refs/remotes/origin/main": "ecfb8d821898e39d227e37878ca0d5a1",
".git/logs/refs/heads/main": "314c7d48af7a38f900beb173e452224f",
".git/logs/HEAD": "4cf7b65d08f072a42a5806d7aec93c2b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"index.html": "5b917b9369d5961856fe22d45610e658",
"/": "5b917b9369d5961856fe22d45610e658",
".idea/vcs.xml": "166acef3d301bd241d0d6da15bc5ad3c",
".idea/modules.xml": "1eb3b065c55895e347308e50cd717dee",
".idea/web.iml": "52db5efd0fe9f576a1302b8c4b5eac6c",
".idea/workspace.xml": "3c97f1ee9cc834869dcf4b4624a64100",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
