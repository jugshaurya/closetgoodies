import React from "react";
import { connect } from "react-redux";
import CartDropdown from "../cartDropdown/cartDropdown";
import CartIcon from "../cartIcon/cartIcon";

import { toggleShowCart } from "../../redux/cart/cart.action";
import "./cart.style.css";

class Cart extends React.Component {
  state = {
    hidden: false,
    cartItem: []
  };

  toggleCart = () => {
    this.setState(prevState => ({
      hidden: !prevState.hidden
    }));
  };

  render() {
    const { hidden } = this.state;
    return (
      <div className="cart" onClick={this.toggleCart}>
        <CartIcon />
        {hidden && <CartDropdown />}
      </div>
    );
  }
}

const mapStatetoProps = state => ({
  hidden: state.cart.hidden
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
