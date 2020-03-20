importScripts('https://www.gstatic.com/firebasejs/7.5.0/firebase-app.js'); // eslint-disable-line
importScripts('https://www.gstatic.com/firebasejs/7.5.0/firebase-messaging.js'); // eslint-disable-line

firebase.initializeApp({
  apiKey: "AIzaSyCGvwqW84GmsUfNS2DjPwN0d5nlYvGB7Hc",
  authDomain: "ibox.gt",
  databaseURL: "https://iboxshops.firebaseio.com",
  projectId: "iboxshops",
  storageBucket: "iboxshops.appspot.com",
  messagingSenderId: "947837339959",
  appId: "1:947837339959:web:7f6c331d8b066ad1a132b2",
  measurementId: "G-8CDH8Z2YXB"
});

const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);

  const title = payload.data.title;
  const notificationTitle = `${title.charAt(0).toUpperCase()}${title.substr(1)}`;
  const notificationOptions = {
    body: payload.data.message,
    icon: '/images/logo.png',
    badge: '/images/badge.png',
    data: {
      url: payload.data.url
    },
    actions: payload.data.url === "noProduct" ? undefined : [
      {
        action: 'seeProduct',
        title: "Ver producto",
        icon: "/images/eye.png"
      }
    ],
    vibrate: [200, 200, 200]
  };

  return self.registration.showNotification(notificationTitle,
    notificationOptions);
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  if (event.notification.data.url !== "noProduct") clients.openWindow(`/tienda/${event.notification.data.url}`);
  else clients.openWindow('/tienda');
})