import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9fsS1fOi5RqJYfoAAXh-u7gXOluxMH9A",
  authDomain: "clone-953d9.firebaseapp.com",
  projectId: "clone-953d9",
  storageBucket: "clone-953d9.appspot.com",
  databaseURL: "https://clone-953d9-default-rtdb.firebaseio.com/",
  messagingSenderId: "798157488545",
  appId: "1:798157488545:web:fd61fc01562903746fcbe0",
  measurementId: "G-NB0K2EX4DN"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};