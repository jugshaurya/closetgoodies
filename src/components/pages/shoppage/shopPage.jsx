import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

//  other Component Import
import ShopPageAllCollections from "./shoppage-all-collections/shopPageAllCollections";
import ShopPageSpecificCollection from "./shoppage-specific-collection/shopPageSpecificCollection";

// Firestore : get products info from backend
import { firestore } from "../../../firebase/helpers.firebase";

// action Creators
import { addProductsToStore } from "../../../redux/data/data.actions";

class ShopPage extends React.Component {
  unsubscribeFromStoreData = null;

  componentDidMount() {
    const collectionRef = firestore.collection("products");

    this.unsubscribeFromStoreData = collectionRef.onSnapshot(
      collectionSnapshot => {
        const docSnapshot = collectionSnapshot.docs;
        const dataArray = docSnapshot.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        const products = dataArray.reduce((acc, product) => {
          acc[product.title.toLowerCase()] = product;
          return acc;
        }, {});

        // storing this in redux state under state.shop.products
        this.props.addProductsToStore(products);
      }
    );
  }

  componentWillUnmount() {
    this.unsubscribeFromStoreData();
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
  addProductsToStore: products => dispatch(addProductsToStore(products))
});

export default connect(null, mapDispatchToProps)(ShopPage);
