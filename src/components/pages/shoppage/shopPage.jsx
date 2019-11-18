import React from "react";
import { Switch, Route } from "react-router-dom";

//  other Component Import
import ShopPageAllCollections from "./shoppage-all-collections/shopPageAllCollections";
import ShopPageSpecificCollection from "./shoppage-specific-collection/shopPageSpecificCollection";

const ShopPage = props => {
  const { match } = props;
  return (
    <Switch>
      <Route exact path={`${match.path}`} component={ShopPageAllCollections} />
      <Route
        path={`${match.path}/:collectionName`}
        component={ShopPageSpecificCollection}
      />
    </Switch>
  );
};

export default ShopPage;
