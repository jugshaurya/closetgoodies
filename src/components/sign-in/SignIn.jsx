import React, { Component } from "react";

import { SignInWithGoogle } from "../../firebase/helpers.firebase";
class SignIn extends Component {
  // state = {
  //   email: "",
  //   password: ""
  // };

  handleGoogleSignIn = async e => {
    e.preventDefault();
    await SignInWithGoogle();
  };

  render() {
    return (
      <>
        <div className="container">
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                autoComplete="email"
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                autoComplete="password"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Sign In
            </button>

            <button
              className="btn btn-primary"
              onClick={this.handleGoogleSignIn}
            >
              Google Sign In
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default SignIn;
