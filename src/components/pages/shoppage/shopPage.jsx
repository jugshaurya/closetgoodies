import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

//  other Component Import
import ShopPageAllCollections from "./shoppage-all-collections/shopPageAllCollections";
import ShopPageSpecificCollection from "./shoppage-specific-collection/shopPageSpecificCollection";

// action Creators
import { fetchProductFromStoreAsync } from "../../../redux/data/data.actions";

// HOC Import
import withLoadingSpinner from "../../HOC/with-loading-spinner/withLoadingSpinner.component";

const ShopPageAllCollectionsWithLoadingSpinner = withLoadingSpinner(
  ShopPageAllCollections
);
const ShopPageSpecificCollectionWithLoadingSpinner = withLoadingSpinner(
  ShopPageSpecificCollection
);

class ShopPage extends React.Component {
  componentDidMount() {
    this.props.fetchProductFromStoreAsync();
  }

  render() {
    const { match, isFetching } = this.props;
    return (
      <Switch>
        <Route
          exact
          path={`${match.path}`}
          render={() => (
            <ShopPageAllCollectionsWithLoadingSpinner isLoading={isFetching} />
          )}
        />
        <Route
          path={`${match.path}/:collectionName`}
          render={props => (
            <ShopPageSpecificCollectionWithLoadingSpinner
              isLoading={isFetching}
              {...props}
            />
          )}
        />
      </Switch>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchProductFromStoreAsync: () => dispatch(fetchProductFromStoreAsync())
});

const mapStateToProps = state => ({
  isFetching: state.data.isFetching
});
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
