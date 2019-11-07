import React from "react";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./components/pages/homepage/HomePage";
import ShopPage from "./components/pages/shoppage/ShopPage";
import SignInSignUp from "./components/pages/sign-in-sign-up-page/signInSignUp";

import { Switch, Route, Redirect } from "react-router-dom";
import { auth, addToFirestore } from "./firebase/helpers.firebase";

import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user.action";

class App extends React.Component {
  // used to close the connection which is continously checking for our auth state change over Firebase
  unsubscribeFromGoogleAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromGoogleAuth = auth.onAuthStateChanged(async user => {
      if (user) {
        const userDocRef = await addToFirestore(user);
        // if user data is everchanged we are going to update the user
        userDocRef.onSnapshot(snapshot => {
          const { displayName, email } = snapshot.data();
          setCurrentUser({
            id: snapshot.id,
            displayName,
            email
          });
        });
      } else {
        setCurrentUser(null);
      }
    });
  }

  componentWillUnmount() {
    // Need to close the open Connection - to avoid Memory Leaks
    this.unsubscribeFromGoogleAuth();
  }

  render() {
    const { currentUser } = this.props;
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/signin">
            {currentUser ? <Redirect to="/" /> : <SignInSignUp />}
          </Route>
          <Route path="/shop" component={ShopPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
