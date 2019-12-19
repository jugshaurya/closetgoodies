import React, { useState } from "react";
import { connect } from "react-redux";
// action creator Import
import { createUserAsync } from "../../redux/user/user.actions";

// other Components Import
import FormInput from "../form-input/formInput";
import FormButton from "../form-button/formButton";

// CSS Import
import "./signUp.styles.css";

const SignUp = ({ createUserAsync, successCreationMessage, error }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleChange = e => {
    const { value, name } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <>
      <div className="sign-up">
        <h2>Create an Account</h2>
        <form>
          <FormInput
            type="text"
            label="Name"
            name="displayName"
            value={displayName}
            onChange={handleChange}
          />
          <FormInput
            type="email"
            label="Email"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <FormInput
            type="password"
            label="Password"
            name="password"
            value={password}
            onChange={handleChange}
          />
          <FormInput
            type="password"
            label="Confirm Password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
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
};

const mapStateToProps = state => ({
  error: state.user.signUpError,
  successCreationMessage: state.user.successCreationMessage
});

const mapDispatchToProps = dispatch => ({
  createUserAsync: (displayName, email, password, confirmPassword) =>
    dispatch(createUserAsync(displayName, email, password, confirmPassword))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
