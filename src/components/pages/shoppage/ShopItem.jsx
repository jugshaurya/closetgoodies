import React from "react";

const ShopItem = props => {
  const { imageUrl, name, price } = props.item;
  return (
    <div className="item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="item-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
    </div>
  );
};

export default ShopItem;
