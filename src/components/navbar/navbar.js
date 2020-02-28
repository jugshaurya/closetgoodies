import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CollapsedNavbar from "./CollapsedNavbar";
// action creator import
import { signoutUserAsync } from "../../redux/user/user.actions";

// other Component Import
import Cart from "../cart/cart.js";

// Style/SVG Import
import "./navbar.scss";
import { ReactComponent as MockUser } from "../../assets/mockuser.svg";

const UserProfile = ({ user, signoutUserAsync, history }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="userProfile" onClick={() => history.push("/profile")}>
      <div className="username" onClick={() => setShow(!show)}>
        {user.displayName} <span>&#9663;</span>
      </div>
      <div
        className="dropdown"
        onClick={signoutUserAsync}
        style={{ display: show ? "block" : "none" }}
      >
        Signout
      </div>
    </div>
  );
};

const Navbar = props => {
  const { currentUser, signoutUserAsync, location, history } = props;
  const [activeLink, setActiveLink] = useState(`${location.pathname}`);
  const [collapsedProps, setCollapsedProps] = useState({
    isCollapsedNavOpen: false,
    height: 0
  });

  const handleActiveLink = item => {
    setActiveLink(item);
  };

  const showNavbar = isOpen => {
    const obj = {
      isCollapsedNavOpen: isOpen,
      height: isOpen ? 100 : 0
    };
    setCollapsedProps(obj);
  };

  if (location.pathname !== activeLink) {
    setActiveLink(location.pathname);
  }

  return (
    <nav className="navbar">
      <section className="navbar-top">
        <div className="container">
          <div className="navbar-collapse" onClick={() => showNavbar(true)}>
            &#9776;
          </div>
          <CollapsedNavbar
            showNavbar={showNavbar}
            height={`${collapsedProps.height}%`}
          />
          <div className="appname" onClick={() => history.push("/")}>
            Closet Goodies
          </div>
          {currentUser ? (
            <Link to="#">
              <UserProfile
                user={currentUser}
                signoutUserAsync={signoutUserAsync}
                history={history}
              />
            </Link>
          ) : (
            <>
              <Link to="/signin">
                <MockUser />
                Sign In
              </Link>

              <Link to="/signup">
                <MockUser />
                Sign Up
              </Link>
            </>
          )}
          <div className="text invisible-on-mobile"> FREE SHIPPING</div>
          <Cart />
        </div>
      </section>
      <section className="navbar-bottom">
        <div className="container">
          <div className="bottom-navbar">
            <Link
              to="/"
              className={activeLink === "/" ? "active" : ""}
              onClick={() => handleActiveLink("/")}
            >
              HOME
            </Link>
            <Link
              to="/shop/men"
              className={activeLink === "/shop/men" ? "active" : ""}
              onClick={() => handleActiveLink("/shop/men")}
            >
              MEN
            </Link>
            <Link
              to="/shop/women"
              className={activeLink === "/shop/women" ? "active" : ""}
              onClick={() => handleActiveLink("/shop/women")}
            >
              WOMEN
            </Link>
            <Link
              to="/shop/boys"
              className={activeLink === "/shop/boys" ? "active" : ""}
              onClick={() => handleActiveLink("/shop/boys")}
            >
              BOYS
            </Link>
            <Link
              to="/shop/girls"
              className={activeLink === "/shop/girls" ? "active" : ""}
              onClick={() => handleActiveLink("/shop/girls")}
            >
              GIRLS
            </Link>
            <Link
              to="/shop"
              className={activeLink === "/shop" ? "active" : ""}
              onClick={() => handleActiveLink("/shop")}
            >
              NEW CLOSET
            </Link>
            <Link
              to="/faq"
              className={activeLink === "/faq" ? "active" : ""}
              onClick={() => handleActiveLink("/faq")}
            >
              FAQ
            </Link>
          </div>
        </div>
      </section>
    </nav>
  );
};

const mapStatetoProps = state => ({
  currentUser: state.user.currentUser
});

const mapDispatchToProps = dispatch => ({
  signoutUserAsync: () => dispatch(signoutUserAsync())
});

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(Navbar));
