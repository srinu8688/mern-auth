// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-2a7c2.firebaseapp.com",
  projectId: "mern-auth-2a7c2",
  storageBucket: "mern-auth-2a7c2.appspot.com",
  messagingSenderId: "282131180563",
  appId: "1:282131180563:web:f53589c3158cb5bd1863e6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);