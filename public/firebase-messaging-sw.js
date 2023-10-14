importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js",
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js",
);

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjXKZqGKttBccPihjvniEmxKcHKfOhBqA",
  authDomain: "xmtp-widget-push.firebaseapp.com",
  projectId: "xmtp-widget-push",
  storageBucket: "xmtp-widget-push.appspot.com",
  messagingSenderId: "648343352177",
  appId: "1:648343352177:web:2dc548757ba7dbb5fc3cd0",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
