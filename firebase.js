// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxZbD99Cgfjszaw3mmXr88YsG3DCy-vZs",
  authDomain: "budgeteer-adb73.firebaseapp.com",
  projectId: "budgeteer-adb73",
  storageBucket: "budgeteer-adb73.appspot.com",
  messagingSenderId: "1039758477967",
  appId: "1:1039758477967:web:e556c6a3084fa0b1677efa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };