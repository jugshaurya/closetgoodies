import React from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";

// action creator import
import { signoutUserAsync } from "../../redux/user/user.actions";
// other Component Import
import Cart from "../cart/cart";
// Style Import
import "./navbar.styles.css";

const Navbar = props => {
  const { currentUser, signoutUserAsync } = props;

  return (
    <>
      <nav className="navbar navbar-expand navbar-light bg-light">
        <Link className="navbar-brand left " to="/">
          <img src="./icon.png" width="30" height="30" alt="Logo" />
          Cloth-Zone
        </Link>
        <div className="collapse navbar-collapse right" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/shop">
                Shop
              </NavLink>
            </li>

            <li className="nav-item">
              {currentUser ? (
                <div className="nav-item sign-out" onClick={signoutUserAsync}>
                  {currentUser.displayName} Sign Out
                </div>
              ) : (
                <NavLink className="nav-link" to="/signin">
                  Sign In
                </NavLink>
              )}
            </li>

            <li className="nav-item">
              <Cart />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

const mapStatetoProps = state => ({
  currentUser: state.user.currentUser
});

const mapDispatchToProps = dispatch => ({
  signoutUserAsync: () => dispatch(signoutUserAsync())
});

export default connect(mapStatetoProps, mapDispatchToProps)(Navbar);
