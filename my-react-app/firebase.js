// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjrPk-AWBVj45M9zCMfCGdKIxcxDBnBGU",
  authDomain: "mudar-para-portugal.firebaseapp.com",
  projectId: "mudar-para-portugal",
  storageBucket: "mudar-para-portugal.appspot.com",
  messagingSenderId: "442612081698",
  appId: "1:442612081698:web:63cb0dbf6ebca3328c167b",
  measurementId: "G-1SHVGRQSZR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const analytics = getAnalytics(app);

export { firestore };
