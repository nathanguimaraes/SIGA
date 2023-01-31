var CACHE_STATIC_NAME = 'statica-PWA-v1';
var CACHE_DYNAMIC_NAME = 'dynamic-PWA-v1';

self.addEventListener('install', function(event) {
    console.log('Installing Service Worker ...', event);
    event.waitUntil(
        caches.open(CACHE_STATIC_NAME)
        .then(function(cache){
            console.logo('Precaching App Shell');
            cache.addAll([
                './src/components/Sidebar.vue',
                './src/router/index.js',
                './src/scripts/sidebar.js',
                './src/styles/sidebar.css',
                './src/views/About.vue',
                './src/views/Analises.vue',
                './src/views/Home.vue',
                './src/views/Notificacoes.vue',
                './src/views/Produtor.vue',
                './src/views/Relatorio.vue',
                './src/App.vue',
                './src/main.js',
                '/index.html',
                '/index.js'

            ]);
        })
    );
    console.log(event.target)
});

self.addEventListener('activate', function(event) {
    console.log('Ativando service worker', event);
    event.waitUntil(
        caches
        .keys()
        .then(function(keyList) {
            return Promise.all(keyList(function(key){
                if (key !== CACHE_STATIC_NAME && key !== CACHE_DYNAMIC_NAME) {
                    console.log('Removendo Antigo Cache', key)
                    return cache.delete(key);
                }
            }));
        })
    );
    return self.clients.claim();
});

//registra uma funcao executada no momento da requisicao do cliente
self.addEventListener('fetch', function(event) {
    //bloqueia a requisicao e respode pelo service worker e nao pela rede
    event.respondWith(
        //o sw tenta por conta fazer a requisicao do cliente
        fetch(event.request)
        .then(function(res) {
            //se positivo ele retorna a resposta ao cliente que o mesmo recebeu
            return caches.open(CACHE_DYNAMIC_NAME)
            .then(function(cache) {
                
                //caso a resposta seja 
                cache.put(event.request.url, res.clone());
                return res;
            })
        })
        //caso contrario o mesmo nao consiga buscar 
        .catch(function(err) {
            return caches.match(event.request);
        })
    );
});
