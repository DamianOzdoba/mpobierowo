import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCnB14TG0-tFQMgaeFYYzQ4fP-zSEn8e0s",
    authDomain: "mpobierowo-4e001.firebaseapp.com",
    projectId: "mpobierowo-4e001",
    storageBucket: "mpobierowo-4e001.appspot.com",
    messagingSenderId: "43018229989",
    appId: "1:43018229989:web:90347ba9d9d17594815c0c"
};

firebase.initializeApp(firebaseConfig);

export default firebase;