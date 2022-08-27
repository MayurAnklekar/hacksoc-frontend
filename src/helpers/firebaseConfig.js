// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMZb1VLUpJcIw94f5AjnoCOMX7vz3pW1c",
  authDomain: "hacksoc-1.firebaseapp.com",
  projectId: "hacksoc-1",
  storageBucket: "hacksoc-1.appspot.com",
  messagingSenderId: "545219740592",
  appId: "1:545219740592:web:6dc57b851a593b5ac68c75"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();


export default auth;