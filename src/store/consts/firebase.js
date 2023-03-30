const FIREBASE_API_KEY = "AIzaSyAE1PWZ6qMileZDGXUPspWnbrrWoRf_XR0";
const FIREBASE_AUTH_DOMAIN = "test-c0720.firebaseapp.com";
const FIREBASE_PROJECT_ID = "test-c0720";
const FIREBASE_STORAGE_BUCKET = "test-c0720.appspot.com";
const FIREBASE_MESSAGING_SENDER_ID = "599087481711";
const FIREBASE_APP_ID = "1:599087481711:web:0496c3d0e73d8861f99e9a";
const FIREBASE_VAPID_KEY =
  "BGbrcvehK93IvMPPI60cb-21Q4Zmppm5jdRHeiO1EiLuVlnJOocp1KcQOUa9jAqi3AIePcuM0WifSDyvZrFDVLs";

export default {
  configFCM: {
    apiKey: FIREBASE_API_KEY,
    authDomain: FIREBASE_AUTH_DOMAIN,
    projectId: FIREBASE_PROJECT_ID,
    storageBucket: FIREBASE_STORAGE_BUCKET,
    messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
    appId: FIREBASE_APP_ID,
  },
  vapidKeyFCM: FIREBASE_VAPID_KEY,
};
