import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

//  other Component Import
import ShopPageAllCollections from "./shoppage-all-collections/shopPageAllCollections";
import ShopPageSpecificCollection from "./shoppage-specific-collection/shopPageSpecificCollection";

// action Creators
import { fetchProductFromStoreAsync } from "../../../redux/data/data.actions";

import { ReactComponent as Spinner } from "./Spinner.svg";

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
          render={() => (isFetching ? <Spinner /> : <ShopPageAllCollections />)}
        />
        <Route
          path={`${match.path}/:collectionName`}
          render={props =>
            isFetching ? <Spinner /> : <ShopPageSpecificCollection {...props} />
          }
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
