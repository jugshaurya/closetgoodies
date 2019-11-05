import React, { Component } from "react";

import SignIn from "./signIn";
import SignUp from "./signUp";

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
