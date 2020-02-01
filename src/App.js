import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

// other Components Import
import Navbar from "./components/navbar/navbar";
import HomePage from "./components/pages/homepage/homepage";
import Shoppage from "./components/pages/shoppage/shoppage";
import Signin from "./components/pages/sign-in/signin";
import Signup from "./components/pages/sign-up/signup";
// import CheckoutPage from "./components/pages/checkout-page/checkoutPage";
import Footer from "./components/footer/footer";

// action Creator Import
import { checkUserAsync } from "./redux/user/user.actions";
const App = ({ checkUserAsync, currentUser }) => {
  useEffect(() => {
    checkUserAsync();
  }, [checkUserAsync]);

  return (
    <div className="App">
      <Navbar user={currentUser} />
      <Switch>
        {/* <Route exact path="/checkout" component={CheckoutPage} />*/}
        <Route exact path="/signin">
          {currentUser ? <Redirect to="/" /> : <Signin />}
        </Route>
        <Route exact path="/signup">
          {currentUser ? <Redirect to="/" /> : <Signup />}
        </Route>
        <Route path="/shop" component={Shoppage} />
        <Route path="/" component={HomePage} />
      </Switch>
      <Footer />
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
