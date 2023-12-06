import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDbDRfaaxx9MISrYtLEzIMSFEWM2D3J3Mc",
  authDomain: "coder-60995-113dd.firebaseapp.com",
  projectId: "coder-60995-113dd",
  storageBucket: "coder-60995-113dd.appspot.com",
  messagingSenderId: "287797107473",
  appId: "1:287797107473:web:8396556bb6dcb73e5a0ab0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Exportamos nuestra base de datos a toda la app
export const db = getFirestore(app);