// Import the functions you need from the SDKs you need
import { getDoc,getFirestore,collection,addDoc,getDocs} from 'firebase/firestore';
import { initializeApp } from "firebase/app";
import  { getAuth , GoogleAuthProvider }  from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQkckeOafsZhvRtiA3Efflx2oMg9M4-xY",
  authDomain: "prode-99c84.firebaseapp.com",
  projectId: "prode-99c84",
  storageBucket: "prode-99c84.appspot.com",
  messagingSenderId: "710168407591",
  appId: "1:710168407591:web:fe2aaa8d3ec17a0b12e802"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const authprovider = new GoogleAuthProvider()
const dbfirestore = getFirestore(app)
const database = {dbfirestore,collection,addDoc,getDoc,getDocs}


export { app,getAuth, authprovider,database } 
