// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtY0Fsu1GxqiJHHCYYdQyRKJL6sAbhKqA",
  authDomain: "localmeets-e2c87.firebaseapp.com",
  projectId: "localmeets-e2c87",
  storageBucket: "localmeets-e2c87.appspot.com",
  messagingSenderId: "891356065694",
  appId: "1:891356065694:web:c5b9cd0c55966340f2708f",
  measurementId: "G-GHYGP1F67L",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
