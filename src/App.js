import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
// other Components Import
import Navbar from "./components/navbar/navbar";
import HomePage from "./components/pages/homepage/homepage";
import Shoppage from "./components/pages/shoppage/shoppage";
import Signin from "./components/pages/sign-in/signin";
import Signup from "./components/pages/sign-up/signup";
import Checkout from "./components/pages/checkoutpage/checkout";
import Profile from "./components/pages/profile/profile";
import Footer from "./components/footer/footer";
import Errorboundary from "./components/ErrorBoundary";

// action Creator Import
import { checkUserAsync } from "./redux/user/user.actions";
import { setCartItemsFromLocalStorage } from "./redux/cart/cart.actions";
const App = ({ checkUserAsync, currentUser, setCartItemsFromLocalStorage }) => {
  useEffect(() => {
    checkUserAsync();

    if (!localStorage.getItem("cartItems")) {
      localStorage.setItem("cartItems", JSON.stringify([]));
    }

    setCartItemsFromLocalStorage();
  }, [checkUserAsync, setCartItemsFromLocalStorage]);

  const throwError = () => {
    if (true) {
      throw new Error("404 - Page Not Found");
    }
  };
  return (
    <div className="App">
      <Navbar user={currentUser} />
      <Errorboundary user={currentUser}>
        <Switch>
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/signin">
            {currentUser ? <Redirect to="/" /> : <Signin />}
          </Route>
          <Route exact path="/signup">
            {currentUser ? <Redirect to="/" /> : <Signup />}
          </Route>
          <Route exact path="/profile">
            {!currentUser ? <Redirect to="/" /> : <Profile />}
          </Route>

          <Route path="/shop" component={Shoppage} />
          <Route path="/faq" component={HomePage} />
          <Route path="/contact" component={HomePage} />
          <Route exact path="/" component={HomePage} />
          <Route path="/" render={throwError} />
        </Switch>
      </Errorboundary>
      <Footer />
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserAsync: () => dispatch(checkUserAsync()),
  setCartItemsFromLocalStorage: () => dispatch(setCartItemsFromLocalStorage())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
