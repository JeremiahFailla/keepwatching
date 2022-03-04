// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuWl5J-FHDK2qN5Fd4d4Gr18AIMPRtfjc",
  authDomain: "keepwatching-61c3a.firebaseapp.com",
  projectId: "keepwatching-61c3a",
  storageBucket: "keepwatching-61c3a.appspot.com",
  messagingSenderId: "913653907191",
  appId: "1:913653907191:web:850de8d5fa6e2143ed1df2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
