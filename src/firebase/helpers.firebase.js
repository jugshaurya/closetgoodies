// This import loads the firebase namespace.
import firebase from "firebase/app";
// These imports load individual services into the firebase namespace.
import "firebase/auth";
import "firebase/firestore";
import "firebase/analytics";

// 1. Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZG7qB9bySnO81pCzY1NF5sXIM-2pdaTo",
  authDomain: "closet-goodies.firebaseapp.com",
  databaseURL: "https://closet-goodies.firebaseio.com",
  projectId: "closet-goodies",
  storageBucket: "closet-goodies.appspot.com",
  messagingSenderId: "776213849902",
  appId: "1:776213849902:web:8916fb6893350fada63cbf",
  measurementId: "G-YV2CCDR733"
};

// 2. Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Firebase Auth
// =============

export const auth = firebase.auth();
// prompt your users to sign in with their Google Accounts either by opening a pop-up window or by redirecting to the sign-in page.
const google_provider = new firebase.auth.GoogleAuthProvider();
// google_provider.setCustomParameters({ prompt: "select_account" });
export const SignInWithGoogle = () => auth.signInWithPopup(google_provider);

// Firebase Firestore
// ==================
export const firestore = firebase.firestore();

// Saving To Firestore Auth data/ Email-Password Data
export const addToFirestore = async (user, additionalData) => {
  if (!user) return;

  const userDocRef = await firestore.doc(`users/${user.uid}`);
  const userDocSnapshot = await userDocRef.get();

  if (userDocSnapshot.exists) return userDocRef;

  try {
    await userDocRef.set({
      displayName: user.displayName,
      email: user.email,
      createdAt: new Date(),
      ...additionalData
    });
  } catch (err) {
    console.log("Error Creating a User", err.message);
  }

  return userDocRef;
};

// Helper function to add bunch of data in firestore
// =================================================
// @collectionName - table to which data is required to insert
// @collectionData - data to add.

export const addShopDataToFirestore = async (
  collectionName,
  collectionData
) => {
  const collectionRef = firestore.collection(collectionName);
  const newDocRef = collectionRef.doc();
  console.log("Pending...");
  await newDocRef.set(collectionData);
  console.log("DONE!!!");
};

// in case we need something more
export default firebase;
