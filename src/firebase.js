import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBZbdLNCCQZTciJkKKl7hkqH55Qwq6GLWQ",
  authDomain: "linkedin-clone-adi-b06fe.firebaseapp.com",
  projectId: "linkedin-clone-adi-b06fe",
  storageBucket: "linkedin-clone-adi-b06fe.appspot.com",
  messagingSenderId: "991186447996",
  appId: "1:991186447996:web:576db560a89106654f63f9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
