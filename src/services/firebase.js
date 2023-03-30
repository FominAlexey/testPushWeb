//FCM
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";
import FirebaseConfig from "@/store/consts/firebase.js";

export default function () {
  // Initialize Firebase
  const appFirebase = initializeApp(FirebaseConfig.configFCM);

  const messagingFirebase = getMessaging(appFirebase);
  getToken(messagingFirebase, { vapidKey: FirebaseConfig.vapidKeyFCM })
    .then((currentToken) => {
      if (currentToken) {
        // Send the token to your server and update the UI if necessary
        console.log("FCM token", currentToken);
        // ...
      } else {
        // Show permission request UI
        console.log(
          "No registration token available. Request permission to generate one."
        );
        // ...
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
      // ...
    });
}
