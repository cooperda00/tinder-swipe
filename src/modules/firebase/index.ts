import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

//Config
const firebaseConfig = {
  apiKey: "AIzaSyAT0t1UcucUKJA6cVjccgA6h0mfbQ-Fk_U",
  authDomain: "jits-techniques.firebaseapp.com",
  projectId: "jits-techniques",
  storageBucket: "jits-techniques.appspot.com",
  messagingSenderId: "1078248677370",
  appId: "1:1078248677370:web:879e1701bd0b34acd5ce43",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Modules
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
