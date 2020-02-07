import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
// action Creators
import { fetchProductFromStoreAsync } from "../../../redux/data/data.actions";

// HOC Spinner Import
import pageSpinner from "../../page-spinner/pageSpinner";
import ShoppageSpecific from "./shoppageSpecific";
import ProductPage from "./productpage";

const ShoppageSpecificWithSpinner = pageSpinner(ShoppageSpecific);
const ProductPageWithSpinner = pageSpinner(ProductPage);

const Shoppage = ({
  match,
  history,
  isFetchingData,
  fetchProductFromStoreAsync
}) => {
  useEffect(() => {
    fetchProductFromStoreAsync();
  }, [fetchProductFromStoreAsync]);

  return (
    <Switch>
      <Route
        exact
        path={`${match.path}`} // for /shop/
        render={() => <Redirect to="/shop/new" />}
      />
      <Route exact path={"/shop"} render={() => <Redirect to="/shop/new" />} />
      <Route
        path={`${match.path}/:collectionName/:title/:itemId`}
        render={props => (
          <ProductPageWithSpinner isLoading={isFetchingData} {...props} />
        )}
      />

      <Route
        path={`${match.path}/:collectionName/:title`}
        render={() => <Redirect to="/shop/new" />}
      />
      <Route
        path={`${match.path}/:collectionName`}
        render={props => (
          <ShoppageSpecificWithSpinner isLoading={isFetchingData} {...props} />
        )}
      />
    </Switch>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchProductFromStoreAsync: () => dispatch(fetchProductFromStoreAsync())
});

const mapStateToProps = state => ({
  isFetchingData: state.data.isFetchingData
});

export default connect(mapStateToProps, mapDispatchToProps)(Shoppage);
