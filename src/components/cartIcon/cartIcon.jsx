import React from "react";

import { ReactComponent as CartIconSVG } from "./cartIcon.svg";
import "./cartIcon.style.css";

const CartIcon = () => {
  return (
    <div className="cart-icon">
      <div className="cart-img">
        <CartIconSVG />
        <span className="cart-count">0</span>
      </div>
    </div>
  );
};

export default CartIcon;
