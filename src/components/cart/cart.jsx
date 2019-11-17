import React from "react";
import { connect } from "react-redux";
// Action Creator Import
import { toggleShowCart } from "../../redux/cart/cart.action";
// Other Component Import
import CartDropdown from "../cart-dropdown/cartDropdown";
import CartIcon from "../cart-icon/cartIcon";
// Style Import
import "./cart.styles.css";

const Cart = props => {
  const { show, toggleShowCart } = props;
  return (
    <div className="cart">
      <div className="cart-icon" onClick={toggleShowCart}>
        <CartIcon />
      </div>
      {show && (
        <div className="cart-dropdown">
          <CartDropdown />
        </div>
      )}
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

export default connect(mapStatetoProps, mapDispatchToProps)(Cart);
