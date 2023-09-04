
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyA5PcEA5wlE4u7aVplEh8HoAJsA1Doc-PI",
  authDomain: "shopping-app-c4a9a.firebaseapp.com",
  projectId: "shopping-app-c4a9a",
  storageBucket: "shopping-app-c4a9a.appspot.com",
  messagingSenderId: "478053717147",
  appId: "1:478053717147:web:a3dbc16ec875dea406e23e",
  measurementId: "G-YGJ967TNYV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth();
export {app,auth}
