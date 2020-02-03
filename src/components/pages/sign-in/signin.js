import React, { useState } from "react";
import { connect } from "react-redux";

// action creator Import
import {
  googleSignInAsync,
  localSignInAsync
} from "../../../redux/user/user.actions";

// Style Import
import { ReactComponent as Mockuser } from "../../../assets/mockuser.svg";
import "./signin.scss";

const SignIn = props => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: ""
  });

  const { email, password } = userCredentials;
  const {
    googleSignInAsync,
    localSignInAsync,
    isSigning,
    error,
    successSigninMessage,
    isSigningGoogle
  } = props;

  const handleChange = e => {
    const { value, name } = e.target;
    setUserCredentials({
      ...userCredentials,
      [name]: value,
      error: null,
      successSigninMessage: null
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    localSignInAsync(email, password);
  };

  return (
    <div className="signin">
      <div className="container">
        <header className="heading">
          <h2>Closet Goodies</h2>
          <h4>Exclusive Wears for Men, Women, Boys and Girls</h4>
        </header>
        <div className="additional">
          <div className="left">
            <div className="profile-card">
              <Mockuser />
              <div className="text">
                Welcome{" "}
                <span role="img" aria-labelledby="emoji">
                  👋
                </span>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="head">
              <h4>Welcome to Your Account</h4>
              <p>Sign in with your email and password</p>
            </div>
            <form onSubmit={handleSubmit}>
              <span className="error">
                {error && (
                  <div className="alert alert-danger" role="alert">
                    <strong>{error}</strong>
                  </div>
                )}
              </span>
              <span className="success-message">
                {successSigninMessage && (
                  <div className="alert alert-success" role="alert">
                    <strong>{successSigninMessage}</strong>
                  </div>
                )}
              </span>

              <div className="form-group">
                <label htmlFor="email">
                  Email<span className="required">*</span>{" "}
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">
                  Password<span className="required">*</span>{" "}
                </label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  required
                />
              </div>

              {isSigning ? (
                <button className="form-button" type="button" disabled>
                  Load
                </button>
              ) : (
                <button className="form-button" type="submit">
                  Sign In
                </button>
              )}

              {isSigningGoogle ? (
                <button
                  type="button"
                  onClick={googleSignInAsync}
                  className="form-button googlebtn"
                  disabled
                >
                  Load
                </button>
              ) : (
                <button
                  type="button"
                  onClick={googleSignInAsync}
                  className="form-button googlebtn"
                >
                  Google Sign In
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  error: state.user.signinError,
  successSigninMessage: state.user.successSigninMessage,
  isSigning: state.user.isSigning,
  isSigningGoogle: state.user.isSigningGoogle
});

const mapDispatchToProps = dispatch => ({
  googleSignInAsync: () => dispatch(googleSignInAsync()),
  localSignInAsync: (email, password) =>
    dispatch(localSignInAsync(email, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
