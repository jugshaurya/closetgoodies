import React from "react";

import "./cartItem.style.css";

const CartItem = props => {
  const { imageUrl, name, quantity, price } = props.item;
  return (
    <div className="cart-item">
      <div className="property product-img">
        <img src={imageUrl} alt="product" />
      </div>
      <div className="property name">{name}</div>
      <div className="property quantity">{quantity}</div>
      <div className="property price">{price}</div>
      <div className="property remove">&#10005;</div>
    </div>
  );
};

export default CartItem;
