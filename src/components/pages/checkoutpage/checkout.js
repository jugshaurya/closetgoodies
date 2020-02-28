import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

// Action Creator Import
import {
  addToCart,
  decreaseCartItemCount,
  deleteFromCart
} from "../../../redux/cart/cart.actions";

// Stripe Payment
import StripeCheckout from "react-stripe-checkout";

import StripeLogo from "../../../assets/logo/logo1.jpeg";
// Style Import
import "./checkout.scss";

const CheckoutPage = props => {
  const {
    cartItems,
    cartTotal,
    history,
    addToCart,
    decreaseCartItemCount,
    deleteFromCart
  } = props;

  const onToken = token => {
    // console.log("Payment Token for charges", token);
    alert("Thank you for the Payment!");
  };

  return (
    <div id="checkout-page">
      <div className="container">
        <div className="checkout-left">
          <div className="top">Your Cart</div>
          {cartItems.length === 0 ? (
            <div className="lists-empty">
              Cart is Empty
              <div className="pushtohome" onClick={() => history.push("/")}>
                Go to Shopping
              </div>
            </div>
          ) : (
            <table className="lists">
              <thead>
                <tr>
                  <th className="heading">Product</th>
                  <th className="heading">Name</th>
                  <th className="heading">Quantity</th>
                  <th className="heading">Price</th>
                  <th className="heading">Remove</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map(item => (
                  <tr key={item.id}>
                    <td>
                      <img src={item.imageURL} alt="cart-item-pic" />
                    </td>
                    <td>{item.name}</td>
                    <td>
                      <div className="quantity">
                        <div
                          className="arrow decrease"
                          onClick={() => decreaseCartItemCount(item)}
                        >
                          &#9666;
                        </div>
                        <div className="value">{item.quantity}</div>
                        <div
                          className="arrow increase"
                          onClick={() => addToCart(item)}
                        >
                          &#9656;
                        </div>
                      </div>
                    </td>
                    <td>Rs. {item.price * item.quantity}</td>
                    <td>
                      {" "}
                      <span
                        className="remove"
                        onClick={() => deleteFromCart(item)}
                      >
                        &#10005;
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        <div className="checkout-right">
          <div className="top">Order Summary</div>
          <div className="middle">
            <div className="cart-total">
              Subtotal
              <span>Rs.{cartTotal}</span>
            </div>
            <div className="cart-shipping">
              Shipping
              <span>FREE</span>
            </div>
          </div>
          <div className="bottom">
            <div className="cart-total-again">
              Subtotal
              <span>Rs.{cartTotal}</span>
            </div>
          </div>
          <div className="stripe-btn">
            {cartTotal ? (
              <>
                <StripeCheckout
                  label="Pay Now via Stripe Payment" // text inside the Stripe button
                  name="Closet Goodies" // the pop-in header title
                  description={`Your Cart Total is Rs.${cartTotal}`} // the pop-in header subtitle
                  shippingAddress
                  billingAddress
                  image={StripeLogo} // the pop-in header image (default none)
                  amount={cartTotal} // cents
                  panelLabel="Pay Money" // prepended to the amount in the bottom pay button
                  token={onToken}
                  stripeKey="pk_test_tDO2SjFNmhTSR4wwDmjuixFw007Amza6fU"
                ></StripeCheckout>
                <div className="stripe-card-help">
                  Use Card: <span>4242 4242 4242 4242</span>
                  Exp.Date: <span>1/22</span> CVV: <span>123</span>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
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
const mapDispatchToProps = dispatch => ({
  addToCart: item => dispatch(addToCart(item)),
  decreaseCartItemCount: item => dispatch(decreaseCartItemCount(item)),
  deleteFromCart: item => dispatch(deleteFromCart(item))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CheckoutPage)
);
