// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGJYb5DZbC41OCd_FsUWkDl1iQFSAzT9c",
  authDomain: "nms-registration.firebaseapp.com",
  projectId: "nms-registration",
  storageBucket: "nms-registration.appspot.com",
  messagingSenderId: "73466041335",
  appId: "1:73466041335:web:35d1c9eef2877794f1d4f2",
  measurementId: "G-SFC5575HPL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
