const CACHE_NAME = "joguinho-bernardo-v1";

const ARQUIVOS = [
    "./",
    "./index.html",
    "./manifest.json",
    "./jogos/cores.html",
    "./jogos/numeros.html",
    "./jogos/associacao.html",
    "./jogos/carros.html"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(ARQUIVOS))
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request)
            .then(resposta => resposta || fetch(event.request))
    );
});