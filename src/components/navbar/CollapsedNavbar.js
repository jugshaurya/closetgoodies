import React from "react";
import { Link } from "react-router-dom";

import "./CollapsedNavbar.scss";
const CollapsedNavbar = ({ showNavbar, height }) => {
  return (
    <div
      id="overlay"
      style={{ height, overflow: height === "0%" ? "hidden" : "visible" }}
    >
      <span className="closebtn" onClick={() => showNavbar(false)}>
        &times;
      </span>

      <div className="overlay-content" onClick={() => showNavbar(false)}>
        <Link to="/">HOME</Link>
        <Link to="/shop/men">MEN</Link>
        <Link to="/shop/women">WOMEN</Link>
        <Link to="/shop/boys">BOYS</Link>
        <Link to="/shop/girls">GIRLS</Link>
        <Link to="/shop">NEW CLOSET</Link>
        <Link to="/faq">FAQ</Link>
      </div>
    </div>
  );
};

export default CollapsedNavbar;
