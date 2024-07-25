// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASEAPIKEY,
  authDomain: "apartmentmanager-7a112.firebaseapp.com",
  projectId: "apartmentmanager-7a112",
  storageBucket: "apartmentmanager-7a112.appspot.com",
  messagingSenderId: "290749376614",
  appId: "1:290749376614:web:dc00181649b3957ac1e5a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db }
