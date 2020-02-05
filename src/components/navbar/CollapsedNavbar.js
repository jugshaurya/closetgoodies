import React from "react";

import "./CollapsedNavbar.scss";
const CollapsedNavbar = ({ showNavbar, height }) => {
  return (
    <div
      id="myNav"
      id="overlay"
      style={{ height, overflow: height === "0%" ? "hidden" : "visible" }}
    >
      <span className="closebtn" onClick={() => showNavbar(false)}>
        &times;
      </span>

      <div className="overlay-content" onClick={() => showNavbar(false)}>
        <a href="/">HOME</a>
        <a href="/shop/men">MEN</a>
        <a href="/shop/women">WOMEN</a>
        <a href="/shop/boys">BOYS</a>
        <a href="/shop/girls">GIRLS</a>
        <a href="/shop">NEW CLOSET</a>
        <a href="/faq">FAQ</a>
      </div>
    </div>
  );
};

export default CollapsedNavbar;
