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

  return (
    <div className="App">
      <Errorboundary>
        <Navbar user={currentUser} />
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
          <Route path="/" component={HomePage} />
        </Switch>
        <Footer />
      </Errorboundary>
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
