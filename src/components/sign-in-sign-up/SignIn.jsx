import React, { Component } from "react";

import { SignInWithGoogle } from "../../firebase/helpers.firebase";
import FormInput from "./formInput";
import FormButton from "./formButton";
import "./signin.style.css";
class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleGoogleSignIn = async e => {
    e.preventDefault();
    await SignInWithGoogle();
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <>
        <div className="sign-in">
          <h2>I already have an account</h2>
          <span>Sign in with your email and password</span>
          <form>
            <FormInput
              type={"email"}
              label={"Email"}
              value={"email"}
              onChange={this.handleChange}
            />
            <FormInput
              type={"password"}
              label={"Password"}
              value={"password"}
              onChange={this.handleChange}
            />

            <div className="buttons">
              <FormButton type={"submit"}>Sign In</FormButton>
              <FormButton
                type={"button"}
                onClick={this.handleGoogleSignIn}
                googleButton
              >
                Google Sign In
              </FormButton>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default SignIn;
