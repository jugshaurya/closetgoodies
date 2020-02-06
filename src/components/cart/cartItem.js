import React from "react";
import { connect } from "react-redux";
// Action Creator Import
import {
  addToCart,
  decreaseCartItemCount,
  deleteFromCart
} from "../../redux/cart/cart.actions";

// Style Import
import "./cartItem.scss";

const CartItem = props => {
  const { imageURL, name, quantity, price } = props.item;
  const { addToCart, decreaseCartItemCount, deleteFromCart } = props;
  return (
    <div className="cart-item">
      <div className="product-img">
        <img src={imageURL} alt="product" />
      </div>
      <div className="property">
        <div className="name">{name}</div>
        <div className="quantity">
          <div
            className="arrow decrease"
            onClick={() => decreaseCartItemCount(props.item)}
          >
            &#9666;
          </div>
          <div className="value">{quantity}</div>
          <div className="arrow increase" onClick={() => addToCart(props.item)}>
            &#9656;
          </div>
        </div>
        <div className="price">
          <span>Rs.</span>
          {price * quantity}
        </div>
        <div className="remove" onClick={() => deleteFromCart(props.item)}>
          &#10005;
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addToCart: item => dispatch(addToCart(item)),
  decreaseCartItemCount: item => dispatch(decreaseCartItemCount(item)),
  deleteFromCart: item => dispatch(deleteFromCart(item))
});

export default connect(null, mapDispatchToProps)(CartItem);
