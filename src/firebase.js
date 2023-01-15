import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCjFEUJgT9iGncHIvoeCll5DUnLmrl4sTk",
  authDomain: "deblees.firebaseapp.com",
  projectId: "deblees",
  storageBucket: "deblees.appspot.com",
  messagingSenderId: "309945849585",
  appId: "1:309945849585:web:18b2144c5d2406c4b1bb50",
  measurementId: "G-FJXD0JDMTZ"  
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
