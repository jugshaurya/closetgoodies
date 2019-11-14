import React from "react";

import "./cartDropdown.style.css";

import CartDropdownItem from "../cartDropdownItem/CartDropdownItem";
import { connect } from "react-redux";
import FormButton from "../formButton/formButton";
import { withRouter } from "react-router-dom";

const CartDropdown = props => {
  const { cartItems, history } = props;
  return (
    <>
      <div className="cart-items">
        {cartItems.map((item, index) => (
          <CartDropdownItem key={index} item={item} />
        ))}
      </div>
      <div className="checkout-button">
        <FormButton type="button" onClick={() => history.push("/checkout")}>
          Go to Checkout
        </FormButton>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
