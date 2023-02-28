// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5NulY02NaTOlIkYBfoww6NqksaxnX-YE",
  authDomain: "gamer-freak.firebaseapp.com",
  projectId: "gamer-freak",
  storageBucket: "gamer-freak.appspot.com",
  messagingSenderId: "683449690775",
  appId: "1:683449690775:web:ba9ea38040617924a3d7d2",
  measurementId: "G-EH2R2XFSWB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const db=app.firestore()
const analytics = getAnalytics(app);
