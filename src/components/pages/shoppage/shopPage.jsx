import React from "react";

// Data Import
import SHOP_DATA from "../../../assets/shop.data";
//  other Component Import
import ShopTypeCollection from "./shopTypeCollection";
// Style Import
import "./shopPage.styles.css";

class ShopPage extends React.Component {
  state = {
    db: SHOP_DATA
  };

  render() {
    const { db } = this.state;

    return (
      <div className="shop-page">
        {db.map(collection => (
          <ShopTypeCollection key={collection.id} collection={collection} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
