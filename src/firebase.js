import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB5NulY02NaTOlIkYBfoww6NqksaxnX-YE",
  authDomain: "gamer-freak.firebaseapp.com",
  projectId: "gamer-freak",
  storageBucket: "gamer-freak.appspot.com",
  messagingSenderId: "683449690775",
  appId: "1:683449690775:web:ba9ea38040617924a3d7d2",
  measurementId: "G-EH2R2XFSWB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebaseApp.firestore();

export { auth, db };
