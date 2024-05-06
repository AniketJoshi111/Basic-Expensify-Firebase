


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfLTRk6FDnw7_bS7d2GF-vJH05Z4htmrE",
  authDomain: "expense-tracker-499dc.firebaseapp.com",
  projectId: "expense-tracker-499dc",
  storageBucket: "expense-tracker-499dc.appspot.com",
  messagingSenderId: "602427804021",
  appId: "1:602427804021:web:3b3796567dc4e12479eb3c",
  measurementId: "G-L2HGCJ2Z1L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db  = getFirestore(app);