import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDhfgWkXazEZ8U_fCZBSc2uBOtzLJgdWWs",
  authDomain: "viewprice-ff025.firebaseapp.com",
  projectId: "viewprice-ff025",
  storageBucket: "viewprice-ff025.firebasestorage.app",
  messagingSenderId: "872912397471",
  appId: "1:872912397471:web:11fc2c1ceebbc54744eeaa",
  measurementId: "G-H0796ML12F",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
