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
  const { db } = props;
  const dbArray = convertJSObjectToArray(db);
  return (
    <div className="shop-page">
      {dbArray.map(collection => (
        <ShopTypeCollection key={collection.id} collection={collection} />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  db: state.data.db
});

export default connect(mapStateToProps)(ShopPageAllCollections);
