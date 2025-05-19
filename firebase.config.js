// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJCx47Xb1zQleYUc8wetyDOGl2bviXync",
  authDomain: "coffee-shop-ath.firebaseapp.com",
  projectId: "coffee-shop-ath",
  storageBucket: "coffee-shop-ath.firebasestorage.app",
  messagingSenderId: "359720729868",
  appId: "1:359720729868:web:c2440adbae7cc3bdfc1d29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);