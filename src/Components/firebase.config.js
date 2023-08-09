// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log("environmental varial", import.meta.env.VITE_apiKey)
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket:import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId
// };
const firebaseConfig = {
  apiKey: "AIzaSyDfA6ocr5baXii1F6PxsL2gbh7knQg3PRo",
  authDomain: "assignment-10-d4349.firebaseapp.com",
  projectId: "assignment-10-d4349",
  storageBucket: "assignment-10-d4349.appspot.com",
  messagingSenderId: "37690449189",
  appId: "1:37690449189:web:4869da199ec9d8d1250ecc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;