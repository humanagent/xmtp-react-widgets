import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjXKZqGKttBccPihjvniEmxKcHKfOhBqA",
  authDomain: "xmtp-widget-push.firebaseapp.com",
  projectId: "xmtp-widget-push",
  storageBucket: "xmtp-widget-push.appspot.com",
  messagingSenderId: "648343352177",
  appId: "1:648343352177:web:2dc548757ba7dbb5fc3cd0",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export const requestPermission = () => {
  console.log("Requesting User Permission......");
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("Notification User Permission Granted.");

      return getToken(messaging, {
        vapidKey: `BEc92GaTA19xRgEDIxSoF5y3eXmmpB71bhglRHmhybhOUDn_2PNctncfdQaDjUIelEPWzIQ6pbfMx2rAKzF08n4`,
      })
        .then((currentToken) => {
          if (currentToken) {
            console.log("Client Token: ", currentToken);
          } else {
            console.log("Failed to generate the app registration token.");
          }
        })
        .catch((err) => {
          console.log(
            "An error occurred when requesting to receive the token.",
            err,
          );
        });
    } else {
      console.log("User Permission Denied.");
    }
  });
};

requestPermission();

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });
