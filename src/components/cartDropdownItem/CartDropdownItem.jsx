import React from "react";

import "./cartDropdownItem.style.css";
const CartDropdownItem = props => {
  const { id, name, imageUrl, price } = props.item;
  return (
    <div className="cartdropdown-item">
      <div className="item-image">
        <img src={imageUrl} />
      </div>
      <div className="item-data">
        <div className="item-name">{name}</div>
        <div className="item-price">1 X {price}</div>
      </div>
    </div>
  );
};

export default CartDropdownItem;
