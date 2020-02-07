import React from "react";
import { connect } from "react-redux";

// Style Import
import "./profile.scss";

const Profile = ({ currentUser }) => {
  return (
    <div className="profile">
      <div className="container">
        <header className="heading">
          <h2>Closet Goodies</h2>
          <h4>Exclusive Wears for Men, Women, Boys and Girls</h4>
        </header>
        <div className="additional">
          <div className="left">
            <div className="profile-card">
              <img src={currentUser.imageURL} alt="user" />
              <div className="text">
                Welcome{" "}
                <span className="username">{currentUser.displayName}</span>
                <span role="img" aria-labelledby="emoji">
                  👋
                </span>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="head">
              <h4>Welcome to Your Account</h4>
              <p>{currentUser.displayName}</p>
            </div>
            <form onSubmit={e => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="email">
                  Email<span className="required">*</span>{" "}
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={currentUser.email}
                  disabled
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Profile);
