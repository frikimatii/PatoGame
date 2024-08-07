import firebase from "firebase";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyC-p1PkFVUGkBRMdO0lfYdXNmSEbO-zOKI",
    authDomain: "juegosapp-53799.firebaseapp.com",
    projectId: "juegosapp-53799",
    storageBucket: "juegosapp-53799.appspot.com",
    messagingSenderId: "134910879071",
    appId: "1:134910879071:web:c37ece11ed20162a29c2ea",
    measurementId: "G-H3Z9WFXW4H"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firebase()

export default {
    firebase,
    db
}