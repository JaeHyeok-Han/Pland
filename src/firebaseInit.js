import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyDl3X8uThycC8soX9Dzq5hglTAsKNMnyfs",
  authDomain: "mobicom-test00.firebaseapp.com",
  databaseURL: "https://mobicom-test00-default-rtdb.firebaseio.com",
  projectId: "mobicom-test00",
  storageBucket: "mobicom-test00.appspot.com",
  messagingSenderId: "1041612766930",
  appId: "1:1041612766930:web:e02c0172870249583ab70b",
  measurementId: "G-F3VTMEB8MX"
};
initializeApp(firebaseConfig);

const messaging = getMessaging();
getToken(messaging, { vapidKey: 'BClFI5FPCfRwiWJIfd7F-gYkx00jsKKQR4L2gb3guFLCcNPfG6fPMJ2iWL_MBXe6iiXkKDRMPGGgffq5peqXaL0' }).then((currentToken) => {
  if (currentToken) {
    console.log(currentToken);
  } else {
    console.log('No registration token available. Request permission to generate one.');
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
});