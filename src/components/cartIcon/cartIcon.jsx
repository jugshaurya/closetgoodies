import React from "react";
// import { connect } from "react-redux";
import { ReactComponent as CartIconSVG } from "./cartIcon.svg";
import "./cartIcon.style.css";
import CartDropdown from "../cartDropdown/cartDropdown";

class CartIcon extends React.Component {
  state = {
    hidden: true
  };

  toggleCart = () => {
    this.setState(prevState => ({
      hidden: !prevState.hidden
    }));
  };

  render() {
    const { hidden } = this.state;
    return (
      <div className="cart">
        <div className="cart-icon" onClick={this.toggleCart}>
          <div className="cart-img">
            <CartIconSVG />
            <span className="cart-count">0</span>
          </div>
        </div>
        {hidden && <CartDropdown />}
      </div>
    );
  }
}

// const mapStatetoProps = state => ({
//   hidden: state.cart.hidden
// });

// export default connect(mapStatetoProps)(CartIcon);

export default CartIcon;
