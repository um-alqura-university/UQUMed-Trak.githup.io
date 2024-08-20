// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging-compat.js');



firebase.initializeApp({
  apiKey: "AIzaSyBiMEflFafCFOQg803j9yOYbWXPwVWS5QI",
  authDomain: "umm-al-qura-972d9.firebaseapp.com",
  projectId: "umm-al-qura-972d9",
  storageBucket: "umm-al-qura-972d9.appspot.com",
  messagingSenderId: "540149097347",
  appId: "1:540149097347:web:7213f122385649828c8cb6",
  measurementId: "G-VY6D161LT5"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
