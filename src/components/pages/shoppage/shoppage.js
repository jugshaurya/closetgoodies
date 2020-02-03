import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
// action Creators
import { fetchProductFromStoreAsync } from "../../../redux/data/data.actions";

// HOC Spinner Import
import pageSpinner from "../../page-spinner/pageSpinner";
import ShoppageNewCloset from "./shoppageNewCloset";
import ShoppageSpecific from "./shoppageSpecific";

const ShoppageNewClosetWithSpinner = pageSpinner(ShoppageNewCloset);
const ShoppageSpecificWithSpinner = pageSpinner(ShoppageSpecific);

const Shoppage = ({ match, isFetching, fetchProductFromStoreAsync }) => {
  useEffect(() => {
    fetchProductFromStoreAsync();
  }, [fetchProductFromStoreAsync]);

  return (
    <Switch>
      <Route
        exact
        path={`${match.path}`}
        render={() => <ShoppageNewClosetWithSpinner isLoading={isFetching} />}
      />
      <Route
        path={`${match.path}/:collectionName`}
        render={props => (
          <ShoppageSpecificWithSpinner isLoading={isFetching} {...props} />
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
