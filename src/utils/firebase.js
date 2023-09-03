// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8YRlgNjAwDvdZuBIqDcQif9XgK3r4-5o",
  authDomain: "netflixgpt-88e65.firebaseapp.com",
  projectId: "netflixgpt-88e65",
  storageBucket: "netflixgpt-88e65.appspot.com",
  messagingSenderId: "853464378913",
  appId: "1:853464378913:web:4076cedc2368125dbffd60",
  measurementId: "G-T1R1KGDH6Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();