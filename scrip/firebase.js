import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC-p1PkFVUGkBRMdO0lfYdXNmSEbO-zOKI",
  authDomain: "juegosapp-53799.firebaseapp.com",
  projectId: "juegosapp-53799",
  storageBucket: "juegosapp-53799.appspot.com",
  messagingSenderId: "134910879071",
  appId: "1:134910879071:web:c37ece11ed20162a29c2ea",
  measurementId: "G-H3Z9WFXW4H"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication with persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// Initialize Firestore
const database = getFirestore(app);

export { auth, database };
export default app;
