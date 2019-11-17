import React, { Component } from "react";

// other Component Import
import SignIn from "../../sign-in/signIn";
import SignUp from "../../sign-up/signUp";

// style Import
import "./signInSignUpPage.styles.css";

class SignInSignUpPage extends Component {
  render() {
    return (
      <div className="sign-in-sign-up">
        <SignIn />
        <SignUp />
      </div>
    );
  }
}

export default SignInSignUpPage;
