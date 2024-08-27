// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2uMKXtFtI1U6aho-x0Wha6_oR-xENe5c",
  authDomain: "coffee-shop-clone-6a7e2.firebaseapp.com",
  projectId: "coffee-shop-clone-6a7e2",
  storageBucket: "coffee-shop-clone-6a7e2.appspot.com",
  messagingSenderId: "645863393561",
  appId: "1:645863393561:web:d4fb47b908bb295dad5d88",
  measurementId: "G-6VF53N3VMT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);