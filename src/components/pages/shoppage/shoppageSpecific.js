import React from "react";
import { connect } from "react-redux";
import RenderCollection from "./renderCollection";

import SHOPDATA from "../../../firebase/addDataHelper/shop.data";

const ShopPageSpecific = props => {
  const { collectionName } = props.match.params;
  // const { products } = props; // later
  const products = SHOPDATA;
  const collection = products ? products[collectionName] : null;
  return (
    <RenderCollection collection={collection} collectionName={collectionName} />
  );
};

const mapStateToProps = state => ({
  products: state.data.products
});

export default connect(mapStateToProps)(ShopPageSpecific);
