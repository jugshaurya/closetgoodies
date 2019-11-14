import React from "react";

import { ReactComponent as CartIconSVG } from "./cartIcon.svg";
import "./cartIcon.style.css";

import { connect } from "react-redux";
const CartIcon = props => {
  const { cartCount } = props;
  return (
    <div className="cart-img">
      <CartIconSVG />
      <span className="cart-count">{cartCount}</span>
    </div>
  );
};

const mapStateToProps = state => ({
  cartCount: state.cart.cartItems.reduce(
    (accumulator, item) => accumulator + item.quantity,
    0
  )
});

export default connect(mapStateToProps)(CartIcon);
