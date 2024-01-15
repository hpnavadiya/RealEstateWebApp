// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-c73aa.firebaseapp.com",
  projectId: "mern-estate-c73aa",
  storageBucket: "mern-estate-c73aa.appspot.com",
  messagingSenderId: "44918154574",
  appId: "1:44918154574:web:9c4812141deb23f96eaa1f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
