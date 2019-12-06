import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { connect } from "react-redux";
// Action Creator Import
import { setCurrentUser } from "./redux/user/user.actions";

//  Firebase Import
import { auth, addToFirestore } from "./firebase/helpers.firebase";

// other Components Import
import Navbar from "./components/navbar/navbar";
import HomePage from "./components/pages/homepage/homePage";
import ShopPage from "./components/pages/shoppage/shopPage";
import SignInSignUpPage from "./components/pages/sign-in-sign-up-page/signInSignUpPage";
import CheckoutPage from "./components/pages/checkout-page/checkoutPage";

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
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path="/signin">
            {currentUser ? <Redirect to="/" /> : <SignInSignUpPage />}
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
  currentUser: state.user.currentUser,
  products: state.data.products
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
