import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";

// other Components Import
import Navbar from "./components/navbar/navbar";
import HomePage from "./components/pages/homepage/homePage";
import ShopPage from "./components/pages/shoppage/shopPage";
import SignInSignUpPage from "./components/pages/sign-in-sign-up-page/signInSignUpPage";
import CheckoutPage from "./components/pages/checkout-page/checkoutPage";

// action Creator Import
import { checkUserAsync } from "./redux/user/user.actions";
const App = ({ checkUserAsync, currentUser }) => {
  useEffect(() => {
    checkUserAsync();
  }, [checkUserAsync]);

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
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserAsync: () => dispatch(checkUserAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
