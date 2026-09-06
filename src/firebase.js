import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDnQvc3qToUCfDfqN5BceCnt4FlsG_ULWI",
  authDomain: "kisanalert-12708.firebaseapp.com",
  projectId: "kisanalert-12708",
  storageBucket: "kisanalert-12708.firebasestorage.app",
  messagingSenderId: "872620122286",
  appId: "1:872620122286:web:1365db18fe8e48c9f90d3f",
  measurementId: "G-E8DSF8GRG4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
