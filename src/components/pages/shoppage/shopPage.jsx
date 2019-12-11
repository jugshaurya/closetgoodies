import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

//  other Component Import
import ShopPageAllCollections from "./shoppage-all-collections/shopPageAllCollections";
import ShopPageSpecificCollection from "./shoppage-specific-collection/shopPageSpecificCollection";

// action Creators
import { fetchProductFromStoreAsync } from "../../../redux/data/data.actions";

class ShopPage extends React.Component {
  componentDidMount() {
    this.props.fetchProductFromStoreAsync();
  }

  render() {
    const { match } = this.props;
    return (
      <Switch>
        <Route
          exact
          path={`${match.path}`}
          component={ShopPageAllCollections}
        />
        <Route
          path={`${match.path}/:collectionName`}
          component={ShopPageSpecificCollection}
        />
      </Switch>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchProductFromStoreAsync: () => dispatch(fetchProductFromStoreAsync())
});

export default connect(null, mapDispatchToProps)(ShopPage);
