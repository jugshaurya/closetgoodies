import React from "react";
import { connect } from "react-redux";

// other Components
import ShopTypeCollection from "../shop-type-collection/shopTypeCollection";

// const mapCollectionNamesToID = {
//   hats: 1,
//   sneakers: 2,
//   jackets: 3,
//   womens: 4,
//   mens: 5
// };

const ShopPageSpecificCollection = props => {
  const { collectionName } = props.match.params;
  const { db } = props;
  const collection = db[collectionName];

  return (
    <div className="shop-page">
      <ShopTypeCollection collection={collection} singleCollectionPerPage />;
    </div>
  );
};

const mapStateToProps = state => ({
  db: state.data.db
});

export default connect(mapStateToProps)(ShopPageSpecificCollection);
