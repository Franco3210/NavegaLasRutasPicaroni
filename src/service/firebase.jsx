// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8vhKxdkFoYJwrX6Qxt3IOt-T32hERCn4",
  authDomain: "franco-db.firebaseapp.com",
  projectId: "franco-db",
  storageBucket: "franco-db.firebasestorage.app",
  messagingSenderId: "652287797191",
  appId: "1:652287797191:web:1820a9dbc056a98aad9be2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =  getFirestore(app)