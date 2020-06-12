import * as firebase from 'firebase/app';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_DOMAIN.firebaseapp.com",
  databaseURL: "YOUR_URL",
  projectId: "YOUR_ID",
  storageBucket: "YOUR_STORAGE",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

if (!firebase.apps.length) {
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}

export default firebase;