import React from "react";
// Style Import
import "./cartDropdownItem.styles.css";

const CartDropdownItem = props => {
  const { name, imageUrl, price, quantity } = props.item;
  return (
    <div className="cartdropdown-item">
      <div className="item-image">
        <img src={imageUrl} alt="cart-item" />
      </div>
      <div className="item-data">
        <div className="item-name">{name}</div>
        <div className="item-price">
          {quantity} x {price}
        </div>
      </div>
    </div>
  );
};

export default CartDropdownItem;
