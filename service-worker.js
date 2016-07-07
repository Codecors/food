var dataCacheName = "food",
  cacheName = "indorigram",
  filesToCache = ["/", "index.php", "index.js", "style.css", "map.php", "css/style.css", "map.js", "https://fonts.googleapis.com/icon?family=Material+Icons", "https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js", "https://cdnjs.cloudflare.com/ajax/libs/list.js/1.0.0/list.min.js"];
self.addEventListener("install", function(e) {
  console.log("[ServiceWorker] Install")
document.getElementById('log').innerHTML = "Installing offline";
  , e.waitUntil(caches.open(cacheName).then(function(e) {
    return console.log("[ServiceWorker] Caching App Shell")
	document.getElementById('log').innerHTML = "Caching App";
    , e.addAll(filesToCache)
  }))
}), self.addEventListener("activate", function(e) {
  console.log("[ServiceWorker] Activate")
  	document.getElementById('log').innerHTML = "Activating...";
, e.waitUntil(caches.keys().then(function(e) {
    return Promise.all(e.map(function(e) {
      return console.log("[ServiceWorker] Removing old cache", e)
      	document.getElementById('log').innerHTML = "Updating The Data";

      , e !== cacheName ? caches["delete"](e) : void 0
    }))
  }))
}), self.addEventListener("fetch", function(e) {
  console.log("[ServiceWorker] Fetch", e.request.url);
  	document.getElementById('log').innerHTML = "Fetching Files";
  var t = "https://foodgrm.herokuapp.com/";
  0 === e.request.url.indexOf(t) ? e.respondWith(fetch(e.request).then(function(t) {
    return caches.open(dataCacheName).then(function(c) {
      return c.put(e.request.url, t.clone()), console.log("[ServiceWorker] Fetched&Cached Data")
      	document.getElementById('log').innerHTML = "All Files Fetched";
, t
    })
  })) : e.respondWith(caches.match(e.request).then(function(t) {
    return t || fetch(e.request)
  }))
});