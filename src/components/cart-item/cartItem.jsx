import React from "react";

import "./cartItem.style.css";

import { connect } from "react-redux";
import { addToCart } from "../../redux/cart/cart.action";

const CartItem = props => {
  const { imageUrl, name, quantity, price } = props.item;
  const { addToCart } = props;
  return (
    <div className="cart-item">
      <div className="property product-img">
        <img src={imageUrl} alt="product" />
      </div>
      <div className="property name">{name}</div>

      <div className="property quantity">
        <div className="arrow decrease">&#9666;</div>
        <div className="value">{quantity}</div>
        <div className="arrow increase" onClick={() => addToCart(props.item)}>
          &#9656;
        </div>
      </div>
      <div className="property price">{price * quantity}</div>
      <div className="property remove">&#10005;</div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addToCart: item => dispatch(addToCart(item))
});

export default connect(null, mapDispatchToProps)(CartItem);
