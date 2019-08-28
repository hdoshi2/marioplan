import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAPJsJrmpeecMwWvyF7yPF8nHgQw7WZ1Jo",
  authDomain: "net-ninja-marioplan-564f5.firebaseapp.com",
  databaseURL: "https://net-ninja-marioplan-564f5.firebaseio.com",
  projectId: "net-ninja-marioplan-564f5",
  storageBucket: "",
  messagingSenderId: "64373569770",
  appId: "1:64373569770:web:5e33c5634a69535e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.firestore()

export default firebase;
