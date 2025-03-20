// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAI3Xzc6dB2ILwM0NHtRkyxvXJQl4qocfk",
  authDomain: "itwana-web-side.firebaseapp.com",
  projectId: "itwana-web-side",
  storageBucket: "itwana-web-side.firebasestorage.app",
  messagingSenderId: "426753296810",
  appId: "1:426753296810:web:fdcd43ff9817139075c3d3",
  measurementId: "G-6FV9X81VR3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
