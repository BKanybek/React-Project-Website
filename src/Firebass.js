// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDI6DkiPejBS2YUvtusw5CXOdAGEe8Myow",
  authDomain: "hackathon-rolexonline-store-js.firebaseapp.com",
  projectId: "hackathon-rolexonline-store-js",
  storageBucket: "hackathon-rolexonline-store-js.appspot.com",
  messagingSenderId: "1023073153257",
  appId: "1:1023073153257:web:e30ae9a02f9d555e264078"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)