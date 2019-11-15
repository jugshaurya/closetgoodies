import React from "react";
import CartItem from "../../cart-item/cartItem";
import { connect } from "react-redux";

import "./CheckoutPage.style.css";

const CheckoutPage = props => {
  const { cartItems } = props;

  return (
    <div>
      <div className="cart-item-header">
        <div className="heading">Product</div>
        <div className="heading">Name</div>
        <div className="heading">Quantity</div>
        <div className="heading">Price</div>
        <div className="heading">Remove</div>
      </div>
      {cartItems.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems
});

export default connect(mapStateToProps)(CheckoutPage);

// import {} from '../../../redux/cart/cart.action'
