import React from "react";
import { connect } from "react-redux";
// CartIcon Import
import { ReactComponent as CartIconSVG } from "../../assets/cartIcon.svg";
// Style Import
import "./cartIcon.styles.css";

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
