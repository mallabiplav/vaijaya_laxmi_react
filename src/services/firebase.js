import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBBjnTIBxWKLkfpI1oCTJ5ig_ixHbK72nM",
  authDomain: "vijaya-laxmi.firebaseapp.com",
  projectId: "vijaya-laxmi",
  storageBucket: "vijaya-laxmi.appspot.com",
  messagingSenderId: "183370109430",
  appId: "1:183370109430:web:643b246c8ea5a372aff7d7",
  measurementId: "G-516SZRR5VK",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.database();
