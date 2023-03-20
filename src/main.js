import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

var config = {
    apiKey: "AIzaSyDXZScrRUuDnwSuzHiAsL2DJsr_Q6CukMg",
    authDomain: "testkb-5bbfe.firebaseapp.com",
    projectId: "testkb-5bbfe",
    storageBucket: "testkb-5bbfe.appspot.com",
    messagingSenderId: "225449216286",
    appId: "1:225449216286:web:546f83423dc2012a04e10f",
    measurementId: "G-8KJGV2Y6JE"
    // apiKey: "AIzaSyAE1PWZ6qMileZDGXUPspWnbrrWoRf_XR0",
    // authDomain: "test-c0720.firebaseapp.com",
    // projectId: "test-c0720",
    // storageBucket: "test-c0720.appspot.com",
    // messagingSenderId: "599087481711",
    // appId: "1:599087481711:web:0496c3d0e73d8861f99e9a"
};

//vapidKey: "BGbrcvehK93IvMPPI60cb-21Q4Zmppm5jdRHeiO1EiLuVlnJOocp1KcQOUa9jAqi3AIePcuM0WifSDyvZrFDVLs"
const vapidKey = "BNwd01HN4ZifeePaAhH9LfCp11RT9JurOdia6XqhF85R4X-hv32TPnPURFUxiWn-KIxb43reP7xkXJp0wOIEjS0";
const app = initializeApp(config);

const messaging = getMessaging(app);
getToken(messaging, { vapidKey: vapidKey })
    .then((currentToken) => {
        if (currentToken) {
            // Send the token to your server and update the UI if necessary
            console.log(currentToken)
            store.commit('getToken', currentToken)
            // ...
        } else {
            // Show permission request UI
            console.log('No registration token available. Request permission to generate one.');
            // ...
        }
    }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
        // ...
    });

createApp(App).use(store).use(router).mount("#app");
