import React from "react";
import "./navbar.style.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand left " href="/">
          <img src="./icon.png" width="30" height="30" alt="Logo" />
          Cloth-Zone
        </a>
        <div className="collapse navbar-collapse right" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/shop">
                Shop
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
