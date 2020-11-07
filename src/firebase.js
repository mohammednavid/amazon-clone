import firebase from "firebase"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnstICGVpkF6KBDsEGeL_JJSfs-ROU28c",
  authDomain: "clone-72f09.firebaseapp.com",
  databaseURL: "https://clone-72f09.firebaseio.com",
  projectId: "clone-72f09",
  storageBucket: "clone-72f09.appspot.com",
  messagingSenderId: "379010517404",
  appId: "1:379010517404:web:e7f74d2413ebe37339a059",
  measurementId: "G-LY9HR58BV7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };