import React from "react";
import { connect } from "react-redux";

// Action Creator Import
import { addToCart } from "../../../redux/cart/cart.action";
// other Component Import
import FormButton from "../../form-button/formButton";

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
          <FormButton
            type="button"
            addToCart
            onClick={() => props.addToCart(props.item)}
          >
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

const mapDispatchToProps = dispatch => ({
  addToCart: item => dispatch(addToCart(item))
});

export default connect(null, mapDispatchToProps)(ShopItem);
