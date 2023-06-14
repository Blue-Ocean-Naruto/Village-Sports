// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKaccSq0MITMsjgFUfY5kvdIrY7V4P3ic",
  authDomain: "learn-firebase-f2840.firebaseapp.com",
  projectId: "learn-firebase-f2840",
  storageBucket: "learn-firebase-f2840.appspot.com",
  messagingSenderId: "972510045749",
  appId: "1:972510045749:web:f390d59e37b10eeb3c737c"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };