importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyDl3X8uThycC8soX9Dzq5hglTAsKNMnyfs",
  authDomain: "mobicom-test00.firebaseapp.com",
  databaseURL: "https://mobicom-test00-default-rtdb.firebaseio.com",
  projectId: "mobicom-test00",
  storageBucket: "mobicom-test00.appspot.com",
  messagingSenderId: "1041612766930",
  appId: "1:1041612766930:web:e02c0172870249583ab70b",
  measurementId: "G-F3VTMEB8MX"
});

const messaging = firebase.messaging();
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  
  /*
  const notificationTitle = 'Background Message Title';
  const notificationOptions = payload.notification;
  self.registration.showNotification(notificationTitle, notificationOptions);
  */
});