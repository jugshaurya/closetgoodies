import React from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";

// action creator import
import { signoutUserAsync } from "../../redux/user/user.actions";
// other Component Import
import Cart from "../cart/cart";
// Style Import
import "./navbar.styles.css";
import { ReactComponent as SearchSVG } from "./search.svg";

const Navbar = props => {
  const { currentUser, signoutUserAsync } = props;
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/">
            <span>Cloth</span>
            <span>Zone</span>
          </Link>
        </div>

        <div className="navbar-middle">
          <div className="navbar-middle-top">
            <form>
              <div className="input1">
                <span> Find </span>
                <input type="text" />
              </div>
              <div className="input2">
                <span> For </span>
                <input type="text" />
              </div>
              <button type="button">
                <SearchSVG />
              </button>
            </form>
          </div>

          <div className="navbar-middle-bottom">
            <div className="left">
              <Link className="nav-link" to="#">
                Men
              </Link>
              <Link className="nav-link" to="#">
                Women
              </Link>
              <Link className="nav-link" to="#">
                Boys
              </Link>
              <Link className="nav-link" to="#">
                Girls
              </Link>
            </div>
            <div className="right">
              <Link className="nav-link" to="#">
                Home
              </Link>
              <Link className="nav-link" to="#">
                Contacts
              </Link>
              <Link className="nav-link" to="#">
                Cart
              </Link>
              <Link className="nav-link" to="#">
                Submit Review
              </Link>
              <Link className="nav-link" to="#">
                Give Stars
              </Link>
            </div>
          </div>
        </div>

        <div className="navbar-right">
          <button type="button" className="sign-up-btn">
            SignUp
          </button>
          <Link>Log In</Link>
        </div>
      </div>

      {/* <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/shop">Shop</NavLink>
        </li>

        <li>
          {currentUser ? (
            <div onClick={signoutUserAsync}>
              {currentUser.displayName} Sign Out
            </div>
          ) : (
            <NavLink to="/signin">Sign In</NavLink>
          )}
        </li>

        <li c>
          <Cart />
        </li>
      </ul> */}
    </nav>
  );
};

const mapStatetoProps = state => ({
  currentUser: state.user.currentUser
});

const mapDispatchToProps = dispatch => ({
  signoutUserAsync: () => dispatch(signoutUserAsync())
});

export default connect(mapStatetoProps, mapDispatchToProps)(Navbar);
