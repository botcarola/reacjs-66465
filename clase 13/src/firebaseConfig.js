// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBA41vy09OoqKSuX7mesP1QlcIyieeLAD4",
  authDomain: "ecommerce-ch-da019.firebaseapp.com",
  projectId: "ecommerce-ch-da019",
  storageBucket: "ecommerce-ch-da019.appspot.com",
  messagingSenderId: "331505375068",
  appId: "1:331505375068:web:183aae42ac4baadf765399"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// TODO LO QUE VA DE ACÁ HACIA ARRIBA, LO PROVEE EL SERVICIO DE CLOUD FIRESTRORE


// ESTO LO HAGO YO
export const db = getFirestore(app)