import React from "react";
import { connect } from "react-redux";
// other Components
import ShopTypeCollection from "../shop-type-collection/shopTypeCollection";
// Style Import
import "./shopPageAllCollections.styles.css";

const ShopPageAllCollections = props => {
  const { db } = props;
  return (
    <div className="shop-page">
      {db.map(collection => (
        <ShopTypeCollection key={collection.id} collection={collection} />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  db: state.data.db
});

export default connect(mapStateToProps)(ShopPageAllCollections);
