import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// action creator import
import { signoutUserAsync } from "../../redux/user/user.actions";
// other Component Import
// import Cart from "../cart/cart";
// Style Import
import "./navbar.styles.css";
import { ReactComponent as SearchSVG } from "./icons/search.svg";
import { ReactComponent as TieSVG } from "./icons/tie.svg";
import { ReactComponent as ManSVG } from "./icons/man.svg";
import { ReactComponent as WomanSVG } from "./icons/woman.svg";
import { ReactComponent as BoySVG } from "./icons/boy.svg";
import { ReactComponent as GirlSVG } from "./icons/girl.svg";
import { ReactComponent as HomeSVG } from "./icons/home.svg";
import { ReactComponent as ContactSVG } from "./icons/contact.svg";
import { ReactComponent as ReviewSVG } from "./icons/review.svg";
import { ReactComponent as StarSVG } from "./icons/star.svg";
import { ReactComponent as CartSVG } from "./icons/cart.svg";

const navbarLeft = () => {
  return (
    <div className="navbar-left">
      <Link to="/">
        <span>Cloth</span>
        <span>Zone</span>
      </Link>
      <TieSVG />
    </div>
  );
};

const navbarMiddle = () => {
  return (
    <div className="navbar-middle">
      <div className="navbar-middle-top">
        <form>
          <div className="select1">
            <span> Find </span>
            <select name="what" defaultValue="Jacket">
              <option value="jacket">Jacket</option>
              <option value="tie">Tie</option>
              <option value="jeans">Jeans</option>
              <option value="shirt">Shirt</option>
              <option value="t-shirt">T-shirt</option>
            </select>
          </div>
          <div className="select2">
            <span> For </span>
            <select name="whom" defaultValue="Men">
              <option value="men">Men</option>
              <option value="women">Women</option>
              <option value="boys">Boys</option>
              <option value="girls">Girls</option>
            </select>
          </div>
          <button type="button" className="nav-search-btn">
            <SearchSVG />
          </button>
        </form>
      </div>

      <div className="navbar-middle-bottom">
        <div className="left">
          <Link className="nav-link" to="/men" style={{ color: "#66fcf1" }}>
            <ManSVG />
            Men
          </Link>
          <Link className="nav-link" to="/women" style={{ color: "pink" }}>
            <WomanSVG />
            Women
          </Link>
          <Link className="nav-link" to="/boys" style={{ color: "#66fcf1" }}>
            <BoySVG />
            Boys
          </Link>
          <Link className="nav-link" to="/girls" style={{ color: "pink" }}>
            <GirlSVG />
            Girls
          </Link>
        </div>
        <div className="right">
          <Link className="nav-link" to="/">
            <HomeSVG />
            Home
          </Link>
          <Link className="nav-link" to="/">
            <ContactSVG />
            Contacts
          </Link>
          <div className="nav-link">
            <CartSVG />
            Cart
          </div>
          <Link className="nav-link" to="/">
            <ReviewSVG />
            Submit Review
          </Link>
          <Link className="nav-link" to="/">
            <StarSVG />
            Give Stars
          </Link>
        </div>
      </div>
    </div>
  );
};

const navbarRight = () => {
  return (
    <div className="navbar-right">
      <button type="button" className="sign-up-btn">
        SignUp
      </button>
      <Link to="/">Log In</Link>
    </div>
  );
};

const Navbar = props => {
  // const { currentUser, signoutUserAsync } = props;
  return (
    <nav className="navbar">
      {navbarLeft()}
      {navbarMiddle()}
      {navbarRight()}

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

        <li >
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
