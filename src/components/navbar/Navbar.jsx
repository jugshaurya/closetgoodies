import React from "react";
import "./navbar.style.css";
import { NavLink, Link } from "react-router-dom";
import { auth } from "../../firebase/helpers.firebase";

import { connect } from "react-redux";
import CartIcon from "../cartIcon/cartIcon";

const Navbar = props => {
  const { currentUser } = props;
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
                <div
                  className="nav-item sign-out"
                  onClick={() => auth.signOut()}
                >
                  {currentUser.displayName} Sign Out
                </div>
              ) : (
                <NavLink className="nav-link" to="/signin">
                  Sign In
                </NavLink>
              )}
            </li>

            <li className="nav-item">
              <CartIcon />
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

export default connect(mapStatetoProps)(Navbar);
