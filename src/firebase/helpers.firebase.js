// This import loads the firebase namespace.
import firebase from "firebase/app";
// These imports load individual services into the firebase namespace.
import "firebase/auth";
import "firebase/firestore";

// 1. Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCu-7QWKv79M8LwbHXdku1HrO0ODhlQcOY",
  authDomain: "cloth-zone-26a02.firebaseapp.com",
  databaseURL: "https://cloth-zone-26a02.firebaseio.com",
  projectId: "cloth-zone-26a02",
  storageBucket: "cloth-zone-26a02.appspot.com",
  messagingSenderId: "320136478705",
  appId: "1:320136478705:web:494415afd4e5fbe77a8e50",
  measurementId: "G-62ZET2QFTB"
};

// 2. Initialize Firebase
firebase.initializeApp(firebaseConfig);

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
// @collectionName - table to which data is required to insert
// @collectionData - data to add , type : array of objects

export const addShopDataToFirestore = async (
  collectionName,
  collectionData
) => {
  const collectionRef = firestore.collection(collectionName);
  const batch = firestore.batch();
  collectionData.forEach(obj => {
    const newDocRef = collectionRef.doc(); // will generate a unique id
    batch.set(newDocRef, obj);
  });

  // fireoff-batch to add data to Firestore
  console.log("Pending...");
  await batch.commit();
  console.log("DONE!!!");
};

// in case we need something more
export default firebase;
