import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5faE8aN7oBsSkMCNvw_xDZZpwW0XXxeo",
  authDomain: "react-emart-a5ddd.firebaseapp.com",
  projectId: "react-emart-a5ddd",
  storageBucket: "react-emart-a5ddd.appspot.com",
  messagingSenderId: "1042075282848",
  appId: "1:1042075282848:web:52bdc02a47e6a1dce1c8c5",
};

// Use this to initialize the firebase App
const firebaseapp = firebase.initializeApp(firebaseConfig);

// Use for db
const db = firebaseapp.firestore();
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();

export { db, auth, googleProvider, facebookProvider };
