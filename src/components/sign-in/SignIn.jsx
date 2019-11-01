import React, { Component } from "react";

import { SignInWithGoogle } from "../../firebase/auth-firebase";
class SignIn extends Component {
  // state = {
  //   email: "",
  //   password: ""
  // };

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
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Sign In
            </button>

            <button className="btn btn-primary" onClick={SignInWithGoogle}>
              Google Sign In
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default SignIn;
