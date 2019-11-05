import React from "react";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./components/pages/homepage/HomePage";
import ShopPage from "./components/shoppage/ShopPage";
import SignInSignUp from "./components/pages/sign-in-sign-up-page/signInSignUp";

import { Switch, Route } from "react-router-dom";
import { auth, addToFirestore } from "./firebase/helpers.firebase";

class App extends React.Component {
  state = {
    currentUser: null
  };

  // used to close the connection which is continously checking for our auth state change over Firebase
  unsubscribeFromGoogleAuth = null;

  componentDidMount() {
    this.unsubscribeFromGoogleAuth = auth.onAuthStateChanged(async user => {
      if (user) {
        const userDocRef = await addToFirestore(user);
        // if user data is everchanged we are going to update the user
        userDocRef.onSnapshot(snapshot => {
          const { displayName, email } = snapshot.data();
          this.setState({
            currentUser: {
              id: snapshot.id,
              displayName,
              email
            }
          });
        });
      } else {
        this.setState({ currentUser: null });
      }
    });
  }

  componentWillUnmount() {
    // Need to close the open Connection - to avoid Memory Leaks
    this.unsubscribeFromGoogleAuth();
  }

  render() {
    const { currentUser } = this.state;
    return (
      <div className="App">
        <Navbar currentUser={currentUser} />
        <Switch>
          <Route path="/signin" component={SignInSignUp} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
