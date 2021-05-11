import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
apiKey: "AIzaSyAOOVzJoBT1jrj4M4IBO2vZ-8444Ho4i0k",
  authDomain: "mini-e2c43.firebaseapp.com",
  projectId: "mini-e2c43",
  storageBucket: "mini-e2c43.appspot.com",
  messagingSenderId: "291131078949",
  appId: "1:291131078949:web:21a971acf4ece528db02cc",
  measurementId: "G-3B8Y8Q5N6B"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
