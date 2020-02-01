import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
// action Creators
import { fetchProductFromStoreAsync } from "../../../redux/data/data.actions";

// HOC Spinner Import
import withLoadingSpinner from "../../HOC/with-loading-spinner/withLoadingSpinner.component";
import ShoppageNewCloset from "./shoppageNewCloset";
import ShoppageSpecific from "./shoppageSpecific";

const ShoppageNewClosetWithLoadingSpinner = withLoadingSpinner(
  ShoppageNewCloset
);
const ShoppageSpecificWithLoadingSpinner = withLoadingSpinner(ShoppageSpecific);

const Shoppage = ({ match, isFetching, fetchProductFromStoreAsync }) => {
  useEffect(() => {
    fetchProductFromStoreAsync();
  }, [fetchProductFromStoreAsync]);

  return (
    <Switch>
      <Route
        exact
        path={`${match.path}`}
        render={() => (
          <ShoppageNewClosetWithLoadingSpinner isLoading={isFetching} />
        )}
      />
      <Route
        path={`${match.path}/:collectionName`}
        render={props => (
          <ShoppageSpecificWithLoadingSpinner
            isLoading={isFetching}
            {...props}
          />
        )}
      />
    </Switch>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchProductFromStoreAsync: () => dispatch(fetchProductFromStoreAsync())
});

const mapStateToProps = state => ({
  isFetching: state.data.isFetching
});

export default connect(mapStateToProps, mapDispatchToProps)(Shoppage);
