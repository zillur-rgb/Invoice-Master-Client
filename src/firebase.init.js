// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASdh7nLWD-vFqmrFyh9tollUXIhZh3VnY",
  authDomain: "invoice-master-10e23.firebaseapp.com",
  projectId: "invoice-master-10e23",
  storageBucket: "invoice-master-10e23.appspot.com",
  messagingSenderId: "5536855487",
  appId: "1:5536855487:web:21fed94d9d96b5f7711d0a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
