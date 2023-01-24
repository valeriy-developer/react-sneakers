import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const API_KEY = process.env.SNEAKERS_API_KEY;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "react-sneakers-baae7.firebaseapp.com",
  projectId: "react-sneakers-baae7",
  storageBucket: "react-sneakers-baae7.appspot.com",
  messagingSenderId: "1019268887143",
  appId: "1:1019268887143:web:e5c0886f998789ab1a1ac2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
