importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
    console.log(`Yay! Workbox is loaded 🎉`);
    // Cache JS files
    workbox.routing.registerRoute(
        /\.js$/,
        new workbox.strategies.StaleWhileRevalidate()
    );
    // Cache CSS file
    workbox.routing.registerRoute(
        /\.css$/,
        new workbox.strategies.StaleWhileRevalidate({
            cacheName: 'css-cache',
        })
    );
} else {
    console.log(`Boo! Workbox didn't load 😬`);
}
