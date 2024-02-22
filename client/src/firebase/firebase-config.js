import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBydOYprCNjrTkD3jUJIald5IsC1sj7mvk",
  authDomain: "studious-computing-machine.firebaseapp.com",
  projectId: "studious-computing-machine",
  storageBucket: "studious-computing-machine.appspot.com",
  messagingSenderId: "1092249011835",
  appId: "1:1092249011835:web:72f4a1d1c28192bbe804de",
  measurementId: "G-TNC2T22TNL",
};

const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
