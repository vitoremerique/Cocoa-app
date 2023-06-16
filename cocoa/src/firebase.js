// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDV7eA9UnHwf2NVDuxLY1FQiTKeZFNmWxo",
  authDomain: "cocoapp-4a6d7.firebaseapp.com",
  projectId: "cocoapp-4a6d7",
  storageBucket: "cocoapp-4a6d7.appspot.com",
  messagingSenderId: "773499089357",
  appId: "1:773499089357:web:c9d4f5f34f0a172a491484"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP)



