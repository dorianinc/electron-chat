// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGRO26pUtD_3fJmAcro7dAtFS73qsYdxE",
  authDomain: "electron-chat-5e0f8.firebaseapp.com",
  projectId: "electron-chat-5e0f8",
  storageBucket: "electron-chat-5e0f8.appspot.com",
  messagingSenderId: "912644837234",
  appId: "1:912644837234:web:02aecc944e37e309b557eb",
  measurementId: "G-TVXQL366G1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);