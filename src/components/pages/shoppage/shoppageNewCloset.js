import React from "react";
import { connect } from "react-redux";
// other Components
import RenderCollection from "./renderCollection";
import NEW_CLOSET_DATA from "../../../firebase/addDataHelper/newCloset.data";

const ShopPageNewCloset = props => {
  // const { products } = props;
  const products = NEW_CLOSET_DATA;
  const collection = products["new"];
  return (
    <RenderCollection
      key={collection.id}
      collection={collection}
      collectionName={"new"}
    />
  );
};

const mapStateToProps = state => ({
  products: state.data.products
});

export default connect(mapStateToProps)(ShopPageNewCloset);
