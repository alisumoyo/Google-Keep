// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore , collection , addDoc , setDoc , getDoc , doc , onSnapshot , where , query , deleteDoc} from "firebase/firestore";
import { getAuth , createUserWithEmailAndPassword , signInWithEmailAndPassword , onAuthStateChanged} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDhJQdNbv953BulqqFV-Ilvx0W4lhr50IU",
  authDomain: "keep-548e2.firebaseapp.com",
  databaseURL: "https://keep-548e2-default-rtdb.firebaseio.com",
  projectId: "keep-548e2",
  storageBucket: "keep-548e2.appspot.com",
  messagingSenderId: "293073268627",
  appId: "1:293073268627:web:f7b5565110252483424266"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const firestore=getFirestore(app);
export {auth, firestore ,  createUserWithEmailAndPassword , signInWithEmailAndPassword , onAuthStateChanged , collection , addDoc , setDoc , getDoc , doc , onSnapshot , where , query , deleteDoc}
