import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyB4-4HItmCeVAhZJXAtuysPSQPWFLSWuro",
    authDomain: "mpobierowo-27c98.firebaseapp.com",
    projectId: "mpobierowo-27c98",
    storageBucket: "mpobierowo-27c98.appspot.com",
    messagingSenderId: "152638670275",
    appId: "1:152638670275:web:1dc05f3aea7b67a903e976"
};

firebase.initializeApp(firebaseConfig);

export default firebase;