importScripts('https://www.gstatic.com/firebasejs/4.6.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.6.1/firebase-messaging.js');
firebase.initializeApp({
    apiKey: "AIzaSyCiPaOM5Nr4B9ssl2I4I0VY1Ql_mAi5eTQ",
    authDomain: "relias-notifications-hack.firebaseapp.com",
    databaseURL: "https://relias-notifications-hack.firebaseio.com",
    projectId: "relias-notifications-hack",
    storageBucket: "relias-notifications-hack.appspot.com",
    messagingSenderId: "242528928798"
});
const messaging = firebase.messaging();
self.addEventListener('push', function (payload) {
    console.log('[Service Worker] Push Received.');
    console.log(`[Service Worker] Push had this data: "${payload.data.text()}"`);
    const object = JSON.parse(payload.data.text());
    // console.log(object);
    const title = object.notification.title;
    const options = {
        body: object.notification.body,
        icon: object.notification.icon
    }
    // console.log(title);
    // console.log(options);
    payload.waitUntil(self.registration.showNotification(title, options));
});