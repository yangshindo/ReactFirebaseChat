import firebase from "firebase/app"
import "firebase/auth"

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyBsXRA9Xp-_TNrEyNMWPcUL0k6W04U1hF8",
  authDomain: "unichat-e27c8.firebaseapp.com",
  projectId: "unichat-e27c8",
  storageBucket: "unichat-e27c8.appspot.com",
  messagingSenderId: "116585680599",
  appId: "1:116585680599:web:01ef941969d0ecf9a1ea92"
}).auth()
