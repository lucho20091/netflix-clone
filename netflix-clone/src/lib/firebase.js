import Firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDfDBy8FUdAzMhtRARHPyA0ITfy5MxDnzU",
    authDomain: "netflix-clone-f66c4.firebaseapp.com",
    projectId: "netflix-clone-f66c4",
    storageBucket: "netflix-clone-f66c4.firebasestorage.app",
    messagingSenderId: "436191618515",
    appId: "1:436191618515:web:3f4f3fc69d872a55a53b26"
  };
  

const firebase = Firebase.initializeApp(firebaseConfig)

export { firebase }