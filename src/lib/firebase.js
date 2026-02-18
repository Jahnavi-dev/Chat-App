import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chatapp-7281e.firebaseapp.com",
  projectId: "chatapp-7281e",
  storageBucket: "chatapp-7281e.firebasestorage.app",
  messagingSenderId: "716523969380",
  appId: "1:716523969380:web:3f66dafcd07e2a43ac7871"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
// export const storage = getStorage();
