import React, { Component } from "react";

import SignIn from "../../sign-in/signIn";
import SignUp from "../../sign-up/signUp";

import "./signInSignUp.style.css";

class SignInSignUp extends Component {
  render() {
    return (
      <div className="sign-in-sign-up">
        <SignIn />
        <SignUp />
      </div>
    );
  }
}

export default SignInSignUp;
