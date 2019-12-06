import React from "react";
import { connect } from "react-redux";
// other Components
import ShopTypeCollection from "../shop-type-collection/shopTypeCollection";
// Style Import
import "./shopPageAllCollections.styles.css";

const convertJSObjectToArray = JSobject => {
  const objectKeys = Object.keys(JSobject);
  return objectKeys.reduce((accu, item) => {
    return [...accu, JSobject[item]];
  }, []);
};

const ShopPageAllCollections = props => {
  const { products } = props;
  const productsArray = products ? convertJSObjectToArray(products) : [];
  return (
    <div className="shop-page">
      {productsArray.map(collection => (
        <ShopTypeCollection key={collection.id} collection={collection} />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  products: state.data.products
});

export default connect(mapStateToProps)(ShopPageAllCollections);
