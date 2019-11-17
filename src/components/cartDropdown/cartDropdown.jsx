import React from "react";

import "./cartDropdown.style.css";

import CartDropdownItem from "../cartDropdownItem/CartDropdownItem";
import { connect } from "react-redux";
import FormButton from "../formButton/formButton";
import { withRouter } from "react-router-dom";

import { toggleShowCart } from "../../redux/cart/cart.action";

const CartDropdown = props => {
  const { cartItems, history, toggleShowCart } = props;
  return (
    <>
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item, index) => (
            <CartDropdownItem key={index} item={item} />
          ))
        ) : (
          <div className="cart-empty"> Cart is Empty</div>
        )}
      </div>

      <div className="checkout-button">
        <FormButton
          type="button"
          onClick={() => {
            history.push("/checkout");
            toggleShowCart();
          }}
        >
          Go to Checkout
        </FormButton>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems
});

const mapDispatchToProps = dispatch => ({
  toggleShowCart: () => dispatch(toggleShowCart())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartDropdown)
);
