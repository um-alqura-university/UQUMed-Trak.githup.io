// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiMEflFafCFOQg803j9yOYbWXPwVWS5QI",
  authDomain: "umm-al-qura-972d9.firebaseapp.com",
  projectId: "umm-al-qura-972d9",
  storageBucket: "umm-al-qura-972d9.appspot.com",
  messagingSenderId: "540149097347",
  appId: "1:540149097347:web:7213f122385649828c8cb6",
  measurementId: "G-VY6D161LT5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);