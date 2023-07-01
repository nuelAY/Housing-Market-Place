// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_MX1beB3hyS5ZPWZFz3g61hyetOYwSS8",
  authDomain: "housing-marketplace-app-b2470.firebaseapp.com",
  projectId: "housing-marketplace-app-b2470",
  storageBucket: "housing-marketplace-app-b2470.appspot.com",
  messagingSenderId: "434087928182",
  appId: "1:434087928182:web:5efd87a01cc1a5f21ada57"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();