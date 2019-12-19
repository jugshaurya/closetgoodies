import React, { useState } from "react";
import { connect } from "react-redux";

// other component Imports
import FormInput from "../form-input/formInput";
import FormButton from "../form-button/formButton";

// action creator Import
import {
  googleSignInAsync,
  localSignInAsync
} from "../../redux/user/user.actions";

// Style Import
import "./signIn.styles.css";

const SignIn = props => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: ""
  });

  const { email, password } = userCredentials;
  const { googleSignInAsync, localSignInAsync, error } = props;

  const handleChange = e => {
    const { value, name } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

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
            onChange={handleChange}
          />
          <FormInput
            type="password"
            label="Password"
            name="password"
            value={password}
            onChange={handleChange}
          />

          <span>
            {error && (
              <div className="alert alert-danger" role="alert">
                <strong>{error}</strong>
              </div>
            )}
          </span>

          <div className="buttons">
            <FormButton
              type={"button"}
              onClick={() => localSignInAsync(email, password)}
            >
              Sign In
            </FormButton>
            <FormButton
              type={"button"}
              onClick={googleSignInAsync}
              googleButton
            >
              Google Sign In
            </FormButton>
          </div>
        </form>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  error: state.user.signInError
});

const mapDispatchToProps = dispatch => ({
  googleSignInAsync: () => dispatch(googleSignInAsync()),
  localSignInAsync: (email, password) =>
    dispatch(localSignInAsync(email, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
