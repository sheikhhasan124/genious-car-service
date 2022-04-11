// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDYbLMqZzV1P4K-NDphdZhAB1qy2m8iLs",
  authDomain: "genious-car-service-1d2c5.firebaseapp.com",
  projectId: "genious-car-service-1d2c5",
  storageBucket: "genious-car-service-1d2c5.appspot.com",
  messagingSenderId: "43707931254",
  appId: "1:43707931254:web:d7a375b262dbe774971d57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;