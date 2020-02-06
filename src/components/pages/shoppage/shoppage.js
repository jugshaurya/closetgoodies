import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
// action Creators
import { fetchProductFromStoreAsync } from "../../../redux/data/data.actions";

// HOC Spinner Import
import pageSpinner from "../../page-spinner/pageSpinner";
import ShoppageNewCloset from "./shoppageNewCloset";
import ShoppageSpecific from "./shoppageSpecific";
import ProductPage from "./productpage";

const ShoppageNewClosetWithSpinner = pageSpinner(ShoppageNewCloset);
const ShoppageSpecificWithSpinner = pageSpinner(ShoppageSpecific);
const ProductPageWithSpinner = pageSpinner(ProductPage);

const Shoppage = ({
  match,
  history,
  isFetching,
  fetchProductFromStoreAsync
}) => {
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
        path={`${match.path}/:collectionName/:title/:itemId`}
        render={props => (
          <ProductPageWithSpinner isLoading={isFetching} {...props} />
        )}
      />

      <Route
        path={`${match.path}/:collectionName/:title`}
        render={() => <Redirect to="/shop" />}
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
