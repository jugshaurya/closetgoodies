import React from "react";
import { connect } from "react-redux";

// other Components
import ShopTypeCollection from "../shop-type-collection/shopTypeCollection";

const ShopPageSpecificCollection = props => {
  const { collectionName } = props.match.params;
  const { products } = props;
  const collection = products ? products[collectionName] : null;
  return (
    <div className="shop-page">
      <ShopTypeCollection collection={collection} singleCollectionPerPage />
    </div>
  );
};

const mapStateToProps = state => ({
  products: state.data.products
});

export default connect(mapStateToProps)(ShopPageSpecificCollection);
