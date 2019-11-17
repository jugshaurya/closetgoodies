import React, { Component } from "react";
// Firebase Import
import { auth, addToFirestore } from "../../firebase/helpers.firebase";

// other Components Import
import FormInput from "../form-input/formInput";
import FormButton from "../form-button/formButton";

// CSS Import
import "./signUp.styles.css";

class SignUp extends Component {
  state = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
    error: null
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handleSignUp = async e => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) return alert("Password Don't Match");

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await addToFirestore(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
        error: null
      });
    } catch (error) {
      console.log("error Creating a User in Sign Up", error);
      this.setState({ error });
    }
  };

  render() {
    return (
      <>
        <div className="sign-up">
          <h2>Create an Account</h2>
          <form>
            <FormInput
              type="text"
              label="Name"
              name="displayName"
              value={this.state.displayName}
              onChange={this.handleChange}
            />
            <FormInput
              type="email"
              label="Email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <FormInput
              type="password"
              label="Password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <FormInput
              type="password"
              label="Confirm Password"
              name="confirmPassword"
              value={this.state.confirmPassword}
              onChange={this.handleChange}
            />
            <span>
              {this.state.error && (
                <div className="alert alert-danger" role="alert">
                  <strong>{this.state.error.message}</strong>
                </div>
              )}
            </span>

            <FormButton type={"submit"} onClick={this.handleSignUp}>
              Sign Up
            </FormButton>
          </form>
        </div>
      </>
    );
  }
}

export default SignUp;
