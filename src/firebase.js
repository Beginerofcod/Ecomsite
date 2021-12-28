// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore/lite";
// import { getAuth } from "firebase/auth";
// import * as firebase from "firebase/app";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBeVAlEvpiD4giYrPXMF8g4hJY17L7AVQg",
  authDomain: "e-com-f5a07.firebaseapp.com",
  projectId: "e-com-f5a07",
  storageBucket: "e-com-f5a07.appspot.com",
  messagingSenderId: "883267718698",
  appId: "1:883267718698:web:10f61a3bde187c28e77d53",
  measurementId: "G-F1TR2Q9L18",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
// const firebaseApp = initializeApp(firebaseConfig);
// const db = getFirestore(firebaseApp);
// const auth = firebase.auth(firebaseApp);
export { db, auth };
