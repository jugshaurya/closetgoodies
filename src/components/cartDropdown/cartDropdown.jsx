import React from "react";

import "./cartDropdown.style.css";
const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <button className="cart-checkout">Go to Checkout</button>
    </div>
  );
};

export default CartDropdown;
