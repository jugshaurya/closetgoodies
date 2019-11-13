import React from "react";

import "./cartDropdown.style.css";

import CartDropdownItem from "../cartDropdownItem/CartDropdownItem";
import { connect } from "react-redux";

const CartDropdown = props => {
  const { cartItems } = props;
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((item, index) => (
          <CartDropdownItem key={index} item={item} />
        ))}
      </div>
      <button className="cart-checkout">Go to Checkout</button>
    </div>
  );
};

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems
});

export default connect(mapStateToProps)(CartDropdown);
