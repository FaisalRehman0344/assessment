// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfB_mnkN_j8GoNWP-GtWCX9LATcKrOx1U",
  authDomain: "assessment-task-87021.firebaseapp.com",
  projectId: "assessment-task-87021",
  storageBucket: "assessment-task-87021.appspot.com",
  messagingSenderId: "330965794509",
  appId: "1:330965794509:web:5ad5347bb24b5c82f0b384"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);