// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqEhP5i8E17-rms3wnZXdvBbV6Qo4aiSk",
  authDomain: "expense-tracker-d7410.firebaseapp.com",
  projectId: "expense-tracker-d7410",
  storageBucket: "expense-tracker-d7410.appspot.com",
  messagingSenderId: "879288729434",
  appId: "1:879288729434:web:439c6daf07e445c280bd63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)