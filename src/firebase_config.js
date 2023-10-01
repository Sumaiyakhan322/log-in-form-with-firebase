// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1SR99cXVY6HhbkTOJNR4uGEIw5N9bzXg",
  authDomain: "user-email-password-auth-bb42d.firebaseapp.com",
  projectId: "user-email-password-auth-bb42d",
  storageBucket: "user-email-password-auth-bb42d.appspot.com",
  messagingSenderId: "611791556118",
  appId: "1:611791556118:web:a31d928b1f062c46adef37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth