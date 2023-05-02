// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCg7r9Zmw-4AqwA8Lnns6Dr-vqWtScTROI",
  authDomain: "the-thai-master-client.firebaseapp.com",
  projectId: "the-thai-master-client",
  storageBucket: "the-thai-master-client.appspot.com",
  messagingSenderId: "416196916862",
  appId: "1:416196916862:web:9ec18cd2d5b7b62efd8a2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;