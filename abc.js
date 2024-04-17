// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCty87QbxwnBxGEPWWvgY9gE9uv-_BOU8U",
  authDomain: "mern-blog-8ccea.firebaseapp.com",
  projectId: "mern-blog-8ccea",
  storageBucket: "mern-blog-8ccea.appspot.com",
  messagingSenderId: "477612364028",
  appId: "1:477612364028:web:ea1ff37cee8647c83e4779",
  measurementId: "G-ZKZC1CVTQS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);