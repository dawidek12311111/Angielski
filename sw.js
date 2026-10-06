// Minimalny service worker — pozwala zainstalować aplikację na telefonie.
// Niczego nie zapisuje w pamięci podręcznej, więc zawsze ładuje się najnowsza wersja z GitHuba.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
