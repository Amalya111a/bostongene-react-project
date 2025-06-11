import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBHvWJEt6eOSR974DHsywXWVnKx5bApQ2s",
  authDomain: "bostongene-43ae1.firebaseapp.com",
  projectId: "bostongene-43ae1",
  storageBucket: "bostongene-43ae1.firebasestorage.app",
  messagingSenderId: "933760984335",
  appId: "1:933760984335:web:c4d8a2e395dee9f5bb4a7a",
  measurementId: "G-H74G6NK8C8"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
export { app };

