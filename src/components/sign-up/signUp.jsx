import React, { Component } from "react";
import { connect } from "react-redux";
// action creator Import
import { createUserAsync } from "../../redux/user/user.actions";

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
    confirmPassword: ""
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { createUserAsync, successCreationMessage, error } = this.props;
    const { displayName, email, password, confirmPassword } = this.state;
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
              {error && (
                <div className="alert alert-danger" role="alert">
                  <strong>{error}</strong>
                </div>
              )}
            </span>
            <span>
              {successCreationMessage && (
                <div className="alert alert-success" role="alert">
                  <strong>{successCreationMessage}</strong>
                </div>
              )}
            </span>
            <FormButton
              type={"button"}
              onClick={() =>
                createUserAsync(displayName, email, password, confirmPassword)
              }
            >
              Sign Up
            </FormButton>
          </form>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  error: state.user.signUpError,
  successCreationMessage: state.user.successCreationMessage
});

const mapDispatchToProps = dispatch => ({
  createUserAsync: (displayName, email, password, confirmPassword) =>
    dispatch(createUserAsync(displayName, email, password, confirmPassword))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
