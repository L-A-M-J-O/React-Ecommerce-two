// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKclOGdSuSFZ6TWp0NEGoXVOc_RoJFxpM",
  authDomain: "oam-rick-mort.firebaseapp.com",
  projectId: "oam-rick-mort",
  storageBucket: "oam-rick-mort.appspot.com",
  messagingSenderId: "355074426943",
  appId: "1:355074426943:web:af9c69e0ccc9ed4d34908a",
  measurementId: "G-2447K4WRNG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = initializeApp(app);