// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2_vi8YVJowkYwTUVRL392MRj3CJCfoTE",
  authDomain: "lendit-265ab.firebaseapp.com",
  projectId: "lendit-265ab",
  storageBucket: "lendit-265ab.appspot.com",
  messagingSenderId: "931760947547",
  appId: "1:931760947547:web:45ca9f1d8a8ce1360b1a7e",
  measurementId: "G-70LWDLPWF2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
const firestore = getFirestore(app);

export { auth, firestore }; // Export auth and firestore for use in other files