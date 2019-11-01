import firebase from "./init-firebase";

// These imports load individual services into the firebase namespace.
import "firebase/auth";

const auth = firebase.auth();

// prompt your users to sign in with their Google Accounts either by opening a pop-up window or by redirecting to the sign-in page.
const google_provider = new firebase.auth.GoogleAuthProvider();
google_provider.setCustomParameters({ prompt: "select_account" });
export const SignInWithGoogle = () => auth.signInWithPopup(google_provider);

export default auth;
