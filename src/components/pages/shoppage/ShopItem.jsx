import React from "react";
import FormButton from "../../formButton/formButton";

const ShopItem = props => {
  const { imageUrl, name, price } = props.item;
  return (
    <div className="item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      >
        <div className="add-btn">
          <FormButton type="button" addToCart>
            Add to Cart
          </FormButton>
        </div>
      </div>
      <div className="item-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
    </div>
  );
};

export default ShopItem;
