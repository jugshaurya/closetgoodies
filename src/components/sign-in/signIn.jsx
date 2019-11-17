import React, { Component } from "react";
// Firebase Import
import { auth, SignInWithGoogle } from "../../firebase/helpers.firebase";
// other component Imports
import FormInput from "../form-input/formInput";
import FormButton from "../form-button/formButton";
// Style Import
import "./signIn.styles.css";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
    error: null
  };

  handleGoogleSignIn = async e => {
    e.preventDefault();
    await SignInWithGoogle();
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handleSignIn = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: "",
        password: "",
        error: null
      });
    } catch (error) {
      console.log("error Signing in the user", error);
      this.setState({ error });
    }
  };

  render() {
    const { email, password } = this.state;
    return (
      <>
        <div className="sign-in">
          <h2>I already have an account</h2>
          <span>Sign in with your email and password</span>

          <form>
            <FormInput
              type="email"
              label="Email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
            <FormInput
              type="password"
              label="Password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />

            <span>
              {this.state.error && (
                <div className="alert alert-danger" role="alert">
                  <strong>{this.state.error.message}</strong>
                </div>
              )}
            </span>

            <div className="buttons">
              <FormButton type={"submit"} onClick={this.handleSignIn}>
                Sign In
              </FormButton>
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
