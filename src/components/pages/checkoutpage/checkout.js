import React from "react";
import { connect } from "react-redux";
// other Component Import
import CartItem from "../../cart/cart-item/cartItem";

// Stripe Payment
import StripeCheckoutButton from "../../stripe-checkout-button/stripeCheckoutButton";
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
      {cartTotal ? (
        <div className="stripe">
          <div className="stripe-card-help">
            <pre>Use Card: 4242 4242 4242 4242 Exp.Date: 1/22 CVV: 123</pre>
          </div>
          <div className="stripe-btn">
            <StripeCheckoutButton total={cartTotal} />
          </div>
        </div>
      ) : null}
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
