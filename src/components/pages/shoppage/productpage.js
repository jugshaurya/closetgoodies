import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../../../redux/cart/cart.actions";

import SHOPDATA from "../../../firebase/addDataHelper/shop.data";
import "./productpage.scss";

const getItemFromURL = (SHOPDATA, collectionName, title, itemId) => {
  const collections = SHOPDATA[collectionName];
  if (!collections) return null;

  const product = collections.filter(
    product => product.title.toLowerCase() === title
  )[0];
  if (!product) return null;

  const productItems = product["items"];
  if (!productItems) return null;

  const itemArray = productItems.filter(item => String(item.id) === itemId);
  if (itemArray.length === 0) return null;
  return itemArray[0];
};

const throwError = () => {
  if (2 === 1 + 1) throw Error("404 - Page Not Found");
};

const ProductPage = props => {
  const { collectionName, title, itemId } = props.match.params;
  // const { products } = props; // later
  const item = SHOPDATA
    ? getItemFromURL(SHOPDATA, collectionName, title, itemId)
    : null;
  console.log(item);
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
              <img src={item.imageUrl} alt="product" />
              <div className="text">
                <span>We Made Fits Fitter </span>: We did a complete body
                measurement to create a range of smarter and perfect fits 5
                sizes in India We did a revised study in 2017 and introduced a
                seventh size Right fit is priceless and we want the perfect for
                everyone.
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
  products: state.data.products
});

const mapDispatchToProps = dispatch => ({
  addToCart: item => dispatch(addToCart(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
