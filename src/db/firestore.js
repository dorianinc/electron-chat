// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // If you are using Firestore
// import { getDatabase } from "firebase/database"; // If you are using Realtime Database

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); // If using Firestore
export const analytics = getAnalytics(app);