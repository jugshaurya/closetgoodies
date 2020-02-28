import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../../../redux/cart/cart.actions";

import "./productpage.scss";

const getItemFromURL = (data, collectionName, title, itemId) => {
  const collections = data[collectionName];
  if (!collections) return null;

  const collection = collections.filter(
    collection => collection.title.toLowerCase() === title
  )[0];
  if (!collection) return null;

  const collectionItems = collection["items"];
  if (!collectionItems) return null;

  const itemArray = collectionItems.filter(item => String(item.id) === itemId);
  if (itemArray.length === 0) return null;
  return itemArray[0];
};

const throwError = () => {
  throw Error("404 - Page Not Found");
};

const ProductPage = props => {
  const { collectionName, title, itemId } = props.match.params;
  if (!props.data) {
    return <></>;
  }
  const item = getItemFromURL(props.data, collectionName, title, itemId);
  return item ? (
    <div id="productpage-section">
      <div className="container">
        <div className="product-info">
          <div className="top">
            <div className="collection-name">
              {collectionName}
              <span>'s</span> Product
            </div>
            <div className="collection-category">
              {title}
              <span>'s</span> Category
            </div>
          </div>
          <div className="middle">
            <div className="middle-left">
              <div className="middle-left-image">
                <img src={item.imageURL} alt="product" />
              </div>
              <div className="text">
                <span>We Made Fits Fitter </span>: we did a complete body
                measurement to create a range of smarter and perfect fits for 5
                sizes. We did a revised study in 2017 and introduced a sixth
                size right fit because we want the perfect fit for everyone.
              </div>
            </div>

            <div className="middle-right">
              <div className="name">{item.name}</div>
              <div className="price">
                <span>Rs.</span> {item.price}
              </div>

              <div className="addtocart">
                <button type="button" onClick={() => props.addToCart(item)}>
                  Add To Cart
                </button>
              </div>
              <div className="product-info">
                <div className="header">Product Info</div>
                <ul>
                  <li>Made From 100% Premium Cotton.</li>
                  <li>Fit: Regular Fit</li>
                  <li>Warranty: 3 months</li>
                  <li>Fit: Regular Fit</li>
                  <li>Care Instructions: Hand Wash</li>
                  <li>
                    Colour Declaration : Placement and color of print may vary
                  </li>
                </ul>
              </div>
              <div className="return-info">
                <div className="header">Return & Refund Policy</div>
                If you are not 100% satisfied with your purchase, you can return
                the product and get a full refund or exchange the product for
                another one, be it similar or not. ... Any product you return
                must be in the same condition you received it and in the
                original packaging. Please keep the receipt.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    throwError()
  );
};

const mapStateToProps = state => ({
  data: state.data.data
});

const mapDispatchToProps = dispatch => ({
  addToCart: item => dispatch(addToCart(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
