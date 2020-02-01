import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// action creator import
import { signoutUserAsync } from "../../redux/user/user.actions";

// other Component Import
// import Cart from "../cart/cart";

// Style/SVG Import
import "./navbar.scss";
import { ReactComponent as MockUser } from "../../assets/mockuser.svg";
import { ReactComponent as Cart } from "../../assets/cart.svg";

const UserProfile = ({ user, signoutUserAsync }) => {
  return (
    <div className="userProfile">
      {user.displayName}
      <div className="dropdown" onClick={signoutUserAsync}>
        Signout
      </div>
    </div>
  );
};

const Navbar = props => {
  const { currentUser, signoutUserAsync } = props;
  const [activeLink, setActiveLink] = useState("home");

  const handleActiveLink = item => {
    setActiveLink(item);
  };

  console.log(currentUser);
  return (
    <nav className="navbar">
      <section className="navbar-top">
        <div className="container">
          {currentUser ? (
            <Link to="/profile">
              <UserProfile
                user={currentUser}
                signoutUserAsync={signoutUserAsync}
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
          <div className="text"> FREE SHIPPING</div>
          <Link to="/cart">
            <Cart className="cartsvg" />
          </Link>
        </div>
      </section>
      <section className="navbar-bottom">
        <div className="container">
          <Link
            to="/"
            className={activeLink === "home" ? "active" : ""}
            onClick={() => handleActiveLink("home")}
          >
            HOME
          </Link>
          <Link
            to="/shop/men"
            className={activeLink === "men" ? "active" : ""}
            onClick={() => handleActiveLink("men")}
          >
            MEN
          </Link>
          <Link
            to="/shop/women"
            className={activeLink === "women" ? "active" : ""}
            onClick={() => handleActiveLink("women")}
          >
            WOMEN
          </Link>
          <Link
            to="/shop/boys"
            className={activeLink === "boys" ? "active" : ""}
            onClick={() => handleActiveLink("boys")}
          >
            BOYS
          </Link>
          <Link
            to="/shop/girls"
            className={activeLink === "men" ? "active" : ""}
            onClick={() => handleActiveLink("men")}
          >
            GIRLS
          </Link>
          <Link
            to="/shop"
            className={activeLink === "newcloset" ? "active" : ""}
            onClick={() => handleActiveLink("newcloset")}
          >
            NEW CLOSET
          </Link>
          <Link
            to="/faq"
            className={activeLink === "faq" ? "active" : ""}
            onClick={() => handleActiveLink("faq")}
          >
            FAQ
          </Link>
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

export default connect(mapStatetoProps, mapDispatchToProps)(Navbar);
