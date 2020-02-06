import React from "react";
import { connect } from "react-redux";
import RenderCollection from "./renderCollection";

const ShopPageSpecific = props => {
  const { collectionName } = props.match.params;
  const DATA = props.data;
  const collection = DATA ? DATA[collectionName] : null;
  return (
    <RenderCollection collection={collection} collectionName={collectionName} />
  );
};

const mapStateToProps = state => ({
  data: state.data.data
});

export default connect(mapStateToProps)(ShopPageSpecific);
