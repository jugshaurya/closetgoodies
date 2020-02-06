import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import CartItem from "./cartItem";
import "./cart.scss";

class Cart extends React.Component {
  state = {
    width: 0
  };

  openCart = () => {
    this.setState({ width: 350 });
  };

  closeCart = () => {
    this.setState({ width: 0 });
  };

  render() {
    const { cartCount, cartItems, history } = this.props;
    const { width } = this.state;
    return (
      <div id="cart">
        <div
          className="cart-dropdown"
          style={{
            width: `${width}px`
          }}
        >
          <div className="cart-dropdown-heading">
            <div className="closebtn" onClick={this.closeCart}>
              &#9874;
            </div>
            <div className="heading">Cart</div>
          </div>
          <div className="cart-dropdown-body">
            {cartItems.length === 0 ? (
              <div className="lists-empty">
                Cart is Empty
                <div className="pushtohome" onClick={() => history.push("/")}>
                  Go to Shopping
                </div>
              </div>
            ) : (
              cartItems.map(item => <CartItem key={item.id} item={item} />)
            )}
          </div>
          <div className="cart-dropdown-footer">
            <button
              className="form-button checkout-btn"
              type="button"
              onClick={() => {
                history.push("/checkout");
              }}
            >
              Go to Checkout
            </button>
          </div>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="100%"
          height="100%"
          viewBox="163.7 331.4 267.8 178.8"
          preserveAspectRatio="xMinYMax meet"
          data-hook="svg-icon-10"
          className="cartsvg"
          onClick={this.openCart}
        >
          <path
            d="M243.4 425.1l-29.7-47.9 -9.1 5.6 26.2 42.2h-67.1v10.7h3l19.1 70.2c0.6 2.4 3 4.2 5.4 4.2h97c2.4 0 4.2-1.8 4.2-3.6l19.6-70.8h4.2v-10.7H243.4zM221.4 473.3v10.7h-10.7V473.3H221.4zM210.7 461.4v-10.7h10.7v10.7H210.7zM244.7 473.3v10.7h-10.7V473.3H244.7zM233.9 461.4v-10.7h10.7v10.7H233.9zM257.8 484V473.3h10.7v10.7H257.8zM268.5 461.4h-10.7v-10.7h10.7V461.4z"
            style={{ fill: "#939393" }}
          ></path>
          <path
            className="m8g_G"
            d="M383.4 334c35.7 10.7 56 47.6 45.2 83.3 -10.7 35.7-47.6 56-83.3 45.2 -35.7-10.7-56-47.6-45.2-83.3C310.7 344.2 348.2 323.9 383.4 334z"
            style={{ fill: "#939393" }}
          ></path>
          <text
            x="365"
            y="400"
            dy=".35em"
            textAnchor="middle"
            className="count"
            data-hook="items-count"
          >
            {cartCount}
          </text>
        </svg>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems,
  cartCount: state.cart.cartItems.reduce(
    (accumulator, item) => accumulator + item.quantity,
    0
  )
});

const mapDispatchToProps = dispatch => ({});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart));
