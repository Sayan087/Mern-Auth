// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-ebddc.firebaseapp.com",
  projectId: "mern-auth-ebddc",
  storageBucket: "mern-auth-ebddc.appspot.com",
  messagingSenderId: "958710634974",
  appId: "1:958710634974:web:dfa60f49932760d9eda54f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);