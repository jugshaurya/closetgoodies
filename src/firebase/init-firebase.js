// This import loads the firebase namespace.
import firebase from "firebase/app";

// Firebase configuration
const firebaseConfig = {
  apiKey: "blah blah blah",
  authDomain: "blah",
  databaseURL: "https://blah.firebaseio.com",
  projectId: "ng-blah-app",
  storageBucket: "ng-blah-app.appspot.com",
  messagingSenderId: "numbers blah"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase; // in case we need something more!
