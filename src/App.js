import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./components/homepage/HomePage";
import ShopPage from "./components/shoppage/ShopPage";
import SignIn from "./components/sign-in/SignIn";

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
        console.log(userDocRef);
        // if user data is everchanged we are going to update the user
        userDocRef.onSnapshot(snapshot => {
          const { name, email } = snapshot.data();
          this.setState({
            currentUser: {
              id: snapshot.id,
              name,
              email
            }
          });
        });
      } else {
        //sklh
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
          <Route path="/signin" component={SignIn} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
