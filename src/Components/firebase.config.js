// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqaZTN9WSFLqIcsFTKZIR1RgBkWWHChvw",
  authDomain: "assignmenttenpractice.firebaseapp.com",
  projectId: "assignmenttenpractice",
  storageBucket: "assignmenttenpractice.appspot.com",
  messagingSenderId: "1095482626564",
  appId: "1:1095482626564:web:94ecf188207f50061a9b51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;