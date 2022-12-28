// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBB2brJLAZVgRzgKTHmib6WYVoeR1aHqDs",
  authDomain: "task-manager-e92eb.firebaseapp.com",
  projectId: "task-manager-e92eb",
  storageBucket: "task-manager-e92eb.appspot.com",
  messagingSenderId: "379325482459",
  appId: "1:379325482459:web:8f28726ce75fa3a54c53fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app