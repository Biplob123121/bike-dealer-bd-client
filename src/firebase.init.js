// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0XCksHlaVNdqJ-F8hezgef7WvTA8WXkg",
  authDomain: "bike-dealer-bd.firebaseapp.com",
  projectId: "bike-dealer-bd",
  storageBucket: "bike-dealer-bd.appspot.com",
  messagingSenderId: "494747418724",
  appId: "1:494747418724:web:0f652f7025c9463cec1f71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;