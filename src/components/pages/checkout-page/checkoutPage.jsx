import React from "react";
import { connect } from "react-redux";
// other Component Import
import CartItem from "../../cart/cart-item/cartItem";
// Style Import
import "./checkoutPage.styles.css";

const CheckoutPage = props => {
  const { cartItems, cartTotal } = props;

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

      <div className="cart-total">Total: ${cartTotal}</div>
    </div>
  );
};

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems,
  cartTotal: state.cart.cartItems.reduce(
    (accum, item) => accum + item.quantity * item.price,
    0
  )
});

export default connect(mapStateToProps)(CheckoutPage);
