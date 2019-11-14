import React from "react";

import "./CheckoutPage.style.css";

import { connect } from "react-redux";
const CheckoutPage = props => {
  const { cartItems } = props;

  console.log(cartItems);
  return (
    <div>
      <ul>
        {cartItems.map(item => {
          return <li>{item.name}</li>;
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems
});

export default connect(mapStateToProps)(CheckoutPage);

// import {} from '../../../redux/cart/cart.action'
