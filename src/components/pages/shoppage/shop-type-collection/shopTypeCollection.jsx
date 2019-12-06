import React from "react";
import { withRouter } from "react-router-dom";
// other Component Import
import ShopItem from "../shop-item/shopItem";

// Style Import
import "./shopTypeCollection.styles.css";
const ShopTypeCollection = props => {
  const { title, items } = props.collection;
  const { singleCollectionPerPage, history } = props;
  return (
    <div className="collection">
      <h1
        className="shop-page-title"
        onClick={() => history.push(`/shop/${encodeURI(title.toLowerCase())}`)}
      >
        {title.toUpperCase()}
      </h1>
      <div className="items">
        {singleCollectionPerPage
          ? items.map(item => <ShopItem item={item} key={item.id} />)
          : items
              .filter((val, id) => id < 6)
              .map(item => <ShopItem item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default withRouter(ShopTypeCollection);
