import React from "react";
import { connect } from "react-redux";
//  other Component Import
import ShopTypeCollection from "./shopTypeCollection";
// Style Import
import "./shopPage.styles.css";

const ShopPage = props => {
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

export default connect(mapStateToProps)(ShopPage);
