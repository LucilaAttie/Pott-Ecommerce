import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// "AIzaSyAwjX8DqhJ3Zbq2EP1OcAKUWgYPUL1omx0"
// import.meta.env.VITE_FIREBASE_API_KEY

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: "pott-ecommerce.firebaseapp.com",
  projectId: "pott-ecommerce",
  storageBucket: "pott-ecommerce.appspot.com",
  messagingSenderId: "1023846217218",
  appId: "1:1023846217218:web:404dbead682e66ae92191b"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);