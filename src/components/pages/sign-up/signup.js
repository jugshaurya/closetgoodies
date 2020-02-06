import React, { useState } from "react";
import { connect } from "react-redux";

// action creator Import
import { createUserAsync } from "../../../redux/user/user.actions";

// CSS Import
import { ReactComponent as Mockuser } from "../../../assets/mockuser.svg";
import { ReactComponent as Spinner } from "../../../assets/spinner.svg";

import "./signup.scss";

const SignUp = ({
  createUserAsync,
  successSignupMessage,
  error,
  isSignuping
}) => {
  const [userCredentials, setUserCredentials] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const { username, email, password, confirmPassword } = userCredentials;

  const handleChange = e => {
    const { value, name } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
    error = null;
    successSignupMessage = null;
  };

  const handleSubmit = e => {
    e.preventDefault();
    createUserAsync(username, email, password, confirmPassword);
  };

  return (
    <>
      <div className="signup">
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
                  Hello New User{" "}
                  <span role="img" aria-labelledby="emoji">
                    👋
                  </span>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="head">
                <h4>Create Account</h4>
                <p>Welcome to Closet Goodies. Hello You?</p>
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
                  {successSignupMessage && (
                    <div className="alert alert-success" role="alert">
                      <strong>{successSignupMessage}</strong>
                    </div>
                  )}
                </span>
                <div className="form-group">
                  <label htmlFor="username">
                    Name<span className="required">*</span>{" "}
                  </label>
                  <input
                    id="username"
                    type="text"
                    name="username"
                    value={username}
                    onChange={handleChange}
                    required
                  />
                </div>

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

                <div className="form-group">
                  <label htmlFor="confirmPassword">
                    Confirm Password<span className="required">*</span>{" "}
                  </label>
                  <input
                    id="confirmPassword"
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>

                {isSignuping ? (
                  <button className="form-button" type="button" disabled>
                    <Spinner />
                  </button>
                ) : (
                  <button className="form-button" type="submit">
                    Sign Up
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  error: state.user.signupError,
  successSignupMessage: state.user.successSignupMessage,
  isSignuping: state.user.isSignuping
});

const mapDispatchToProps = dispatch => ({
  createUserAsync: (username, email, password, confirmPassword) =>
    dispatch(createUserAsync(username, email, password, confirmPassword))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
