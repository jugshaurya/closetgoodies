import React from "react";
import { connect } from "react-redux";
import CartDropdown from "../cartDropdown/cartDropdown";
import CartIcon from "../cartIcon/cartIcon";

import { toggleShowCart } from "../../redux/cart/cart.action";
import "./cart.style.css";

const Cart = props => {
  const { show, toggleShowCart } = props;
  return (
    <div className="cart" onClick={toggleShowCart}>
      <CartIcon />
      {show && <CartDropdown />}
    </div>
  );
};

const mapStatetoProps = state => ({
  show: state.cart.show
});

const mapDispatchToProps = dispatch => ({
  toggleShowCart: () => {
    dispatch(toggleShowCart());
  }
});

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(Cart);
