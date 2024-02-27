import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDLLTl1jzR9hUCkvcPscJIKiZiqg6Klmk4",
  authDomain: "chatapp-88e0e.firebaseapp.com",
  projectId: "chatapp-88e0e",
  storageBucket: "chatapp-88e0e.appspot.com",
  messagingSenderId: "1086650778814",
  appId: "1:1086650778814:web:5dfa1de7060cc920b8caef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)